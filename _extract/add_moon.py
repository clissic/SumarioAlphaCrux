# -*- coding: utf-8 -*-
from pathlib import Path

path = Path("assets/data-declarantes.js")
text = path.read_text(encoding="utf-8")

text = text.replace(
    '{ tipo: "alerta", t: "Introduce al Sr. MOON como figura central aún no interrogada: inspector coreano a bordo, remitente del aviso 18:55, representante del armador del SURESTE 707, al tanto de las reparaciones, y quien —según el agente— decide el alojamiento de los náufragos. Es el testigo externo de mayor valor del expediente." },',
    '{ tipo: "alerta", t: "Introduce al Sr. Kibong MOON como remitente del aviso 18:55 y autor de la atribución prematura de causa. MOON declaró el 4/09: no confirma ese mensaje ni la atribución, dice no saber la causa y sitúa su retorno al buque a las 19:00. Queda la contradicción abierta." },',
)

moon = r'''
    /* ----------------------------------------------------------------- 14 */
    {
      id: "moon",
      nombre: "Kibong MOON",
      cargo: "Inspector técnico del armador — Dong Nam",
      cargoCorto: "Inspector MOON",
      grupo: "terceros",
      ficha: {
        Nacionalidad: "Corea del Sur",
        Pasaporte: "M11759454",
        "Estado civil": "Casado",
        Profesión: "Empleado de Dong Nam — inspector técnico de buques",
        "En el rol desde": "2019",
        Empresa: "Dong Nam"
      },
      acta: {
        fecha: "4 de septiembre de 2026",
        inicio: "14:30",
        cierre: "15:15",
        oficial: "TN (CP) Joaquín PÉREZ CORIA",
        interprete: "Dong Joon CHO CHOI (Corea del Sur, C.I. 4.492.697-9)",
        lugar: "Prefectura del Puerto de Montevideo",
        preguntas: 20,
        archivo: "ACTA DE INFORMACION SUMARIA - Inspector del Armador.docx"
      },
      posicion: "Trabajó a bordo hasta las 17:10 del 25/08 supervisando tareas y se retiró al hotel. A las 19:00 volvió al buque y lo encontró ya escorado. No figura en el crew list: es personal de tierra de Dong Nam.",
      tesis: "No sabe la causa del hundimiento. Confirma entrega de caños el 24/08 al jefe de máquinas coreano para el recambio del caño de enfriamiento del motor principal hacia la caja reductora (trabajo que no supervisó). Informó a la agencia de soldadura en cubierta, no de los trabajos de caños. Niega personal coreano de tierra trabajando en reparaciones el día del incidente. Los planos «Rambla» corresponden al nombre anterior del buque.",
      qa: [
        { n: 1, p: "Por su nombre, nacionalidad, documento de identidad, estado civil y profesión.", r: "Kibong MOON, Corea del Sur, Nro. Pasaporte M11759454, casado, empleado de la empresa Dong Nam." },
        { n: 2, p: "Para que diga si sabe porqué está siendo interrogado.", r: "Que sí." },
        { n: 3, p: "Para que diga para qué empresa trabaja, qué rol cumple y desde cuándo.", r: "En la empresa Dong Nam, estoy cumpliendo la tarea de inspector técnico de los buques de la empresa y trabajo desde 2019 en ese rol.", tags: ["cargo"], clave: true },
        { n: 4, p: "Para que diga cuáles son sus responsabilidades como inspector técnico de la empresa Dong Nam.", r: "Yo superviso y asisto desde su ingreso al puerto hasta que zarpe nuevamente, esto quiere decir que lo que hago son gestiones administrativas porque el buque cuando ingresa al puerto, controlo todo lo que hace el buque desde su descarga, aprovisionamientos y reparaciones del mismo. Soy el que le informa a la empresa en las condiciones que está el buque. También hago las coordinaciones con la agencia marítima.", tags: ["cargo", "agencia"], clave: true },
        { n: 5, p: "Para que diga si se encontraba a bordo del buque el día del incidente.", r: "Ese día trabajé en el buque hasta las 17:10 hs, realizando la supervisión de las tareas del buque. Luego que supervisara las tareas me retiré al hotel.", tags: ["CRONOLOGÍA", "17:10"], clave: true },
        { n: 6, p: "Para que diga qué tareas realizaron ese día o previo al día del incidente en el buque.", r: "El día anterior se hizo la descarga del pescado. El día del incidente recuerdo que lo que se hizo fue la limpieza de la bodega. El día 24 yo entregué unos caños al jefe de máquinas coreano; al momento que los entregué no sabía para qué eran pero al otro día supe que eran para hacer el recambio de las piezas viejas del caño de enfriamiento del motor principal que va hacia la caja reductora del eje del barco. Yo esta tarea no la supervisé.", tags: ["caños", "reductora", "HECHO NUEVO"], clave: true },
        { n: 7, p: "Para que diga si había más personal coreano de tierra trabajando en las reparaciones del buque.", r: "No había nadie trabajando.", tags: ["CONTRADICCIÓN", "soldadura", "personal Corea"], clave: true },
        { n: 8, p: "Para que diga si está en conocimiento de alguna filtración de agua en la bodega de carga.", r: "En el momento de la descarga de la bodega nos informaron que habían encontrado agua, pero al momento de finalizarla ya no había rastros de la misma.", tags: ["vía de agua"] },
        { n: 9, p: "Para que diga si está en conocimiento de reparaciones llevadas a cabo en la sala de máquinas.", r: "Sí, estaba informado que se hicieron trabajo de caños en la sala de máquinas. Me enteré porque el jefe de máquinas coreano me informó el día previo al incidente.", tags: ["caños", "sala de máquinas"], clave: true },
        { n: 10, p: "Para que diga si conoce o presume las causas por las que el buque se escoró en puerto, lo que dio lugar a su hundimiento.", r: "La verdad que no sabría decir cuál podría ser la causa del hundimiento; yo cuando fui al buque el día 25 de agosto a las 19:00 ya estaba escorado.", tags: ["causa", "19:00", "CONTRADICCIÓN"], clave: true },
        { n: 11, p: "Para que diga si, como representante del armador, comunicó estas reparaciones a la agencia marítima.", r: "Sí le informé a la agencia sobre un trabajo de soldadura que se iba a hacer pero no sobre un trabajo de caños, por eso la agencia obtuvo la habilitación para realizar trabajos de soldadura.", tags: ["agencia", "soldadura", "CONTRADICCIÓN"], clave: true },
        { n: 12, p: "Para que diga si sabía que para comenzar trabajos de reparación que impliquen una inmovilización del buque debía informar a los inspectores del Estado uruguayo.", r: "Yo soy consciente de que hay que informar a la autoridad marítima cuando el trabajo se hace mismo en el motor, pero como lo que se hizo era reemplazar un caño de refrigeración del motor principal que va a la caja reductora pensé que no era necesario ya que demoraron unas horas en hacer ese cambio.", tags: ["omisión autoridad", "ALERTA"], clave: true },
        { n: 13, p: "Para que diga si el trabajo lo realizaron con tripulantes del buque o con personal de tierra. En cualquier caso, diga si puede identificarlos.", r: "El trabajo lo realizaron los tripulantes del buque; no hubo intervención de ningún taller, solo sé que el jefe de máquina coreano y su equipo pero desconozco cuáles son los de su equipo.", tags: ["caños", "tripulación"], clave: true },
        { n: 14, p: "Para que diga si se realizaron pruebas luego de finalizar el trabajo en sala de máquinas.", r: "El jefe de máquina coreano me informó que se realizaron correctamente los trabajos del cambio de caños y que se realizó la prueba de funcionamiento la cual salió bien.", tags: ["prueba de presión"] },
        { n: 15, p: "Para que diga si estaba en conocimiento de la realización de trabajos en caliente (soldaduras) en el buque.", r: "Sí porque le pedí a la agencia que haga la solicitud correspondiente. Los mismos fueron en cubierta.", tags: ["soldadura", "cubierta"], clave: true },
        { n: 16, p: "Para que diga porqué los planos provistos por la agencia marítima tienen los datos de un buque denominado «RAMBLA» con fecha 12/10/2015.", r: "Rambla era el nombre anterior al buque cuando era propiedad de otro armador.", tags: ["planos", "Rambla"], clave: true },
        { n: 17, p: "Para que diga si desde que se diseñaron los planos el buque ha sufrido modificaciones en su estructura.", r: "Tengo entendido que desde 2015 no hubo cambios de la estructura del mismo.", tags: ["planos"] },
        { n: 18, p: "Para que diga si hay algún hecho relacionado con el incidente que no haya sido preguntado y que considere importante aclarar.", r: "La verdad que aparte de la respuesta que les he dado estamos preocupados y tenemos mucha duda de porqué pasó este accidente." },
        { n: 19, p: "Para que diga si le informó al jefe de máquina ruso o al Capitán del buque ruso sobre las reparaciones del caño del motor principal.", r: "Yo no le transmití personalmente, pero ellos estaban enterados que se iban a realizar esos trabajos. Los maquinistas estaban en la sala de máquinas porque el motor generador estaba encendido.", tags: ["oficialidad rusa", "caños"], clave: true },
        { n: 20, p: "Para que diga si desea señalar alguna actuación de otra persona que, a su juicio, haya contribuido a la escora, inundación o hundimiento del buque.", r: "Lo único que puedo decir es que en la sala de máquinas estaba el maquinista ruso de guardia.", tags: ["sala de máquinas"] }
      ],
      conclusiones: [
        { tipo: "critico", t: "Identifica su cargo: inspector técnico de Dong Nam desde 2019. Supervisa descarga, aprovisionamientos y reparaciones en puerto y coordina con la agencia. Es el nexo tierra–buque de la línea coreana." },
        { tipo: "critico", t: "CONTRADICCIÓN CENTRAL CON URRESTARAZU: el agente afirma que a las 18:55 MOON le envió foto atribuyendo la causa a un trasvase incorrecto de los rusos y pidiendo remolcador. MOON declara que no sabe la causa y que a las 19:00, al volver al buque, ya estaba escorado. El instructor NO le preguntó por el mensaje de las 18:55 ni por el pedido de remolcador." },
        { tipo: "hecho", t: "Fija horarios propios: a bordo hasta las 17:10 (supervisión); retiro al hotel; retorno a las 19:00 con el buque ya escorado. Es compatible con un mensaje desde el hotel a las 18:55, pero él no lo reconoce ni lo niega porque no se le preguntó." },
        { tipo: "critico", t: "El 24/08 entregó caños al jefe de máquinas coreano para el recambio del caño de enfriamiento del motor principal hacia la caja reductora del eje —el mismo circuito que el 2° Oficial vinculó a la desconexión de la bomba de agua de mar—. Declara no haber supervisado esa tarea." },
        { tipo: "contradiccion", t: "Niega que hubiera personal coreano de tierra trabajando en reparaciones. Park KWANG JUN situó a gente venida de Corea soldando a bordo el 25/08 a las 16:00. La contradicción queda abierta." },
        { tipo: "contradiccion", t: "Dice haber informado a la agencia de la soldadura (y que por eso obtuvo habilitación), pero no de los trabajos de caños. URRESTARAZU declara que a la agencia sólo le pidieron libre de gases para trabajos menores en cubierta ejecutados por la tripulación, y niega haber sido informado de reparaciones técnicas." },
        { tipo: "alerta", t: "Admite que debía informar a la autoridad marítima uruguaya trabajos sobre el motor, pero consideró innecesario avisar el cambio del caño de refrigeración porque «demoraron unas horas». Es una omisión consciente de notificación a la autoridad." },
        { tipo: "hecho", t: "Aclara el rótulo «RAMBLA» de los planos: era el nombre anterior del buque bajo otro armador. Entiende que desde 2015 no hubo cambios estructurales." },
        { tipo: "alerta", t: "El acta no indaga el mensaje 18:55, el pedido de remolcador, su rol como representante del armador del SURESTE 707, la decisión de retirarlo ni el alojamiento de los indonesios —puntos que URRESTARAZU le atribuyó—. Requiere ampliación." }
      ]
    }
'''

needle = '''        { tipo: "alerta", t: "El llamado a OSRO a las 20:53 —más de dos horas antes de la activación formal del plan a las 23:10— acredita que la agencia ya anticipaba riesgo de contaminación, pero las barreras recién se colocaron al retirar el SURESTE 707." }
      ]
    }
  ]
};'''

if needle not in text:
    raise SystemExit("needle not found")

replacement = '''        { tipo: "alerta", t: "El llamado a OSRO a las 20:53 —más de dos horas antes de la activación formal del plan a las 23:10— acredita que la agencia ya anticipaba riesgo de contaminación, pero las barreras recién se colocaron al retirar el SURESTE 707." }
      ]
    },''' + moon + '''
  ]
};'''

text = text.replace(needle, replacement)
path.write_text(text, encoding="utf-8")
print("OK declarantes", sum(1 for _ in text.split('id: "moon"')))
