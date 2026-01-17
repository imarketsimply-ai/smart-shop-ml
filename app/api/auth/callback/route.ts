import { exchangeCodeForToken } from "@/app/lib/mercadolibre-oauth";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return new Response(
      "<h1>❌ No se recibió código de autorización</h1>",
      { headers: { "Content-Type": "text/html" } }
    );
  }

  try {
    const tokenData = await exchangeCodeForToken(code);

    return new Response(
      `
      <h1 style="font-family:sans-serif;color:green">
        ✅ SMART SHOP ML conectado correctamente
      </h1>
      <p>Access Token generado.</p>
      <p>User ID: ${tokenData.user_id}</p>
      <p>Ya puedes cerrar esta ventana.</p>
      `,
      { headers: { "Content-Type": "text/html" } }
    );
  } catch (error) {
    return new Response(
      "<h1>❌ Error al generar tokens</h1>",
      { headers: { "Content-Type": "text/html" } }
    );
  }
}
