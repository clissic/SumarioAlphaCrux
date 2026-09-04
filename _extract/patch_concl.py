# -*- coding: utf-8 -*-
from pathlib import Path

p = Path(r"c:\Users\joaco\OneDrive\Documents\Programación\Sumario\assets\data-analisis.js")
t = p.read_text(encoding="utf-8")

# Update notification conclusion
old = '{ grado: "acreditado", t: "Ningún tripulante ni oficial del ALPHA CRUX notificó el siniestro a la autoridad marítima. La Prefectura se enteró a las 19:30 porque SAAM Towage pidió a CONMO autorización para asistir al buque «por solicitud de la Agencia Marítima», y FERRAO avisó de inmediato al Oficial Comandante de Guardia y a PLADA. Queda acreditada la cadena agencia→SAAM→CONMO→Prefectura; queda sin establecer quién y cuándo informó a la Agencia Marítima. Es un incumplimiento del deber de notificación imputable al Capitán, con independencia de la causa del hundimiento." }'
new = '{ grado: "acreditado", t: "Ningún tripulante ni oficial del ALPHA CRUX notificó el siniestro a la autoridad marítima. Queda acreditada la cadena completa: a las 18:55 el inspector coreano Sr. MOON avisó a URRESTARAZU con foto del buque escorado; ≈19:15 la agencia pidió remolcador a SAAM; a las 19:30 SAAM pidió autorización a CONMO y FERRAO avisó a Prefectura y a PLADA. Es un incumplimiento del deber de notificación imputable al Capitán, con independencia de la causa del hundimiento." }'
assert old in t, "notif conclusion missing"
t = t.replace(old, new)

old = '{ grado: "a-verificar", t: "La atribución de causa quedó fijada de forma prematura. El agente marítimo, que no estaba a bordo, informó al oficial actuante a las 20:00 del mismo día que la escora se produjo por un error en la maniobra de trasvase, versión que quedó incorporada al informe del oficial actuante y que dos días después reprodujo el 1er Oficial. Debe determinarse quién le transmitió esa información y cuándo." }'
new = '{ grado: "acreditado", t: "La atribución prematura de causa al error de trasvase proviene del mensaje de MOON a URRESTARAZU a las 18:55 («los marineros rusos transfirieron el combustible incorrectamente»). El agente la reprodujo ante MOLESINI a las 20:00 y el 1er Oficial la reiteró dos días después. Queda por interrogar a MOON sobre el fundamento de esa atribución." }'
assert old in t, "causa prematura conclusion missing"
t = t.replace(old, new)

old = '{ grado: "acreditado", t: "Existió una demora relevante entre el hundimiento y la respuesta. El único registro horario del período es el mensaje de Kyongsu PARK a las 18:46, que él cursó ya desde el muelle y con el buque abandonado, de modo que el hundimiento fue anterior; la autoridad marítima intervino a las 19:36; el plan de contingencia contra la contaminación se activó a las 23:10 y el buque quedó cercado con barreras a las 00:30. Transcurrieron aproximadamente 5 horas y 44 minutos con un buque hundido que tenía a bordo alrededor de 300 toneladas de gasoil." }'
new = '{ grado: "acreditado", t: "Existió una demora relevante entre el hundimiento y la respuesta. Kyongsu PARK avisó al patrón a las 18:46 desde el muelle; MOON avisó a la agencia a las 18:55; Prefectura intervino a las 19:36. URRESTARAZU llamó a OSRO a las 20:53, pero la activación formal del plan se consigna a las 23:10 y el cerco a las 00:30. Transcurrieron aproximadamente 5 horas y 44 minutos con un buque hundido y ≈300 t de gasoil a bordo." }'
assert old in t, "demora conclusion missing"
t = t.replace(old, new)

