// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  To swap a photo: drop the new file into /public/media/<folder>/
//  and change its path below (or overwrite the file with the same name).
//  To edit text: change the strings below. Nothing else needs touching.
// ─────────────────────────────────────────────────────────────

export const person = {
  name: 'Tristan Fong',
  email: 'tristanfongwy@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tristan-fong-566092352/',
  // Résumé button: put a PDF in /public (e.g. /public/tristan-fong-resume.pdf) and set
  // the path here, e.g. '/tristan-fong-resume.pdf'. Left empty, the button is hidden.
  resume: '',
  portrait: '/media/me/portrait-duotone.jpg', // pre-graded red duotone for the "About the editor" circle (made from media/me/headshot.jpg)
};

// Kept for the case-study `color` fields; the newspaper design only uses red.
export const colors = { mustard: '#FFC93C', coral: '#FF9F87', mint: '#9EE0C3', sky: '#9CC9FF', lemon: '#FFE45C', tomato: '#FF5A36' };

export const masthead = {
  volume: 'VOL. II',
  right: 'FILMS · AI · PRODUCT DESIGN',
};

// `peek` is the preview shown when you hover a side tab.
export const sections = [
  { id: 'front', label: 'COVER', peek: 'Say hello, and flip through the little newspaper.' },
  { id: 'work', label: 'WORK', peek: "The things I've made, starting with an AI video editor that asks before it cuts." },
  { id: 'about', label: 'ABOUT ME', peek: 'The person behind the work, and a few favourite photos.' },
  { id: 'education', label: 'EDUCATION', peek: "Scrub through where I've been, edit-timeline style." },
  { id: 'screenings', label: 'SCREENINGS', peek: "Films I've made. Grab some popcorn." },
  { id: 'clippings', label: 'CLIPPINGS', peek: 'A few times the papers caught up with us.' },
  { id: 'classifieds', label: 'SAY HI', peek: 'Come say hi. My inbox is always open.' },
];

// ── Front page ───────────────────────────────────────────────
export const lead = {
  kicker: 'Lead story · Product & venture',
  headline: 'An AI Video Editor That Asks Before It Cuts',
  dek: 'Tristan Fong co-founded DAIdalus to take the busywork out of editing, not the decisions. The startup won S$6,000 in seed funding and the Best Shark Award.',
  byline: 'DAIdalus · co-founder · 2025 → now',
  href: '/work/daidalus/',
  image: { src: '/media/daidalus/zaobao-feature.jpg', alt: 'Tristan and his co-founder sitting outdoors with a laptop showing the DAIdalus editor' },
  credit: 'Photo: Lianhe Zaobao',
};

// ── Cover (the first thing visitors see) ─────────────────────
export const cover = {
  kicker: 'The portfolio of',
  headline: "Hi, I'm Tristan. I make films, build AI tools and design things people use.",
  intro: "I'm in my second year at SUTD, and I like telling stories with a camera and building tools that make creative work less painful. These days that means DAIdalus, the AI video editor I co-founded, and my internship at Big 3 Media. Off the clock you'll find me playing guitar, at a concert, or losing a game of chess.",
  roles: ['Filmmaker & editor', 'AI product builder', 'Design student'],
};

// The mini newspaper on the cover. Each page links to a section of the site.
// image: the photo on the facing (left) page when this page is open.
export const flipbook = [
  { id: 'work', title: 'WORK', line: "The things I've made: films, an AI video editor, a printed chapel and a wearable.", image: '/media/daidalus/sutd-booth.jpg' },
  { id: 'about', title: 'ABOUT ME', line: 'The person behind the work: guitars, travels and a few favourite photos.', image: '/media/me/abang.jpg' },
  { id: 'education', title: 'EDUCATION', line: "Where I've learnt, from school to SUTD, laid out on an edit timeline.", image: '/media/me/tmjc.jpg' },
  { id: 'screenings', title: 'SCREENINGS', line: "Films I've directed, shot and edited. Grab some popcorn.", image: '/media/army/night-shoot.jpg' },
  { id: 'clippings', title: 'CLIPPINGS', line: 'A few times the papers caught up with us.', image: '/media/daidalus/best-shark-trophy.jpg' },
  { id: 'classifieds', title: 'SAY HI', line: 'Got a project, an idea or a good song recommendation? Come say hi.', image: '/media/me/closeup.jpg' },
];

export const editorBox = {
  bio: 'Year 2 at SUTD, Engineering Systems & Design with Human-Centred Domain Intelligence. AI Production Intern at Big 3 Media. Former Army media team lead.',
};

export const frontStat = { value: '40–60%', label: 'estimated cut in total editing time during the DAIdalus pilot' };

export const nowScreening = { title: 'NSF of the Year 2024', meta: 'SAF · DIRECTED & EDITED', href: 'https://youtu.be/H6GT9TiR6VM' };

