import { getStore } from "@netlify/blobs";

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  let body;
  try { body = await req.json(); }
  catch { return new Response("Invalid JSON", { status: 400 }); }

  const store = getStore("outreach-data");
  const contacts = (await store.get("contacts", { type: "json", consistency: "strong" })) || [];

  if (body.id) {
    const idx = contacts.findIndex(c => c.id === body.id);
    if (idx >= 0) contacts[idx] = body;
    else contacts.push(body);
  } else {
    body.id = `c_${Date.now()}`;
    contacts.push(body);
  }

  await store.set("contacts", JSON.stringify(contacts));
  return new Response(JSON.stringify({ ok: true, contact: body }), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
};
