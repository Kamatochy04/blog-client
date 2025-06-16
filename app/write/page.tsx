"use client";

import Link from "next/link";

export default function Write() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8 border border-gray-300">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
          Write a New Article
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter article title"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>
                Select a category
              </option>
              {[
                "Technology",
                "Lifestyle",
                "Programming",
                "Design",
                "Business",
              ].map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Article Content
            </label>
            <textarea
              id="content"
              placeholder="Write your article here..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[300px]"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium transition-colors"
          >
            Publish Article
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Back to{" "}
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Home
          </Link>
        </p>
      </div>
    </main>
  );
}
