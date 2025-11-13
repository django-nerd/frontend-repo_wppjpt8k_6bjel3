import { useEffect, useState } from 'react'

export default function ProjectGrid() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="work" className="bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Featured Work</h2>
        {loading ? (
          <p className="text-white/70">Loading projects...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
                {p.thumbnail && (
                  <img src={p.thumbnail} alt={p.title} className="h-40 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
                )}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tags?.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-emerald-600/20 text-emerald-300 border border-emerald-500/20">{t}</span>
                    ))}
                  </div>
                  <a href={p.video_url} target="_blank" rel="noreferrer" className="inline-block mt-4 text-emerald-300 hover:text-emerald-200">Watch →</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
