import json
from pathlib import Path

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parent.parent


def load_json(name: str):
    return json.loads((ROOT / "_extract" / name).read_text(encoding="utf-8"))


def main():
    timeline = load_json("timeline.json")
    fases = load_json("fases.json")

    out = ROOT / "linea_tiempo_alpha_crux_detallada.pdf"

    doc = SimpleDocTemplate(
        str(out),
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36,
    )
    styles = getSampleStyleSheet()

    # Estilos compactos para más texto por página
    base = styles["Normal"]
    base.fontSize = 9
    base.leading = 11

    header = styles["Heading2"]
    header.fontSize = 14
    header.leading = 16

    story = []
    story.append(Paragraph("Línea de tiempo — Alpha Crux (detallada)", styles["Title"]))
    story.append(Spacer(1, 8))
    story.append(
        Paragraph(
            "Puerto de Montevideo — 25 de agosto de 2026. Vista por fases y detalle completo (hora, hito y texto).",
            styles["Normal"],
        )
    )
    story.append(Spacer(1, 14))

    # Agrupar por fase
    by_phase = {f["id"]: [] for f in fases}
    for it in timeline:
        ph = it.get("fase") or "instruccion"
        if ph not in by_phase:
            by_phase[ph] = []
        by_phase[ph].append(it)

    phase_order = [f["id"] for f in fases]

    header_bg = colors.HexColor("#1f2937")     # oscuro
    grid = colors.HexColor("#334155")          # gris azulado
    row_alt1 = colors.whitesmoke              # claro
    row_alt2 = colors.lightgrey               # claro

    for pid in phase_order:
        items = by_phase.get(pid) or []
        if not items:
            continue

        flabel = next((f["label"] for f in fases if f["id"] == pid), pid)
        story.append(Spacer(1, 10))
        story.append(Paragraph(f"Fase: {flabel}", header))

        data = [[
            Paragraph("<b>Hora</b>", styles["Normal"]),
            Paragraph("<b>Hito</b>", styles["Normal"]),
            Paragraph("<b>Detalle</b>", styles["Normal"]),
        ]]

        for it in items:
            hora = it.get("hora", "—")
            titulo = it.get("titulo", "")
            texto = it.get("texto", "")
            etiquetas = it.get("etiquetas") or []
            conflicto = it.get("conflicto") or False

            extra_tags = ""
            if etiquetas:
                # tags como texto breve al final
                extra_tags = "<br/><font color='#6b7280'>Etiquetas: " + ", ".join([str(x) for x in etiquetas]) + "</font>"

            prefix = ""
            if conflicto:
                prefix = "<font color='#b91c1c'><b>CONFLICTO</b></font><br/>"

            detail_html = prefix + str(texto).replace("\n", "<br/>") + extra_tags

            data.append([
                Paragraph(str(hora), styles["Normal"]),
                Paragraph(str(titulo).replace("\n", "<br/>"), styles["Normal"]),
                Paragraph(detail_html, styles["Normal"]),
            ])

        table = Table(data, colWidths=[75, 170, 255])
        table.setStyle(
            TableStyle([
                # Encabezado: texto blanco sobre fondo oscuro (alto contraste)
                ("BACKGROUND", (0, 0), (-1, 0), header_bg),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),

                # Cuerpo: texto negro sobre fondos claros (alto contraste)
                ("TEXTCOLOR", (0, 1), (-1, -1), colors.black),

                ("GRID", (0, 0), (-1, -1), 0.25, grid),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),

                ("FONTSIZE", (0, 0), (-1, -1), 9),

                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [row_alt1, row_alt2]),

                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ])
        )

        story.append(table)

    doc.build(story)
    print("generado:", out)


if __name__ == "__main__":
    main()

