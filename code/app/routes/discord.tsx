import { redirect } from "@remix-run/node";

export const loader = async () => {
  return redirect("https://discord.gg/tFGNCmGtUH", 303);
}