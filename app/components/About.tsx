'use client'
import { motion } from 'framer-motion'

const skills = [
  'Python', 'Flutter', 'Firebase', 'HTML/CSS',
  'JavaScript', 'MySQL', 'IoT Systems', 'Git',
  'PHP', 'Figma', 'Canva', 'Arduino',
]

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 2rem', maxWidth: '960px', margin: '0 auto' }}>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem'
        }}
      >About Me</motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800,
          color: '#0a0a0a', marginBottom: '3rem', letterSpacing: '-0.02em'
        }}
      >A little about who I am</motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem'
      }}>
        {/* bio */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            `I'm a First Class BSc (Hons) Computing graduate from The British College, Kathmandu. I work at NepaTronix Engineering Solution as an R&D Associate — building automation tools, managing technical documentation, and coordinating cross-functional teams.`,
            `I co-authored STEAM STARTER — a full-length IoT learning guide covering Arduino, ESP8266, and ESP32, published in 2025.`,
            `I enjoy working at the intersection of technology and people — whether that's building useful tools, writing clear documentation, or growing communities.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ color: '#555', lineHeight: 1.9, fontSize: '1rem' }}
            >
              {i === 1 ? (
                <>
                  I co-authored{' '}
                  <span style={{ fontWeight: 700, color: '#111' }}>STEAM STARTER</span>
                  {' '}— a full-length IoT learning guide covering Arduino, ESP8266, and ESP32, published in 2025.
                </>
              ) : text}
            </motion.p>
          ))}

          {/* stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}
          >
            {[
              { num: '2025', label: 'Graduate' },
              { num: '1st', label: 'Class Honours' },
              { num: '1', label: 'Publication' },
            ].map((s, i) => (
              <div key={i} style={{
                flex: 1, background: '#f9f9f9', borderRadius: '14px',
                padding: '1rem', textAlign: 'center',
                border: '1px solid #f0f0f0'
              }}>
                <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)' }}>{s.num}</p>
                <p style={{ fontSize: '0.75rem', color: '#aaa', marginTop: '2px' }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* skills */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#aaa', marginBottom: '1.25rem'
            }}
          >Technologies & Tools</motion.p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                style={{
                  padding: '0.45rem 1.1rem', borderRadius: '999px',
                  fontSize: '0.875rem', fontWeight: 500,
                  background: 'var(--accent-light)', color: 'var(--accent)',
                  cursor: 'default'
                }}
              >{skill}</motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}