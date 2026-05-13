import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Instagram, ArrowUpRight, Mail, Phone, MapPin,
  Cpu, Bot, ShieldCheck, GraduationCap, Code2, Network, Brain,
  Cog, Award, Sparkles, Send, Workflow, Wrench,
} from "lucide-react";
import aryanImg from "@/assets/aryan.jpeg";
import projectDrone from "@/assets/project-drone.jpeg";
import projectSmarthome from "@/assets/project-smarthome.png";
import projectSecurity from "@/assets/project-security.png";
import { Navbar } from "@/components/Navbar";
import { MouseGlow } from "@/components/MouseGlow";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "#050505" }}>
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Process />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 px-6">
      <div className="absolute inset-0 grid-overlay radial-fade opacity-60" />
      <div className="absolute top-32 -left-24 w-[500px] h-[500px] rounded-full blur-[140px]"
           style={{ background: "color-mix(in oklab, var(--neon) 25%, transparent)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[160px] bg-cyan-500/10" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon)] animate-pulse-neon" />
              Available for new opportunities
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display font-bold text-[clamp(2.8rem,8vw,6rem)] leading-[0.95] text-balance">
              Aryan <span className="neon-text">Singh</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-lg md:text-xl text-foreground/80 font-medium">
              Technical Trainer <span className="text-[var(--neon)]">|</span> AI, Robotics & Cybersecurity
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Passionate technical trainer specializing in Artificial Intelligence, Robotics, IoT,
              and Cybersecurity — with hands-on experience in STEM education, technical mentoring,
              and emerging technologies.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 bg-[var(--neon)] text-[var(--primary-foreground)] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                View Projects
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full font-semibold hover:bg-white/5 transition-colors">
                Contact Me
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: "https://linkedin.com/in/invaded-author" },
                { Icon: Github, href: "https://github.com/invaded-author" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                   className="w-11 h-11 rounded-full glass-strong flex items-center justify-center hover:text-[var(--neon)] hover:border-[var(--neon)] transition-all hover:scale-110">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right visual */}
        <div className="lg:col-span-5 relative">
          <Reveal delay={0.3}>
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[var(--neon)]/30 via-transparent to-cyan-500/20 blur-2xl" />
              <div className="relative h-full glass-strong rounded-[2rem] overflow-hidden neon-glow">
                <img src={aryanImg} alt="Aryan Singh" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="glass px-3 py-1 rounded-full">SYS://AI_TRAINER</span>
                  <span className="text-[var(--neon)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon)] animate-pulse" />
                    LIVE
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>Neural Stack</span><span>v2.5</span>
                  </div>
                  <div className="flex gap-2">
                    {["AI", "IoT", "SEC", "ROB"].map((t) => (
                      <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating HUD chips */}
              <motion.div
                animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-8 top-16 glass-strong rounded-2xl p-3 hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[var(--neon)]/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[var(--neon)]" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Robotics</div>
                    <div className="text-sm font-semibold">100+ Mentees</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 14, 0] }} transition={{ duration: 6, repeat: Infinity }}
                className="absolute -right-6 bottom-24 glass-strong rounded-2xl p-3 hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Sec. Score</div>
                    <div className="text-sm font-semibold">98.2%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ ABOUT ============ */
