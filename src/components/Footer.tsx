/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Flame, Star, Send, ShieldCheck, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      
      {/* Visual bottom subtle glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[150px] bg-cyan-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & motto (Takes 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" onClick={(e) => handleScrollTo(e, "#hero")} className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1.5px]">
                <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-morabba font-bold text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">عل</span>
                </div>
              </div>
              <span className="font-sans font-black text-lg text-white">
                Aliz<span className="text-cyan-400">Web</span>
              </span>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed font-modam max-w-sm">
              آلیزوب (برند شخصی علیرضا عبدی) مهندس توسعه‌دهنده وب‌سایت، طراح تجربه کاربری و سئو با هدف مستقیم فعال‌سازی و افزایش جهش سودآور در مشاغل آنلاین ایران.
            </p>

            {/* Cert Trust Indicator */}
            <div className="flex gap-2.5 items-center bg-gray-900/60 border border-white/5 p-3 rounded-2xl w-fit">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div className="text-right leading-none">
                <span className="text-[10px] text-gray-500 block">STANDARD SECURITY CONTRACT</span>
                <span className="text-xs font-bold text-white font-mono">100% SECURE & TRANSLATABLE SYSTEM</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (Takes 4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase font-mono">دسترسی سریع</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium font-modam">
              <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="text-slate-400 hover:text-cyan-400 transition-colors py-1">سرویس‌های طراحی</a>
              <a href="#why-us" onClick={(e) => handleScrollTo(e, "#why-us")} className="text-slate-400 hover:text-cyan-400 transition-colors py-1">چه فرقی داریم؟</a>
              <a href="#roi-calculator" onClick={(e) => handleScrollTo(e, "#roi-calculator")} className="text-slate-400 hover:text-cyan-400 transition-colors py-1">شبیه‌ساز رشد فروش</a>
              <a href="#portfolio" onClick={(e) => handleScrollTo(e, "#portfolio")} className="text-slate-400 hover:text-cyan-400 transition-colors py-1">نمونه‌کارها</a>
              <a href="#products" onClick={(e) => handleScrollTo(e, "#products")} className="text-slate-400 hover:text-cyan-400 transition-colors py-1">دوره های آموزشی</a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="text-slate-400 hover:text-cyan-400 transition-colors py-1">درخواست مشاوره</a>
            </div>
          </div>

          {/* Col 3: Direct Contact Information (Takes 3 cols) */}
          <div className="md:col-span-3 space-y-4 text-xs font-modam">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase font-mono">اطلاعات ارتباط مستقیم</h4>
            <div className="space-y-3">
              
              <div className="flex items-center gap-2.5 justify-end text-slate-400 hover:text-slate-200 transition-colors">
                <span className="font-mono">۰۹۱۲۰۱۷۰۴۷۴</span>
                <Phone className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="flex items-center gap-2.5 justify-end text-slate-400 hover:text-slate-200 transition-colors">
                <span className="font-mono">alizzart1@gmail.com</span>
                <Mail className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="flex items-center gap-2.5 justify-end text-slate-400">
                <span>تهران - ایران / پروژه‌های سراسر کشور</span>
                <MapPin className="w-4 h-4 text-cyan-400" />
              </div>

            </div>
          </div>

        </div>

        {/* Footer Sub bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-gray-500">
          <div className="flex gap-4 items-center">
            <span className="text-xs text-gray-400 font-modam">آی‌دی شبکه‌های اجتماعی علیرضا عبدی:</span>
            <div className="flex gap-3 text-cyan-400 text-xs">
              <a href="https://t.me/AlizWeb" target="_blank" className="hover:text-white transition-colors">Telegram</a>
              <span>•</span>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
              <span>•</span>
              <a href="https://instagram.com" target="_blank" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>

          <div className="text-center sm:text-left font-modam">
            <span>© {currentYear} تمامی حقوق مادی و معنوی محفوظ و متعلق به استراتژی رشد </span>
            <strong className="text-cyan-400 font-bold font-mono">AlizWeb</strong>
            <span> می‌باشد.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
