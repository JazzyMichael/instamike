// export default function Card() {
//   return (
//     <div className="divide-y divide-gray-200 overflow-hidden bg-white shadow max-w-xl my-8 mx-auto">
//       <div className="px-4 py-5 sm:px-6">
//         {/* Content goes here */}
//         {/* We use less vertical padding on card headers on desktop than on body sections */}
//       </div>
//       <div className="px-4 py-5 sm:p-6">{/* Content goes here */}</div>
//       <div className="px-4 py-4 sm:px-6">
//         {/* Content goes here */}
//         {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
//       </div>
//     </div>
//   );
// }
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

export default function Card({
  post,
}: {
  post: {
    profilePic: string;
    username: string;
    image: string;
    likes: number;
    comments: number;
  };
}) {
  return (
    <div className="border-b-1 border-gray-300 pb-8 m-8 bg-white w-lg max-w-screen mx-auto">
      {/* Profile Section */}
      <Example />
      {/* <div className="flex items-center p-4">
        <img
          className="w-10 h-10 rounded-full mr-3"
          src={post.profilePic}
          alt="profile"
        />
        <span className="font-bold text-sm">{post.username}</span>
      </div> */}

      {/* Post Image Section */}
      <div className="w-full h-72 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={post.image}
          alt="post"
        />
      </div>

      {/* Interaction Section */}
      <div className="p-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Like
        </button>
        <div className="mt-2 text-sm text-gray-500">
          <span>{post.likes} likes</span>
          <span className="block">{post.comments} comments</span>
        </div>
      </div>
    </div>
  );
}

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  // {
  //   name: 'Michael Foster',
  //   email: 'michael.foster@example.com',
  //   role: 'Co-Founder / CTO',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   href: '#',
  //   lastSeen: '3h ago',
  //   lastSeenDateTime: '2023-01-23T13:23Z',
  // },
  // {
  //   name: 'Dries Vincent',
  //   email: 'dries.vincent@example.com',
  //   role: 'Business Relations',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   href: '#',
  //   lastSeen: null,
  // },
  // {
  //   name: 'Lindsay Walton',
  //   email: 'lindsay.walton@example.com',
  //   role: 'Front-end Developer',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   href: '#',
  //   lastSeen: '3h ago',
  //   lastSeenDateTime: '2023-01-23T13:23Z',
  // },
  // {
  //   name: 'Courtney Henry',
  //   email: 'courtney.henry@example.com',
  //   role: 'Designer',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   href: '#',
  //   lastSeen: '3h ago',
  //   lastSeenDateTime: '2023-01-23T13:23Z',
  // },
  // {
  //   name: 'Tom Cook',
  //   email: 'tom.cook@example.com',
  //   role: 'Director of Product',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   href: '#',
  //   lastSeen: null,
  // },
];

function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              alt=""
              src={person.imageUrl}
              className="size-12 flex-none rounded-full bg-gray-50"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">
                <a href={person.href} className="hover:underline">
                  {person.name}
                </a>
              </p>
              <p className="mt-1 flex text-xs/5 text-gray-500">
                <a
                  href={`mailto:${person.email}`}
                  className="truncate hover:underline"
                >
                  {person.email}
                </a>
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-6">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
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
              )}
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
                    View profile<span className="sr-only">, {person.name}</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                  >
                    Message<span className="sr-only">, {person.name}</span>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
  );
}
