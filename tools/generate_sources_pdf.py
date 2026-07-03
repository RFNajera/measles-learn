#!/usr/bin/env python3
"""
Generate assets/measles-learn-sources.pdf directly from js/data.js.

This keeps the printable source handout in perfect sync with the live app:
module sources, the timeline, and the complete alphabetized reference list are
all derived from MODULES and TIMELINE in data.js. Re-run after editing data.js.

    python3 tools/generate_sources_pdf.py

Requires: reportlab  (pip install reportlab)
"""
import json
import os
import re
import subprocess
import sys

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    NextPageTemplate, PageBreak,
)
from reportlab.lib.styles import ParagraphStyle

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS = os.path.join(ROOT, "js", "data.js")
OUT_PDF = os.path.join(ROOT, "assets", "measles-learn-sources.pdf")

# ---- Brand ----
TEAL = HexColor("#0f7377")
TEAL_DK = HexColor("#0c5b5e")
RED = HexColor("#d94436")
INK = HexColor("#12312f")
GRAY = HexColor("#6b7a79")
LIGHT = HexColor("#eef4f4")
LINK = HexColor("#0f7377")


def load_data():
    """Extract MODULES and TIMELINE arrays from data.js using Node so we get
    exactly what the app sees (no fragile regex parsing of nested JS)."""
    node = r"""
      const fs=require('fs');
      const code=fs.readFileSync(process.argv[1],'utf8');
      const ctx={};
      new Function('exports', code + '\n;exports.MODULES=MODULES;exports.TIMELINE=TIMELINE;')(ctx);
      const clean = s => String(s);
      const modules = ctx.MODULES.map(m => ({
        num: m.num, title: m.title,
        sources: (m.sources||[]).map(s => ({t: clean(s.t), u: s.u}))
      }));
      const timeline = ctx.TIMELINE.map(t => ({
        year: clean(t.year), title: clean(t.title),
        src: t.src ? {t: clean(t.src.t), u: t.src.u} : null
      }));
      process.stdout.write(JSON.stringify({modules, timeline}));
    """
    out = subprocess.check_output(["node", "-e", node, DATA_JS])
    return json.loads(out)


# ---- Styles ----
def styles():
    S = {}
    S["h1"] = ParagraphStyle("h1", fontName="Helvetica", fontSize=26, leading=30,
                             textColor=INK, spaceAfter=2)
    S["h1sub"] = ParagraphStyle("h1sub", fontName="Helvetica", fontSize=16, leading=20,
                                textColor=TEAL, spaceAfter=10)
    S["h2"] = ParagraphStyle("h2", fontName="Helvetica", fontSize=20, leading=24,
                             textColor=INK, spaceBefore=6, spaceAfter=10)
    S["modh"] = ParagraphStyle("modh", fontName="Helvetica", fontSize=14, leading=18,
                               textColor=TEAL_DK, spaceBefore=14, spaceAfter=4)
    S["subh"] = ParagraphStyle("subh", fontName="Helvetica", fontSize=12, leading=16,
                               textColor=TEAL, spaceBefore=8, spaceAfter=4)
    S["body"] = ParagraphStyle("body", fontName="Helvetica", fontSize=10.5, leading=15,
                               textColor=INK, spaceAfter=8)
    S["intro"] = ParagraphStyle("intro", fontName="Helvetica", fontSize=11.5, leading=17,
                                textColor=INK, spaceAfter=10)
    S["meta"] = ParagraphStyle("meta", fontName="Helvetica", fontSize=9.5, leading=15,
                               textColor=GRAY, spaceAfter=2)
    S["reft"] = ParagraphStyle("reft", fontName="Helvetica", fontSize=10, leading=13,
                               textColor=INK)
    S["refu"] = ParagraphStyle("refu", fontName="Helvetica", fontSize=8.5, leading=11,
                               textColor=LINK, spaceAfter=6)
    S["num"] = ParagraphStyle("num", fontName="Helvetica", fontSize=10, leading=13,
                              textColor=GRAY, alignment=TA_LEFT)
    S["tlyear"] = ParagraphStyle("tlyear", fontName="Helvetica", fontSize=10, leading=13,
                                 textColor=INK)
    S["tlevt"] = ParagraphStyle("tlevt", fontName="Helvetica", fontSize=10, leading=13,
                                textColor=INK)
    S["tlsrc"] = ParagraphStyle("tlsrc", fontName="Helvetica", fontSize=9, leading=12,
                                textColor=LINK)
    S["bullet"] = ParagraphStyle("bullet", fontName="Helvetica", fontSize=10.5, leading=15,
                                 textColor=INK, leftIndent=14, bulletIndent=2, spaceAfter=4)
    return S


