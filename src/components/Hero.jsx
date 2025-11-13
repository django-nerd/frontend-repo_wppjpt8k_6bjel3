import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-emerald-900">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(239,68,68,0.25),transparent_40%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow"
        >
          Demon Slayer Video Editor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
        >
          High-impact AMVs, cinematic cuts, and breathing-style transitions. I turn raw scenes into battles that live in your head rent-free.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#work" className="px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">See Work</a>
          <a href="#contact" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20">Start a Project</a>
        </motion.div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-48 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
