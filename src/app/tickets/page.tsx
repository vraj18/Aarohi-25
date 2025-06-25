"use client"
import { useState } from "react";

export default function TicketsPage() {
  const [purchased, setPurchased] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleBuy = () => {
    setPurchased(true);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-2">Proshow Ticket</h2>
        <img
          src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
          alt="Proshow"
          className="w-40 h-40 object-cover rounded-lg mb-4 border-4 border-purple-200"
        />
        <div className="text-gray-700 text-center mb-4">
          <p className="mb-1"><span className="font-semibold">Date:</span> 2024-08-05</p>
          <p className="mb-1"><span className="font-semibold">Time:</span> 7:00 PM</p>
          <p className="mb-1"><span className="font-semibold">Venue:</span> Grand Arena</p>
          <p className="mb-1"><span className="font-semibold">Performer:</span> The Headliners</p>
        </div>
        <div className="text-2xl font-bold text-blue-600 mb-6">₹999</div>
        <button
          className={`w-full py-3 rounded-lg font-semibold text-white text-lg transition-all ${purchased ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600'}`}
          onClick={handleBuy}
          disabled={purchased}
        >
          Buy Ticket
        </button>
        {showMessage && (
          <div className="mt-4 text-green-700 font-semibold text-lg">Ticket Purchased!</div>
        )}
      </div>
    </section>
  );
}
