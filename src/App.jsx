import { Mail, Terminal, Sparkles, ArrowUpLeft, Layers, Cpu, Globe } from 'lucide-react';
import { profile, skills, projects } from "./data/portfolioData";

export default function App() {
  return (
    <div dir="rtl" className="relative min-h-screen bg-[#070913] text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* خلفية الفقاعات المضيئة المتحركة (Floating Ambient Blobs) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 -left-24 w-[28rem] h-[28rem] bg-cyan-500/25 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 right-1/3 w-[30rem] h-[30rem] bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
        {/* شبكة خفيفة في الخلفية لإعطاء طابع تقني */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* شريط تنقل عائم (Floating Glass Pill Navbar) */}
      <div className="sticky top-5 z-50 px-4">
        <nav className="max-w-3xl mx-auto bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <a href="#" className="font-bold text-lg bg-gradient-to-l from-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            Mouaz.dev
          </a>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#skills" className="hover:text-cyan-400 transition-colors">المهارات</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">المشاريع</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">تواصل معي</a>
          </div>
        </nav>
      </div>

      {/* الواجهة الرئيسية (Hero Section) */}
      <header className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center md:text-right">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-cyan-300 text-xs font-medium mb-6 backdrop-blur-md">
          <Sparkles size={14} className="text-cyan-400" />
          <span>متاح للمشاريع والاستشارات التقنية</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="block text-slate-100">{profile.name.split('|')[0]}</span>
          <span className="block text-2xl md:text-4xl mt-2 bg-gradient-to-l from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            {profile.role}
          </span>
        </h1>

        <p className="text-slate-300/90 text-base md:text-lg max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0">
          {profile.bio}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-slate-950 bg-gradient-to-l from-cyan-400 to-emerald-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>استكشف أعمالي</span>
            <ArrowUpLeft size={18} className="group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <Terminal size={18} className="text-purple-400" />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* قسم المهارات (Bento Glass Cards + Bubble Tags) */}
      <section id="skills" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Cpu size={22} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">الترسانة التقنية</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="group relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.25)]"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-5 text-cyan-300 group-hover:scale-110 transition-transform">
                <Layers size={20} />
              </div>
              <h4 className="font-bold text-lg text-white mb-4">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white/[0.05] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-200 text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم المشاريع (Modern Glass Cards with Glow Borders) */}
      <section id="projects" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Globe size={22} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">أبرز المشاريع والأنظمة</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-purple-400/40 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)]"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>
                  <a
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white/[0.05] hover:bg-cyan-500/20 border border-white/10 text-slate-300 hover:text-cyan-300 transition"
                    title="معاينة"
                  >
                    <ArrowUpLeft size={18} />
                  </a>
                </div>
                <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/20 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم التواصل (Floating Glass Banner) */}
      <footer id="contact" className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden bg-gradient-to-l from-cyan-500/10 via-purple-500/10 to-emerald-500/10 backdrop-blur-2xl border border-white/15 rounded-[2.5rem] p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">لنبنِ شيئاً استثنائياً معاً</h3>
          <p className="text-slate-300 max-w-lg mx-auto mb-8 text-sm md:text-base">
            سواء كنت تبحث عن بناء نظام مؤسسي متكامل، تطبيق موبايل، أو تصميم بنية خوادم عالية التوافر، يسعدني تواصلك.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-slate-950 bg-white hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:scale-105"
          >
            <Mail size={20} />
            <span>{profile.email}</span>
          </a>
        </div>
      </footer>
    </div>
  );
}