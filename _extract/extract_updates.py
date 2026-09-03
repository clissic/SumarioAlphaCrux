import zipfile, xml.etree.ElementTree as ET, os, sys

def extract_docx(path):
    with zipfile.ZipFile(path) as z:
        xml_data = z.read('word/document.xml')
    root = ET.fromstring(xml_data)
    return '\n'.join(p.text for p in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if p.text)

base = r'c:\Users\joaco\OneDrive\Documents\Programación\Sumario\files'

for name in ['ACTA DE INFORMACION SUMARIA - Marinero Indonesio MURDIONO.docx',
             'ACTA DE INFORMACION SUMARIA - Marinero Indonesio RAVEL.docx',
             'ACTA DE INFORMACION SUMARIA - Marinero Indonesio AGUS PRIYANTO.docx']:
    print('='*80)
    print(f'FILE: {name}')
    print('='*80)
    txt = extract_docx(os.path.join(base, name))
    print(txt)
    print()
