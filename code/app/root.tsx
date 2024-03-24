import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import stylesheet from "~/styles/tailwind.css?url";
import { canUseDOM } from "./ui/primitives/utils";
import { Footer } from "~/ui/footer";
// import { SpeedInsights } from "@vercel/speed-insights/remix"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel:"manifest", href:"/manifest.webmanifest" },
  { rel:"sitemap", href:"/sitemap-index.xml" }, // Generate the sitemap with https://www.xml-sitemaps.com then update sitemap.xml NOT sitemap-index.xml
];

export default function App() {
  return (
    <html lang="en" className=" bg-gradient-to-b min-h-screen from-dragonforge-code-650 to-dragonforge-code-500">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className=" min-h-screen drawer">
          <input id="categories" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            {/* <SpeedInsights/> */}
          </div> 
          <div className="drawer-side">
            <label htmlFor="categories" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li><a href="/html">HTML</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (!canUseDOM) {
    console.error(error);
  }

  if (isRouteErrorResponse(error)) {
    return (
      <div className="bg-gradient-to-tl min-h-screen from-dragonforge-code-650 to-dragonforge-code-400">
      <Links />
        <div className="flex flex-1 flex-col justify-center text-white">
          <div className="text-center leading-none">
            <h1 className="font-mono text-[25vw]">{error.status}</h1>
            <a
              className="inline-block text-[8vw] underline"
              href={`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${error.status}`}
            >
              {error.statusText}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br min-h-screen from-dragonforge-code-650 to-dragonforge-code-400">
      <div className="flex flex-1 flex-col justify-center text-white">
        <div className="text-center leading-none">
          <h1 className="text-[25vw]">Error</h1>
          <div className="text-3xl">
            Something went wrong! Please try again later.
          </div>
        </div>
      </div>
      </div>
  );
}