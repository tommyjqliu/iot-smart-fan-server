import './globals.css';

import Link from 'next/link';
import { SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
import { User } from './user';
import { NavItem } from './nav-item';
import { AirVent, Joystick } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className="h-screen w-full relative bg-gradient-to-r from-cyan-500 to-blue-500">
          <header className='absolute p-4 z-3'>
            <Link
              className="flex items-center gap-2 font-semibold text-white"
              href="/"
            >
              <AirVent />
              <span className="">Smart Fan</span>
            </Link>
          </header>
          <div className='flex justify-center h-full overflow-auto'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

const originSidebar = (
  <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-5">
        <Link
          className="flex items-center gap-2 font-semibold"
          href="/"
        >
          <AirVent />
          <span className=""> Smart Fan</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          <NavItem href="/">
            <Joystick className="h-4 w-4" />
            Control
          </NavItem>
          <NavItem href="/users">
            <UsersIcon className="h-4 w-4" />
            Users
          </NavItem>
          <NavItem href="/settings">
            <SettingsIcon className="h-4 w-4" />
            Settings
          </NavItem>
          <NavItem href="https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs">
            <VercelLogo className="h-4 w-4" />
            Deploy
          </NavItem>
        </nav>
      </div>
    </div>
  </div>
)
const originHeader = (
  <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
    <Link
      className="flex items-center gap-2 font-semibold lg:hidden"
      href="/"
    >
      {/* <AirVent />
                <span className="">Smart Fan</span> */}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <AirVent />
            <span className=""> Smart Fan</span>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/"
              >
                {' '}
                <Joystick className="h-4 w-4" />
                Control
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/users"
              >
                <UsersIcon className="h-4 w-4" />
                Users
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/settings"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs"
              >
                <VercelLogo className="h-4 w-4" />
                Deploy
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Link>
    <User />
  </header>
)