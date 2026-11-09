# Antibarist website · handoff note

Read this first. It explains the project, what is built, what is fake, and the rules for the design.

## What this is

A website prototype for **Antibarist**, a specialty coffee popup by barista **Hoa**, inside **Frameworks Berlin** (a framing shop in Kreuzberg). Instagram: @antibarist. Telegram group: t.me/antibarist (about 120 members, forum with topics).

The idea (v5): the homepage is **one big wall (black and white interface, colourful coffees) you can move around on in every direction**, like a map (inspired by cyberneticsimagelibrary.dev). The **centre** is Hoa and the back room door. Around it hang the coffees, each in a **real Frameworks frame**, plus labels, the event poster, hours, about and the crate list. Visitors are little line cats walking around the map.

Goal of the site:
1. Sell Hoa's curated specialty coffee (later)
2. Connect his Telegram community to the website (live chat, later for real)
3. Feel like a living space, not a normal shop

This is a **prototype to test the idea**. No real backend yet.

## Files

```
index.html          the whole site (v5, black and white map): HTML, CSS and JS in one file
frameworks-frames/  the frame kit from the Frameworks project (frames.css, frames.js, strips/). do not edit here, copy it over again if it changes there. see its README
index-v15.html      v15: back room as Hoa's photo of the room, kept for reference
index-v13.html      v13: calm spiral, lines hidden, small tiles, kept for reference
index-v14.html      v14: the spiral before the countries got drawn (small labels only), kept for reference
index-v12.html      v12: first interactive spiral (lines always on, messages under Hoa), kept for reference
index-v11.html      v11: first spiral, kept for reference
index-v10.html      v10: coffee district map with all countries as hatched blocks + landing, kept for reference
index-v9.html       v9: first coffee district (few blocks, no landing), kept for reference
index-v8.html       v8: plain grid canvas with rings, kept for reference
index-v7.html       v7: two walls of frames left and right of Hoa, kept for reference
index-room.html     v6: the drawn shop room (rejected: too busy, door too big), kept for reference
index-map.html      v5: the free-scrolling black and white map, kept for reference
index-print.html    v4: the Parasite-poster room drawing in three bays, kept for reference
index-pencil.html   v3: the pencil Midjourney drawing, kept for reference
img/hoa-cut.png     Hoa's real photo, background removed, apron logo and date stamp removed (from source/hoa-photo.png)
img/room.jpg, img/meow.png, img/hoa.png   only used by index-pencil.html
img/<id>-art.jpg    coffee artwork crop, shown inside the frames
img/ig/ig-NN.jpg    Hoa's instagram posts (01 = oldest), shown on the spiral and in the coffee sheets
img/<id>-label.jpg  full coffee label, pinned on the map and shown in the coffee detail sheet
source/             original files from the client (drawings, photos, labels)
```

To run: serve the folder (`npx serve .`) and open index.html. Paths are relative.

## Design rules (important)

The owner (Remon, the designer) was very clear about these:

- **Mobile first.** About 99% of visitors will be on a phone. Always test at 390 x 844 first.
- **Do NOT use the generic "Claude default UI"**: no boxy buttons with hard black offset shadows, no rounded pill chips everywhere, no tilted sticker cards, no tape or highlighter effects. If in doubt, **go minimal**.
- **Two fonts only:**
  - `Amatic SC` (same style as the Antibarist logo) for titles
  - `IBM Plex Mono` for everything else
