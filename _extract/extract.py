import zipfile, re, sys, xml.etree.ElementTree as ET

NS = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"

def docx_text(path):
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml")
    root = ET.fromstring(xml)
    out = []
    for p in root.iter(NS + "p"):
        buf = []
        for node in p.iter():
            if node.tag == NS + "t" and node.text:
                buf.append(node.text)
            elif node.tag in (NS + "tab",):
                buf.append("\t")
            elif node.tag == NS + "br":
                buf.append("\n")
        line = "".join(buf).strip()
        line = re.sub(r"-{4,}", " ---", line)
        if line:
            out.append(line)
    return "\n".join(out)

print(docx_text(sys.argv[1]))
