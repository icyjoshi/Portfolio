---
# ============================================================
# HOW TO ADD A PROJECT
#
# 1. Copy this file.
# 2. Rename it. The filename becomes the URL:
#      my-project.md  ->  /work/my-project
#    Use lowercase-with-hyphens. No spaces.
# 3. Fill in the fields below, then write the story underneath.
# 4. Save, commit, push. The site rebuilds itself.
#
# Files starting with an underscore (like this one) are ignored,
# so this template never appears on the live site.
# ============================================================

title: Project name
subtitle: One line. What it was, in plain English.

# type — pick ONE. This is the honesty label and it is not optional.
#   professional  paid / client / employed work
#   independent   you started it yourself, nobody commissioned it
#   speculative   a brand you do NOT work with. Never imply otherwise.
#   experiment    a small personal test
type: independent

# status — where it lives on the site
#   published  finished. Appears in Work with a full case study.
#   building   appears under "Currently in the lab" on the homepage
#   planned    appears under "Currently in the lab" as queued
# Moving a project from the lab to Work = change this one word.
status: building

org: Company name # delete this line for independent/spec work
role: What you actually did
industry: e.g. SaaS, Education, Fashion
businessModel: B2B # B2B | B2C | D2C | B2B2C | NA
capabilities:
  - Brand strategy
  - Content

date: 2026-08-01 # YYYY-MM-DD. Sorts the project. Use the end date.
period: Jun 2026 – Jul 2026 # optional, what humans read

featured: false # true = eligible for the homepage
order: 100 # lower numbers appear first
accent: pink # pink | yellow | cyan | lime | ink

summary: >
  Two or three sentences for the project card and the search preview.
  Say what the problem was and what you did about it.

# ---- RESULTS ----
# metrics = things that ACTUALLY happened. Real work only.
# Never put a number here you cannot stand behind.
metrics:
  - value: '400%'
    label: weekly active user growth
    context: Cogent Infotech, 2025

# measurement = what you WOULD measure. Speculative work only.
# Use this instead of metrics when the work was never shipped.
measurement:
  - What you would track and why it would tell you something

# ---- THE 30-SECOND VERSION ----
tldr:
  problem: One sentence.
  approach: One sentence.
  impact: One sentence. For spec work, say "intended outcome".

# ---- IMAGES ----
# Put files in public/images/work/ then reference them as
# /images/work/filename.jpg — the site adds the base path for you.
thumbnail: /images/work/example.jpg
heroImage: /images/work/example-hero.jpg
heroImageAlt: Describe the image for someone who cannot see it.

gallery:
  - src: /images/work/example-1.jpg
    alt: Required. Describe what is in the image.
    caption: Optional caption shown underneath.

links:
  - label: Live site
    href: https://example.com

draft: true # true = stays in the repo, stays off the site
---

<!--
Write the case study below using these nine sections.

The rule: OBSERVE -> INTERPRET -> RECOMMEND -> CREATE.
Not RESEARCH -> SWOT -> SUMMARISE.

The question a reader should be able to answer at the end is
"what did Ayushi think about this problem?" — so skip the company
history and the competitor descriptions unless they genuinely lead
somewhere.

Delete any section that has nothing real to say. A short honest case
study beats a long padded one.
-->

## 01 — The brief

What was the problem? What were you actually asked to do?

## 02 — The context

Audience, market, situation. Only the parts that matter to the decision.

## 03 — The observation

What did you notice? Be specific and slightly odd. This is the section
that makes the case study yours rather than anyone's.

## 04 — The insight

What does that observation actually mean? An observation becomes an
insight when you can say "…which means…" after it.

## 05 — The strategy

What did you decide, and why that instead of the obvious option?

## 06 — The work

Show the actual output. Images, copy, screenshots, campaign assets.

## 07 — The result

Real work: what happened, with numbers.
Speculative work: do NOT invent results — fill in `measurement` above
instead and this section becomes "What I would measure".

## 08 — What I learned

What changed in how you think? Be honest, including about the bits
that did not work.
