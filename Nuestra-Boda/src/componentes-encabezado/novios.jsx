import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  const datos = {
    quinceanera: "Carla Durán",

    padres: [
      "José Durán",
      "María López",
    ],

    padrinos: [
      "Alejandro Hernández",
      "Patricia Morales",
    ],
  };

  return (
    <section
      className="
        relative
        flex w-full
        items-center justify-center
        overflow-hidden
        bg-[#FCF8F8]
        px-4 py-16
        sm:px-6 sm:py-20
        lg:px-10 lg:py-28
      "
    >
      {/* =================================================
          DECORACIONES DE FONDO
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-24 top-10
          h-72 w-72
          rounded-full
          bg-[#7A1838]/10
          blur-3xl
          sm:h-96 sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-24 bottom-10
          h-72 w-72
          rounded-full
          bg-[#D5B76A]/15
          blur-3xl
          sm:h-96 sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-40 w-[80%]
          -translate-x-1/2
          bg-gradient-to-b
          from-white/70 to-transparent
          blur-2xl
        "
      />

      {/* =================================================
          TARJETA PRINCIPAL
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          w-full max-w-5xl
          overflow-hidden
          rounded-tl-[3rem]
          rounded-br-[3rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          border border-[#D5B76A]/25
          bg-white
          px-5 py-12
          text-center
          shadow-[0_25px_70px_rgba(78,14,40,0.13)]
          sm:rounded-tl-[5rem]
          sm:rounded-br-[5rem]
          sm:px-10 sm:py-16
          md:px-14
          lg:px-20 lg:py-20
        "
      >
        {/* Glow interior */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-br
            from-[#F4E7EB]/80
            via-transparent
            to-[#D5B76A]/10
          "
        />

        {/* Textura */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                #7A1838 0px,
                #7A1838 1px,
                transparent 1px,
                transparent 8px
              )
            `,
          }}
        />

        {/* Esquina decorativa superior */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute left-0 top-0
            h-24 w-24
            rounded-br-full
            bg-[#7A1838]/5
            sm:h-36 sm:w-36
          "
        />

        {/* Esquina decorativa inferior */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute bottom-0 right-0
            h-24 w-24
            rounded-tl-full
            bg-[#D5B76A]/10
            sm:h-36 sm:w-36
          "
        />

        {/* =================================================
            CONTENIDO
        ================================================= */}

        <div className="relative z-10">
          {/* Etiqueta superior */}

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="
              mb-6
              flex items-center justify-center
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

            <p
              className="
                whitespace-nowrap
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#7A1838]
                sm:text-xs
                sm:tracking-[0.45em]
              "
            >
              Mis XV años
            </p>

            <div
              className="
                h-px w-8
                bg-gradient-to-l
                from-transparent to-[#D5B76A]
                sm:w-16
              "
            />
          </motion.div>

          {/* Corona */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              rotate: -8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
            }}
            viewport={{ once: true }}
            className="
              mx-auto mb-4
              flex h-12 w-12
              items-center justify-center
              text-[#D5B76A]
              sm:h-14 sm:w-14
            "
          >
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                d="M10 44L6 20L20 31L32 12L44 31L58 20L54 44H10Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              <path
                d="M12 50H52"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <circle
                cx="6"
                cy="18"
                r="3"
                fill="currentColor"
              />

              <circle
                cx="32"
                cy="9"
                r="3"
                fill="currentColor"
              />

              <circle
                cx="58"
                cy="18"
                r="3"
                fill="currentColor"
              />
            </svg>
          </motion.div>

          {/* Nombre de la quinceañera */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
              mx-auto
              max-w-4xl
              break-words
              font-cursiveDancing
              text-[48px]
              leading-[0.95]
              text-[#7A1838]
              sm:text-[66px]
              md:text-[82px]
              lg:text-[96px]
            "
            style={{
              textShadow: "0 8px 22px rgba(122,24,56,0.12)",
            }}
          >
            {datos.quinceanera}
          </motion.h1>

          {/* Línea dorada */}

          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: "8rem",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="
              mx-auto mt-8
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#D5B76A]
              to-transparent
              sm:mt-10
            "
          />

          {/* Texto de bendición */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.6,
            }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-10"
          >
            <p
              className="
                font-playfair
                text-[20px]
                leading-relaxed
                text-[#40202B]
                sm:text-2xl
                md:text-[28px]
              "
            >
              Con la bendición de Dios
            </p>

            <p
              className="
                mt-1
                font-cursiveDancing
                text-[25px]
                leading-relaxed
                text-[#7A1838]
                sm:text-[32px]
              "
            >
              y el amor de mis padres
            </p>
          </motion.div>

          {/* =================================================
              PADRES
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.75,
            }}
            viewport={{ once: true }}
            className="
              relative
              mx-auto mt-10
              max-w-2xl
              overflow-hidden
              rounded-[2rem]
              border border-[#D5B76A]/25
              bg-[#FCF8F8]
              px-5 py-9
              shadow-[0_14px_40px_rgba(83,24,46,0.08)]
              sm:px-10 sm:py-11
            "
          >
            {/* Brillo tarjeta */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-0
                bg-gradient-to-br
                from-white
                via-transparent
                to-[#7A1838]/5
              "
            />

            <div className="relative z-10">
              <p
                className="
                  mb-7
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#B08D3E]
                  sm:text-xs
                  sm:tracking-[0.4em]
                "
              >
                Mis padres
              </p>

              <div
                className="
                  flex flex-col
                  items-center justify-center
                  gap-4
                  md:flex-row
                  md:gap-8
                "
              >
                <p
                  className="
                    font-playfair
                    text-2xl
                    leading-tight
                    text-[#40202B]
                    sm:text-3xl
                  "
                >
                  {datos.padres[0]}
                </p>

                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    font-cursiveDancing
                    text-3xl
                    text-[#7A1838]
                    sm:text-4xl
                  "
                >
                  &
                </motion.span>

                <p
                  className="
                    font-playfair
                    text-2xl
                    leading-tight
                    text-[#40202B]
                    sm:text-3xl
                  "
                >
                  {datos.padres[1]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ornamento */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
            viewport={{ once: true }}
            className="
              my-10
              flex items-center justify-center
              gap-3
              sm:my-12
            "
          >
            <div
              className="
                h-px w-12
                bg-gradient-to-r
                from-transparent to-[#D5B76A]/80
                sm:w-20
              "
            />

            <span className="text-xl text-[#D5B76A]">
              ✦
            </span>

            <div
              className="
                h-px w-12
                bg-gradient-to-l
                from-transparent to-[#D5B76A]/80
                sm:w-20
              "
            />
          </motion.div>

          {/* =================================================
              PADRINOS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            viewport={{ once: true }}
            className="
              relative
              mx-auto
              max-w-2xl
              overflow-hidden
              rounded-[2rem]
              border border-[#7A1838]/15
              bg-[#7A1838]
              px-5 py-9
              text-white
              shadow-[0_18px_45px_rgba(91,16,43,0.22)]
              sm:px-10 sm:py-11
            "
          >
            {/* Glow padrinos */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -right-16 -top-16
                h-48 w-48
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -bottom-20 -left-16
                h-52 w-52
                rounded-full
                bg-[#D5B76A]/20
                blur-3xl
              "
            />

            <div className="relative z-10">
              <p
                className="
                  font-cursiveDancing
                  text-2xl
                  text-[#F4E5D5]
                  sm:text-3xl
                "
              >
                Con cariño me acompañan
              </p>

              <h2
                className="
                  mt-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#E8CA83]
                  sm:text-xs
                  sm:tracking-[0.45em]
                "
              >
                Mis padrinos
              </h2>

              <div
                className="
                  mt-8
                  flex flex-col
                  items-center justify-center
                  gap-4
                  md:flex-row
                  md:gap-8
                "
              >
                <p
                  className="
                    font-playfair
                    text-2xl
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  {datos.padrinos[0]}
                </p>

                <span
                  className="
                    font-cursiveDancing
                    text-3xl
                    text-[#E8CA83]
                    sm:text-4xl
                  "
                >
                  &
                </span>

                <p
                  className="
                    font-playfair
                    text-2xl
                    leading-tight
                    text-white
                    sm:text-3xl
                  "
                >
                  {datos.padrinos[1]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Frase final */}

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
              delay: 1.15,
            }}
            viewport={{ once: true }}
            className="
              mx-auto mt-10
              max-w-2xl
              font-cursiveDancing
              text-[23px]
              leading-relaxed
              text-[#7A1838]
              sm:mt-12
              sm:text-[28px]
            "
          >
            Gracias por acompañarme en el comienzo de una nueva etapa
            llena de sueños e ilusiones.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Novios;