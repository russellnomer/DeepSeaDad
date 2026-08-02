const JOKES = [
  "Why don't fish play piano? Because you can't tuna fish!",
  "What do you call a fish with no eyes? Fsh.",
  "Why did the fisherman go to school? To improve his net worth!",
  "What did the fish say when he swam into a wall? Dam.",
  "Why are fish so smart? Because they live in schools!",
  "What do you get when you cross a fishing lure with a gym sock? A hook, line, and stinker!",
  "How do you communicate with a fish? You drop it a line.",
  "What's the difference between a piano and a fish? You can tune a piano, but you can't tuna fish!",
  "Why did the fish blush? Because it saw the ocean's bottom.",
  "What do you call a fish that needs help with its vocals? Autotuna.",
];

export function getRandomJoke(): string {
  return JOKES[Math.floor(Math.random() * JOKES.length)];
}
