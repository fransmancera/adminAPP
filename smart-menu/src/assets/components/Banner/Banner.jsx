import React from 'react';

export const Banner = () => {
  return (
    <div className="relative w-full h-[200px] bg-[var(--primary)] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200"
          alt="Special Offer"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white p-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          🌟 Special Weekend Offer 🌟
        </h2>
        <p className="text-lg md:text-xl">
          Get 30% off on all premium dishes this weekend!
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-[var(--primary)] rounded-full font-semibold hover:bg-opacity-90 transition-colors">
          Order Now
        </button>
      </div>
    </div>
  );
};