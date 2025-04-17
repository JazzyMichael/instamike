"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import {
  EllipsisVerticalIcon,
  HeartIcon,
  BookmarkIcon,
} from "@heroicons/react/20/solid";

import {
  HeartIcon as HeartIconOutline,
  PaperAirplaneIcon as PaperAirplaneIconOutline,
  BookmarkIcon as BookmarkIconOutline,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Card({
  data,
}: {
  data: {
    company: string;
    companyName: string;
    title: string;
    startDate: string; // ISO 8601 format, e.g., "2023-10-01"
    endDate: string | null;
    date: string; // Redundant, but included for compatibility
    image: string; // URL to the job-related image
    companyImage: string; // URL to the company logo or avatar
    description: string;
  };
}) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="border-b-1 border-gray-300 pb-8 m-8 bg-white w-lg max-w-screen mx-auto">
      {/* Profile Section */}
      {/* <Header /> */}

      <div className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <img
            alt=""
            src={data.companyImage}
            className="size-12 flex-none rounded-full bg-gray-50"
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm/6 font-semibold text-gray-900">
              <a href="#" className="hover:underline">
                {data.companyName}
              </a>
            </p>
            <p className="mt-1 flex text-xs/5 text-gray-500">
              <a href={`#`} className="truncate hover:underline">
                {data.description}
              </a>
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-x-6">
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm/6 text-gray-900">{data.title}</p>
            <p className="mt-1 text-xs/5 text-gray-500">{data.startDate}</p>
            {/* {person.lastSeen ? (
                <p className="mt-1 text-xs/5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="size-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs/5 text-gray-500">Online</p>
                </div>
              )} */}
          </div>
          <Menu as="div" className="relative flex-none">
            <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900 cursor-pointer">
              <span className="sr-only">Open options</span>
              <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                >
                  View profile
                  <span className="sr-only">, {data.companyName}</span>
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                >
                  Message<span className="sr-only">, {data.companyName}</span>
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>

      {/* Post Image Section */}
      <div className="w-full h-72 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt="post"
        />
      </div>

      <div className="py-3 flex gap-2">
        {liked ? (
          <HeartIcon
            className="size-7 cursor-pointer"
            onClick={() => setLiked((x) => !x)}
          />
        ) : (
          <HeartIconOutline
            className="size-7 cursor-pointer"
            onClick={() => setLiked((x) => !x)}
          />
        )}
        <PaperAirplaneIconOutline className="size-7 cursor-pointer" />
        {bookmarked ? (
          <BookmarkIcon
            className="size-7 ml-auto cursor-pointer"
            onClick={() => setBookmarked((x) => !x)}
          />
        ) : (
          <BookmarkIconOutline
            className="size-7 ml-auto cursor-pointer"
            onClick={() => setBookmarked((x) => !x)}
          />
        )}
      </div>

      <div className="text-sm">
        <span className="font-bold">{liked ? 246 : 245} likes</span>
        <span className="block text-gray-500">70 comments</span>
      </div>
    </div>
  );
}
