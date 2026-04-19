'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'R&D Associate',
    company: 'NepaTronix Engineering Solution',
    period: '2025 — Present',
    location: 'Kathmandu, Nepal',
    color: '#0f9f7a',
    bg: '#e1f5ee',
    points: [
      'Built internal automation tools that streamlined repetitive workflows and improved team productivity.',
      'Co-authored and delivered STEAM STARTER — a full IoT learning guide from content strategy to publication.',
      'Managed technical documentation and coordinated across engineering and content teams.',
    ]
  },
  {
    role: 'Intern — Digital Marketing',
    company: 'Ad Media Pvt. Ltd',
    period: 'Jun – Dec 2023',
    location: 'Kathmandu, Nepal',
    color: '#8b5cf6',
    bg: '#ede9fe',
    points: [
      'Managed social media outreach and content for multiple campaigns, growing audience engagement.',
      'Conducted audience research and analyzed data to refine content strategy.',
      'Translated complex concepts into clear content for specific platforms and segments.',
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '7rem 2rem', maxWidth: '960px', margin: '0 auto' }}>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem'
        }}
      >Where I've Worked</motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800,
          color: '#0a0a0a', marginBottom: '3.5rem', letterSpacing: '-0.02em'
        }}
      >Experience</motion.h2>

      <div style={{ position: 'relative' }}>
        {/* animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            position: 'absolute', left: '18px', top: '8px',
            width: '2px', height: '85%',
            background: 'linear-gradient(to bottom, #0f9f7a, #e1f5ee)',
            transformOrigin: 'top',
            zIndex: 0
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{ display: 'flex', gap: '2rem', position: 'relative' }}
            >
              {/* dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.2 + 0.3, type: 'spring' }}
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: exp.bg, border: `2px solid ${exp.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1
                }}
              >
                <div style={{
                  width: '12px', height: '12px', borderRadius: '50%',
                  background: exp.color
                }} />
              </motion.div>

              {/* content card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  flex: 1, background: '#fff', borderRadius: '20px',
                  border: '1px solid #f0f0f0', padding: '1.75rem',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.04)'
                }}
              >
                {/* header */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem'
                }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111' }}>
                    {exp.role}
                  </h3>
                  <span style={{
                    fontSize: '0.8rem', fontWeight: 600,
                    background: exp.bg, color: exp.color,
                    padding: '4px 12px', borderRadius: '999px'
                  }}>{exp.period}</span>
                </div>

                <p style={{
                  fontSize: '0.95rem', color: exp.color,
                  fontWeight: 600, marginBottom: '0.2rem'
                }}>{exp.company}</p>
                <p style={{
                  fontSize: '0.82rem', color: '#bbb',
                  marginBottom: '1.25rem'
                }}>{exp.location}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.points.map((pt, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.2 + j * 0.1 + 0.4 }}
                      style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}
                    >
                      <div style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: exp.color, marginTop: '7px', flexShrink: 0
                      }} />
                      <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>{pt}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}