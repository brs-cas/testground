# UGC Image Classifier

A single-file browser tool that uses the Anthropic Claude Vision API to classify user-generated content images for furniture ecommerce.

![Screenshot](screenshot.png)

## What It Does

For each image, the AI evaluates three things:

| Check | Output | Description |
|-------|--------|-------------|
| **Furniture detected?** | Yes / No / Maybe | Does the image contain sofas, tables, chairs, beds, shelving, lighting, rugs, or home accessories? |
| **Quality score** | 1–5 stars | Is the image good enough for an ecommerce product page? (lighting, composition, resolution, product visibility) |
| **Spam flag** | Yes / No | Is this a mood board, collage, screenshot, meme, or otherwise not a real customer photo? |

Results are bucketed into a recommended action:

- **Approve** — Furniture = Yes AND Quality >= 3 AND Spam = No
- **Reject** — Furniture = No OR Spam = Yes
- **Review** — Everything else (human decides)

## Setup

1. Open `index.html` in your browser. No install, no server, no dependencies.
2. Paste your Anthropic API key in the top bar ([get one here](https://console.anthropic.com/)).
3. Upload images (drag & drop or browse) or paste image URLs (one per line).
4. Export results as CSV when done.

## API Cost

Each image = one API call to Claude Sonnet 4. Typical cost: ~$0.01–0.03 per image.

Your API key stays in your browser's session storage and is only sent to the Anthropic API.

## License

MIT