function About() {
  const stats = [
    { v: "2+", l: "Years Experience" },
    { v: "100+", l: "Students Mentored" },
    { v: "10+", l: "Technical Projects" },
    { v: "5000+", l: "Awareness Reach" },
  ];
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel icon={<Sparkles className="w-3 h-3" />}>About</SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold max-w-3xl text-balance">
            Building Future Innovators<br /> Through <span className="neon-text">Technology</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3">
            <div className="glass-strong rounded-3xl p-8 md:p-10 h-full">
              <p className="text-foreground/80 leading-relaxed">
                Aryan Singh is a Technical Trainer specializing in Artificial Intelligence,
                Robotics, IoT, and Cybersecurity. With experience mentoring students across India,
                he focuses on practical learning, innovation-driven education, and hands-on project
                development.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                He has worked as a <span className="text-foreground">Robotics & IoT Trainer at Tech Synix</span> and
                {" "}<span className="text-foreground">Cybersecurity Trainer & Educational Architect at Extion Infotech</span>,
                simplifying complex technical concepts into immersive classroom experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["AI", "Robotics", "IoT", "Cybersecurity", "STEM Education"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full glass">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 h-full">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  whileHover={{ y: -6 }}
                  className={`glass-strong rounded-3xl p-6 flex flex-col justify-between ${
                    i === 0 ? "bg-[var(--neon)] text-[var(--primary-foreground)] !border-transparent" : ""
                  }`}
                >
                  <div className={`text-xs uppercase tracking-widest ${i === 0 ? "opacity-70" : "text-muted-foreground"}`}>
                    {i === 0 ? "● Top stat" : "●"}
                  </div>
                  <div>
                    <div className="font-display text-3xl md:text-4xl font-bold mt-6">{s.v}</div>
                    <div className={`text-sm mt-1 ${i === 0 ? "opacity-80" : "text-muted-foreground"}`}>{s.l}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ EXPERIENCE ============ */
function Experience() {
  const items = [
    {
      role: "Robotics, IoT & AI Trainer",
      company: "Tech Synix",
      period: "Sep 2024 – Present",
      bullets: [
        "Delivered training on Robotics, IoT, embedded technologies, and AI-integrated hardware projects.",
        "Guided students in projects using Arduino, Raspberry Pi, sensors, and automation modules.",
        "Developed STEM-focused activities to improve problem-solving and technical creativity.",
        "Conducted workshops and educational sessions on emerging technologies.",
      ],
      tags: ["Arduino", "Raspberry Pi", "AI", "STEM"],
    },
    {
      role: "Cybersecurity Trainer & Educational Architect",
      company: "Extion Infotech",
      period: "Mar 2023 – Jul 2024",
      bullets: [
        "Designed industry-oriented training in Cybersecurity, AI, Robotics, and emerging tech.",
        "Hands-on labs using Kali Linux, Burp Suite, Metasploit, Nmap, and OSINT methodologies.",
        "Mentored 100+ students in cybersecurity and ethical hacking fundamentals.",
        "Built structured learning modules and project-based technical curricula.",
      ],
      tags: ["Kali Linux", "Burp Suite", "Metasploit", "OSINT"],
    },
  ];
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel icon={<Workflow className="w-3 h-3" />}>Experience</SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
            Career <span className="neon-text">Timeline</span>
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--neon)]/40 to-transparent" />
          <div className="space-y-12">
            {items.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"} pl-12 md:pl-0`}>
                    <div className="text-[var(--neon)] text-sm font-semibold">{item.period}</div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">{item.role}</h3>
                    <div className="mt-1 text-muted-foreground">{item.company}</div>
                  </div>
                  <div className="pl-12 md:pl-0 mt-4 md:mt-0">
                    <div className="glass-strong rounded-3xl p-6 hover:border-[var(--neon)]/40 transition-colors">
                      <ul className="space-y-2 text-sm text-foreground/80">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="text-[var(--neon)] mt-1">▸</span><span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 rounded-full glass">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--neon)] neon-glow" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SKILLS ============ */
function Skills() {
  const cats = [
    { Icon: Brain, title: "AI & Programming",
      items: ["Python", "AI Fundamentals", "TensorFlow Basics", "AI Tools & LLMs", "SQL Fundamentals"] },
    { Icon: Cpu, title: "Robotics & IoT",
      items: ["Arduino", "ESP32", "Raspberry Pi", "Embedded Systems", "Sensors & Automation", "IoT Systems"] },
    { Icon: ShieldCheck, title: "Cybersecurity",
      items: ["Kali Linux", "Parrot OS", "Burp Suite", "Metasploit", "Nmap", "OSINT Fundamentals"] },
    { Icon: GraduationCap, title: "Training & Education",
      items: ["Curriculum Development", "Technical Mentoring", "STEM Education", "Workshop Training", "Instructional Design", "Content Creation"] },
  ];
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel icon={<Code2 className="w-3 h-3" />}>Skills</SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
            Mastered <span className="neon-text">Technologies</span> & Tools
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A multidisciplinary stack across artificial intelligence, hardware, and offensive security.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cats.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative glass-strong rounded-3xl p-6 h-full overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl bg-[var(--neon)]/0 group-hover:bg-[var(--neon)]/20 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--neon)]/15 border border-[var(--neon)]/30 flex items-center justify-center">
                    <c.Icon className="w-5 h-5 text-[var(--neon)]" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {c.items.map((it) => (
                      <li key={it} className="text-sm text-foreground/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[var(--neon)]" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PROCESS ============ */
function Process() {
  const steps = [
    { Icon: Network, title: "Curriculum Planning", desc: "Architecting learning paths tailored to outcomes and skill gaps." },
    { Icon: Wrench, title: "Hands-on Training", desc: "Interactive labs blending theory with real hardware and tools." },
    { Icon: Cog, title: "Project Development", desc: "Guiding learners through end-to-end build cycles and iteration." },
    { Icon: Sparkles, title: "Real-world Implementation", desc: "Shipping practical, deployable solutions with measurable impact." },
  ];
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <SectionLabel icon={<Workflow className="w-3 h-3" />}>Process</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
              Work <span className="neon-text">Process</span>
            </h2>
            <p className="mt-3 text-muted-foreground">A glimpse into my collaborative and iterative training process.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }}
                className="relative glass-strong rounded-3xl p-6 h-44 overflow-hidden group">
                <div className="absolute right-4 bottom-2 font-display font-bold text-[5rem] leading-none text-white/[0.06] group-hover:text-[var(--neon)]/20 transition-colors">
                  0{i + 1}.
                </div>
                <div className="w-11 h-11 rounded-xl bg-[var(--neon)] text-[var(--primary-foreground)] flex items-center justify-center">
                  <s.Icon className="w-5 h-5" />
                </div>
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="font-display text-lg font-bold">{s.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.desc}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PROJECTS ============ */
function Projects() {
  const featured = [
    {
      title: "AI Disaster Response Drone",
      desc: "AI-powered drone system for disaster monitoring, rescue support, and real-time aerial analysis using sensors, GPS, and intelligent automation.",
      tags: ["AI", "IoT", "Robotics", "Sensors", "GPS"],
      gradient: "from-[var(--neon)]/30 via-cyan-500/20 to-blue-500/20",
      image: projectDrone,
    },
    {
      title: "Smart Home Automation System",
      desc: "IoT automation system for remotely controlling appliances with real-time monitoring and energy-efficient automation.",
      tags: ["Arduino", "IoT", "Sensors", "Automation"],
      gradient: "from-orange-500/20 via-pink-500/15 to-[var(--neon)]/20",
      image: projectSmarthome,
    },
    {
      title: "Intelligent Home Security",
      desc: "Smart security system with motion detection, smart alerts, and surveillance automation for residential protection.",
      tags: ["IoT", "Security", "Sensors"],
      gradient: "from-purple-500/20 via-cyan-400/15 to-[var(--neon)]/20",
      image: projectSecurity,
    },
  ];
  const minor = [
    "Automatic Waste Segregation", "Automatic Toll Gate System", "Gas Leakage Detector",
    "Smoke & Fire Alarm System", "Weather Monitoring System", "RFID Door Lock",
    "Plant Monitoring System", "Human Following Robot",
  ];
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <SectionLabel icon={<Bot className="w-3 h-3" />}>Projects</SectionLabel>
              <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
                Projects & <span className="neon-text">Innovation</span>
              </h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[var(--neon)] text-[var(--primary-foreground)] px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
              Collaborate <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -8 }}
                className="group relative glass-strong rounded-3xl overflow-hidden h-full">
                <div className={`relative h-56 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 grid-overlay opacity-20 mix-blend-overlay" />
                  <div className="absolute top-4 left-4 text-xs glass px-3 py-1 rounded-full">
                    0{i + 1} / Featured
                  </div>
                  <div className="absolute bottom-4 left-4 glass-strong rounded-full px-3 py-1 text-[10px] uppercase tracking-widest">
                    {p.tags[0]} · System
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <button className="w-10 h-10 shrink-0 rounded-full glass flex items-center justify-center group-hover:bg-[var(--neon)] group-hover:text-[var(--primary-foreground)] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-20 font-display text-2xl md:text-3xl font-bold">Minor <span className="neon-text">Builds</span></h3>
        </Reveal>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {minor.map((m, i) => (
            <Reveal key={m} delay={i * 0.04}>
              <div className="glass rounded-2xl px-5 py-4 text-sm hover:border-[var(--neon)]/40 hover:text-[var(--neon)] transition-colors flex items-center justify-between">
                {m}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CERTIFICATIONS ============ */
function Certifications() {
  const items = [
    "Ethical Hacking", "Reverse Engineering with Ghidra", "Cybersecurity Uncovered",
    "Linux Intrusion Essentials", "Windows Security", "AI & Robotics",
  ];
  return (
    <section id="certifications" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel icon={<Award className="w-3 h-3" />}>Certifications</SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
            Verified <span className="neon-text">Credentials</span>
          </h2>
        </Reveal>
      </div>
      <div className="mt-12 overflow-hidden relative" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
        <div className="flex gap-5 animate-marquee w-max">
          {[...items, ...items].map((c, i) => (
            <div key={i} className="w-[300px] glass-strong rounded-3xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[var(--neon)]/15 border border-[var(--neon)]/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[var(--neon)]" />
                </div>
                <span className="text-xs text-muted-foreground">CERT</span>
              </div>
              <div className="font-display text-lg font-bold">{c}</div>
              <div className="text-xs text-muted-foreground">Verified · Hands-on lab certified</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ EDUCATION ============ */
function Education() {
  const items = [
    {
      title: "Invertis University",
      sub: "Bachelor of Computer Applications · Artificial Intelligence",
      meta: "Expected 2025 · Bareilly, UP",
      points: ["Techathon — 2nd Runner-Up", "International Conference Participant"],
    },
    {
      title: "Army Public School",
      sub: "Class 12 Science",
      meta: "Mumbai, MH",
      points: ["2x TechExpo Winner", "Computer Integrator with St. Xavier's College Mumbai"],
    },
  ];
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel icon={<GraduationCap className="w-3 h-3" />}>Education</SectionLabel>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
            Academic <span className="neon-text">Foundation</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {items.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} className="glass-strong rounded-3xl p-7 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--neon)]/15 border border-[var(--neon)]/30 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[var(--neon)]" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold">{e.title}</div>
                    <div className="text-xs text-muted-foreground">{e.meta}</div>
                  </div>
                </div>
                <p className="mt-5 text-sm text-foreground/80">{e.sub}</p>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-[var(--neon)]">✦</span>{p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute inset-0 grid-overlay radial-fade opacity-40" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px]"
           style={{ background: "color-mix(in oklab, var(--neon) 15%, transparent)" }} />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <SectionLabel icon={<Mail className="w-3 h-3" />}>Contact</SectionLabel>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
              Let's Build Something <span className="neon-text">Future-ready</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="glass-strong rounded-3xl p-7 h-full space-y-5">
              <ContactRow Icon={Mail} label="Email" value="nvsharyan@gmail.com" href="mailto:nvsharyan@gmail.com" />
              <ContactRow Icon={Phone} label="Phone" value="+91 7451812065" href="tel:+917451812065" />
              <ContactRow Icon={MapPin} label="Location" value="Kashmere Gate, Delhi, India" />
              <ContactRow Icon={Linkedin} label="LinkedIn" value="invaded-author" href="https://linkedin.com/in/invaded-author" />
              <ContactRow Icon={Github} label="GitHub" value="invaded-author" href="https://github.com/invaded-author" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:nvsharyan@gmail.com"; }}
              className="glass-strong rounded-3xl p-7 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@domain.com" />
              </div>
              <Field label="Subject" placeholder="Workshop / Training / Collaboration" />
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea rows={5} placeholder="Tell me about your project…"
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:border-[var(--neon)] focus:outline-none transition-colors resize-none" />
              </div>
              <button type="submit"
                className="group inline-flex items-center gap-2 bg-[var(--neon)] text-[var(--primary-foreground)] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...rest}
        className="mt-2 w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:border-[var(--neon)] focus:outline-none transition-colors" />
    </div>
  );
}

function ContactRow({ Icon, label, value, href }: { Icon: typeof Mail; label: string; value: string; href?: string }) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      className="flex items-center gap-4 group">
      <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[var(--neon)] group-hover:text-[var(--primary-foreground)] transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </Wrap>
  );
}

function SectionLabel({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
      <span className="text-[var(--neon)]">{icon}</span>{children}
    </span>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aryan Singh — Crafted with precision.
        </div>
        <div className="flex items-center gap-2">
          {[Linkedin, Github, Instagram].map((I, i) => (
            <a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-[var(--neon)] transition-colors">
              <I className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
