'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const cursorGlowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = e.clientX + 'px'
        cursorGlowRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 2rem', maxWidth: '960px', margin: '0 auto',
      paddingTop: '80px', position: 'relative', overflow: 'hidden'
    }}>

      {/* cursor glow */}
      <div ref={cursorGlowRef} style={{
        position: 'fixed', width: '400px', height: '400px',
        borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(15,159,122,0.08) 0%, transparent 70%)',
        transition: 'left 0.15s ease, top 0.15s ease'
      }} />

      {/* morphing blob 1 */}
      <motion.div
        animate={{
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ],
          x: [0, 20, 0], y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-80px', right: '-60px',
          width: '380px', height: '380px',
          background: 'rgba(15,159,122,0.07)', zIndex: 0
        }}
      />

      {/* morphing blob 2 */}
      <motion.div
        animate={{
          borderRadius: [
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
          ],
          x: [0, -15, 0], y: [0, 15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute', bottom: '60px', right: '80px',
          width: '200px', height: '200px',
          background: 'rgba(15,159,122,0.05)', zIndex: 0
        }}
      />

      {/* two column layout */}
      <div className="hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4rem', alignItems: 'center',
        width: '100%', position: 'relative', zIndex: 1
      }}>

        {/* left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#e1f5ee', borderRadius: '999px',
              padding: '6px 16px', marginBottom: '1.5rem'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#0f9f7a' }}
            />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#0f6e56', letterSpacing: '0.08em' }}>
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800,
              color: '#0a0a0a', lineHeight: 1.05,
              letterSpacing: '-0.03em', marginBottom: '1.25rem'
            }}
          >
            Aayusha<br />
            <span style={{ color: 'var(--accent)' }}>Maharjan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.1rem', color: '#888', marginBottom: '1rem' }}
          >
            Computing Graduate · R&D Associate · Kathmandu, Nepal
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              color: '#555', maxWidth: '440px',
              marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1rem'
            }}
          >
            I build practical tech solutions, write about IoT, and bridge
            the gap between engineering and people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <a href="#projects" style={{
              padding: '0.85rem 2rem', borderRadius: '999px',
              background: 'var(--accent)', color: '#fff',
              fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem'
            }}>View Projects</a>
            <a href="/cv.pdf" download style={{
              padding: '0.85rem 2rem', borderRadius: '999px',
              border: '1.5px solid #e0e0e0', color: '#333',
              fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem'
            }}>Download CV</a>
            <a href="#contact" style={{
              padding: '0.85rem 2rem', borderRadius: '999px',
              border: '1.5px solid #e0e0e0', color: '#333',
              fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem'
            }}>Get in Touch</a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: 'flex', gap: '2.5rem' }}
          >
            {[
              { num: '6+', label: 'Projects' },
              { num: '1st', label: 'Class Honours' },
              { num: '1', label: 'Publication' },
              { num: '2+', label: 'Years Exp.' },
            ].map((stat, i) => (
              <div key={i}>
                <p style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0a0a0a', lineHeight: 1 }}>
                  {stat.num}
                </p>
                <p style={{ fontSize: '0.8rem', color: '#aaa', marginTop: '4px' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* right — photo */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ position: 'relative', flexShrink: 0 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: '-8px',
              borderRadius: '50%',
              border: '2px dashed rgba(15,159,122,0.3)',
            }}
          />
          <div style={{
            width: '260px', height: '260px', borderRadius: '50%',
            overflow: 'hidden', border: '4px solid #fff',
            boxShadow: '0 20px 60px rgba(15,159,122,0.15)',
            position: 'relative'
          }}>
            <Image
              src="/profile.jpg"
              alt="Aayusha Maharjan"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}