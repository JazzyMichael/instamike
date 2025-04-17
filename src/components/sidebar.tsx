import {
  Home,
  HomeIcon,
  Briefcase,
  BriefcaseIcon,
  Folder,
  FolderIcon,
  Settings,
  SettingsIcon,
  Cat,
  CatIcon,
  Instagram,
  Github,
  MoreHorizontal,
} from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, filledIcon: HomeIcon, path: "/" },
  { name: "Work", icon: Briefcase, filledIcon: BriefcaseIcon, path: "/work" },
  { name: "Projects", icon: Folder, filledIcon: FolderIcon, path: "/projects" },
  { name: "Skills", icon: Settings, filledIcon: SettingsIcon, path: "/skills" },
  { name: "Cat", icon: Cat, filledIcon: CatIcon, path: "/cat" },
];

const bottomNavItems = [
  {
    name: "Instagram",
    icon: Instagram,
    filledIcon: Instagram,
    path: "/instagram",
  },
  { name: "Github", icon: Github, filledIcon: Github, path: "/github" },
  {
    name: "More",
    icon: MoreHorizontal,
    filledIcon: MoreHorizontal,
    path: "/more",
  },
];

export default function Sidebar({ pathname }: { pathname: string }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full md:w-20 lg:w-64 h-16 md:h-full lg:h-full bg-white border-gray-300 md:border-r lg:border-r z-10 flex md:flex-col justify-between md:justify-start lg:justify-start items-start px-4 md:px-0 lg:px-4 py-2 md:py-4 overflow-y-auto md:overflow-y-visible">
      {/* Logo */}
      <div className="hidden md:flex items-start justify-start h-12 w-full mb-4 pl-4">
        <svg
          viewBox="0 0 200 50"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <text
            x="0"
            y="32"
            fontFamily="cursive"
            fontSize="28"
            fontWeight="bold"
          >
            Instamike
          </text>
        </svg>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-2 w-full">
        {navItems.map(
          ({ name, icon: OutlineIcon, filledIcon: FilledIcon, path }) => {
            const isActive = pathname === path;
            const Icon = isActive ? FilledIcon : OutlineIcon;
            return (
              <a
                key={name}
                href={path}
                className={`hover:bg-gray-100 rounded-lg flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-1 lg:gap-4 text-lg py-2 w-full px-2 ${
                  isActive ? "font-semibold" : ""
                }`}
              >
                <Icon className="w-6 h-6" />
                <span
                  className={`hidden lg:inline ${isActive ? "font-bold" : ""}`}
                >
                  {name}
                </span>
              </a>
            );
          }
        )}
      </div>

      {/* Bottom Nav Items (md and up) */}
      <div className="hidden md:flex flex-col gap-2 w-full mt-auto">
        {bottomNavItems.map(
          ({ name, icon: OutlineIcon, filledIcon: FilledIcon, path }) => {
            const isActive = pathname === path;
            const Icon = isActive ? FilledIcon : OutlineIcon;
            return (
              <a
                key={name}
                href={path}
                className={`hover:bg-gray-100 rounded-lg flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-1 lg:gap-4 text-lg py-2 w-full px-2 ${
                  isActive ? "font-semibold" : ""
                }`}
              >
                <Icon className="w-6 h-6" />
                <span
                  className={`hidden lg:inline ${isActive ? "font-bold" : ""}`}
                >
                  {name}
                </span>
              </a>
            );
          }
        )}
      </div>
    </nav>
    // <nav className="fixed bottom-0 left-0 w-full md:w-20 lg:w-64 h-16 md:h-full lg:h-full bg-white border-t md:border-r lg:border-r z-10 flex md:flex-col justify-between md:justify-start lg:justify-start items-start px-4 md:px-0 lg:px-4 py-2 md:py-4">
    //   {/* Logo */}
    //   <div className="hidden md:flex items-start justify-start h-12 w-full mb-4 pl-4">
    //     <svg
    //       viewBox="0 0 200 50"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="currentColor"
    //     >
    //       <text
    //         x="0"
    //         y="32"
    //         fontFamily="cursive"
    //         fontSize="28"
    //         fontWeight="bold"
    //       >
    //         Instamike
    //       </text>
    //     </svg>
    //   </div>

    //   {/* Nav Items */}
    //   {navItems.map(({ name, icon: OutlineIcon, filledIcon: FilledIcon }) => {
    //     const Icon = name === activeItem ? FilledIcon : OutlineIcon;
    //     const isActive = name === activeItem;
    //     return (
    //       <a
    //         key={name}
    //         href={`${name.toLowerCase()}`}
    //         className={`hover:bg-gray-100 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-1 lg:gap-4 text-lg py-2 w-full md:w-full lg:w-full px-2 ${
    //           isActive ? "font-semibold" : ""
    //         }`}
    //       >
    //         <Icon className="w-6 h-6" />
    //         <span className={`hidden lg:inline ${isActive ? "font-bold" : ""}`}>
    //           {name}
    //         </span>
    //       </a>
    //     );
    //   })}

    //   {/* Bottom Nav Items (md and up) */}
    //   <div className="hidden md:flex flex-col gap-2 w-full mt-auto">
    //     {bottomNavItems.map(
    //       ({ name, icon: OutlineIcon, filledIcon: FilledIcon }) => {
    //         const Icon = name === activeItem ? FilledIcon : OutlineIcon;
    //         const isActive = name === activeItem;
    //         return (
    //           <a
    //             key={name}
    //             href={`#${name.toLowerCase()}`}
    //             className={`flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-1 lg:gap-4 text-sm py-2 w-full px-2 ${
    //               isActive
    //                 ? "text-black font-semibold"
    //                 : "text-gray-700 hover:text-black"
    //             }`}
    //           >
    //             <Icon className="w-6 h-6" />
    //             <span
    //               className={`hidden lg:inline ${isActive ? "font-bold" : ""}`}
    //             >
    //               {name}
    //             </span>
    //           </a>
    //         );
    //       }
    //     )}
    //   </div>
    // </nav>
  );
}
