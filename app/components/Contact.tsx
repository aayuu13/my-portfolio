'use client'
import { motion } from 'framer-motion'

const links = [
  {
    label: 'Email',
    value: 'aayushamrzn13@gmail.com',
    href: 'mailto:aayushamrzn13@gmail.com',
    color: '#0f9f7a',
    bg: '#e1f5ee',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    value: 'Aayusha Maharjan',
    href: 'https://linkedin.com/in/aayusha-maharjan',
    color: '#0ea5e9',
    bg: '#e0f2fe',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  {
    label: 'GitHub',
    value: 'github.com/aayusha',
    href: 'https://github.com/aayusha',
    color: '#111',
    bg: '#f3f4f6',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    )
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 2rem', background: '#fafafa' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* split layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>

          {/* left — bold text side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem'
              }}
            >Get In Touch</motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 800,
                color: '#0a0a0a', lineHeight: 1.1,
                letterSpacing: '-0.03em', marginBottom: '1.5rem'
              }}
            >
              Let's build<br />
              <span style={{ color: 'var(--accent)' }}>something great</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: '#888', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}
            >
              Open to collaborations, freelance work, and interesting projects.
              Reach out and I'll get back to you.
            </motion.p>

            <motion.a
              href="mailto:aayushamrzn13@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: '999px',
                background: 'var(--accent)', color: '#fff',
                fontWeight: 700, fontSize: '0.95rem',
                textDecoration: 'none'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Send me a message
            </motion.a>

            {/* availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#e1f5ee', borderRadius: '999px',
                padding: '6px 16px', marginTop: '1.25rem',
                marginLeft: '1rem'
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#0f9f7a' }}
              />
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#0f6e56' }}>
                Available now
              </span>
            </motion.div>
          </div>

          {/* right — contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                whileHover={{ x: 6, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.1rem 1.4rem', borderRadius: '16px',
                  border: '1px solid #eee', background: '#fff',
                  textDecoration: 'none', color: 'inherit',
                  transition: 'box-shadow 0.2s'
                }}
              >
                <div style={{
                  width: '46px', height: '46px', borderRadius: '12px',
                  background: link.bg, color: link.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {link.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.75rem', color: '#bbb', fontWeight: 500, marginBottom: '2px' }}>
                    {link.label}
                  </p>
                  <p style={{ fontSize: '0.95rem', color: '#111', fontWeight: 600 }}>
                    {link.value}
                  </p>
                </div>
                <svg style={{ color: '#ddd', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            ))}

            {/* location card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.1rem 1.4rem', borderRadius: '16px',
                border: '1px solid #eee', background: '#fff',
              }}
            >
              <div style={{
                width: '46px', height: '46px', borderRadius: '12px',
                background: '#fff7ed', color: '#f59e0b',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: '#bbb', fontWeight: 500, marginBottom: '2px' }}>Location</p>
                <p style={{ fontSize: '0.95rem', color: '#111', fontWeight: 600 }}>Kathmandu, Nepal</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            marginTop: '5rem', paddingTop: '2rem',
            borderTop: '1px solid #eee',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '1rem'
          }}
        >
          <p style={{ fontSize: '0.85rem', color: '#ccc' }}>
            Designed & built by Aayusha Maharjan · {new Date().getFullYear()}
          </p>
          <p style={{ fontSize: '0.85rem', color: '#ccc' }}>
            Kathmandu, Nepal
          </p>
        </motion.div>

      </div>
    </section>
  )
}