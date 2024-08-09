const ALGORITHM = "AES-CBC";
const KEY = new TextEncoder().encode("zene_rizwan_app0");
const IV = new Uint8Array(16);

export async function decryptSharingData(cipherText: string): Promise<string> {
  const v = cipherText.replace(/__/g, "/");
  try {
    const key = await crypto.subtle.importKey("raw", KEY, ALGORITHM, false, ["decrypt"]);

    const decrypted = await crypto.subtle.decrypt(
      { name: ALGORITHM, iv: IV },
      key,
      Uint8Array.from(atob(v), (c) => c.charCodeAt(0))
    );

    return new TextDecoder().decode(decrypted);
  } catch (e) {
    return "";
  }
}
