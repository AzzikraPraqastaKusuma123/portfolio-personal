import fitz

path = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\assets\sertifikat\Network and Systems Administrator Technical Training.pdf'

doc = fitz.open(path)
page = doc[0]
pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
out = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\preview_network.png'
pix.save(out)
doc.close()
print("Saved:", out)

