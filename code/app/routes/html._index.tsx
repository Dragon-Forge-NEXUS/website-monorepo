import type { MetaFunction } from "@remix-run/node";
import { Markdown } from "~/ui/markdown";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const filePath = "/md/html/index.md";
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    async function fetchMarkdownContent() {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Failed to fetch Markdown content");
        }
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error("Error fetching Markdown content:", error);
      }
    }
    fetchMarkdownContent();
  }, [filePath]);
  return (
    <div>
      <Markdown content={markdownContent} />
    </div>
  );
}
