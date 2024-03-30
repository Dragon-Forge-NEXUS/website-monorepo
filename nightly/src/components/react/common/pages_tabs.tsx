import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    "Discord Servers": [
      {
        id: 1,
        title: "DFN",
        href: "/discord",
      },
      {
        id: 2,
        title: "Code",
        href: "https://code.dragonforgenexus.xyz/discord",
      },
    ],
    Socials: [
      {
        id: 1,
        title: "X",
        href: "https://twitter.com/@DRAGONFNEXUS",
      },
      {
        id: 2,
        title: "Mastodon",
        href: "https://mastodon.social/@DRAGONFORGENEXUS",
      },
      {
        id: 3,
        title: "GitHub",
        href: "https://github.com/Dragon-Forge-NEXUS",
      },
    ],
  });

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-slate-300 dark:bg-slate-900 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-slate-200 dark:bg-slate-800 text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-slate-300 dark:bg-slate-900 d p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-slate-200 dark:hover:bg-slate-800"
                  >
                    <h3 className="text-sm font-medium leading-5 after:content-['_↗'] text-center">
                      {post.title}
                    </h3>

                    <a
                      href={post.href}
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2",
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
