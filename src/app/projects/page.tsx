const projects = [
  {
    title: "XTrades",
    logo: "XTrades-Logo.png",
    link: "https://www.xtrades.net/",
    animation: "fade-up",
    description: "A gamified social app for stock and options trading.",
    image:
      "https://github.com/JazzyMichael/Portfolio/blob/main/public/projects/XTrades-Logo.png?raw=true",
  },
  {
    title: "BinderView",
    logo: "Pokecards-Logo.jpeg",
    link: "https://pokecards-app.web.app/",
    animation: "fade-up-right",
    description:
      "Elegant app to view Pokemon cards with filters and price analysis tools.",
    image:
      "https://raw.githubusercontent.com/JazzyMichael/BinderView/refs/heads/main/public/screenshots/binder-view.jpg",
  },
  {
    title: "The Art of Cooking Salmon",
    logo: "Salmon-Logo.jpeg",
    link: "https://theartofcookingsalmon.com/",
    animation: "fade-left",
    description:
      "Social network exclusively for salmon pictures and recipes built as a hybrid app.",
    image:
      "https://github.com/JazzyMichael/Portfolio/blob/main/public/projects/Salmon-Logo.jpeg?raw=true",
  },
  {
    title: "Essentials Anonymous",
    logo: "Essentials-Anonymous-Logo.jpeg",
    link: "https://essentialsanonymous.com/",
    animation: "zoom-in",
    description:
      "Anonymous social network for essential workers during the pandemic.",
    image:
      "https://raw.githubusercontent.com/JazzyMichael/essentials/refs/heads/master/icons/iOS/iTunesArtwork.png",
  },
  {
    title: "Carona Balona",
    logo: "Carona-Balona-Logo.jpeg",
    link: "https://caronabalona.com/",
    animation: "fade-right",
    description: "Covid stats visualizer and data analysis features.",
    image:
      "https://github.com/JazzyMichael/Portfolio/blob/main/public/projects/Carona-Balona-Logo.jpeg?raw=true",
  },
  {
    title: "Plebeian Marketplace",
    logo: "Plebeian-Logo.jpeg",
    link: "https://github.com/Jappzy/plebeian-deli",
    animation: "fade-down-left",
    description: "Marketplace for artists to sell their work.",
    image:
      "https://github.com/JazzyMichael/Portfolio/blob/main/public/projects/Plebeian-Logo.jpeg?raw=true",
  },
  {
    title: "Menu Mash",
    logo: "Menu-Mash-Logo.jpeg",
    link: "https://menumash.app/",
    animation: "fade-down",
    description:
      "'Tinder for food' app that jumbles menu items from local restaurants to swipe your way to your next meal!",
    image:
      "https://github.com/JazzyMichael/Portfolio/blob/main/public/projects/Menu-Mash-Logo.jpeg?raw=true",
  },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Projects
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative">
              <img
                alt={"Image"}
                src={project.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={project.link}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {project.description}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">{"->"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
