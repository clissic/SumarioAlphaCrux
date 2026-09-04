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
    fechaOficio: "3 de septiembre de 2026",
    destinatario: "SEÑOR PREFECTO DEL PUERTO DE MONTEVIDEO",
    destinatarioCargo: "Capitán de Navío (CP) Néstor LEMOS",
    estado: "Borrador vivo — se actualiza con cada acta o documento incorporado al análisis",
    notaFormal: "Este texto reproduce la estructura del oficio de elevación. No se incorporan fotografías ni planillas de cámara: a la fecha no obran en el expediente registros fotográficos o audiovisuales de la fase crítica del siniestro. La reconstrucción se apoya en actas, informe del oficial actuante, informe del supervisor de CONMO, exposición del práctico de seguridad, nota de cronología y planos del buque."
  },

  introduccion:
    "Me dirijo a Ud. a efectos de elevar las actuaciones realizadas hasta la fecha en relación con el hundimiento del buque «Alpha Crux», N° OMI 9024621, bandera rusa, ocurrido el 25 de agosto de 2026 en el Muelle B, hangar 7, del Puerto de Montevideo. El presente constituye un borrador de respuesta a la investigación, elaborado sobre la base de las trece actas de información sumaria tomadas —incluidas las de los tres marineros indonesios y la del agente marítimo Daniel URRESTARAZU del 3 de septiembre—, el informe del Oficial Comandante de Guardia, el informe del supervisor de CONMO, la exposición del Práctico de Seguridad, la nota de cronología de la respuesta y los planos del buque. Quedan diligencias pendientes cuya práctica puede modificar, confirmar o descartar las conclusiones provisorias que se formulan.",

  situacion: [
    "El día 25 de agosto de 2026, aproximadamente a las 19:30 horas, el CS (PM) Willian FERRAO, supervisor del Centro de Control Marítimo (CONMO), recibió un llamado de la empresa SAAM Towage solicitando autorización para asistir al pesquero RS «Alpha Crux» atracado en el hangar 7, «por solicitud de la Agencia Marítima», porque el buque se encontraba escorado. FERRAO informó de inmediato al Teniente de Navío (CP) Adrián MOLESINI, Oficial Comandante de Guardia de la Prefectura del Puerto de Montevideo, y al Práctico de Seguridad Portuaria PLADA. Ningún tripulante ni oficial del Alpha Crux notificó el siniestro a la autoridad marítima. Queda acreditada la cadena completa MOON (18:55) → agencia → SAAM (≈19:15) → CONMO (19:30) → Prefectura, según la declaración de URRESTARAZU.",
    "A las 19:36 horas, MOLESINI concurrió al lugar acompañado del Oficial de Guardia AN Diego FURRE. Constataron que el Alpha Crux se hallaba escorado a babor, apoyado sobre la banda de estribor del B/P SURESTE 707 (bandera coreana, OMI 8312851). Abordaron el buque para verificar que no hubiera tripulantes a bordo y, confirmado ello, desembarcaron.",
    "A las 19:43 se contactó a la agencia marítima Oriental Shipping. A las 20:00 se presentó el Sr. Daniel URRESTARAZU, quien informó que se estaba realizando un trasvase de combustible entre tanques y que, por un error en la maniobra, se había producido la escora. En su acta del 3 de septiembre reveló que esa atribución la recibió a las 18:55 del inspector coreano Sr. MOON, junto con una foto del buque escorado y el pedido de remolcador; él mismo había llamado a SAAM ≈19:15. La tesis prematura tiene así autor e hora identificados.",
    "Las maniobras de salvamento (remolcadores CRISTOBAL y MAREADOR/MANEADOR, baqueano Eduardo SUEIRO, práctico de seguridad Gustavo PLADA, buque CARLON, TITON y buzos) resultaron infructuosas. El apoyo sobre el SURESTE 707 hacía que el Alpha Crux se hundiera más de popa; la grúa del CARLON no soportó el peso; el tiro con guinche tampoco dio resultado. Hacia las 22:30–22:57 se decidió retirar el SURESTE 707: URRESTARAZU atribuye la decisión a PLADA, SUEIRO y MOON; PLADA se la atribuye a él. URRESTARAZU había llamado a OSRO Nueva Era a las 20:53; la activación formal del plan se consigna a las 23:10. El Alpha Crux quedó de banda, apoyado en el fondo y sujeto a las bitas mediante sus propios cabos, lo que evitó el hundimiento total. A las 00:30 del 26 de agosto el buque quedó cercado con barreras de contención y se cerraron las acciones en la escena.",
    "Con posterioridad se acreditaron dos datos horarios anteriores al aviso a Prefectura: a las 18:46 Kyongsu PARK avisó al patrón de pesca desde el muelle (buque ya abandonado); a las 18:55 el inspector Sr. MOON avisó a URRESTARAZU con foto y atribución de causa. Las 18:46 fijan un límite posterior al black out y al abandono."
  ],

  desarrollo: [
    "Del cruce de las declaraciones surge, con coincidencia sustancial, el mecanismo del hundimiento. El buque se encontraba atracado, descargado de pescado y carnada, con las artes de pesca estibadas sobre la cubierta principal. En la tarde del 25 de agosto se escoró a babor. Un ojo de buey abierto situado a babor, en el compartimiento del taller del torno, próximo a la sala de refrigeración y a 1–2 metros de la línea de flotación, quedó sumergido. El intento de cerrarlo fracasó por la presión del agua ya embarcada. El agua descendió por la escalera de acceso y el tambucho de la sala de máquinas, mojó el tablero eléctrico principal y provocó el black out. Las bombas de achique quedaron sin alimentación; el generador de emergencia de proa no llegó a encenderse. A partir de ese instante el buque no tenía posibilidad material de recuperación.",
    "Sobre la causa primaria de la escora el expediente no ha cerrado. La tesis del error humano del 2° Oficial de Máquinas —anticipada por la agencia a las 20:00 y sostenida por el 1er Oficial— no resiste el contraste con la prueba: dos declarantes independientes acreditan que la bomba de trasvase nunca fue encendida y que sólo se abrieron válvulas, con un movimiento por gravedad entre tanques de 12–13 m³ a caudal «sumamente menor». Esa maniobra no explica, por sí sola, una escora de 10° ni, menos aún, de 35–40°.",
    "La dirección del trasvase entre los tanques 9 permanece en disputa: el ejecutante material declara babor→estribor (sentido correcto para adrizar); el Capitán y el 1er Oficial sostienen o conjeturan el sentido contrario. Nadie asume haber ordenado la maniobra. El día anterior ya se habían realizado tres trasvases entre los mismos tanques por orden del 1er Oficial, lo que acredita una escora recurrente tratada de modo habitual con trasvases, sin cálculo de estabilidad.",
    "Existen líneas causales alternativas serias y aún inexploradas: intervenciones sobre circuitos de refrigeración abiertos al mar los días 22 y 24 de agosto; personal venido de Corea soldando a bordo piezas en mal estado a las 16:00 del día del siniestro; y una vía de agua en la bodega de carga que motivó el ingreso anticipado a puerto y nunca fue localizada, con el antecedente de que el buque quedó apretado entre hielos en la zafra anterior.",
    "En el momento crítico la cadena de mando estaba rota. El Capitán y el Jefe de Máquinas dormían. El 1er Oficial de Puente —único oficial de guardia— se encontraba en tierra sobre el muro controlando cabos. El 1er Oficial de Puente coreano declara que no hacía guardias y estaba en su camarote viendo televisión. Nadie ha sido identificado ejerciendo la guardia de puente durante la fase crítica. El abandono se produjo sin orden, sin alarma general y sin aplicación de rol."
  ],

  analisisActas: [
    {
      titulo: "Sobre la causa atribuida al trasvase",
      texto: "La atribución prematura de causa al «error en el trasvase» proviene del mensaje de MOON a URRESTARAZU a las 18:55, fue reproducida por la agencia ante MOLESINI a las 20:00 y reiterada por el 1er Oficial. El 2° y el 3° Oficial de Máquinas la desmienten en el punto decisivo: la bomba nunca se encendió. El Capitán y el 1er Oficial de Puente coreano descartan que el trasvase entre los tanques 9 pudiera hundir el buque. La hipótesis dominante del expediente inicial queda, al estado actual de la prueba, refutada como causa suficiente."
    },
    {
      titulo: "Sobre la orden de no encender la bomba",
      texto: "Es la contradicción central entre el 2° Oficial de Máquinas (quien afirma que el 1er Oficial le ordenó no prender la bomba «porque tal vez se podría escorar más») y el 1er Oficial (quien niega que esa conversación haya existido). De su resolución depende determinar si el oficial de guardia impidió activamente el adrizamiento. Konstantin TOKMIN, enviado por el 1er Oficial a sala de máquinas en el intervalo crítico, no ha declarado."
    },
    {
      titulo: "Sobre las reparaciones en puerto",
      texto: "Conviven al menos dos intervenciones distintas: el cambio de tres tramos de caño de refrigeración del motor principal el 22 de agosto, ejecutado por el jefe de máquinas coreano con los tres marineros indonesios —confirmado por los tres en sus actas del 3 de septiembre, con detalles técnicos (mordazas, tornillos, pruebas con válvulas)—; y trabajos del taller portuario el 24 de agosto sobre el enfriamiento del reductor del eje. El Capitán y el Jefe de Máquinas rusos niegan toda reparación. El jefe de máquinas coreano afirma que el ruso «seguro que sabía»."
    },
    {
      titulo: "Sobre el trabajo en caliente el día del hundimiento",
      texto: "Park KWANG JUN sitúa a personal venido de Corea soldando a bordo piezas en mal estado a las 16:00 del 25 de agosto, en coincidencia con la hora que el Jefe de Máquinas fija como inicio de la escora. El hecho no fue indagado a ningún otro declarante. No constan identidad de la empresa, permiso de trabajo, supervisión, piezas soldadas ni ubicación."
    },
    {
      titulo: "Sobre la guardia de puente y el aviso de las 18:46",
      texto: "El patrón de pesca situó a Kyongsu PARK de guardia en el puente. PARK lo niega: no hacía guardias, estaba en su camarote y avisó desde el muelle. Con el 1er Oficial ruso en tierra y el Capitán durmiendo, el puente quedó vacío. La declaración de URRESTARAZU cierra el aviso a la agencia en MOON (18:55) y el pedido a SAAM ≈19:15; CONMO avisó a Prefectura a las 19:30. URRESTARAZU llamó a OSRO a las 20:53, pero la activación formal se consigna a las 23:10. Queda pendiente interrogar a MOON."
    },
    {
      titulo: "Sobre la estructura de mando a bordo",
      texto: "El buque presentaba cargos duplicados entre la línea rusa del armador OO Vodoley y la línea coreana de Dong Nam: dos jefes de máquinas y dos primeros oficiales de puente. Los oficiales coreanos se contradicen sobre su autoridad frente a los rusos; coinciden en que mandaban sobre la tripulación indonesia. Esa dualidad es incompatible con una asignación clara de responsabilidades técnicas."
    },
    {
      titulo: "Sobre la vía de agua previa",
      texto: "Capitán, 1er Oficial, Jefe de Máquinas, patrón de pesca y 1er Oficial de Puente coreano confirman filtración en la bodega de carga. Tras la descarga del pescado no quedó rastro. MURDIONO identifica un tubo interior reparado informalmente por el oficial coreano; éste niega haber conocido avería alguna. El patrón aporta el antecedente del casco apretado entre hielos. URRESTARAZU declara que la agencia nunca fue informada de la filtración: el ingreso se solicitó por descarga de pescado. Ninguna línea fue explorada pericialmente."
    },
    {
      titulo: "Sobre el agente marítimo y el Sr. MOON",
      texto: "La declaración de URRESTARAZU del 3 de septiembre cierra la cadena de aviso y abre un testigo central: el inspector coreano Sr. MOON, remitente del mensaje de las 18:55, representante del armador del SURESTE 707, al tanto de las reparaciones y quien —según el agente— decide el alojamiento de los náufragos. La agencia niega haber conocido los trabajos técnicos a bordo salvo un libre de gases para trabajos menores en cubierta."
    }
  ],

  sucesion: [
    { h: "Estadía en puerto", t: "Ingreso anticipado por vía de agua en bodega (fecha de arribo no acreditada). Desmantelamiento interior sin localizar el punto de ingreso. Descarga de pescado y carnada." },
    { h: "22 ago", t: "Cambio de caño de refrigeración del motor principal (Park KWANG JUN + tres marineros indonesios). Prueba satisfactoria según Park KJ y confirmada por MURDIONO, RAVEL y AGUS en actas del 3/09." },
    { h: "24 ago", t: "Tres trasvases entre tanques 9 por orden del 1er Oficial. Taller portuario interviene el enfriamiento del reductor del eje; se desconecta la bomba de agua de mar." },
    { h: "25 ago ≈16:00", t: "Personal venido de Corea soldaba a bordo (sólo lo declara Park KWANG JUN). El Jefe de Máquinas sitúa el inicio de la escora sobre esta hora." },
    { h: "≈16:30", t: "Park KWANG JUN inspecciona la sala de máquinas: «estaba todo correcto»." },
    { h: "≈17:30", t: "Park KWANG JUN se retira del buque. Capitán y Jefe de Máquinas rusos dormían; 1er Oficial de Puente coreano en su camarote." },
    { h: "Fase crítica", t: "Escora a babor → sumersión del ojo de buey del taller → inundación → black out. Puente sin guardia efectiva. Abandono sin orden ni alarma." },
    { h: "18:46", t: "Kyongsu PARK avisa al patrón de pesca desde el muelle: el buque ya estaba abandonado." },
    { h: "18:55", t: "MOON envía a URRESTARAZU foto del buque escorado y atribuye la causa a trasvase incorrecto de los rusos; pide remolcador." },
    { h: "≈19:15", t: "URRESTARAZU llama a SAAM Towage." },
    { h: "19:30", t: "SAAM pide autorización a CONMO; FERRAO avisa a Prefectura y a PLADA." },
    { h: "19:33–19:36", t: "Zarpan MANEADOR y CRISTOBAL. Arribo del oficial actuante a la escena." },
    { h: "19:43–20:00", t: "MOLESINI contacta a URRESTARAZU (ya en camino / en muelle ≈19:45). La agencia reproduce la atribución de causa recibida de MOON." },
    { h: "20:53", t: "URRESTARAZU llama a OSRO Nueva Era (Fabián SOCA)." },
    { h: "≈22:30–22:57", t: "Abandono de maniobra del CARLON y separación del SURESTE 707 (autoría en disputa: PLADA/SUEIRO/MOON vs. URRESTARAZU)." },
    { h: "23:10–00:30", t: "Activación formal del plan contra la contaminación y cierre del cerco de barreras." }
  ],

  deficiencias: [
    "Ausencia total de procedimientos escritos de trasvase y de comunicación máquinas–puente, reconocida por Capitán y Jefe de Máquinas. Si existían planes de vía de agua pegados en mamparos —como declara el jefe de máquinas coreano—, no se aplicó ninguno.",
    "Ningún cálculo de estabilidad antes de los trasvases en la situación de buque recién descargado con peso alto sobre cubierta. La bomba de trasvase carece de contador de caudal.",
    "Tolerancia normalizada a escoras de 20–25° con el buque atracado, declarada por el Capitán; ausencia de alarma de escora operativa.",
    "Omisión del deber de notificación a la autoridad marítima por parte del Capitán y de la oficialidad de guardia. La autoridad se enteró por SAAM a pedido de la agencia; el informante de la agencia es el Sr. MOON (18:55), aún no interrogado.",
    "Testigos pendientes: Sr. MOON (prioridad), Konstantin TOKMIN (Ch.fishmaster según el rol), Evgenii SHUKOV/SIIUKOV (2nd mate), KWON TAE GUN (CHIEF TRAL) y el personal venido de Corea que soldaba a bordo el 25 de agosto. El rol de tripulación (41 plazas) ya está incorporado.",
    "Defectos formales del expediente: actas con intérprete en horarios solapados; dos actas con hora de cierre anterior a la apertura; pregunta del cuestionario del patrón de pesca reproducida en el acta del 1er Oficial de Puente coreano; saltos de numeración en cuestionarios.",
    "Discrepancias horarias entre el informe de FERRAO, el de MOLESINI, la exposición de PLADA y la nota de cronología —en especial el zarpe del CARLON (20:37 vs. 22:00) y la decisión de retirar el SURESTE 707—.",
    "Ningún registro objetivo de la fase crítica incorporado al expediente: sin CCTV, sin grabaciones de CONMO contrastadas, sin tráfico VHF, sin registros telefónicos de la agencia ni de SAAM. Sí se incorporaron planos del buque y la serie de viento Telemetry+ del 25–26/08 (que descarta la hipótesis meteorológica del 2° Oficial)."
  ],

  conclusiones: [
    "Queda acreditado que el Alpha Crux se perdió por inundación a través de un ojo de buey abierto a babor que quedó sumergido al escorarse el buque, con black out posterior por mojado del tablero principal y pérdida de toda capacidad de achique.",
    "Queda acreditado que el abandono se produjo sin orden ni alarma, que el puente careció de guardia efectiva en la fase crítica y que ningún tripulante notificó el siniestro a la autoridad marítima.",
    "Queda acreditado que existió demora relevante entre el hundimiento y la respuesta institucional: aviso a Prefectura a las 19:30 (vía SAAM Towage por pedido de la agencia), activación del plan contra la contaminación a las 23:10 y cierre del cerco a las 00:30, con ≈300 toneladas de gasoil a bordo.",
    "La tesis del error humano por trasvase forzado de combustible, originada en el mensaje de MOON a las 18:55 y reproducida por la agencia a las 20:00, no se sostiene con la prueba hoy obrante: la bomba no se encendió y el caudal por gravedad entre los tanques 9 es insuficiente para explicar la escora observada. Tampoco el viento: los registros Telemetry+ muestran brisa débil casi de popa en la ventana crítica.",
    "La causa primaria de la escora inicial permanece sin establecer. Las hipótesis más consistentes con el conjunto de la prueba apuntan a una condición de estabilidad deficiente de partida, eventualmente agravada por una vía de inundación previa no detectada (reparaciones sobre circuitos de agua de mar, trabajo en caliente el día del siniestro, o la vía de agua de bodega nunca localizada). Su determinación exige pericia de estabilidad, inspección del casco y pericia de los circuitos intervenidos.",
    "Coexistían a bordo dos líneas de autoridad con cargos duplicados (rusa y coreana), sin asignación clara de responsabilidades técnicas. Esa dualidad, sumada a la tolerancia a escoras extremas y a la ausencia de procedimientos y cálculos, configura un régimen de operación incompatible con la seguridad de un buque atracado con centenares de toneladas de combustible.",
    "Subsisten contradicciones centrales —en particular la orden de no encender la bomba y la dirección del trasvase— cuya resolución requiere el testimonio de Konstantin TOKMIN y careos entre los oficiales involucrados.",
    "El expediente presenta deficiencias formales y de instrucción que deben subsanarse antes de toda elevación definitiva: informantes no interrogados (incluidos agentes marítimos, funcionarios de salvamento y patrones de buques intervinientes), defectos de actas e inexistencia de prueba objetiva."
  ],

  recomendaciones: [
    "Continuar la instrucción con carácter inmediato: interrogar al inspector Sr. MOON, a Konstantin TOKMIN y a Evgenii SIIUKOV; identificar e interrogar al personal venido de Corea que soldaba a bordo el 25 de agosto; ampliar declaraciones a Park KWANG JUN, Kyongsu PARK, FROLOV, BELIKOV, Ivanov YURI y German IVAN en los puntos señalados en el plan de diligencias; practicar careo entre FROLOV y ABDRAKHMANOV sobre la orden de no encender la bomba.",
    "Disponer pericia de estabilidad y reconstrucción de la condición de carga del 25 de agosto, pericia de los circuitos de refrigeración intervenidos los días 22 y 24, examen de toda soldadura reciente, inspección subacuática del casco (incluida la zona de bodega y daños compatibles con presión de hielo) y verificación material de válvulas, bombas, tanques, ojos de buey y sistema eléctrico de emergencia.",
    "Incorporar de inmediato la prueba objetiva disponible: CCTV del puerto y de ANP del 25 de agosto; registros y grabaciones de CONMO contrastados con el informe de FERRAO; despacho de SAAM Towage y de Oriental Shipping (quién ordenó a SAAM antes de las 19:30); libro de guardias de puente; rol de tripulación; contratos y certificados de competencia de la línea rusa y de Dong Nam; historial de clase e informes PSC.",
    "Evaluar la responsabilidad administrativa del Capitán por la omisión de notificación a la autoridad marítima y por el régimen de operación que toleró escoras extremas sin procedimientos ni cálculos de estabilidad.",
    "Subsanar los defectos formales de las actas (horarios de intérprete, cierres anteriores a la apertura, arrastre de plantilla y saltos de numeración) mediante certificación o ratificación, a fin de preservar la validez del núcleo probatorio.",
    "Verificar el cumplimiento de las obligaciones del armador y del agente respecto de la tripulación siniestrada, atendiendo a la disparidad de trato entre la línea coreana alojada en hotel y los marineros indonesios que declaran haber dormido en el piso del SURESTE 701 durante los primeros días.",
    "Mantener el presente como borrador de trabajo hasta completar las diligencias esenciales. Sólo entonces elevar el sumario con conclusiones definitivas sobre la causa primaria de la escora."
  ],

  cierre:
    "Siendo esto todo cuanto hay para informar al estado actual de la instrucción, lo saludan a Ud. atentamente."
};
