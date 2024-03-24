import { Outlet } from "@remix-run/react";
import { Header } from "~/ui/special/header";

export default function Index() {
  return (
    <>
      <Header />
      <div className="drawer md:drawer-open">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="m-5 prose prose-gray">
            <Outlet />
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content overscroll-contain overflow-y-auto">
            {/* Sidebar content here */}
            <p>HTML Tutorial</p>
            <li><a href="/html">Home</a></li>
            <li><a href="/html/introduction">Introduction</a></li>
            <li><a href="/html/editors">Editors</a></li>
            <li><a href="/html/basics">Basics</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