// The three main stories under the lead.
export const stories = [
  {
    kicker: 'Film & media',
    headline: 'Filmed the Chief of Army in 2024. Demoed to Him as Acting Minister in 2026.',
    dek: 'Two years leading a 10+ person Army media team, on films for senior SAF leadership.',
    byline: 'Army media team · 2023 → 2025',
    href: '/work/army-media/',
    image: { src: '/media/army/nsfoty-title.jpg', alt: 'NSF of the Year title card', fit: 'contain' },
  },
  {
    kicker: 'Space & design',
    headline: 'A House of Prayer, Modelled in Rhino and Printed in Teal',
    dek: 'Chapel, villa and an underground adoration room. My part: CAD, Python for Grasshopper, print tests.',
    byline: 'Domus Orationis · 2026',
    href: '/work/domus-orationis/',
    image: { src: '/media/domus/model-studio.jpg', alt: 'Teal 3D-printed chapel model with trees and figures on a grass site, shot on white', position: '50% 0%' },
  },
  {
    kicker: 'Product & AI',
    headline: 'Walkie-Talkie: Your Friendly Voice for a Safe Journey',
    dek: "A wearable navigation buddy that compares Street View with what's around you. I designed the enclosure.",
    byline: 'Walkie-Talkie · 2026',
    href: '/work/walkie-talkie/',
    image: { src: '/media/walkie/context.jpg', alt: 'Render of a walker using the device in a park' },
  },
];

// "In brief" column
export const briefs = [
  { kicker: 'Space & design', headline: 'My Room, Drawn, Animated and Modelled', href: '/work/ticking-away/', image: { src: '/media/room/isometric.jpg', alt: "Isometric render of Tristan's room" } },
  { kicker: 'Architecture', headline: 'Renders and Models for DP Architects', href: '/work/dp-architects/', image: { src: '/media/dp/rohini-japanese-park.jpg', alt: 'Massing render of the Rohini hub' } },
  { kicker: 'Engineering', headline: 'We Made a Wukong Car', href: '/work/1d-car/', image: { src: '/media/car/car.jpg', alt: '3D-printed car with pipe-cleaner horns' } },
];

// ── About me ─────────────────────────────────────────────────
export const about = {
  portrait: { src: '/media/me/portrait.jpg', alt: 'Tristan Fong seated by a train-carriage window under a green lamp', caption: 'Tristan Fong' },
  headline: 'Why I Build Tools for Editors',
  paragraphs: [
    'My interest in creative AI started in the Army, leading a 10+ person media team through late nights in the edit suite. I kept wondering how AI could take away the boring parts of editing without taking away the creative decisions. That question became <strong>DAIdalus</strong>, the startup I co-founded.',
    'At SUTD I study Engineering Systems & Design, with a second major in Human-Centred Domain Intelligence. It suits how I like to work: figure out the system, then design for the person using it.',
    'Off the clock I play guitar (overpriced wood: metal, sob-rock, indie and blues), and my all-time hero is a certain blue robot cat with a magical pocket.',
  ],
  facts: [
    { k: 'Studying', v: 'SUTD · ESD × HCDI · Year 2' },
    { k: 'Based in', v: 'Singapore' },
    { k: 'Speaks', v: 'English · Mandarin · Cantonese' },
    { k: 'Tools', v: 'Premiere · After Effects · Runway · Rhino · Grasshopper' },
    { k: 'Off duty', v: 'Guitar: metal, sob-rock, indie, blues' },
  ],
};

// "In pictures": favourite photos of you. Add as many as you like.
// Leave src empty ('') to show a "photo to come" frame.
// position = which part of the photo stays in frame (x% y%), like CSS object-position.
export const gallery = [
  { src: '/media/me/deck-selfie.jpg', alt: 'Selfie of Tristan with friends on an observation deck above a city and river', caption: 'Up top with the boys', position: '45% 70%' },
  { src: '/media/me/concert.jpg', alt: 'Tristan with arms spread wide in a packed stadium before a concert', caption: "Ye live at Gelora Bung Karno, Jakarta", position: '50% 50%' },
  { src: '/media/me/chess.jpg', alt: 'Tristan smiling down at a chessboard at a busy event', caption: 'Over a chessboard', position: '40% 50%' },
  { src: '/media/me/pall-mall.jpg', alt: 'Tristan gesturing at the 67 Pall Mall sign', caption: 'At 67 Pall Mall', position: '72% 50%' },
];

// ── Education timeline ───────────────────────────────────────
// Dates are [year, month]. end: null = still ongoing (runs to today).
// track: 'V1' school · 'V2' work · 'V3' venture
// image (optional): shown on the preview screen while the playhead is on that clip.
export const timeline = {
  start: 2017,
  end: 2030,
  clips: [
    { track: 'V1', title: "Holy Innocents' High School", sub: 'Secondary school', start: [2017, 1], end: [2020, 12] },
    { track: 'V1', title: 'Tampines Meridian Junior College', sub: 'Junior college', start: [2021, 1], end: [2022, 12], image: '/media/me/tmjc.jpg' },
    { track: 'V1', title: 'Singapore University of Technology and Design', sub: 'B.Eng. Engineering Systems & Design · HCDI double major', start: [2025, 9], end: [2029, 5], image: '/media/daidalus/zaobao-feature.jpg' },
    { track: 'V2', title: 'DP Architects', sub: 'Architectural trainee', start: [2023, 1], end: [2023, 3], image: '/media/dp/rohini-japanese-park.jpg' },
    { track: 'V2', title: 'National Service · Singapore Army', sub: 'Section commander, media team lead', start: [2023, 8], end: [2025, 8], image: '/media/army/team-with-mg-david-neo.jpg' },
    { track: 'V2', title: 'Big 3 Media', sub: 'AI production intern', start: [2026, 10], end: null },
    { track: 'V3', title: 'DAIdalus', sub: 'Co-founder, product & business', start: [2025, 10], end: null },
  ],
  // [year, month, day]
  markers: [
    { date: [2026, 4, 17], label: '17 Apr 2026 · Featured in The Straits Times & Lianhe Zaobao' },
    { date: [2026, 5, 22], label: '22 May 2026 · Best Shark Award, DIVE Baby Shark Fund' },
  ],
};

