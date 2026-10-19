
import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const informacion = {
  padre: "Fernando Durán Martínez",
  madre: "María Elena González López",
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
// COMPONENTE PADRES
// ==========================================

const Padres = () => {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#5B102B]
        px-5
        py-24
        sm:px-8
        sm:py-32
      "
    >
      {/* MARCO EXTERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          border-[#D5B76A]/60
          sm:inset-8
        "
      />

      {/* MARCO INTERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-6
          border
          border-[#D5B76A]/25
          sm:inset-11
        "
      />

      {/* ESQUINAS DECORATIVAS */}
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
          border-[#EEDBA5]
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
          border-[#EEDBA5]
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
          border-[#EEDBA5]
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
          border-[#EEDBA5]
          sm:bottom-8
          sm:right-8
        "
      />

      {/* CONTENIDO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-3xl
          flex-col
          items-center
          text-center
        "
      >
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
            size={22}
            strokeWidth={1.2}
            className="text-[#EEDBA5]"
          />

          <span className="h-px w-12 bg-[#D5B76A]" />
        </div>

        {/* TÍTULO */}
        <p
          className="
            mb-4
            font-playfair
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#EEDBA5]
            sm:text-sm
          "
        >
          Con el amor y la bendición de
        </p>

        <h2
          className="
            font-playfair
            text-4xl
            font-normal
            text-[#FFF8ED]
            sm:text-5xl
          "
        >
          Mis Padres
        </h2>

        {/* DIVISOR */}
        <div
          className="
            my-10
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-14 bg-[#D5B76A]/70" />

          <Heart
            size={20}
            strokeWidth={1.2}
            className="text-[#EEDBA5]"
          />

          <span className="h-px w-14 bg-[#D5B76A]/70" />
        </div>

        {/* NOMBRE DEL PADRE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="w-full"
        >
          <p
            className="
              mb-3
              font-playfair
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#D5B76A]
            "
          >
            Mi Padre
          </p>

          <h3
            className="
              font-playfair
              text-2xl
              font-normal
              leading-relaxed
              text-[#FFF8ED]
              sm:text-3xl
            "
          >
            {informacion.padre}
          </h3>
        </motion.div>

        {/* ORNAMENTO ENTRE NOMBRES */}
        <div
          className="
            my-9
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-10 bg-[#D5B76A]/50" />

          <span className="text-[#EEDBA5]">
            ✦
          </span>

          <span className="h-px w-10 bg-[#D5B76A]/50" />
        </div>

        {/* NOMBRE DE LA MADRE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="w-full"
        >
          <p
            className="
              mb-3
              font-playfair
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#D5B76A]
            "
          >
            Mi Madre
          </p>

          <h3
            className="
              font-playfair
              text-2xl
              font-normal
              leading-relaxed
              text-[#FFF8ED]
              sm:text-3xl
            "
          >
            {informacion.madre}
          </h3>
        </motion.div>

        {/* ORNAMENTO FINAL */}
        <div
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-16 bg-[#D5B76A]/65" />

          <Sparkles
            size={19}
            strokeWidth={1.2}
            className="text-[#EEDBA5]"
          />

          <span className="h-px w-16 bg-[#D5B76A]/65" />
        </div>
      </motion.div>
    </section>
  );
};

export default Padres;
