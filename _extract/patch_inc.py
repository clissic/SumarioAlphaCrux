# -*- coding: utf-8 -*-
from pathlib import Path

p = Path(r"c:\Users\joaco\OneDrive\Documents\Programación\Sumario\assets\data-analisis.js")
t = p.read_text(encoding="utf-8")

# --- i17 ---
old = '''    {
      id: "i17",
      titulo: "La agencia marítima fijó la causa antes de toda declaración",
      gravedad: "alta",
      eje: "Integridad de la investigación",
      resumen: "A las 20:00 del día del siniestro el agente marítimo ya atribuía la causa a un error en la maniobra de trasvase, tesis que después reprodujo el 1er Oficial.",
      versiones: [
        { quien: "TN (CP) Adrián MOLESINI — Oficial actuante", ref: "informe-molesini", cita: "A las 20:00 horas se hizo presente el Sr. URRESTARAZU. Al ser entrevistado con el fin de esclarecer lo sucedido, informó que se encontraban realizando un trasvase de combustible entre tanques y que, debido a un error en la maniobra, se produjo la escora de la nave.", donde: "Informe 26/08" },
        { quien: "Dmitrii FROLOV — 1er Oficial", ref: "primer-oficial", cita: "Equivocación humana del maquinista. […] La culpa fue del 2ndo oficial de máquinas.", donde: "Acta 27/08, P.40 y P.42" },
        { quien: "Igor ABDRAKHMANOV — 2° Of. Máquinas", ref: "segundo-maquinas", cita: "Yo nunca prendí bomba alguna para trasvasar gasoil a otro tanque.", donde: "Acta 28/08, P.6" }
      ],
      analisis: "El agente marítimo no estaba a bordo y su información sólo pudo provenir de la tripulación. Que la hipótesis del error en la maniobra estuviera formulada a las 20:00 del día del hecho, incorporada al informe del oficial actuante, y reproducida dos días después por el 1er Oficial, exige verificar quién se la transmitió y cuándo. A ello se suma el reconocimiento del Capitán de haber hablado con el 1er Oficial sobre quién dio la orden antes de declarar. El riesgo de que el expediente haya quedado orientado por una hipótesis prematura, luego desmentida por la evidencia material de que la bomba nunca se encendió, es real y debe ser tratado expresamente.",
      resolucion: "Interrogar al Sr. Daniel URRESTARAZU sobre la fuente de su información, la hora y el medio de la comunicación. Requerir sus registros telefónicos y de correspondencia con el buque y con el armador ese día. Ampliar declaración al Capitán y al 1er Oficial sobre sus comunicaciones previas a las actas."
    },'''

# Find i17 block more flexibly
idx = t.find('id: "i17"')
assert idx > 0
# find next id after i17
idx2 = t.find('id: "i18"', idx)
block = t[idx:idx2]
# We'll replace from the start of the object containing i17
start = t.rfind('{', 0, idx)
# better: find "    {\n      id: \"i17\""
start = t.find('    {\n      id: "i17"')
end = t.find('    {\n      id: "i18"')
assert start > 0 and end > start

new_i17 = '''    {
      id: "i17",
      titulo: "La atribución prematura de causa proviene del Sr. MOON",
      gravedad: "alta",
      eje: "Integridad de la investigación",
      resumen: "A las 18:55 MOON atribuyó la escora a un trasvase incorrecto de los rusos; URRESTARAZU lo reprodujo ante MOLESINI a las 20:00 y FROLOV lo reiteró dos días después.",
      versiones: [
        { quien: "Daniel URRESTARAZU — Agente marítimo", ref: "urrestarazu", cita: "A la hora 18:55 [MOON] me manda un mensaje con una foto del barco muy escorado. En el mensaje decía que los marineros rusos transfirieron el combustible incorrectamente.", donde: "Acta 03/09, P.4" },
        { quien: "TN (CP) Adrián MOLESINI — Oficial actuante", ref: "informe-molesini", cita: "A las 20:00 horas se hizo presente el Sr. URRESTARAZU […] informó que se encontraban realizando un trasvase de combustible entre tanques y que, debido a un error en la maniobra, se produjo la escora de la nave.", donde: "Informe 26/08" },
        { quien: "Dmitrii FROLOV — 1er Oficial", ref: "primer-oficial", cita: "Equivocación humana del maquinista. […] La culpa fue del 2ndo oficial de máquinas.", donde: "Acta 27/08, P.40 y P.42" },
        { quien: "Igor ABDRAKHMANOV — 2° Of. Máquinas", ref: "segundo-maquinas", cita: "Yo nunca prendí bomba alguna para trasvasar gasoil a otro tanque.", donde: "Acta 28/08, P.6" }
      ],
      analisis: "La declaración de URRESTARAZU cierra el origen de la tesis: no la inventó la agencia a las 20:00, sino que la recibió de MOON a las 18:55, con foto y pedido de remolcador. Esa hipótesis quedó incorporada al informe del oficial actuante y fue reproducida por el 1er Oficial. La evidencia material —bomba nunca encendida— la desmiente como causa suficiente. Queda por interrogar a MOON sobre el fundamento de su atribución, si habló con oficiales rusos y si coordinó versiones.",
      resolucion: "Interrogar al Sr. MOON sobre el mensaje de las 18:55, la fuente de su atribución de causa y sus comunicaciones con la tripulación rusa y coreana. Requerir el mensaje con foto. Ampliar al Capitán y al 1er Oficial sobre comunicaciones previas a las actas."
    },
'''
t = t[:start] + new_i17 + t[end:]

