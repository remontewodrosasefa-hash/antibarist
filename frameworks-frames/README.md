# Frameworks frames

Puts a real Frameworks Berlin moulding around any picture. Taken out of the frameworks-framed site (the configurator's frames), with nothing else from that site.

## Use it
1. Copy this whole folder into your project, for example as `frameworks-frames/`
2. In the page:
   ```html
   <link rel="stylesheet" href="frameworks-frames/frames.css">
   <script src="frameworks-frames/frames.js" defer></script>
   ```
3. Add `data-frame` to any picture:
   ```html
   <img src="espresso.jpg" data-frame="oak" data-mount="white" alt="…">
   ```

| attribute | values |
|---|---|
| `data-frame` | `oak` `walnut` `steel` `chipped` `ash` `grey` `black` `white` `gold` `silver` `box` |
| `data-mount` | `white` (default) `cream` `black` `none` |
| `data-k` | moulding width, share of the picture's longer side (default `.06`) |
| `data-mw` | mount width, same unit (default `.1`) |

The frame takes the picture's place and width; the picture keeps its own ratio (never cropped).
Pictures added later (a CMS, a gallery that loads more): call `FrameworksFrames.scan()`.
Change one: `FrameworksFrames.set(img, { frame: 'walnut', mount: 'none' })`.

`strips/` = one strip per side of each moulding, cut from Frameworks' material photos, so the grain runs along every side. Keep `frames.css` and `strips/` side by side (the css links to `strips/…`).

Try it: run `npx serve .` in this folder and open `demo.html`.
