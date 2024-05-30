import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from "lucide-react"; 
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

          <div className="grid grid-cols-3 mt-5 gap-4">
            <div className="bg-white/10 flex group rounded overflow:hidden items-center gap-4  hover:bg-white/20 transition-colors">
             <Image src="/tame-impala.jpg" width={100} height={100} alt=""></Image>
             <strong>Tame Impala</strong>
             <button className="rounded-full bg-green-400 p-3 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </div>
            <div className="bg-white/10 flex group rounded overflow:hidden items-center gap-4  hover:bg-white/20 transition-colors">
             <Image src="/tame-impala.jpg" width={100} height={100} alt=""></Image>
             <strong>Tame Impala</strong>
              <button className="rounded-full bg-green-400 p-3 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </div>
            <div className="bg-white/10 flex group rounded overflow:hidden items-center gap-4  hover:bg-white/20 transition-colors">
             <Image src="/tame-impala.jpg" width={100} height={100} alt=""></Image>
             <strong>Tame Impala</strong>
              <button className="rounded-full bg-green-400 p-3 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </div>
            <div className="bg-white/10 flex group rounded overflow:hidden items-center gap-4  hover:bg-white/20 transition-colors">
             <Image src="/tame-impala.jpg" width={100} height={100} alt=""></Image>
             <strong>Tame Impala</strong>
              <button className="rounded-full bg-green-400 p-3 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </div>
            <div className="bg-white/10 flex group rounded overflow:hidden items-center gap-4  hover:bg-white/20 transition-colors">
             <Image src="/tame-impala.jpg" width={100} height={100} alt=""></Image>
             <strong>Tame Impala</strong>
              <button className="rounded-full bg-green-400 p-3 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </div>
            <div className="bg-white/10 flex group rounded overflow:hidden items-center gap-4 hover:bg-white/20 transition-colors">  
             <Image src="/tame-impala.jpg" width={100} height={100} alt=""></Image>
             <strong>Tame Impala</strong>
              <button className="rounded-full bg-green-400 p-3 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
            </div>
          </div>

          <h1 className="mt-10 text-2xl font-semibold">Mixs for you</h1>

          <div className="grid grid-cols-8 mt-4 gap-4">
            <div className="bg-white/5 p-4 flex flex-col gap-2 rounded hover:bg-white/10">
              <Image src="/tame-impala.jpg" className="w-full" width={120} height={120} alt=""></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Avenged Senfold, System of Down and More!  </span>
            </div>
            <div className="bg-white/5 p-4 flex flex-col gap-2 rounded hover:bg-white/10 transition-colors">
              <Image src="/tame-impala.jpg" className="w-full" width={120} height={120} alt=""></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Avenged Senfold, System of Down and More!  </span>
            </div>
            <div className="bg-white/5 p-4 flex flex-col gap-2 rounded hover:bg-white/10 transition-colors">
              <Image src="/tame-impala.jpg" className="w-full" width={120} height={120} alt=""></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Avenged Senfold, System of Down and More!  </span>
            </div>
            <div className="bg-white/5 p-4 flex flex-col gap-2 rounded hover:bg-white/10 transition-colors">
              <Image src="/tame-impala.jpg" className="w-full" width={120} height={120} alt=""></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Avenged Senfold, System of Down and More!  </span>
            </div>
            <div className="bg-white/5 p-4 flex flex-col gap-2 rounded hover:bg-white/10 transition-colors">
              <Image src="/tame-impala.jpg" className="w-full" width={120} height={120} alt=""></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Avenged Senfold, System of Down and More!  </span>
            </div>
            <div className="bg-white/5 p-4 flex flex-col gap-2 rounded hover:bg-white/10 transition-colors">
              <Image src="/tame-impala.jpg" className="w-full" width={120} height={120} alt=""></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Avenged Senfold, System of Down and More!  </span>
            </div>
            <div className="bg-white/5 p-4 flex flex-col gap-2 rounded hover:bg-white/10 transition-colors">
              <Image src="/tame-impala.jpg" className="w-full" width={120} height={120} alt=""></Image>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Avenged Senfold, System of Down and More!  </span>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
