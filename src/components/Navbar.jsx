import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/30 border-b border-emerald-500/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-red-500 ring-2 ring-white/10" />
          <span className="text-white font-semibold tracking-wide group-hover:text-emerald-300 transition-colors">DemonSlayer.Edits</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#work" className="hover:text-emerald-300">Work</a>
          <a href="#services" className="hover:text-emerald-300">Services</a>
          <a href="#about" className="hover:text-emerald-300">About</a>
          <a href="#contact" className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white">Contact</a>
        </nav>
        <button className="sm:hidden text-white/80" aria-label="menu"><Menu /></button>
      </div>
    </header>
  )
}
