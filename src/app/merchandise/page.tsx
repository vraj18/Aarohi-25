"use client"
import { useState } from "react";

interface MerchandiseItem {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image_url: string;
}

interface CartItem extends MerchandiseItem {
  quantity: number;
}

const MERCHANDISE: MerchandiseItem[] = [
  {
    id: "1",
    name: "Event T-Shirt",
    description: "High-quality cotton t-shirt with event logo.",
    price: 20,
    stock: 10,
    category: "Apparel",
    image_url: "/vercel.svg",
  },
  {
    id: "2",
    name: "Event Mug",
    description: "Ceramic mug with exclusive event design.",
    price: 12,
    stock: 15,
    category: "Accessories",
    image_url: "/next.svg",
  },
  {
    id: "3",
    name: "Sticker Pack",
    description: "A pack of 5 event-themed stickers.",
    price: 5,
    stock: 30,
    category: "Accessories",
    image_url: "/globe.svg",
  },
  {
    id: "4",
    name: "Event Cap",
    description: "Adjustable cap with embroidered logo.",
    price: 18,
    stock: 8,
    category: "Apparel",
    image_url: "/window.svg",
  },
];

export default function MerchandisePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item: MerchandiseItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        if (existing.quantity < item.stock) {
          return prev.map((c) =>
            c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
          );
        } else {
          alert(`Only ${item.stock} in stock.`);
          return prev;
        }
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart((prev) => prev.filter((c) => c.id !== itemId));
      return;
    }
    setCart((prev) =>
      prev.map((c) =>
        c.id === itemId ? { ...c, quantity: newQuantity } : c
      )
    );
  };

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="py-20 bg-gray-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Merchandise</h2>
          <p className="text-xl text-gray-600">
            Get exclusive merchandise from our events
          </p>
        </div>

        {/* Cart Button */}
        <div className="fixed top-20 right-4 z-40">
          <button
            onClick={() => setShowCart((v) => !v)}
            className="relative bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow font-semibold"
          >
            Cart ({getTotalItems()})
          </button>
        </div>

        {/* Shopping Cart */}
        {showCart && (
          <div className="fixed top-16 right-4 w-80 bg-white rounded-lg shadow-xl border z-50 max-h-96 overflow-y-auto">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-3 pb-3 border-b">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-gray-600 text-sm">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-2 py-1 bg-gray-200 rounded"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 rounded"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.stock}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total: ${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Merchandise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MERCHANDISE.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <div className="relative">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-gray-600 mb-2 flex-1">{item.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                  <span className="text-sm text-gray-600">{item.stock} in stock</span>
                </div>
                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold disabled:opacity-50"
                  disabled={item.stock === 0}
                >
                  {item.stock === 0 ? "Out of Stock" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}