// ── Screenings (films) ───────────────────────────────────────
export const screenings = [
  { year: '2024', still: '/media/army/nsfoty-title.jpg', title: 'NSF of the Year 2024', note: 'Directed, interviewed and edited. Singapore Army.', href: 'https://youtu.be/H6GT9TiR6VM' },
  { year: '2025', still: '/media/army/nsfoty-title.jpg', title: 'NSF of the Year 2025', note: 'Directed and edited. Singapore Army.', href: 'https://youtu.be/eQif92rWFuc' },
  { year: '2024', still: '/media/army/team-with-mg-david-neo.jpg', title: 'ABAC', note: 'Corporate film for the Army.', href: 'https://youtu.be/lswUD9PTW-U' },
  { year: '2024', still: '/media/army/hr-recognition-day-still.jpg', title: 'Army HR Recognition Day', note: 'Filmed and edited solo. Link coming soon.', href: '' }, // add YouTube link when uploaded
  { year: '2026', still: '/media/daidalus/logo-frame.jpg', title: 'DAIdalus · Intro film', note: 'Sixteen seconds, directed for the launch.', href: 'https://youtu.be/E2YSS5LO6ng' },
  { year: '2026', still: '/media/walkie/hero.jpg', title: 'Walkie-Talkie · Showcase', note: 'Shot and edited the product demo.', href: 'https://youtu.be/8X71WDVLtHc' },
];

export const sideQuote = {
  kicker: 'Lost footage',
  text: '"In 2024 I filmed his message as Chief of Army. In 2026 I showed him the editing tool I\'d built."',
  by: 'On meeting David Neo again at InspireCon 2026',
  image: { src: '/media/army/team-with-mg-david-neo.jpg', alt: 'Tristan and teammates with MG David Neo' },
};

