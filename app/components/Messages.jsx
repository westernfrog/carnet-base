"use client";

import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const message = [
  {
    name: "Alice",
    message: "Hey, how are you doing today?",
    profile_pic:
      "https://images.unsplash.com/photo-1657623618689-6687d2502a9b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1864",
  },
  {
    name: "Bob",
    message: "I just finished reading a great book. Want to hear about it?",
    profile_pic:
      "https://images.unsplash.com/photo-1646179043081-80f0593883d5?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2072",
  },
  {
    name: "Charlie",
    message: "I'm running a bit late, but I'll be there in 15 minutes.",
    profile_pic:
      "https://images.unsplash.com/photo-1523899567702-a45a070b0b3b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2068",
  },
  {
    name: "David",
    message: "Do you have any recommendations for a good restaurant in town?",
    profile_pic:
      "https://images.unsplash.com/photo-1545832063-74f2d924b61a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
  },
  {
    name: "Eve",
    message:
      "I had a fantastic time at the concert last night. The band was amazing!",
    profile_pic:
      "https://images.unsplash.com/photo-1502720433255-614171a1835e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
  },
  {
    name: "Frank",
    message: "Can you pick up some groceries on your way home, please?",
    profile_pic:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
  },
  {
    name: "Grace",
    message: "I'm so excited about our upcoming trip! Have you packed yet?",
    profile_pic:
      "https://images.unsplash.com/photo-1588915185166-695a8fe49793?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1888",
  },
  {
    name: "Henry",
    message:
      "It's been a long day, but I'm finally done with work. Let's catch up.",
    profile_pic:
      "https://images.unsplash.com/photo-1696855179885-216725c8f4dc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974",
  },
  {
    name: "Isabel",
    message: "I just adopted a new puppy. She's the cutest thing ever!",
    profile_pic:
      "https://images.unsplash.com/photo-1697297937792-ec7c0adf6c16?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1932",
  },
  {
    name: "Jack",
    message: "The weather is beautiful today. Let's go for a walk later.",
    profile_pic:
      "https://images.unsplash.com/photo-1697369975788-4c330f46b0da?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071",
  },
  {
    name: "Katie",
    message: "I aced my presentation at work! Celebration tonight?",
    profile_pic:
      "https://images.unsplash.com/photo-1697325705595-84ce49985e34?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887",
  },
];

export default function Messages(params) {
  const router = usePathname();
  return (
    <>
      <section
        className={`relative lg:col-span-4 row-span-16 lg:rounded-2xl bg-violet-950/90/5 lg:flex flex-col ${
          router == "/chat" ? "hidden" : ""
        }`}
      >
        <div className="hidden lg:flex items-center justify-between gap-4 lg:px-6 lg:py-4 px-5 py-4 shadow lg:bg-violet-950/90 rounded-t-2xl lg:text-white">
          <h1 className="text-lg font-medium">People</h1>
          <button className="flex-shrink-0 lg:bg-black/30 bg-violet-950/90 px-3 py-2.5 rounded-2xl text-green-400 text-sm font-medium lg:shadow lg:hover:bg-white/30 transition duration-300 ease-in-out flex items-center gap-2">
            <UserIcon className="w-4 h-4" />8 Online
          </button>
        </div>
        <div className="divide-y divide-black/10 overflow-auto h-full">
          {message.map((item, index) => (
            <Link
              key={index}
              href="/chat"
              className="relative flex items-center gap-4 p-5 hover:bg-violet-950/90/10 transition duration-500 ease-in-out pe-20"
            >
              <Image
                src={item.profile_pic}
                width={50}
                height={50}
                alt="Profile Picture"
                className="w-12 h-12 object-cover object-center rounded-full ring-2 ring-violet-950/90 flex-shrink-0"
              />
              <div className="flex flex-col text-sm">
                <h1 className="font-semibold">{item.name}</h1>
                <p className="text-black/90">{item.message.slice(0, 50)}...</p>
              </div>
              <span className="absolute right-8 w-2 h-2 bg-rose-500 rounded-full"></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
