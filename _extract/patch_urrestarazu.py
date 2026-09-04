# -*- coding: utf-8 -*-
from pathlib import Path

p = Path(r"c:\Users\joaco\OneDrive\Documents\Programación\Sumario\assets\data-analisis.js")
t = p.read_text(encoding="utf-8")

# 1. Update SURESTE 707 separation text
old = '''      titulo: "Se decide y ejecuta la separación del SURESTE 707",
      texto: "FERRAO consigna que a las 22:45 se decide separar al SURESTE 707 tras varios intentos fallidos de adrizar el ALPHA CRUX, y que a las 22:57 se concreta la separación, quedando el ALPHA CRUX semihundido. MOLESINI y la nota de cronología sitúan la decisión coordinada hacia las 22:50. La exposición de PLADA, en cambio, atribuye a URRESTARAZU la indicación de sacar el SURESTE 707 a las 23:30. Quedan tres horarios distintos para el mismo hecho.",
      fuente: "Informe FERRAO · Nota de cronología · Informe TN (CP) MOLESINI · Exposición CM PLADA", ref: "informe-ferrao",
      etiquetas: ["INCONGRUENCIA"], conflicto: true, destacado: true'''
new = '''      titulo: "Se decide y ejecuta la separación del SURESTE 707",
      texto: "FERRAO consigna que a las 22:45 se decide separar al SURESTE 707 tras varios intentos fallidos de adrizar el ALPHA CRUX, y que a las 22:57 se concreta la separación, quedando el ALPHA CRUX semihundido. MOLESINI y la nota de cronología sitúan la decisión coordinada hacia las 22:50. URRESTARAZU sitúa ≈22:30 el abandono de la maniobra del CARLON porque dañaba al 707, y atribuye la decisión de sacarlo a PLADA, SUEIRO y el Sr. MOON (representante del armador del 707), no a sí mismo. La exposición de PLADA, en cambio, le atribuye a URRESTARAZU la indicación a las 23:30. Quedan horarios y autorías en disputa.",
      fuente: "Informe FERRAO · Informe MOLESINI · Exposición PLADA · Acta URRESTARAZU P.4", ref: "urrestarazu",
      etiquetas: ["SURESTE 707", "INCONGRUENCIA", "MOON"], conflicto: true, destacado: true'''
assert old in t, "sep 707 not found"
t = t.replace(old, new)

# 2. Add interrogation timeline entry before closing of timeline array
old = '''      fuente: "Acta de Información Sumaria — 1er Oficial Coreano", ref: "primer-oficial-coreano",
      etiquetas: ["INTERROGATORIO", "HECHOS NUEVOS", "INCONGRUENCIA"], interrogatorio: true, conflicto: true, destacado: true
    }
  ],'''
new = '''      fuente: "Acta de Información Sumaria — 1er Oficial Coreano", ref: "primer-oficial-coreano",
      etiquetas: ["INTERROGATORIO", "HECHOS NUEVOS", "INCONGRUENCIA"], interrogatorio: true, conflicto: true, destacado: true
    },
    {
      fecha: "3 de septiembre de 2026", hora: "15:10 – 16:00", fase: "instruccion",
      titulo: "INTERROGATORIO — Agente marítimo Daniel URRESTARAZU",
      texto: "Acta de información sumaria tomada por el TN (CP) Joaquín PÉREZ CORIA. 13 preguntas. Cierra el eslabón faltante de la cadena de aviso: a las 18:55 el inspector coreano Sr. MOON le envió foto del buque escorado atribuyendo la causa a un trasvase incorrecto; él llamó a SAAM ≈19:15. Introduce a MOON como testigo central pendiente. Niega haber sido informado de la vía de agua y de los trabajos técnicos a bordo. Atribuye la decisión de retirar el SURESTE 707 a PLADA, SUEIRO y MOON.",
      fuente: "Acta de Información Sumaria — Agente Marítimo", ref: "urrestarazu",
      etiquetas: ["INTERROGATORIO", "HECHOS NUEVOS", "CADENA DE AVISO"], interrogatorio: true, destacado: true
    }
  ],'''
assert old in t, "kyongsu end not found"
t = t.replace(old, new)

# 3. Add moon node after siiukov
old = '''      { id: "siiukov", label: "2° Of. Evgenii SIIUKOV", cat: "no-declaro", size: 16, det: "Segundo Oficial de Puente. Según el Capitán, es la persona que realiza los cálculos de estabilidad del buque después de cada trasvase de combustible. Es el testigo directo del régimen de control de estabilidad a bordo. NO FUE INTERROGADO." },'''
new = '''      { id: "siiukov", label: "2° Of. Evgenii SIIUKOV", cat: "no-declaro", size: 16, det: "Segundo Oficial de Puente. Según el Capitán, es la persona que realiza los cálculos de estabilidad del buque después de cada trasvase de combustible. Es el testigo directo del régimen de control de estabilidad a bordo. NO FUE INTERROGADO." },
      { id: "moon", label: "Inspector Sr. MOON", cat: "no-declaro", size: 22, det: "Inspector coreano a bordo. Según URRESTARAZU: a las 18:55 le envió foto del buque escorado atribuyendo la causa a trasvase incorrecto de los rusos y pidiendo remolcador; es representante del armador del SURESTE 707; participó en la decisión de retirarlo; está al tanto de las reparaciones; a través de él el armador decide el alojamiento de los náufragos. NO FUE INTERROGADO. Es el testigo externo de mayor valor del expediente." },'''
