import OpenAI from "openai";

const key = import.meta.env.VITE_OPENROUTER;

if (!key) {
  throw new Error("❌ Missing OPENROUTER_API_KEY in environment");
}

export const openRouterClient = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: key,
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    "HTTP-Referer": import.meta.env.SITE_URL || "",
    "X-Title": import.meta.env.SITE_NAME || "",
  },
});
