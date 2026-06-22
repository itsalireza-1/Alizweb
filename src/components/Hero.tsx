/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, TrendingUp, Users, Target, ShieldCheck, ShoppingCart } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center bg-gray-950"
    >
      {/* Background radial glowing effects */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] animate-slow-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] animate-slow-pulse pointer-events-none"></div>

      {/* Decorative cyber grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#02233c09_1px,transparent_1px),linear-gradient(to_bottom,#02233c09_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left/First Content (Right-to-Left, so text is right column) */}
          <div className="lg:col-span-7 text-right flex flex-col justify-center">
            
            {/* Elegant Tagline */}
            <motion.div
              className="inline-flex items-center gap-2 bg-cyan-950/40 border border-cyan-500/20 px-4 py-2 rounded-full w-fit mb-6 self-start transform transition-transform"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold text-cyan-300 font-modam">
                رویکرد مهندسی رشد بیزینس و سئو اختصاصی
              </span>
            </motion.div>

            {/* Main Premium Typography Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.3] font-morabba tracking-tight mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              طراحی وب‌سایت‌هایی که فرآیند{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-emerald-400 text-glow-cyan">
                فروش شما را متحول می‌کنند
              </span>
            </motion.h1>

            {/* Core Brand Message (Ceiling limit of positioning) */}
            <motion.p
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-modam max-w-2xl mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              من فقط وب‌سایت طراحی نمی‌کنم. من با تلفیق عمیق <strong className="text-cyan-400 font-semibold">شناخت بیزینس، روان‌شناسی خرید، سئو تکنیکال و تجربه کاربری لوکس</strong>، یک ماشین رشد دیجیتالی برای شما مهندسی می‌کنم تا مشتریان عاشق خرید از شما شوند.
            </motion.p>

            {/* Call to Actions Interaction */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12 self-start w-full sm:w-auto"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-l from-cyan-400 via-cyan-500 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-gray-950 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <span>شروع پروژه و مشاوره رایگان</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>

              <a
                href="#products"
                onClick={(e) => handleScrollTo(e, "#products")}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gray-900 border border-white/10 hover:border-cyan-500/40 hover:bg-white/5 transition-all duration-300"
              >
                <span>مشاهده محصولات دیجیتال</span>
                <span className="py-0.5 px-2 bg-emerald-950 border border-emerald-500/30 text-emerald-400 rounded-full text-[10px] font-mono">
                  جدید
                </span>
              </a>
            </motion.div>

            {/* Quick social proof metrics badges in inline-flex */}
            <motion.div
              className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 max-w-xl text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div>
                <dt className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">+۶۰</dt>
                <dd className="text-xs text-gray-400 mt-1 font-modam">پروژه موفق فروشگاهی و دیزاین</dd>
              </div>
              <div>
                <dt className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">۳.۸٪</dt>
                <dd className="text-xs text-gray-400 mt-1 font-modam">میانگین نرخ تبدیلِ سایت‌های ساخته‌شده</dd>
              </div>
              <div>
                <dt className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">۲.۳X</dt>
                <dd className="text-xs text-gray-400 mt-1 font-modam">افزایش متوسط فروش کارفرمایان</dd>
              </div>
            </motion.div>

          </div>

          {/* Interactive Mockups Col (Visual Depth, Parallax, device representation) */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0 flex justify-center">
            
            {/* Interactive floating indicator card: conversion */}
            <motion.div
              className="absolute -top-6 -right-6 z-20 glass p-4 rounded-2xl flex items-center gap-3 shadow-2xl border-cyan-500/20 max-w-sm"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
                <Target className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400">بهینه‌سازی نرخ تبدیل (CRO)</p>
                <h4 className="text-sm font-bold text-white font-mono">+۴۱۲٪ رشد ارگانیک پیوسته</h4>
              </div>
            </motion.div>

            {/* Interactive floating indicator card: checkout */}
            <motion.div
              className="absolute -bottom-8 -left-6 z-20 glass p-4 rounded-2xl flex items-center gap-3 shadow-2xl border-emerald-500/20 max-w-sm"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-950 flex items-center justify-center border border-emerald-500/30 animate-pulse">
                <ShoppingCart className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400">تراکنش موفق جهان‌کالا</p>
                <h4 className="text-sm font-bold text-white font-mono">۴۸,۹۰۰,۰۰۰ تومان</h4>
              </div>
            </motion.div>

            {/* Outer premium tablet/desktop container frame */}
            <motion.div
              className="relative rounded-2xl overflow-hidden p-[1px] bg-gradient-to-tr from-cyan-500/30 via-transparent to-white/10 w-full max-w-[480px] hover:shadow-cyan-500/10 cursor-pointer text-center group"
              id="hero-media-wrapper"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {/* Glass overlay border styling */}
              <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-[4/3] relative">
                {/* Header of the mock browser */}
                <div className="bg-gray-950 h-8 border-b border-white/5 px-4 flex items-center gap-1.5 justify-end">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors"></div>
                </div>

                <img
                  src="/src/assets/images/alizweb_hero_dashboard_1782161602424.jpg"
                  alt="داشبورد فروشگاهی پیشرفته و بهینه‌شده علیزوب"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Cyber style scanning effect line overlay */}
                <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-0 animate-[bounce_8s_infinite] opacity-60 pointer-events-none"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent pointer-events-none"></div>

                {/* Badge specifying WordPress Integration */}
                <div className="absolute bottom-4 right-4 glass px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] text-gray-200 font-mono">SECURE WORDPRESS CORE v6+</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive floating indicator card: growth speed */}
            <motion.div
              className="absolute top-1/2 -left-12 z-20 glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl border-cyan-500/20 scale-90 sm:scale-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] font-bold text-gray-200">سرعت لود اول طوفانی: ۱.۲ ثانیه</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
