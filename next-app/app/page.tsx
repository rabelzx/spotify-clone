import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, SkipBack, SkipForward, Shuffle, Repeat } from "lucide-react"; 
import Image from "next/image";

function Playlist({ src, title }) {
  return  <div className="bg-white/10 flex group rounded overflow:hidden items-center gap-4  hover:bg-white/20 transition-colors">
            <Image src={src} width={100} height={100} alt=""></Image>
            <strong>{title}</strong>
            <button className="rounded-full bg-green-400 p-3 text-black ml-auto mr-8 invisible group-hover:visible"><Play/></button>
          </div>
}

function Mix({ src, title }) {
  return <div className="bg-white/5 p-4 flex flex-col gap-2 rounded hover:bg-white/10">
            <Image src={src} className="w-full" width={120} height={120} alt=""></Image>
            <strong className="font-semibold">Daily Mix 1</strong>
            <span className="text-sm text-zinc-400">{title}</span>
          </div>
}

export default function Home() {
  const playlists = [
    {src: "/tame-impala.jpg", title: "Tame Impala"}, 
    {src: "/avenged-senfold.jpg", title: "Avenged Sevenfold"},
    {src: "/gorillaz.jpg", title: "Gorillaz"} 
  ]

  const mixes = [
    {src: "/tame-impala.jpg", title: "Tame Impala"}, 
    {src: "/avenged-senfold.jpg", title: "Avenged Sevenfold"},
    {src: "/gorillaz.jpg", title: "Gorillaz"}
  ]
  
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
            {playlists.map((playlist, index) => (
              <Playlist key={index} src={playlist.src} title={playlist.title}/>
            ))}
          </div>
          <h1 className="mt-10 text-2xl font-semibold">Mixs for you</h1>
          <div className="grid grid-cols-8 mt-4 gap-4">
            {mixes.map((mix, index) => (
              <Mix key={index} src={mix.src} title={mix.title}/>
            ) )}
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        <div className="flex justify-between">
            <button>ESQUERDA</button>
            <div className="flex space-x-5 items-center">
              <Shuffle className="transition ease cursor-pointer hover:text-green-400"/>
              <SkipBack className="transition ease cursor-pointer hover:text-green-400"/>
              <button className="rounded-full p-3 text-black bg-white transition ease hover:bg-green-400"><Play/></button>
              <SkipForward className="transition ease cursor-pointer hover:text-green-400"/>
              <Repeat className="transition ease cursor-pointer hover:text-green-400"/>
            </div>
            <button>DIREITA</button>
        </div>
      </footer>
    </div>
  );
}
