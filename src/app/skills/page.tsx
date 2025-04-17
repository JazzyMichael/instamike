import Image from "next/image";

const skillGroups = {
  Frontend: [
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "Vue", logo: "https://cdn.simpleicons.org/vue.js/4FC08D" },
    { name: "Nuxt.js", logo: "https://cdn.simpleicons.org/nuxt/00DC82" },
    { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031" },
    { name: "Svelte", logo: "https://cdn.simpleicons.org/svelte/FF3E00" },
    { name: "SvelteKit", logo: "https://cdn.simpleicons.org/svelte/FF3E00" },
    { name: "HTML/CSS/JS", logo: "https://cdn.simpleicons.org/html5/E34F26" },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    { name: "SVG Animations", logo: "https://cdn.simpleicons.org/svg/FFB13B" },
    { name: "Storybook", logo: "https://cdn.simpleicons.org/storybook/FF4785" },
    { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Ionic", logo: "https://cdn.simpleicons.org/ionic/3880FF" },
    { name: "PWA", logo: "https://cdn.simpleicons.org/googlechrome/4285F4" },
  ],
  Backend: [
    { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    {
      name: "TypeScript",
      logo: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    { name: "NestJS", logo: "https://cdn.simpleicons.org/nestjs/E0234E" },
    { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
    {
      name: "Socket.io",
      logo: "https://cdn.simpleicons.org/socketdotio/010101",
    },
    { name: "C#", logo: "https://cdn.simpleicons.org/c/239120" },
    { name: ".NET", logo: "https://cdn.simpleicons.org/dotnet/512BD4" },
    {
      name: "PostgreSQL",
      logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
    {
      name: "DynamoDB",
      logo: "https://cdn.simpleicons.org/amazondynamodb/4053D6",
    },
    { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
    {
      name: "AWS",
      logo: "https://cdn.simpleicons.org/amazonwebservices/232F3E",
    },
    {
      name: "Azure",
      logo: "https://cdn.simpleicons.org/chatbot/0078D4",
    },
    { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/2D3748" },
  ],
  Other: [
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    {
      name: "CI/CD Pipelines",
      logo: "https://cdn.simpleicons.org/githubactions/2088FF",
    },
    {
      name: "Automated Testing",
      logo: "https://cdn.simpleicons.org/jest/C21325",
    },
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "AI Codegen", logo: "https://cdn.simpleicons.org/openai/412991" },
    { name: "Leetcode", logo: "https://cdn.simpleicons.org/leetcode/2EACE3" },
  ],
};

export default function Page() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      {Object.entries(skillGroups).map(([groupName, skills]) => (
        <div key={groupName}>
          <h2 className="text-3xl font-bold mb-4">{groupName}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map(({ name, logo }) => (
              <div
                key={name}
                className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Image
                  src={logo}
                  alt={name}
                  width={24}
                  height={24}
                  className="shrink-0"
                />
                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
