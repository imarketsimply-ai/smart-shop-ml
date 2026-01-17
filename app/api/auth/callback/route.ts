export async function GET() {
  return new Response(
    "<h1 style='font-family:sans-serif'>🔥 CALLBACK NUEVO ACTIVO 🔥</h1>",
    { headers: { "Content-Type": "text/html" } }
  );
}