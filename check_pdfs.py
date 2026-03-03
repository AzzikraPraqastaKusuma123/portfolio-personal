import fitz, os

# Check Ethical Hacker badge
path1 = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\assets\sertifikat\Ethical_Hacker_Badge20240203-29-cbvz8m.pdf'
doc = fitz.open(path1)
print("=== ETHICAL HACKER BADGE ===")
print("METADATA:", doc.metadata)
print("Pages:", doc.page_count)
for i, page in enumerate(doc):
    print(f"Page {i+1} text:")
    txt = page.get_text("text")
    print(txt)
    d = page.get_text("dict")
    for block in d["blocks"]:
        if "lines" in block:
            for line in block["lines"]:
                for span in line["spans"]:
                    s = span["text"].strip()
                    if s:
                        sz = span["size"]
                        print(f"  size={sz:.1f} | '{s}'")
doc.close()

# Check 1742056395768.pdf - image-based?
path2 = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\assets\sertifikat\1742056395768.pdf'
doc2 = fitz.open(path2)
print("\n=== 1742056395768.pdf ===")
print("METADATA:", doc2.metadata)
print("Pages:", doc2.page_count)
for i, page in enumerate(doc2):
    txt = page.get_text("text").strip()
    print(f"Page {i+1} text: '{txt}'")
    imgs = page.get_images()
    print(f"  Images on page: {len(imgs)}")
doc2.close()
