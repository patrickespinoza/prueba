import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Itinerario from "./Itinerario";
import Preguntas from "./Preguntas";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import EventoDireccion from "./componentes-encabezado/Ubicacion";
import DressCodePremium from "./componentes-encabezado/codigovestimenta";
import LineaDelTiempo from "./componentes-encabezado/lineaTiempo";
import AlbumCompartido from "./componentes-encabezado/album";
import CodigoVestimenta from "./componentes-encabezado/codigovestimenta";
import Padres from "./componentes-encabezado/padres";
import FraseFinal from "./componentes-encabezado/FraseFinal";


export default function PaginaPrincipal() {
   
  return (
    <div >

<Padres/>

<EventoDireccion/>

 <LineaDelTiempo/>

<Itinerario />

<CodigoVestimenta/>
 
<AlbumCompartido/>
     
<Regalos/>

<Confirmacion/>

<FraseFinal/>
  
      </div>      
  );
}



