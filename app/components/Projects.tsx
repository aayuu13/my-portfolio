'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Fuel Monitoring System',
    tag: 'Flutter · IoT · Firebase',
    desc: 'IoT-backed mobile app with real-time fuel level dashboards and alerts.',
    image: '/projects/fuel.jpg',
    color: '#0ea5e9',
    bg: '#e0f2fe',
    problem: 'Manual fuel tracking at operational sites was error-prone, slow, and caused unexpected downtime when fuel ran out without warning.',
    solution: 'Designed and built a Flutter mobile app connected to IoT sensors via Firebase, showing real-time fuel levels, consumption trends, and automated low-fuel alerts.',
    outcome: 'Eliminated manual tracking overhead. Operators received alerts before critical levels were reached, preventing operational disruptions.',
    tech: ['Flutter', 'Firebase', 'IoT Sensors', 'Dart'],
  },
  {
    title: 'RFID Attendance System',
    tag: 'Hardware · UI Design · MySQL',
    desc: 'Automated RFID-based attendance system with clean admin UI for non-technical users.',
    image: '/projects/rfid.jpg',
    color: '#8b5cf6',
    bg: '#ede9fe',
    problem: 'Manual attendance tracking was time-consuming, inaccurate, and produced data that was hard to export or analyze.',
    solution: 'Built an RFID-based system with a clean admin dashboard for real-time monitoring, automated record keeping, and one-click data export designed for non-technical staff.',
    outcome: 'Reduced manual tracking time significantly. Improved data accuracy and freed up staff time for higher-value tasks.',
    tech: ['RFID Hardware', 'MySQL', 'UI Design', 'Python'],
  },
  {
    title: 'WhatsApp Automation',
    tag: 'Python · Selenium',
    desc: 'Outreach automation tool for scheduling messages and managing community workflows.',
    image: '/projects/whatsapp.jpg',
    color: '#f59e0b',
    bg: '#fef3c7',
    problem: 'The NepaTronix team was spending hours manually sending messages to hundreds of community contacts.',
    solution: 'Built a Python + Selenium automation tool that schedules and sends messages to contact lists, handles retries, and logs delivery status.',
    outcome: 'Scaled community outreach without increasing manual effort. Team communication consistency improved dramatically.',
    tech: ['Python', 'Selenium', 'Automation', 'Scheduling'],
  },
  {
    title: 'AI Resume Builder',
    tag: 'Next.js · AI · Vercel',
    desc: 'AI-powered resume builder with real-time editing, ATS scoring, and smart content generation.',
    image: '/projects/resume.jpg',
    color: '#6366f1',
    bg: '#eef2ff',
    problem: 'Creating ATS-friendly resumes manually is time-consuming and users often struggle with wording, formatting, and keyword optimization.',
    solution: 'Built a full-stack resume builder using Next.js with AI integration to generate summaries, bullet points, and skills dynamically. Implemented job description analysis for keyword matching and ATS optimization, along with live preview editing.',
    outcome: 'Enabled users to generate professional, optimized resumes in seconds. Improved resume quality, reduced effort, and increased chances of passing ATS filters.',
    tech: ['Next.js', 'AI API', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'STEAM STARTER',
    tag: 'Publication · IoT · Arduino',
    desc: 'Co-authored a full-length IoT learning guide covering Arduino, ESP8266 and ESP32.',
    image: '/projects/steam.jpg',
    color: '#ef4444',
    bg: '#fee2e2',
    problem: 'Nepali students learning IoT had no structured, accessible, locally-relevant learning resource.',
    solution: 'Co-authored a complete beginner-to-intermediate IoT guide covering Arduino, ESP8266, and ESP32. Managed content structure, gathered reader feedback, and coordinated the full publication pipeline.',
    outcome: 'Published by NepaTronix Engineering Solution in 2025. Now used as a learning resource for STEM students across Nepal.',
    tech: ['Arduino', 'ESP8266', 'ESP32', 'Technical Writing'],
  },
  {
    title: 'Dynamic Web App',
    tag: 'PHP · MySQL · Oracle APEX',
    desc: 'Responsive full-stack web application with secure authentication and admin dashboards.',
    image: '/projects/webapp.jpg',
    color: '#10b981',
    bg: '#d1fae5',
    problem: 'Required a full-stack web platform with secure user authentication, role-based access, and admin data management capabilities.',
    solution: 'Developed a responsive PHP + MySQL web app with Bootstrap UI, secure login system, user dashboards, and Oracle APEX integration for backend data reporting.',
    outcome: 'Delivered a fully functional multi-role web platform demonstrating end-to-end full-stack development skills.',
    tech: ['PHP', 'MySQL', 'Oracle APEX', 'Bootstrap'],
  },
]