# --- i18 ---
start = t.find('    {\n      id: "i18"')
end = t.find('    {\n      id: "i19"')
assert start > 0 and end > start
new_i18 = '''    {
      id: "i18",
      titulo: "Nadie del buque notificó a la autoridad marítima",
      gravedad: "critica",
      eje: "Obligaciones del capitán",
      resumen: "La autoridad se enteró por SAAM a pedido de la agencia; URRESTARAZU acredita que el aviso a la agencia lo dio el inspector MOON a las 18:55.",
      versiones: [
        { quien: "Daniel URRESTARAZU — Agente marítimo", ref: "urrestarazu", cita: "Me enteré de la situación por un inspector coreano que está a bordo, Sr. MOON. A la hora 18:55 él me manda un mensaje […] En ese momento llamé a SAAM Towage, aproximadamente a las 19:15.", donde: "Acta 03/09, P.4" },
        { quien: "CS (PM) Willian FERRAO — Supervisor CONMO", ref: "informe-ferrao", cita: "Siendo la hora 19:30 se recibe llamado de la empresa SAAM TOWAGE solicitando autorización […] por solicitud de la Agencia Marítima.", donde: "Informe 26/08" },
        { quien: "Hoseon SHIN — Patrón de Pesca", ref: "patron-pesca", cita: "A las 18:46 horas. Me mandó un mensaje el Sr. Kyongsu PARK.", donde: "Acta 01/09, P.14" },
        { quien: "Andrei BELIKOV — Capitán", ref: "capitan", cita: "No pedimos nada porque cuando nos dimos cuenta ya era muy tarde. A la Agencia Marítima le informaron los tripulantes coreanos que se encontraban a bordo.", donde: "Acta 27/08, P.35" },
        { quien: "Kyongsu PARK — 1er Of. Puente coreano", ref: "primer-oficial-coreano", cita: "Inmediatamente ya estando en el muelle me comuniqué con el patrón de pesca coreano […] No tuve ninguna otra interacción.", donde: "Acta 02/09, P.6 y P.7" }
      ],
      analisis: "Queda acreditada la cadena completa: MOON 18:55 → URRESTARAZU → SAAM ≈19:15 → CONMO 19:30 → Prefectura. El Capitán había atribuido el aviso a «tripulantes coreanos» sin nombrarlos; ahora hay un nombre: MOON. Kyongsu PARK niega haber avisado a la agencia. Ningún tripulante notificó a la autoridad marítima. El intervalo 18:46–19:30 y la demora hasta OSRO (llamado 20:53, activación 23:10) siguen siendo relevantes.",
      resolucion: "Interrogar a MOON. Requerir a Oriental Shipping y SAAM los registros de llamadas del 25/08. Evaluar la responsabilidad administrativa del Capitán por omisión de notificación a la autoridad."
    },
'''
t = t[:start] + new_i18 + t[end:]

# --- Update i23 versions about retiro if present ---
if 'atribuye a URRESTARAZU la indicación' in t or 'URRESTARAZU indica que lo saquen' in t:
    t = t.replace(
        'Exposición de PLADA: a las 23:30 URRESTARAZU indica que lo saquen.',
        'Exposición de PLADA: a las 23:30 URRESTARAZU indica que lo saquen · Acta URRESTARAZU: ≈22:30 abandono CARLON; decisión PLADA + SUEIRO + MOON.'
    )

# --- Add new inconsistency i26 about via de agua / agency / moon lodging ---
# Insert before the closing of incongruencias array - find last incongruencia
# Find "pasos:" section and insert before conclusiones or after last incongruencia

marker = '  /* ================================================================== */\n  /*  CONCLUSIONES'
assert marker in t

