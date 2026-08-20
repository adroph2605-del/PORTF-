import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
//  TAARIFA ZAKO — badilisha hapa tu
// ═══════════════════════════════════════════════════════════════════════════════

const ME = {
  name: "Adroph Audiphance Andrea",
  role: "Computer Engineering",
  location: "Mbeya, Tanzania",
  bio: "Computer Engineering student passionate about building practical digital tools for African entrepreneurs. I design and develop platforms that help small businesses manage sales, stock, debts and growth — turning complex operations into simple, clear systems.",
  avatar: "/profile.png",
  email: "adroph2605@gmail.com",
  phone: "+255 000 000 000", // ← Badilisha na namba yako halisi
  github: "https://github.com/adroph2605-del",
  linkedin: "https://www.linkedin.com/in/adroph-audiphance-andrea",
};

const PROJECTS = [
  {
    id: 1,
    title: "WAJASILIAMALI",
    type: "Website",
    description:
      "WAJASILIAMALI is a digital business management platform designed to help small and medium-sized entrepreneurs manage sales, stock, debts, expenses, receipts and business performance in one place — so they can make better decisions and grow their businesses.",
    tags: ["React", "FastAPI", "Alchemy"],
    year: "2026",
    img: "/wajasiliali.png",
    color: "#1DB954",
    duration: "3 weeks",
  },
  {
    id: 2,
    title: "ZENTRUST",
    type: "Mobile App",
    description:
      "Zentrust is a global B2B data exchange platform that securely connects businesses with financial institutions (banks, credit unions, and insurers) to share normalized financial data with user consent.",
    tags: ["React Native", "Expo", "TypeScript"],
    year: "2026",
    img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=600&fit=crop&auto=format",
    color: "#E91E8C",
    duration: "5 months",
  },
];

const SKILLS = [
  { name: "React", level: 85, category: "Frontend" },
  { name: "FastAPI", level: 80, category: "Backend" },
  { name: "Python", level: 88, category: "Languages" },
  { name: "HTML / CSS", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 82, category: "Frontend" },
  { name: "AutoCAD (ICT Design)", level: 75, category: "Design" },
  { name: "Figma", level: 78, category: "Design" },
];

