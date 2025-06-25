"use client"
import { useState } from "react";

interface EventItem {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image_url: string;
}

const EVENTS: EventItem[] = [
  {
    id: "1",
    name: "Opening Ceremony",
    description: "Kick off the event with our grand opening ceremony! Join us for a memorable start with music, speeches, and a look ahead at what's to come.",
    date: "2024-08-01",
    time: "10:00 AM",
    location: "Main Hall",
    image_url: "/vercel.svg",
  },
  {
    id: "2",
    name: "Keynote Speech",
    description: "Hear from our special guest speaker about the future of tech. Gain insights and inspiration from industry leaders.",
    date: "2024-08-01",
    time: "11:00 AM",
    location: "Auditorium",
    image_url: "/next.svg",
  },
  {
    id: "3",
    name: "Workshop: Web Development",
    description: "Hands-on workshop covering modern web development tools and practices. Perfect for beginners and pros alike!",
    date: "2024-08-01",
    time: "1:00 PM",
    location: "Room 101",
    image_url: "/globe.svg",
  },
  {
    id: "4",
    name: "Networking Event",
    description: "Meet and connect with other attendees and industry professionals. Build your network and make new friends!",
    date: "2024-08-01",
    time: "5:00 PM",
    location: "Lounge",
    image_url: "/window.svg",
  },
  {
    id: "5",
    name: "Panel Discussion: AI Ethics",
    description: "A panel of experts discusses the ethical implications of artificial intelligence in society.",
    date: "2024-08-02",
    time: "10:30 AM",
    location: "Conference Room A",
    image_url: "/vercel.svg",
  },
  {
    id: "6",
    name: "Lunch & Learn",
    description: "Enjoy lunch while learning about the latest trends in technology from industry leaders.",
    date: "2024-08-02",
    time: "12:00 PM",
    location: "Cafeteria",
    image_url: "/next.svg",
  },
  {
    id: "7",
    name: "Hackathon Kickoff",
    description: "Start your engines! The hackathon begins with rules, team formation, and project ideas.",
    date: "2024-08-02",
    time: "2:00 PM",
    location: "Main Hall",
    image_url: "/globe.svg",
  },
  {
    id: "8",
    name: "Fireside Chat: Women in Tech",
    description: "An inspiring conversation with women leaders in technology, sharing their journeys and advice.",
    date: "2024-08-02",
    time: "4:00 PM",
    location: "Auditorium",
    image_url: "/window.svg",
  },
  {
    id: "9",
    name: "Evening Social",
    description: "Relax and unwind with music, snacks, and great company at our evening social event.",
    date: "2024-08-02",
    time: "6:00 PM",
    location: "Lounge",
    image_url: "/vercel.svg",
  },
  {
    id: "10",
    name: "Breakfast Meetup",
    description: "Start your day networking with fellow attendees over breakfast.",
    date: "2024-08-03",
    time: "8:00 AM",
    location: "Cafeteria",
    image_url: "/next.svg",
  },
  {
    id: "11",
    name: "Project Expo",
    description: "Teams present their hackathon projects to judges and attendees. Vote for your favorite!",
    date: "2024-08-03",
    time: "11:00 AM",
    location: "Main Hall",
    image_url: "/globe.svg",
  },
  {
    id: "12",
    name: "Closing Ceremony",
    description: "Celebrate the end of the event with awards, closing remarks, and a look to the future.",
    date: "2024-08-03",
    time: "2:00 PM",
    location: "Main Hall",
    image_url: "/window.svg",
  },
];

export default function EventsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [registered, setRegistered] = useState<{ [id: string]: boolean }>({});
  const [showRegistered, setShowRegistered] = useState<{ [id: string]: boolean }>({});

  const handleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleRegister = (id: string) => {
    setRegistered((prev) => ({ ...prev, [id]: true }));
    setShowRegistered((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setShowRegistered((prev) => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-100 to-blue-100 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Events</h2>
          <p className="text-xl text-gray-600">
            Explore all the exciting events we have lined up for you!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EVENTS.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <img
                src={event.image_url}
                alt={event.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-1 text-green-700">{event.name}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
                  <span><strong>Date:</strong> {event.date}</span>
                  <span><strong>Time:</strong> {event.time}</span>
                </div>
                <div className="text-xs text-gray-400 mb-2">{event.location}</div>
                <div className="flex gap-2 mt-auto">
                  <button
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-semibold transition-all"
                    onClick={() => handleExpand(event.id)}
                  >
                    {expanded === event.id ? "Hide Details" : "Learn More"}
                  </button>
                  <button
                    className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold transition-all ${registered[event.id] ? 'opacity-60 cursor-not-allowed' : ''}`}
                    onClick={() => handleRegister(event.id)}
                    disabled={registered[event.id]}
                  >
                    Register
                  </button>
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden ${expanded === event.id ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {expanded === event.id && (
                    <p className="text-gray-700 text-sm">{event.description}</p>
                  )}
                </div>
                {showRegistered[event.id] && (
                  <div className="mt-2 text-green-700 font-semibold text-sm">Registered!</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