export const press = [
  { outlet: 'The Straits Times · 17 Apr 2026', headline: 'SUTD students and alumni to receive $35 million boost for start-up creation', href: 'https://www.straitstimes.com/singapore/parenting-education/sutd-students-and-alumni-to-receive-35-million-boost-for-startup-creation', cta: 'Read the article ↗' },
  { outlet: '联合早报 Lianhe Zaobao · 17 Apr 2026', headline: '新科大投资3500万元 推出创新与创业探索平台', href: 'https://www.zaobao.com.sg/news/singapore/story20260417-8912374', cta: 'Read the article ↗' },
  { outlet: 'SUTD · Apr 2026', headline: 'DIVE launch names DAIdalus among its first Baby Shark ventures', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7450906166693363713/', cta: 'See the post ↗' },
];

export const experience = [
  { when: 'Oct 2026 →', role: 'AI Production Intern', org: 'Big 3 Media' },
  { when: 'Oct 2025 →', role: 'Co-founder, Product & Business', org: 'DAIdalus' },
  { when: 'Aug 2023 → Aug 2025', role: 'Section Commander, Media Team Lead', org: 'Singapore Army (National Service)' },
  { when: 'Jan → Mar 2023', role: 'Architectural Trainee', org: 'DP Architects' },
];

export const classified = {
  title: 'Come say hi',
  heading: 'ALWAYS UP FOR A GOOD CHAT.',
  body: "Whether it's a project, a collaboration, an internship, or you just want to talk films, AI or guitars, my inbox is open. I'll reply in English or Mandarin, and I can get by in Cantonese.",
};

// ─────────────────────────────────────────────────────────────
//  CASE STUDY PAGES  (/work/<slug>/)
//  Block types: text, image, pair, stats, list, callout, video, demo
// ─────────────────────────────────────────────────────────────

export type Block =
  | { type: 'text'; label?: string; heading?: string; body: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string; video?: string; narrow?: boolean; href?: string; colour?: boolean } // colour: true = skip the black-and-white treatment (posters, boards)
  | { type: 'pair'; items: { src: string; alt: string; caption?: string; video?: string }[] }
  | { type: 'stats'; label?: string; heading?: string; note?: string; items: { value: string; label: string }[] }
  | { type: 'list'; label?: string; heading?: string; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'video'; href: string; poster: string; caption: string; title?: string }
  | { type: 'demo' }
  | { type: 'model'; src: string; poster: string; alt: string; caption?: string };

export interface CaseStudy {
  slug: string;
  title: string;          // short name, used in edge tabs and lists
  headline: string;       // the article headline
  oneLiner: string;       // the standfirst under the headline
  byline: string;
  stat?: { value: string; label: string };     // red number in the right column
  quote?: { text: string; by: string };        // pull quote in the right column
  press?: { outlet: string; headline: string; href: string }[];
  color: string;
  meta: string;
  heroImage: string;
  heroAlt: string;
  heroVideo?: string;
  heroVideoAlt?: string; // describes the hero video (used as its caption)
  heroCutout?: boolean; // transparent-background image: sits on the page with no frame
  heroFit?: 'cover' | 'contain'; // 'contain' shows the whole hero image instead of cropping it
  facts: { k: string; v: string }[];
  blocks: Block[];
  next: string;
}

export const cases: CaseStudy[] = [
  {
    slug: 'daidalus',
    title: 'DAIdalus',
    headline: 'An AI Video Editor That Asks Before It Cuts',
    oneLiner: 'DAIdalus proposes edits on a real timeline. The editor approves, tweaks or reverts every one. It won S$6,000 in seed funding and the Best Shark Award in its first cohort.',
    byline: 'Co-founder, product & business · Oct 2025 → now',
    stat: { value: 'S$6,000', label: 'seed funding from SUTD\'s DIVE Baby Shark Fund, plus the Best Shark Award' },
    quote: { text: '"Let the AI do the legwork, and leave the decisions with the editor."', by: 'The product principle' },
    press: [
      { outlet: 'The Straits Times', headline: 'SUTD students and alumni to receive $35 million boost for start-up creation', href: 'https://www.straitstimes.com/singapore/parenting-education/sutd-students-and-alumni-to-receive-35-million-boost-for-startup-creation' },
      { outlet: 'Lianhe Zaobao', headline: '新科大投资3500万元 推出创新与创业探索平台', href: 'https://www.zaobao.com.sg/news/singapore/story20260417-8912374' },
    ],
    color: colors.mustard,
    meta: 'PRODUCT & VENTURE · AI · 2025 → NOW',
    heroImage: '/media/daidalus/labyrinth.jpg',
    heroAlt: 'Etched labyrinth by the sea at night, with Icarus flying overhead',
    heroVideo: '/media/daidalus/intro-loop.mp4',
    heroVideoAlt: 'The DAIdalus intro animation: a labyrinth by the sea, then the logo',
    facts: [
      { k: 'ROLE', v: 'Co-founder · Product & Business' },
      { k: 'TIMELINE', v: 'Oct 2025 → present' },
      { k: 'TEAM', v: 'Co-founded with Calvin Christofan Ng' }, // CONFIRM team & credits
      { k: 'BUILT WITH', v: 'Remotion (React) · Gemini & Claude · agent backend' },
      { k: 'OUTCOME', v: 'S$6,000 seed · Best Shark Award · LOIs · 3 press features' },
    ],
    blocks: [
      { type: 'video', title: 'Intro film · 0:16', href: 'https://youtu.be/E2YSS5LO6ng', poster: '/media/daidalus/logo-frame.jpg', caption: 'INTRO FILM · 00:16 · DIRECTED BY TRISTAN' },
      { type: 'text', label: '01 — THE PROBLEM', heading: 'Editors know the cut long before the timeline shows it.', body: [
        'In the Army media team I spent a lot of nights in the edit suite. The hard part was rarely the creative idea. It was the hours of mechanical work between having the footage and having a first cut.',
        "The AI tools appearing at the time generated a finished video and handed it back. An editor can't work with that. If the AI makes a choice you disagree with, all you can do is start over.",
        '<strong>So: let the AI do the legwork, and leave the decisions with the editor.</strong>',
      ] },
      { type: 'demo' },
      { type: 'text', label: '03 — WHY "DAIDALUS"', heading: 'Escape the labyrinth.', body: [
        'Daedalus was the inventor who built his way out of the labyrinth. The "AI" inside the name is the point: a tool that helps editors escape the labyrinth of repetitive tasks so they can spend their time on the human side of storytelling.',
      ] },
      { type: 'text', label: '04 — THE PIVOT', heading: 'From a plugin to a platform.', body: [
        'We started inside Adobe Premiere Pro: a chat panel where an editor could type "trim silence" or "add transitions between all clips". Our SWOT analysis kept pointing at one risk, which was depending entirely on someone else\'s platform. So we rebuilt DAIdalus as a standalone web editor on Remotion.',
      ] },
      { type: 'image', src: '/media/daidalus/editor.jpg', alt: 'DAIdalus web editor showing a video preview, a timeline and an AI chat panel', caption: 'THE CURRENT EDITOR · TRANSCRIPT, TIMELINE AND COPILOT IN ONE VIEW' },
      { type: 'stats', label: '05 — THE PILOT', heading: 'Same tasks. By hand, then with DAIdalus.', note: 'Partners: a local production company, Singapore Institute of Technology media students and independent creators. Times estimated by observation across 45–60 minute sessions.', items: [
        { value: '40–60%', label: 'estimated reduction in total editing time' },
        { value: '70–80%', label: 'less manual effort on captions' },
        { value: 'Seconds', label: 'per transition, down from 2–3 minutes by hand' },
      ] },
      { type: 'list', label: '06 — RESULTS', heading: 'Best Shark: Outstanding Execution and Impact.', items: [
        '<strong>S$6,000</strong> seed funding through SUTD\'s DIVE Baby Shark Fund',
        '<strong>Best Shark Award</strong>, DIVE Baby Shark Fund 2026 (Dec 2025 cohort)',
        '<strong>~20 clips → first cut in 10–15 min</strong> in testing',
        '<strong>Letters of intent</strong> and investor interest, secured as a Term 2 team',
        'Featured by <strong>The Straits Times, Lianhe Zaobao and SUTD</strong>',
      ] },
      { type: 'pair', items: [
        { src: '/media/daidalus/best-shark-award.jpg', alt: 'Tristan and his co-founder on stage receiving the Best Shark award', caption: 'On stage · DIVE Baby Shark Fund, Dec 2025 cohort' },
        { src: '/media/daidalus/best-shark-trophy.jpg', alt: 'Tristan pulling a face while holding the Best Shark trophy', caption: 'Me and the trophy' },
      ] },
      { type: 'image', src: '/media/daidalus/zaobao-feature.jpg', alt: 'Tristan (right) and his co-founder with a laptop showing the DAIdalus editor', caption: 'Featured in Lianhe Zaobao, April 2026. Photo: Lianhe Zaobao' },
      { type: 'pair', items: [
        { src: '/media/daidalus/inspirecon-visit-1.jpg', alt: 'Visitors talking with the DAIdalus team at SUTD InspireCon 2026', caption: 'SUTD INSPIRECON 2026' },
        { src: '/media/daidalus/inspirecon-visit-2.jpg', alt: 'A guest at the DAIdalus booth at SUTD InspireCon 2026', caption: 'INSPIRECON · VISITS FROM ACTING MINISTER DAVID NEO AND DR LIM JUI' },
      ] },
      { type: 'callout', text: 'In 2024 I filmed MG David Neo\'s appreciation message as Chief of Army. In 2026 he stopped by our InspireCon booth, and this time I was demoing the editing tool I\'d built.' },
      { type: 'image', src: '/media/daidalus/ntuc-visit.jpg', alt: 'Tristan demoing DAIdalus to visitors at the NTUC exhibition', caption: 'NTUC EXHIBITION · DEMOING TO NTUC SECRETARY-GENERAL NG CHEE MENG', narrow: true },
      { type: 'video', title: 'Baby Shark Fund pitch', href: 'https://youtu.be/wo5ZVaN5v1Y', poster: '/media/daidalus/labyrinth.jpg', caption: 'WATCH THE BABY SHARK FUND PITCH DECK' },
    ],
    next: 'army-media',
  },
  {
    slug: 'army-media',
    title: 'Army Media Team',
    headline: 'Filmed the Chief of Army in 2024. Demoed to Him as Acting Minister in 2026.',
    oneLiner: 'Two years leading a 10+ person Army media team on films for senior SAF leadership, from the first brief to the final cut.',
    byline: 'Section commander, media team lead · Aug 2023 → Aug 2025',
    stat: { value: '6+', label: 'productions for senior SAF leadership' },
    quote: { text: '"Those late nights in the edit suite are why I started DAIdalus."', by: 'Tristan Fong' },
    color: colors.mint,
    meta: 'FILM & MEDIA · 2023 → 2025',
    heroImage: '/media/army/nsfoty-title.jpg',
    heroFit: 'contain',
    heroAlt: 'NSF of the Year title card with six servicemen',
    facts: [
      { k: 'ROLE', v: 'Section Commander (3SG) · Media Team Lead' },
      { k: 'TIMELINE', v: 'Aug 2023 → Aug 2025 (National Service)' },
      { k: 'TEAM', v: '10+' },
      { k: 'TOOLS', v: 'Premiere Pro · After Effects · Adobe Podcast · Runway' },
      { k: 'OUTPUT', v: '6+ productions for senior SAF leadership' },
    ],
    blocks: [
      { type: 'text', label: '01 — THE BRIEF', heading: 'Hard dates, senior audiences.', body: [
        "The team I led produced corporate and recognition videos for the Army's senior leadership. Every production ran on a hard date (a parade, an awards ceremony, a seminar) and went through several rounds of stakeholder review before it could be shown.",
      ] },
      { type: 'video', title: 'NSF of the Year 2024', href: 'https://youtu.be/H6GT9TiR6VM', poster: '/media/army/nsfoty-title.jpg', caption: 'NSF OF THE YEAR 2024 · DIRECTED, INTERVIEWED & EDITED' },
      { type: 'text', label: '02 — NSF OF THE YEAR 2024 & 2025', body: [
        'I directed the production, led the interviews and edited the final film. Senior commanders, including then-Chief of Army MG David Neo, praised the 2024 film.',
      ] },
      { type: 'video', title: 'NSF of the Year 2025', href: 'https://youtu.be/eQif92rWFuc', poster: '/media/army/nsfoty-title.jpg', caption: 'NSF OF THE YEAR 2025' },
      { type: 'text', label: '03 — ARMY HR RECOGNITION DAY 2024', body: [
        "I handled filming, editing and logistics on my own: a 93-second, two-camera piece to camera with the Chief of Army, a subtitled address, a closing montage of HR teams across units and a 3D motion-graphics sting.",
      ] },
      { type: 'pair', items: [
        { src: '/media/army/hr-recognition-day-still.jpg', alt: 'Frame from the Army HR Recognition Day 2024 film', caption: 'HR RECOGNITION DAY 2024 · FILMED & EDITED' },
        { src: '/media/army/team-with-mg-david-neo.jpg', alt: 'Tristan and teammates with MG David Neo', caption: 'WITH MG DAVID NEO' },
      ] },
      { type: 'video', title: 'ABAC', href: 'https://youtu.be/lswUD9PTW-U', poster: '/media/army/team-with-mg-david-neo.jpg', caption: 'ABAC' },
      { type: 'list', label: '04 — HOW I RAN THE TEAM', items: [
        '<strong>Brief to delivery.</strong> Took each production from the first brief and creative concept through shooting, stakeholder review and final delivery, delegating roles across the team.',
        '<strong>Bringing AI into the workflow.</strong> Introduced AI-assisted tools and trained the team on them: Adobe Podcast for audio enhancement, Runway for subject extraction, plus AI subtitling and generated graphics.',
      ] },
      { type: 'list', label: '05 — BEYOND THE CAMERA', items: [
        '<strong>Emcee, MINDEF/SAF HR Seminar 2024</strong>: hosted a seminar for senior Army HR leaders and private-sector HR professionals.',
        '<strong>OCS & BMT graduation parades</strong>: ran security checks, ticketing and guest ushering, and introduced a new ticketing system.',
      ] },
      { type: 'pair', items: [
        { src: '/media/army/hr-seminar-emcee.jpg', alt: 'Tristan emceeing the HR seminar', caption: 'EMCEE · HR SEMINAR 2024' },
        { src: '/media/army/parade-ops-team.jpg', alt: 'Parade operations team in uniform', caption: 'PARADE OPS TEAM' },
      ] },
      { type: 'callout', text: 'Those late nights in the edit suite are why I started DAIdalus.' },
    ],
    next: 'domus-orationis',
  },
  {
    slug: 'domus-orationis',
    title: 'Domus Orationis',
    headline: 'A House of Prayer, Modelled in Rhino and Printed in Teal',
    oneLiner: 'A chapel, a villa and an underground adoration room for a retreat in the highland terraces. A group project for Spatial Design World.',
    byline: 'CAD, Python for Grasshopper, print evaluations · 2026',
    color: colors.coral,
    meta: 'SPACE & DESIGN · GROUP PROJECT · 2026',
    heroImage: '/media/domus/model-cutout.webp',
    heroAlt: 'The 3D-printed teal chapel model on its grass site',
    heroCutout: true,
    facts: [
      { k: 'MY ROLE', v: 'CAD modelling · ideation · Python for Grasshopper · print evaluations' },
      { k: 'TEAM', v: 'Class 3, Group 6: Cassidy Thng Yiheng, Poh Jun Leng, Png Wei Teng, Tristan Fong' },
      { k: 'TOOLS', v: 'Rhino · Grasshopper · Python · 3D printing' },
      { k: 'MODULE', v: 'SUTD Spatial Design World' },
    ],
    blocks: [
      { type: 'text', label: '01 — THE IDEA', heading: 'A retreat in the highland terraces.', body: [
        'Domus Orationis is a contemplative sanctuary set in agricultural terraces: a chapel, a villa for retreatants, and a hidden adoration room carved into the slope below. Sunlit timber lattices open to the landscape above, and the underground room is kept for stillness.',
      ] },
      { type: 'model', src: '/media/domus/domus-model.glb', poster: '/media/domus/domus-model-poster.jpg', alt: 'Interactive 3D model of the chapel, villa and pavilion on their base', caption: 'The printed model in 3D, built from the Rhino files' },
      { type: 'pair', items: [
        { src: '/media/domus/chapel-render.jpg', alt: 'Render of the chapel with a pagoda roof and Gothic body', caption: 'CHAPEL · CONCEPT RENDER' },
        { src: '/media/domus/villa-render.jpg', alt: 'Render of the villa front', caption: 'VILLA · CONCEPT RENDER' },
      ] },
      { type: 'pair', items: [
        { src: '/media/domus/exploded-axo.jpg', alt: 'Exploded axonometric of the chapel showing roof, structure and floors', caption: 'EXPLODED AXONOMETRIC' },
        { src: '/media/domus/floor-plan.jpg', alt: 'Illustrated floor plan of the chapel', caption: 'FLOOR PLAN' },
      ] },
      { type: 'list', label: '02 — WHAT I DID', items: [
        '<strong>CAD modelling</strong> of the chapel and villa in Rhino.',
        '<strong>Python scripting for Grasshopper</strong>, including scripts that split the base into printable plates and added connectors between them.',
        '<strong>Print evaluations</strong>: test prints of the pavilion and base plates to check fit and detail before the final print.',
        '<strong>Ideation</strong> on the form and the sequence from chapel to villa to adoration room.',
      ] },
      { type: 'image', src: '/media/domus/model.jpg', alt: 'Final 3D-printed model with grass, trees and figures', caption: 'THE FINAL PRINTED MODEL' },
      { type: 'image', src: '/media/domus/presentation-board.jpg', alt: 'Domus Orationis presentation board', caption: 'PRESENTATION BOARD · GROUP 6', colour: true },
    ],
    next: 'walkie-talkie',
  },
  {
    slug: 'walkie-talkie',
    title: 'Walkie-Talkie',
    headline: 'Walkie-Talkie',
    oneLiner: 'Your friendly voice for a safe journey: a wearable navigation buddy for older people that sees what you see, and tells you where to go by the landmarks around you.',
    byline: 'CAD enclosure, backend and AI pipeline · 2026',
    color: colors.sky,
    meta: 'PRODUCT & AI · WEARABLE · 2026',
    heroImage: '/media/walkie/context.jpg',
    heroAlt: 'Render of a walker using the device in a park',
    heroVideo: '/media/walkie/spin.mp4',
    heroVideoAlt: 'The Walkie-Talkie enclosure turning under studio light',
    facts: [
      { k: 'MY ROLE', v: 'CAD enclosure design · backend, API and AI pipeline · showcase film' },
      { k: 'TEAM', v: 'Group F "Cavemen", with Alexander B., Soham and Maxwell' },
      { k: 'BUILT WITH', v: 'Raspberry Pi · camera, GPS & Bluetooth modules · Street View API · AI image comparison' },
      { k: 'ENCLOSURE', v: 'Recycled PETG, worn on a lanyard' },
      { k: 'MODULE', v: 'SUTD IDeA' },
    ],
    blocks: [
      { type: 'text', label: '01 — THE PROBLEM', heading: 'Afraid of getting lost.', body: [
        'Older people are often less confident about travelling on their own. When we interviewed elderly residents at Tampines Hub, many said they wanted to get out more but worried about getting confused, struggling with Google Maps, and ending up lost.',
        'What they needed was less a tool with vague instructions and more a <strong>buddy</strong>: something that could see what they see and give precise directions from their point of view.',
      ] },
      { type: 'text', label: '02 — HOW IT WORKS', heading: '"Turn left at the red building."', body: [
        'You enter where you are and where you are going, then press Go. From then on you just walk and listen: the Walkie-Talkie hangs around your neck and speaks directions built around landmarks, so there is no map to keep checking.',
        'Behind the scenes, the Street View API fetches the expected view along the route every 50 metres. The camera on the device captures the real view at the same points, and AI compares the two to score whether you are still on track. The route is also drawn on a map as a fallback.',
      ] },
      { type: 'image', src: '/media/walkie/worn-annotated.jpg', alt: 'The Walkie-Talkie worn on a lanyard, with the camera, CPU, Bluetooth, GPS, power source and outer shell labelled', caption: 'Worn on a lanyard · camera, Raspberry Pi, GPS, Bluetooth and battery inside the shell I designed' },
      { type: 'list', label: '03 — WHAT I DID', items: [
        '<strong>Designed the CAD enclosure</strong> independently, from the first shell tests to the final printed housing: camera and speaker alignment, reinforced fillets, and vents so it would not overheat.',
        '<strong>Backend and AI pipeline</strong>: contributed to the architecture, API integration and image-comparison pipeline through AI-assisted implementation.',
        '<strong>Showcase film</strong>: shot and edited the demo video.',
      ] },
      { type: 'video', title: 'Showcase film', href: 'https://youtu.be/8X71WDVLtHc', poster: '/media/walkie/context.jpg', caption: 'WATCH THE SHOWCASE FILM' },
      { type: 'image', src: '/media/walkie/poster.jpg', alt: 'The Walkie-Talkie project poster: problem statement, rationale, product description, technical breakdown, app interface and backend', caption: 'The final poster · click to open full size', href: '/media/walkie/poster.jpg', colour: true },
    ],
    next: 'daidalus',
  },
  {
    slug: 'ticking-away',
    title: 'Ticking Away',
    headline: 'My Room, Drawn, Animated and Modelled',
    oneLiner: 'For Spatial Design World I modelled my own bedroom, then made a GIF of myself in it to explore how I actually use the space.',
    byline: 'Spatial Design World · 2026',
    color: colors.lemon,
    meta: 'SPACE & DESIGN · 2026',
    heroImage: '/media/room/isometric.jpg',
    heroAlt: "Isometric model of Tristan's bedroom: bed, desk, wardrobe, two guitars on the wall",
    facts: [
      { k: 'MODULE', v: 'SUTD Spatial Design World' },
      { k: 'BRIEF', v: 'Model your own room; animate yourself living in it' },
      { k: 'TOOLS', v: 'Rhino · Make2D · AI-assisted frames' },
      { k: 'OUTPUT', v: 'Plan at 1:10, isometric model, GIF' },
    ],
    blocks: [
      { type: 'text', label: '01 — THE BRIEF', heading: 'A day in one room.', body: [
        'The exercise was to model the room I live in, then generate a GIF of myself moving through it, to see how I really interact with my own space.',
        'Drawn from above, the room becomes a map of habits: the bed under the window, records and a turntable beside it, the desk and monitor along one wall, a guitar on the floor by the tiger rug, the wardrobe by the door.',
      ] },
      { type: 'image', src: '/media/room/plan-animation-poster.jpg', alt: 'Animated plan of the room showing Tristan moving between the bed, desk and door', caption: 'The GIF · moving through a day in the room', video: '/media/room/plan-animation.mp4', narrow: true },
      { type: 'image', src: '/media/room/print-board.jpg', alt: 'Coloured plan of the room at 1:10: Tristan asleep in bed, playing guitar by the desk and walking to the door', caption: 'The final print · plan at 1:10', colour: true },
      { type: 'list', label: '02 — WHAT I DID', items: [
        '<strong>Measured and drew</strong> the room in plan at 1:10.',
        '<strong>Modelled it in Rhino</strong>, furniture included, and rendered the isometric view.',
        '<strong>Animated the plan</strong> frame by frame into a GIF of me sleeping, playing guitar and heading out the door.',
      ] },
      { type: 'image', src: '/media/room/isometric.jpg', alt: "Isometric model of the bedroom with guitars on the wall, desk, chair and open wardrobe", caption: 'Isometric model' },
    ],
    next: 'daidalus',
  },
  {
    slug: 'dp-architects',
    title: 'DP Architects',
    headline: 'Renders and Models for DP Architects',
    oneLiner: 'Three months as an architectural trainee, on proposals in Delhi and Singapore.',
    byline: 'Architectural trainee · Jan → Mar 2023',
    color: colors.coral,
    meta: 'ARCHITECTURAL TRAINEE · JAN → MAR 2023',
    heroImage: '/media/dp/rohini-japanese-park.jpg',
    heroAlt: 'Colourful massing render of the Rohini hub viewed from Japanese Park',
    facts: [
      { k: 'ROLE', v: 'Architectural Trainee' },
      { k: 'WORK', v: 'Conceptual design · digital rendering · model photography · decks' },
      { k: 'TOOLS', v: 'Rhino · AutoCAD' },
    ],
    blocks: [
      { type: 'text', label: '01 — ROHINI SOCIO-CULTURAL HUB, DELHI', body: ['A proposed anchor for sports, social and cultural events in the Rohini District of Delhi. I worked on conceptual design, digital rendering and ideation, and photographed the physical model for the client presentation.'] },
      { type: 'pair', items: [
        { src: '/media/dp/rohini-site-model.jpg', alt: 'Physical site model of the Rohini hub', caption: 'SITE MODEL' },
        { src: '/media/dp/rohini-printed-model.jpg', alt: 'Printed model of the Rohini hub with and without massing', caption: 'PRINTED MODEL' },
      ] },
      { type: 'text', label: '02 — PARRY AVENUE ASSISTED LIVING', body: ['A digital rendering for the Parry Avenue Assisted Living project, commissioned by URA and MOH in September 2022.'] },
      { type: 'pair', items: [
        { src: '/media/dp/parry-avenue-colour.jpg', alt: 'Colour massing render of Parry Avenue', caption: 'MASSING · COLOUR' },
        { src: '/media/dp/parry-avenue-linework.jpg', alt: 'Linework render of Parry Avenue', caption: 'MASSING · LINEWORK' },
      ] },
    ],
    next: 'daidalus',
  },
  {
    slug: '1d-car',
    title: '1D Car Challenge',
    headline: 'We Made a Wukong Car',
    oneLiner: "A spring-powered, gear-driven toy car, modelled in Fusion 360 and 3D printed for SUTD's Physical World module.",
    byline: 'Physical World · 2025',
    color: colors.mint,
    meta: 'ENGINEERING · PHYSICAL WORLD · 2025',
    heroImage: '/media/car/car.jpg',
    heroAlt: 'Black 3D-printed car with red and yellow pipe-cleaner horns',
    heroVideo: '/media/car/run.mp4',
    heroVideoAlt: 'The car on a test run',
    facts: [
      { k: 'BRIEF', v: 'A mechanically powered toy car: carry 200–400 g across a 2.5 m obstacle course in under 10 seconds' },
      { k: 'LIMITS', v: 'Max 25 × 12 cm · no electric or chemical power · every part custom-made · S$50 budget' },
      { k: 'TOOLS', v: 'Fusion 360 · 3D printing' },
      { k: 'MODULE', v: 'SUTD 10.015 Physical World' },
    ],
    blocks: [
      { type: 'text', label: '01 — THE CHALLENGE', heading: 'Ramps, steps and gaps, powered by a spring.', body: [
        'The Physical World brief: design and build a toy car that runs on stored mechanical energy only, then carry at least 200 g of load across a 2.5 m course of 10–15° ramps, steps up to 4 cm, gaps and bouncy patches, from rest, in under 10 seconds.',
        'Every part had to be made by us, so there was no buying a gearbox. We made ours a Wukong car, horns and all.',
      ] },
      { type: 'text', label: '02 — THE GEAR TRAIN', heading: 'Getting the spring\'s energy to the wheels.', body: [
        'The car is driven by a wound spring. A train of gears carries its energy from the spring to the wheels, so the gear sizes decide how much push the car has on a ramp and how fast it can cover the course.',
        'I modelled the gears in Fusion 360 and checked how each pair meshed in plan before anything was printed.',
      ] },
      { type: 'pair', items: [
        { src: '/media/car/gears-iso.jpg', alt: 'Fusion 360 model of the gear train: two large drive gears linked by smaller gears', caption: 'The gear train in Fusion 360' },
        { src: '/media/car/gears-top.jpg', alt: 'Top-down view of the gear train showing how the gears mesh', caption: 'Top-down: checking the mesh' },
      ] },
      { type: 'pair', items: [
        { src: '/media/car/gear-test-fit.jpg', alt: 'Hands holding the first printed gears in a line, with the coiled spring in the middle gear', caption: 'First print, test-fitted around the spring · 18 Nov 2025' },
        { src: '/media/car/gear-a.jpg', alt: 'CAD model of Gear A with its housing and pinion', caption: 'Gear A, ready to print' },
      ] },
      { type: 'text', label: '03 — PRINT, TEST, REPRINT', heading: 'Four rounds of prints.', body: [
        'The first body was a simple open box between four ring wheels. Testing it led to an improved version, and the gears, gear housing, wheel axles and fasteners were reprinted over four rounds (18, 19 and 20 November, then 2 December) as each fit was tightened.',
      ] },
      { type: 'pair', items: [
        { src: '/media/car/body-v1.jpg', alt: 'First CAD model of the car body: an open box between four ring wheels', caption: 'Body, first version' },
        { src: '/media/car/body-v2.jpg', alt: 'Improved CAD model of the car body with spoked wheels', caption: 'Body, improved' },
      ] },
      { type: 'image', src: '/media/car/car.jpg', alt: 'The finished black 3D-printed car with its horns', caption: 'The finished Wukong car', video: '/media/car/run.mp4', narrow: true },
    ],
    next: 'daidalus',
  },
];
