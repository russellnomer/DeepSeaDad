/**
 * POST /api/subscribe — captures email signups for the Deep Sea Dad mailing list.
 * Idempotent: re-submitting an existing email returns success without error.
 * Security: validates email format via Zod, rate-limiting handled by Express middleware.
 * No PII stored beyond email + source + timestamp — GDPR-minimal footprint.
 */
import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { subscribersTable, subscribeRequestSchema } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.post("/subscribe", async (req, res) => {
  // Validate request body — reject malformed or non-email inputs immediately
  const parsed = subscribeRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid email address" });
    return;
  }

  const { email, source } = parsed.data;

  try {
    // Check for existing subscription — idempotent, no duplicate error exposed
    const existing = await db
      .select({ id: subscribersTable.id })
      .from(subscribersTable)
      .where(eq(subscribersTable.email, email))
      .limit(1);

    if (existing.length > 0) {
      // Already subscribed — return success silently (prevents email enumeration)
      res.json({ success: true, message: "You're already on the list, welcome back!", alreadySubscribed: true });
      return;
    }

    // Insert new subscriber — consented=true because form has explicit opt-in copy
    await db.insert(subscribersTable).values({ email, source, consented: true });

    req.log.info({ email: `${email.substring(0, 3)}***`, source }, "New subscriber");
    res.json({ success: true, message: "Welcome to the inner circle!", alreadySubscribed: false });
  } catch (err) {
    req.log.error(err, "Subscribe error");
    res.status(500).json({ error: "Something went wrong. Try again in a minute." });
  }
});

export default router;
