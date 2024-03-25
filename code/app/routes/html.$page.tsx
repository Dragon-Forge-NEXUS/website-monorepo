import type { MetaFunction } from "@remix-run/node";
import { Markdown } from "~/ui/markdown";
import { useEffect, useState } from "react";
import { redirect, useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { page } = useParams();
  return [
    { title: `HTML ${page} | DFC` },
    { name: "description", content: `Welcome to DragonForgeCode! HTML ${page}` },
  ];
};

export default function Index() {
  const { page } = useParams();
  const filePath = `/md/html/${page?.toLowerCase()}.md`;
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    async function fetchMarkdownContent() {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error('Failed to fetch Markdown content');
        }
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error('Error fetching Markdown content:', error);
      }
    }
    if (page?.toLowerCase() === 'home' || page?.toLowerCase() === 'index') {
      redirect("/html");
    }else{
      fetchMarkdownContent();
      setInterval(fetchMarkdownContent, 5);
    }
  }, [filePath, page]);
  return (
    <div>
      <Markdown content={markdownContent} />
    </div>
  );
}