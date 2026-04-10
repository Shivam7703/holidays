'use client'
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { logobg } from '@/assets'
import { motion } from 'framer-motion'

const letters = "Holidays".split("")

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const letterVariant = {
  hidden: {
    y: -60,
    opacity: 0,
    rotateX: -90,
    scale: 0.8,
  },
  show: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.2,
      stiffness: 120,
      damping: 14,
    },
  },
}

export default function Logotext() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const textWrapRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([])

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

  return (
    <div ref={wrapRef} className='w-full h-full relative'>

      <style>{`
       
        @keyframes glow-pulse {
          0%, 100% {
            filter:
              drop-shadow(1px 1px 0px rgba(160,50,0,0.8))
              drop-shadow(3px 3px 0px rgba(100,20,0,0.55))
              drop-shadow(5px 5px 6px rgba(0,0,0,0.35));
          }
          50% {
          transform:scale(1.06);
            filter:
              drop-shadow(1px 1px 0px rgba(180,60,0,0.9))
              drop-shadow(3px 3px 0px rgba(120,25,0,0.65))
              drop-shadow(5px 5px 6px rgba(0,0,0,0.4))
              drop-shadow(0 0 22px rgba(255,170,50,0.65))
              drop-shadow(0 0 50px rgba(255,100,0,0.3));
          }
        }
        .text-wrap-3d {
          perspective: 700px;
          perspective-origin: center center;
          transition: transform 0.15s ease-out;
          transform-style: preserve-3d;
        }
        .letter-span {
          display: inline-block;
          background: linear-gradient(
            175deg,
            #fff8e7 0%,
            #ffe066 12%,
            #ffaa00 25%,
            #ff6a00 40%,
            #c43d00 55%,
            #ff6a00 68%,
            #ffaa00 80%,
            #ffe066 90%,
            #fff8e7 100%
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform-style: preserve-3d;
          cursor: default;
           animation: glow-pulse 2s ease-in-out infinite;

        }
      
      `}</style>

      <Image
        src={logobg}
        alt="logo background"
        className='w-full h-full min-h-[40vh] object-cover'
      />

      <div className='text-center absolute z-10 bottom-[15%] left-0 w-full'>
        <div
          ref={textWrapRef}
          className='text-wrap-3d inline-block'
        >
          <motion.h2
            variants={containerVariant}
            initial="hidden"
            animate="show"
            className='uppercase md:text-[170px] text-6xl font-black tracking-wider select-none flex'
            style={{ display: 'flex' }}
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                ref={el => { lettersRef.current[i] = el }}
                variants={letterVariant}
                className='letter-span'
                style={{
                  animationDelay: `${i * 1.2}s`,
                }}
               
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
       
        </div>
      </div>

    </div>
  )
}