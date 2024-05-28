import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from "lucide-react"; 
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-3">
            <a href="" className="flex gap-2 text-zinc-100 text-sm font-semibold">
              <HomeIcon/>
              Home
            </a>
            <a href="" className="flex gap-2 text-zinc-100 text-sm font-semibold">
              <Search/>
              Search
            </a>
            <a href="" className="flex gap-2 text-zinc-100 text-sm font-semibold">
              <Library/>
              Your Library
            </a>
          </nav>
          <nav className="mt-5 pt-5 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className="text-sm transition ease  text-zinc-500 hover:text-zinc-100">Chill Vibes</a>
            <a href="" className="text-sm transition ease  text-zinc-500 hover:text-zinc-100">Workout Mix</a>
            <a href="" className="text-sm transition ease  text-zinc-500 hover:text-zinc-100">Party Hits</a>
            <a href="" className="text-sm transition ease  text-zinc-500 hover:text-zinc-100">Acoustic Sessions</a>
            <a href="" className="text-sm transition ease  text-zinc-500 hover:text-zinc-100">Jazz Classics</a>
            <a href="" className="text-sm transition ease  text-zinc-500 hover:text-zinc-100">Road Trip Tunes</a>
            <a href="" className="text-sm transition ease  text-zinc-500 hover:text-zinc-100">Relax & Unwind</a>
            <a href="" className="text-sm transition ease  text-zinc-500 hover:text-zinc-100">Top 40 Hits</a>
          </nav>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center gap-5">
            <button>
              <ChevronLeft  className="rounded-full bg-black/40 p-1"/>
            </button>
            <button>
              <ChevronRight className="rounded-full bg-black/40 p-1" />
            </button>
          </div>

          <h1 className="mt-5 text-3xl font-semibold">Good morning</h1>

          <div className="grid grid-cols-3 mt-5 gap-x-5 gap-y-3">
            <a href="" className="bg-white/10 rounded ">
             <Image src="/tame-impala.jpg" width={80} height={80} alt=""></Image>
            </a>
            <a href="" className="bg-white/10 rounded ">
             <Image src="/tame-impala.jpg" width={80} height={80} alt=""></Image>
            </a>
            <a href="" className="bg-white/10 rounded ">
             <Image src="/tame-impala.jpg" width={80} height={80} alt=""></Image>
            </a>
            <a href="" className="bg-white/10 rounded ">
             <Image src="/tame-impala.jpg" width={80} height={80} alt=""></Image>
            </a>
            <a href="" className="bg-white/10 rounded ">
             <Image src="/tame-impala.jpg" width={80} height={80} alt=""></Image>
            </a>
            <a href="" className="bg-white/10 rounded ">
             <Image src="/tame-impala.jpg" width={80} height={80} alt=""></Image>
            </a>
          </div>

          <h1 className="mt-10 text-2xl font-semibold">Mixs for you</h1>

          <div className="grid grid-cols-4 mt-5 gap-x-5 gap-y-3">
            <div className="bg-white/10 p-5">teste</div>
            <div className="bg-white/10 p-5">teste</div>
            <div className="bg-white/10 p-5">teste</div>
            <div className="bg-white/10 p-5">teste</div>
            <div className="bg-white/10 p-5">teste</div>
            <div className="bg-white/10 p-5">teste</div>
            <div className="bg-white/10 p-5">teste</div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
