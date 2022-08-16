import { ReactNode } from "react";

import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

interface IMenuItemSidebar {
  label: string;
  href: string;
  image?: ReactNode;
  labelStyle?: string;
  iconStyle?: string;
  defaultStyle?: boolean;
}

export const MenuItemSidebar = ({
  label,
  href,
  image,
  labelStyle,
  iconStyle,
}: IMenuItemSidebar) => {
  const router = useRouter();
  const isMatch = router.pathname.match(href);
  const isExactMatch = isMatch ? isMatch[0] === router.pathname : false;
  const styleItem = classnames("items-center cursor-pointer px-3 py-0");
  const styleBase = classnames("flex items-center justify-between");

  const styleLabel = classnames(
    "text-baseline uppercases py-2 block",
    labelStyle,
    {
      "text-sky-500 hover:text-sky-600": isExactMatch,
      "text-blueGray-700 hover:text-blueGray-500": !isExactMatch,
    }
  );

  const styleIcon = classnames("mr-0 text-sms", iconStyle, {
    "opacity-75": isExactMatch,
    "text-blueGray-300": !isExactMatch,
  });

  return (
    <li className={styleItem}>
      <Link passHref href={href}>
        <span className={styleBase}>
          <span className={styleLabel}>{label}</span>{" "}
          <span className={styleIcon}>{image}</span>
        </span>
      </Link>
    </li>
  );
};

export default MenuItemSidebar;
