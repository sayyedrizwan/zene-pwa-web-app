export const ssr = true;
export const csr = true;
export const prerender = false;

export async function load({ params }) {
  const date = btoa(Date.now().toString()).replaceAll("==", "");

  return { i: date };
}
