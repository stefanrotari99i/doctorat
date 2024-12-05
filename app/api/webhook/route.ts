export async function POST(request: Request) {
  try {
    const text = await request.text();
    console.log("Received payload:", text);
  } catch (error) {
    const errorMessage = (error as Error).message;
    return new Response(`Webhook error: ${errorMessage}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
