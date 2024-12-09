import React from "react";

export default function Section6() {
  const posts = [
    {
      id: 1,
      title: "Loudest à la Madison #1 (L’Integral)",
      date: "22 April 2021",
      comments: 10,
      image: "section6_img1.png", // Replace with your image path
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 2,
      title: "Loudest à la Madison #1 (L’Integral)",
      date: "22 April 2021",
      comments: 10,
      image: "section6_img2.png", // Replace with your image path
      tags: ["Google", "Trending", "New"],
    },
    {
      id: 3,
      title: "Loudest à la Madison #1 (L’Integral)",
      date: "22 April 2021",
      comments: 10,
      image: "section6_img3.png", // Replace with your image path
      tags: ["Google", "Trending", "New"],
    },
  ];

  return (
    <section className="py-8 px-44 bg-gray-100 ">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h4 className="text-blue-500 font-semibold">Practice Advice</h4>
          <h2 className="text-4xl font-bold">Featured Posts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the <br/> two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Posts Section */}
        <div className="flex gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md"
              style={{ width: "328px", height: "530px" }}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-55"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1">
                  NEW
                </span>
              </div>
              <div className="p-4">
                <div className="flex space-x-2 text-gray-500 text-sm mb-2">
                  {post.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
                </p>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>{post.date}</span>
                  <span>{post.comments} comments</span>
                </div>
                <a
                  href="#"
                  className="text-blue-500 inline-block hover:underline font-semibold mt-4"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}