new_inc = '''    {
      id: "i26",
      titulo: "La agencia no fue informada de la vía de agua ni de los trabajos técnicos",
      gravedad: "alta",
      eje: "Gestión portuaria y transparencia",
      resumen: "URRESTARAZU declara que el ingreso se solicitó por descarga de pescado y que la agencia no conocía la filtración ni las reparaciones (salvo un libre de gases para trabajos menores en cubierta).",
      versiones: [
        { quien: "Daniel URRESTARAZU — Agente marítimo", ref: "urrestarazu", cita: "No, nunca me informaron de esto. Cuando solicitan el ingreso a puerto el motivo que mencionan es la descarga de pescado.", donde: "Acta 03/09, P.6" },
        { quien: "Daniel URRESTARAZU — Agente marítimo", ref: "urrestarazu", cita: "Lo único que le pidieron a la agencia fue un trabajo de libre de gases para trabajos menores en cubierta. […] [Empresa uruguaya / caños del motor] No, a la agencia no le pidieron nada.", donde: "Acta 03/09, P.7–P.9" },
        { quien: "Andrei BELIKOV / oficiales rusos", cita: "Ingresaron por filtración de agua en la bodega de carga que no lograron localizar.", donde: "Actas 27/08" },
        { quien: "Park KWANG JUN / marineros indonesios", cita: "Cambio de caños del motor el 22/08 y trabajos externos el 24/08.", donde: "Actas 01/09 y 03/09" }
      ],
      analisis: "Si la agencia no fue informada de la vía de agua, el buque ingresó con un motivo declarado (descarga) distinto del motivo técnico real reconocido por la oficialidad rusa. Las reparaciones sobre circuitos de agua y el trabajo en caliente del 25/08 tampoco pasaron por la agencia. MOON, en cambio, estaría al tanto de las reparaciones según URRESTARAZU. El cuadro sugiere una gestión paralela de la información técnica hacia tierra.",
      resolucion: "Requerir la solicitud de ingreso y el despacho de arribo. Interrogar a MOON sobre qué trabajos conocía y autorizó. Confrontar al Capitán y al armador sobre la omisión de informar a la agencia la vía de agua."
    },
    {
      id: "i27",
      titulo: "Quién decidió retirar el SURESTE 707",
      gravedad: "media",
      eje: "Respuesta en la escena",
      resumen: "PLADA atribuye la indicación a URRESTARAZU a las 23:30; URRESTARAZU la atribuye a PLADA, SUEIRO y MOON ≈22:30 tras abandonar el CARLON.",
      versiones: [
        { quien: "CM Gustavo PLADA", ref: "exposicion-plada", cita: "El Sr. Daniel Urrestarazu […] indica que saquen el SURESTE 707 para no dañarlo.", donde: "Exposición 26/08 · ≈23:30" },
        { quien: "Daniel URRESTARAZU", ref: "urrestarazu", cita: "Aproximadamente a las 22:30 se abandonaron los intentos […] Luego […] entre el práctico PLADA, el baqueano SUEIRO y el representante del armador del Sur Este 707, el Sr. MOON, decidieron sacar al Sur Este 707.", donde: "Acta 03/09, P.4" },
        { quien: "CS (PM) Willian FERRAO", ref: "informe-ferrao", cita: "22:45 se decide separar […] 22:57 se separa el SURESTE 707.", donde: "Informe 26/08" }
      ],
      analisis: "La discrepancia ya no es sólo horaria: también es de autoría. URRESTARAZU se excluye de la decisión y sitúa a MOON como representante del armador del 707. PLADA lo señala a él. FERRAO/MOLESINI no nombran autor individual. Resolverlo importa para fijar responsabilidades sobre el momento en que el Alpha Crux perdió el apoyo lateral.",
      resolucion: "Carear o ampliar a PLADA, SUEIRO y URRESTARAZU; interrogar a MOON. Contrastar con registros de SAAM y CONMO."
    },

'''

# Insert before CONCLUSIONS marker - need to close incongruencias first
# Find the end of incongruencias - typically `  ],\n\n  /* ===... CONCLUSIONES`
# Look for pattern after last incongruencia
idx = t.find(marker)
# Walk back to find `  ],` that closes incongruencias
close = t.rfind('  ],', 0, idx)
# Insert before that closing
# Actually new_inc should be inserted before the closing `  ],` of incongruencias
# Find last `    }\n  ],` before CONCLUSIONS
end_inc = t.rfind('    }\n  ],', 0, idx)
assert end_inc > 0
# insert after the last `}` of last item, before `  ],`
insert_at = end_inc + len('    }')
t = t[:insert_at] + ',\n' + new_inc.rstrip() + '\n' + t[insert_at:]

p.write_text(t, encoding="utf-8")
print("OK incongruencias")
