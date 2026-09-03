from pypdf import PdfReader

r = PdfReader(r'c:\Users\joaco\OneDrive\Documents\Programación\Sumario\files\Planos Alpha Crux.pdf')
for i, p in enumerate(r.pages):
    txt = p.extract_text()
    print(f'--- PAGE {i+1} ---')
    print(txt[:3000] if txt else '(no text)')
    print()
