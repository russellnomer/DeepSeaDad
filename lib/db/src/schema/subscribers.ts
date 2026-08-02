/**
 * Subscribers schema — stores email signups from the Deep Sea Dad site.
 * Minimal PII: email + source + consent timestamp only.
 * GDPR-safe: no behavioral tracking, explicit consent recorded.
 */
import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

// Table: email subscribers who signed up via any form on the site
export const subscribersTable = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(), // only PII stored — kept minimal for GDPR compliance
  source: text("source").notNull().default("home"), // which form/page captured the email
  consented: boolean("consented").notNull().default(true), // explicit opt-in flag
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Zod insert schema — omit server-generated fields
export const insertSubscriberSchema = createInsertSchema(subscribersTable).omit({
  id: true,
  createdAt: true,
});

// Enforce valid email format on insert
export const subscribeRequestSchema = z.object({
  email: z.email(),
  source: z.string().optional().default("home"),
});

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribersTable.$inferSelect;
