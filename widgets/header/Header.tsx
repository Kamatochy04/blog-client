import { Search, Sun, Moon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-800 text-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold">ArticleHub</h1>
          <nav className="flex gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Home asdasdsa
            </Link>
            <Link
              href="/write"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Write Article
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Profile
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2 w-[200px] sm:w-[300px] rounded-md border border-slate-600 bg-slate-700 text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <button className="p-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-900 transition-colors">
              <Sun className="h-5 w-5 block dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
          <Link
            href="/login"
            className="px-4 py-2 rounded-md bg-slate-700 text-slate-100 hover:bg-slate-600 transition-colors text-sm"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
