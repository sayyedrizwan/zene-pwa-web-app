import { json } from "@sveltejs/kit";

export async function GET() {
  const jsonData = {
    ios: {
      appVersion : "2.06.528"
    },
    android: {
      appVersion : "3.02.757"
    }
  };

  return json(jsonData);
}
