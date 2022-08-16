import * as React from "react";
import classNames from "classnames";

interface IsMountedProps {
  className?: string;
  children: React.ReactNode;
}

export const IsMounted = ({ className, children }: IsMountedProps) => {
  const containerClassName = classNames(className, "IsMounted");
  const [isMounted, setIsMounted] = React.useState<boolean>();
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return <div className={containerClassName}>{isMounted && children}</div>;
};

export default IsMounted;
