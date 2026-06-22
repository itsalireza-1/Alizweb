/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { REVIEWS } from "../data";
import { motion } from "motion/react";
import { Star, MessageSquareQuote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <span className="text-xs font-mono tracking-widest text-emerald-400 bg-emerald-950/50 px-3 py-1.5 rounded-full border border-emerald-500/10">
            صدای موفقیت کارفرمایان
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-morabba mt-4 mb-6 leading-tight">
            کسب‌وکارهایی که با آلیزوب به سقف فروش نزدیک‌تر شدند
          </h2>
          <p className="text-slate-400 font-modam text-sm max-w-xl mx-auto leading-relaxed">
            هیچ صحبتی قانع‌کننده‌تر از رضایت و لبخند کارفرمایانی نیست که با تکیه بر استراتژی‌های علمی ما مسیر درآمدشان را افزایش دادند.
          </p>
        </div>

        {/* Testimonials layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              id={`review-card-${review.id}`}
              className="glass p-6 sm:p-8 rounded-3xl border-white/5 relative flex flex-col justify-between group hover:border-cyan-500/15 transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              {/* Corner quote icon decor */}
              <div className="absolute top-6 left-6 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors pointer-events-none">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              <div className="space-y-6">
                
                {/* Visual growth metric banner (crucial positioning element) */}
                <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs px-3.5 py-1.5 rounded-xl text-right">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>دستاورد عینی: {review.growthMetric}</span>
                </span>

                {/* Star rating icons */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Main Quote Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-modam text-right">
                  {review.content}
                </p>

              </div>

              {/* Author Info Row */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-start gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border border-cyan-500/20 object-cover"
                />
                <div className="text-right">
                  <h4 className="text-xs font-bold text-white font-morabba leading-none">
                    {review.name}
                  </h4>
                  <span className="text-[10px] text-gray-400 font-mono block mt-1 leading-none">
                    {review.role} - {review.company}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
