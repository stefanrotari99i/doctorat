export async function POST(request: Request) {
  try {
    const text = await request.text();
    console.log("Received payload:", text);
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
