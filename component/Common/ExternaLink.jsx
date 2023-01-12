import { Children } from "react";

export default function ({ href, name, title }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
      {name}
    </a>
  );
}
