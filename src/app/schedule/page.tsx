"use client"
import { useState } from "react";

interface ScheduleItem {
  id: string;
  name: string;
  description: string;
  date: string; // ISO date
  time: string;
  location: string;
  image_url: string;
}

const SCHEDULE: ScheduleItem[] = [
  {
    id: "1",
    name: "Opening Ceremony",
    description: "Kick off the event with our grand opening ceremony!",
    date: "2024-08-01",
    time: "10:00 AM",
    location: "Main Hall",
    image_url: "/vercel.svg",
  },
  {
    id: "2",
    name: "Keynote Speech",
    description: "Hear from our special guest speaker about the future of tech.",
    date: "2024-08-01",
    time: "11:00 AM",
    location: "Auditorium",
    image_url: "/next.svg",
  },
  {
    id: "3",
    name: "Workshop: Web Development",
    description: "Hands-on workshop covering modern web development tools and practices.",
    date: "2024-08-01",
    time: "1:00 PM",
    location: "Room 101",
    image_url: "/globe.svg",
  },
  {
    id: "4",
    name: "Networking Event",
    description: "Meet and connect with other attendees and industry professionals.",
    date: "2024-08-01",
    time: "5:00 PM",
    location: "Lounge",
    image_url: "/window.svg",
  },
];

function getNextScheduleIndex(schedule: ScheduleItem[]) {
  const now = new Date();
  for (let i = 0; i < schedule.length; i++) {
    const eventDate = new Date(schedule[i].date + 'T' + schedule[i].time.replace(/(AM|PM)/, ''));
    if (eventDate > now) return i;
  }
  return -1;
}

export default function SchedulePage() {
  const nextIdx = getNextScheduleIndex(SCHEDULE);

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50 min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-700 mb-4">Event Schedule</h2>
          <p className="text-xl text-gray-600">
            See the full schedule and plan your experience in a timeline view.
          </p>
        </div>
        <div className="relative border-l-4 border-yellow-200 pl-8">
          {SCHEDULE.map((item, idx) => (
            <div key={item.id} className="mb-12 flex items-start group">
              <div className={`absolute -left-6 w-10 h-10 rounded-full flex items-center justify-center border-4 ${idx === nextIdx ? 'border-yellow-500 bg-yellow-100' : 'border-gray-300 bg-white'} shadow transition-all`}>
                <img src={item.image_url} alt={item.name} className="w-6 h-6" />
              </div>
              <div className={`ml-6 p-6 rounded-lg shadow transition-all w-full ${idx === nextIdx ? 'bg-yellow-100 border border-yellow-400' : 'bg-white border border-gray-200'}`}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`text-2xl font-bold ${idx === nextIdx ? 'text-yellow-700' : 'text-gray-800'}`}>{item.name}</h3>
                  <span className="text-xs text-gray-500 font-mono">{item.date}</span>
                </div>
                <div className="text-gray-600 mb-2">{item.description}</div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span><strong>Time:</strong> {item.time}</span>
                  <span><strong>Location:</strong> {item.location}</span>
                </div>
                {idx === nextIdx && (
                  <div className="mt-4 inline-block px-3 py-1 bg-yellow-600 text-white text-xs rounded-full font-semibold">Next Up</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 