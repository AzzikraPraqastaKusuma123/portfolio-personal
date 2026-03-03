import re

file_path = r'c:\Users\azzik\Documents\New Project 2026\portfolio-personal\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Ekstrak konten sertifikat track:
match = re.search(r'(<div class="cert-carousel__track" id="certTrack">)(.*?)(</div><!-- end track -->)', html_content, re.DOTALL)
if not match:
    print("certTrack region not found!")
    exit(1)

start_tag = match.group(1)
track_inner = match.group(2)
end_tag = match.group(3)

# Pisahkan tiap block card. Setiap loop berawal dari <!-- Card (ataupun <!-- ) sampai </div>\n                            </div>.
# Karena ada indentasi yang persis, saya belah pakai regex.
# Kita asumsikan setiap card dimulai dengan <!-- Card dan diakhiri dengan </div> \n </div>.
cards = re.findall(r'(<!-- Card.*?</div>\n                            </div>)', track_inner, re.DOTALL)

print("Found original cards:", len(cards))

new_card = """<!-- Card 27: Network Systems Admin -->
                            <div class="cert-card">
                                <div class="cert-card__preview">
                                    <canvas class="cert-canvas"
                                        data-pdf="assets/sertifikat/Network and Systems Administrator Technical Training.pdf"></canvas>
                                    <div class="cert-card__loading"><i class='bx bx-loader-alt bx-spin'></i></div>
                                    <div class="cert-card__overlay">
                                        <a href="assets/sertifikat/Network and Systems Administrator Technical Training.pdf" target="_blank"
                                            class="cert-action-btn cert-action-btn--view">
                                            <i class='bx bx-show'></i> <span data-i18n="cert_view">Lihat</span>
                                        </a>
                                        <a href="assets/sertifikat/Network and Systems Administrator Technical Training.pdf" download
                                            class="cert-action-btn cert-action-btn--download">
                                            <i class='bx bx-download'></i> <span data-i18n="cert_download">Unduh</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="cert-card__info">
                                    <span class="cert-card__issuer"><i class='bx bx-book-reader'></i> Udemy</span>
                                    <h4 class="cert-card__name">Network and Systems Administrator Technical Training</h4>
                                    <span class="cert-card__year">2024</span>
                                </div>
                            </div>"""
cards.append(new_card)
print("Total cards to sort:", len(cards))

def get_issuer(card_text):
    m = re.search(r'<span class="cert-card__issuer">.*?</i>(.*?)</span>', card_text, re.DOTALL)
    if m:
        return m.group(1).strip().lower()
    return ""

def get_title(card_text):
    m = re.search(r'<h4 class="cert-card__name">(.*?)</h4>', card_text, re.DOTALL)
    if m:
        return m.group(1).strip().lower()
    return ""

# Urutkan berdasarkan issuer (instansi/perusahaan) alfabetis.
cards.sort(key=lambda c: (get_issuer(c), get_title(c)))

# Renumber the comments nicely
for i in range(len(cards)):
    # ubah <!-- Card X: Deskripsi --> jadi <!-- Card {i+1}: Deskripsi -->
    cards[i] = re.sub(r'<!-- Card \d+:', f'<!-- Card {i+1}:', cards[i], count=1)
    # in case tidak ada titik dua
    cards[i] = re.sub(r'<!-- Card \d+ —', f'<!-- Card {i+1} —', cards[i], count=1)

# Gabung kembali seluruh card
new_inner = "\n\n                            " + "\n\n                            ".join(cards) + "\n\n                        "

new_full = html_content[:match.start()] + start_tag + new_inner + end_tag + html_content[match.end():]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_full)
print("Done saving reordered HTML!")