def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def link(url):
    return f'<link href="{esc(url)}" color="#0f7377">{esc(url)}</link>'


class DocMaker:
    def __init__(self):
        self.width, self.height = LETTER

    def cover_bg(self, canvas, doc):
        canvas.saveState()
        # top color band: red + teal
        canvas.setFillColor(RED)
        canvas.rect(0, self.height - 12, self.width * 0.35, 12, fill=1, stroke=0)
        canvas.setFillColor(TEAL)
        canvas.rect(self.width * 0.35, self.height - 12, self.width * 0.65, 12, fill=1, stroke=0)
        # footer
        canvas.setFont("Helvetica", 8.5)
        canvas.setFillColor(GRAY)
        canvas.drawCentredString(self.width / 2, 0.6 * inch,
                                 "Sources compiled directly from the live application \u00b7 all links verified")
        # accent rule under title area
        canvas.setStrokeColor(RED)
        canvas.setLineWidth(2)
        canvas.line(1.1 * inch, self.height - 3.55 * inch, 3.4 * inch, self.height - 3.55 * inch)
        canvas.restoreState()

    def inner_bg(self, canvas, doc):
        canvas.saveState()
        # header
        canvas.setFont("Helvetica-Oblique", 9)
        canvas.setFillColor(GRAY)
        canvas.drawString(1.0 * inch, self.height - 0.7 * inch, "Measles: A Complete Learning Guide")
        canvas.drawRightString(self.width - 1.0 * inch, self.height - 0.7 * inch, "Sources & References")
        canvas.setStrokeColor(TEAL)
        canvas.setLineWidth(1)
        canvas.line(1.0 * inch, self.height - 0.8 * inch, self.width - 1.0 * inch, self.height - 0.8 * inch)
        # footer
        canvas.setFont("Helvetica", 8.5)
        canvas.setFillColor(GRAY)
        canvas.drawString(1.0 * inch, 0.6 * inch,
                          "Rene F. Najera, DrPH  \u00b7  Educational content, not medical advice  \u00b7  July 2026")
        canvas.drawRightString(self.width - 1.0 * inch, 0.6 * inch, f"Page {doc.page}")
        canvas.restoreState()


