// app/api/hello/route.ts
export async function GET(request: Request) {
  // Your logic here
  return new Response(JSON.stringify({ message: 'Hello World' }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
