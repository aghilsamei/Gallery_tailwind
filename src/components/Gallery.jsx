import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  'images/1.jpg',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913',
  'images/2.jpg',
  'images/3.webp',
  'images/4.webp',
  'images/5.webp',
  'https://images.unsplash.com/photo-1481349518771-20055b2a7b24',
  'images/1.jpg',
  'images/2.jpg',
];

export default function Gallery() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        <div className="sm:col-span-2 md:col-span-3 overflow-hidden rounded-xl">
          <img
            src={images[0]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </div>

        <div className="sm:row-span-2 overflow-hidden rounded-xl">
          <img
            src={images[1]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </div>

        <div className="sm:col-span-1 md:col-span-2 overflow-hidden rounded-xl">
          <img
            src={images[10]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </div>

        <div className="row-span-2 overflow-hidden rounded-xl">
          <img
            src={images[3]}
            className="w-full h-full object-top hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </div>

        <div className="sm:row-span-2 overflow-hidden rounded-xl">
          <img
            src={images[4]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </div>

        <div className="overflow-hidden rounded-xl">
          <img
            src={images[5]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </div>

        <div className="sm:col-span-2 overflow-hidden rounded-xl">
          <img
            src={images[6]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </div>

        <div className="overflow-hidden rounded-xl">
          <img
            src={images[7]}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
