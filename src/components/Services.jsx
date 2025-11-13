export default function Services() {
  const items = [
    { title: 'AMV Editing', desc: 'Beat-synced cuts, velocity, and flow that hits like a Hashira combo.' },
    { title: 'Cinematic Trailers', desc: 'Story-driven edits with sound design, SFX risers, and pacing control.' },
    { title: 'VFX & Transitions', desc: 'Energy slashes, lightning wipes, particles, speed ramps, and stylized effects.' },
    { title: 'Color Grading', desc: 'Moody teal-orange, fiery reds, icy blues — tailored to the scene vibe.' },
  ]

  return (
    <section id="services" className="bg-gradient-to-b from-slate-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="text-white/70 text-sm mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