- **Black and white interface, colour content** (v5). Tokens in `:root`: paper `#ecebe8`, bars `#f7f7f5`, ink `#111`, mute `#6d6d6a`, lines `#cfcecb`. The logo badge and main buttons are black with light text. The coffee art, labels, Hoa's photo and the frame mouldings (oak, walnut, ash, steel...) are in full colour: the colour comes only from the real things.
- **Dark mode**: follows the phone setting, the ◐ button under the + − zoom buttons switches it (remembered per device). Tokens are redefined under `html.dark`. The interface flips, but the back room and the event poster stay black, and the coffees, labels, Hoa and the frames keep their real colour.
- No gradients, no grain/noise textures, no glows. The owner rejected these as "looks AI-made". The only soft shadow is the one the Frameworks frame kit puts on its frames.
- UI style: light bars, 1.5px black lines, small uppercase mono labels, one black button, plain underlined text links. Captions under things look like figure captions ("fig. 03 · colombia · liquid dream.").
- **Less is more.** No floating emoji or chat bubbles.
- Write copy in plain, simple English, lowercase is fine, in Hoa's relaxed voice. No em dashes.

## How it works (v10)

**Voice:** Hoa hates the word "specialty coffee". Never use it. **Nothing that makes him sound like a snob**: no big Hoa quotes, no "what is good coffee?" philosophy, no telling people how they should drink it, no tasting-note one-liners, no "not your typical barista" (removed on request). Good coffee without the fuss, no lectures, short lines, lowercase. Keep copy short (the owner trims long text).

### Landing (`#cover`)
- A plain, readable front page first: ANTIBARIST, Hoa's photo, "coffee, cats and good company", one short paragraph, open/closed + hours + place, **step inside** (opens the map at the back room), people inside right now, ask hoa / telegram links.
- The logo in the top bar brings the landing back. `index.html#inside` skips it (for sharing a link straight into the map).

### The archive spiral (the canvas, v13)
- Inspired by archive posters and network diagrams (HfG spiral, ISIA archive, object catalogues). Plain canvas, small objects, thin lines, mono index labels. **No frames for now** (the Frameworks kit is still linked but unused on the canvas).
- **Centre = now:** the back room (v17, `backRoom()`, a canvas): black square, header "telegram chat / now on the web" (`.brhd`, Amatic + mono), and 9 little white line cats (the visitor cat) walking around in it. Each cat is joined to its two nearest by a thin line, so the network changes as they move. Tap opens the chat. Same in both themes, pauses off screen, still with reduced motion. (v16 pattern-field pixel cat was rejected. `img/backroom.jpg` and meow-meow's eyes are gone, `index-v15.html` still has them.) Under it the live line (red dot = the one accent) and the last 2 messages. Next to it the event poster (`img/event-poster.jpg`, opens what's on). Hoa under the poster; when closed he stays visible with a "not in · back tue 8:00" tag.
- **The spiral** (`SP`: r0 500, one turn = 330px, `PATH`; tiles 180px now / 110px archive, 3x the gap of v13): this week's 12 coffees on the first turn, close around the centre, tiles with catalogue number + name + country (AB-001 granja / colombia). It winds outward back in time. Month markers ("now · nov 2026", "oct 2026", "sep 2026") are tappable.
- **The archive** (`ARCHIVE`): sold-out tiles in grey further out. **DEMO: it reuses this week's pictures** so the full spiral shows how much Hoa rotates. The real list (farm, origin, picture, month) comes from Hoa.
- **Countries** (`COUNTRIES`) on a ring far outside, angle = roughly where they are on the globe. **Lines** go from each coffee straight outward to the `BUS` circle outside the spiral, run along it, then out to the country, so they bundle like a transit map and never cross the centre. Faint by default, full when you tap a coffee or country.
- **Countries with presence (v15)**. The world is now 5000px (centre 2500).
  - **Drawn countries** (`ORIGINS`, `drawOrigin()`): every country Hoa has served (colombia, ethiopia, panama, kenya) is drawn as a small hand-simplified outline, all at the same scale (`MAP_SCALE`). The hatching gets denser the more often it was on the wall (`ALLTIME`, this week + archive). Inside it, **contour lines**, one per farm at its altitude (higher = further in), with the farm as a dot on its line. Under it: big name, the local time ("16:07 there now"), a 12-month harvest strip + "harvest is on now / next harvest from oct", the coffees as grey crops that colour in when the country is tapped, and counts.
  - **Close zoom opens a country**: `.world.near` (zoom >= .95) shows farm names on the map and the farm list (producer, altitude). Tapping a drawn country zooms in to it (`openCountry()`). `.world.far` (< .5) shows only the big names.
  - Country names and roaster names use **IBM Plex Mono, not Amatic SC** (owner: no logo font on the countries). No region lettering (removed on request).
  - **Sample origins (DEMO)**: the 5 coffees with no country on the label got a sample country (`sample:true` in `COFFEES`): la torre > Colombia, sánchez + mazateca > Kenya, melgar + romerillo > Ethiopia. There is no "origin to confirm" node any more. Replace with the real origins from Hoa.
  - **Small countries** (never served) keep the small mono label, now with their local time.
  - **The trip**: a coffee's line goes farm (country dot) > circle line > its **roaster station** (`ROASTERS`, small ring on the circle line, tappable) > its tile > the back room. The coffee popup shows "colombia › SEY › back room". Unconfirmed origins are dashed.
  - **Travelling cats**: about every 30s a cat may walk out to a drawn country, say "hi from panama", and come back (`Cat.travel()`, toast "mila went to panama").
  - **DEMO, confirm with Hoa**: farm altitudes (`ALT`, not on the labels), harvest months (rough public calendars), the city of liquid dream. ("city to confirm"), SEY placed in Brooklyn, New York. The outlines are simplified by hand, not exact borders.
