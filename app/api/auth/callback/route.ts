import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    client_id: process.env.ML_CLIENT_ID ?? "NO_CLIENT_ID",
    client_secret: process.env.ML_CLIENT_SECRET ? "OK_SECRET" : "NO_SECRET",
    redirect_uri: process.env.ML_REDIRECT_URI ?? "NO_REDIRECT",
  });
}