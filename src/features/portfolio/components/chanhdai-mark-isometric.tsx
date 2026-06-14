"use client"

import { useId } from "react"
import type { Transition } from "motion/react"
import { motion } from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

export function ChanhDaiMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `ncdai-face-pattern-${id}`,
    faceFill: `ncdai-face-fill-${id}`,
  }

  const transition: Transition = {
    type: "spring",
    mass: 0.5,
    damping: 18,
    stiffness: 200,
  }

  const [play] = useSound(metalClickSound)

  return (
    <motion.svg
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox="-152 -72 612 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              transform: "translate(0px, 0px)",
            },
            pressed: {
              transform: "translate(0px, 16px)",
            },
          }}
          transition={transition}
        >
          <path d="M0 -32 L84 16 L56 32 L-28 -16 Z" />
          <path d="M56 0 L84 16 L-28 80 L-56 64 Z" />
          <path d="M-84 16 L0 64 L-28 80 L-112 32 Z" />
          <path d="M-28 -16 L0 0 L-28 16 L-56 0 Z" />
          <path d="M112 32 L196 80 L168 96 L84 48 Z" />
          <path d="M112 32 L140 48 L28 112 L0 96 Z" />
          <path d="M168 64 L196 80 L84 144 L56 128 Z" />
          <path d="M28 80 L112 128 L84 144 L0 96 Z" />
          <path d="M224 96 L308 144 L280 160 L196 112 Z" />
          <path d="M224 96 L252 112 L196 144 L168 128 Z" />
          <path d="M196 112 L280 160 L252 176 L168 128 Z" />
          <path d="M224 160 L252 176 L196 208 L168 192 Z" />
          <path d="M140 144 L224 192 L196 208 L112 160 Z" />
          <path d="M336 160 L364 176 L280 224 L252 208 Z" />
          <path d="M392 192 L420 208 L336 256 L308 240 Z" />
          <path d="M252 208 L336 256 L308 272 L224 224 Z" />
        </motion.g>
      </defs>

      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        <motion.path
          variants={{
            normal: { d: "M0 0 L-28 16 L-28 -16 L0 -32 ZM0 0 L84 48 L84 16 L0 -32 ZM56 32 L-56 96 L-56 64 L56 0 ZM56 32 L84 48 L84 16 L56 0 ZM-84 48 L-112 64 L-112 32 L-84 16 ZM-84 48 L0 96 L0 64 L-84 16 ZM-28 16 L-56 32 L-56 0 L-28 -16 ZM-28 16 L0 32 L0 0 L-28 -16 Z" },
            pressed: { d: "M0 0 L-28 16 L-28 0 L0 -16 ZM0 0 L84 48 L84 32 L0 -16 ZM56 32 L-56 96 L-56 80 L56 16 ZM56 32 L84 48 L84 32 L56 16 ZM-84 48 L-112 64 L-112 48 L-84 32 ZM-84 48 L0 96 L0 80 L-84 32 ZM-28 16 L-56 32 L-56 16 L-28 0 ZM-28 16 L0 32 L0 16 L-28 0 Z" },
          }}
          transition={transition}
        />

        <motion.path
          variants={{
            normal: { d: "M112 64 L84 80 L84 48 L112 32 ZM112 64 L196 112 L196 80 L112 32 ZM112 64 L0 128 L0 96 L112 32 ZM112 64 L140 80 L140 48 L112 32 ZM168 96 L56 160 L56 128 L168 64 ZM168 96 L196 112 L196 80 L168 64 ZM28 112 L0 128 L0 96 L28 80 ZM28 112 L112 160 L112 128 L28 80 Z" },
            pressed: { d: "M112 64 L84 80 L84 64 L112 48 ZM112 64 L196 112 L196 96 L112 48 ZM112 64 L0 128 L0 112 L112 48 ZM112 64 L140 80 L140 64 L112 48 ZM168 96 L56 160 L56 144 L168 80 ZM168 96 L196 112 L196 96 L168 80 ZM28 112 L0 128 L0 112 L28 96 ZM28 112 L112 160 L112 144 L28 96 Z" },
          }}
          transition={transition}
        />

        <motion.path
          variants={{
            normal: { d: "M224 128 L196 144 L196 112 L224 96 ZM224 128 L308 176 L308 144 L224 96 ZM224 128 L168 160 L168 128 L224 96 ZM224 128 L252 144 L252 112 L224 96 ZM196 144 L168 160 L168 128 L196 112 ZM196 144 L280 192 L280 160 L196 112 ZM224 192 L168 224 L168 192 L224 160 ZM224 192 L252 208 L252 176 L224 160 ZM140 176 L112 192 L112 160 L140 144 ZM140 176 L224 224 L224 192 L140 144 Z" },
            pressed: { d: "M224 128 L196 144 L196 128 L224 112 ZM224 128 L308 176 L308 160 L224 112 ZM224 128 L168 160 L168 144 L224 112 ZM224 128 L252 144 L252 128 L224 112 ZM196 144 L168 160 L168 144 L196 128 ZM196 144 L280 192 L280 176 L196 128 ZM224 192 L168 224 L168 208 L224 176 ZM224 192 L252 208 L252 192 L224 176 ZM140 176 L112 192 L112 176 L140 160 ZM140 176 L224 224 L224 208 L140 160 Z" },
          }}
          transition={transition}
        />

        <motion.path
          variants={{
            normal: { d: "M336 192 L252 240 L252 208 L336 160 ZM336 192 L364 208 L364 176 L336 160 ZM392 224 L308 272 L308 240 L392 192 ZM392 224 L420 240 L420 208 L392 192 ZM252 240 L224 256 L224 224 L252 208 ZM252 240 L336 288 L336 256 L252 208 Z" },
            pressed: { d: "M336 192 L252 240 L252 224 L336 176 ZM336 192 L364 208 L364 192 L336 176 ZM392 224 L308 272 L308 256 L392 208 ZM392 224 L420 240 L420 224 L392 208 ZM252 240 L224 256 L224 240 L252 224 ZM252 240 L336 288 L336 272 L252 224 Z" },
          }}
          transition={transition}
        />
      </g>

      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      <motion.path
        variants={{
          normal: {
            d: "M0 -32 L84 16 L56 32 L-28 -16 ZM0 0 L0 -32M84 48 L84 16M-28 16 L-28 -16M56 0 L84 16 L-28 80 L-56 64 ZM56 32 L56 0M84 48 L84 16M-56 96 L-56 64M-84 16 L0 64 L-28 80 L-112 32 ZM-84 48 L-84 16M0 96 L0 64M-112 64 L-112 32M-28 -16 L0 0 L-28 16 L-56 0 ZM-28 16 L-28 -16M0 32 L0 0M-56 32 L-56 0M112 32 L196 80 L168 96 L84 48 ZM112 64 L112 32M196 112 L196 80M84 80 L84 48M112 32 L140 48 L28 112 L0 96 ZM112 64 L112 32M140 80 L140 48M0 128 L0 96M168 64 L196 80 L84 144 L56 128 ZM168 96 L168 64M196 112 L196 80M56 160 L56 128M28 80 L112 128 L84 144 L0 96 ZM28 112 L28 80M112 160 L112 128M0 128 L0 96M224 96 L308 144 L280 160 L196 112 ZM224 128 L224 96M308 176 L308 144M196 144 L196 112M224 96 L252 112 L196 144 L168 128 ZM224 128 L224 96M252 144 L252 112M168 160 L168 128M196 112 L280 160 L252 176 L168 128 ZM196 144 L196 112M280 192 L280 160M168 160 L168 128M224 160 L252 176 L196 208 L168 192 ZM224 192 L224 160M252 208 L252 176M168 224 L168 192M140 144 L224 192 L196 208 L112 160 ZM140 176 L140 144M224 224 L224 192M112 192 L112 160M336 160 L364 176 L280 224 L252 208 ZM336 192 L336 160M364 208 L364 176M252 240 L252 208M392 192 L420 208 L336 256 L308 240 ZM392 224 L392 192M420 240 L420 208M308 272 L308 240M252 208 L336 256 L308 272 L224 224 ZM252 240 L252 208M336 288 L336 256M224 256 L224 224",
          },
          pressed: {
            d: "M0 -16 L84 32 L56 48 L-28 0 ZM0 0 L0 -16M84 48 L84 32M-28 16 L-28 0M56 16 L84 32 L-28 96 L-56 80 ZM56 32 L56 16M84 48 L84 32M-56 96 L-56 80M-84 32 L0 80 L-28 96 L-112 48 ZM-84 48 L-84 32M0 96 L0 80M-112 64 L-112 48M-28 0 L0 16 L-28 32 L-56 16 ZM-28 16 L-28 0M0 32 L0 16M-56 32 L-56 16M112 48 L196 96 L168 112 L84 64 ZM112 64 L112 48M196 112 L196 96M84 80 L84 64M112 48 L140 64 L28 128 L0 112 ZM112 64 L112 48M140 80 L140 64M0 128 L0 112M168 80 L196 96 L84 160 L56 144 ZM168 96 L168 80M196 112 L196 96M56 160 L56 144M28 96 L112 144 L84 160 L0 112 ZM28 112 L28 96M112 160 L112 144M0 128 L0 112M224 112 L308 160 L280 176 L196 128 ZM224 128 L224 112M308 176 L308 160M196 144 L196 128M224 112 L252 128 L196 160 L168 144 ZM224 128 L224 112M252 144 L252 128M168 160 L168 144M196 128 L280 176 L252 192 L168 144 ZM196 144 L196 128M280 192 L280 176M168 160 L168 144M224 176 L252 192 L196 224 L168 208 ZM224 192 L224 176M252 208 L252 192M168 224 L168 208M140 160 L224 208 L196 224 L112 176 ZM140 176 L140 160M224 224 L224 208M112 192 L112 176M336 176 L364 192 L280 240 L252 224 ZM336 192 L336 176M364 208 L364 192M252 240 L252 224M392 208 L420 224 L336 272 L308 256 ZM392 224 L392 208M420 240 L420 224M308 272 L308 256M252 224 L336 272 L308 288 L224 240 ZM252 240 L252 224M336 288 L336 272M224 256 L224 240",
          },
        }}
        transition={transition}
        stroke="var(--stroke)"
      />
    </motion.svg>
  )
}
