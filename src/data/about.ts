/* ============================================================
   ABOUT

   The About page is not the résumé. It answers: who is she, how does
   she think, why marketing, what is she interested in, where is she
   heading. Facts stay secondary.

   Edit the strings here — the page layout does not need touching.
   ============================================================ */

export const about = {
  headline: 'I am the person who notices the marketing.',
  standfirst:
    'Unfortunately, I notice it everywhere. The pricing page that buries the actual offer. The ad that is clearly three ideas fighting over one frame. The brand that sounds like every other brand in its category. I have opinions about all of it, and eventually I started writing them down.',

  /* The main narrative. Each block is a section on the page.
     Add, remove or reorder freely. */
  chapters: [
    {
      num: '01',
      title: 'The short version',
      note: 'For people in a hurry',
      body: [
        'I am an MBA Marketing student with about two years of experience across content, social, campaigns, community, research and analytics. That range is deliberate. I did not collect it by accident and I am not planning to trade it in for a narrower title.',
        'What I actually want is to be useful across the whole chain — audience, insight, idea, words, visuals, channel, data, and then the part where you look at the numbers and change your mind about something.',
      ],
    },
    {
      num: '02',
      title: 'How I think',
      note: 'Observe, then interpret',
      body: [
        'Most marketing advice starts at the answer. I would rather start at the observation — something specific and slightly odd that I noticed about an audience, a category or a piece of content — and work forward from there.',
        'An observation is only worth having if you can say what it means. That is the step people skip. "Gen Z prefers video" is an observation. "This audience will watch a 90-second explainer but not read a 400-word page, because they are researching on a phone between classes" is closer to something you can build on.',
        'So the pattern I keep coming back to is: notice something → work out what it means → decide what to do about it → make the thing. It is the structure behind every case study on this site.',
      ],
    },
    {
      num: '03',
      title: 'Why marketing',
      note: 'It started with the numbers',
      body: [
        'I studied BBA with a finance leaning before the MBA, which is a slightly unglamorous origin story for someone who now spends a lot of time arguing about headlines. But it left me comfortable with a spreadsheet, and that turns out to be a genuinely useful thing for a creative person to be comfortable with.',
        'Marketing is one of the few places where you get to be curious about people, opinionated about language, and held accountable by a number, all in the same week. I like all three parts. I did not want to pick.',
      ],
    },
    {
      num: '04',
      title: 'What I am interested in right now',
      note: 'Subject to change, obviously',
      body: [
        'How brands in the same category end up sounding identical, and what the first one to break the pattern actually gains. How much of "performance marketing" is creative work in disguise. Whether a community can be a genuine acquisition channel rather than a nice-to-have.',
        'And books — I read a lot, mostly not about marketing, which is where most of the useful connections come from anyway.',
      ],
    },
    {
      num: '05',
      title: 'Where this is heading',
      note: 'The honest bit',
      body: [
        'I want to sit in a room with a brand team and be able to contribute to most parts of the problem — not just the part my job title covers. Brand side and agency side both interest me, and I would like a foothold on each.',
        'There are things I am still building. Paid media is one of them: I have the certifications and the theory, not the spend. It says so on the services page, and it will keep saying so until that changes.',
      ],
    },
  ],

  /* Small human details. Kept short — this is seasoning, not a course. */
  quickFacts: [
    { k: 'Currently', v: 'MBA Marketing at MIT-WPU, Pune' },
    { k: 'Before that', v: 'BBA at DAVV, Indore' },
    { k: 'Reading', v: 'Usually two books at once, finishing neither on schedule' },
    { k: 'Best ideas', v: 'Arrive at 2 AM. Roughly 30% survive daylight' },
    { k: 'Working on', v: 'Being less precious about first drafts' },
  ],

  /* ------------------------------------------------------------
     HOW I WORK WITH AI
     Stated plainly, with the boundary made explicit. No robots.
     ------------------------------------------------------------ */
  ai: {
    title: 'How I work with AI',
    standfirst:
      'AI is in my toolkit and I am not going to be coy about it. What matters is which parts of the job it touches and which parts it does not.',
    machine: {
      label: 'What I hand to the machine',
      items: [
        'Exploring more angles than I could write out by hand',
        'Accelerating research and first-pass synthesis',
        'Generating variations to react against',
        'Building repeatable content systems',
        'Prototyping and the genuinely repetitive tasks',
      ],
    },
    human: {
      label: 'What stays mine',
      items: [
        'Strategy and the decision about what problem we are solving',
        'Taste — knowing which of the forty options is the good one',
        'Judgement about the audience and the brand',
        'Final creative direction',
        'Being accountable for what goes out',
      ],
    },
    line: 'AI is the multiplier. I am still the marketer.',
    footnote:
      'People made things before generative AI. Nothing is stopping them from putting some colour in their carousels now.',
  },
} as const;
