import fitz, os

# Render 1742056395768.pdf page as image
path2 = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\assets\sertifikat\1742056395768.pdf'
doc2 = fitz.open(path2)
page = doc2[0]
mat = fitz.Matrix(2, 2)  # 2x resolution
pix = page.get_pixmap(matrix=mat)
out2 = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\preview_1742.png'
pix.save(out2)
doc2.close()
print("Saved:", out2)

# Render Ethical Hacker badge as image
path1 = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\assets\sertifikat\Ethical_Hacker_Badge20240203-29-cbvz8m.pdf'
doc1 = fitz.open(path1)
page1 = doc1[0]
pix1 = page1.get_pixmap(matrix=fitz.Matrix(2, 2))
out1 = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\preview_ethical.png'
pix1.save(out1)
doc1.close()
print("Saved:", out1)
