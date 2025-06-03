import { openRouterClient } from "@/lib/openRouterclient";

export async function chatWithIA(message: string) {
  const completion = await openRouterClient.chat.completions.create({
    model: "deepseek/deepseek-r1-0528:free",
    messages: [
      {
        role: "user",
        content: message
      }
    ],
  });

  return completion.choices[0].message;
}