- **Info nodes** (hours, about, telegram, crate) sit in the free space after the end of the spiral (left side). The event is the poster in the centre.
- **Interaction:** everything is tagged (`data-hl`: `id:`, `c:` country, `r:` region, `m:` month). `highlight(token)` lights those up and fades the rest; `restoreHl()` goes back to the region tab or to nothing. Tap/hover a coffee → its line + its earlier appearances in the archive; tap a country → its coffees; tap a month → that month; region tabs use the same.
- **Zoom + theme bar** (`.zbar`, bottom right of the map, phone and desktop): + − (`zoomTo`) and ◐ light/dark. Also pinch and ctrl/cmd + scroll. Never reset the zoom on resize (phones fire resize while scrolling).
- **How to read** key: only via the "?" in the bottom bar (no automatic popup). Each line has a small drawing of the real thing (back room, tile, spiral, country, cat) plus a line on how to move.
- **Cats** walk in the free space between the turns (`streetSpot`), never on the tiles. Only "you" keeps a name tag; the others show it when they talk.
- **Instagram on the spiral** (`POSTS`, `putPost()`, `settlePosts()`): Hoa's posts hang on the spiral on their day, beside the line between the coffees of that month (small 4:5 photo + "ig · 07 nov"). Archive months are grey like the tiles. Tagged `ig|m:<month>|id:<coffee>`, so tapping a coffee or a month also lights up its posts. A post belongs to a coffee when its **caption names it** (short name, farm, or catalogue number like AB-003), see `postCoffees()`. So Hoa only has to name the coffee in his caption. Tap a post: a sheet with the big picture, the caption, "on the wall" links to the coffees, and "see it on instagram".
  - **Coffee sheet**: "seen on the counter · n", a contact-sheet strip of the posts about that coffee.
  - Pictures in `img/ig/` are **real** (19 posts the owner downloaded, resized to 900px). **DEMO: dates and captions are invented**, and so are the coffee links (only posts 11-13 really show SEY boxes). The link goes to the profile, not the post.
  - Real version: Instagram API with Instagram Login (needs Hoa's account as business/creator) fetched by the same small server as the Telegram bridge, or a feed service like Behold. Do **not** use Instagram's embed widget (own look, slow, Meta cookies = consent banner in Germany).
- **Notes on a coffee** (comment section): in the coffee sheet, and "notes · n" in the popup. `NOTE_SEED` = invented demo notes, new ones are saved on the device only (localStorage). Real version: store them on the server next to the back room chat.
- **Dark mode** exists (follows the device, toggle remembered): the back room stays black in both themes.

### Cats = visitors
- Every line cat is meant to be **a real person on the site right now**. The one with the black name tag is "you". Cats walk along the streets, mostly nearby, sometimes across town.
- Each cat has a name. Tap it → popup with "say hi" → opens the chat with `@name`.
- Tap your own cat to set your name.
- Right now the cats are **fake** (random names, they come and go on a timer).

### Ask Hoa
- Hoa asks 4 coffee questions (no milk questions): brew method, taste, how wild (process), body.
- `tags()` turns each coffee's label words ("character") and process into tags. `askResult()` scores the coffees and picks 1 + 2 more.
- SEY labels have no character words, so their tags come from the variety. That is a guess.

## Data: what is real and what is a placeholder

`COFFEES` in index.html. Real info comes from the labels the client sent (12 coffees: 7 from "liquid dream.", 5 from SEY).

**Real:** farm, producer, variety, process, roaster, character words, label images.

**Confirmed origin:** Granja Paraíso 92 (Colombia), Los Nogales (Colombia), all SEY coffees (origin printed on the label).

**Origin NOT confirmed (now shown with a sample country, `sample:true`, see Countries above):** La Torre, Las Flores (Jaime Sánchez), Las Flores (Fernando Melgar), Mazateca, El Romerillo. La Torre is placed on the Colombia wall as a guess.

**Placeholders, must come from Hoa:**
- brew recipe (all show 15g / 250g / 93° / 2:45), prices
- the 4 Ask Hoa questions and the result sentences (drafts)
- chat messages, member names (mila, jonas, ece, ...) are invented, not real group members
- opening hours: Tue to Fri 8-16, Sat 9-17 (from his Instagram, please confirm)
- exact address (Instagram mentions Paul-Lincke-Ufer and Mariannenstraße 26)
- event: Antibarist x Luko, "brew your own cup", Sat 14 Nov 2026, 12-18, The Playce at Studio 5 (from his poster)

## Demo controls

Top right sliders icon: add/remove a visitor, fake a Telegram message, switch open/closed. These are for showing the idea to Hoa. Remove them for the real site.

## Next steps (planned, not built)

1. **Split the code**: move CSS and JS out of index.html, move `COFFEES` / `WALL` / `SPECS` into a JSON file or a CMS so Hoa can update coffees himself.
2. **Real Telegram bridge**:
   - Telegram does not allow embedding a group chat. Use a **bot as admin** in the group.
   - Mirror **only one topic** ("Café Window") to the site, never the whole group (privacy / GDPR). Pin a notice in that topic that it is visible on the website.
   - Website message → bot posts into that topic (`message_thread_id`). Telegram reply → bot pushes it to the site.
   - Needs a small server, for example Cloudflare Workers + Durable Objects, or Supabase realtime.
3. **Real presence cats**: one cat per open browser (websocket / realtime presence). Names come from the chat name.
4. **Shop** (later): Stripe Payment Links or Shopify for checkout. Pickup at Frameworks first. Shipping later.
5. **German legal stuff before selling**: Impressum, Datenschutz, Widerrufsbelehrung, AGB, Gewerbe, LUCID packaging registration, and **Kaffeesteuer** if Hoa imports roasted coffee from roasters outside Germany (for example SEY in Norway). Check with a professional.
6. Maybe a **Telegram Mini App** version of the shop later.

## Known issues / ideas

- Hoa's cutout was made automatically (Apple Vision). A few tiny specks from the original photo remain, and there is a faint edge where the apron logo was removed. A clean cutout from Photoshop / remove.bg would be better.
- Caption names are short versions (`short` in `COFFEES`). Check them with Hoa.
- Cat drawing is based on Hoa's cup doodle (spiky ears, zigzag legs, long thin tail). Could be redrawn from his real doodle as an SVG.
