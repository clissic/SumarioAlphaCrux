# -*- coding: utf-8 -*-
from pathlib import Path

p = Path(r"c:\Users\joaco\OneDrive\Documents\Programación\Sumario\assets\data-sumario.js")
t = p.read_text(encoding="utf-8")

t = t.replace(
    "las doce actas de información sumaria tomadas —incluidas las de los tres marineros indonesios del 3 de septiembre—",
    "las trece actas de información sumaria tomadas —incluidas las de los tres marineros indonesios y la del agente marítimo Daniel URRESTARAZU del 3 de septiembre—"
)

t = t.replace(
    "Queda acreditada la cadena agencia→SAAM→CONMO→Prefectura; queda sin establecer quién y cuándo informó a la Agencia Marítima.",
    "Queda acreditada la cadena completa MOON (18:55) → agencia → SAAM (≈19:15) → CONMO (19:30) → Prefectura, según la declaración de URRESTARAZU."
)

t = t.replace(
    "A las 19:43 se contactó a la agencia marítima Oriental Shipping. A las 20:00 se presentó el Sr. Daniel URRESTARAZU, quien informó que se estaba realizando un trasvase de combustible entre tanques y que, por un error en la maniobra, se había producido la escora. Esa atribución de causa —formulada por quien no estaba a bordo— quedó incorporada al informe del oficial actuante y anticipó la tesis que dos días después reprodujo el 1er Oficial de Puente. El informe de FERRAO acredita, además, que la agencia ya había solicitado remolcadores a SAAM antes de las 19:30: la llamada de MOLESINI no fue el primer aviso que recibió, sino un contacto posterior a una movilización que ella misma había iniciado.",
    "A las 19:43 se contactó a la agencia marítima Oriental Shipping. A las 20:00 se presentó el Sr. Daniel URRESTARAZU, quien informó que se estaba realizando un trasvase de combustible entre tanques y que, por un error en la maniobra, se había producido la escora. En su acta del 3 de septiembre reveló que esa atribución la recibió a las 18:55 del inspector coreano Sr. MOON, junto con una foto del buque escorado y el pedido de remolcador; él mismo había llamado a SAAM ≈19:15. La tesis prematura tiene así autor e hora identificados."
)

t = t.replace(
    "Hacia las 22:50–23:30 se decidió retirar el SURESTE 707 para no dañarlo. A las 23:10 se activó el plan de contingencia contra la contaminación (empresa Nueva Era).",
    "Hacia las 22:30–22:57 se decidió retirar el SURESTE 707: URRESTARAZU atribuye la decisión a PLADA, SUEIRO y MOON; PLADA se la atribuye a él. URRESTARAZU había llamado a OSRO Nueva Era a las 20:53; la activación formal del plan se consigna a las 23:10."
)

t = t.replace(
    "Con posterioridad se acreditó un dato horario anterior al aviso a Prefectura: a las 18:46 horas el Sr. Kyongsu PARK envió un mensaje al patrón de pesca Hoseon SHIN —alojado en el Hotel Holiday Inn— informándole que el buque se había hundido. Al declarar, PARK precisó que no estaba de guardia ni en el puente, sino en su camarote, y que cursó el aviso ya estando en el muelle, con toda la tripulación fuera del buque. Las 18:46 fijan así un límite posterior al black out y al abandono, no el momento del hundimiento.",
    "Con posterioridad se acreditaron dos datos horarios anteriores al aviso a Prefectura: a las 18:46 Kyongsu PARK avisó al patrón de pesca desde el muelle (buque ya abandonado); a las 18:55 el inspector Sr. MOON avisó a URRESTARAZU con foto y atribución de causa. Las 18:46 fijan un límite posterior al black out y al abandono."
)

t = t.replace(
    "La atribución prematura de causa al «error en el trasvase» circuló desde la agencia marítima a las 20:00 del día del siniestro y fue reproducida por el 1er Oficial.",
    "La atribución prematura de causa al «error en el trasvase» proviene del mensaje de MOON a URRESTARAZU a las 18:55, fue reproducida por la agencia ante MOLESINI a las 20:00 y reiterada por el 1er Oficial."
)

t = t.replace(
    "El informe de FERRAO acredita que a las 19:30 la Agencia Marítima ya había pedido remolcadores a SAAM y que CONMO avisó entonces a Prefectura y a PLADA; quién informó a la agencia sigue sin establecerse. Hasta la activación del plan contra la contaminación transcurrieron más de cuatro horas, con ≈300 t de gasoil a bordo.",
    "La declaración de URRESTARAZU cierra el aviso a la agencia en MOON (18:55) y el pedido a SAAM ≈19:15; CONMO avisó a Prefectura a las 19:30. URRESTARAZU llamó a OSRO a las 20:53, pero la activación formal se consigna a las 23:10. Queda pendiente interrogar a MOON."
)

# Add new analisisActas block about agency/MOON after via de agua or aviso
old = '''    {
      titulo: "Sobre la vía de agua previa",
      texto: "Capitán, 1er Oficial, Jefe de Máquinas, patrón de pesca y 1er Oficial de Puente coreano confirman filtración en la bodega de carga. Tras la descarga del pescado no quedó rastro. MURDIONO identifica un tubo interior reparado informalmente por el oficial coreano; éste niega haber conocido avería alguna. El patrón aporta el antecedente del casco apretado entre hielos. Ninguna línea fue explorada pericialmente. La fecha efectiva de arribo no surge del expediente."
    }
  ],'''
