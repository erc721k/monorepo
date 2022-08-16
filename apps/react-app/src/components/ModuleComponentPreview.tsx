import classNames from "classnames";
import * as React from "react";

interface ModuleComponentPreviewProps {
  className?: string;
  title?: string;
  code?: React.ReactNode;
  url?: string;
}

export const ModuleComponentPreview = ({
  className,
  title,
  code,
  url,
}: ModuleComponentPreviewProps) => {
  const containerClassName = classNames(
    className,
    "ModuleComponentPreview",
    "card"
  );
  return (
    <div className={containerClassName}>
      <div className="flex items-center justify-between">
        <h4 className="inline-block text-xl font-semibold">{title}</h4>
        <a className="inline-block" href={url} target="_blank">
          View Code
        </a>
      </div>
      <hr className="my-3 opacity-30" />
      <code>
        <pre className="">{code}</pre>
      </code>
    </div>
  );
};

export default ModuleComponentPreview;
