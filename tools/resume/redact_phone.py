"""Remove the phone number from the Canva résumé header and shift the email left.
Usage: python3 redact_phone.py in.pdf out.pdf
Canva letter-spaces the header, so text is matched char by char. Positions below
fit the Nov 2026 layout; re-check with page.get_text('words') if the layout changes."""
import sys, pymupdf as f
src, out = sys.argv[1], sys.argv[2]
d = f.open(src); p = d[0]
font = next(x for x in p.get_fonts() if 'Montserrat-Bold' in x[3])
buf = d.extract_font(font[0])[3]
chars = [(c['c'], c['origin'], s['size']) for b in p.get_text('rawdict')['blocks'] for l in b.get('lines', [])
         for s in l['spans'] for c in s['chars'] if 110 < c['bbox'][1] < 130 and c['origin'][0] > 225]
shift = chars[0][1][0] - 122.2
p.add_redact_annot(f.Rect(119.5, 113.5, 433, 126.5), fill=(44/255, 110/255, 180/255))
p.apply_redactions(images=f.PDF_REDACT_IMAGE_NONE, graphics=f.PDF_REDACT_LINE_ART_NONE)
p.insert_font(fontname='MB', fontbuffer=buf)
for ch, (ox, oy), sz in chars:
    if ch.strip(): p.insert_text((ox - shift, oy), ch, fontname='MB', fontsize=sz, color=(1, 1, 1))
d.set_metadata({'title': 'Tristan Fong — Résumé', 'author': 'Tristan Fong'})
d.save(out, garbage=4, deflate=True)