new = '''    {
      titulo: "Sobre la vía de agua previa",
      texto: "Capitán, 1er Oficial, Jefe de Máquinas, patrón de pesca y 1er Oficial de Puente coreano confirman filtración en la bodega de carga. Tras la descarga del pescado no quedó rastro. MURDIONO identifica un tubo interior reparado informalmente por el oficial coreano; éste niega haber conocido avería alguna. El patrón aporta el antecedente del casco apretado entre hielos. URRESTARAZU declara que la agencia nunca fue informada de la filtración: el ingreso se solicitó por descarga de pescado. Ninguna línea fue explorada pericialmente."
    },
    {
      titulo: "Sobre el agente marítimo y el Sr. MOON",
      texto: "La declaración de URRESTARAZU del 3 de septiembre cierra la cadena de aviso y abre un testigo central: el inspector coreano Sr. MOON, remitente del mensaje de las 18:55, representante del armador del SURESTE 707, al tanto de las reparaciones y quien —según el agente— decide el alojamiento de los náufragos. La agencia niega haber conocido los trabajos técnicos a bordo salvo un libre de gases para trabajos menores en cubierta."
    }
  ],'''
assert old in t
t = t.replace(old, new)

t = t.replace(
    '{ h: "18:46", t: "Kyongsu PARK avisa al patrón de pesca desde el muelle: el buque ya estaba abandonado." },\n    { h: "19:30", t: "SAAM Towage pide autorización a CONMO por solicitud de la Agencia Marítima; FERRAO avisa a Prefectura y a PLADA." },',
    '{ h: "18:46", t: "Kyongsu PARK avisa al patrón de pesca desde el muelle: el buque ya estaba abandonado." },\n    { h: "18:55", t: "MOON envía a URRESTARAZU foto del buque escorado y atribuye la causa a trasvase incorrecto de los rusos; pide remolcador." },\n    { h: "≈19:15", t: "URRESTARAZU llama a SAAM Towage." },\n    { h: "19:30", t: "SAAM pide autorización a CONMO; FERRAO avisa a Prefectura y a PLADA." },'
)

t = t.replace(
    '{ h: "19:43–20:00", t: "MOLESINI contacta a URRESTARAZU, que ya sabía y iba al lugar. La agencia atribuye la escora a un error de trasvase." },\n    { h: "23:10–00:30", t: "Activación del plan contra la contaminación y cierre del cerco de barreras." }',
    '{ h: "19:43–20:00", t: "MOLESINI contacta a URRESTARAZU (ya en camino / en muelle ≈19:45). La agencia reproduce la atribución de causa recibida de MOON." },\n    { h: "20:53", t: "URRESTARAZU llama a OSRO Nueva Era (Fabián SOCA)." },\n    { h: "≈22:30–22:57", t: "Abandono de maniobra del CARLON y separación del SURESTE 707 (autoría en disputa: PLADA/SUEIRO/MOON vs. URRESTARAZU)." },\n    { h: "23:10–00:30", t: "Activación formal del plan contra la contaminación y cierre del cerco de barreras." }'
)

t = t.replace(
    "Omisión del deber de notificación a la autoridad marítima por parte del Capitán y de la oficialidad de guardia. La autoridad se enteró por SAAM Towage a pedido de la agencia; el informante de la agencia no está identificado.",
    "Omisión del deber de notificación a la autoridad marítima por parte del Capitán y de la oficialidad de guardia. La autoridad se enteró por SAAM a pedido de la agencia; el informante de la agencia es el Sr. MOON (18:55), aún no interrogado."
)

t = t.replace(
    "Testigos pendientes: Konstantin TOKMIN, Evgenii SIIUKOV y el personal venido de Corea que soldaba a bordo el 25 de agosto.",
    "Testigos pendientes: Sr. MOON (prioridad), Konstantin TOKMIN, Evgenii SIIUKOV y el personal venido de Corea que soldaba a bordo el 25 de agosto."
)

t = t.replace(
    "La tesis del error humano por trasvase forzado de combustible, anticipada por la agencia marítima el mismo día del siniestro, no se sostiene con la prueba hoy obrante: la bomba no se encendió y el caudal por gravedad entre los tanques 9 es insuficiente para explicar la escora observada.",
    "La tesis del error humano por trasvase forzado de combustible, originada en el mensaje de MOON a las 18:55 y reproducida por la agencia a las 20:00, no se sostiene con la prueba hoy obrante: la bomba no se encendió y el caudal por gravedad entre los tanques 9 es insuficiente para explicar la escora observada."
)

t = t.replace(
    '"Continuar la instrucción con carácter inmediato: interrogar a Konstantin TOKMIN y a Evgenii SIIUKOV; identificar e interrogar al personal venido de Corea que soldaba a bordo el 25 de agosto;',
    '"Continuar la instrucción con carácter inmediato: interrogar al inspector Sr. MOON, a Konstantin TOKMIN y a Evgenii SIIUKOV; identificar e interrogar al personal venido de Corea que soldaba a bordo el 25 de agosto;'
)

p.write_text(t, encoding="utf-8")
print("OK sumario")
