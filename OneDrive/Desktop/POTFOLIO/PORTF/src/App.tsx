import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
//  TAARIFA ZAKO — badilisha hapa tu
// ═══════════════════════════════════════════════════════════════════════════════

const ME = {
  name: "Adroph Audiphance Andrea",
  role: { en: "Computer Engineering", sw: "Uhandisi wa Kompyuta" },
  location: "Mbeya, Tanzania",
  bio: {
    en: "Computer Engineering student passionate about building practical digital tools for African entrepreneurs. I design and develop platforms that help small businesses manage sales, stock, debts and growth — turning complex operations into simple, clear systems.",
    sw: "Mwanafunzi wa Uhandisi wa Kompyuta anayependa kujenga zana za kidijitali zinazosaidia wajasiriamali wa Afrika. Ninabuni na kuendeleza majukwaa yanayosaidia biashara ndogo kudhibiti mauzo, stoki, madeni na ukuaji — kugeuza shughuli ngumu kuwa mifumo rahisi na wazi.",
  },
  avatar: "/profile.png",
  email: "adroph2605@gmail.com",
  phone: "0774082430",
  phoneLink: "+255774082430",
  github: "https://github.com/adroph2605-del",
  linkedin: "https://www.linkedin.com/in/adroph-audiphance-andrea",
};

const PROJECTS = [
  {
    id: 1,
    title: "WAJASILIAMALI",
    type: { en: "Website", sw: "Tovuti" },
    description: {
      en: "WAJASILIAMALI is a digital business management platform designed to help small and medium-sized entrepreneurs manage sales, stock, debts, expenses, receipts and business performance in one place — so they can make better decisions and grow their businesses.",
      sw: "WAJASILIAMALI ni jukwaa la kidijitali la kusimamia biashara lililoundwa kusaidia wajasiriamali wadogo na wa kati kudhibiti mauzo, stoki, madeni, gharama, risiti na utendaji wa biashara sehemu moja — ili wafanye maamuzi bora na kukuza biashara zao.",
    },
    tags: ["React", "FastAPI", "Alchemy"],
    year: "2026",
    img: "/wajasiliali.png",
    color: "#1DB954",
    duration: { en: "3 weeks", sw: "Wiki 3" },
  },
  {
    id: 2,
    title: "Zentrust",
    type: { en: "Mobile App", sw: "Programu ya Simu" },
    description: {
      en: "Zentrust is a global B2B data exchange platform that securely connects businesses with financial institutions (banks, credit unions, and insurers) to share normalized financial data with user consent.",
      sw: "Zentrust ni jukwaa la kimataifa la kubadilishana data kati ya biashara (B2B) linalounganisha kwa usalama biashara na taasisi za fedha (benki, vyama vya mikopo, na bima) ili kushiriki data za kifedha zilizoratibiwa kwa idhini ya mtumiaji.",
    },
    tags: ["React Native", "Expo", "TypeScript"],
    year: "2023",
    img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=600&fit=crop&auto=format",
    color: "#E91E8C",
    duration: { en: "5 months", sw: "Miezi 5" },
  },
];

