export async function exchangeCodeForToken(code: string) {
  const res = await fetch("https://api.mercadolibre.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: process.env.ML_CLIENT_ID!,
      client_secret: process.env.ML_CLIENT_SECRET!,
      code,
      redirect_uri: process.env.ML_REDIRECT_URI!,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("OAuth ML error:", data);
    throw new Error("Error al intercambiar code por token");
  }

  return data;
}
