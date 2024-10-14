import { json } from "@sveltejs/kit";

export async function GET() {
  const jsonData = {
    ios: {
      appVersion : "2.06.506"
    },
    android: {
      appVersion : "3.02.762"
    }
  };

  return json(jsonData);
}
