# UGC Image Classifier — Furniture Ecommerce

A standalone browser tool that uses the Anthropic Vision API to **auto-triage UGC (user-generated content) images** into three buckets:

| Bucket | Meaning | Action |
|--------|---------|--------|
| **Auto-approve** | High-quality furniture photo, good lighting/composition | Goes straight to the website |
| **Needs review** | Borderline — a human should decide | Merchandising team reviews |
| **Auto-reject** | No furniture, blurry, spam/meme, or duplicate | Discarded automatically |

Your merchandising team drops 200-300 daily images in, and only the "Needs review" bucket requires human attention — cutting review time by 60-80%.

![Screenshot](screenshot.png)

## How It Works

1. **Vision Classification** — Each image is sent to Claude (Sonnet 4 or Haiku 4.5) which scores it on quality, lighting, composition, background, detects furniture type, and flags spam/blur.
2. **Duplicate Detection** — Client-side perceptual hashing (dHash) compares every image against the batch. Near-duplicates are auto-rejected without an API call.
3. **Rule-based Bucketing** — Configurable thresholds sort results into the three buckets.

## Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/brs-cas/ugc-image-classifier.git
   cd ugc-image-classifier
   ```

2. **Open `index.html`** in your browser. No install, no build step, no server.

3. **Paste your Anthropic API key** in the top bar. Get one at [console.anthropic.com](https://console.anthropic.com/).

4. **Drag & drop images** and watch them classify in real time.

5. **Export CSV** when done — open it in Excel or Google Sheets for the team.

## Configuration

Use the sidebar to tune thresholds:

- **Auto-approve minimums** — quality, lighting, and composition scores an image must meet to skip human review (defaults: 70/60/60)
- **Auto-reject maximum** — quality score below which images are auto-rejected (default: 30)
- **Duplicate sensitivity** — Hamming distance for perceptual hash matching (default: 10, lower = stricter)
- **Concurrency** — number of parallel API calls (default: 3)

## Model Selection

| Model | Speed | Cost/image | Best for |
|-------|-------|-----------|----------|
| **Sonnet 4** | ~3-5s | ~$0.01-0.03 | Accurate classification |
| **Haiku 4.5** | ~1-2s | ~$0.001-0.005 | High-volume daily triage |

## API Cost Notice

Each image = one API call. For a typical daily batch of 250 images:

- **Haiku 4.5**: ~$0.25-1.25/day
- **Sonnet 4**: ~$2.50-7.50/day

Your API key is stored in browser session storage only and sent directly to the Anthropic API — never to any other server.

## CSV Output Columns

| Column | Description |
|--------|-------------|
| Filename | Original image filename |
| Bucket | `approve`, `review`, or `reject` |
| Furniture Type | Detected furniture category |
| Quality / Lighting / Composition / Background | Scores 0-100 |
| Aesthetic | Overall "website-ready" appeal score |
| Blurry / Spam | Yes/No flags |
| Duplicate Of | Filename of the original if flagged as duplicate |
| Indicators | Brief reasoning from the AI |
| Suggestion | Improvement tip (if applicable) |

## License

MIT
