import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  let body;
  try { body = await req.json(); }
  catch { return new Response("Invalid JSON", { status: 400 }); }

  const { id } = body;
  if (!id) return new Response("Missing id", { status: 400 });

  const store = getStore("outreach-data");
  const contacts = (await store.get("contacts", { type: "json", consistency: "strong" })) || [];
  await store.set("contacts", JSON.stringify(contacts.filter(c => c.id !== id)));

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
};
