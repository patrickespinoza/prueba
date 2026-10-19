
import React from "react";
import { motion } from "framer-motion";
import { Crown, Heart, Sparkles } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const informacion = {
  frase:
    "Los momentos más hermosos de la vida se vuelven inolvidables cuando los compartimos con las personas que más queremos. Gracias por acompañarme y ser parte de este sueño tan especial.",

  nombre: "Carla Durán",

  despedida: "Con cariño y mucha ilusión",
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENTE FRASE FINAL
// ==========================================

const FraseFinal = () => {
  return (
    <section
      className="
        relative
        isolate
        flex
        min-h-[85vh]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#FFF8ED]
        px-6
        py-24
        sm:px-10
        sm:py-32
      "
    >
      {/* ======================================
          MARCOS DECORATIVOS
          ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          border-[#D5B76A]
          sm:inset-8
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-6
          border
          border-[#D5B76A]/40
          sm:inset-11
        "
      />

      {/* ESQUINAS DORADAS */}

      <div
        className="
          pointer-events-none
          absolute
          left-4
          top-4
          h-12
          w-12
          border-l-2
          border-t-2
          border-[#A77C25]
          sm:left-8
          sm:top-8
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-4
          top-4
          h-12
          w-12
          border-r-2
          border-t-2
          border-[#A77C25]
          sm:right-8
          sm:top-8
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-4
          left-4
          h-12
          w-12
          border-b-2
          border-l-2
          border-[#A77C25]
          sm:bottom-8
          sm:left-8
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-4
          right-4
          h-12
          w-12
          border-b-2
          border-r-2
          border-[#A77C25]
          sm:bottom-8
          sm:right-8
        "
      />

      {/* ======================================
          CONTENIDO PRINCIPAL
          ====================================== */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-3xl
          flex-col
          items-center
          text-center
        "
      >
        {/* CORONA */}

        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mb-8
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-[#D5B76A]
            bg-[#F5E3E8]
            text-[#7A1838]
          "
        >
          <Crown size={30} strokeWidth={1.1} />
        </motion.div>

        {/* ETIQUETA */}

        <p
          className="
            mb-6
            font-playfair
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#7A1838]
            sm:text-sm
          "
        >
          Mis XV Años
        </p>

        {/* ORNAMENTO SUPERIOR */}

        <div
          className="
            mb-8
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-12 bg-[#D5B76A]" />

          <Sparkles
            size={20}
            strokeWidth={1.2}
            className="text-[#A77C25]"
          />

          <span className="h-px w-12 bg-[#D5B76A]" />
        </div>

        {/* TÍTULO */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="
            font-playfair
            text-3xl
            font-normal
            leading-tight
            text-[#5B102B]
            sm:text-4xl
            md:text-5xl
          "
        >
          Gracias por ser parte
          <span className="block">
            de este momento
          </span>
        </motion.h2>

        {/* DIVISOR */}

        <div
          className="
            my-9
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-14 bg-[#D5B76A]" />

          <Heart
            size={19}
            strokeWidth={1.2}
            className="text-[#7A1838]"
          />

          <span className="h-px w-14 bg-[#D5B76A]" />
        </div>

        {/* FRASE PRINCIPAL */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="
            max-w-2xl
            font-playfair
            text-lg
            italic
            leading-[1.9]
            text-[#5B102B]
            sm:text-xl
            md:text-2xl
          "
        >
          “{informacion.frase}”
        </motion.p>

        {/* ORNAMENTO */}

        <div
          className="
            my-10
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-16 bg-[#D5B76A]" />

          <span className="text-[#A77C25]">
            ✦
          </span>

          <span className="h-px w-16 bg-[#D5B76A]" />
        </div>

        {/* DESPEDIDA */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="
            font-playfair
            text-sm
            italic
            tracking-wide
            text-[#7A1838]
            sm:text-base
          "
        >
          {informacion.despedida}
        </motion.p>

        {/* NOMBRE */}

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.6,
          }}
          viewport={{ once: true }}
          className="
            mt-5
            max-w-full
            break-words
            font-cursiveDancing
            text-6xl
            font-normal
            leading-tight
            text-[#7A1838]
            sm:text-7xl
            md:text-8xl
          "
        >
          {informacion.nombre}
        </motion.h3>

        {/* ORNAMENTO FINAL */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          viewport={{ once: true }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-12 bg-[#D5B76A]" />

          <Sparkles
            size={20}
            strokeWidth={1.2}
            className="text-[#A77C25]"
          />

          <span className="h-px w-12 bg-[#D5B76A]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FraseFinal;
