'use client'
import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Projects', 'Experience', 'Contact']

  return (
    <>
      {/* scroll progress bar */}
      <motion.div
        style={{
          scaleX, position: 'fixed', top: 0, left: 0, right: 0,
          height: '3px', background: 'var(--accent)',
          transformOrigin: '0%', zIndex: 200
        }}
      />

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || menuOpen ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid #f0f0f0' : '1px solid transparent',
        padding: '0 2rem', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.3s ease'
      }}>
        {/* logo */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0a0a0a' }}
        >
          AM<span style={{ color: 'var(--accent)' }}>.</span>
        </motion.span>

        {/* desktop links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '2rem',
          } as React.CSSProperties}
          className="desktop-nav"
        >
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontSize: '0.9rem', color: '#555',
              textDecoration: 'none', fontWeight: 500,
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555')}
            >{link}</a>
          ))}
          <a href="mailto:aayushamrzn13@gmail.com" style={{
            fontSize: '0.82rem', fontWeight: 600,
            color: 'var(--accent)', textDecoration: 'none',
            background: 'var(--accent-light)',
            padding: '6px 14px', borderRadius: '999px',
          }}>
            aayushamrzn13@gmail.com
          </a>
        </motion.div>

        {/* hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'none', flexDirection: 'column',
            gap: '5px', padding: '4px', zIndex: 110
          }}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            style={{ display: 'block', width: '22px', height: '2px', background: '#111', borderRadius: '2px' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{ display: 'block', width: '22px', height: '2px', background: '#111', borderRadius: '2px' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            style={{ display: 'block', width: '22px', height: '2px', background: '#111', borderRadius: '2px' }}
          />
        </button>
      </nav>

      {/* mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid #f0f0f0',
              padding: '1.5rem 2rem 2rem',
              zIndex: 99, display: 'flex', flexDirection: 'column', gap: '0'
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: '1.4rem', fontWeight: 700, color: '#111',
                  textDecoration: 'none', padding: '0.75rem 0',
                  borderBottom: '1px solid #f5f5f5'
                }}
              >{link}</motion.a>
            ))}
            <motion.a
              href="mailto:aayushamrzn13@gmail.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                marginTop: '1.25rem', fontSize: '0.9rem', fontWeight: 600,
                color: 'var(--accent)', textDecoration: 'none',
                background: 'var(--accent-light)',
                padding: '10px 18px', borderRadius: '999px',
                alignSelf: 'flex-start'
              }}
            >
              aayushamrzn13@gmail.com
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}