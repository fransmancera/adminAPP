import React from 'react';

const ProductCard = ({ imageSrc, heading, description }) => {
  return (
    <div className="bg-black shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <img
        src={imageSrc}
        alt={heading}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-[#00df9a] text-xl mb-2">{heading}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

const CardContainer = () => {
  const products = [
    {
      imageSrc: '../images/product-1.jpg',
      heading: 'Product 1',
      description: 'This is the description for product 1.',
    },
    {
      imageSrc: '../images/product-1.jpg',
      heading: 'Product 2',
      description: 'This is the description for product 2.',
    },
    {
      imageSrc: '../images/product-1.jpg',
      heading: 'Product 3',
      description: 'This is the description for product 3.',
    },
    {
      imageSrc: '../images/product-1.jpg',
      heading: 'Product 4',
      description: 'This is the description for product 4.',
    },
    {
      imageSrc: '../images/product-1.jpg',
      heading: 'Product 5',
      description: 'This is the description for product 5.',
    },
    {
      imageSrc: '../images/product-1.jpg',
      heading: 'Product 6',
      description: 'This is the description for product 6.',
    },
  ];

  return (
    <div className="bg-gray-600 min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            heading={product.heading}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
