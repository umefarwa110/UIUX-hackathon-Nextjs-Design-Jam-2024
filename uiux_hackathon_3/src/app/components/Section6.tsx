import React from "react";

const posts = [
  {
    id: 1,
    title: "Loudest à la Madison #1 (L’Integral)",
    date: "22 April 2021",
    comments: 10,
    image: "section6_img1.png",
    tags: ["Google", "Trending", "New"],
  },
  {
    id: 2,
    title: "Loudest à la Madison #1 (L’Integral)",
    date: "22 April 2021",
    comments: 10,
    image: "section6_img2.png",
    tags: ["Google", "Trending", "New"],
  },
  {
    id: 3,
    title: "Loudest à la Madison #1 (L’Integral)",
    date: "22 April 2021",
    comments: 10,
    image: "section6_img3.png",
    tags: ["Google", "Trending", "New"],
  },
];

export default function Section6() {
  return (
    <section className="px-60 bg-white py-10">
      <div className="text-center py-8">
        <p className="text-blue-500 font-medium text-sm">Practice Advice</p>
        <h1 className="text-3xl font-bold mt-2">Featured Posts</h1>
        <p className="text-gray-600 mt-4 text-sm">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="flex gap-4">
        {posts.map(({ id, title, date, comments, image, tags }) => (
          <div
            key={id}
            className="bg-white shadow-md w-[328px] h-[530px]"
          >
            <div className="relative">
              <img src={image} alt={title} className="w-full h-55" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1">
                NEW
              </span>
            </div>
            <div className="p-4">
              <div className="flex space-x-2 text-gray-500 text-sm mb-2">
                {tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
              </p>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <div className="flex items-center space-x-2">
                  <img
                    src={"/section6_clock.png"}
                    alt="Clock icon"
                    className="w-4 h-4"
                  />
                  <span>{date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src={"/section6_graph.png"}
                    alt="Comments icon"
                    className="w-4 h-4"
                  />
                  <span>{comments} comments</span>
                </div>
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
    </section>
  );
}
