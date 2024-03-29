import { parse } from "marked";

export function Markdown({ content }: { content: string }) {
  const html = parse(content);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
