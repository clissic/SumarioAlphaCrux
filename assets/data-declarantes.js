/* Datos de los interrogatorios del sumario "Alpha Crux".
   Transcripción textual de las actas de información sumaria obrantes en /files. */

window.CASO = {
  buque: {
    nombre: "Alpha Crux",
    tipo: "Buque pesquero (factoría)",
    bandera: "Rusa",
    omi: "9024621",
    eslora: "52,35 m",
    manga: "9,85 m",
    armador: "OO Vodoley",
    agencia: "Oriental Shipping (Sr. Daniel URRESTARAZU LEINDEKAR)",
    lugar: "Muelle B, hangar 7 — Puerto de Montevideo",
    fecha: "25 de agosto de 2026",
    combustible: "≈300–303 t de gasoil a bordo",
    apoyado: "Escorado a babor, apoyado sobre la banda de estribor del B/P SURESTE 707 (bandera coreana, OMI 8312851)"
  },

  instructores: [
    { nombre: "Capitán de Corbeta (CP) Carlos RODRIGUEZ", rol: "Oficial Instructor" },
    { nombre: "Teniente de Navío (CP) Joaquín PÉREZ CORIA", rol: "Oficial Instructor — Jefe Depto. Despacho de Buques" },
    { nombre: "Teniente de Navío (CP) Adrián MOLESINI", rol: "Oficial Instructor — actuó en la escena como Oficial Comandante de Guardia" }
  ],

  declarantes: [
    /* ------------------------------------------------------------------ 1 */
    {
      id: "capitan",
      nombre: "Andrei BELIKOV",
      cargo: "Capitán del buque",
      cargoCorto: "Capitán",
      grupo: "rusa",
      ficha: {
        Nacionalidad: "Rusa",
        Pasaporte: "776549084",
        "Estado civil": "Casado",
        Profesión: "Marino mercante",
        Empresa: "OO Vodoley",
        "Embarcado desde": "1 de abril de 2026 (embarcó en Montevideo)"
      },
      acta: {
        fecha: "27 de agosto de 2026",
        inicio: "10:00",
        cierre: "13:30",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Nicolai GOLUBEI FORTUNA (moldavo, C.I. 4.480.389-4)",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 43,
        archivo: "ACTA DE INFORMACION SUMARIA - Capitan.docx"
      },
      posicion: "Descansando en su camarote durante toda la fase de escora. Fue el último en abandonar el buque, con 35–40° de escora.",
      tesis: "El trasvase 9 Er → 9 Br no pudo causar el hundimiento; la escora generada no habría sido significativa. El buque \"es muy estable\".",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil, dirección y profesión.", r: "Andrei BELIKOV, ruso, Nro. Pasaporte 776549084, casado, marino mercante." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga para qué empresa trabaja, qué rol cumple y desde cuándo.", r: "La empresa es OO Vodoley, Capitán mercante, en el Alpha Crux desde el 1ero de abril de 2026, embarque aquí en Montevideo." },
        { n: 4, p: "Para que diga cuáles son sus responsabilidades como Capitán.", r: "Soy responsable del buque, del equipaje, de su tripulación, de su cargamento y provisiones." },
        { n: 5, p: "Para que diga si conoce las características generales del buque, particularmente su distribución, tanques, sala de máquinas y sistema de combustible.", r: "Sí, los conozco." },
        { n: 6, p: "Para que diga si ya había realizado este tipo de operación de trasvase de combustible en su barco. En caso afirmativo, indique entre qué tanques y bajo qué plan y/o procedimientos.", r: "En alta mar siempre se trasvasa combustible a diferentes tanques para mejorar la estabilidad del buque. Hay un plan de estabilización del buque.", tags: ["procedimientos"], clave: true },
        { n: 7, p: "Para que diga en qué condiciones se encontraba el buque inmediatamente antes de iniciarse la operación de trasvase, indicando condición de carga y estabilidad.", r: "En el buque el pescado y la carnada ya se había descargado. Lo único que había a bordo eran las artes de pesca que se encontraban todas sobre la cubierta principal. En el buque había alrededor de 300 toneladas de gasoil. En los tanques Nro. 10 (babor y estribor) había aproximadamente 49 metros cúbicos de gasoil cada uno, en su capacidad máxima. En los tanques Nro. 1 de proa (babor y estribor) había una cantidad de 18 metros cúbicos de gasoil, su capacidad máxima es 42 metros cúbicos. El resto del gasoil estaba en otros tanques pero no recuerdo particularmente en cuáles.", tags: ["estabilidad", "tanques"], clave: true },
        { n: 8, p: "Para que diga con qué cantidad de combustible ingresó a puerto, si hizo combustible en puerto y cuánto combustible tenía al momento del incidente.", r: "Ingreso a puerto con aproximadamente unas 300 toneladas de combustible. No hice combustible en puerto. Al momento del incidente tenía las mismas 300 toneladas de combustible que al ingreso a puerto.", tags: ["contaminación"] },
        { n: 9, p: "Para que diga qué tipo de combustible llevaba a bordo.", r: "Utiliza gasoil." },
        { n: 10, p: "Para que diga si estaba en conocimiento de alguna avería, deficiencia, condición de mantenimiento o circunstancia previa que pudiera afectar la estabilidad o estanqueidad del buque.", r: "Ingresamos a puerto porque en la bodega comenzó a filtrar agua. En puerto descargamos el pescado para identificar de dónde era la filtración. Entraba agua por la filtración en altamar sólo cuando había tormenta. Luego de desembarcar la carga no logramos identificar dónde estaba la filtración.", tags: ["estanqueidad", "vía de agua"], clave: true },
        { n: 11, p: "Para que diga si se encontraba realizando o se realizaron recientemente, reparaciones o modificaciones a los tanques, tuberías, bombas, válvulas, mamparos, generadores o sistemas de combustible.", r: "No, no se hizo nada de eso.", tags: ["contradicción"], clave: true },
        { n: 12, p: "Para que diga quién estaba a cargo de la operación de trasvase de combustible.", r: "El responsable fue 2do ingeniero, Igor ABDRAKHMANOV, el cual estaba en su turno de guardia.", tags: ["cadena de mando"], clave: true },
        { n: 13, p: "Para que diga dónde se encontraba el Jefe de Máquinas al momento de la operación de trasvase de combustible.", r: "No puedo contestar porque no sé dónde se encontraba." },
        { n: 14, p: "Para que diga cuál fue el motivo por el cual se realizó la operación de trasvase de combustible.", r: "El trasvaso que se realizó de los tanques de popa a proa fue para lograr trabajar mejor en la identificación de la ubicación de la avería. En cuanto al trasvaso transversal de combustible entre los tanques Nro. 9, de estribor a babor, que generó el hundimiento del buque, no puedo contestar nada porque nunca me enteré de esa maniobra.", tags: ["dirección trasvase", "cadena de mando"], clave: true },
        { n: 15, p: "Para que diga si usted como Capitán ordenó o autorizó la operación de trasvase de combustible.", r: "Yo nunca autoricé ni ordené el trasvase de combustible entre los tanques 9 estribor a 9 babor.", tags: ["cadena de mando"], clave: true },
        { n: 16, p: "Para que diga si la operación estaba prevista con anterioridad o surgió como consecuencia de una circunstancia sobreviniente.", r: "En cuanto al movimiento de popa a proa, responde a la circunstancia de la avería. En cuanto al movimiento de los tanques 9 estribor a 9 babor, no sabría decir porque no fue orden mía." },
        { n: 17, p: "Para que diga si sabe quién fue el que ordenó el trasvaso del combustible del tanque Nro. 9 estribor al Nro. 9 babor y por qué razón.", r: "No lo sé, el que estaba de guardia era el 1er oficial de puente, el Sr. Dmitrii FROLOV, pero que habiendo hablado con él, él le manifiesta que tampoco dio esa orden.", tags: ["concertación", "cadena de mando"], clave: true },
        { n: 18, p: "Para que diga si se corroboró el estado del tanque receptor en cuanto a capacidad y contenido previo.", r: "No lo sé." },
        { n: 19, p: "Para que diga si se realizaron cálculos de estabilidad antes de iniciar la operación.", r: "No hubo ningún cálculo. Generalmente luego de realizar las maniobras de trasvase de combustible, el jefe de máquinas me trae las cantidades que quedaron en cada tanque.", tags: ["estabilidad"], clave: true },
        { n: 20, p: "Para que diga si existe un plan y/o procedimientos escritos para realizar operaciones de trasvase de combustible. En caso afirmativo, diga si se respetó dicho plan y/o procedimientos especificando los procedimientos de comunicación.", r: "No existe procedimiento como tal, pero todos los días el jefe de máquinas me trae el consumo de gasoil del buque y el 2ndo oficial, Evgenii SIIUKOV, realiza los cálculos de estabilidad.", tags: ["procedimientos", "testigo no interrogado"], clave: true },
        { n: 21, p: "Para que diga quién se encarga de realizar las verificaciones previas a la operación en relación a válvulas, tuberías, bombas, etc., y si efectivamente fueron realizadas.", r: "Lo debe controlar el jefe de máquinas." },
        { n: 22, p: "Para que diga si se encontraba a bordo al momento de iniciar la operación de trasvase de combustible.", r: "Sí, me encontraba a bordo. En el momento que comenzó la escora yo estaba descansando en mi camarote. La escora al principio no me llamó la atención ya que el buque cuenta con dos tanques de agua, los cuales por operativa, consumimos primero uno y luego el otro por lo que no me llamó la atención la escora del momento. Al momento de que se generó el black out en el buque la escora del buque fue completamente repentina.", tags: ["cadena de mando"], clave: true },
        { n: 23, p: "Para que diga quiénes estuvieron presentes en la operación y quiénes eran los involucrados directamente en la maniobra de trasvase de combustible.", r: "Yo no lo sé, tal vez lo sabe el 1er oficial." },
        { n: 24, p: "Para que diga si hubo comunicación entre usted y el Jefe de Máquinas del buque previo a la autorización y comienzo de la operación.", r: "En ningún momento el jefe de máquinas me mencionó la realización de la maniobra de trasvase de combustible de los tanques Nro. 9 estribor a Nro. 9 babor." },
        { n: 25, p: "Para que diga si tiene un procedimiento de comunicación y cómo se establecen las mismas durante la coordinación de la operación de trasvase de combustible.", r: "No tenemos procedimiento escrito. En el caso de lo sucedido, los oficiales de máquinas debían informarle al oficial de guardia, en este caso el 1er oficial, y este debió informarme a mí de que se realizaría la operación, pero no me informó nada.", tags: ["procedimientos", "cadena de mando"], clave: true },
        { n: 26, p: "Para que diga si la operación inició con normalidad o se advirtió alguna anomalía.", r: "No lo sé, como mencioné yo me encontraba descansando en mi camarote." },
        { n: 27, p: "Para que diga cuándo tomó conocimiento de la escora anormal del buque, y si existen planes de estabilidad que determinen un ángulo de escora determinado que indique cuándo se encuentra en condición anormal.", r: "Me enteré cuando sucedió el black out. Tenemos los cálculos de estabilidad que realiza el 2ndo oficial luego del trasvaso de combustible, el ángulo de escora que manejamos como normal atracados a muro es de entre 20 y 25 grados pero no hay nada por escrito.", tags: ["estabilidad", "criterio inadmisible"], clave: true },
        { n: 28, p: "Para que diga si el aumento de escora fue progresivo o fue inmediato.", r: "El aumento hasta el black out fue progresivo, yo pienso que habría en ese momento unos 6 o 7 grados, luego se produjo de forma repentina.", tags: ["magnitud escora"], clave: true },
        { n: 29, p: "Para que diga si observó o le fue informado del ingreso de agua en alguna parte del buque antes de que este comenzara a hundirse.", r: "Nadie me informó ni vi nada." },
        { n: 30, p: "Para que diga si se activó algún tipo de alarma, qué indica la misma y qué acciones se tomaron en consecuencia.", r: "No se accionó ningún tipo de alarma.", tags: ["alarmas"] },
        { n: 31, p: "Para que diga si se detectó alguna falla en los equipos y/o maquinaria utilizada en la operativa de trasvaso de combustible.", r: "No lo sé porque el jefe de máquinas no me informó de ninguna falla. Estuvimos trabajando 4 meses en alta mar sin ningún tipo de problemas." },
        { n: 32, p: "Para que diga cuál fue la primera medida que adoptó al advertir la anomalía en la escora.", r: "Cuando me di cuenta me vestí, subí al puente y me di cuenta que toda la tripulación ya se encontraba en el muelle por lo que procedí a dejar el barco yo también. Al momento que desembarqué habría unos 35 a 40 grados de escora.", tags: ["abandono", "magnitud escora"], clave: true },
        { n: 33, p: "Para que diga si ordenó detener inmediatamente la operación, indicando el momento, motivo y tripulantes a quien le dio la orden.", r: "No hubo tiempo de parar nada. Cuando me di cuenta el buque ya no tenía energía y no había oportunidad de hacer algo." },
        { n: 34, p: "Para que diga qué otras medidas de emergencia fueron adoptadas.", r: "No pude hacer absolutamente nada porque el buque estaba en black out y ya había comenzado a hundirse." },
        { n: 35, p: "Para que diga si solicitó asistencia externa a remolcador, empresa OSRO, agencia marítima y/o autoridad marítima.", r: "No pedimos nada porque cuando nos dimos cuenta ya era muy tarde. A la Agencia Marítima le informaron los tripulantes coreanos que se encontraban a bordo.", tags: ["notificación"], clave: true },
        { n: 36, p: "Para que diga si alguno de los tripulantes del buque sufrió daños a raíz de la situación.", r: "No." },
        { n: 37, p: "Para que diga si ordenó el abandono del buque. En caso afirmativo, en qué momento y si cuenta con procedimiento para ello.", r: "Cuando yo me di cuenta, ya toda la tripulación se encontraba en el muelle, yo fui el último en abandonar el buque.", tags: ["abandono"], clave: true },
        { n: 38, p: "Para que diga si se detectó el lugar por donde embarcó el agua al escorarse el buque.", r: "No lo sé." },
        { n: 39, p: "Para que diga si se encontraban en funcionamiento las bombas de achique. En caso afirmativo, quién estuvo a cargo de esa operativa.", r: "En el buque todo estaba funcionando." },
        { n: 40, p: "Para que diga cuál considera que fue el motivo principal del hundimiento del buque.", r: "La maniobra de trasvase desde el tanque Nro. 9 estribor al Nro. 9 de babor no fue motivo del hundimiento del buque. La escora generada no sería significativa. Tampoco considero que la inclinación generada por la maniobra permitiría el ingreso de agua en el caso de que los ojos de buey se encontraran abiertos. Sin embargo, si el que estaba encargado de realizar el trasvaso de combustible lo hubiese hecho entre los tanques Nro. 10, los cuales tienen una mayor capacidad, en este caso sí le hubiese generado una escora considerable para que se genere el embarque de agua a través de los ojos de buey.", tags: ["causa"], clave: true },
        { n: 41, p: "Para que diga si en algún momento consideró que todavía era posible recuperar el buque y qué acciones tomó.", r: "No, en el momento que me desperté y me di cuenta de la situación me fue imposible realizar cualquier intento de salvamento." },
        { n: 42, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "Trabajando 4 meses en alta mar y próximos a las Islas Malvinas puedo decir que el buque pasó por condiciones de mar adversas. El buque es muy estable.", tags: ["contradicción"], clave: true },
        { n: 43, p: "Para que diga si desea señalar alguna actuación de otra persona que, a su juicio, haya contribuido a la escora, inundación o hundimiento del buque.", r: "Que no." }
      ],
      conclusiones: [
        { tipo: "hecho", t: "Se deslinda por completo del trasvase transversal 9↔9: afirma no haberlo ordenado, autorizado ni conocido, y sitúa su responsabilidad únicamente en el trasvase popa→proa vinculado a la búsqueda de la vía de agua." },
        { tipo: "alerta", t: "Reconoce la ausencia total de procedimientos escritos de trasvase y de comunicación, y que no se efectuó ningún cálculo de estabilidad previo. Es una admisión directa de un déficit del sistema de gestión de la seguridad." },
        { tipo: "critico", t: "Declara como \"normal\" un ángulo de escora de 20–25° con el buque atracado a muro. Es un criterio técnicamente inadmisible que, de haber sido la referencia operativa real de la tripulación, explica por sí solo la falta de reacción ante la escora inicial." },
        { tipo: "critico", t: "Admite haber hablado con el 1er Oficial FROLOV sobre quién dio la orden ANTES de prestar declaración. Existe riesgo concreto de concertación de versiones entre ambos." },
        { tipo: "alerta", t: "El Capitán estaba a bordo y durmiendo, no fue informado por nadie, y percibió la escora sin darle importancia atribuyéndola al consumo de tanques de agua. No ejerció supervisión alguna sobre la operación." },
        { tipo: "contradiccion", t: "Niega toda reparación reciente en tanques, tuberías, bombas, válvulas o generadores (P.11), lo que contradice frontalmente al 2° Oficial de Máquinas, al 3° Oficial y a los tres marineros indonesios, que sitúan a un taller portuario trabajando el día previo." },
        { tipo: "contradiccion", t: "Sostiene que \"el buque es muy estable\", mientras el Jefe de Máquinas declara que antes de la maniobra el buque ya estaba inestable y rolaba constantemente por el peso alto de las artes de pesca en cubierta." },
        { tipo: "hecho", t: "Su razonamiento técnico (P.40) es relevante: si el trasvase entre tanques Nro. 9 —de baja capacidad— no pudo generar escora significativa, la causa de la escora debe buscarse en la condición de estabilidad previa o en otra vía de ingreso de agua." },
        { tipo: "alerta", t: "Ni él ni ningún oficial notificó a la autoridad marítima. Delega la comunicación en \"los tripulantes coreanos\"." },
        { tipo: "alerta", t: "No hubo orden de abandono ni activación de alarmas. Al desembarcar, el buque presentaba 35–40° de escora y la tripulación ya estaba en el muelle sin instrucción alguna." }
      ]
    },

    /* ------------------------------------------------------------------ 2 */
    {
      id: "primer-oficial",
      nombre: "Dmitrii FROLOV",
      cargo: "1er Oficial de Puente — Oficial de Guardia",
      cargoCorto: "1er Oficial",
      grupo: "rusa",
      ficha: {
        Nacionalidad: "Rusa",
        Pasaporte: "673647340",
        "Estado civil": "Casado",
        Profesión: "Marino mercante",
        Empresa: "OO Vodoley",
        "Embarcado desde": "11 de abril de 2026 (embarcó en Montevideo)"
      },
      acta: {
        fecha: "27 de agosto de 2026",
        inicio: "15:00",
        cierre: "16:10",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Nicolai GOLUBEI FORTUNA",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: "43 (numeración con saltos: faltan 13, 24, 27, 28)",
        archivo: "ACTA DE INFORMACION SUMARIA - 1er Oficial de Puente.docx"
      },
      posicion: "Oficial de guardia en el puente. Detecta la escora de ~10° a babor, baja a sala de máquinas, ordena adrizar y regresa al puente. Luego controla cabos de amarre.",
      tesis: "Error humano exclusivo del 2° Oficial de Máquinas, que actuó sin orden y trasvasó hacia babor en lugar de hacia estribor, agravando la escora.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil y profesión.", r: "Dmitrii FROLOV, ruso, Pasaporte Nro. 673647340, casado, marino mercante." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga para qué empresa trabaja, qué rol cumple y desde cuándo.", r: "La empresa es OO Vodoley, 1er oficial, en el Alpha Crux desde el 11 de abril de 2026, embarque aquí en Montevideo." },
        { n: 4, p: "Para que diga cuáles son sus responsabilidades como Primer Oficial.", r: "La seguridad del barco, a cargo de la tripulación, pilotaje del barco, en cierto grado de los cálculos de estabilidad porque el capitán los supervisa.", tags: ["estabilidad"], clave: true },
        { n: 5, p: "Para que diga si conoce las características generales del buque, particularmente su distribución, tanques, sala de máquinas y sistema de combustible.", r: "Que sí." },
        { n: 6, p: "Para que diga si ya había realizado este tipo de operación de trasvase de combustible en su barco. En caso afirmativo, indique entre qué tanques y bajo qué plan y/o procedimientos.", r: "Son operaciones estándar que se realizan en alta mar para estabilizar el barco. Lo mismo pasó acá en puerto, cuando descargamos el pescado tenemos que estabilizar el barco y se realiza moviendo el combustible a otros tanques. Debe haber una orden del capitán o del oficial de guardia.", tags: ["cadena de mando"], clave: true },
        { n: 7, p: "Para que diga en qué condiciones se encontraba el buque inmediatamente antes de iniciarse la operación de trasvase, indicando condición de carga y estabilidad.", r: "El buque después de la descarga estaba bien, estaba adrizado. De repente noté que el buque se había escorado unos 10 grados a babor. En ese momento bajé a la sala de máquinas donde encontré al 2ndo oficial de máquinas, Igor ABDRAKHMANOV, quien fue el que había comenzado con el trasvaso de combustible. Le ordené que comenzara a adrizar el buque a lo que me respondió que ya lo había comenzado a hacer.", tags: ["magnitud escora"], clave: true },
        { n: 8, p: "Para que diga quién le dio la orden de realizar la operación de trasvase de combustible.", r: "A mí nadie me dio la orden. Cuando me di cuenta de la escora y bajé a la sala de máquinas, me di cuenta que el 2ndo oficial de máquinas lo había realizado por voluntad propia.", tags: ["cadena de mando"], clave: true },
        { n: 9, p: "Para que diga quién estaba a cargo en sala de máquinas de la operación de trasvase de combustible.", r: "Se encontraba el 2ndo oficial de máquinas, quien estaba cubriendo la guardia de máquinas al momento." },
        { n: 10, p: "Para que diga si estaba en conocimiento de alguna avería, deficiencia, condición de mantenimiento o circunstancia previa que pudiera afectar la estabilidad o estanqueidad del buque.", r: "No había ningún defecto en el buque. Todos los mecanismos estaban en perfectas condiciones.", tags: ["contradicción"], clave: true },
        { n: 11, p: "Para que diga si se encontraba realizando o se realizaron recientemente, reparaciones o modificaciones a los tanques, tuberías, bombas, válvulas, mamparos, generadores o sistemas de combustible.", r: "Nada fuera de lo normal, lo rutinario como cambios de aceite. Ingresamos a puerto porque teníamos una filtración de agua cuando había mucha tormenta pero no sabíamos por dónde ingresaba, nuestra teoría era que entraba por cubierta. Esta agua podía llegar a deteriorar la mercadería por lo que ingresamos a subsanar esa filtración.", tags: ["vía de agua"], clave: true },
        { n: 12, p: "Para que diga si se encontraba cubriendo su turno de guardia en el puente al momento de la operación de trasvase de combustible.", r: "Sí." },
        { n: 14, p: "Para que diga cuál fue el motivo por el cual se realizó la operación de trasvase de combustible.", r: "Cuando fui a la sala de máquinas y me encontré con el 2ndo de máquinas le pregunté si estábamos en proceso de adrizarnos a estribor, porque la escora a babor era notable. Él me dijo que ya había comenzado con el adrizamiento del buque pero no me dijo el porqué se había escorado hacia babor en un principio. Yo creo que se equivocó y que en vez de trasvasar hacia estribor, trasvasó todo el combustible hacia babor.", tags: ["dirección trasvase", "causa"], clave: true },
        { n: 15, p: "Para que diga dónde se encontraban el Capitán y Jefe de Máquinas cuando comenzó la maniobra de trasvase de combustible.", r: "Ambos dos se encontraban en el barco descansando.", tags: ["cadena de mando"], clave: true },
        { n: 16, p: "Para que diga si la operación estaba prevista con anterioridad o surgió como consecuencia de una circunstancia sobreviniente.", r: "Fue una iniciativa de los mecánicos motivado por la escora hacia babor." },
        { n: 17, p: "Para que diga qué decisiones tomó para prevenir la escora excesiva del buque.", r: "Al bajar a sala de máquinas le ordené al 2ndo oficial de máquinas que corrigiera la escora." },
        { n: 18, p: "Para que diga si se corroboró el estado del tanque receptor en cuanto a capacidad y contenido previo.", r: "Normalmente eso lo hacen los mecánicos ya que es responsabilidad de ellos." },
        { n: 19, p: "Para que diga si se realizaron cálculos de estabilidad antes de iniciar la operación.", r: "Previo a lo ocurrido se realizó la descarga del pescado, el buque estaba en condiciones y adrizado por lo que no se hizo ningún cálculo.", tags: ["estabilidad"], clave: true },
        { n: 20, p: "Para que diga si existe un plan y/o procedimientos escritos para realizar operaciones de trasvase de combustible.", r: "En sala de máquinas hay instrucciones para los maquinistas de cómo proceder.", tags: ["procedimientos", "contradicción"], clave: true },
        { n: 21, p: "Para que diga quién se encarga de realizar las verificaciones previas a la operación en relación a válvulas, tuberías, bombas, etc., y si efectivamente fueron realizadas.", r: "Normalmente lo hacen los maquinistas." },
        { n: 22, p: "Para que diga si en algún momento de la operativa de trasvase de combustible le informó al Capitán de lo que estaba ocurriendo.", r: "Al ser una operación estándar no se le avisa al capitán. El capitán se enteró cuando el buque se había escorado fuertemente.", tags: ["cadena de mando", "contradicción"], clave: true },
        { n: 23, p: "Para que diga quiénes estuvieron presentes en la operación y quiénes eran los involucrados directamente en la maniobra de trasvase de combustible.", r: "Yo me encontraba en el puente con [Konstantin] TOKMIN. El responsable de la operación era el 2ndo oficial de máquinas.", tags: ["testigo no interrogado"], clave: true },
        { n: 25, p: "Para que diga si tiene un procedimiento de comunicación y cómo se establecen las mismas durante la coordinación de la operación de trasvase de combustible.", r: "No hay ningún procedimiento, si eventualmente hay que hablar con el capitán o con el jefe de máquinas se lo busca y se le explica.", tags: ["procedimientos"] },
        { n: 26, p: "Para que diga si el aumento de escora fue progresivo o fue inmediato.", r: "Hasta los 10 grados fue progresivo, luego de estos fue muy rápido todo." },
        { n: 29, p: "Para que diga si observó o le fue informado del ingreso de agua en alguna parte del buque antes de que este comenzara a hundirse.", r: "En un momento dado, cuando la tripulación ya se encontraba abandonando el buque, uno mencionó que se encontraba ingresando agua por un ojo de buey. Acto seguido ocurrió el black out.", tags: ["ojo de buey"], clave: true },
        { n: 30, p: "Para que diga si se activó algún tipo de alarma, qué indica la misma y qué acciones se tomaron en consecuencia.", r: "No, simplemente se asustaron y abandonaron el buque.", tags: ["alarmas"] },
        { n: 31, p: "Para que diga si se detectó alguna falla en los equipos y/o maquinaria utilizada en la operativa de trasvaso de combustible.", r: "No lo sé." },
        { n: 32, p: "Para que diga cuál fue la primera medida que adoptó al advertir la anomalía en la escora.", r: "La primera medida fue ordenar el adrizamiento del buque al 2ndo oficial de máquinas." },
        { n: 33, p: "Para que diga si en algún momento ordenó detener inmediatamente la operación, indicando el momento, motivo y tripulantes a quien le dio la orden.", r: "No. Yo la orden de adrizar ya la había dado, posterior a esto fui a controlar la tensión de los cabos de amarre.", tags: ["cadena de mando"], clave: true },
        { n: 34, p: "Para que diga qué otras medidas de emergencia fueron adoptadas.", r: "Despertamos al 3er oficial de máquinas y lo pusimos a adrizar el barco junto al 2ndo oficial de máquinas. Quise creer que con dos oficiales a cargo de la operativa el problema se iba a solucionar.", tags: ["contradicción"], clave: true },
        { n: 35, p: "Para que diga si solicitó asistencia externa a remolcador, empresa OSRO, agencia marítima y/o autoridad marítima.", r: "El tripulante coreano realizó las comunicaciones con la Administración Nacional de Puertos.", tags: ["notificación"], clave: true },
        { n: 36, p: "Para que diga si alguno de los tripulantes del buque sufrió daños a raíz de la situación.", r: "No." },
        { n: 37, p: "Para que diga si ordenó el abandono del buque. En caso afirmativo, en qué momento y si cuenta con procedimiento para ello.", r: "Entre los indonesios se informaron que debían bajar del buque, no hubo una orden.", tags: ["abandono"], clave: true },
        { n: 38, p: "Para que diga si se detectó el lugar por donde embarcó el agua al escorarse el buque.", r: "El 3er oficial de máquinas logró detectar el ojo de buey por donde embarcaba el agua pero al intentar cerrarlo la presión del agua no se lo permitió.", tags: ["ojo de buey"], clave: true },
        { n: 39, p: "Para que diga si se encontraban en funcionamiento las bombas de achique. En caso afirmativo, quién estuvo a cargo de esa operativa.", r: "No sabemos si al principio funcionaron porque cuando comenzó a ingresar el agua fue que el barco sufrió el black out." },
        { n: 40, p: "Para que diga cuál considera que fue el motivo principal del hundimiento del buque.", r: "Equivocación humana del maquinista.", tags: ["causa"], clave: true },
        { n: 41, p: "Para que diga si en algún momento consideró que todavía era posible recuperar el buque y qué acciones tomó.", r: "Toda la expectativa la puse en los maquinistas para adrizar el buque." },
        { n: 42, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "Solo quiero aclarar que la culpa fue del 2ndo oficial de máquinas que en vez de adrizar el buque lo escoró aún más y que eso provocó que el agua ingresara por el ojo de buey, fue un error humano.", tags: ["causa", "atribución"], clave: true },
        { n: 43, p: "Para que diga si desea señalar alguna actuación de otra persona que, a su juicio, haya contribuido a la escora, inundación o hundimiento del buque.", r: "No." }
      ],
      conclusiones: [
        { tipo: "critico", t: "Era el único oficial de guardia del buque y el eslabón obligado de la cadena de mando. Detectó una escora de 10° a babor, ordenó adrizar y se retiró al puente sin verificar el resultado, sin detener la operación y sin informar al Capitán." },
        { tipo: "contradiccion", t: "Reconoce en P.6 que el trasvase requiere \"orden del capitán o del oficial de guardia\", pero en P.22 afirma que \"al ser una operación estándar no se le avisa al capitán\". Es una contradicción interna dentro de la misma acta." },
        { tipo: "contradiccion", t: "En P.10 sostiene que \"no había ningún defecto en el buque, todos los mecanismos estaban en perfectas condiciones\" y en la pregunta inmediata siguiente admite la filtración de agua que motivó el ingreso a puerto." },
        { tipo: "contradiccion", t: "En P.20 afirma que en sala de máquinas hay instrucciones escritas para los maquinistas, mientras el Jefe de Máquinas declara que \"oficialmente no existe ningún plan de trasvaso de combustible\" y el Capitán que \"no existe procedimiento como tal\"." },
        { tipo: "critico", t: "Atribuye la causa exclusivamente al error del 2° Oficial de Máquinas, pero su propio relato es incompatible con la evidencia: si la bomba nunca se encendió (confirmado por el 2° y el 3° Oficial), el trasvase no pudo generar la escora." },
        { tipo: "alerta", t: "Menciona a Konstantin TOKMIN, encargado de procesamiento de pescado, como la persona que estaba con él en el puente y a quien envió a averiguar a sala de máquinas. Es el único testigo directo del estado de la sala y no fue interrogado." },
        { tipo: "alerta", t: "En P.34 afirma que despertaron al 3er Oficial de Máquinas y lo pusieron a adrizar; el propio 3er Oficial declara que fue el 2° Oficial quien lo fue a buscar a su camarote para corroborar la maniobra." },
        { tipo: "hecho", t: "Confirma que el ingreso de agua se produjo por un ojo de buey, que el 3er Oficial no pudo cerrarlo por la presión del agua, y que el black out fue inmediatamente posterior." },
        { tipo: "alerta", t: "Ninguna alarma se activó y no hubo orden de abandono: \"entre los indonesios se informaron que debían bajar del buque\"." }
      ]
    },

    /* ------------------------------------------------------------------ 3 */
    {
      id: "primer-oficial-ampliacion",
      nombre: "Dmitrii FROLOV",
      cargo: "1er Oficial de Puente — AMPLIACIÓN de declaración",
      cargoCorto: "1er Oficial (ampliación)",
      grupo: "rusa",
      ampliacion: true,
      ficha: {
        Nacionalidad: "Rusa",
        Pasaporte: "673647340",
        "Estado civil": "Casado",
        Profesión: "Marino mercante",
        Empresa: "OO Vodoley",
        "Embarcado desde": "11 de abril de 2026"
      },
      acta: {
        fecha: "31 de agosto de 2026",
        inicio: "11:20",
        cierre: "11:40",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Nicolai GOLUBEI FORTUNA",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 10,
        archivo: "ACTA DE INFORMACION SUMARIA - 1er Oficial de Puente (Ampliación).docx"
      },
      posicion: "Ampliación tomada para precisar el encuentro con el 2° Oficial de Máquinas y la supuesta orden de no encender la bomba.",
      tesis: "Niega haber prohibido encender la bomba. Reafirma la culpa exclusiva del 2° Oficial de Máquinas.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil y profesión.", r: "Dmitrii FROLOV, ruso, Pasaporte Nro. 673647340, casado, marino mercante." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga para qué empresa trabaja, qué rol cumple y desde cuándo.", r: "La empresa es OO Vodoley, 1er oficial, en el Alpha Crux desde el 11 de abril de 2026, embarque aquí en Montevideo." },
        { n: 4, p: "Para que diga en qué momento preciso se encuentra con el Segundo Oficial de Máquinas, qué se encontraba este haciendo y qué le dice.", r: "Me encuentro con él en la sala de máquinas cuando bajé porque el buque estaba escorado aproximadamente unos 10 grados a babor. Allí me lo encuentro sentado en la sala y le comento que debemos adrizar el barco a lo que él me responde que ya lo estaba haciendo. Le comento que la escora es muy fuerte, le pregunté si lo estaba adrizando de babor a estribor a lo que me dice que sí, a lo que le digo que lo hiciera porque ya la escora era demasiada. Luego subí al puente y a partir de ese momento la inclinación comenzó a empeorar hacia babor. En puente había otra persona, el encargado del procesamiento del pescado, Konstantin TOKMIN, al cual lo envié a averiguar qué estaba pasando en sala de máquinas ya que la escora no se corregía. Lo esperé y cuando volvió me dijo que en sala de máquinas se encontraban el segundo y el tercer oficial de máquinas escorando el buque. Luego me dirigí a la banda de estribor a controlar la tensión de los cabos de amarre y ahí me encuentro con la tripulación indonesia que ya se encontraba en el muelle y en estado de pánico. Le pedí a algunos que se encargaran de avisar al resto de la tripulación que aún estaba a bordo que abandonaran el barco. Luego bajé a tierra para controlar los cabos desde muro y en ese momento ocurre el black out. Posteriormente el buque se escoró aún más.", tags: ["cronología", "testigo no interrogado"], clave: true },
        { n: 5, p: "Para que diga si usted le dio la orden al Segundo de Máquinas de no prender la bomba para realizar el trasvase de combustible para corregir la escora.", r: "Conversación de prender o apagar la bomba no hubo. Yo confiaba en que el segundo de máquinas sabía qué hacer para adrizar el buque. Su palabra fue que ya se encontraba trabajando para poder adrizarlo y yo confié en que lo hiciera.", tags: ["CONTRADICCIÓN CENTRAL"], clave: true },
        { n: 6, p: "Para que diga si estaba en conocimiento del trabajo de reparación que se estaba realizando o se realizó en el sistema de enfriamiento de la caja reductora del eje principal.", r: "No escuché nada de eso, lo único que sabía era que se estaba desmantelando el interior de la bodega de carga para ver si se encontraba alguna avería en relación a la filtración que tenía. No me refiero a que había un agujero, sino algo poco significativo por donde ingresaba el agua.", tags: ["contradicción", "estanqueidad"], clave: true },
        { n: 7, p: "Para que diga si usted había consumido alcohol dentro de las 24 horas previas al incidente.", r: "No." },
        { n: 8, p: "Para que diga si sabe si los oficiales y/o tripulantes habían consumido alcohol dentro de las 24 horas previas al incidente.", r: "No lo sé." },
        { n: 9, p: "Para que diga cuánto tiempo estima que pasó desde que comenzó a escorarse el buque hasta que lo abandonó.", r: "De 20 a 30 minutos.", tags: ["cronología"], clave: true },
        { n: 10, p: "Para que diga si desea agregar, modificar o quitar algo a lo ya declarado.", r: "Pienso que la culpa realmente la tiene el segundo de máquinas que se confundió en la maniobra de trasvase del combustible para adrizar el buque. La escora inicial es algo normal en el buque, lo que yo pienso es que el segundo de máquinas, al querer ayudar y sin órdenes de su superior, comenzó la maniobra de trasvase de combustible con el fin de adrizar el buque y se equivocó empeorando la situación. El encargado de la producción de pescado, Konstantin TAKMIN puede verificar mejor mi versión.", tags: ["atribución", "testigo no interrogado"], clave: true }
      ],
      conclusiones: [
        { tipo: "critico", t: "Niega frontalmente la existencia de la conversación sobre encender o no la bomba: \"Conversación de prender o apagar la bomba no hubo\". El 2° Oficial de Máquinas afirma lo contrario de forma circunstanciada (lugar: sala de refrigeración; contenido: orden de no prender la bomba porque podría escorar más el buque). Esta es la contradicción decisiva del sumario: determina si el adrizamiento fue impedido por el propio oficial de guardia." },
        { tipo: "contradiccion", t: "En su primera declaración afirmó haber ordenado al 2° Oficial \"que corrigiera la escora\"; aquí afirma solo haberle \"comentado\" que debían adrizar y haber confiado en él. La versión se debilita de una orden expresa a una confianza pasiva." },
        { tipo: "critico", t: "Reconoce que TOKMIN volvió del reconocimiento informándole que el 2° y el 3° Oficial estaban \"escorando el buque\", es decir, tuvo conocimiento de que la maniobra empeoraba la situación y aun así se retiró a controlar cabos y bajó a tierra, sin detener la operación ni dar la alarma." },
        { tipo: "alerta", t: "Sitúa su posición final en tierra, sobre el muro, al momento del black out. Ningún oficial permanecía al mando a bordo en el momento crítico." },
        { tipo: "contradiccion", t: "Desconoce por completo la reparación del sistema de enfriamiento de la caja reductora del eje principal, trabajo confirmado por el 2° Oficial de Máquinas (con la bomba de agua de mar desconectada), por el 3° Oficial y por los marineros indonesios. Como responsable de la seguridad del buque, ese desconocimiento es en sí mismo una deficiencia." },
        { tipo: "hecho", t: "Estima 20 a 30 minutos entre el inicio de la escora y el abandono, dato que permite acotar la ventana temporal del siniestro y contrastarla con el aviso del tripulante coreano a las 18:46 y la llamada a CONMO a las 19:30." },
        { tipo: "alerta", t: "Invoca expresamente a Konstantin TOKMIN / TAKMIN como quien \"puede verificar mejor mi versión\". El testigo propuesto por el propio declarante nunca fue convocado. La grafía de su apellido aparece de tres formas distintas en el expediente." }
      ]
    },

    /* ------------------------------------------------------------------ 4 */
    {
      id: "jefe-maquinas",
      nombre: "Ivanov YURI",
      cargo: "Jefe de Máquinas",
      cargoCorto: "Jefe de Máquinas",
      grupo: "rusa",
      ficha: {
        Nacionalidad: "Rusa",
        Edad: "59 años",
        Documento: "668786494",
        "Embarcado desde": "1 de abril de 2026",
        Observación: "En la P.1 se identifica como \"primer oficial de máquina\" y en la P.2 como \"jefe de máquinas\""
      },
      acta: {
        fecha: "27 de agosto de 2026",
        inicio: "10:00",
        cierre: "11:11",
        oficial: "TN (CP) Adrián MOLESINI",
        interprete: "Nicolai GOLUBEI FORTUNA",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: "19 numeradas (una sin numerar; falta la 18)",
        archivo: "ACTA DE INFORMACION SUMARIA - Jefe de Maquinas.docx"
      },
      posicion: "En sala de máquinas durante el trasvase popa→proa. Durmiendo en su camarote durante el trasvase 9↔9. Se despierta con el black out.",
      tesis: "La causa fue el ojo de buey abierto, situado a 1–2 m de la línea de flotación. La avería de la bodega no fue determinante.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, edad, documento de identidad, profesión u ocupación.", r: "Ivanov YURI, ruso, 59 años, 668786494, primer oficial de máquina del buque Alpha Crux.", tags: ["identificación"], clave: true },
        { n: 2, p: "Para que indique el cargo que desempeña a bordo y desde qué fecha se encuentra embarcado ejerciéndolo.", r: "Desde el 1° de abril del 2026 me encuentro embarcado del buque y cumplo funciones como jefe de máquinas del mismo." },
        { n: 3, p: "Para que narre los hechos acaecidos el día 25 de agosto del corriente.", r: "En hora de la mañana descargamos la carga de pescado como así también la carnada, luego continuamos con el trasvaso de combustible de los tanques de popa los cuales eran de 45 metros cúbicos cada tanque que estaban a las bandas del buque, el trasvaso se realizaron a los tanques 1 y 2 que se encuentran en proa del buque que estaban con algo de combustible los cuales tienen una capacidad de 40 metros cúbicos, la cantidad de combustible trasvasado fue de 20 metros cúbicos a cada tanque. Cuando el barco regresó de alta mar tenía las artes de pesca sobre popa y proa sobre cubierta principal, esto dificultaba la estabilidad del buque ya que tenía peso alto, en este momento tenía una estabilidad mala, no sé porque la tenía, pero para adrizarlo lo que hacíamos era trasvasar combustible con los tanques 9 babor y 9 estribor, cada uno con 17 metros cúbicos cada tanque. Sobre los mamparos el buque tiene 2 ojos de buey los cuales están a 1 o 2 metros de la línea de flotación, uno de los mismos estaba abierto, que da a un compartimiento. Sobre las 16:00 hs el buque se empieza a escorar sobre la banda babor; una vez que sucede esto el Sr. Abdrakhmanov IGOR N° 663751930 empezó a estabilizar el buque moviendo el combustible entre los tanques 9 y 9 de las bandas pero el barco continuaba escorándose a babor, es que por esta razón empieza a entrar agua por el ojo de buey. Cuando empezó a entrar agua la misma estaba cayendo sobre el tambucho de la sala de máquina y el agua estaba cayendo sobre un tablero de luz que era el principal, esto provocó que el barco sufra un black out, pero el generador seguía funcionando hasta que le entró agua al generador. Luego de esto el barco ya no se podía estabilizar y continuaba entrando agua.", tags: ["RELATO CENTRAL", "ojo de buey", "black out", "estabilidad", "cronología"], clave: true },
        { n: 4, p: "Para que indique por qué razón realizaron el trasvaso de combustible y qué cantidad.", r: "El capitán del buque Sr. Belikov ANDREI me dio la orden de que haga el trasvaso de 20 metros cúbicos de popa a proa de combustible, la razón de esta maniobra no la sé ya que recibí orden del Sr. Belikov ANDREI.", tags: ["cadena de mando"], clave: true },
        { n: 5, p: "Para que diga si antes de realizar la maniobra de trasvaso realizaron cálculos de estabilidad.", r: "Yo no realicé ningún cálculo de estabilidad, de igual forma me negué a hacerlo, es por esta razón que esta maniobra la realizó el 3° oficial de máquina el Sr. German IVAN N° 755600912 con el jefe de máquina coreano Sr. Park KWANG JUN N° M419X3876. Yo me negué porque la bomba que realiza esta maniobra no tiene un contador que permita [medir] la cantidad de combustible trasbordado. Referente al trasvaso de combustible de los tanques 9 a 9 se realizó con el fin de estabilizar el buque y que la orden no está muy clara quién la dio, si el 2° del buque el Sr. Frolov DMITRII.", tags: ["estabilidad", "cadena de mando", "equipo deficiente"], clave: true },
        { n: 6, p: "Para que indique por qué razón no detuvieron la maniobra cuando el buque empezó a escorarse.", r: "Previo al inicio de la maniobra el buque ya se encontraba inestable, creo yo que por los elementos y artes de pesca que se encontraban en cubierta. El buque rolaba constantemente de babor a estribor y viceversa. Es por ese motivo que realizamos el trasvase de combustible. Nosotros entramos a puerto un mes antes porque el buque tenía un rumbo de agua, la tripulación del buque estaba trabajando en la bodega que tenía la vía de agua, los mismos sacaron las tablas que recubren la bodega.", tags: ["ESTABILIDAD PREVIA", "vía de agua"], clave: true },
        { n: 7, p: "Para que indique si contaban con un plan y procedimientos de trasvase de combustible.", r: "Oficialmente no existe ningún plan de trasvaso de combustible.", tags: ["procedimientos"], clave: true },
        { n: 8, p: "Para que diga si estaba en conocimiento de alguna avería, deficiencia, condición de mantenimiento o circunstancia previa que pudiera afectar la estabilidad o estanqueidad del buque.", r: "El buque contaba con una avería en la bodega de carga, pero no sé qué tan grande era ya que no se lograba ver bien, es por esta razón que entramos un mes antes al puerto.", tags: ["vía de agua"], clave: true },
        { n: "s/n", p: "Para que diga si se realizaron recientemente reparaciones o modificaciones a los tanques, tuberías, bombas, válvulas, generadores, mamparos o sistema de combustible.", r: "No, no había ningún tipo de reparación.", tags: ["contradicción"], clave: true },
        { n: 9, p: "Para que indique si al momento de la maniobra de trasvaso de combustible estaba el Jefe de Máquinas a bordo del buque e indique dónde estaba y qué estaba haciendo.", r: "Cuando se realizó el trasvaso de combustible de los tanques de popa a proa estaba en sala de máquina, pero cuando realizaron el trasvaso de combustible de los tanques 9 y 9 de las bandas yo me encontraba durmiendo en mi camarote, me desperté cuando el buque quedó sin luz.", tags: ["cadena de mando"], clave: true },
        { n: 10, p: "Para que indique por qué razón no utilizaron las bombas de achique del buque.", r: "Porque el agua que entró cayó sobre el tablero principal de luz provocando que se quede sin energía, por esta razón las bombas no encendieron y al no contar con un sistema de emergencia no se pudo achicar el agua.", tags: ["black out", "energía de emergencia"], clave: true },
        { n: 11, p: "Para que diga por qué razón se escoró el buque.", r: "Debido a que el ojo de buey estaba abierto y el mismo se encuentra muy cerca de la línea de flotación es que entró el agua, que la avería que tenía en la bodega de carga no fue determinante para el hundimiento.", tags: ["causa", "ojo de buey"], clave: true },
        { n: 12, p: "Para que diga cuándo se considera una escora normal y cuándo es que se considera una escora de riesgo del buque.", r: "El límite de la escora es 25°, pasando este grado ya es de riesgo.", tags: ["criterio inadmisible"], clave: true },
        { n: 13, p: "Cuánto tiempo tardó el buque en pasar de una escora normal a una escora de riesgo.", r: "No lo sabría decir ya que estaba durmiendo." },
        { n: 14, p: "Para que indique si por parte del Capitán usted recibió alguna directiva de abandonar el buque, indicando hora de abandono.", r: "No hubo orden del capitán, la tripulación se empezó a poner nerviosa y bajamos todos, fue muy rápido.", tags: ["abandono"], clave: true },
        { n: 15, p: "Para que indique cuántos litros de combustible tenían al ingresar a puerto, indicando si realizaron toma de combustible en puerto y cuánto tenían en total al momento del incidente.", r: "Ingresamos con un total de 303 toneladas de combustible y en el puerto no tomamos combustible.", tags: ["contaminación"] },
        { n: 16, p: "Para que diga si usted ya habría realizado en otro puerto la misma operativa que realizó el día 25 de los corrientes.", r: "En este barco nunca realicé esta maniobra, sumándole que las bombas de este no cuentan con un sistema que indica la cantidad de combustible que trasvasa.", tags: ["equipo deficiente"], clave: true },
        { n: 17, p: "Para que diga si el buque contaba con sistemas de alarma de escora del buque.", r: "Yo pienso que no hay pero el capitán es el que sabe si el buque tiene sistema de alarma; en alta mar el buque se escoraba más de 25° y no escuchaba nada.", tags: ["alarmas", "estabilidad"], clave: true },
        { n: 19, p: "Para que indique si tiene algo más que agregar.", r: "No, no tengo nada que agregar." }
      ],
      conclusiones: [
        { tipo: "critico", t: "Es el declarante que aporta el relato técnico más completo y coherente del mecanismo del siniestro: escora a babor desde las 16:00 → ingreso de agua por el ojo de buey abierto → agua cayendo por el tambucho sobre el tablero eléctrico principal → black out → pérdida de las bombas de achique → inundación progresiva incontrolable." },
        { tipo: "critico", t: "Declara que el buque YA se encontraba inestable antes de la maniobra, rolando constantemente de babor a estribor, por el peso alto de las artes de pesca estibadas sobre la cubierta principal. Esto reencuadra la causa: la condición de estabilidad de partida era deficiente, y el trasvase fue el intento de corregirla, no el origen." },
        { tipo: "critico", t: "Confirma que uno de los dos ojos de buey del mamparo, situado a 1–2 metros de la línea de flotación, estaba abierto. Es la abertura por la que el buque se inundó y su condición de apertura era conocida por el Jefe de Máquinas." },
        { tipo: "hecho", t: "Fija en \"sobre las 16:00 hs\" el inicio de la escora a babor. Es la única referencia horaria del inicio del siniestro en todo el expediente." },
        { tipo: "alerta", t: "Es el único declarante que aporta una referencia temporal del ingreso a puerto, y debe leerse con cuidado: cuando dice en P.6 y P.8 que \"entramos a puerto un mes antes\" alude al adelanto respecto de la fecha de arribo prevista —interrumpieron la zafra por la avería de la bodega—, no al tiempo transcurrido hasta el hundimiento. Ninguna acta del expediente consigna la fecha efectiva de atraque, de modo que la duración de la estadía en puerto no está acreditada y debe establecerse por la declaración general de arribo." },
        { tipo: "contradiccion", t: "Atribuye al Capitán BELIKOV la orden expresa del trasvase popa→proa de 20 m³. El Capitán, en cambio, señala como responsable de la operación de trasvase al 2° Oficial de Máquinas y afirma que el trasvase popa→proa respondía a la búsqueda de la avería sin precisar quién lo ordenó." },
        { tipo: "critico", t: "Reconoce haberse NEGADO a ejecutar la maniobra por falta de contador en la bomba, delegándola en el 3° Oficial de Máquinas y en el jefe de máquinas coreano Park KWANG JUN. El 3° Oficial declara que ese día no estaba de guardia y que solo trasvasa en alta mar. A Park KWANG JUN, ya interrogado, no se le formuló ninguna pregunta sobre esta maniobra concreta." },
        { tipo: "alerta", t: "Admite que no realizó ningún cálculo de estabilidad y que oficialmente no existe plan de trasvase de combustible, coincidiendo con el Capitán y contradiciendo al 1er Oficial." },
        { tipo: "critico", t: "Sitúa el límite de escora de riesgo en 25° y declara que en alta mar el buque superaba habitualmente esa escora sin que sonara ninguna alarma. Sumado al criterio del Capitán (20–25° normal atracado), revela una cultura de tolerancia a escoras extremas." },
        { tipo: "alerta", t: "Niega toda reparación reciente en tanques, tuberías, bombas, válvulas o generadores, contradiciendo al 2° Oficial de Máquinas (reparación en el sistema de enfriamiento del reductor, con la bomba de agua de mar desconectada) y al 3° Oficial, que dice haberlo escuchado precisamente del Jefe de Máquinas." },
        { tipo: "alerta", t: "El buque no contaba con fuente de energía de emergencia operativa para las bombas de achique, lo que convirtió el black out en un punto de no retorno." },
        { tipo: "alerta", t: "El archivo rotulado \"1er Oficial de Máquinas Coreano\" contuvo durante un tiempo esta misma acta reproducida íntegra y literalmente. El error quedó subsanado con la incorporación de la declaración de Park KWANG JUN del 1 de septiembre, pero subsiste la indeterminación del cargo: este declarante se identifica como \"primer oficial de máquina\" en la P.1 y como \"jefe de máquinas\" en la P.2, y el coreano usa alternativamente los mismos dos cargos." }
      ]
    },

    /* ------------------------------------------------------------------ 5 */
    {
      id: "segundo-maquinas",
      nombre: "Igor ABDRAKHMANOV",
      cargo: "2° Oficial de Máquinas — de guardia en máquinas",
      cargoCorto: "2° Of. Máquinas",
      grupo: "rusa",
      ficha: {
        Nacionalidad: "Rusa",
        Pasaporte: "663751930",
        "Estado civil": "Casado",
        Profesión: "Marino mercante",
        Empresa: "OO Vodoley",
        "Embarcado desde": "1 de abril de 2026 (embarcó en Montevideo)",
        Responsabilidades: "Sistema de lubricación del buque y motor principal"
      },
      acta: {
        fecha: "28 de agosto de 2026",
        inicio: "09:50",
        cierre: "11:10",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Nicolai GOLUBEI FORTUNA",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 34,
        archivo: "ACTA DE INFORMACION SUMARIA - 2do Oficial de Maquinas.docx"
      },
      posicion: "En su camarote al comenzar la escora. Baja a sala de máquinas, abre las válvulas 9 Br → 9 Er y va a buscar al 3er Oficial. Nunca enciende la bomba.",
      tesis: "Nunca encendió bomba alguna: solo abrió válvulas, con trasvase por gravedad a velocidad muy inferior. El 1er Oficial le ordenó no encenderla. Teoriza que el viento inclinó el buque.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil y profesión.", r: "Igor ABDRAKHMANOV, ruso, Pasaporte Nro. 663751930, casado, marino mercante." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga para qué empresa trabaja, qué rol cumple y desde cuándo.", r: "La empresa es OO Vodoley, 2° oficial de máquinas, en el Alpha Crux desde el 01 de abril de 2026, embarque aquí en Montevideo." },
        { n: 4, p: "Para que diga cuáles son sus responsabilidades como Segundo Oficial de Máquinas.", r: "Mis responsabilidades son el sistema de lubricación del buque y su motor principal.", tags: ["competencia"], clave: true },
        { n: 5, p: "Para que diga si conoce las características generales del buque, particularmente su distribución, tanques, sala de máquinas y sistema de combustible.", r: "Aproximadamente, porque el que está a cargo de todo el sistema de combustible es el jefe de máquinas con el tercer oficial de máquinas.", tags: ["competencia"], clave: true },
        { n: 6, p: "Para que diga si usted realizó una maniobra de trasvase de combustible previo al hundimiento del buque. En caso afirmativo, indique los detalles de la misma.", r: "Yo nunca prendí bomba alguna para trasvasar gasoil a otro tanque.", tags: ["BOMBA NUNCA ENCENDIDA"], clave: true },
        { n: 7, p: "Para que diga en qué condiciones se encontraba el buque inmediatamente antes de iniciarse la operación de trasvase, indicando condición de carga y estabilidad.", r: "No había nada grave en las condiciones del barco, tal vez algún trabajo menor pero nada que comprometiera al buque.", tags: ["contradicción"] },
        { n: 8, p: "Para que diga dónde se encontraba cuando el buque comenzó a escorarse.", r: "En el momento que el buque comenzó a escorarse yo me encontraba en mi camarote. Luego me dirigí a la sala de máquinas.", tags: ["contradicción"], clave: true },
        { n: 9, p: "Para que diga si cuando concurrió a sala de máquinas vio algún sistema de trasvase de combustible operando.", r: "No, yo comencé con la operación para ponerla en funcionamiento pero no llegué a prender la bomba, sólo alcancé a abrir las válvulas.", tags: ["BOMBA NUNCA ENCENDIDA"], clave: true },
        { n: 10, p: "Para que diga si estaba en conocimiento de alguna avería, deficiencia, condición de mantenimiento o circunstancia previa que pudiera afectar la estabilidad o estanqueidad del buque.", r: "Tenía conocimiento de que en la bodega donde estaba el pescado ingresaba agua por unas tapas que aparentemente tenían problemas de estanqueidad.", tags: ["vía de agua"], clave: true },
        { n: 11, p: "Para que diga si se encontraba realizando o se realizaron recientemente, reparaciones o modificaciones a los tanques, tuberías, bombas, válvulas, mamparos, generadores o sistemas de combustible.", r: "El día anterior habíamos comenzado a realizar reparaciones en las cañerías del sistema de enfriamiento del reductor del eje principal. Para esto habían desconectado la bomba que toma agua de mar. El trabajo lo estaba haciendo un taller del puerto, no gente de la tripulación.", tags: ["ESTANQUEIDAD", "terceros"], clave: true },
        { n: 12, p: "Para que diga si recibió alguna orden del Primer Oficial de corregir la escora y cuándo.", r: "Luego de abrir las válvulas para comenzar el trasvaso del combustible con el fin de corregir la escora me dirigí a cubierta a buscar al tercer oficial de máquinas ya que es su responsabilidad esta operativa y yo no estaba seguro de haber abierto correctamente las válvulas. El hecho de abrir las válvulas genera que el trasvase de gasoil se realice pero con una velocidad sumamente menor a la que se haría con la bomba encendida. Los tanques intervenidos fueron del Nro. 9 de babor al 9 de estribor. En ese momento me cruzo con el primer oficial en la sala de refrigeración y me ordenó que no prenda la bomba porque tal vez se podría escorar más el buque. A ese comentario le respondí que eso no tenía sentido ya que la maniobra sería trasvasar el combustible hacia el tanque contrario a la escora. Al encontrar al tercer oficial de máquinas bajamos a la sala pero no encendimos la bomba por orden del primer oficial; en ese momento nos dimos cuenta que ya estaba ingresando agua por la escalera de acceso a la sala de máquinas. Salimos de la sala por la escalera para ver por dónde ingresaba el agua al barco y vimos que era por el ojo de buey que está ubicado por babor en el taller, donde se encuentra el torno, próximo a la sala de refrigeración. El tercer oficial intentó cerrar el ojo de buey pero no pudo por la gran presión que generaba el agua.", tags: ["CONTRADICCIÓN CENTRAL", "dirección trasvase", "ojo de buey"], clave: true },
        { n: 13, p: "Para que diga cuál fue el principal motivo por el cual abrió las válvulas para la operación de trasvase de combustible.", r: "Principalmente para adrizar el buque. Particularmente trasladar el gasoil del tanque Nro. 9 de babor al tanque Nro. 9 de estribor.", tags: ["dirección trasvase"], clave: true },
        { n: 14, p: "Para que diga dónde se encontraban el Capitán y Jefe de Máquinas cuando comenzó la maniobra de trasvase de combustible.", r: "No lo sé." },
        { n: 15, p: "Para que diga si la operación estaba prevista con anterioridad o surgió como consecuencia de una circunstancia sobreviniente. En caso afirmativo, cuál fue esa circunstancia.", r: "Surgió a raíz de la escora del buque. Es una operación que se realiza de forma normal. En puerto ya lo habíamos hecho cuando descargamos el pescado, trasvasamos el combustible de los tanques, no sabiendo entre cuáles porque no estaba de guardia pero asumo fue del Nro. 9 al Nro. 9. Tampoco sé para qué banda fue la escora en ese momento." },
        { n: 16, p: "Para que diga qué decisiones tomó para prevenir la escora excesiva del buque.", r: "Abrí la válvula que absorbe del tanque Nro. 9 de babor y la que alimenta al tanque Nro. 9 de estribor. Las válvulas están identificadas con el número del tanque. Cada tanque tiene 2 válvulas, una para absorber y otra para alimentar.", tags: ["dirección trasvase"], clave: true },
        { n: 17, p: "Para que diga si se corroboró el estado del tanque receptor en cuanto a capacidad y contenido previo.", r: "Sí, las válvulas tienen un testigo de vidrio que muestra la cantidad de combustible que hay en los tanques. En ese momento había entre 12 a 13 metros cúbicos de gasoil en cada tanque.", tags: ["volúmenes"], clave: true },
        { n: 18, p: "Para que diga si se realizaron cálculos de estabilidad antes de iniciar la operación.", r: "No se realizó nada. Yo tampoco soy responsable de esos cálculos.", tags: ["estabilidad"] },
        { n: 19, p: "Para que diga si previo a iniciar cualquier operación de trasvase de combustible es necesario tener autorización del oficial de guardia en puente.", r: "Sí, pero las válvulas yo las abrí antes de cruzarme con el primer oficial.", tags: ["cadena de mando"], clave: true },
        { n: 20, p: "Para que diga quién se encarga de realizar las verificaciones previas a la operación en relación a válvulas, tuberías, bombas, etc., y si efectivamente fueron realizadas.", r: "El tercer oficial de máquinas y jefe de máquinas." },
        { n: 21, p: "Para que diga si el aumento de escora fue progresivo o fue inmediato.", r: "Comenzó despacio pero cuando empezó a embarcar el agua a través del ojo de buey se aceleró." },
        { n: 22, p: "Para que diga si se activó algún tipo de alarma, qué indica la misma y qué acciones se tomaron en consecuencia.", r: "No se activó ninguna alarma.", tags: ["alarmas"] },
        { n: 23, p: "Para que diga si se detectó alguna falla en los equipos y/o maquinaria utilizada en la operativa de trasvaso de combustible.", r: "Todo estaba funcionando bien." },
        { n: 24, p: "Para que diga si el buque en algún momento quedó sin energía.", r: "Sí, hubo un apagón cuando yo me dispuse a abandonar el buque.", tags: ["black out"] },
        { n: 25, p: "Para que diga qué otras medidas de emergencia fueron adoptadas.", r: "No pude hacer más nada. Quisimos cerrar el ojo de buey pero nos fue imposible por la presión del agua." },
        { n: 26, p: "Para que diga si recibió alguna orden que no fuese por parte del Capitán, Jefe de Máquinas o Primer Oficial.", r: "No." },
        { n: 27, p: "Para que diga si alguno de los tripulantes del buque sufrió daños a raíz de la situación.", r: "No." },
        { n: 28, p: "Para que diga si en algún momento el Tercer Oficial de Máquinas concurrió a la sala de máquinas a brindar apoyo para la operación de trasvase de combustible.", r: "Sí, en un momento él bajó conmigo a sala, yo le mostré las válvulas abiertas y me dijo que estaba todo correcto.", tags: ["contradicción"], clave: true },
        { n: 29, p: "Para que diga si se detectó el lugar por donde embarcó el agua al escorarse el buque.", r: "Sí, lo vi personalmente por dónde ingresaba el agua. Como dije anteriormente fue a través de un ojo de buey del taller, cerca del torno.", tags: ["ojo de buey"], clave: true },
        { n: 30, p: "Para que diga si se encontraban en funcionamiento las bombas de achique. En caso afirmativo, quién estuvo a cargo de esa operativa.", r: "Las tres bombas estaban en funcionamiento. En este caso no llegaron a funcionar por el black out que ocurrió. No cuentan con otro sistema de alimentación eléctrica. Existe un generador de emergencia en proa pero no tuvimos tiempo de encenderlo.", tags: ["energía de emergencia"], clave: true },
        { n: 31, p: "Para que diga cuál considera que fue el motivo principal del hundimiento del buque.", r: "Realmente no sé cuál pudo haber sido el motivo de la escora del buque, yo hace relativamente poco que estoy a bordo del mismo y no lo conozco lo suficiente. Tengo la teoría de que pudo haber sido el viento el que inclinó el barco y una vez comenzó a embarcar el agua por el ojo de buey, se produjo el black out y fue imposible volver a adrizarlo.", tags: ["causa", "teoría del viento"], clave: true },
        { n: 32, p: "Para que diga cuál fue el determinante para abandonar el barco.", r: "Cuando se produjo el black out el buque estaba tan escorado que tomé la decisión de abandonarlo e ir a muelle. El detonante fue el black out.", tags: ["abandono"] },
        { n: 33, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "No." },
        { n: 34, p: "Para que diga si desea señalar alguna actuación de otra persona que, a su juicio, haya contribuido a la escora, inundación o hundimiento del buque.", r: "No." }
      ],
      conclusiones: [
        { tipo: "critico", t: "Es el declarante señalado como culpable por el 1er Oficial y por la agencia marítima, pero su versión desarma esa imputación: nunca encendió la bomba, sólo abrió válvulas, y el trasvase por gravedad resultante es de \"una velocidad sumamente menor\". Un caudal así no puede generar en minutos una escora de 10° ni mucho menos de 35–40°." },
        { tipo: "critico", t: "Declara la dirección OPUESTA a la sostenida por el Capitán: trasvasó del tanque 9 de BABOR al 9 de ESTRIBOR, es decir, en el sentido correcto para adrizar un buque escorado a babor. Detalla además el mecanismo (válvula de absorción y válvula de alimentación identificadas por número de tanque) y el contenido previo verificado por testigo de vidrio: 12–13 m³ en cada tanque." },
        { tipo: "critico", t: "Afirma de forma circunstanciada que el 1er Oficial FROLOV le ordenó NO encender la bomba \"porque tal vez se podría escorar más el buque\", que le respondió que eso no tenía sentido, y que la bomba no se encendió por esa orden. FROLOV lo niega. Si esta versión es correcta, el oficial de guardia impidió activamente el adrizamiento del buque." },
        { tipo: "critico", t: "Aporta el dato de estanqueidad más relevante del expediente: el día anterior un taller del puerto trabajaba en las cañerías del sistema de enfriamiento del reductor del eje principal y, para ello, se había DESCONECTADO la bomba que toma agua de mar. Es una intervención directa sobre un circuito abierto al mar que nadie más reconoce y que debe ser peritada." },
        { tipo: "hecho", t: "Localiza con precisión la vía de inundación: ojo de buey de babor en el taller donde se encuentra el torno, próximo a la sala de refrigeración. Coincide con el Jefe de Máquinas, con el 3° Oficial y con el 1er Oficial." },
        { tipo: "alerta", t: "Sus responsabilidades declaradas son la lubricación y el motor principal, y admite conocer el buque sólo \"aproximadamente\" porque el sistema de combustible corresponde al Jefe de Máquinas y al 3° Oficial. Aun así operó válvulas de trasvase de combustible sin autorización previa del oficial de guardia, reconociendo que ésta era necesaria." },
        { tipo: "contradiccion", t: "El 1er Oficial afirma haberlo encontrado \"sentado\" en la sala de máquinas y que ya había comenzado el trasvase; el 2° Oficial dice que estaba en su camarote cuando comenzó la escora y que bajó después. Las secuencias no se pueden conciliar." },
        { tipo: "contradiccion", t: "Sostiene que el 3° Oficial bajó con él, vio las válvulas abiertas y le dijo \"que estaba todo correcto\". El 3° Oficial declara que NO pudo corroborar si estaban correctamente abiertas porque empezó a entrar agua." },
        { tipo: "alerta", t: "Su teoría de que el viento inclinó el buque no está respaldada por ningún otro declarante ni por dato meteorológico alguno en el expediente. Debe verificarse con registros oficiales del día." },
        { tipo: "hecho", t: "Confirma la existencia de un generador de emergencia en proa que no se alcanzó a encender, y que las tres bombas de achique quedaron sin alimentación eléctrica alternativa tras el black out." }
      ]
    },

    /* ------------------------------------------------------------------ 6 */
    {
      id: "tercer-maquinas",
      nombre: "German IVAN",
      cargo: "3° Oficial de Máquinas",
      cargoCorto: "3° Of. Máquinas",
      grupo: "rusa",
      ficha: {
        Nacionalidad: "Rusa",
        "Fecha de nacimiento": "06/12/1973",
        Edad: "52 años",
        Pasaporte: "755600912",
        "Estado civil": "Casado",
        "Embarcado desde": "1 de abril de 2026",
        Responsabilidades: "Generadores, aprovisionamiento de combustible y distribución entre tanques"
      },
      acta: {
        fecha: "31 de agosto de 2026",
        inicio: "11:30",
        cierre: "11:11 (hora de cierre anterior a la de inicio — error de acta)",
        oficial: "TN (CP) Adrián MOLESINI",
        interprete: "Nicolai GOLUBEI FORTUNA",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: "9 (el número 8 se repite dos veces)",
        archivo: "ACTA DE INFORMACION SUMARIA - 3er Oficial de Maquinas.docx"
      },
      posicion: "Franco de guardia, en su camarote. El 2° Oficial lo va a buscar para corroborar la maniobra. Baja a sala de máquinas, verifica que la bomba está apagada, e intenta cerrar el ojo de buey sin éxito.",
      tesis: "No sabe quién ordenó ni ejecutó el trasvase del 25. El 24 de agosto él sí realizó tres trasvases 9↔9 por orden del 1er Oficial.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, edad, documento de identidad, profesión u ocupación.", r: "German IVAN, F/N 06/12/1973, ruso, N° Pasaporte 755600912, de 52 años, casado, tercer oficial de máquina del buque Alpha Crux." },
        { n: 2, p: "Para que indique el cargo que desempeña a bordo y desde qué fecha se encuentra embarcado ejerciéndolo.", r: "Me desempeño como 3° oficial de máquina del buque Alpha Crux, mi función es estar a cargo de los generadores como así también de la maniobra de aprovisionamiento de combustible del buque como así también la distribución entre los tanques. En este buque estoy desde el 1° de abril de los corrientes.", tags: ["competencia"], clave: true },
        { n: 3, p: "Para que diga si durante la estadía del buque en el puerto de Montevideo se realizaron arreglos en el eje principal.", r: "Yo no vi nada, pero sí escuché que había un problema en el caño de refrigeración de la caja reductora. Yo lo escuché del 2° de máquina como también del jefe de máquina.", tags: ["ESTANQUEIDAD", "contradicción"], clave: true },
        { n: 4, p: "Para que indique por qué razón hicieron trasvaso de combustible el día 25 de agosto de los corrientes entre los tanques 9 de estribor al tanque 9 de babor y autorizado por quién.", r: "Yo no estaba de guardia, por eso no sé quién dio la orden de hacer esa maniobra ni quién la hizo. Cuando yo estoy en descanso el que se encarga de la maniobra es el 1° oficial, que da la orden de realizar el trasvaso de combustible. El 25 en hora de la tarde estaba de guardia el 2° de máquina, es que por eso concurre a mi camarote para decirme que baje a sala de máquina para corroborar la maniobra. Una vez en sala de máquina, pude ver que la bomba no estaba prendida y vi las válvulas abiertas, pero no pude corroborar si estaban correctamente abiertas ya que empezó a entrar agua por el tambucho de la sala de máquina. Es que en ese momento subo para ver desde dónde estaba ingresando agua y veo que era desde un ojo de buey ubicado en un compartimiento donde está el torno del barco. En ese momento intento cerrar el ojo de buey pero no pude ya que ingresaba mucha agua. Luego me dirijo a los camarotes de los tripulantes para avisarles de lo que estaba pasando y les dije que teníamos que abandonar el buque.", tags: ["BOMBA NUNCA ENCENDIDA", "ojo de buey", "cadena de mando", "abandono"], clave: true },
        { n: 5, p: "Para que diga quiénes estaban en sala de máquina cuando usted bajó a corroborar las válvulas.", r: "Solo estaba el 2° de máquina, pasados los minutos es que comienza a ingresar agua.", tags: ["contradicción"], clave: true },
        { n: 6, p: "Para que diga si él sabía que ese día iban a hacer trasvaso de combustible, o si le avisan cuando se hace.", r: "No, no sabía. Yo solo me hago cargo del trasvaso de combustible cuando estamos en alta mar y recibimos combustible desde otro barco; de todas formas, cuando estoy de guardia estoy al tanto de todo lo referente a la sala de máquinas.", tags: ["contradicción", "cadena de mando"], clave: true },
        { n: 7, p: "Para que diga si sabe o presume por qué razón es que se escoró el buque.", r: "No lo sé. Yo el 24 de agosto hice trasvaso de combustible entre los tanques 9 de babor y 9 de estribor para adrizarlo; este día hice 2 veces del 9 de babor al 9 de estribor y una vez sola de estribor a babor. Hice esta maniobra porque el 1° oficial del barco me dio la orden de que la haga.", tags: ["ANTECEDENTE 24/08", "cadena de mando"], clave: true },
        { n: "8a", p: "Para que diga si estaba en conocimiento de alguna avería, deficiencia, condición de mantenimiento o circunstancia previa que pudiera afectar la estabilidad o estanqueidad del buque.", r: "Sí sabía que entraba agua a la bodega de carga, pero no sé bien por dónde, si por la cubierta principal o por algún otro lado.", tags: ["vía de agua"] },
        { n: "8b", p: "Para que diga si tomó alcohol 24 hs antes al incidente o si sabe si otros tripulantes tomaron alcohol.", r: "No tomé y tampoco sé si los demás tripulantes tomaron alcohol." },
        { n: 9, p: "Para que indique si tiene algo más que agregar.", r: "No, no tengo nada que agregar." }
      ],
      conclusiones: [
        { tipo: "critico", t: "Confirma de forma independiente el hecho decisivo: al bajar a sala de máquinas \"la bomba no estaba prendida\" y las válvulas estaban abiertas. Junto con la declaración del 2° Oficial, esto acredita que no hubo trasvase forzado de combustible y desarma la hipótesis del error humano del maquinista como causa de la escora." },
        { tipo: "critico", t: "Aporta el antecedente más relevante del expediente: el 24 de agosto —día previo— él mismo realizó TRES trasvases entre los tanques 9 (dos de babor a estribor y uno de estribor a babor) por orden expresa del 1er Oficial. Acredita que el buque venía escorándose de forma recurrente y que el 1er Oficial era quien ordenaba habitualmente esas maniobras, lo que debilita su versión de desconocimiento total el día 25." },
        { tipo: "contradiccion", t: "Declara que el 2° Oficial lo fue a buscar a su camarote para corroborar la maniobra. El 1er Oficial afirma que \"despertamos al 3er oficial de máquinas y lo pusimos a adrizar el barco\". Las dos versiones sobre quién lo convocó son incompatibles." },
        { tipo: "contradiccion", t: "El 2° Oficial sostiene que el 3° le dijo que las válvulas \"estaban todo correcto\"; el 3° declara expresamente que NO pudo corroborar si estaban correctamente abiertas porque ya entraba agua." },
        { tipo: "contradiccion", t: "Afirma haber escuchado del 2° Oficial y del propio Jefe de Máquinas que existía un problema en el caño de refrigeración de la caja reductora. El Jefe de Máquinas y el 1er Oficial niegan esa reparación. Es un testigo de oídas que corrobora al 2° Oficial." },
        { tipo: "hecho", t: "Es quien intenta materialmente cerrar el ojo de buey sin lograrlo por la presión del agua, y quien recorre los camarotes avisando a la tripulación que había que abandonar el buque. Fue la única acción organizada de abandono a bordo, y la tomó un oficial subalterno franco de guardia." },
        { tipo: "alerta", t: "La pregunta 4 está formulada por el instructor dando por sentada la dirección \"9 de estribor al 9 de babor\", cuando el ejecutante material declara lo contrario. La formulación de la pregunta condiciona la respuesta y conviene subsanarla en una ampliación." },
        { tipo: "alerta", t: "El acta presenta un cierre horario (11:11) anterior a su apertura (11:30) y repite el número de pregunta 8. Debe subsanarse formalmente." }
      ]
    },

    /* ------------------------------------------------------------------ 7 */
    {
      id: "patron-pesca",
      nombre: "Hoseon SHIN",
      cargo: "Patrón de Pesca (coreano)",
      cargoCorto: "Patrón de Pesca",
      grupo: "coreana",
      ficha: {
        Nacionalidad: "Corea del Sur",
        Pasaporte: "M33406677",
        "Estado civil": "Soltero",
        Profesión: "Marino mercante",
        Empresa: "Dong Nam",
        "A bordo desde": "≈marzo de 2024 (dos años)"
      },
      acta: {
        fecha: "1 de septiembre de 2026",
        inicio: "15:30",
        cierre: "16:20",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Dong Joon CHO CHOI (Corea del Sur, C.I. 4.492.697-9)",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 16,
        archivo: "ACTA DE INFORMACION SUMARIA - Patron de pesca Coreano.docx"
      },
      posicion: "No estaba a bordo. Se encontraba alojado en el Hotel Holiday Inn. Se enteró del hundimiento a las 18:46 por un mensaje del Sr. Kyongsu PARK, a quien sitúa de guardia en el puente; éste, al declarar, niega haber estado de guardia y afirma que le escribió ya desde el muelle.",
      tesis: "Presume un error en el manejo del lastre. La filtración de la bodega, posiblemente originada al quedar el buque apretado entre hielos cerca del polo sur, no tuvo relación con el incidente.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil y profesión.", r: "Hoseon SHIN, Corea del Sur, Nro. Pasaporte M33406677, soltero, marino mercante." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Supongo que sí, que por el hundimiento del Alpha Crux." },
        { n: 3, p: "Para que diga para qué empresa trabaja, qué rol cumple y desde cuándo (exhibido Seaman's Book en coreano).", r: "Dong Nam, patrón de pesca, yo trabajé en este barco desde hace dos años, no recuerdo exactamente desde cuándo pero creo que marzo de 2024." },
        { n: 4, p: "Para que diga cuáles son sus responsabilidades como Patrón de Pesca.", r: "Lo relacionado con la captura de los peces, la actividad pesquera. Todo lo que respecta a la navegación; una vez que el buque ingresa a puerto yo quedo libre de trabajo." },
        { n: 5, p: "Para que diga si se encontraba a bordo del buque el día del incidente.", r: "Yo no estaba a bordo, me encontraba en el hotel Holiday Inn." },
        { n: 6, p: "Para que diga si está en conocimiento de algún trabajo realizado en la bodega de carga del buque relativo a una filtración de agua.", r: "Sí hubo un incidente, en la bodega se encontró agua, pero una vez que descargamos los pescados no encontramos más agua. No llegamos a ver de dónde provenía.", tags: ["vía de agua"], clave: true },
        { n: 7, p: "Para que diga en dónde presume usted que se encontraba la filtración y si fue por este motivo que el buque ingresó al puerto de Montevideo.", r: "El año pasado en la zafra que se realizó cerca del polo sur, el buque quedó apretado entre los hielos. Si tengo que hacer una conjetura, la filtración tal vez fue en el casco y se produjo en ese incidente. El motivo por el que el buque ingresó a puerto fue para descargar el pescado.", tags: ["ANTECEDENTE CASCO", "contradicción"], clave: true },
        { n: 8, p: "Para que diga dónde se está alojando desde ocurrido el incidente y si tiene las necesidades básicas cubiertas.", r: "Me estoy alojando en el hotel Holiday Inn y puedo solventarme a mí mismo." },
        { n: 9, p: "Para que diga cómo es el relacionamiento con los oficiales de nacionalidad rusa.", r: "Siempre fue cordial, nunca tuve discusiones ni peleas con los oficiales rusos." },
        { n: 10, p: "Para que diga si en las 24 horas previas al incidente había consumido alcohol.", r: "Que sí pero no a bordo, en la ciudad.", tags: ["alcohol"], clave: true },
        { n: 11, p: "Para que diga si en las 24 horas previas al incidente vio a algún integrante de la tripulación consumiendo alcohol o aparentemente en estado etílico.", r: "Estando en el buque no vi ningún tripulante ebrio." },
        { n: 12, p: "Para que diga si conoce o presume las causas por las que el buque se escoró en puerto, lo que dio lugar a su hundimiento.", r: "Pensándolo detenidamente lo único que podría presumir es que se haya cometido un error en el manejo del lastre del buque.", tags: ["causa"], clave: true },
        { n: 13, p: "Para que diga si tenía conocimiento de una reparación en el sistema de refrigeración de la bodega de pescado.", r: "No tengo conocimiento de eso.", tags: ["contradicción"] },
        { n: 14, p: "Para que diga el momento en el que se enteró que el buque se había hundido.", r: "A las 18:46 horas. Me mandó un mensaje el Sr. Kyongsu PARK, que se encontraba de guardia en puente.", tags: ["CRONOLOGÍA CLAVE", "CONTRADICCIÓN"], clave: true },
        { n: 15, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "No creo poder aportar nada significativo." },
        { n: 16, p: "Para que diga si desea señalar alguna actuación de otra persona que, a su juicio, haya contribuido a la escora, inundación o hundimiento del buque.", r: "A mi parecer, que haya habido una apreciación de agua en la bodega no tuvo nada que ver con el incidente ocurrido." }
      ],
      conclusiones: [
        { tipo: "critico", t: "Aporta el dato horario más valioso del expediente: a las 18:46 recibió un mensaje del Sr. Kyongsu PARK informándole que el buque se había hundido. Esto acredita que al menos 44 minutos antes de que CONMO avisara a Prefectura (19:30) un tripulante ya tenía por hundido al buque, y que nadie de la tripulación notificó a la autoridad marítima." },
        { tipo: "contradiccion", t: "Sitúa a Kyongsu PARK \"de guardia en puente\" al momento del hundimiento, y el propio Kyongsu PARK lo desmiente: declara que no estaba de guardia, que se encontraba en su camarote viendo televisión y que le escribió \"ya estando en el muelle\", después de abandonar el buque. La corrección importa porque el mensaje de las 18:46 deja de ser el reporte de un testigo de puente y pasa a ser posterior al abandono completo del buque." },
        { tipo: "alerta", t: "Aporta un antecedente estructural inexplorado: durante la zafra del año anterior cerca del polo sur el buque quedó apretado entre los hielos, y conjetura que la filtración pudo originarse en el casco en ese episodio. Debe verificarse contra el historial de clase e inspecciones del buque." },
        { tipo: "contradiccion", t: "Sostiene que el buque ingresó a puerto para descargar pescado, mientras el Capitán, el 1er Oficial y el Jefe de Máquinas declaran que el ingreso se debió a la filtración de agua en la bodega." },
        { tipo: "alerta", t: "Es el único declarante que admite consumo de alcohol en las 24 horas previas, aunque en la ciudad y no a bordo, y estando fuera del buque. Al Capitán, al Jefe de Máquinas y al 2° Oficial de Máquinas no se les formuló la pregunta sobre alcohol." },
        { tipo: "alerta", t: "Su hipótesis de \"error en el manejo del lastre\" no se corresponde con la operación efectivamente realizada, que fue un trasvase de combustible entre tanques. Refleja desconocimiento del hecho concreto y no debería ponderarse como aporte técnico." },
        { tipo: "hecho", t: "Confirma que tras la descarga del pescado no se volvió a encontrar agua en la bodega y que nunca se determinó el origen de la filtración, coincidiendo con el Capitán." }
      ]
    },

    /* ------------------------------------------------------------------ 8 */
    {
      id: "maquinas-coreano",
      nombre: "Park KWANG JUN",
      cargo: "Jefe / técnico de máquinas coreano (acta rotulada «1er Oficial de Máquinas»)",
      cargoCorto: "Jefe Máq. coreano",
      grupo: "coreana",
      ficha: {
        Nacionalidad: "Corea del Sur",
        Documento: "M419X3876",
        Edad: "63 años",
        Profesión: "Se identifica como «jefe de máquina» (P.1) y como «técnico de máquina» (P.2)",
        Empresa: "Dong Nam",
        "A bordo desde": "≈3 años"
      },
      acta: {
        fecha: "1 de septiembre de 2026",
        inicio: "15:00",
        cierre: "15:00",
        oficial: "TN (CP) Adrián MOLESINI",
        interprete: "Dong Joon CHO CHOI (Corea del Sur, C.I. 4.492.697-9, F/N 08/07/1965)",
        lugar: "Montevideo — Prefectura del Puerto de Montevideo",
        preguntas: 14,
        archivo: "ACTA DE INFORMACION SUMARIA - 1er Oficial de Maquinas Coreano.pdf"
      },
      posicion: "A las 16:00 trabajaba en cubierta mientras personal venido de Corea soldaba piezas a bordo. A las 16:30 bajó a la sala de máquinas y la encontró en estado correcto. Se retiró del buque cerca de las 17:30 para comer fuera del puerto y no estaba a bordo al hundirse.",
      tesis: "El balanceo en puerto es natural y él lo corregía con pesos de las propias artes de pesca. Por lo que le contaron, el 2° maquinista quiso adrizar el buque con un trasvase de combustible.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, edad, documento de identidad, profesión u ocupación.", r: "Park KWANG JUN, 63 años, M419X3876, nacionalidad coreano, jefe de máquina del buque ALPHA CRUX." },
        { n: 2, p: "Para que indique el cargo que desempeña a bordo del buque Alpha Crux y desde qué fecha se encuentra embarcado ejerciéndolo y para qué empresa trabaja.", r: "Soy el técnico de máquina del buque y estoy desde hace unos 3 años aproximadamente, la empresa para la cual trabajo es Dong Nam.", tags: ["ambigüedad de cargo"], clave: true },
        { n: 3, p: "Para que diga usted cómo es el relacionamiento con los oficiales rusos del buque y si están subordinados a los mismos.", r: "Yo como técnico de máquina tengo la función de asistencia y supervisión de los oficiales rusos, que es el jefe de máquina y 2 oficiales más, quienes cumplen la tarea cotidiana del buque. La relación con ellos es buena, no tenemos ningún problema.", tags: ["CADENA DE MANDO PARALELA"], clave: true },
        { n: 4, p: "Para que diga usted si el día previo al incidente usted ingirió alcohol.", r: "Yo no tomo alcohol, soy muy creyente por eso no bebo alcohol." },
        { n: 5, p: "Para que diga si durante la estadía del buque en el puerto de Montevideo se le hicieron reparaciones al mismo, cuáles y en dónde.", r: "Para la preparación del zarpe del buque lo que se hizo el día 22 de agosto fue el cambio de tres tramos de caño de refrigeración del motor principal; esta reparación fue sacar y reponer por caños nuevos. Cabe mencionar que la reparación la hice yo con ayuda de 3 tripulantes indonesios y la prueba de presión se realizó el mismo día, lo que dio como resultado que estaba todo bien. Los 3 indonesios que estaban conmigo son los Sres. Agus PRIYAN (N° 17), Murdiono (N° 19) y Ravel WATTIMURY (N° 20). Este tramo de caño está ubicado en la sala de máquina del buque, ya que es para la refrigeración de los motores principales.", tags: ["REPARACIÓN", "versión nueva", "contradicción"], clave: true },
        { n: 6, p: "Para que diga usted si el capitán del barco o el jefe de máquina sabían de esta reparación.", r: "El jefe de máquina ruso seguro que sabía porque él ya estaba enterado que en puerto se iba a realizar esta tarea, y del capitán ruso presumo que sí, ya que el jefe de máquina debería de haberle dicho.", tags: ["CONTRADICCIÓN DIRECTA"], clave: true },
        { n: 7, p: "Para que indique quién es el encargado de realizar el trasvase de combustible.", r: "Formalmente esta tarea la cumple el 3er maquinista ruso, pero que cumple funciones también en cubierta; en los hechos la hace el jefe de máquina y el segundo.", tags: ["cadena de mando", "trasvase"], clave: true },
        { n: 8, p: "Para que diga si estaba en conocimiento de alguna avería, deficiencia, condición de mantenimiento o circunstancia previa que pudiera afectar la estabilidad o estanqueidad del buque.", r: "No. Si hubiéramos detectado o sospechado de algo que afecta la estabilidad del buque hubiéramos informado a la empresa, ya que eso implica una reparación mayor del buque.", tags: ["contradicción", "estanqueidad"], clave: true },
        { n: 9, p: "Para que diga en dónde se encontraba el día del incidente.", r: "A las 16:00 estaba trabajando en la cubierta, porque habían venido gente de Corea a trabajar en el buque ya que estaban soldando piezas que estaban en mal estado. Yo alrededor de las 16:30 bajé a sala de máquina para corroborar el estado de ésta y estaba todo correcto; luego de eso, cerca de las 17:30 yo me retiro del barco ya que iba a comer afuera del puerto.", tags: ["HECHO NUEVO", "trabajo en caliente", "cronología"], clave: true },
        { n: 10, p: "Para que diga usted si el buque cuenta con algún tipo de plan o procedimiento ante una vía de agua en buque.", r: "Claro que existe eso; para el caso de incendio o vía de agua están pegados sobre los mamparos del buque.", tags: ["procedimientos", "contradicción"], clave: true },
        { n: 11, p: "Para que diga usted con cuántas motobombas o bombas de achique portátiles cuenta el buque.", r: "El buque cuenta con una bomba de achique y 2 bombas portátiles.", tags: ["achique", "contradicción"], clave: true },
        { n: 12, p: "Para que diga usted si abordó al buque cuando regresó al mismo, cuándo se enteró de lo sucedido y quién lo llamó.", r: "Me enteré por un tripulante del buque Sur Este. Cuando llegué ingresé rápidamente, fui a mi camarote, agarré una linterna y quise ir a la sala de máquina, pero ya estaba bajo agua.", tags: ["notificación"], clave: true },
        { n: 13, p: "Para que diga si sabe por qué el barco se escoró.", r: "El balanceo en el puerto es natural. Yo, cuando estoy a bordo, trato de adrizarlo con pesas que son mismas de arte de pesca, y a mí me contaron que lo que pasó es que el 2° maquinista lo quiso adrizar con trasvase de combustible.", tags: ["causa", "de oídas"], clave: true },
        { n: 14, p: "Para que indique si tiene algo más que agregar.", r: "No." }
      ],
      conclusiones: [
        { tipo: "critico", t: "Introduce un hecho enteramente nuevo y no indagado a ningún otro declarante: a las 16:00 del día del siniestro había personal venido de Corea soldando a bordo piezas que estaban en mal estado. Es trabajo en caliente ejecutado por terceros el mismo día del hundimiento, en coincidencia temporal con el inicio de la escora que el Jefe de Máquinas sitúa sobre las 16:00. No consta la identidad de esa empresa, ni permiso de trabajo, ni supervisión, ni qué piezas se soldaron ni en qué ubicación del buque." },
        { tipo: "critico", t: "Aporta una versión completamente distinta de las reparaciones: no fue un taller portuario uruguayo el 24 de agosto sobre el enfriamiento del reductor del eje, sino él mismo con los tres marineros indonesios el 22 de agosto, cambiando tres tramos de caño de refrigeración del motor principal dentro de la sala de máquinas, con prueba de presión satisfactoria el mismo día. Convive con la versión del 2° Oficial de Máquinas sin excluirla: podrían ser dos intervenciones distintas en fechas distintas, lo que agrava el cuadro en lugar de aclararlo." },
        { tipo: "contradiccion", t: "Afirma que el Jefe de Máquinas ruso \"seguro que sabía\" de la reparación porque estaba enterado de antemano, y presume que el Capitán también fue informado. Es la primera imputación directa de conocimiento contra quienes negaron de plano toda reparación, y proviene de quien ejecutó materialmente la tarea." },
        { tipo: "critico", t: "Aporta la cuarta versión sobre la titularidad del trasvase de combustible y la única que distingue lo formal de lo real: formalmente corresponde al 3er maquinista ruso, pero \"en los hechos la hace el jefe de máquina y el segundo\". Coincide con que el ejecutante material del 25 de agosto fue el 2° Oficial de Máquinas y desmiente que se tratara de una actuación ajena a la práctica habitual del buque." },
        { tipo: "hecho", t: "Acota la ventana crítica del siniestro: a las 16:30 bajó a la sala de máquinas y la encontró \"todo correcto\", y se retiró del buque a las 17:30. Entre esa inspección y el mensaje de las 18:46 que da el buque por hundido transcurren poco más de dos horas. Su testimonio tensiona la hora de inicio de la escora fijada por el Jefe de Máquinas en las 16:00." },
        { tipo: "contradiccion", t: "Niega conocer cualquier avería o condición que afectara la estabilidad o la estanqueidad del buque, cuando MURDIONO declaró que era precisamente el oficial coreano quien reparaba el tubo de la bodega de carga cada vez que perdía agua. La negativa es incompatible con la conducta que otro declarante le atribuye." },
        { tipo: "contradiccion", t: "Sostiene que sí existen procedimientos escritos para incendio y vía de agua, pegados sobre los mamparos del buque, frente al Capitán y al Jefe de Máquinas que declaran la inexistencia de procedimientos escritos. Si esos planes estaban a la vista, la conclusión es aún más grave: ninguno se aplicó, no se dio alarma y el abandono se produjo sin orden." },
        { tipo: "contradiccion", t: "Declara que el buque cuenta con una bomba de achique y dos bombas portátiles, mientras el resto del expediente describe tres bombas de achique que quedaron inoperativas por el black out. Si existían dos motobombas portátiles, corresponde establecer si eran autónomas de la energía del buque y por qué no se emplearon durante las casi tres horas previas al hundimiento." },
        { tipo: "alerta", t: "Describe una cadena de mando paralela: su función era la \"asistencia y supervisión de los oficiales rusos\", incluido el Jefe de Máquinas. Ello es coherente con que los tres marineros indonesios recibieran órdenes de él y con que el patrón de pesca coreano determinara el fin de la jornada, y plantea a quién correspondía efectivamente la autoridad técnica a bordo." },
        { tipo: "alerta", t: "Su explicación de la escora es de oídas: \"a mí me contaron que el 2° maquinista lo quiso adrizar con trasvase de combustible\". Reproduce la misma hipótesis que la agencia marítima ya había difundido a las 20:00 del día del siniestro, lo que refuerza la sospecha de que esa versión circuló entre los intervinientes antes de toda declaración." },
        { tipo: "alerta", t: "Confirma que la escora era una condición habitual del buque en puerto y que él la corregía con pesos de las propias artes de pesca, sin cálculo alguno. Es una gestión informal de la estabilidad, coincidente con los tres trasvases del 24 de agosto y con la tolerancia normalizada a escoras extremas que declara el Capitán." },
        { tipo: "alerta", t: "La titularidad de la jefatura de máquinas queda sin establecer. El acta se rotula \"1er Oficial de Máquinas\", él se identifica como \"jefe de máquina\" en la P.1 y como \"técnico de máquina\" en la P.2, y firma como Jefe de Máquinas, mientras el ruso Ivanov YURI también se presentó alternativamente como \"primer oficial de máquina\" y \"jefe de máquinas\"." },
        { tipo: "alerta", t: "Defecto formal del acta: consigna la misma hora de apertura y de cierre (15:00) para catorce preguntas tomadas con traductor, y el mismo intérprete Dong Joon CHO CHOI figura ese día en el acta del patrón de pesca de 15:30 a 16:20. La duración real del acto no queda documentada." },
        { tipo: "hecho", t: "No estaba a bordo al momento del hundimiento. Se enteró por un tripulante del SURESTE y al regresar intentó bajar a la sala de máquinas con una linterna, encontrándola ya bajo agua. Niega consumo de alcohol por convicción religiosa." }
      ]
    },

    /* ------------------------------------------------------------------ 9 */
    {
      id: "primer-oficial-coreano",
      nombre: "Kyongsu PARK",
      cargo: "1er Oficial de Puente (coreano)",
      cargoCorto: "1er Of. Puente coreano",
      grupo: "coreana",
      ficha: {
        Nacionalidad: "Corea del Sur",
        Pasaporte: "M75853262",
        "Estado civil": "Soltero",
        Profesión: "Marino mercante",
        Empresa: "Dong Nam",
        "A bordo desde": "30 de marzo de 2025"
      },
      acta: {
        fecha: "2 de septiembre de 2026",
        inicio: "10:00",
        cierre: "1 de septiembre a las 16:20 (el acta consigna un cierre anterior a su apertura)",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Dong Joon CHO CHOI (Corea del Sur, C.I. 4.492.697-9, F/N 08/07/1965)",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 18,
        archivo: "ACTA DE INFORMACION SUMARIA - 1er Oficial Coreano.docx"
      },
      posicion: "Estaba a bordo pero NO de guardia: se encontraba en su camarote viendo televisión. Sintió la escora, se produjo el black out de inmediato, salió al exterior y abandonó el buque hacia el muelle, donde ya estaba toda la tripulación.",
      tesis: "No tiene hipótesis sobre lo ocurrido. Le sorprende la rapidez con que el buque se escoró y no cree que el trasvase entre los tanques 9 pudiera haber causado el hundimiento.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil y profesión.", r: "Kyongsu PARK, Corea del Sur, Nro. Pasaporte M75853262, soltero, marino mercante." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga para qué empresa trabaja, qué rol cumple y desde cuándo (exhibido Seaman's Book en coreano).", r: "Dong Nam, primer oficial de puente, estoy embarcado en el Alpha Crux desde el 30 de marzo de 2025.", tags: ["CARGO DUPLICADO"], clave: true },
        { n: 4, p: "Para que diga cuáles son sus responsabilidades como Patrón de Pesca. [La pregunta reproduce el cuestionario del patrón de pesca y no corresponde al cargo del declarante.]", r: "La tarea que realizo a bordo específicamente es durante la maniobra de pesca. No suelo hacer guardias, generalmente ocupo puesto en el puente durante las maniobras de pesca. Durante el lance del palangre estoy en la popa controlando que el lance se realice correctamente y durante el izado del palangre estoy en el puente timoneando.", tags: ["NO HACE GUARDIAS", "defecto formal"], clave: true },
        { n: 5, p: "Para que diga si se encontraba a bordo del buque el día del incidente.", r: "Sí, estaba en mi camarote pero no estaba de guardia.", tags: ["CONTRADICCIÓN CENTRAL"], clave: true },
        { n: 6, p: "Para que relate los hechos acaecidos.", r: "Estaba viendo el televisor en mi camarote cuando sentí que el barco se estaba escorando. En ese momento hubo un black out y el barco quedó a oscuras. Todo sucedió muy rápido. Salí hacia el exterior y luego abandoné el buque hacia el muelle. No tuve ninguna otra interacción, cuando salí ya estaban todos los tripulantes en el muelle.", tags: ["ESCORA SÚBITA", "cronología", "abandono"], clave: true },
        { n: 7, p: "Para que diga si le informó de la situación a alguien.", r: "Inmediatamente ya estando en el muelle me comuniqué con el patrón de pesca coreano, el Sr. Hoseon SHIN.", tags: ["HITO 18:46", "notificación"], clave: true },
        { n: 8, p: "Para que diga si está en conocimiento de las maniobras de trasvase de combustible que se hicieron el día 24 de agosto, día previo al incidente.", r: "Sí, me enteré que se hicieron trasvases de combustible pero desconozco los motivos porque no es parte de mi cargo.", tags: ["trasvases del 24"], clave: true },
        { n: 9, p: "Para que diga si está en conocimiento de alguna filtración de agua en la bodega de carga.", r: "Sí, habíamos detectado que había agua, pero una vez que descargamos los pescados y verificamos no quedaba ningún rastro del agua.", tags: ["vía de agua"], clave: true },
        { n: 10, p: "Para que diga si está en conocimiento de reparaciones llevadas a cabo en la sala de máquinas.", r: "No, de ninguna. No es parte de mi cargo." },
        { n: 11, p: "Para que diga si conoce o presume las causas por las que el buque se escoró en puerto, lo que dio lugar a su hundimiento.", r: "La verdad que es la primera vez que me pasa esta situación y no tengo hipótesis sobre qué pudo haber ocurrido." },
        { n: 12, p: "Para que diga si considera que la maniobra de trasvaso de combustible de los tanques 9 de babor al 9 de estribor podría haber ocasionado la escora repentina y eventual hundimiento del buque.", r: "Sinceramente me sorprende lo rápido que sucedió la escora del barco. No creo que el trasvase de combustible entre esos tanques ocasione el hundimiento del buque.", tags: ["CAUSA", "escora súbita"], clave: true },
        { n: 13, p: "Para que diga dónde se está alojando desde ocurrido el incidente y si tiene las necesidades básicas cubiertas.", r: "Me estoy alojando en el hotel Holiday Inn. La empresa está solventando los gastos del hospedaje.", tags: ["condiciones náufragos"] },
        { n: 14, p: "Para que diga cómo es el relacionamiento con los oficiales de nacionalidad rusa y la tripulación indonesia.", r: "Nos llevamos bastante bien. Con los rusos la relación es un poco más formal porque nosotros nos involucramos en la tarea específica de la pesca, entonces nosotros nunca les podemos dar órdenes a los oficiales rusos, eso es natural. Pero con los indonesios interactuamos en las maniobras de pesca, incluso damos órdenes y hacemos trabajo conjunto. No ha habido inconvenientes.", tags: ["CADENA DE MANDO", "contradicción"], clave: true },
        { n: 15, p: "Para que diga si en las 24 horas previas al incidente había consumido alcohol.", r: "Yo no bebo alcohol." },
        { n: 16, p: "Para que diga si en las 24 horas previas al incidente vio a algún integrante de la tripulación consumiendo alcohol o aparentemente en estado etílico.", r: "No, a nadie." },
        { n: 17, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "Que no." },
        { n: 18, p: "Para que diga si desea señalar alguna actuación de otra persona que, a su juicio, haya contribuido a la escora, inundación o hundimiento del buque.", r: "Que no.", tags: ["pregunta inédita"] }
      ],
      conclusiones: [
        { tipo: "critico", t: "Desmonta el dato que hasta ahora estructuraba la cronología del siniestro. El patrón de pesca declaró que el mensaje de las 18:46 se lo envió \"el Sr. Kyongsu PARK, que se encontraba de guardia en puente\". El propio Kyongsu PARK lo niega en tres puntos: no estaba de guardia, no estaba en el puente sino en su camarote viendo televisión, y se comunicó con el patrón \"ya estando en el muelle\", después de abandonar el buque. El aviso de las 18:46 no es entonces el reporte de un testigo de puente que ve hundirse el buque, sino el de un tripulante que ya lo había abandonado." },
        { tipo: "critico", t: "La consecuencia cronológica es decisiva y desplaza toda la secuencia hacia atrás: si a las 18:46 él ya estaba en el muelle y \"ya estaban todos los tripulantes\" allí, entonces la escora, el black out y el abandono completo del buque son ANTERIORES a esa hora. Las 18:46 dejan de ser el momento del hundimiento para convertirse en un límite máximo posterior a él." },
        { tipo: "critico", t: "Describe la escora y el black out como prácticamente simultáneos: \"sentí que el barco se estaba escorando. En ese momento hubo un black out. Todo sucedió muy rápido\". El valor del dato está en su neutralidad: es un tripulante ajeno por completo a la maniobra de máquinas, sin razón alguna para acortar o alargar la secuencia. Corrobora al Capitán —\"luego se produjo de forma repentina\"— y al 1er Oficial —\"hasta los 10 grados fue progresivo, luego fue muy rápido todo\"— en cuanto a que la fase final del colapso fue brusca. Su testimonio no excluye una escora leve previa que desde un camarote no habría percibido, pero sí acota el intervalo entre el momento en que el buque dejó de estar razonablemente adrizado y la pérdida total de energía, que es la ventana en la que el siniestro todavía era reversible." },
        { tipo: "critico", t: "Abre una pregunta que el expediente no responde: si él no estaba de guardia y el 1er Oficial de Puente ruso —único oficial de guardia— declara que al momento del black out estaba en tierra, sobre el muro, controlando la tensión de los cabos, entonces no había nadie en el puente durante la fase crítica del siniestro. Corresponde establecer quién ejercía la guardia efectiva de puente." },
        { tipo: "alerta", t: "Es el segundo Primer Oficial de Puente del buque: se identifica con el mismo cargo que Dmitrii FROLOV, de nacionalidad rusa. Sumado a la duplicación ya detectada en la línea de máquinas entre Ivanov YURI y Park KWANG JUN, revela una estructura de cargos íntegramente duplicada entre la línea rusa del armador y la línea coreana de Dong Nam, que el expediente no aclara en ningún punto." },
        { tipo: "contradiccion", t: "Contradice al jefe de máquinas coreano sobre la relación jerárquica con la oficialidad rusa. Park KWANG JUN declaró que su función era la \"asistencia y supervisión de los oficiales rusos\"; Kyongsu PARK afirma en cambio que \"nosotros nunca les podemos dar órdenes a los oficiales rusos, eso es natural\". Los dos oficiales coreanos describen posiciones opuestas frente a la misma oficialidad." },
        { tipo: "hecho", t: "Confirma que sí impartían órdenes a la tripulación indonesia durante las maniobras de pesca, coincidiendo con los tres marineros indonesios y con el jefe de máquinas coreano, y consolidando la existencia de una línea de mando coreana sobre el personal indonesio." },
        { tipo: "hecho", t: "Confirma la filtración de agua en la bodega de carga y que tras la descarga del pescado no quedó rastro de agua, coincidiendo con el Capitán, el 1er Oficial, el Jefe de Máquinas y el patrón de pesca. Deja aún más aislada la negativa de RAVEL y tensiona la del jefe de máquinas coreano Park KWANG JUN, que declaró no haber conocido avería alguna." },
        { tipo: "hecho", t: "Corrobora que el 24 de agosto se realizaron trasvases de combustible y que el hecho era de conocimiento general a bordo, respaldando al 3° Oficial de Máquinas frente a las negativas de la oficialidad rusa respecto de las operaciones de los días previos." },
        { tipo: "hecho", t: "Descarta el trasvase entre los tanques 9 como causa del hundimiento. Es el cuarto declarante que lo hace, junto con el Capitán y con el 2° y 3° Oficial de Máquinas, que acreditan que la bomba nunca fue encendida." },
        { tipo: "alerta", t: "Contrasta el trato dispensado a las distintas tripulaciones: se aloja en el Hotel Holiday Inn con gastos solventados por la empresa, mientras dos marineros indonesios declaran haber dormido en el piso del SURESTE 701 durante los primeros tres días y haber recibido ropa recién al octavo día." },
        { tipo: "alerta", t: "Defecto formal grave: el acta se abre el 2 de septiembre a las 10:00 y su pie consigna \"01 de septiembre de 2026 a las 16:20 horas\", hora que coincide exactamente con el cierre del acta del patrón de pesca. Es el segundo acta del expediente con hora de cierre anterior a su apertura. A ello se suma que la pregunta 4 le indaga sobre sus responsabilidades \"como Patrón de Pesca\", reproduciendo sin adaptar el cuestionario de otro declarante." },
        { tipo: "hecho", t: "Es la única acta del expediente que incluye una pregunta final invitando al declarante a señalar la actuación de terceros que hubiera contribuido a la escora, la inundación o el hundimiento. Responde que no. Niega además consumo de alcohol propio y de cualquier tripulante en las 24 horas previas." }
      ]
    },

    /* ----------------------------------------------------------------- 10 */
    {
      id: "murdiono",
      nombre: "MURDIONO",
      cargo: "Marinero de guardia de máquinas (indonesio)",
      cargoCorto: "Marinero MURDIONO",
      grupo: "indonesia",
      ficha: {
        Nacionalidad: "Indonesia",
        Pasaporte: "E9022361",
        "Estado civil": "Soltero",
        Profesión: "Marinero",
        "A bordo desde": "≈4 o 5 meses",
        "Recibe órdenes de": "Jefe de máquinas coreano Park KWANG JUN"
      },
      acta: {
        fecha: "3 de septiembre de 2026",
        inicio: "11:00",
        cierre: "11:30",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Verónica BRITOS (uruguaya, C.I. 4.470.416-9)",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 13,
        archivo: "ACTA DE INFORMACION SUMARIA - Marinero Indonesio MURDIONO.docx"
      },
      posicion: "Terminó su guardia a las 15:00 y no volvió a bajar a sala de máquinas. Horario 07:30–15:00; a partir de esa hora entraban de guardia los rusos.",
      tesis: "La filtración venía de un tubo dentro de la bodega de carga y el oficial coreano la arreglaba cuando ocurría. El día del incidente no había pérdida de ese tubo.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil, dirección y profesión.", r: "MURDIONO, indonesio, Nro. Pasaporte E9022361, soltero, marinero." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga qué rol cumplía a bordo del buque.", r: "Marinero de guardia de máquinas en el Alpha Crux desde hace aproximadamente unos 4 o 5 meses." },
        { n: 4, p: "Para que diga lo sucedido en el buque el día de su hundimiento.", r: "Yo terminé mi guardia a las 15:00 horas ese día, y no volví a bajar a la sala de máquinas. Mi horario era desde las 07:30 hasta las 15:00.", tags: ["cronología"], clave: true },
        { n: 5, p: "Para que diga si conoce los trabajos realizados por una empresa uruguaya en sala de máquinas.", r: "Hubo una empresa trabajando el día anterior al incidente, pero fueron a reparar el sistema de refrigeración del buque, nada relacionado con la sala de máquinas.", tags: ["terceros"], clave: true },
        { n: 6, p: "Para que diga si conoce la causa de la escora del buque o el motivo del trasvase interno de combustible el día del incidente.", r: "No, desconozco el motivo, yo no me encontraba en la sala de máquinas en ese momento." },
        { n: 7, p: "Para que diga si sabe el motivo por el cual ingresó el buque al puerto de Montevideo.", r: "Entramos a descargar el pescado porque había una filtración de agua que caía de un tubo dentro de la bodega de carga.", tags: ["vía de agua"], clave: true },
        { n: 8, p: "Para que diga si está en conocimiento de si en algún lugar de la bodega de carga había una avería o filtración de agua.", r: "Sí, la filtración venía de un tubo de dentro de la bodega de carga. No filtraba siempre pero cuando filtraba el oficial coreano la arreglaba. El día del incidente no había pérdida de ese tubo. El día del incidente se encontraban buscando la filtración en la bodega X, X, y X con un coreano que vino de tierra.", tags: ["VÍA DE AGUA", "CONTRADICCIÓN"], clave: true },
        { n: 9, p: "Para que diga de quién recibe órdenes y cuál es su horario de trabajo.", r: "Recibo órdenes del jefe de máquinas coreano, Park KWANG JUN. La jornada de trabajo es de 12 horas continuas y 6 de descanso, posterior a las 6 de descanso comienzan nuevamente las 12 horas de trabajo, en tres turnos diferentes. En puerto es de las 08:00 hasta las 15:00.", tags: ["descanso", "cadena de mando"], clave: true },
        { n: 10, p: "Para que diga actualmente dónde está alojado y si tiene las necesidades básicas cubiertas.", r: "En el Sur Este 701. Ahora tengo camarote con una cama pero los primeros tres días dormimos en el piso porque no había habitaciones limpias; a medida que nos las fueron asignando las limpiamos nosotros. Ayer el oficial coreano nos dio ropa. Comida y baño también en el Sur Este 701.", tags: ["condiciones náufragos"], clave: true },
        { n: 11, p: "Para que diga si vio a algún miembro de la tripulación consumir alcohol a bordo o en aparente estado etílico.", r: "Ver tomar, no vi a nadie. Hasta la última vez que los vi, que me fui a acostar, estaban todos estables." },
        { n: 12, p: "Para que diga si estuvo trabajando con el jefe de máquinas coreano Park KWANG JUN en el cambio de tres tramos de caño de refrigeración del motor principal el día 22 de agosto.", r: "Sí, nosotros cambiamos un caño en sala de máquinas con el jefe de máquinas coreano. El caño era de agua y para el motor principal. Se hicieron pruebas posteriores al cambio y se confirmó que la reparación quedó bien hecho sin pérdidas. El caño lo trajeron de tierra, el mismo coreano que estaba buscando la pérdida en la bodega de pescado. Asimismo, este coreano no tenía nada que ver con la empresa uruguaya que trabajó en la refrigeración de la bodega. El cambio lo hicimos en la mañana del día antes del incidente. Este coreano está hoy trabajando en el Sur Este 707 y en el Sur Este 701.", tags: ["reparación caño", "TERCEROS", "coreano de tierra"], clave: true },
        { n: 13, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "No." }
      ],
      conclusiones: [
        { tipo: "hecho", t: "Es el único declarante que identifica concretamente el origen de la filtración: un tubo dentro de la bodega de carga, que no perdía de forma permanente y que el oficial coreano reparaba cuando ocurría. Precisa además que el día del incidente ese tubo no tenía pérdida." },
        { tipo: "alerta", t: "Su versión implica que la filtración era conocida, recurrente y reparada de manera informal por personal coreano, sin registro ni intervención de los oficiales rusos. Contradice al Capitán, al 1er Oficial y al Jefe de Máquinas, que declaran no haber podido localizar nunca la filtración." },
        { tipo: "hecho", t: "Confirma que la guardia de máquinas indonesia terminaba a las 15:00 y que a partir de ese horario la sala quedaba bajo guardia de los oficiales rusos, delimitando la responsabilidad temporal de la operación." },
        { tipo: "hecho", t: "Corrobora la presencia de una empresa uruguaya trabajando el día anterior al incidente, aunque la ubica en el sistema de refrigeración y no en sala de máquinas." },
        { tipo: "alerta", t: "Describe un régimen de trabajo de 12 horas continuas con 6 de descanso, esquema que no cumple los mínimos de descanso exigibles y que debe ser evaluado como posible factor de fatiga." },
        { tipo: "alerta", t: "Relata que los tres primeros días posteriores al siniestro los náufragos durmieron en el piso del SURESTE 701 por falta de habitaciones limpias, teniendo que limpiarlas ellos mismos. Corresponde verificar el cumplimiento de las obligaciones del armador y del agente respecto de la tripulación siniestrada." },
        { tipo: "alerta", t: "Identifica a Park KWANG JUN, jefe de máquinas coreano, como quien imparte las órdenes a los marineros indonesios. Interrogado el 1 de septiembre, éste niega haber conocido avería alguna, lo que contradice frontalmente la reparación del tubo de la bodega que MURDIONO le atribuye." },
        { tipo: "hecho", t: "Confirma la reparación del caño de refrigeración del motor principal realizada el día antes del incidente con el jefe de máquinas coreano Park KWANG JUN. La pieza fue traída de tierra por un coreano ajeno a la empresa uruguaya, quien actualmente trabaja en el SURESTE 707 y en el SURESTE 701. Las pruebas posteriores resultaron satisfactorias." }
      ]
    },

    /* ----------------------------------------------------------------- 11 */
    {
      id: "ravel",
      nombre: "RAVEL WATTIMURY",
      cargo: "Marinero de guardia de máquinas (indonesio)",
      cargoCorto: "Marinero RAVEL",
      grupo: "indonesia",
      ficha: {
        Nacionalidad: "Indonesia",
        Pasaporte: "E5593303",
        "Estado civil": "Soltero",
        Profesión: "Marinero",
        "A bordo desde": "≈1 año",
        "Recibe órdenes de": "Jefe de máquinas coreano Park KWANG JUN"
      },
      acta: {
        fecha: "3 de septiembre de 2026",
        inicio: "12:40",
        cierre: "13:00",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Verónica BRITOS",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 13,
        archivo: "ACTA DE INFORMACION SUMARIA - Marinero Indonesio RAVEL.docx"
      },
      posicion: "No estaba a bordo durante el incidente: se encontraba recorriendo la ciudad. Al regresar encontró el buque hundido.",
      tesis: "No conocía ninguna avería. La empresa uruguaya trabajaba en el sistema eléctrico dentro de la sala de máquinas.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil, dirección y profesión.", r: "RAVEL WATTIMURY, indonesio, Nro. Pasaporte E5593303, soltero, marinero." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga qué rol cumplía a bordo del buque.", r: "Marinero de guardia de máquinas en el Alpha Crux desde hace aproximadamente un año." },
        { n: 4, p: "Para que diga lo sucedido en el buque el día de su hundimiento.", r: "Yo terminé mi guardia a las 15:00 horas ese día, y no volví a bajar a la sala de máquinas. Mi horario es desde las 07:30 hasta las 15:00 y a partir de ese horario entran de guardia los rusos.", tags: ["cronología"], clave: true },
        { n: 5, p: "Para que diga si conoce los trabajos realizados por una empresa uruguaya en sala de máquinas.", r: "Hubo una empresa trabajando el día anterior al incidente, dentro de la sala de máquinas, pero estaban trabajando en el sistema eléctrico del buque porque supuestamente al parecer había algún problema con eso, nada relacionado con las máquinas.", tags: ["TERCEROS", "sistema eléctrico"], clave: true },
        { n: 6, p: "Para que diga si conoce la causa de la escora del buque o el motivo del trasvase interno de combustible el día del incidente.", r: "No, desconozco el motivo, yo nunca participo en las maniobras de combustible; es más, durante el incidente yo me encontraba recorriendo la ciudad, no me encontraba a bordo. Cuando regresé me encontré con el buque hundido." },
        { n: 7, p: "Para que diga si sabe el motivo por el cual ingresó el buque al puerto de Montevideo.", r: "Entramos a descargar el pescado.", tags: ["contradicción"] },
        { n: 8, p: "Para que diga si está en conocimiento de si en algún lugar de la bodega de carga había una avería o filtración de agua.", r: "No, no sabía de ninguna avería. Solo de la parte eléctrica de la refrigeración. Agua a la bodega tampoco entraba.", tags: ["CONTRADICCIÓN"], clave: true },
        { n: 9, p: "Para que diga de quién recibe órdenes y cuál es su horario de trabajo.", r: "Recibo órdenes del jefe de máquinas coreano, Park KWANG JUN. La jornada de trabajo es de 12 horas continuas y 6 de descanso, posterior a las 6 de descanso comienzan nuevamente las 12 horas de trabajo. En puerto es de las 08:00 hasta las 15:00.", tags: ["descanso"] },
        { n: 10, p: "Para que diga actualmente dónde está alojado y si tiene las necesidades básicas cubiertas.", r: "En el Sur Este 701. Ahora tengo camarote con una cama pero los primeros tres días dormimos en el piso. Ayer el oficial coreano nos dio ropa. Comida y baño también en el Sur Este 701. En el Sur Este 701 hay poca tripulación por lo que hay camarotes vacíos.", tags: ["condiciones náufragos"] },
        { n: 11, p: "Para que diga si vio a algún miembro de la tripulación consumir alcohol a bordo o en aparente estado etílico.", r: "No, no vi a nadie." },
        { n: 12, p: "Para que diga si estuvo trabajando con el jefe de máquinas Park KWANG JUN en el cambio de tres tramos de caño de refrigeración del motor principal el día 22 de agosto.", r: "Sí, estuvimos trabajando con él en esa reparación pero fue en la mañana del día antes del incidente. No sé cuál era particularmente el funcionamiento de ese caño, yo solo ayudo en los trabajos. El caño lo trajo un coreano de tierra. Luego del trabajo que mencioné no volví a ver más al coreano. Luego de cambiarlo se hicieron pruebas y quedó bien, las uniones del mismo son con tornillos.", tags: ["reparación caño", "TERCEROS", "coreano de tierra"], clave: true },
        { n: 13, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "No." }
      ],
      conclusiones: [
        { tipo: "critico", t: "Es el único declarante que ubica a la empresa uruguaya trabajando DENTRO de la sala de máquinas y sobre el SISTEMA ELÉCTRICO del buque. El dato es de especial relevancia porque el black out —factor determinante de la pérdida del buque— se produjo por el mojado del tablero eléctrico principal, y porque los otros dos marineros y el 2° Oficial describen trabajos distintos y en otras ubicaciones." },
        { tipo: "contradiccion", t: "Niega la existencia de la filtración en la bodega de carga: \"agua a la bodega tampoco entraba\". Contradice al Capitán, al 1er Oficial, al Jefe de Máquinas, al 2° y 3° Oficial de Máquinas, al patrón coreano y a MURDIONO, todos los cuales la reconocen." },
        { tipo: "hecho", t: "No se encontraba a bordo durante el siniestro. Su valor probatorio se limita a la situación previa del buque y a los trabajos del día anterior." },
        { tipo: "hecho", t: "Coincide con los otros dos marineros indonesios en el régimen de guardia (07:30/08:00 a 15:00) y en que la guardia posterior era de los oficiales rusos." },
        { tipo: "alerta", t: "Confirma las condiciones deficientes de alojamiento de los náufragos durante los primeros tres días a bordo del SURESTE 701." },
        { tipo: "hecho", t: "Confirma la reparación del caño con Park KWANG JUN el día anterior al incidente. Aporta un detalle técnico: las uniones del caño son con tornillos. El caño fue traído por un coreano de tierra a quien no volvió a ver después de la reparación." }
      ]
    },

    /* ----------------------------------------------------------------- 12 */
    {
      id: "agus",
      nombre: "AGUS PRIYANTO",
      cargo: "Marinero de guardia de máquinas (indonesio)",
      cargoCorto: "Marinero AGUS",
      grupo: "indonesia",
      ficha: {
        Nacionalidad: "Indonesia",
        Pasaporte: "C8678186",
        "Estado civil": "Soltero",
        Profesión: "Marinero",
        "A bordo desde": "≈6 meses",
        "Recibe órdenes de": "Jefe de máquinas coreano Park KWANG JUN"
      },
      acta: {
        fecha: "3 de septiembre de 2026",
        inicio: "12:00",
        cierre: "12:30",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Verónica BRITOS",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 14,
        archivo: "ACTA DE INFORMACION SUMARIA - Marinero Indonesio AGUS PRIYANTO.docx"
      },
      posicion: "Terminó su guardia a las 15:00 y se fue a dormir. Antes de acostarse el buque \"parecía estar adrizado\".",
      tesis: "El único problema era la electricidad de la cámara de refrigeración del pescado, reparada por técnicos uruguayos el día previo.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil, dirección y profesión.", r: "AGUS PRIYANTO, indonesio, Nro. Pasaporte C8678186, soltero, marinero." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga qué rol cumplía a bordo del buque.", r: "Marinero de guardia de máquinas en el Alpha Crux desde hace aproximadamente 6 meses." },
        { n: 4, p: "Para que diga lo sucedido en el buque el día de su hundimiento.", r: "Yo terminé mi guardia a las 15:00 horas ese día, y no volví a bajar a la sala de máquinas. Mi horario es desde las 07:30 hasta las 15:00 y a partir de ese horario entran de guardia los rusos de máquinas.", tags: ["cronología"] },
        { n: 5, p: "Para que diga si conoce los trabajos realizados por una empresa uruguaya en sala de máquinas.", r: "Hubo una empresa trabajando el día anterior al incidente, pero estaban trabajando en el sistema de refrigeración del buque, y no los vi trabajar dentro de la sala de máquinas.", tags: ["terceros"], clave: true },
        { n: 6, p: "Para que diga si conoce la causa de la escora del buque o el motivo del trasvase interno de combustible el día del incidente.", r: "No, desconozco el motivo; por lo general esas maniobras de trasvase de combustible se realizan para estabilizar el buque, pero desconozco por qué la hicieron ese día y, además, antes de irme a dormir el buque parecía estar adrizado.", tags: ["CRONOLOGÍA CLAVE"], clave: true },
        { n: 7, p: "Para que diga si sabe el motivo por el cual ingresó el buque al puerto de Montevideo.", r: "Ingresamos a descargar el pescado.", tags: ["contradicción"] },
        { n: 8, p: "Para que diga si está en conocimiento de si en algún lugar de la bodega de carga había una avería o filtración de agua.", r: "El único problema que había era en la electricidad de la cámara de refrigeración del pescado, pero eso sucedió aquí en puerto. Estuvieron unos uruguayos trabajando en la electricidad de la frigorífica pero solo un día, el día previo al incidente.", tags: ["TERCEROS", "sistema eléctrico"], clave: true },
        { n: 9, p: "Para que diga de quién recibe órdenes y cuál es su horario de trabajo.", r: "Recibo órdenes del jefe de máquinas coreano, Park KWANG JUN. La jornada de trabajo es de 12 horas continuas y 6 de descanso, posterior a las 6 de descanso comienzan nuevamente las 12 horas de trabajo. El patrón de pesca coreano nos informa cuándo finalizar la jornada.", tags: ["descanso"] },
        { n: 10, p: "Para que diga actualmente dónde está alojado y si tiene las necesidades básicas cubiertas.", r: "Estamos en el Sur Este 701, ahora está todo bien.", tags: ["condiciones náufragos"] },
        { n: 11, p: "Para que diga si vio a algún miembro de la tripulación consumir alcohol a bordo o en aparente estado etílico.", r: "No, no vi a nadie." },
        { n: 12, p: "Para que diga si estuvo trabajando con el jefe de máquinas Park KWANG JUN en el cambio de tres tramos de caño de refrigeración del motor principal el día 22 de agosto.", r: "Sí, estuve en la reparación del caño de agua de la máquina principal. La reparación fue de suplantar un tramo del caño. El mismo se puso nuevo y en las extremidades del caño se unió mediante mordazas. Ese mismo día se hizo una prueba de la reparación del mismo la cual fue correcta. Lo que se hizo fue abrir las válvulas. Cuando pasó lo sucedido el motor estaba apagado entonces no pasaba agua por el mismo.", tags: ["reparación caño", "TERCEROS"], clave: true },
        { n: 13, p: "Para que diga si en algunas de las reparaciones del buque vino una empresa ajena al mismo.", r: "El caño lo trajo un coreano ajeno al buque, pero la sustitución del mismo la realizó el Jefe de Máquinas Coreano con nosotros, pero una de las reparaciones que se hicieron en la bodega de carga fue una empresa uruguaya, de la cual vinieron 3 personas.", tags: ["TERCEROS", "empresa uruguaya"], clave: true },
        { n: 14, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "No." }
      ],
      conclusiones: [
        { tipo: "critico", t: "Aporta un dato temporal decisivo: al terminar su guardia a las 15:00 y antes de irse a dormir, \"el buque parecía estar adrizado\". Fija un punto de partida objetivo: a las 15:00 el buque no presentaba escora apreciable, y el Jefe de Máquinas sitúa el inicio de la escora sobre las 16:00." },
        { tipo: "hecho", t: "Coincide con RAVEL y con AGUS en la presencia de técnicos uruguayos el día previo, situando el trabajo en la electricidad de la cámara frigorífica del pescado." },
        { tipo: "contradiccion", t: "Desconoce la filtración de agua en la bodega y reduce el problema a una cuestión eléctrica de la cámara de refrigeración, contradiciendo a los oficiales rusos y a MURDIONO." },
        { tipo: "hecho", t: "Confirma que el trasvase de combustible era una operación habitual de estabilización, aunque no conocía el motivo de la del día 25." },
        { tipo: "alerta", t: "Reitera el régimen de 12 horas de trabajo por 6 de descanso y añade que es el patrón de pesca coreano quien determina el fin de la jornada, lo que evidencia una cadena de mando paralela a la de los oficiales rusos." },
        { tipo: "hecho", t: "Confirma la reparación del caño de refrigeración del motor principal. Aporta detalles técnicos: se suplantó un tramo, se unió mediante mordazas, se probó abriendo las válvulas. Precisa que cuando ocurrió el siniestro el motor estaba apagado, por lo que no pasaba agua por ese caño." },
        { tipo: "hecho", t: "Confirma que el caño fue traído por un coreano ajeno al buque y que la empresa uruguaya (3 personas) trabajó en la bodega de carga, distinguiendo claramente entre ambas intervenciones externas." }
      ]
    },

    /* ----------------------------------------------------------------- 13 */
    {
      id: "urrestarazu",
      nombre: "Daniel URRESTARAZU LEINDEKAR",
      cargo: "Agente marítimo — Oriental Shipping",
      cargoCorto: "Agente URRESTARAZU",
      grupo: "terceros",
      ficha: {
        Nacionalidad: "Uruguaya",
        "C.I.": "1.885.820-3",
        "Estado civil": "Casado",
        Dirección: "Av. Paname M222 S16 — El Pinar, Canelones",
        Profesión: "Agente marítimo",
        Agencia: "Oriental Shipping",
        "Nota de grafía": "En el cuerpo del acta figura también «ARRESTARAZU»; CI y pie coinciden con URRESTARAZU"
      },
      acta: {
        fecha: "3 de septiembre de 2026",
        inicio: "15:10",
        cierre: "16:00",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Sin intérprete (declaración en español)",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 13,
        archivo: "ACTA DE INFORMACION SUMARIA - Agente Maritimo.docx"
      },
      posicion: "No estaba a bordo. Recibió aviso a las 18:55; llegó al muelle ≈19:45 y permaneció durante las maniobras de salvamento hasta después de la colocación de barreras OSRO.",
      tesis: "Se enteró por el inspector coreano Sr. MOON, quien a las 18:55 le envió una foto del buque escorado atribuyendo la causa a un trasvase incorrecto de los marineros rusos y pidiendo remolcador. Él movilizó SAAM Towage ≈19:15, Tecno Dive/CARLON a las 19:56 y OSRO Nueva Era a las 20:53. Desconoce la vía de agua de bodega y los trabajos técnicos a bordo; el alojamiento de los indonesios lo decide el armador a través de MOON.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil, dirección y profesión.", r: "Daniel ARRESTARAZU LEINDEKAR, uruguayo, CI: 1.885.820-3, casado, Av. Paname M222 S16 — El Pinar — Canelones, agente marítimo." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga qué rol cumple para el buque.", r: "Soy el Agente Marítimo del buque." },
        { n: 4, p: "Para que narre los hechos sucedidos el día del hundimiento del B/P Alpha Crux.", r: "Ese día me enteré de la situación por un inspector coreano que está a bordo, Sr. MOON. A la hora 18:55 él me manda un mensaje con una foto del barco muy escorado. En el mensaje decía que los marineros rusos transfirieron el combustible incorrectamente y me pidió un remolcador para que, apoyándolo en el Sur Este 707, evitara que se siguiera escorando. En ese momento llamé a SAAM Towage, aproximadamente a las 19:15. Me atendió la guardia y le informé que teníamos un barco con un problema y se estaba escorando, que necesitábamos un remolcador para aguantar el Sur Este 707 y detener la escora del Alpha Crux. Intenté llamar a Eduardo SUEIRO, baqueano del puerto que realiza maniobras, no logrando comunicarme con él hasta las 19:52, hora en la que recién pude hablar con él. Calculo que habré llegado al muelle del buque a las 19:45; yo cuando hablé con SUEIRO ya estaba en el muelle. SUEIRO llamó al Práctico de Seguridad de Guardia que era el CM PLADA y llegaron casi juntos aproximadamente a las 20:30. También llamé a Federico DA CUNHA de Tecno Dive a las 19:56, para que me asistieran con buzos y con el CARLON. Luego de que estaban presentes todos los actores entendidos en la maniobra comenzaron a intentar maniobras para recuperar el barco. Realizaron una maniobra con el CARLON: los buzos se tiraron al agua y envolvieron parte de la popa del Alpha Crux con una linga para levantarlo, pero no dio efecto positivo porque el buque subía muy poco debido a la capacidad de la grúa del CARLON. Aproximadamente a las 22:30 se abandonaron los intentos de levantar el Alpha Crux con el CARLON porque estaba dañando al Sur Este 707. Luego y por un tema de seguridad, entre el práctico PLADA, el baqueano SUEIRO y el representante del armador del Sur Este 707, el Sr. MOON, decidieron sacar al Sur Este 707. Los remolcadores de SAAM Towage MANEADOR y CRISTOBAL lo sacan de la banda del Alpha Crux y lo ponen a la banda del Sur Este 701. Luego de que la OSRO colocara las barreras de contención entiendo que no había más nada para hacer y me retiro del lugar.", tags: ["CADENA DE AVISO", "MOON", "18:55", "causa prematura"], clave: true },
        { n: 5, p: "Para que diga en qué momento se designa a la OSRO y cuándo se hace presente en el lugar de los hechos.", r: "A la hora 20:53 llamo a la OSRO, Nueva Era, y les digo que los necesito en el lugar porque el buque se estaba escorando y no sabía cómo iba a terminar eso. Hablé con Fabián SOCA. Al momento en que sacan al Sur Este 707 él comienza con la colocación de las barreras de contención de hidrocarburos.", tags: ["OSRO", "contaminación", "20:53"], clave: true },
        { n: 6, p: "Para que diga si estaba en conocimiento de que el buque ingresó a puerto por una aparente filtración de agua en la bodega de carga.", r: "No, nunca me informaron de esto. Cuando solicitan el ingreso a puerto el motivo que mencionan es la descarga de pescado.", tags: ["vía de agua", "CONTRADICCIÓN", "ingreso"], clave: true },
        { n: 7, p: "Para que diga si estaba en conocimiento de los trabajos que se estaban realizando a bordo. En caso afirmativo, nómbrelos.", r: "Lo único que le pidieron a la agencia fue un trabajo de libre de gases para trabajos menores en cubierta. Esos trabajos los estaba haciendo la tripulación.", tags: ["trabajos en puerto"] },
        { n: 8, p: "Para que diga si estaba en conocimiento de que embarcó una empresa uruguaya a trabajar sobre el sistema de refrigeración de la bodega de carga.", r: "No, a la agencia no le pidieron nada.", tags: ["terceros", "empresa uruguaya"], clave: true },
        { n: 9, p: "Para que diga si estaba en conocimiento del trabajo que se realizó en el sistema de refrigeración del motor principal.", r: "No, a la agencia no le informaron ni le pidieron nada.", tags: ["caño refrigeración"] },
        { n: 10, p: "Para que diga si se encontraba trabajando personal coreano externo al buque, quiénes son estas personas, cuál es su función y a quién responden.", r: "Desconozco la tarea del Sr. MOON a bordo; sí estoy en conocimiento de que él está al tanto de las reparaciones pero desconozco el alcance de su trabajo.", tags: ["MOON", "TERCEROS", "soldadura"], clave: true },
        { n: 11, p: "Para que diga por qué no se alojó a los tripulantes indonesios en hotel, siendo que en la póliza de seguro del buque establece que el mismo cubre todos los gastos que puedan surgir relacionados a la investigación de incidentes marítimos.", r: "Como Agencia Marítima desconozco las cláusulas menores de la póliza del seguro, y por otro lado, el que debe tomar esa decisión es el armador a través del Sr. MOON.", tags: ["condiciones náufragos", "MOON"], clave: true },
        { n: 12, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "No." },
        { n: 13, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "No." }
      ],
      conclusiones: [
        { tipo: "critico", t: "Cierra el eslabón faltante de la cadena de aviso: a las 18:55 el inspector coreano Sr. MOON le envió un mensaje con foto del buque escorado. Él llamó a SAAM Towage ≈19:15; CONMO registró el pedido de SAAM a las 19:30. Queda acreditada la secuencia MOON → agencia → SAAM → CONMO → Prefectura." },
        { tipo: "critico", t: "La atribución prematura de causa al «error de trasvase» no nació en la agencia: proviene del mensaje de MOON a las 18:55 («los marineros rusos transfirieron el combustible incorrectamente»). URRESTARAZU la reprodujo ante MOLESINI a las 20:00. La tesis que orientó el expediente inicial tiene autor identificado y hora." },
        { tipo: "hecho", t: "Aporta horarios concretos de su actuación: llegada al muelle ≈19:45; contacto con SUEIRO a las 19:52; llamado a Tecno Dive / Federico DA CUNHA a las 19:56; arribo de SUEIRO y PLADA ≈20:30; llamado a OSRO Nueva Era (Fabián SOCA) a las 20:53; abandono de la maniobra del CARLON ≈22:30." },
        { tipo: "contradiccion", t: "Sobre el retiro del SURESTE 707: atribuye la decisión a PLADA, SUEIRO y MOON (representante del armador del 707), no a sí mismo. PLADA, en cambio, le atribuyó a él la indicación a las 23:30. La hora que da (≈22:30, abandono del CARLON) se alinea más con FERRAO/MOLESINI (22:45–22:57) que con PLADA." },
        { tipo: "alerta", t: "Introduce al Sr. MOON como figura central aún no interrogada: inspector coreano a bordo, remitente del aviso 18:55, representante del armador del SURESTE 707, al tanto de las reparaciones, y quien —según el agente— decide el alojamiento de los náufragos. Es el testigo externo de mayor valor del expediente." },
        { tipo: "hecho", t: "La agencia no fue informada de la vía de agua en bodega: el motivo declarado al solicitar ingreso fue descarga de pescado. Tampoco le pidieron intervención para la empresa uruguaya de refrigeración ni para el cambio de caños del motor; sólo un libre de gases para trabajos menores en cubierta ejecutados por la tripulación." },
        { tipo: "alerta", t: "Sobre el alojamiento de los indonesios en el SURESTE 701 frente al hotel de la línea coreana: remite la decisión al armador a través de MOON y declara desconocer las cláusulas de la póliza. La disparidad de trato queda sin justificación documental en el expediente." },
        { tipo: "alerta", t: "El llamado a OSRO a las 20:53 —más de dos horas antes de la activación formal del plan a las 23:10— acredita que la agencia ya anticipaba riesgo de contaminación, pero las barreras recién se colocaron al retirar el SURESTE 707." }
      ]
    }
  ]
};
