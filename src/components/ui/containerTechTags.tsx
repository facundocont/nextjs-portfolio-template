import React from "react";

interface Props {
  tags: string[];
}

function ContainerTechTags({ tags }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 select-none">
      {tags.map((tag) => (
        <div className="badge badge-error" key={tag}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default ContainerTechTags;