assert old in t, "siiukov not found"
t = t.replace(old, new)

# 4. Update urrestarazu node
old = '''      { id: "urrestarazu", label: "Daniel URRESTARAZU", cat: "terceros", size: 20, det: "Agencia marítima Oriental Shipping, C.I. 1.885.820-3. Antes de las 19:30 ya había solicitado remolcadores a SAAM Towage (según FERRAO). A las 19:43, cuando MOLESINI lo llama, ya iba al lugar y había contactado al salvamento. A las 20:00 atribuye la escora a un error de trasvase —primera atribución de causa del expediente—. Queda sin establecer quién y cuándo le informó del siniestro." },'''
new = '''      { id: "urrestarazu", label: "Daniel URRESTARAZU", cat: "terceros", size: 22, ref: "urrestarazu", det: "Agente marítimo Oriental Shipping, C.I. 1.885.820-3. Declaró el 3/09. A las 18:55 recibió de MOON foto y atribución de causa; a las 19:15 llamó a SAAM; a las 19:56 a Tecno Dive; a las 20:53 a OSRO. Reprodujo ante MOLESINI a las 20:00 la tesis del error de trasvase recibida de MOON. Niega conocer la vía de agua y los trabajos técnicos. Atribuye el retiro del 707 a PLADA, SUEIRO y MOON." },'''
assert old in t, "urrestarazu node not found"
t = t.replace(old, new)

# 5. Update aviso1846
old = '''      { id: "aviso1846", label: "Aviso 18:46 · Agencia ya sabía · Prefectura 19:30", cat: "deficiencia", size: 21, det: "A las 18:46 Kyongsu PARK avisó al patrón desde el muelle. Antes de las 19:30 la Agencia Marítima ya había pedido remolcadores a SAAM. A las 19:30 SAAM pidió autorización a CONMO y FERRAO avisó a Prefectura y a PLADA. Ningún tripulante notificó a la autoridad; quién informó a la agencia sigue sin establecerse." },'''
new = '''      { id: "aviso1846", label: "Aviso 18:46 · MOON 18:55 · SAAM 19:15 · Prefectura 19:30", cat: "deficiencia", size: 21, det: "A las 18:46 Kyongsu PARK avisó al patrón desde el muelle. A las 18:55 MOON avisó a URRESTARAZU con foto y atribución de causa. ≈19:15 la agencia pidió remolcador a SAAM. A las 19:30 SAAM pidió autorización a CONMO y FERRAO avisó a Prefectura. Cadena acreditada: MOON → agencia → SAAM → CONMO → Prefectura. Ningún tripulante notificó a la autoridad." },'''
assert old in t, "aviso1846 not found"
t = t.replace(old, new)

# 6. Update perez det
old = '''      { id: "perez", label: "TN (CP) Joaquín PÉREZ CORIA", cat: "autoridad", size: 20, det: "Jefe del Departamento Despacho de Buques e Oficial Instructor. Tomó las actas del Capitán, del 1er Oficial (y su ampliación), del 2° Oficial de Máquinas, del patrón de pesca coreano, del 1er Oficial de Puente coreano y de los tres marineros indonesios (3 de septiembre de 2026)." },'''
new = '''      { id: "perez", label: "TN (CP) Joaquín PÉREZ CORIA", cat: "autoridad", size: 20, det: "Jefe del Departamento Despacho de Buques e Oficial Instructor. Tomó las actas del Capitán, del 1er Oficial (y su ampliación), del 2° Oficial de Máquinas, del patrón de pesca coreano, del 1er Oficial de Puente coreano, de los tres marineros indonesios y del agente marítimo URRESTARAZU (3 de septiembre de 2026)." },'''
assert old in t, "perez not found"
t = t.replace(old, new)

# 7. Add graph links for moon and urrestarazu updates
# Find a good insertion point near existing urrestarazu links
marker = '      { s: "urrestarazu", t: "remolcadores", l: "solicita asistencia a SAAM antes de 19:30", tipo: "accion" },'
assert marker in t, "urrestarazu remolcadores link not found"
t = t.replace(marker, '''      { s: "moon", t: "urrestarazu", l: "aviso 18:55 · foto y causa", tipo: "declara" },
      { s: "moon", t: "c-causa", l: "atribuye error de trasvase a rusos", tipo: "declara" },
      { s: "moon", t: "sureste707", l: "representante del armador", tipo: "estructura" },
      { s: "moon", t: "aviso1846", l: "origen de la cadena de aviso", tipo: "accion" },
      { s: "urrestarazu", t: "remolcadores", l: "llama a SAAM ≈19:15", tipo: "accion" },
      { s: "urrestarazu", t: "osro", l: "llama a Nueva Era 20:53", tipo: "accion" },
      { s: "urrestarazu", t: "sueiro", l: "lo contacta a las 19:52", tipo: "accion" },
      { s: "perez", t: "urrestarazu", l: "toma su acta", tipo: "instruccion" },''')

# Fix aviso1846 link text if it says quién avisó sigue abierto
t = t.replace(
  '{ s: "aviso1846", t: "expediente", l: "quién avisó a la agencia sigue abierto", tipo: "deficiencia" }',
  '{ s: "aviso1846", t: "expediente", l: "cadena cerrada · falta interrogar a MOON", tipo: "deficiencia" }'
)

p.write_text(t, encoding="utf-8")
print("OK graph/timeline updates")
