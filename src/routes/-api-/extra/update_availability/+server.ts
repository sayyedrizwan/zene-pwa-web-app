import { json } from "@sveltejs/kit";

export async function GET() {
  const jsonData = {
    ios: {
      appVersion : "2.06.437"
    },
    android: {
      appVersion : "3.2.724"
    }
  };

  return json(jsonData);
}
