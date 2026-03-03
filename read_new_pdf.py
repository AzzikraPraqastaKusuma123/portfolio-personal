import fitz, os

path = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\assets\sertifikat\Network and Systems Administrator Technical Training.pdf'

try:
    doc = fitz.open(path)
    print("=== Network and Systems Administrator Technical Training ===")
    print("METADATA:", doc.metadata)
    print("Pages:", doc.page_count)
    for i, page in enumerate(doc):
        print(f"\nPage {i+1} text:")
        print(page.get_text("text").strip())
    doc.close()
except Exception as e:
    print("ERROR:", e)
