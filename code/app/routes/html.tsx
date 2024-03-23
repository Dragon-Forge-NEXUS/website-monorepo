import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex">
      <div className="basis-1/6 bg-base-100 h-screen">

      </div>
      <div className="basis-5/6">
        <div className="m-5 prose md:prose-lg lg:prose-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
