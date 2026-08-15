# Images

Put your image files in here. Suggested structure:

```
public/images/
  work/          screenshots, campaign creatives, case-study images
  about/         photos of you
```

## How to reference them

In a Markdown file's frontmatter, write the path **starting from `/images/`**:

```yaml
thumbnail: /images/work/jagroots-launch.jpg
heroImage: /images/work/jagroots-hero.jpg
heroImageAlt: A phone showing the app's launch screen.

gallery:
  - src: /images/work/reel-1.jpg
    alt: Frame from the launch reel showing the opening hook.
    caption: The first three seconds had to work without sound.
```

Do **not** write `public/images/...` — leave `public` off. The site adds the
correct prefix for you, including when it is deployed to a subfolder on
GitHub Pages.

## Practical notes

- **Always write real alt text.** It is not optional, and "image" is not alt text.
- **Resize before uploading.** Nothing here needs to be wider than 1600px.
  A 4MB photo straight off a phone will make the page slow.
- **JPG** for photographs, **PNG** for screenshots with text in them,
  **WebP** if you know how to make one.
- If a project has no image yet, just leave the fields out. The site draws a
  typographic panel in the project's accent colour instead — that is a
  designed fallback, not a broken state, so an image-less project still looks
  finished.
