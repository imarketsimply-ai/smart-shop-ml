import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return Response.json({
      success: false,
      error: "❌ No se recibió código de autorización",
    });
  }

  return Response.json({
    success: true,
    code,
  });
}