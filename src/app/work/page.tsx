import Card from "@/components/card";

export default function Page() {
  const jobs = [
    { company: "Goji Systems", title: "Software Engineer", date: "2023-10-01" },
    { company: "Ownable", title: "Software Engineer", date: "2023-09-15" },
    { company: "goPuff", title: "Software Engineer", date: "2023-09-01" },
    { company: "Bitovi", title: "Software Engineer", date: "2023-08-15" },
    { company: "Wolfe", title: "Software Engineer", date: "2023-08-01" },
    {
      company: "Big Tech Company in Silicon Valley",
      title: "Software Engineer",
      date: "2023-07-15",
    },
  ];

  const post = {
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    username: "john_doe",
    image: "https://placehold.co/320x300",
    likes: 245,
    comments: 78,
  };

  return (
    <div className="p-4">
      <div>
        {jobs.map((job) => (
          <Card key={job.company} post={post} />
        ))}
      </div>

      <div className="flex flex-col gap-3 w-lg mx-auto my-4 text-center py-20 border-y-1 border-gray-300">
        <img
          src="/check-circle-rainbow.png"
          alt="Checkmark Circle Rainbow"
          className="w-24 h-24 m-auto"
        />
        <span className="text-black text-lg font-semibold">
          You&apos;re all caught up
        </span>
        <span className="text-gray-600 text-sm">
          You&apos;ve seen all new jobs from the past 7 years.
        </span>
      </div>
    </div>
  );
}
