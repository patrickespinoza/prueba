"use client";

import React from "react";
import { motion } from "framer-motion";
import Carousel from "./carrusel";

/* =====================================================
   ANIMACIÓN GENERAL
===================================================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =====================================================
   COMPONENTE PRINCIPAL
===================================================== */

export default function Momentos() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        relative
        w-full
        overflow-hidden
        px-4 py-20
        sm:px-6 sm:py-24
        lg:px-10 lg:py-32
      "
      style={{
        background: `
          radial-gradient(
            circle at top left,
            rgba(122,24,56,0.10),
            transparent 25%
          ),
          radial-gradient(
            circle at bottom right,
            rgba(213,183,106,0.16),
            transparent 28%
          ),
          linear-gradient(
            145deg,
            #fffafa 0%,
            #f8edef 45%,
            #ead7dc 100%
          )
        `,
      }}
    >
      {/* =================================================
          GLOW SUPERIOR
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-32 -top-36
          h-[360px] w-[360px]
          rounded-full
          bg-[#7A1838]/10
          blur-3xl
          sm:h-[480px] sm:w-[480px]
        "
        animate={{
          scale: [1, 1.14, 1],
          opacity: [0.12, 0.24, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          GLOW INFERIOR
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -bottom-40 -right-36
          h-[390px] w-[390px]
          rounded-full
          bg-[#D5B76A]/15
          blur-3xl
          sm:h-[520px] sm:w-[520px]
        "
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.24, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =================================================
          TEXTURA DE FONDO
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(91,16,43,0.16) 0px,
              rgba(91,16,43,0.16) 1px,
              transparent 1px,
              transparent 7px
            )
          `,
        }}
      />

      {/* =================================================
          DESTELLOS DECORATIVOS
      ================================================= */}

      <motion.span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-[10%] top-[20%]
          text-lg text-[#D5B76A]/60
        "
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.8, 1.15, 0.8],
          rotate: [0, 30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✦
      </motion.span>

      <motion.span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-[8%] top-[35%]
          text-sm text-[#7A1838]/40
        "
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✦
      </motion.span>

      {/* =================================================
          CONTENIDO
      ================================================= */}

      <div
        className="
          relative z-10
          mx-auto
          w-full max-w-6xl
          text-center
        "
      >
        {/* =================================================
            SUBTÍTULO
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{ once: true }}
          className="
            flex items-center
            justify-center
            gap-3
            sm:gap-5
          "
        >
          <div
            className="
              h-px w-8
              bg-gradient-to-r
              from-transparent to-[#D5B76A]
              sm:w-16
            "
          />

          <motion.p
            className="
              whitespace-nowrap
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#7A1838]
              sm:text-[11px]
              sm:tracking-[0.45em]
            "
            animate={{
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Momentos especiales
          </motion.p>

          <div
            className="
              h-px w-8
              bg-gradient-to-l
              from-transparent to-[#D5B76A]
              sm:w-16
            "
          />
        </motion.div>

        {/* =================================================
            TÍTULO
        ================================================= */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="
            mx-auto mt-5
            max-w-4xl
            font-cursiveDancing
            text-[46px]
            leading-[0.95]
            sm:text-[62px]
            md:text-[78px]
            lg:text-[90px]
          "
          style={{
            background: `
              linear-gradient(
                180deg,
                #9A3155 0%,
                #7A1838 42%,
                #4A0E23 100%
              )
            `,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter:
              "drop-shadow(0 9px 20px rgba(122,24,56,0.12))",
          }}
        >
          Mi historia
        </motion.h2>

        {/* =================================================
            ORNAMENTO
        ================================================= */}

        <motion.div
          className="
            relative
            my-8
            flex items-center
            justify-center
            sm:my-10
          "
          animate={{
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Línea izquierda */}

          <motion.div
            className="h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(181,143,63,0.8))",
            }}
            animate={{
              width: ["45px", "80px", "45px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Centro */}

          <motion.div
            className="relative mx-4 sm:mx-5"
            animate={{
              rotate: [0, 6, -6, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              aria-hidden="true"
              className="
                absolute inset-0
                scale-150 rounded-full
                bg-[#D5B76A]/25
                blur-xl
              "
            />

            <div
              className="
                relative
                h-3 w-3
                rotate-45
              "
              style={{
                background: `
                  linear-gradient(
                    135deg,
                    #F6E5B7 0%,
                    #D5B76A 35%,
                    #A77C25 70%,
                    #664408 100%
                  )
                `,
                boxShadow: `
                  0 0 14px rgba(213,183,106,0.4),
                  inset 0 1px 0 rgba(255,255,255,0.5)
                `,
              }}
            />
          </motion.div>

          {/* Línea derecha */}

          <motion.div
            className="h-px"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(181,143,63,0.8))",
            }}
            animate={{
              width: ["45px", "80px", "45px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* =================================================
            TEXTO DESCRIPTIVO
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            max-w-2xl
            px-1
            font-playfair
            text-[15px]
            leading-relaxed
            text-[#72505D]
            sm:text-[17px]
            md:text-[18px]
          "
        >
          Cada fotografía guarda una parte de mi historia, recuerdos
          llenos de alegría, sueños y momentos que me han acompañado
          hasta llegar a esta etapa tan especial.
        </motion.p>

        {/* =================================================
            FRASE DECORATIVA
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="
            mx-auto mt-4
            max-w-xl
            font-cursiveDancing
            text-[24px]
            leading-relaxed
            text-[#7A1838]
            sm:text-[29px]
          "
        >
          Recuerdos que vivirán por siempre en mi corazón
        </motion.p>

        {/* =================================================
            CARD DEL CARRUSEL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            relative
            mx-auto mt-12
            w-full
            overflow-hidden
            rounded-[24px]
            border border-white/70
            bg-white/50
            p-2.5
            shadow-[0_24px_70px_rgba(84,17,42,0.14)]
            backdrop-blur-xl
            sm:mt-16
            sm:rounded-[34px]
            sm:p-4
            md:mt-20
            md:rounded-[42px]
            md:p-6
            lg:p-8
          "
        >
          {/* Glow interior */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-br
              from-white/80
              via-transparent
              to-[#7A1838]/8
            "
          />

          {/* Glow vino */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-24 -top-24
              h-64 w-64
              rounded-full
              bg-[#7A1838]/10
              blur-3xl
            "
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Brillo lateral */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute top-0
              h-full w-28
              -skew-x-12
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
            "
            animate={{
              left: ["-35%", "130%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          />

          {/* Borde interno */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-[7px]
              rounded-[18px]
              border border-white/45
              sm:inset-[10px]
              sm:rounded-[25px]
              md:rounded-[32px]
            "
          />

          {/* =================================================
              CARRUSEL
          ================================================= */}

          <div
            className="
              relative z-10
              w-full
              overflow-hidden
              rounded-[17px]
              sm:rounded-[24px]
              md:rounded-[30px]
            "
          >
            <Carousel />
          </div>
        </motion.div>

        {/* =================================================
            MENSAJE FINAL
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="
            mx-auto mt-10
            flex max-w-2xl
            flex-col items-center
            sm:mt-14
          "
        >
          <div
            className="
              mb-5 h-px w-24
              bg-gradient-to-r
              from-transparent via-[#D5B76A] to-transparent
              sm:w-36
            "
          />

          <p
            className="
              font-playfair
              text-sm
              italic
              leading-relaxed
              text-[#866572]
              sm:text-base
            "
          >
            Hoy celebro todo lo que fui, lo que soy y los sueños que
            están por comenzar.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}