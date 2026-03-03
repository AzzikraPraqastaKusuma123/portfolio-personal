import fitz, os, sys

out = []

# Check Ethical Hacker badge
path1 = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\assets\sertifikat\Ethical_Hacker_Badge20240203-29-cbvz8m.pdf'
doc = fitz.open(path1)
out.append("=== ETHICAL HACKER BADGE ===")
out.append(f"METADATA: {doc.metadata}")
out.append(f"Pages: {doc.page_count}")
for i, page in enumerate(doc):
    txt = page.get_text("text")
    out.append(f"Page {i+1} text: {repr(txt)}")
    d = page.get_text("dict")
    for block in d["blocks"]:
        if "lines" in block:
            for line in block["lines"]:
                for span in line["spans"]:
                    s = span["text"].strip()
                    if s:
                        sz = span["size"]
                        out.append(f"  size={sz:.1f} | '{s}'")
doc.close()

# Check 1742056395768.pdf
path2 = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\assets\sertifikat\1742056395768.pdf'
doc2 = fitz.open(path2)
out.append("\n=== 1742056395768.pdf ===")
out.append(f"METADATA: {doc2.metadata}")
out.append(f"Pages: {doc2.page_count}")
for i, page in enumerate(doc2):
    txt = page.get_text("text").strip()
    out.append(f"Page {i+1} text: {repr(txt)}")
    imgs = page.get_images()
    out.append(f"  Images on page: {len(imgs)}")
    if imgs:
        out.append(f"  Image list: {imgs}")
doc2.close()

result_path = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\pdf_result2.txt'
with open(result_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))

print("Done:", result_path)