function PatternSVG({ pattern, color }: { pattern: string; color: string }) {
  if (pattern === 'grid') return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {[...Array(6)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={20 + i * 28} x2="300" y2={20 + i * 28} stroke={color} strokeWidth="1" opacity="0.2" />
      ))}
      {[...Array(6)].map((_, i) => (
        <line key={`v${i}`} x1={20 + i * 45} y1="0" x2={20 + i * 45} y2="200" stroke={color} strokeWidth="1" opacity="0.2" />
      ))}
    </svg>
  )
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {[...Array(5)].map((_, i) => (
        <path key={i} d={`M 0 ${30 + i * 35} Q 75 ${15 + i * 35} 150 ${30 + i * 35} T 300 ${30 + i * 35}`}
          fill="none" stroke={color} strokeWidth="1.5" opacity="0.2" />
      ))}
    </svg>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" style={{ padding: '7rem 2rem', background: '#fafafa' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem'
          }}
        >Selected Work</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800,
            color: '#0a0a0a', marginBottom: '0.75rem', letterSpacing: '-0.02em'
          }}
        >Projects</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ color: '#888', marginBottom: '3rem', fontSize: '1rem' }}
        >
          Click any project to see the full case study.
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(p)}
              style={{
                background: '#fff',
                borderRadius: '20px',
                border: '1px solid #efefef',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              {/* image or fallback pattern */}
              <div style={{
                height: '180px', background: p.bg,
                position: 'relative', overflow: 'hidden'
              }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {/* overlay gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)'
                }} />
                {/* tag badge */}
                <div style={{
                  position: 'absolute', bottom: '12px', left: '12px',
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '999px', padding: '4px 12px',
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: p.color }}>
                    {p.tag}
                  </span>
                </div>
                {/* number */}
                <div style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '999px', padding: '3px 10px',
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#aaa' }}>
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* content */}
              <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', marginBottom: '0.5rem'
                }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111' }}>
                    {p.title}
                  </h3>
                  <span style={{
                    fontSize: '12px', color: p.color,
                    fontWeight: 600, marginTop: '2px', flexShrink: 0
                  }}>
                    View →
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.7 }}>
                  {p.desc}
                </p>

                {/* tech chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '11px', fontWeight: 500,
                      background: p.bg, color: p.color,
                      padding: '3px 10px', borderRadius: '999px'
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* modal backdrop */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(6px)',
                zIndex: 300
              }}
            />

            {/* modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: '50%', left: '50%',
                translate: '-50% -50%',
                width: 'min(90vw, 580px)',
                maxHeight: '85vh',
                overflowY: 'auto',
                background: '#fff',
                borderRadius: '24px',
                zIndex: 301,
              }}
            >
              {/* modal image header */}
              <div style={{
                height: '200px', background: selected.bg,
                borderRadius: '24px 24px 0 0',
                position: 'relative', overflow: 'hidden'
              }}>
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)'
                }} />

                {/* close button */}
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    position: 'absolute', top: '14px', right: '14px',
                    width: '34px', height: '34px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)', border: 'none',
                    cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, color: '#333', fontSize: '14px'
                  }}
                >✕</button>

                <div style={{ position: 'absolute', bottom: '14px', left: '20px' }}>
                  <span style={{
                    fontSize: '11px', fontWeight: 600, color: selected.color,
                    background: 'rgba(255,255,255,0.95)',
                    padding: '4px 12px', borderRadius: '999px'
                  }}>{selected.tag}</span>
                </div>
              </div>

              {/* modal body */}
              <div style={{ padding: '1.75rem 2rem 2.5rem' }}>
                <h2 style={{
                  fontSize: '1.5rem', fontWeight: 800,
                  color: '#0a0a0a', marginBottom: '1.75rem',
                  letterSpacing: '-0.02em'
                }}>{selected.title}</h2>

                {[
                  { label: 'Problem', text: selected.problem, color: '#ef4444', bg: '#fee2e2' },
                  { label: 'Solution', text: selected.solution, color: selected.color, bg: selected.bg },
                  { label: 'Outcome', text: selected.outcome, color: '#0ea5e9', bg: '#e0f2fe' },
                ].map((item) => (
                  <div key={item.label} style={{ marginBottom: '1.5rem' }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: '10px', fontWeight: 700,
                      background: item.bg, color: item.color,
                      padding: '3px 10px', borderRadius: '999px',
                      textTransform: 'uppercase', letterSpacing: '0.1em',
                      marginBottom: '0.6rem'
                    }}>{item.label}</span>
                    <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.8 }}>
                      {item.text}
                    </p>
                  </div>
                ))}

                {/* tech stack */}
                <div style={{
                  marginTop: '1.5rem', paddingTop: '1.5rem',
                  borderTop: '1px solid #f0f0f0'
                }}>
                  <p style={{
                    fontSize: '0.72rem', fontWeight: 700, color: '#bbb',
                    textTransform: 'uppercase', letterSpacing: '0.12em',
                    marginBottom: '0.75rem'
                  }}>Tech Stack</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selected.tech.map(t => (
                      <span key={t} style={{
                        fontSize: '0.85rem', fontWeight: 500,
                        background: selected.bg, color: selected.color,
                        padding: '5px 14px', borderRadius: '999px'
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}