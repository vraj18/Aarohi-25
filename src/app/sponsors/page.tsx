"use client"

interface Sponsor {
  name: string;
  image_url: string;
}

const SPONSORS: Sponsor[] = [
  {
    name: "TechNova",
    image_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cloudify",
    image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "GreenByte",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "InnoSoft",
    image_url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "DataForge",
    image_url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "BluePeak",
    image_url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  },
];

export default function SponsorsPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl shadow-lg m-8">
      <h1 className="text-4xl font-extrabold text-pink-700 mb-4">Sponsors</h1>
      <p className="text-lg text-gray-700 mb-8">We thank our amazing sponsors for making this event possible!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {SPONSORS.map((sponsor) => (
          <div key={sponsor.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
            <img src={sponsor.image_url} alt={sponsor.name} className="h-24 w-24 object-cover rounded-full mb-4 border-4 border-pink-200" />
            <span className="font-semibold text-gray-800 text-lg text-center">{sponsor.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
