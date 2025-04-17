import Card from "@/components/card";

export default function Page() {
  const jobs = [
    {
      company: "Goji Systems",
      companyName: "Goji Systems",
      title: "Software Engineer",
      startDate: "2023-10-01",
      endDate: null,
      date: "2023-10-01",
      image: "https://placehold.co/320x300",
      companyImage: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "Self-ordering kiosks for restaurants.",
    },
    {
      company: "Ownable",
      companyName: "Ownable",
      title: "Software Engineer",
      startDate: "2023-09-15",
      endDate: "2023-09-30",
      date: "2023-09-15",
      image: "https://placehold.co/320x300",
      companyImage: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "Rent-to-own e-commerce and fintech platform.",
    },
    {
      company: "goPuff",
      companyName: "goPuff",
      title: "Software Engineer",
      startDate: "2023-09-01",
      endDate: "2023-09-14",
      date: "2023-09-01",
      image: "https://placehold.co/320x300",
      companyImage: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "Snack delivery.",
    },
    {
      company: "Bitovi",
      companyName: "Bitovi",
      title: "Software Consultant",
      startDate: "2023-08-15",
      endDate: "2023-08-31",
      date: "2023-08-15",
      image: "https://placehold.co/320x300",
      companyImage: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "Apple App Store Ads Platform & KFC.com",
    },
    {
      company: "Wolfe",
      companyName: "Wolfe",
      title: "Senior Software Engineer",
      startDate: "2023-08-01",
      endDate: "2023-08-14",
      date: "2023-08-01",
      image: "https://placehold.co/320x300",
      companyImage: "https://randomuser.me/api/portraits/men/1.jpg",
      description:
        "Developed backend services and integrated third-party APIs at Wolfe.",
    },
    {
      company: "California",
      companyName: "Big Tech Company in Silicon Valley",
      title: "SWE Product",
      startDate: "2023-08-01",
      endDate: "2023-08-14",
      date: "2023-08-01",
      image: "https://placehold.co/320x300",
      companyImage: "https://randomuser.me/api/portraits/men/1.jpg",
      description: "This could be you!",
    },
  ];

  return (
    <div className="p-4">
      <div>
        {jobs.map((job) => (
          <Card key={job.company} data={job} />
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
