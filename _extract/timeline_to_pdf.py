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

    out = ROOT / "linea_tiempo_alpha_crux.pdf"

    doc = SimpleDocTemplate(
        str(out),
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36,
    )
    styles = getSampleStyleSheet()

    story = []
    story.append(Paragraph("Línea de tiempo — Alpha Crux (hasta la fecha)", styles["Title"]))
    story.append(Spacer(1, 8))
    story.append(
        Paragraph(
            "Puerto de Montevideo — 25 de agosto de 2026 (investigación basada en las actas y documentos incorporados al análisis).",
            styles["Normal"],
        )
    )
    story.append(Spacer(1, 14))

    # Agrupar por fase (tal como viene en assets/data-analisis.js)
    by_phase = {f["id"]: [] for f in fases}
    for it in timeline:
        ph = it.get("fase") or "instruccion"
        if ph not in by_phase:
            by_phase[ph] = []
        by_phase[ph].append(it)

    phase_order = [f["id"] for f in fases]

    for pid in phase_order:
        items = by_phase.get(pid) or []
        if not items:
            continue

        flabel = next((f["label"] for f in fases if f["id"] == pid), pid)
        story.append(Spacer(1, 8))
        story.append(Paragraph(f"Fase: {flabel}", styles["Heading2"]))

        # Tabla: hora + título
        data = [
            [Paragraph("<b>Hora</b>", styles["Normal"]), Paragraph("<b>Hito</b>", styles["Normal"])]
        ]
        for it in items:
            hora = it.get("hora", "—")
            titulo = it.get("titulo", "")
            # reportlab permite <br/> para saltos
            tpar = Paragraph(str(titulo).replace("\n", "<br/>"), styles["Normal"])
            data.append([Paragraph(str(hora), styles["Normal"]), tpar])

        table = Table(data, colWidths=[90, 410])
        table.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1f2937")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                    ("GRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#334155")),
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("FONTNAME", (0, 0), (-1, -1), "Helvetica"),
                    ("FONTSIZE", (0, 0), (-1, -1), 9),
                    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.whitesmoke, colors.lightgrey]),
                    ("LEFTPADDING", (0, 1), (-1, -1), 6),
                    ("RIGHTPADDING", (0, 1), (-1, -1), 6),
                    ("TOPPADDING", (0, 0), (-1, -1), 4),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ]
            )
        )
        story.append(table)
        story.append(Spacer(1, 14))

    doc.build(story)
    print("generado:", out)


if __name__ == "__main__":
    main()