old = '{ grado: "acreditado", t: "Dos informantes con conocimiento directo de los hechos siguen sin ser interrogados: Konstantin TOKMIN, único testigo del estado de la sala de máquinas en el intervalo crítico e invocado por el propio 1er Oficial como quien puede verificar su versión, y Evgenii SIIUKOV, 2° Oficial de Puente encargado de los cálculos de estabilidad. A ellos se suman los operarios venidos de Corea que soldaban a bordo el día del siniestro, cuya identidad no consta. Sin perjuicio de lo anterior, por el propio rol de la respuesta, el interrogatorio puede ampliarse también a agentes marítimos, funcionarios de salvamento y patrones de los buques intervinientes, en tanto sean portadores de datos relevantes. La declaración de Kyongsu PARK, pendiente hasta el 2 de septiembre, ya fue incorporada." }'
new = '{ grado: "acreditado", t: "Tres informantes con conocimiento directo siguen sin ser interrogados: Konstantin TOKMIN; Evgenii SIIUKOV; y el inspector coreano Sr. MOON —quien a las 18:55 avisó a la agencia, atribuyó la causa, representa al armador del SURESTE 707 y estaría al tanto de las reparaciones—. A ellos se suman los operarios venidos de Corea que soldaban a bordo. La declaración del agente URRESTARAZU ya fue incorporada el 3 de septiembre." }'
assert old in t, "pendientes conclusion missing"
t = t.replace(old, new)

# Update pasos - add MOON as priority, update agencia item, update OSRO/docs
old = '{ t: "Interrogar a Konstantin TOKMIN / TAKMIN, encargado del procesamiento de pescado.",'
# Insert MOON before TOKMIN
insert = '''{ t: "Interrogar al inspector coreano Sr. MOON.", d: "Es la diligencia más urgente que abre la declaración de URRESTARAZU. Debe declarar sobre: el mensaje de las 18:55 (contenido, foto, destinatario); el fundamento de su atribución de causa al trasvase de los rusos; su cargo, empresa y a quién responde; su rol como representante del armador del SURESTE 707 y su participación en la decisión de retirarlo; qué reparaciones conocía (caños, soldadura, empresa uruguaya); y la decisión de alojar a los indonesios en el SURESTE 701. Requerir el mensaje con foto y sus registros telefónicos del 25/08." },
        { t: "Interrogar a Konstantin TOKMIN / TAKMIN, encargado del procesamiento de pescado.",'''
assert old in t
t = t.replace(old, insert, 1)

# Update the item about interrogar resto / agencia
old = '{ t: "Interrogar al resto de la tripulación no declarada y completar el rol.", d: "Completar el rol de tripulación para identificar a todos los presentes a bordo el 25 de agosto, con énfasis en los tripulantes coreanos que según el Capitán comunicaron el siniestro a la agencia marítima —eslabón que el informe de FERRAO deja como el único pendiente de la cadena de aviso—; y, en paralelo, tomar declaración también a los informantes no embarcados que coordinan o ejecutan tareas en la fase de respuesta (agencia marítima, funcionarios de salvamento, patrones de remolcadores y demás auxiliares intervinientes)." }'
new = '{ t: "Interrogar al resto de la tripulación no declarada y completar el rol.", d: "Completar el rol de tripulación para identificar a todos los presentes a bordo el 25 de agosto. La cadena de aviso a la agencia quedó cerrada en MOON (18:55); falta confrontar al Capitán con ese nombre. Tomar declaración también a SUEIRO, patrones de remolcadores, Federico DA CUNHA (Tecno Dive) y Fabián SOCA (OSRO Nueva Era)." }'
assert old in t
t = t.replace(old, new)

# Update soldadura item - agency already declared
old = 'Requerir a la agencia marítima Oriental Shipping y a la Administración Nacional de Puertos los registros de ingreso de personal al muelle B ese día'
new = 'URRESTARAZU declara que MOON está al tanto de las reparaciones pero desconoce su alcance; requerir a MOON y a la ANP los registros de ingreso de personal al muelle B ese día'
assert old in t
t = t.replace(old, new)

p.write_text(t, encoding="utf-8")
print("OK conclusions/pasos")
