# PaperTonight

**Your notes. Tomorrow’s paper.**

Photograph a CBSE Class 10 or 12 chapter and sit a 25-mark mini-paper — assertion-reason, short answers, one case study — written from your page.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Live generation

Add a Gemini key to `.env.local`:

```
GEMINI_API_KEY=your_key
```

Without a key the app still works. It serves high-quality fixture papers for Electricity (Class 10) and Bryophytes (Class 12) and a generic grounded paper for other chapters.

## What this is

A clickable prototype of the core loop:

1. Pick class → subject → chapter
2. Photograph / upload / paste notes
3. Sit a 20-minute 25-mark paper (you cannot be kicked out mid-paper)
4. Markscheme with source chips
5. **Not in my notes** kills a question
6. Morning drill of misses, never paywalled

Not a Play Store build. No UPI. No NCERT book text in the repo.