const EXPERIENCE = [
  {
    id: 1,
    company: "Freelance",
    role: "Software Developer",
    period: "Present",
    desc: "Building web and business tools for clients, including WAJASILIAMALI.",
    logo: "F",
    color: "#1DB954",
  },
  {
    id: 2,
    company: "AI and Signal Processing Hub",
    role: "Club Member",
    period: "Present",
    desc: "Active member focusing on AI, signal processing and practical engineering projects.",
    logo: "A",
    color: "#1DA1F2",
  },
];

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "projects", label: "Projects", icon: GridIcon },
  { id: "skills", label: "Skills", icon: BarIcon },
  { id: "experience", label: "Experience", icon: BriefIcon },
  { id: "contact", label: "Contact", icon: MailIcon },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────

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
      <text x="18" y="23" textAnchor="middle" fill="#000" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="900" letterSpacing="-1">
        a
      </text>
      <text x="42" y="24" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="800" letterSpacing="-0.5">
        droph
      </text>
      <circle cx="112" cy="10" r="3" fill="#1DB954" />
    </svg>
  );
}
function AdroPh_Small() {
  return (
    <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#1DB954" />
      <text x="18" y="23.5" textAnchor="middle" fill="#000" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="900">
        a
      </text>
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

// ─── SECTIONS ────────────────────────────────────────────────────────────────

function HomeSection() {
  return (
    <div className="pb-16">
      {/* Hero */}
      <div
        className="relative h-72 flex items-end px-8 pb-6 rounded-t-lg overflow-hidden mb-6"
        style={{
          background: "linear-gradient(180deg, #2a6b3f 0%, #1a472a 60%, #121212 100%)",
        }}
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
          <img
            src={ME.avatar}
            alt={ME.name}
            className="w-36 h-36 rounded-full object-cover shadow-2xl border-4 border-[#121212]"
          />
          <div className="pb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1DB954] mb-1 flex items-center gap-2">
              <AdroPh_Small />
              <span>Verified Developer</span>
            </p>
            <h1 className="text-5xl font-black mb-2">{ME.name}</h1>
            <p className="text-[#A7A7A7] text-sm">
              {ME.role} · {ME.location}
            </p>
          </div>
        </div>
      </div>

      {/* Action row */}
      <div className="px-8 flex items-center gap-4 mb-10 flex-wrap">
        <a
          href={`mailto:${ME.email}`}
          className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-sm px-8 py-3 rounded-full transition-colors"
        >
          Hire Me
        </a>
        <a
          href={`tel:${ME.phone.replace(/\s/g, "")}`}
          className="border border-[#535353] hover:border-white text-white font-bold text-sm px-8 py-3 rounded-full transition-colors"
        >
          Call Me
        </a>
        <div className="ml-auto flex items-center gap-4 text-[#A7A7A7]">
          <a href={ME.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub">
            <GithubIcon />
          </a>
          <a href={ME.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${ME.email}`} className="hover:text-white transition-colors" title="Email">
            <MailIcon active />
          </a>
          <a href={`tel:${ME.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors" title="Phone">
            <PhoneIcon />
          </a>
        </div>
      </div>

      {/* Bio — visible */}
      <div className="px-8 mb-10">
        <p className="text-[#B3B3B3] text-base leading-relaxed max-w-2xl">{ME.bio}</p>
      </div>

      {/* Stats */}
      <div className="px-8 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Projects shipped", value: "2+" },
          { label: "Years experience", value: "2+" },
          { label: "Technologies", value: "7+" },
          { label: "Focus", value: "SME Tools" },
        ].map((s) => (
          <div key={s.label} className="bg-[#181818] hover:bg-[#242424] rounded-lg p-5 transition-colors">
            <p className="text-3xl font-black text-[#1DB954]">{s.value}</p>
            <p className="text-sm text-[#A7A7A7] mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Featured projects */}
      <div className="px-8">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project: p }: { project: (typeof PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-[#181818] hover:bg-[#242424] rounded-lg p-4 transition-colors cursor-pointer group"
    >
      <div className="relative mb-4">
        <img
          src={p.img}
          alt={p.title}
          className="w-full aspect-square object-contain bg-[#121212] rounded-md p-4"
        />
        {hovered && (
          <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
            <span className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ background: p.color }}>
              <ExternalIcon />
            </span>
          </div>
        )}
      </div>
      <p className="font-bold text-sm mb-1 truncate">{p.title}</p>
      <p className="text-xs text-[#A7A7A7] line-clamp-3 mb-2">{p.description}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {p.tags.map((t) => (
          <span key={t} className="text-[10px] bg-[#282828] text-[#B3B3B3] px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3 text-xs text-[#535353]">
        <span>{p.type}</span>
        <span>
          {p.year} · {p.duration}
        </span>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.type)))];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <div className="px-8 pb-16">
      <h2 className="text-3xl font-black mb-2">Projects</h2>
      <p className="text-[#A7A7A7] mb-6">Things I've built and shipped.</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors ${
              filter === t ? "bg-white text-black" : "bg-[#282828] text-[#A7A7A7] hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));
  return (
    <div className="px-8 pb-16">
      <h2 className="text-3xl font-black mb-2">Skills</h2>
      <p className="text-[#A7A7A7] mb-8">Technologies I work with.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="bg-[#181818] rounded-lg p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold">{skill.name}</span>
              <span className="text-xs text-[#A7A7A7]">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-[#282828] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${skill.level}%`,
                  background: skill.level > 85 ? "#1DB954" : skill.level > 70 ? "#1DA1F2" : "#A7A7A7",
                }}
              />
            </div>
            <p className="text-[10px] text-[#535353] mt-2 uppercase tracking-wider">{skill.category}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-4">By Category</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <div key={cat} className="bg-[#181818] rounded-lg px-5 py-3">
            <p className="text-xs text-[#A7A7A7] uppercase tracking-wider mb-2">{cat}</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.filter((s) => s.category === cat).map((s) => (
                <span key={s.name} className="text-sm font-medium text-white">
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="px-8 pb-16">
      <h2 className="text-3xl font-black mb-2">Experience</h2>
      <p className="text-[#A7A7A7] mb-8">Where I've been building.</p>

      <div className="space-y-3">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={exp.id}
            className="flex items-center gap-4 bg-[#181818] hover:bg-[#242424] rounded-lg px-5 py-4 transition-colors group"
          >
            <span className="text-sm text-[#A7A7A7] w-5">{i + 1}</span>
            <span
              className="w-12 h-12 rounded flex items-center justify-center text-sm font-black flex-shrink-0"
              style={{ background: exp.color + "22", color: exp.color }}
            >
              {exp.logo}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold group-hover:text-[#1DB954] transition-colors">{exp.role}</p>
              <p className="text-xs text-[#A7A7A7]">{exp.company}</p>
              {exp.desc && <p className="text-xs text-[#707070] mt-1 line-clamp-2">{exp.desc}</p>}
            </div>
            <p className="text-sm text-[#A7A7A7] flex-shrink-0 ml-4">{exp.period}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mt-10 mb-4">Education</h3>
      <div className="bg-[#181818] rounded-lg px-5 py-4 flex items-center gap-4">
        <span className="w-12 h-12 bg-[#1DB954]/20 text-[#1DB954] rounded flex items-center justify-center font-black text-xs">
          MUST
        </span>
        <div>
          <p className="text-sm font-semibold">BSc. Computer Engineering and Technology</p>
          <p className="text-xs text-[#A7A7A7]">Mbeya University of Science and Technology</p>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open user's email client with prefilled message
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contacts = [
    {
      label: "Email",
      value: ME.email,
      href: `mailto:${ME.email}`,
      icon: "✉",
    },
    {
      label: "Phone",
      value: ME.phone,
      href: `tel:${ME.phone.replace(/\s/g, "")}`,
      icon: "☎",
    },
    {
      label: "GitHub",
      value: "adroph2605-del",
      href: ME.github,
      icon: "⌥",
    },
    {
      label: "LinkedIn",
      value: "Adroph Audiphance Andrea",
      href: ME.linkedin,
      icon: "in",
    },
    {
      label: "Location",
      value: ME.location,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ME.location)}`,
      icon: "📍",
    },
  ];

  return (
    <div className="px-8 pb-16">
      <h2 className="text-3xl font-black mb-2">Get in Touch</h2>
      <p className="text-[#A7A7A7] mb-8">Open to freelance, full-time roles, and interesting collaborations.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {sent ? (
            <div className="bg-[#181818] rounded-lg p-8 text-center">
              <p className="text-[#1DB954] text-lg font-bold mb-2">Opening your email app…</p>
              <p className="text-[#A7A7A7] text-sm">If nothing opens, email me directly at {ME.email}</p>
              <button onClick={() => setSent(false)} className="mt-4 text-sm text-[#1DB954] hover:underline">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-xs text-[#A7A7A7] uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full mt-1 bg-[#181818] border border-[#282828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-[#A7A7A7] uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-1 bg-[#181818] border border-[#282828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs text-[#A7A7A7] uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full mt-1 bg-[#181818] border border-[#282828] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all resize-none"
                  placeholder="What are you working on?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-sm py-3 rounded-full transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Interactive contact cards */}
        <div className="space-y-3">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 bg-[#181818] hover:bg-[#242424] rounded-lg px-5 py-4 transition-colors group"
            >
              <span className="w-10 h-10 bg-[#282828] rounded-full flex items-center justify-center text-sm font-bold text-[#1DB954] group-hover:bg-[#1DB954] group-hover:text-black transition-colors">
                {c.icon}
              </span>
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

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "experience":
        return <ExperienceSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 flex flex-col bg-black">
        <div className="flex items-center px-4 pt-6 pb-6">
          <AdroPh />
        </div>

        <nav className="flex-1 px-2 space-y-1">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`w-full flex items-center gap-4 px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                activeSection === id ? "bg-[#282828] text-white" : "text-[#A7A7A7] hover:text-white"
              }`}
            >
              <Icon active={activeSection === id} />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#282828]">
          <div className="flex items-center gap-3">
            <img src={ME.avatar} alt={ME.name} className="w-8 h-8 rounded-full object-cover" />
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{ME.name}</p>
              <p className="text-xs text-[#A7A7A7] truncate">{ME.role}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#1a3a2a] via-[#181818] to-[#121212]">
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-[#121212]/80 backdrop-blur-md border-b border-[#282828]/40">
          <div className="flex items-center gap-2 flex-wrap">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors ${
                  activeSection === id ? "bg-white text-black" : "text-[#A7A7A7] hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href={`mailto:${ME.email}`}
            className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-sm px-5 py-2 rounded-full transition-colors whitespace-nowrap"
          >
            Hire Me
          </a>
        </div>

        <div>{renderSection()}</div>
      </main>
    </div>
  );
}
