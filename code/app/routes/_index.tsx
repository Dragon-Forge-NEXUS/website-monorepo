import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/ui/header";

export const meta: MetaFunction = () => {
  return [
    { title: "DragonForgeCode" },
    { name: "description", content: "Welcome to DragonForgeCode!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container mx-auto m-5 prose min-h-screen">
        <h1>DragonForgeCode</h1>
        <p>By DragonForgeNEXUS</p>
        <hr />
        <br />
        <h2>DragonForgeCode: Why Not W3Schools or Another Alternative?</h2>
        <p>Use them! They are amazing tools. The only reason this exists is because of the ads on the other sites. DragonForgeCode will <code className="text-red-500">never have ads</code>.</p>
        <p>DragonForgeCode is also open-source (OSS) under the MIT License, meaning that if something is off, you can make a PR to fix it, or create an issue on GitHub.</p>
        <p>DragonForgeCode is also built off of the infromation on those sites, you will see a lot of the same setup as sites like W3Schools. As we expand working and setup will be changing a lot.</p>
        <hr />
        <br />
        <h2>Features</h2>
        <h3>Apps</h3>
        <p>DragonForgeCode will have an app available shortly after release. You may also use PWA to use this site as an app on release (technically now if you want to!).</p>
        <h3>EDU Version</h3>
        <p>If you&apos;re a teacher and want DragonForgeCode to be usable in class, we will be launching with an EDU version of the site that has no external links and uses our own video hosting.</p>
        <h3>Open Source Software (OSS)</h3>
        <p>DragonForgeCode is and will be fully open-source under the MIT license. The only thing that won&apos;t be will be the app&apos;s code.</p>
        <hr />
        <br />
        <h2>What to Expect</h2>
        <p>Along with the above, we will be launching with HTML, CSS, and JS on day one. Below are our current plans.</p>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-5 w-5"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">4/11/2024</time>
              <div className="text-lg font-black">Release</div>
              On release, we will have HTML, CSS, and JS, as well as the EDU site.
            </div>
            <hr/>
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-5 w-5"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">6/1/2024</time>
              <div className="text-lg font-black">More Guides and Tutorials</div>
              This launch will include Astro, Tailwind, Bootstrap, TS, and our first tools! this is to be the biggest update of the year after the release.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-5 w-5"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">TBD</time>
              <div className="text-lg font-black">App Release</div>
              We will be releasing the app for this site on a date that is TBD. Please use the PWA feature to install this site.
            </div>
            <hr />
          </li>
        </ul>
        <p>That is the current timeline for this year.</p>
      </div>
    </div>
  );
}
