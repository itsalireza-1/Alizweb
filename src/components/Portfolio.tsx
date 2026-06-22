/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PROJECTS } from "../data";
import { motion } from "motion/react";
import { ExternalLink, Award, Sparkles, FolderKanban } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/2 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-right max-w-3xl md:mr-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-full border border-cyan-500/10">
            نمونه‌کارهای منتخب
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-morabba mt-4 mb-6">
            داستان‌های موفقیت؛ پروژه‌هایی با نتایج عینی مالی
          </h2>
          <p className="text-slate-400 font-modam text-sm leading-relaxed">
            من صرفاً سایت نساختم؛ با همراهی مداوم، مسیر درآمدی آن‌ها را دگرگون کردم. در ادامه چند نمونه از این همکاری‌ها را مرور کنید.
          </p>
        </div>

        {/* Portfolio Layout List (Structured Grid with Layered Parallax Feel) */}
        <div className="grid grid-cols-1 gap-12 sm:gap-14">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              id={`portfolio-item-${project.id}`}
              className="glass rounded-3xl border-white/5 overflow-hidden group hover:border-cyan-500/20 transition-all duration-500 relative"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
            >
              {/* Outer top highlight overlay strip */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
                
                {/* Tech & Metrics Details (Takes 6 Cols) */}
                <div className="lg:col-span-6 text-right space-y-6 lg:order-2">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-500/10 px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black font-morabba text-white mt-4 mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 font-modam text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Metric Pill */}
                  <div className="bg-gradient-to-l from-cyan-950/30 to-emerald-950/30 border border-cyan-500/10 p-4 rounded-2xl flex items-center justify-between text-right">
                    <div>
                      <span className="text-[10px] text-slate-400 font-modam block">نتیجه آماری حاصل از همکاری:</span>
                      <p className="text-sm font-bold text-emerald-400 font-modam mt-0.5">{project.metricLabel}</p>
                    </div>
                    <div className="text-3xl font-black text-emerald-400 font-mono text-glow-cyan">
                      {project.metrics}
                    </div>
                  </div>

                  {/* Before / After Table Comparison (Critical for trust) */}
                  {project.beforeAfter && (
                    <div className="grid grid-cols-2 gap-4 text-xs font-modam p-4 bg-gray-900/50 rounded-xl border border-white/5">
                      <div className="border-l border-white/5 pl-3">
                        <span className="text-red-400 block font-semibold">قبل از همکاری:</span>
                        <p className="text-gray-400 mt-1">{project.beforeAfter.before}</p>
                      </div>
                      <div className="pr-1">
                        <span className="text-emerald-400 block font-semibold">بعد از همکاری با علیزوب:</span>
                        <p className="text-white font-bold mt-1">{project.beforeAfter.after}</p>
                      </div>
                    </div>
                  )}

                  {/* Tech Tags List */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium text-gray-400 bg-gray-90% border border-white/5 py-1 px-2.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Cover Image Gallery Container (Takes 6 Cols) */}
                <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 border border-white/10 lg:order-1 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/65 to-transparent pointer-events-none"></div>

                  <div className="absolute top-3 right-3 bg-gray-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1">
                    <FolderKanban className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[10px] text-gray-300 font-mono">CASE STUDY</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
