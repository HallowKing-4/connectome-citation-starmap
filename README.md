# Citation Star-Map — Network Neuroscience

Fully static, no-backend 3D citation map of ~200 real papers in network neuroscience and brain connectomics.

## Data integrity

Edges are computed at build time and are never invented.

- Direct citation: corpus paper B appears on corpus paper A's NCBI pubmed_pubmed_citedin list
- Co-citation: papers share at least 8 citing PMIDs
- Keyword co-occurrence: fallback only if the citation graph is sparse

Abstracts and DOIs come from Europe PMC. Completeness is baked into public/completeness.json.

Rebuild: `python3 scripts/build_corpus.py`

## Run

npm install && npm run dev

`npm run build` writes static `dist/` for Kimi Websites (`*.kimi.page` / `*.ok.kimi.link`), Vercel, Netlify, or GitHub Pages.
