# Birthday Love — Vite + React

A mobile-first romantic birthday website built with React, Vite and functional components.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Personalize

Open `src/main.jsx` and edit the `person` object:

```js
const person = {
  name: 'Aarohi',
  nickname: 'my favorite person',
  year: 'another beautiful year',
}
```

You can also replace the text in the `memories` and `wishes` arrays.

### Adding real photos

The gallery currently uses tasteful gradient placeholders. To use local images, add them to `src/assets/` and import them in `main.jsx`, then use them as the `backgroundImage` or `<img>` source inside the `.photo-card` elements.

No backend or database is required.
