'use client'
import { motion, AnimatePresence } from 'framer-motion'

export default function SocialSidebar() {
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/aayusha',
      path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/aayusha-maharjan',
      path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z',
    },
    {
      label: 'Email',
      href: 'mailto:aayushamrzn13@gmail.com',
      path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="social-sidebar"
      style={{
        position: 'fixed', left: '1.5rem', bottom: '2rem',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '0.75rem', zIndex: 50
      }}
    >
      {socials.map((s, i) => (
        <motion.a
          key={i}
          href={s.href}
          target={s.label !== 'Email' ? '_blank' : undefined}
          whileHover={{ scale: 1.2 }}
          title={s.label}
          style={{
            width: '38px', height: '38px', borderRadius: '10px',
            background: '#fff', border: '1px solid #eee',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#888', textDecoration: 'none',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={s.path} />
          </svg>
        </motion.a>
      ))}
      <div style={{
        width: '1px', height: '60px',
        background: 'linear-gradient(to bottom, #ddd, transparent)'
      }} />
    </motion.div>
  )
}