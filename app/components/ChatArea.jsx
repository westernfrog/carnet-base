import { InfoCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Message from "./Message";
import {
  ArrowLeftIcon,
  EllipsisVerticalIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const messages = [
  { sender: true, message: "Hi! How are you doing today?" },
  {
    sender: false,
    message: "Hello! I'm doing well, thank you. How about you?",
  },
  { sender: true, message: "I'm good, thanks for asking." },
  { sender: false, message: "That's great to hear!" },
  { sender: true, message: "What have you been up to lately?" },
  { sender: false, message: "Oh, nothing much. Just work and some reading." },
  { sender: true, message: "Sounds interesting. What are you reading?" },
  { sender: false, message: "I'm reading a mystery novel." },
  { sender: true, message: "Nice! Mystery novels can be quite captivating." },
  { sender: false, message: "Yes, they keep me hooked till the end." },
  { sender: true, message: "Do you have any plans for the weekend?" },
  { sender: false, message: "I'm thinking of going hiking. How about you?" },
  { sender: true, message: "I might catch up on some movies." },
  { sender: false, message: "That sounds relaxing." },
  { sender: true, message: "Indeed it does." },
  { sender: false, message: "Well, I should get going. Talk to you later!" },
  { sender: true, message: "Sure! Take care." },
  { sender: false, message: "You too! Bye!" },
  { sender: true, message: "Bye!" },
  {
    sender: false,
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates laborum, quibusdam ex tempore pariatur, impedit nihil obcaecati iste cumque quis odio nobis, enim fugit quam! Possimus alias consequatur dolorum!",
  },
  {
    sender: true,
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates laborum, quibusdam ex tempore pariatur, impedit nihil obcaecati iste cumque quis odio nobis, enim fugit quam! Possimus alias consequatur dolorum!",
  },
  {
    sender: true,
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptates laborum, quibusdam ex tempore pariatur, impedit nihil obcaecati iste cumque quis odio nobis, enim fugit quam! Possimus alias consequatur dolorum!",
  },
];

export default function ChatArea(params) {
  return (
    <>
      <section className="lg:col-span-9 lg:row-span-16 row-span-full rounded-2xl bg-purple-900/5 flex flex-col justify-center">
        <div className="flex items-center justify-between gap-4 lg:px-6 lg:py-3.5 px-5 lg:py-3.5 py-5 shadow bg-purple-900 lg:rounded-t-2xl lg:text-white">
          <Link href="/" className="lg:hidden block text-white">
            <ArrowLeftIcon className="w-6 h-6" />
          </Link>
          <div className="flex items-center justify-between lg:w-full gap-2">
            <div className="flex lg:flex-1">
              <Image
                src="https://images.unsplash.com/photo-1547460719-5bb9d93c46e3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={50}
                height={50}
                alt="Profile Picture"
                className="lg:w-7 lg:h-7 w-5 h-5 object-cover object-center rounded-full ring-2 ring-purple-100/50 flex-shrink-0"
              />
            </div>
            <h1 className="flex flex-1 text-lg font-medium text-white">
              Emily Willis
            </h1>
          </div>
          <button className="flex-shrink-0 lg:py-2.5 rounded-2xl text-white flex items-center gap-2">
            <EllipsisVerticalIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="shadow overflow-auto h-full px-8 py-6 pb-14 space-y-8">
          {messages.map((item, index) => (
            <Message key={index} sender={item.sender} message={item.message} />
          ))}
        </div>
        <form className="flex items-center justify-between gap-4 bg-white shadow lg:rounded-b-2xl px-6">
          <button className="flex-shrink-0 text-purple-900">
            <PlusCircleIcon className="w-8 h-8" />
          </button>
          <input
            type="text"
            className="w-full bg-transparent border-0 focus:ring-0 py-4"
            placeholder="Type your message here!"
          />
          <button className="flex-shrink-0 bg-black/40 p-2 rounded-2xl text-white hover:text-purple-900 text-sm font-medium lg:shadow lg:hover:bg-purple-900/40 transition duration-300 ease-in-out flex items-center gap-2">
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </form>
      </section>
    </>
  );
}