const SKILLS = [
  { name: "React", category: "Frontend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Python", category: "Languages" },
  { name: "HTML / CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "AutoCAD (ICT Design)", category: "Design" },
  { name: "Figma", category: "Design" },
];

const EXPERIENCE = [
  {
    id: 1,
    company: "Freelance",
    role: { en: "Software Developer", sw: "Msanidi Programu" },
    period: { en: "Present", sw: "Sasa" },
    desc: {
      en: "Building web and business tools for clients, including WAJASILIAMALI.",
      sw: "Kujenga zana za wavuti na biashara kwa wateja, ikiwa ni pamoja na WAJASILIAMALI.",
    },
    logo: "F",
    color: "#1DB954",
  },
  {
    id: 2,
    company: "AI and Signal Processing Hub",
    role: { en: "Club Member", sw: "Mwanachama wa Klabu" },
    period: { en: "Present", sw: "Sasa" },
    desc: {
      en: "Active member focusing on AI, signal processing and practical engineering projects.",
      sw: "Mwanachama anayeshiriki kikamilifu katika AI, usindikaji wa ishara na miradi ya uhandisi.",
    },
    logo: "A",
    color: "#1DA1F2",
  },
];

const T = {
  en: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    hireMe: "Hire Me",
    callMe: "Call Me",
    verified: "Verified Developer",
    featured: "Featured Projects",
    projectsShipped: "Projects shipped",
    yearsExp: "Years experience",
    technologies: "Technologies",
    focus: "Focus",
    focusValue: "SME Tools",
    projectsTitle: "Projects",
    projectsSub: "Things I've built and shipped.",
    all: "All",
    skillsTitle: "Skills",
    skillsSub: "Technologies I work with.",
    byCategory: "By Category",
    experienceTitle: "Experience",
    experienceSub: "Where I've been building.",
    education: "Education",
    degree: "BSc. Computer Engineering and Technology",
    university: "Mbeya University of Science and Technology",
    contactTitle: "Get in Touch",
    contactSub: "Open to freelance, full-time roles, and interesting collaborations.",
    name: "Name",
    email: "Email",
    message: "Message",
    namePh: "Your name",
    emailPh: "you@example.com",
    messagePh: "What are you working on?",
    send: "Send Message",
    sending: "Sending…",
    sentOk: "Message sent successfully!",
    sentFail: "Failed to send. Please email me directly.",
    sendAnother: "Send another",
    phone: "Phone",
    location: "Location",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  sw: {
    home: "Nyumbani",
    projects: "Miradi",
    skills: "Ujuzi",
    experience: "Uzoefu",
    contact: "Mawasiliano",
    hireMe: "Niajiri",
    callMe: "Nipigie",
    verified: "Msanidi Aliyethibitishwa",
    featured: "Miradi Maarufu",
    projectsShipped: "Miradi iliyokamilika",
    yearsExp: "Miaka ya uzoefu",
    technologies: "Teknolojia",
    focus: "Lengo",
    focusValue: "Zana za SME",
    projectsTitle: "Miradi",
    projectsSub: "Mambo niliyojenga na kukamilisha.",
    all: "Zote",
    skillsTitle: "Ujuzi",
    skillsSub: "Teknolojia ninazotumia.",
    byCategory: "Kwa Kategoria",
    experienceTitle: "Uzoefu",
    experienceSub: "Mahali nilipokuwa nikijenga.",
    education: "Elimu",
    degree: "Shahada ya Uhandisi wa Kompyuta na Teknolojia",
    university: "Chuo Kikuu cha Sayansi na Teknolojia Mbeya",
    contactTitle: "Wasiliana Nami",
    contactSub: "Niko tayari kwa kazi za freelance, full-time, na ushirikiano wa kuvutia.",
    name: "Jina",
    email: "Barua pepe",
    message: "Ujumbe",
    namePh: "Jina lako",
    emailPh: "wewe@mfano.com",
    messagePh: "Unafanya kazi gani?",
    send: "Tuma Ujumbe",
    sending: "Inatuma…",
    sentOk: "Ujumbe umetumwa!",
    sentFail: "Imeshindikana. Tafadhali nitumie barua pepe moja kwa moja.",
    sendAnother: "Tuma mwingine",
    phone: "Simu",
    location: "Mahali",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

type Lang = "en" | "sw";

function HomeIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-current ${active ? "text-white" : "text-[#A7A7A7]"}`}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}
function GridIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-current ${active ? "text-white" : "text-[#A7A7A7]"}`}>
      <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" />
    </svg>
  );
}
function BarIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-current ${active ? "text-white" : "text-[#A7A7A7]"}`}>
      <path d="M5 9.2h3V19H5zm5.6-4.8H14V19h-3.4zm5.6 8H20V19h-3.8z" />
    </svg>
  );
}
function BriefIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-current ${active ? "text-white" : "text-[#A7A7A7]"}`}>
      <path d="M20 6h-2.18c.07-.44.18-.88.18-1.36C18 3.19 16.81 2 15.36 2H8.64C7.19 2 6 3.19 6 4.64c0 .48.11.92.18 1.36H4C2.9 6 2 6.9 2 8v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7 13H4V8h16v11h-7zm-4.36-13C8.6 5.82 8.5 5.24 8.5 4.64c0-.08.06-.14.14-.14h6.72c.08 0 .14.06.14.14 0 .6-.1 1.18-.14 1.36H8.64z" />
    </svg>
  );
}
function MailIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-current ${active ? "text-white" : "text-[#A7A7A7]"}`}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
function AdroPh() {
  return (
    <svg viewBox="0 0 120 36" className="w-24 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="17" fill="#1DB954" />
      <circle cx="18" cy="18" r="12" fill="none" stroke="#000" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="8" fill="none" stroke="#000" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="18" cy="18" r="3" fill="#000" />
      <text x="18" y="23" textAnchor="middle" fill="#000" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="900" letterSpacing="-1">a</text>
      <text x="42" y="24" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="800" letterSpacing="-0.5">droph</text>
      <circle cx="112" cy="10" r="3" fill="#1DB954" />
    </svg>
  );
}
function AdroPh_Small() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#1DB954" />
      <text x="18" y="23.5" textAnchor="middle" fill="#000" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="900">a</text>
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.2 2.19z" />
    </svg>
  );
}

function HomeSection({ lang, t }: { lang: Lang; t: (typeof T)["en"] }) {
  return (
    <div className="pb-16">
      <div
        className="relative h-72 flex items-end px-8 pb-6 rounded-t-lg overflow-hidden mb-6"
        style={{ background: "linear-gradient(180deg, #2a6b3f 0%, #1a472a 60%, #121212 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${ME.avatar})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            filter: "blur(40px)",
          }}
        />
        <div className="relative flex items-end gap-6">
          <img src={ME.avatar} alt={ME.name} className="w-36 h-36 rounded-full object-cover shadow-2xl border-4 border-[#121212]" />
          <div className="pb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1DB954] mb-1 flex items-center gap-2">
              <AdroPh_Small /><span>{t.verified}</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-black mb-2">{ME.name}</h1>
            <p className="text-[#A7A7A7] text-sm">{ME.role[lang]} · {ME.location}</p>
          </div>
        </div>
      </div>

      <div className="px-8 flex items-center gap-4 mb-10 flex-wrap">
        <a href={`mailto:${ME.email}`} className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-sm px-8 py-3 rounded-full transition-colors">{t.hireMe}</a>
        <a href={`tel:${ME.phoneLink}`} className="border border-[#535353] hover:border-white text-white font-bold text-sm px-8 py-3 rounded-full transition-colors">{t.callMe}</a>
        <div className="ml-auto flex items-center gap-4 text-[#A7A7A7]">
          <a href={ME.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub"><GithubIcon /></a>
          <a href={ME.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn"><LinkedInIcon /></a>
          <a href={`mailto:${ME.email}`} className="hover:text-white transition-colors" title="Email"><MailIcon active /></a>
          <a href={`tel:${ME.phoneLink}`} className="hover:text-white transition-colors" title="Phone"><PhoneIcon /></a>
        </div>
      </div>

      <div className="px-8 mb-10">
        <p className="text-[#B3B3B3] text-base leading-relaxed max-w-2xl">{ME.bio[lang]}</p>
      </div>

      <div className="px-8 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: t.projectsShipped, value: "2+" },
          { label: t.yearsExp, value: "2+" },
          { label: t.technologies, value: "7+" },
          { label: t.focus, value: t.focusValue },
        ].map((s) => (
          <div key={s.label} className="bg-[#181818] hover:bg-[#242424] rounded-lg p-5 transition-colors">
            <p className="text-3xl font-black text-[#1DB954]">{s.value}</p>
            <p className="text-sm text-[#A7A7A7] mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="px-8">
        <h2 className="text-2xl font-bold mb-4">{t.featured}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project: p, lang }: { project: (typeof PROJECTS)[0]; lang: Lang }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#181818] hover:bg-[#242424] rounded-lg p-4 transition-colors cursor-pointer group"
    >
      <div className="relative mb-4">
        <img src={p.img} alt={p.title} className="w-full aspect-square object-contain bg-[#121212] rounded-md p-4" />
        {hovered && (
          <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
            <span className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: p.color }}>
              <ExternalIcon />
            </span>
          </div>
        )}
      </div>
      <p className="font-bold text-sm mb-1 truncate">{p.title}</p>
      <p className="text-xs text-[#A7A7A7] line-clamp-3 mb-2">{p.description[lang]}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {p.tags.map((tag) => (
          <span key={tag} className="text-[10px] bg-[#282828] text-[#B3B3B3] px-2 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3 text-xs text-[#535353]">
        <span>{p.type[lang]}</span>
        <span>{p.year} · {p.duration[lang]}</span>
      </div>
    </div>
  );
}

function ProjectsSection({ lang, t }: { lang: Lang; t: (typeof T)["en"] }) {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.type.en)))];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type.en === filter);

  return (
    <div className="px-8 pb-16">
      <h2 className="text-3xl font-black mb-2">{t.projectsTitle}</h2>
      <p className="text-[#A7A7A7] mb-6">{t.projectsSub}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors ${
              filter === type ? "bg-white text-black" : "bg-[#282828] text-[#A7A7A7] hover:text-white"
            }`}
          >
            {type === "All" ? t.all : type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} lang={lang} />
        ))}
      </div>
    </div>
  );
}

