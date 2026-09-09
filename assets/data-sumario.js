/* Borrador vivo del texto del sumario.
   Sigue la estructura del oficio modelo (Situación → Características →
   Investigación A–E → Conclusiones → Recomendaciones). El contenido
   se elabora exclusivamente a partir de las actuaciones del ALPHA CRUX;
   no incorpora el cuerpo del Word de referencia (pertenecía a otro
   siniestro). Las listas de actas, conteos y pendientes se completan
   en tiempo de render desde CASO / ANALISIS. */

window.SUMARIO = {
  meta: {
    titulo: "INVESTIGACIÓN DE SINIESTRO MARÍTIMO",
    asunto: "Hundimiento del B/P Alpha Crux",
    fechaOficio: "8 de septiembre de 2026",
    destinatario: "SEÑOR PREFECTO DEL PUERTO DE MONTEVIDEO",
    destinatarioCargo: "Capitán de Navío (CP) Néstor LEMOS",
    estado: "Borrador vivo — se actualiza con cada acta o documento incorporado al análisis",
    notaFormal: "Este texto reproduce la estructura del oficio de elevación. Se incorporaron seis videos de los remolcadores entre 19:27:35 y 22:58:38; aún no obra CCTV de la fase inicial. La reconstrucción se apoya además en diecisiete actas, informes, cronología, planos, rol y meteorología."
  },

  introduccion:
    "Me dirijo a Ud. a efectos de elevar las actuaciones realizadas hasta la fecha en relación con el hundimiento del buque «Alpha Crux», N° OMI 9024621, bandera rusa, ocurrido el 25 de agosto de 2026 en el Muelle B, hangar 7, del Puerto de Montevideo. El presente constituye un borrador elaborado sobre la base de diecisiete actas de información sumaria —incluidas las ampliaciones de BELIKOV e Ivanov YURI y la declaración de Konstantin TOKMIN del 8 de septiembre—, los informes operativos de los patrones de SAAM, los informes del Oficial Comandante de Guardia y CONMO, la exposición del Práctico de Seguridad, la cronología, planos, rol y meteorología. Quedan diligencias pendientes cuya práctica puede modificar las conclusiones provisorias.",

  situacion: [
    "El día 25 de agosto de 2026, aproximadamente a las 19:30 horas, el CS (PM) Willian FERRAO, supervisor del Centro de Control Marítimo (CONMO), recibió un llamado de la empresa SAAM Towage solicitando autorización para asistir al pesquero RS «Alpha Crux» atracado en el hangar 7, «por solicitud de la Agencia Marítima», porque el buque se encontraba escorado. FERRAO informó de inmediato al Teniente de Navío (CP) Adrián MOLESINI, Oficial Comandante de Guardia de la Prefectura del Puerto de Montevideo, y al Práctico de Seguridad Portuaria PLADA. Ningún tripulante ni oficial del Alpha Crux notificó el siniestro a la autoridad marítima. Según URRESTARAZU, la cadena comienza en Kibong MOON a las 18:55; MOON confirma retiro 17:10 y retorno 19:00. El contenido exacto del mensaje queda como nudo documentado (no indagado en su acta); no se dispone ampliación.",
    "A las 19:36 horas, MOLESINI concurrió al lugar acompañado del Oficial de Guardia AN Diego FURRE. Constataron que el Alpha Crux se hallaba escorado a babor, apoyado sobre la banda de estribor del B/P SURESTE 707 (bandera coreana, OMI 8312851). Abordaron el buque para verificar que no hubiera tripulantes a bordo y, confirmado ello, desembarcaron.",
    "A las 19:43 se contactó a la agencia marítima Oriental Shipping. A las 20:00 se presentó el Sr. Daniel URRESTARAZU, quien informó que se estaba realizando un trasvase de combustible entre tanques y que, por un error en la maniobra, se había producido la escora. En su acta del 3 de septiembre atribuyó esa tesis al mensaje de MOON a las 18:55. MOON, el 4 de septiembre, declara no saber la causa del hundimiento: la autoría del contenido del aviso queda en disputa.",
    "Las maniobras de salvamento (remolcadores CRISTOBAL y MANEADOR, baqueano Eduardo SUEIRO, práctico de seguridad Gustavo PLADA, buque CARLON, TITON y buzos) resultaron infructuosas. El apoyo sobre el SURESTE 707 hacía que el Alpha Crux se hundiera más de popa; la grúa del CARLON no soportó el peso; el tiro con guinche tampoco dio resultado. Hacia las 22:30–22:57 se decidió retirar el SURESTE 707: URRESTARAZU atribuye la decisión a PLADA, SUEIRO y MOON; PLADA se la atribuye a él. URRESTARAZU había llamado a OSRO Nueva Era a las 20:53; la activación formal del plan se consigna a las 23:10. El Alpha Crux quedó de banda, apoyado en el fondo y sujeto a las bitas mediante sus propios cabos, lo que evitó el hundimiento total. A las 00:30 del 26 de agosto el buque quedó cercado con barreras de contención y se cerraron las acciones en la escena.",
    "Los patrones de MANEADOR y CRISTOBAL describen su espera por PLADA/SUEIRO como medida de seguridad: retirar al SURESTE 707 provocaría el hundimiento inmediato del Alpha Crux. Sitúan PLADA/SUEIRO a las 20:15 (compatible con la ventana 20:15–20:33) y el desatraque a las 21:10. Sin más datos, la separación queda anclada a 22:45–22:58 (Willian FERRAO + video CRISTOBAL); la hora 21:10 se conserva como discrepancia corporativa no resoluble. El efecto material (hundimiento al retirar el sostén) sí queda acreditado.",
    "Las maniobras posteriores con CARLON, TITON y buzos resultaron infructuosas. URRESTARAZU llamó a OSRO a las 20:53; la activación formal se consigna a las 23:10. El Alpha Crux quedó apoyado en el fondo y sujeto a las bitas. A las 00:30 quedó cercado con barreras.",
    "Con posterioridad se acreditaron horarios anteriores al aviso a Prefectura: a las 17:10 MOON se retiró al hotel; a las 18:46 Kyongsu PARK avisó al patrón desde el muelle; según URRESTARAZU, a las 18:55 MOON le envió foto y atribución de causa; a las 19:00 MOON volvió al buque ya escorado."
  ],

  desarrollo: [
    "Del cruce de las declaraciones surge, con coincidencia sustancial, el mecanismo del hundimiento. El buque se encontraba atracado, descargado de pescado y carnada, con las artes de pesca estibadas sobre la cubierta principal. En la tarde del 25 de agosto se escoró a babor. Un ojo de buey abierto situado a babor, en el compartimiento del taller del torno, próximo a la sala de refrigeración y a 1–2 metros de la línea de flotación, quedó sumergido. El intento de cerrarlo fracasó por la presión del agua ya embarcada. El agua descendió por la escalera de acceso y el tambucho de la sala de máquinas, mojó el tablero eléctrico principal y provocó el black out. Las bombas de achique quedaron sin alimentación; el generador de emergencia de proa no llegó a encenderse. A partir de ese instante el buque no tenía posibilidad material de recuperación.",
    "Sobre la causa primaria de la escora el expediente no ha cerrado. La tesis del error humano del 2° Oficial de Máquinas —anticipada por la agencia a las 20:00 y sostenida por el 1er Oficial— no resiste el contraste con la prueba: dos declarantes independientes acreditan que la bomba de trasvase nunca fue encendida y que sólo se abrieron válvulas, con un movimiento por gravedad entre tanques de 12–13 m³ a caudal «sumamente menor». Esa maniobra no explica, por sí sola, una escora de 10° ni, menos aún, de 35–40°.",
    "La dirección babor→estribor queda fuertemente corroborada: la declara el ejecutante y TOKMIN afirma que FROLOV se la comunicó durante el hecho. Era el sentido correcto para adrizar. La posterior conjetura de FROLOV de un trasvase hacia babor es incompatible con su propio conocimiento contemporáneo. Nadie asume haber ordenado la maniobra.",
    "La línea causal de refrigeración se refuerza. Ivanov YURI rectifica su negativa original: admite que el caño estaba podrido, que Park KWANG JUN lo retiró sin aviso ni plan y que no conoce prueba alguna. Describe una línea desde una toma de fondo al motor principal con ramal hacia la reductora. Se contradice sobre si vio las válvulas abiertas o cerradas. BELIKOV mantiene que ignoraba la obra porque ninguno de los dos jefes se la comunicó.",
    "En el momento crítico la cadena de mando estaba rota. TOKMIN confirma que FROLOV —único oficial de guardia— bajó al muelle antes del black out y lo dejó en el puente, pese a que era patrón de pesca y no oficial de guardia. También contradice el informe que FROLOV le atribuyó: nunca entró a máquinas ni dijo haber visto a los maquinistas escorando el buque. El Capitán y el Jefe de Máquinas dormían; el abandono ocurrió sin orden ni alarma.",
    "Los informes de los patrones no aportan conocimiento directo sobre la causa inicial: expresan que la versión del trasvase incorrecto les fue comunicada por la agencia. Sí aportan observación profesional directa sobre la fase de respuesta: pérdida total de estabilidad transversal al arribar, función de sostén del SURESTE 707, riesgo para ambos buques y efecto inmediato de retirarlo."
  ],

  analisisActas: [
    {
      titulo: "Sobre la causa atribuida al trasvase",
      texto: "URRESTARAZU atribuye a MOON el mensaje de las 18:55 con tesis de trasvase incorrecto. MOON declara no saber la causa y no fue preguntado por ese mensaje. La hipótesis queda refutada como causa suficiente (bomba apagada); la autoría del contenido del aviso queda en disputa."
    },
    {
      titulo: "Sobre la orden de no encender la bomba",
      texto: "TOKMIN ya declaró, pero no presenció la conversación: dice no haber oído orden alguna. No resuelve la oposición entre ABDRAKHMANOV y FROLOV. Sí afecta la credibilidad de FROLOV al negar haber entrado a máquinas o haberle dado el informe que éste le atribuye."
    },
    {
      titulo: "Sobre las reparaciones en puerto",
      texto: "Ivanov rectifica su negativa: conoció el retiro de un caño podrido por Park, sin plan ni prueba conocida. Describe una línea toma de fondo→motor→ramal a reductora, que puede unificar referencias antes tratadas como obras separadas. Su versión sobre válvulas abiertas/cerradas es contradictoria. BELIKOV mantiene que nadie le informó."
    },
    {
      titulo: "Sobre el trabajo en caliente el día del hundimiento",
      texto: "Park KWANG JUN sitúa a personal venido de Corea soldando a las 16:00. Kibong MOON niega personal de tierra y sitúa la soldadura en cubierta por tripulantes. Contradicción documentada, no perseguible: no se prioriza identificar ni interrogar a ese personal."
    },
    {
      titulo: "Sobre la guardia de puente y el aviso de las 18:46",
      texto: "Hoseon SHIN situó a Kyongsu PARK de guardia; PARK lo niega (contradicción documentada). URRESTARAZU sitúa el aviso a la agencia en MOON (18:55); MOON confirma retiro 17:10 y retorno 19:00. Actas cerradas salvo SIIUKOV."
    },
    {
      titulo: "Sobre la estructura de mando a bordo",
      texto: "BELIKOV confirma que los oficiales coreanos estaban subordinados a su jerarquía; Ivanov sólo recibía órdenes del Capitán ruso. La autoridad formal queda fijada, pero el control efectivo seguía fragmentado: Park ejecutó una reparación crítica sin plan ni aviso y dirigía a los indonesios."
    },
    {
      titulo: "Sobre Konstantin TOKMIN",
      texto: "Es el patrón de pesca ruso, no coreano, y figura Ch.fishmaster en el rol. Corrobora que FROLOV conocía el trasvase babor→estribor y que bajó al muelle antes del black out. Niega haber entrado a sala de máquinas y no reconoce el informe con que FROLOV pretendía respaldar su versión. Su imputación al 2° Oficial es una opinión sin observación directa."
    },
    {
      titulo: "Sobre la vía de agua previa",
      texto: "Capitán, 1er Oficial, Jefe de Máquinas, patrón de pesca y 1er Oficial de Puente coreano confirman filtración en la bodega de carga. Tras la descarga del pescado no quedó rastro. MURDIONO identifica un tubo interior reparado informalmente por el oficial coreano; éste niega haber conocido avería alguna. El patrón aporta el antecedente del casco apretado entre hielos. URRESTARAZU declara que la agencia nunca fue informada de la filtración: el ingreso se solicitó por descarga de pescado. Ninguna línea fue explorada pericialmente."
    },
    {
      titulo: "Sobre el inspector Kibong MOON",
      texto: "Declaró el 4 de septiembre. Inspector técnico de Dong Nam desde 2019. Acredita la línea de caños del motor→reductora, omisión de aviso a la autoridad uruguaya por ese trabajo, y la aclaración de que «Rambla» es el nombre anterior del buque en los planos. No indaga el acta el mensaje 18:55, el pedido de remolcador, el retiro del 707 ni el alojamiento de los indonesios."
    },
    {
      titulo: "Sobre los patrones de MANEADOR y CRISTOBAL",
      texto: "VIERA y RODRÍGUEZ confirman que la tesis del trasvase les llegó desde la agencia, justifican la espera por PLADA/SUEIRO y acreditan que el SURESTE 707 impedía el hundimiento inmediato. Sus informes (casi idénticos) sitúan el desatraque a las 21:10; la ancla objetiva es 22:45–22:58 (FERRAO + video). No se piden nuevas ratificaciones por este punto."
    }
  ],

  sucesion: [
    { h: "Estadía en puerto", t: "Ingreso anticipado por vía de agua en bodega (fecha de arribo no acreditada). Desmantelamiento interior sin localizar el punto de ingreso. Descarga de pescado y carnada." },
    { h: "22 ago", t: "Cambio de caño de refrigeración del motor principal (Park KWANG JUN + tres marineros indonesios). Prueba satisfactoria según Park KJ y confirmada por MURDIONO, RAVEL y AGUS en actas del 3/09." },
    { h: "24 ago", t: "Tres trasvases entre tanques 9 por orden del 1er Oficial. Taller portuario interviene el enfriamiento del reductor; se desconecta la bomba de agua de mar. MOON entrega caños al jefe de máquinas coreano para el recambio del enfriamiento del motor→reductora." },
    { h: "25 ago ≈16:00", t: "Park KWANG JUN sitúa personal venido de Corea soldando; MOON lo niega. El Jefe de Máquinas sitúa el inicio de la escora sobre esta hora." },
    { h: "≈16:30", t: "Park KWANG JUN inspecciona la sala de máquinas: «estaba todo correcto»." },
    { h: "≈17:10", t: "Kibong MOON se retira del buque al hotel tras supervisar tareas." },
    { h: "≈17:30", t: "Park KWANG JUN se retira del buque. Capitán y Jefe de Máquinas rusos dormían; 1er Oficial de Puente coreano en su camarote." },
    { h: "Fase crítica", t: "Escora a babor → sumersión del ojo de buey del taller → inundación → black out. Puente sin guardia efectiva. Abandono sin orden ni alarma." },
    { h: "18:46", t: "Kyongsu PARK avisa al patrón de pesca desde el muelle: el buque ya estaba abandonado." },
    { h: "18:55", t: "Según URRESTARAZU: MOON le envía foto y atribuye causa a trasvase incorrecto; pide remolcador. MOON no fue preguntado por ese mensaje." },
    { h: "19:00", t: "MOON vuelve al buque y lo encuentra ya escorado." },
    { h: "≈19:15", t: "URRESTARAZU llama a SAAM Towage." },
    { h: "19:30", t: "SAAM pide autorización a CONMO; FERRAO avisa a Prefectura y a PLADA." },
    { h: "19:06–19:35", t: "SAAM registra solicitud del cliente 19:06; patrones reciben aviso 19:25; FERRAO registra zarpe 19:33 y patrones salida 19:35." },
    { h: "19:36", t: "Arribo del oficial actuante a la escena." },
    { h: "19:43–20:00", t: "MOLESINI contacta a URRESTARAZU (ya en camino / en muelle ≈19:45). La agencia reproduce la atribución de causa recibida de MOON." },
    { h: "20:53", t: "URRESTARAZU llama a OSRO Nueva Era (Fabián SOCA)." },
    { h: "22:45–22:58", t: "Separación del SURESTE 707 anclada a FERRAO + video CRISTOBAL. La hora 21:10 de patrones SAAM = discrepancia corporativa no resoluble. Hundimiento inmediato al perder el sostén." },
    { h: "23:10–00:30", t: "Activación formal del plan contra la contaminación y cierre del cerco de barreras." }
  ],

  deficiencias: [
    "Ausencia total de procedimientos escritos de trasvase y de comunicación máquinas–puente, reconocida por Capitán y Jefe de Máquinas.",
    "Ningún cálculo de estabilidad antes de los trasvases en la situación de buque recién descargado con peso alto sobre cubierta. La bomba de trasvase carece de contador de caudal.",
    "Tolerancia normalizada a escoras de 20–25° con el buque atracado; ausencia de alarma de escora operativa.",
    "Omisión del deber de notificación a la autoridad marítima. La autoridad se enteró por SAAM a pedido de la agencia (cadena MOON → agencia → SAAM → CONMO).",
    "Única declaración pendiente de tripulación: Evgenii SIIUKOV (alias SHUKOV EVGENII, 2nd mate). Resto de actas cerradas.",
    "Defectos formales documentados: solapamientos de intérprete, cierres imposibles, saltos de numeración. No se exige certificación formal del intérprete.",
    "Separación del SURESTE 707: ancla 22:45–22:58 (Willian FERRAO + video); 21:10 de patrones SAAM = discrepancia corporativa no resoluble.",
    "Libros y registros de a bordo se consideran perdidos con el pecio; no se fundan diligencias en su recuperación.",
    "Seis videos MANEADOR/CRISTOBAL (19:27:35–22:58:38) incorporados; análisis del investigador pendiente de completar. Faltan CCTV de la fase inicial y registros CONMO/VHF/AIS contrastados."
  ],

  conclusiones: [
    "Queda acreditado que el Alpha Crux se perdió por inundación a través de un ojo de buey abierto a babor que quedó sumergido al escorarse el buque, con black out posterior por mojado del tablero principal y pérdida de toda capacidad de achique.",
    "Queda acreditado que el abandono se produjo sin orden ni alarma, que el puente careció de guardia efectiva en la fase crítica y que ningún tripulante notificó el siniestro a la autoridad marítima.",
    "Queda acreditado que existió demora relevante entre el hundimiento y la respuesta institucional: aviso a Prefectura a las 19:30 (vía SAAM), activación del plan contra la contaminación a las 23:10 y cierre del cerco a las 00:30, con ≈300 toneladas de gasoil a bordo.",
    "Los patrones acreditan que el SURESTE 707 era el sostén temporal del Alpha Crux y que su retiro precipitó el hundimiento final inmediato. La separación se ancla a 22:45–22:58 (FERRAO + video). La decisión fue necesaria para evitar un segundo siniestro y no constituye la causa primaria.",
    "La tesis del error humano por trasvase forzado de combustible no se sostiene como causa suficiente: la bomba no se encendió. Tampoco el viento (Telemetry+ oficial) explica la escora.",
    "La dirección babor→estribor queda fuertemente corroborada por ABDRAKHMANOV y TOKMIN. La causa primaria permanece sin establecer; hipótesis principales: estabilidad deficiente y posible vía en la línea de refrigeración / toma de fondo (caño podrido admitido por Ivanov).",
    "Hoseon SHIN = patrón de pesca coreano efectivo (Guarantee engineer del rol = nota secundaria). TOKMIN = Ch.fishmaster / patrón de pesca ruso. Coexistencia de roles, no impugnación.",
    "TOKMIN contradice un extremo central de FROLOV y confirma que éste dejó el puente antes del black out. Contradicciones restantes (bomba, soldadura Park/MOON, 21:10 vs 22:45) quedan documentadas / no dilucidables por nuevas actas.",
    "Instrucción en fase de cierre salvo: declaración de SIIUKOV y pericias técnicas / prueba objetiva externa."
  ],

  recomendaciones: [
    "Interrogar a Evgenii SIIUKOV (alias SHUKOV) sobre los cálculos de estabilidad. No disponer ampliaciones ni careos del resto de declarantes.",
    "Disponer pericia de estabilidad y reconstrucción de la condición de carga del 25 de agosto; pericia de refrigeración/toma de mar; inspección subacuática del casco; verificación de válvulas, bombas, tanques, ojos de buey y sistema eléctrico de emergencia. No priorizar pericia de soldadura ni identificación de personal venido de Corea.",
    "Completar el análisis de los seis videos; sincronizar con AIS/VHF si se incorporan. Requerir CCTV, CONMO, bitácoras SAAM y documentación estatutaria externa. No pedir libros de a bordo (perdidos).",
    "Tomar como oficial la serie de viento Telemetry+ (Nettra); no requerir certificación ANP/INUMET.",
    "Evaluar la responsabilidad administrativa del Capitán por omisión de notificación y régimen de escoras sin procedimientos ni cálculos.",
    "Consignar defectos formales (solapamientos de intérprete, numeración) sin exigir certificación del intérprete.",
    "Verificar obligaciones del armador/agente respecto de la tripulación siniestrada (disparidad coreanos/indonesios).",
    "Mantener el presente como borrador hasta la declaración de SIIUKOV y las pericias esenciales; luego elevar con conclusiones definitivas sobre la causa primaria."
  ],

  cierre:
    "Siendo esto todo cuanto hay para informar al estado actual de la instrucción, lo saludan a Ud. atentamente."
};
