export default function Section3() {
  const products = [
    {
      id: 1,
      image: "/section3_img1.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      id: 2,
      image: "/section3_img2.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      id: 3,
      image: "/section3_img3.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      id: 4,
      image: "/section3_img4.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      id: 5,
      image: "/section3_img5.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      id: 6,
      image: "/section3_img6.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      id: 7,
      image: "/section3_img7.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      id: 8,
      image: "/section3_img8.png",
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
  ];

  return (
    <section className="container mx-auto p-8">
      {/* Title */}
      <p className="text-center text-gray-500 mb-2">
        Featured Products
      </p>
      <h2 className="text-center text-3xl font-bold mb-2 text-[#252B42] ">BESTSELLER PRODUCTS</h2>
      <p className="text-center text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-6"> {/* Fixed 4 columns */}
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-4"
          >
            {/* Image */}
            <div className="w-full h-96 relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-md font-bold mt-6">{product.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{product.department}</p>

            {/* Pricing */}
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-gray-400 line-through text-sm">
                {product.oldPrice}
              </span>
              <span className="text-green-600 font-bold">
                {product.newPrice}
              </span>
            </div>

            {/* Color Options */}
            <div className="flex space-x-1 mt-1">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${color}`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
