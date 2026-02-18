'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Freelance',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:krkrishnaraj11@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-bg-elevated border border-border-DEFAULT rounded-xl p-4 font-body text-[0.9rem] text-text-primary placeholder:text-text-dim focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/20 outline-none transition-colors"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-bg-elevated border border-border-DEFAULT rounded-xl p-4 font-body text-[0.9rem] text-text-primary placeholder:text-text-dim focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/20 outline-none transition-colors"
        />
      </div>
      <div>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-bg-elevated border border-border-DEFAULT rounded-xl p-4 font-body text-[0.9rem] text-text-primary focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/20 outline-none transition-colors"
        >
          <option value="Freelance">Freelance</option>
          <option value="Contract">Contract</option>
          <option value="Consulting">Consulting</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-bg-elevated border border-border-DEFAULT rounded-xl p-4 font-body text-[0.9rem] text-text-primary placeholder:text-text-dim focus:border-accent-lime focus:ring-1 focus:ring-accent-lime/20 outline-none transition-colors resize-none"
        />
      </div>
      <Button type="submit" className="w-full text-center flex items-center justify-center">
        Send Message →
      </Button>
    </form>
  )
}
