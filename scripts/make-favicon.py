#!/usr/bin/env python3
"""Regenerate src/app/favicon.ico from the active brand mark.

The marks here mirror the SVG paths in src/app/components/logo.tsx. When you
change ACTIVE_MARK there, change MARK below to match and re-run:

    python3 scripts/make-favicon.py
"""
from PIL import Image, ImageDraw

MARK = "compass"  # compass | horizonRing | monogram | openHorizon | sextant

GOLD = (200, 169, 96, 255)
NAVY = (11, 15, 25, 255)
OUT = "src/app/favicon.ico"
SIZES = [16, 32, 48, 64, 128, 256]


def draw(d, u, name):
    """Draw `name` into ImageDraw `d`; `u` scales the 0..32 viewBox to pixels."""
    X = lambda v: v * u
    w = lambda v: max(1, round(X(v)))

    if name == "compass":
        d.ellipse([X(2.5), X(2.5), X(29.5), X(29.5)], outline=(200, 169, 96, 128), width=w(1.2))
        d.polygon(
            [(X(16), X(2.5)), (X(18.4), X(13.6)), (X(29.5), X(16)), (X(18.4), X(18.4)),
             (X(16), X(29.5)), (X(13.6), X(18.4)), (X(2.5), X(16)), (X(13.6), X(13.6))],
            fill=GOLD,
        )
        # no centre hub: at 16px it closes up and reads as a wheel

    elif name == "horizonRing":
        d.ellipse([X(2), X(2), X(30), X(30)], outline=(200, 169, 96, 140), width=w(1.4))
        d.pieslice([X(9), X(13), X(23), X(27)], start=180, end=360, fill=GOLD)
        d.line([X(3), X(20), X(29), X(20)], fill=GOLD, width=w(1.6))
        for x1, y1, x2, y2 in [(16, 4.5, 16, 7.5), (25.5, 8.5, 23.4, 10.6), (6.5, 8.5, 8.6, 10.6)]:
            d.line([X(x1), X(y1), X(x2), X(y2)], fill=GOLD, width=w(1.3))

    elif name == "monogram":
        d.ellipse([X(2.5), X(2.5), X(29.5), X(29.5)], outline=GOLD, width=w(1.7))
        d.line([X(11), X(9.5), X(11), X(22.5)], fill=GOLD, width=w(1.9))
        d.line([X(21), X(9.5), X(21), X(22.5)], fill=GOLD, width=w(1.9))
        d.line([X(11), X(16), X(21), X(16)], fill=GOLD, width=w(1.9))

    elif name == "openHorizon":
        d.line([X(1.5), X(20.5), X(30.5), X(20.5)], fill=GOLD, width=w(1.8))
        d.pieslice([X(9.5), X(13.7), X(22.5), X(26.7)], start=180, end=360, fill=GOLD)
        d.polygon(
            [(X(16), X(3)), (X(17.3), X(7.2)), (X(21.5), X(8.5)), (X(17.3), X(9.8)),
             (X(16), X(14)), (X(14.7), X(9.8)), (X(10.5), X(8.5)), (X(14.7), X(7.2))],
            fill=GOLD,
        )

    elif name == "sextant":
        d.arc([X(0), X(10), X(32), X(42)], start=180, end=360, fill=(200, 169, 96, 140), width=w(1.5))
        d.line([X(4), X(26), X(28), X(26)], fill=GOLD, width=w(1.6))
        d.ellipse([X(11.4), X(9.9), X(20.6), X(19.1)], fill=GOLD)
        d.line([X(16), X(26), X(16), X(19.1)], fill=GOLD, width=w(1.4))

    else:
        raise SystemExit(f"unknown mark: {name}")


def render(px):
    S = px * 4  # supersample then downscale for clean edges
    im = Image.new("RGBA", (S, S), NAVY)
    draw(ImageDraw.Draw(im), S / 32.0, MARK)
    return im.resize((px, px), Image.LANCZOS)


if __name__ == "__main__":
    base = render(256)
    base.save(OUT, format="ICO", sizes=[(s, s) for s in SIZES])
    print(f"wrote {OUT} from mark '{MARK}' at {SIZES}")
