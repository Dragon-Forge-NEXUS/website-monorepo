/* eslint-disable react/display-name */
import { json } from "@remix-run/node";

export const loader = async () => {
  throw json({}, { status: 404 });
}

export default function () {
  return null;
}