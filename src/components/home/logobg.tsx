'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { logobg } from '@/assets'
import { motion, AnimatePresence } from 'framer-motion'

const words = ["Holidays", "By ValueAdz"]

// Confetti particle type
type Particle = {
  id: number
  x: number
  y: number
  color: string
  rotate: number
  scale: number
}

const colors = ['#ffe066', '#ffaa00', '#ff6a00', '#fff8e7', '#c43d00', '#ffcc44', '#ff4500']

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotate: Math.random() * 360,
    scale: Math.random() * 0.8 + 0.3,
  }))
}

export default function Logotext() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const textWrapRef = useRef<HTMLDivElement>(null)
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState<'confetti' | 'word' | 'exit'>('confetti')

  // Phase cycle: confetti → word → exit → next word
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (phase === 'confetti') {
      timer = setTimeout(() => setPhase('word'), 900)       // confetti 900ms
    } else if (phase === 'word') {
      timer = setTimeout(() => setPhase('exit'), 5000)      // word visible 2.2s
    } else if (phase === 'exit') {
      timer = setTimeout(() => {
        setWordIndex(prev => (prev + 1) % words.length)
        setPhase('confetti')
      }, 900)                                                 // exit 900ms → next word
    } 

    return () => clearTimeout(timer)
  }, [phase])

  // Mouse 3D effect
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    let current = { x: 0, y: 0 }
    let target = { x: 0, y: 0 }
    let rafId: number
    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect()
      target.x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      target.y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    }
    const onLeave = () => { target = { x: 0, y: 0 } }
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      current.x = lerp(current.x, target.x, 0.06)
      current.y = lerp(current.y, target.y, 0.06)
      if (textWrapRef.current) {
        textWrapRef.current.style.transform = `
          translate(${current.x * 14}px, ${current.y * 7}px)
          rotateX(${current.y * -10}deg)
          rotateY(${current.x * 10}deg)
        `
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseleave', onLeave)
    return () => {
      wrap.removeEventListener('mousemove', onMove)
      wrap.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const letters = words[wordIndex].split("")

  return (
    <div ref={wrapRef} className='w-full h-full relative'>
      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
                    transform:scale(1);

            
          }
          50% {
          transform:scale(1.06);
            
          }
        }
       
        .letter-clip {
          display: inline-block;
          overflow: hidden;
          line-height: 1.1;
        }
        .letter-span {
          display: inline-block;
          background: linear-gradient(
            175deg,
            #fff8e7 0%, #ffe066 12%, #ffaa00 25%,
            #ff6a00 40%, #c43d00 55%, #ff6a00 68%,
            #ffaa00 80%, #ffe066 90%, #fff8e7 100%
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: default;
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>

      <Image
        src={logobg}
        alt="logo background"
        className='w-full h-full min-h-[40vh] object-cover'
      />

      <div className='text-center absolute z-10 bottom-[18%] left-0 w-full overflow-hidden'>
        <div ref={textWrapRef} className='text-wrap-3d inline-block relative'>

          <AnimatePresence mode="wait">
            <motion.h2
              key={wordIndex}
              className='uppercase md:text-[150px] text-5xl font-black tracking-wider select-none flex justify-center flex-wrap relative'
            >
             

              {/* ✅ Letters — ek ek karke slide up */}
              {(phase === 'word' || phase === 'exit') && letters.map((letter, i) => (
                <span key={i} className="letter-clip">
                  <motion.span
                    className='letter-span'
                    initial={{ y: 80, opacity: 0, filter: 'blur(12px)' }}
                    animate={
                      phase === 'word'
                        ? { y: 0, opacity: 1, filter: 'blur(0px)' }
                        : { y: 0, opacity: 0, filter: 'blur(16px)' }   // ✅ blur hoke gayab
                    }
                    transition={{
                      delay: phase === 'word' ? i * 0.1 : i * 0.08,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}
                    style={{ animationDelay: `${i * 1}s` }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
          </AnimatePresence>

        </div>
      </div>
    </div>
  )
}