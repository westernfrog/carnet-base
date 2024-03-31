"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  BellIcon,
  Cog8ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  ChatBubbleOvalLeftIcon,
  Bars2Icon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Messages", href: "/chat", icon: ChatBubbleOvalLeftIcon },
  { name: "Alerts", href: "/alerts", icon: BellIcon },
  { name: "Settings", href: "/settings", icon: Cog8ToothIcon },
  {
    name: "Github",
    href: "https://github.com/westernfrog/carnetbase",
    icon: GitHubLogoIcon,
  },
];

export default function Navbar() {
  const router = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <header
        className={`lg:col-span-1 lg:row-span-14 row-span-2 lg:rounded-2xl bg-purple-900 lg:block ${
          router == "/chat" ? "hidden" : ""
        }`}
      >
        <nav className="flex lg:flex-col flex-row items-center justify-between gap-3 p-4 h-full">
          <Link
            href="/"
            className="flex-shrink-0 bg-black/30 p-2 rounded-2xl hover:bg-white/30 shadow transition duration-300 ease-in-out min-w-fit"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2926/2926754.png"
              width={50}
              height={50}
              alt="Profile Picture"
              className="w-8 h-8 object-cover object-center"
              priority
            />
          </Link>
          <div className="hidden lg:flex lg:flex-col flex-row items-center justify-center gap-3">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${
                  router == item.href ? "bg-white/30" : "bg-black/30"
                } p-3 rounded-2xl text-white shadow hover:bg-white/30 transition duration-300 ease-in-out`}
              >
                <item.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
          <button className="lg:hidden flex-shrink-0 px-4 py-3 rounded-2xl text-green-400 text-sm font-medium flex items-center gap-2">
            <UserIcon className="w-4 h-4" />8 Online
          </button>
          <button
            onClick={openModal}
            className="lg:hidden block flex-shrink-0 bg-black/30 p-2.5 rounded-2xl text-white shadow hover:bg-white/30 transition duration-300 ease-in-out"
          >
            <Bars2Icon className="w-6 h-6 fill-white" />
          </button>
          <button className="hidden lg:block flex-shrink-0 bg-rose-500 p-3 rounded-2xl text-white shadow hover:bg-rose-600 transition duration-300 ease-in-out">
            <ArrowLeftStartOnRectangleIcon className="w-6 h-6 fill-white" />
          </button>
        </nav>
      </header>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="xl:hidden relative z-10"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>
          <div className="fixed right-0 inset-y-6 mt-24 m-3 rounded-2xl overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col items-center justify-between gap-4 text-white">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`${
                        router == item.href
                          ? "bg-purple-900"
                          : "bg-purple-950/60"
                      } p-3 rounded-2xl backdrop-blur-3xl hover:bg-white/30 transition duration-300 ease-in-out`}
                    >
                      <item.icon className="w-6 h-6" />
                    </Link>
                  ))}
                  <button className="p-3.5 bg-rose-500 hover:bg-rose-400 transition duration-300 ease-in-out rounded-2xl shadow-xl">
                    <ArrowLeftStartOnRectangleIcon className="w-6 h-6" />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