function SkillsSection({ t }: { t: (typeof T)["en"] }) {
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));
  return (
    <div className="px-8 pb-16">
      <h2 className="text-3xl font-black mb-2">{t.skillsTitle}</h2>
      <p className="text-[#A7A7A7] mb-8">{t.skillsSub}</p>
      <div className="flex flex-wrap gap-3 mb-10">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="bg-[#181818] hover:bg-[#242424] rounded-full px-5 py-3 transition-colors border border-[#282828]">
            <span className="text-sm font-semibold text-white">{skill.name}</span>
            <span className="text-[10px] text-[#535353] ml-2 uppercase tracking-wider">{skill.category}</span>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4">{t.byCategory}</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <div key={cat} className="bg-[#181818] rounded-lg px-5 py-3">
            <p className="text-xs text-[#A7A7A7] uppercase tracking-wider mb-2">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.filter((s) => s.category === cat).map((s) => (
                <span key={s.name} className="text-sm font-medium text-white">{s.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceSection({ lang, t }: { lang: Lang; t: (typeof T)["en"] }) {
  return (
    <div className="px-8 pb-16">
      <h2 className="text-3xl font-black mb-2">{t.experienceTitle}</h2>
      <p className="text-[#A7A7A7] mb-8">{t.experienceSub}</p>
      <div className="space-y-3">
        {EXPERIENCE.map((exp, i) => (
          <div key={exp.id} className="flex items-center gap-4 bg-[#181818] hover:bg-[#242424] rounded-lg px-5 py-4 transition-colors group">
            <span className="text-sm text-[#A7A7A7] w-5">{i + 1}</span>
            <span className="w-12 h-12 rounded flex items-center justify-center text-sm font-black flex-shrink-0" style={{ background: exp.color + "22", color: exp.color }}>
              {exp.logo}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold group-hover:text-[#1DB954] transition-colors">{exp.role[lang]}</p>
              <p className="text-xs text-[#A7A7A7]">{exp.company}</p>
              {exp.desc && <p className="text-xs text-[#707070] mt-1 line-clamp-2">{exp.desc[lang]}</p>}
            </div>
            <p className="text-sm text-[#A7A7A7] flex-shrink-0 ml-4">{exp.period[lang]}</p>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mt-10 mb-4">{t.education}</h3>
      <div className="bg-[#181818] rounded-lg px-5 py-4 flex items-center gap-4">
        <span className="w-12 h-12 bg-[#1DB954]/20 text-[#1DB954] rounded flex items-center justify-center font-black text-xs">MUST</span>
        <div>
          <p className="text-sm font-semibold">{t.degree}</p>
          <p className="text-xs text-[#A7A7A7]">{t.university}</p>
        </div>
      </div>
    </div>
  );
}

function ContactSection({ t }: { t: (typeof T)["en"] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "fail">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${ME.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("fail");
      }
    } catch {
      setStatus("fail");
    }
  };

  const contacts = [
    { label: t.email, value: ME.email, href: `mailto:${ME.email}`, icon: "✉" },
    { label: t.phone, value: ME.phone, href: `tel:${ME.phoneLink}`, icon: "☎" },
    { label: t.github, value: "adroph2605-del", href: ME.github, icon: "⌥" },
    { label: t.linkedin, value: "Adroph Audiphance Andrea", href: ME.linkedin, icon: "in" },
    {
      label: t.location,
      value: ME.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ME.location)}`,
      icon: "📍",
    },
  ];

  return (
    <div className="px-8 pb-16">
      <h2 className="text-3xl font-black mb-2">{t.contactTitle}</h2>
      <p className="text-[#A7A7A7] mb-8">{t.contactSub}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {status === "ok" ? (
            <div className="bg-[#181818] rounded-lg p-8 text-center">
              <p className="text-[#1DB954] text-lg font-bold mb-2">{t.sentOk}</p>
              <button onClick={() => setStatus("idle")} className="mt-4 text-sm text-[#1DB954] hover:underline">{t.sendAnother}</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-xs text-[#A7A7A7] uppercase tracking-wider">{t.name}</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full mt-1 bg-[#181818] border border-[#282828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all"
                  placeholder={t.namePh} />
              </div>
              <div>
                <label className="text-xs text-[#A7A7A7] uppercase tracking-wider">{t.email}</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-1 bg-[#181818] border border-[#282828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all"
                  placeholder={t.emailPh} />
              </div>
              <div>
                <label className="text-xs text-[#A7A7A7] uppercase tracking-wider">{t.message}</label>
                <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-1 bg-[#181818] border border-[#282828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all resize-none"
                  placeholder={t.messagePh} />
              </div>
              {status === "fail" && (
                <p className="text-red-400 text-sm">{t.sentFail} <a href={`mailto:${ME.email}`} className="underline">{ME.email}</a></p>
              )}
              <button type="submit" disabled={status === "sending"}
                className="w-full bg-[#1DB954] hover:bg-[#1ed760] disabled:opacity-60 text-black font-bold text-sm py-3 rounded-full transition-colors">
                {status === "sending" ? t.sending : t.send}
              </button>
            </form>
          )}
        </div>
        <div className="space-y-3">
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 bg-[#181818] hover:bg-[#242424] rounded-lg px-5 py-4 transition-colors group">
              <span className="w-10 h-10 bg-[#282828] rounded-full flex items-center justify-center text-sm font-bold text-[#1DB954] group-hover:bg-[#1DB954] group-hover:text-black transition-colors">{c.icon}</span>
              <div className="min-w-0">
                <p className="text-xs text-[#A7A7A7] uppercase tracking-wider">{c.label}</p>
                <p className="text-sm font-semibold mt-0.5 truncate group-hover:text-[#1DB954] transition-colors">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];

  const NAV_ITEMS = [
    { id: "home", label: t.home, icon: HomeIcon },
    { id: "projects", label: t.projects, icon: GridIcon },
    { id: "skills", label: t.skills, icon: BarIcon },
    { id: "experience", label: t.experience, icon: BriefIcon },
    { id: "contact", label: t.contact, icon: MailIcon },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "home": return <HomeSection lang={lang} t={t} />;
      case "projects": return <ProjectsSection lang={lang} t={t} />;
      case "skills": return <SkillsSection t={t} />;
      case "experience": return <ExperienceSection lang={lang} t={t} />;
      case "contact": return <ContactSection t={t} />;
      default: return <HomeSection lang={lang} t={t} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
      <aside className="w-60 flex-shrink-0 flex flex-col bg-black">
        <div className="flex items-center px-4 pt-6 pb-6"><AdroPh /></div>
        <nav className="flex-1 px-2 space-y-1">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setActiveSection(id)}
              className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                activeSection === id ? "bg-[#282828] text-white" : "text-[#A7A7A7] hover:text-white"
              }`}>
              <Icon active={activeSection === id} />{label}
            </button>
          ))}
        </nav>
        <div className="px-4 pb-3">
          <div className="flex rounded-full bg-[#181818] p-1">
            <button onClick={() => setLang("en")} className={`flex-1 text-xs font-bold py-1.5 rounded-full transition-colors ${lang === "en" ? "bg-[#1DB954] text-black" : "text-[#A7A7A7] hover:text-white"}`}>EN</button>
            <button onClick={() => setLang("sw")} className={`flex-1 text-xs font-bold py-1.5 rounded-full transition-colors ${lang === "sw" ? "bg-[#1DB954] text-black" : "text-[#A7A7A7] hover:text-white"}`}>SW</button>
          </div>
        </div>
        <div className="p-4 border-t border-[#282828]">
          <div className="flex items-center gap-3">
            <img src={ME.avatar} alt={ME.name} className="w-8 h-8 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{ME.name}</p>
              <p className="text-xs text-[#A7A7A7] truncate">{ME.role[lang]}</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#1a3a2a] via-[#181818] to-[#121212]">
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-[#121212]/80 backdrop-blur-md border-b border-[#282828]/40">
          <div className="flex items-center gap-2 flex-wrap">
            {NAV_ITEMS.map(({ id, label }) => (
              <button key={id} onClick={() => setActiveSection(id)}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors ${
                  activeSection === id ? "bg-white text-black" : "text-[#A7A7A7] hover:text-white"
                }`}>{label}</button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex rounded-full bg-[#181818] p-0.5">
              <button onClick={() => setLang("en")} className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${lang === "en" ? "bg-[#1DB954] text-black" : "text-[#A7A7A7]"}`}>EN</button>
              <button onClick={() => setLang("sw")} className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${lang === "sw" ? "bg-[#1DB954] text-black" : "text-[#A7A7A7]"}`}>SW</button>
            </div>
            <a href={`mailto:${ME.email}`} className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-sm px-5 py-2 rounded-full transition-colors whitespace-nowrap">{t.hireMe}</a>
          </div>
        </div>
        <div>{renderSection()}</div>
      </main>
    </div>
  );
}
