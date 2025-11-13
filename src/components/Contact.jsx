import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) setStatus('Message sent! I will get back to you soon.')
      else setStatus(data.detail || 'Something went wrong')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="bg-gradient-to-t from-black to-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Start a Project</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your name" className="bg-white/10 border border-white/10 rounded p-3 text-white placeholder-white/50" />
          <input name="email" type="email" required placeholder="Your email" className="bg-white/10 border border-white/10 rounded p-3 text-white placeholder-white/50" />
          <input name="project_interest" placeholder="What are you looking for? (AMV, trailer, etc.)" className="sm:col-span-2 bg-white/10 border border-white/10 rounded p-3 text-white placeholder-white/50" />
          <textarea name="message" required placeholder="Tell me about your idea" rows="4" className="sm:col-span-2 bg-white/10 border border-white/10 rounded p-3 text-white placeholder-white/50" />
          <button className="sm:col-span-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded">Send</button>
          {status && <p className="sm:col-span-2 text-white/80">{status}</p>}
        </form>
      </div>
    </section>
  )
}
