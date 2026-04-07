# UGC Image Classifier — Furniture Ecommerce

A browser-based tool that uses the Anthropic Vision API (Claude) to classify furniture product images as **User-Generated Content (UGC)** or **professional photography**. Built for ecommerce teams that need to quickly audit and triage listing images.

![Screenshot](screenshot.png)

## What It Does

Drop in one or more furniture images and the classifier returns:

- **Classification** — UGC, Professional, Mixed, or Unclear
- **Confidence score** (0–100)
- **Furniture type** detected (sofa, table, chair, etc.)
- **Quality scores** for lighting, composition, background, and overall quality
- **Indicators** explaining why the image was classified the way it was
- **Suggestions** for improving UGC photos for better listing quality

## Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/brs-cas/ugc-image-classifier.git
   cd ugc-image-classifier
   ```

2. **Open `index.html`** in your browser — no build step, no dependencies, no server required.

3. **Paste your Anthropic API key** into the key field in the top-right corner. You can get one at [console.anthropic.com](https://console.anthropic.com/).

4. **Drag & drop images** (or click to browse) and results appear in seconds.

## Model Selection

Use the dropdown next to the API key field to choose a model:

| Model | Speed | Cost | Best For |
|-------|-------|------|----------|
| **Sonnet 4** | Moderate | ~$0.01–0.03/image | Accurate classification |
| **Haiku 4.5** | Fast | ~$0.001–0.005/image | Bulk triage |

## API Cost Notice

Each image classification makes **one API call** to Anthropic. Costs depend on the model selected and image size. For a typical furniture photo:

- **Sonnet 4**: ~$0.01–0.03 per image
- **Haiku 4.5**: ~$0.001–0.005 per image

Classifying 100 images with Haiku costs roughly $0.10–0.50. Your API key is stored only in your browser's session storage and is never sent anywhere except directly to the Anthropic API.

## License

MIT
