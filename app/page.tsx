"use client";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              Latest Articles
            </h2>
            <select className="w-[180px] px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="trending">Trending</option>
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
                  A Journey Through Modern Web Development
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  By John Doe • 5 min read • June 15, 2025
                </p>
                <p className="mt-4 text-gray-600 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </p>
                <button className="mt-4 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm transition-colors">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <div className="sticky top-24 bg-white rounded-lg p-6 shadow-sm border-t-4 border-gray-400">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {[
                "Technology",
                "Lifestyle",
                "Programming",
                "Design",
                "Business",
              ].map((category) => (
                <button
                  key={category}
                  className="text-left px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