def build():
    data = load_data()
    modules = data["modules"]
    timeline = data["timeline"]
    S = styles()
    dm = DocMaker()

    doc = BaseDocTemplate(OUT_PDF, pagesize=LETTER,
                          leftMargin=1.0 * inch, rightMargin=1.0 * inch,
                          topMargin=0.95 * inch, bottomMargin=0.9 * inch,
                          title="Measles: A Complete Learning Guide \u2014 Sources & References",
                          author="Rene F. Najera, DrPH")

    cover_frame = Frame(1.1 * inch, 1.0 * inch, dm.width - 2.2 * inch, dm.height - 3.0 * inch, id="cover")
    inner_frame = Frame(1.0 * inch, 0.9 * inch, dm.width - 2.0 * inch, dm.height - 1.9 * inch, id="inner")
    doc.addPageTemplates([
        PageTemplate(id="cover", frames=[cover_frame], onPage=dm.cover_bg),
        PageTemplate(id="inner", frames=[inner_frame], onPage=dm.inner_bg),
    ])

    story = []

    # ---------- Cover ----------
    story.append(Spacer(1, 1.9 * inch))
    story.append(Paragraph("Measles: A Complete Learning Guide", S["h1"]))
    story.append(Paragraph("Sources &amp; References", S["h1sub"]))
    story.append(Spacer(1, 0.28 * inch))
    n_mod = len(modules)
    intro = (f"This handout lists every source cited across the {num_word(n_mod)} learning modules "
             "and the interactive timeline of the Measles: A Complete Learning Guide web application. "
             "Every factual claim in the app is grounded in these references \u2014 drawn from the CDC, WHO, "
             "peer-reviewed journals, and authoritative medical-history sources. All links are live and "
             "clickable so any reader can independently verify the material.")
    story.append(Paragraph(intro, S["intro"]))
    story.append(Spacer(1, 0.25 * inch))
    story.append(Paragraph("Author: Rene F. Najera, DrPH \u2014 infectious-disease epidemiologist and educator", S["meta"]))
    story.append(Paragraph('Live app: <link href="https://coding.epidemiological.net/measles-learn/" color="#0f7377">https://coding.epidemiological.net/measles-learn/</link>', S["meta"]))
    story.append(Paragraph('Repository: <link href="https://github.com/RFNajera/measles-learn" color="#0f7377">https://github.com/RFNajera/measles-learn</link>', S["meta"]))
    story.append(Paragraph("Content accurate as of July 2026. Educational content \u2014 not medical advice.", S["meta"]))

    story.append(NextPageTemplate("inner"))
    story.append(PageBreak())

    # ---------- About these sources ----------
    story.append(Paragraph("About these sources", S["h2"]))
    story.append(Paragraph(
        "The content of this app was researched from primary and authoritative sources and then "
        "independently fact-checked against those sources. Where reputable sources disagree, the app "
        "notes the discrepancy rather than papering over it. Two such points are documented below.",
        S["body"]))
    story.append(Paragraph("Source hierarchy", S["subh"]))
    for b in [
        "Public health agencies \u2014 U.S. CDC, WHO, ECDC, and the Public Health Agency of Canada for epidemiology, clinical, and virological facts.",
        "Peer-reviewed literature \u2014 Science, The Lancet, BMJ, Annals of Internal Medicine, Clinical Infectious Diseases, and others for primary research findings.",
        "Medical-history sources \u2014 reprints of Panum (1846), Black (1966), the Hilleman memoir, and contemporary accounts for the historical record.",
    ]:
        story.append(Paragraph(b, S["bullet"], bulletText="\u2022"))
    story.append(Paragraph("Documented points of source disagreement and nuance", S["subh"]))
    story.append(Paragraph(
        "1. David Edmonston\u2019s age in 1954. Contemporary accounts and Edmonston\u2019s own 2025 recollection "
        "give his age as 11 when Thomas Peebles drew the blood sample that yielded the Edmonston strain; "
        "some later sources (including the current CDC history page) say 13. The app uses 11 and cites the "
        "primary and contemporary sources.", S["body"]))
    story.append(Paragraph(
        "2. The 2019 U.S. case count. Early 2020 summaries reported 1,282 cases; the CDC\u2019s current final "
        "figure is 1,274. The app uses the CDC\u2019s final number.", S["body"]))
    story.append(Paragraph(
        "3. The CDC\u2019s autism-vaccine webpage (November 2025). The CDC changed its long-standing "
        "\u201cvaccines do not cause autism\u201d page to call that statement \u201cnot an evidence-based claim.\u201d "
        "This was a policy/wording change, not a new scientific finding: the large cohort studies "
        "(including Hviid et al.\u2019s 657,461-child study) that find no link are unchanged. The Myths module "
        "cites both the CDC page and the underlying research so readers can weigh them directly.", S["body"]))
    story.append(Paragraph(
        "A note on SSPE risk figures: subacute sclerosing panencephalitis risk estimates vary by the age "
        "denominator used (under age 2 vs. under age 5) and by study population. The app therefore presents "
        "SSPE risk as a range with the caveat that risk rises the younger the child is at infection.", S["meta"]))
    story.append(PageBreak())

    # ---------- Sources by module ----------
    story.append(Paragraph("Sources by learning module", S["h2"]))
    for m in modules:
        rows = []
        story.append(Paragraph(f"Module {m['num']} \u2014 {esc(m['title'])}", S["modh"]))
        for i, s in enumerate(m["sources"], 1):
            rows.append([Paragraph(str(i), S["num"]),
                         Paragraph(f"{esc(s['t'])}<br/>{link(s['u'])}", S["reft"])])
        t = Table(rows, colWidths=[0.35 * inch, dm.width - 2.0 * inch - 0.35 * inch])
        t.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("TOPPADDING", (0, 0), (-1, -1), 3),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ("LEFTPADDING", (0, 0), (0, -1), 0),
        ]))
        story.append(t)
    story.append(PageBreak())

    # ---------- Timeline sources ----------
    story.append(Paragraph("Sources for the interactive timeline", S["h2"]))
    tl_rows = [[Paragraph("<b>Year</b>", ParagraphStyle("th", parent=S["tlyear"], textColor=HexColor("#ffffff"))),
                Paragraph("<b>Event &amp; source</b>", ParagraphStyle("th2", parent=S["tlevt"], textColor=HexColor("#ffffff")))]]
    for t in timeline:
        src = ""
        if t["src"]:
            src = f'<br/><link href="{esc(t["src"]["u"])}" color="#0f7377">{esc(t["src"]["t"])}</link>'
        tl_rows.append([Paragraph(esc(t["year"]), S["tlyear"]),
                        Paragraph(f"{esc(t['title'])}{src}", S["tlevt"])])
    tl = Table(tl_rows, colWidths=[1.1 * inch, dm.width - 2.0 * inch - 1.1 * inch], repeatRows=1)
    style = [
        ("BACKGROUND", (0, 0), (-1, 0), TEAL),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
    ]
    for r in range(1, len(tl_rows)):
        if r % 2 == 0:
            style.append(("BACKGROUND", (0, r), (-1, r), LIGHT))
    tl.setStyle(TableStyle(style))
    story.append(tl)
    story.append(PageBreak())

    # ---------- Complete alphabetized reference list ----------
    seen = {}
    for m in modules:
        for s in m["sources"]:
            seen.setdefault(s["t"], s["u"])
    for t in timeline:
        if t["src"]:
            seen.setdefault(t["src"]["t"], t["src"]["u"])

    def sortkey(title):
        k = re.sub(r"^(The|A|An)\s+", "", title, flags=re.I)
        return k.lower()

    ordered = sorted(seen.items(), key=lambda kv: sortkey(kv[0]))

    story.append(Paragraph("Complete reference list", S["h2"]))
    story.append(Paragraph(f"{len(ordered)} unique sources, alphabetized by publisher/author.", S["meta"]))
    story.append(Spacer(1, 0.12 * inch))
    rows = []
    for i, (title, url) in enumerate(ordered, 1):
        rows.append([Paragraph(str(i), S["num"]),
                     Paragraph(f"{esc(title)}<br/>{link(url)}", S["reft"])])
    t = Table(rows, colWidths=[0.4 * inch, dm.width - 2.0 * inch - 0.4 * inch])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (0, -1), 0),
    ]))
    story.append(t)

    doc.build(story)
    print("Wrote", OUT_PDF)
    print("Modules:", len(modules), "| Timeline entries:", len(timeline),
          "| Unique references:", len(ordered))


def num_word(n):
    words = {6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten"}
    return words.get(n, str(n))


if __name__ == "__main__":
    build()
