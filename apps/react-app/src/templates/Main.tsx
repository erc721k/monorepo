import type { ReactNode } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { AppColorMode } from "@/components/App/AppColorMode";
import { AppConfig } from "@/utils/AppConfig";
import AppLogo from "@/components/App/AppLogo";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-white p-0 text-gray-700 antialiased dark:bg-gray-700 dark:text-white">
    {props.meta}
    <div className="min-h-vh mx-auto h-10 w-full">
      <div className="flex items-center justify-between border-b border-gray-300 px-8 py-4 dark:border-neutral-500 dark:bg-gray-700 dark:text-white">
        <div className=" align-center flex items-center justify-between">
          <AppLogo />
        </div>
        <div className="text-right">
          <ConnectButton accountStatus={{smallScreen: 'avatar', largeScreen: 'full'}} />
        </div>
      </div>

      <div className="content bg-neutral-100 dark:bg-neutral-500">
        {props.children}
      </div>

      <footer className="border-t border-gray-300 bg-white py-8 text-sm dark:border-neutral-500 dark:bg-gray-700 dark:text-white px-10">
        <div className='grid grid-cols-12 gap-4 text-center'>
          <div className="col-span-12">
            © Copyright {new Date().getFullYear()} {AppConfig.title}
          </div>
          <div className='col-span-12 text-center'>
            <AppColorMode className="" />
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export { Main };
