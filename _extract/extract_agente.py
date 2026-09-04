import zipfile, xml.etree.ElementTree as ET, os

path = r'c:\Users\joaco\OneDrive\Documents\Programación\Sumario\files\ACTA DE INFORMACION SUMARIA - Agente Maritimo.docx'
with zipfile.ZipFile(path) as z:
    xml_data = z.read('word/document.xml')
root = ET.fromstring(xml_data)
# Better paragraph-aware extraction
ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
paras = []
for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
    texts = [t.text for t in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if t.text]
    if texts:
        paras.append(''.join(texts))
print('\n'.join(paras))
