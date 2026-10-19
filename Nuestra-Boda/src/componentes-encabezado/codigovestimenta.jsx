
import React from "react";
import { motion } from "framer-motion";
import { Shirt, Sparkles } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const informacion = {
  titulo: "Código de Vestimenta",
  tipo: "Formal",
  descripcion:
    "Nos encantará verte lucir elegante en esta ocasión tan especial.",
  nota:
    "El color vino tinto está reservado para la quinceañera. Agradecemos elegir otro color para tu vestimenta.",
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
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENTE CÓDIGO DE VESTIMENTA
// ==========================================

const CodigoVestimenta = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FFF8ED]
        px-5
        py-20
        sm:px-8
        sm:py-28
      "
    >
      {/* MARCO EXTERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          border-[#D5B76A]/55
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

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
            mb-7
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
        <h2
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
          {informacion.titulo}
        </h2>

        {/* ÍCONO */}
        <div
          className="
            mt-10
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-[#D5B76A]
            bg-[#F5E3E8]
            text-[#7A1838]
          "
        >
          <Shirt size={35} strokeWidth={1.1} />
        </div>

        {/* TIPO DE VESTIMENTA */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-7
            font-cursiveDancing
            text-5xl
            font-normal
            text-[#7A1838]
            sm:text-6xl
          "
        >
          {informacion.tipo}
        </motion.h3>

        {/* DESCRIPCIÓN */}
        <p
          className="
            mt-5
            max-w-xl
            font-playfair
            text-base
            leading-relaxed
            text-[#5B102B]
            sm:text-lg
          "
        >
          {informacion.descripcion}
        </p>

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
          <span className="h-px w-16 bg-[#D5B76A]" />

          <span className="text-[#A77C25]">
            ✦
          </span>

          <span className="h-px w-16 bg-[#D5B76A]" />
        </div>

        {/* NOTA ESPECIAL */}
        <div
          className="
            w-full
            max-w-xl
            border
            border-[#D5B76A]/65
            bg-[#F5E3E8]
            px-6
            py-8
            sm:px-10
          "
        >
          <p
            className="
              mb-4
              font-playfair
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#7A1838]
            "
          >
            Nota especial
          </p>

          <p
            className="
              font-playfair
              text-sm
              leading-[1.9]
              text-[#5B102B]
              sm:text-base
            "
          >
            {informacion.nota}
          </p>
        </div>

        {/* ORNAMENTO FINAL */}
        <div
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-10 bg-[#D5B76A]" />

          <span className="text-[#A77C25]">
            ✦
          </span>

          <span className="h-px w-10 bg-[#D5B76A]" />
        </div>
      </motion.div>
    </section>
  );
};

export default CodigoVestimenta;
