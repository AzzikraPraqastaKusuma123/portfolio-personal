import sys, re

filepath = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\assets\css\styles.css'
with open(filepath, 'r', encoding='utf-8') as f:
    css = f.read()

# Fix CSS Variables for Border Radius back to their rounded defaults
css = re.sub(r'--radius-sm: [^;]+;', '--radius-sm: 0.375rem;', css)
css = re.sub(r'--radius-md: [^;]+;', '--radius-md: 0.625rem;', css)
css = re.sub(r'--radius-lg: [^;]+;', '--radius-lg: 1rem;', css)
css = re.sub(r'--radius-xl: [^;]+;', '--radius-xl: 1.5rem;', css)
css = re.sub(r'--radius-full: [^;]+;', '--radius-full: 100px;', css) # use 100px instead of 50% for pills to avoid ovals

# Fix shadows back to the original 'glowing' feel the user prefers
css = re.sub(r'--shadow-sm: [^;]+;', '--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);', css)
css = re.sub(r'--shadow-md: [^;]+;', '--shadow-md: 0 8px 30px rgba(0, 0, 0, 0.4);', css)
css = re.sub(r'--shadow-lg: [^;]+;', '--shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.5);', css)
css = re.sub(r'--shadow-glow: [^;]+;', '--shadow-glow: 0 0 30px rgba(115, 80, 255, 0.15);', css)

# Fix button pill shapes
css = re.sub(r'(\.btn\s*\{[^}]*?)border-radius: [^;]+;', r'\1border-radius: var(--radius-full);', css)

# Fix card rounded corners
css = re.sub(r'(\.skill-category-card\s*\{[^}]*?border-radius: )[^;]+;', r'\1var(--radius-xl);', css)
css = re.sub(r'(\.top-card \{[^}]*?)border-radius: [^;]+;', r'\1border-radius: var(--radius-xl);', css)
css = re.sub(r'(\.carousel-card \{[^}]*?)border-radius: [^;]+;', r'\1border-radius: var(--radius-xl);', css)
css = re.sub(r'(\.top-card__img \{[^}]*?)border-radius: [^;]+;', r'\1border-radius: var(--radius-xl);', css)
css = re.sub(r'(\.carousel-card__img\s*\{[^}]*?border-radius: )[^;]+;', r'\1var(--radius-xl) var(--radius-xl) 0 0;', css)

# Fix tags to be pill shape again
css = re.sub(r'(\.top-card__cat \{[^}]*?)border-radius: [^;]+;', r'\1border-radius: var(--radius-full);', css)
css = re.sub(r'(\.top-card__badge \{[^}]*?)border-radius: [^;]+;', r'\1border-radius: var(--radius-full);', css)
css = re.sub(r'(\.hero__tag \{[^}]*?)border-radius: [^;]+;', r'\1border-radius: var(--radius-md);', css) # Hero tags use md radius

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(css)

print('Restored rounded corners and dropshadows fully.')
