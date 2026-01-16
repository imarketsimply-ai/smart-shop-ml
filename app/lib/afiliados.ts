export const AFILIADO_PARAM = "escobarluis20220707172231ING_REAL";

export function buildAffiliateLink(url: string) {
  if (!url) return "#";

  if (url.includes("?")) {
    return `${url}&matt_tool=${AFILIADO_PARAM}`;
  }

  return `${url}?matt_tool=${AFILIADO_PARAM}`;
}
