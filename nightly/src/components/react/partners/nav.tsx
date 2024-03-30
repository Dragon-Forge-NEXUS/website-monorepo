import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Tabs from "../common/pages_tabs";

const solutions = [
  {
    name: "The NEXUS",
    description: "DragonForgeNEXUS",
    href: "/",
    icon: IconOne,
  },
  {
    name: "DragonForgeCode",
    description:
      "DragonforgeCode has multible subpages including: Code Tutorials, Code Librarys, And more!",
    href: "/code",
    icon: IconOne,
  },
  {
    name: "Blog",
    description: "DragonForgeNEXUS' Blog",
    href: "/blog",
    icon: IconTwo,
  },
  {
    name: "Partners",
    description: "DragonForgeNEXUS' Partnerships",
    href: "/partners",
    icon: IconThree,
  },
];

export default function Nav() {
  return (
    <div className="relative">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "dark:text-slate-300 text-slate-900 " : "dark:text-slate-300/90 text-slate-900/90"}
                group inline-flex items-center rounded-md bg-slate-300 dark:bg-slate-900 px-3 py-2 text-base font-medium dark:hover:text-slate-300 hover:text-slate-900  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition ease-in-out delay-150 duration-300`}
            >
              <span>Pages</span>
              <ChevronDownIcon
                className={`${open ? "dark:text-slate-300 text-slate-900" : "dark:text-slate-300/70 text-slate-900/70"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out dark:group-hover:text-slate-300 group-hover:text-slate-900/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-full z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="bg-slate-200 dark:bg-slate-800 p-4">
                    <div className="space-x-1 rounded-xl bg-slate-300 dark:bg-slate-900 p-7 relative grid gap-8 lg:grid-cols-2">
                      <a
                        href="/partners/fyts"
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        FYTS
                      </a>
                    </div>
                  </div>
                  <div className="relative grid gap-8 bg-slate-200 dark:bg-slate-800 p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-300 dark:hover:bg-slate-900 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50 "
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-300">
                            {item.name}
                          </p>
                          <p className="text-sm text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-slate-200 dark:bg-slate-800 p-4">
                    <Tabs />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
