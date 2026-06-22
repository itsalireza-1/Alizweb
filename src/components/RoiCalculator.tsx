/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, Award, Flame, Sparkles, AlertCircle, RefreshCw } from "lucide-react";

export default function RoiCalculator() {
  const [traffic, setTraffic] = useState<number>(15000);
  const [currentConvRate, setCurrentConvRate] = useState<number>(0.8);
  const [aov, setAov] = useState<number>(650000); // Average Order Value in Tomans
  const [solutionType, setSolutionType] = useState<"standard" | "premium">("premium");

  // AlizWeb target rates:
  // standard yields ~2.4% conversion
  // premium (advanced CRO & SEO cluster integration) yields ~4.8% conversion
  const targetConvRate = solutionType === "standard" ? 2.4 : 4.8;

  // Calculators:
  const currentOrders = Math.round(traffic * (currentConvRate / 100));
  const currentRevenue = currentOrders * aov;

  const targetOrders = Math.round(traffic * (targetConvRate / 100));
  const targetRevenue = targetOrders * aov;

  const revenueGrowth = targetRevenue - currentRevenue;
  const growthPercent = currentConvRate > 0 
    ? Math.round(((targetConvRate - currentConvRate) / currentConvRate) * 100)
    : 0;

  // Format Helper in Persian
  const formatPersianNumber = (num: number) => {
    return num.toLocaleString("fa-IR");
  };

  const handleReset = () => {
    setTraffic(15000);
    setCurrentConvRate(0.8);
    setAov(650000);
    setSolutionType("premium");
  };

  return (
    <section id="roi-calculator" className="py-24 bg-gray-900/60 relative overflow-hidden border-y border-white/5">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-full border border-cyan-500/10">
            شبیه‌ساز مالی و رشد سودآوری
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-morabba mt-4 mb-6">
            محاسبه‌گر میزان رشد درآمد با بهینه‌سازی نرخ تبدیل (CRO)
          </h2>
          <p className="text-slate-400 font-modam text-sm max-w-xl mx-auto leading-relaxed">
            اطلاعاتِ تقریبی بیزینس خود را در ابزار زیر مشخص کنید تا ببینید تغییر در طراحی و بالا رفتن سرعت سایت چگونه جریان فروش مستقیم شما را متحول می‌کند.
          </p>
        </div>

        {/* Calculator Main Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Input Fields (Takes 7 Cols) */}
          <div className="lg:col-span-7 glass p-6 sm:p-8 rounded-3xl border-white/5 flex flex-col justify-between">
            <div className="space-y-8">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-sm font-semibold text-white font-morabba flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  ورودی‌های تخمینی بیزینس شما
                </span>
                <button
                  onClick={handleReset}
                  className="p-1 text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors font-modam"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  تنظیم مجدد
                </button>
              </div>

              {/* Slider 1: Traffic */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <label className="text-slate-200 font-medium font-modam">ترافیک یا بازدیدکننده ماهانه سایت:</label>
                  <span className="font-mono text-cyan-400 font-bold text-base bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-lg">
                    {formatPersianNumber(traffic)} نفر
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-gray-800 accent-cyan-500 cursor-pointer"
                  id="traffic-slider"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>۱ هزار نفر</span>
                  <span>۵۰ هزار نفر</span>
                  <span>۱۰۰ هزار نفر</span>
                </div>
              </div>

              {/* Slider 2: Current Conv Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <label className="text-slate-200 font-medium font-modam">نرخ تبدیل فعلی فروش سایت (معمولاً زیر ۱٪):</label>
                  <span className="font-mono text-amber-400 font-bold text-base bg-amber-950/40 border border-amber-500/20 px-3 py-1 rounded-lg">
                    {formatPersianNumber(currentConvRate)} ٪
                  </span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="5"
                  step="0.1"
                  value={currentConvRate}
                  onChange={(e) => setCurrentConvRate(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-gray-800 accent-amber-500 cursor-pointer"
                  id="conversion-slider"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>۰.۱ ٪ (سبد خرید ناتمام)</span>
                  <span>۲.۵ ٪</span>
                  <span>۵ ٪ (عالی)</span>
                </div>
              </div>

              {/* Slider 3: Average Order Value (AOV) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <label className="text-slate-200 font-medium font-modam">میانگین ارزش سبد خرید خرید تکی هر مشتری:</label>
                  <span className="font-mono text-cyan-400 font-bold text-base bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-lg">
                    {formatPersianNumber(aov)} تومان
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="5000000"
                  step="50000"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-gray-800 accent-cyan-500 cursor-pointer"
                  id="aov-slider"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>۱۰۰ هزار تومان</span>
                  <span>۲.۵ میلیون تومان</span>
                  <span>۵ میلیون تومان</span>
                </div>
              </div>

              {/* Choice of Solution */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <label className="text-xs font-bold text-gray-400 tracking-wider block font-mono">
                  رویکرد بازطراحی و مهندسی رشد آلیزوب:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setSolutionType("standard")}
                    className={`p-4 rounded-xl text-right border transition-all ${
                      solutionType === "standard"
                        ? "bg-cyan-950/40 border-cyan-500 text-white"
                        : "bg-gray-900/40 border-white/5 hover:border-white/10 text-gray-400"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-bold font-morabba text-white">طراحی استاندارد عـالی</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-cyan-900/60 text-cyan-400 rounded-full font-mono">
                        نرخ هدف: ۲.۴٪
                      </span>
                    </div>
                    <p className="text-[10.5px] leading-relaxed text-gray-400">بهینه‌سازی قالب، افزایش سرعت، بهینه‌سازی فرم موبایل</p>
                  </button>

                  <button
                    onClick={() => setSolutionType("premium")}
                    className={`p-4 rounded-xl text-right border transition-all ${
                      solutionType === "premium"
                        ? "bg-gradient-to-tr from-cyan-950/60 to-emerald-950/60 border-cyan-500 text-white"
                        : "bg-gray-900/40 border-white/5 hover:border-white/10 text-gray-400"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-bold font-morabba text-white flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                        بازطراحی مهندسی و سئو عمیق
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-900/60 text-emerald-400 rounded-full font-mono">
                        نرخ هدف: ۴.۸٪
                      </span>
                    </div>
                    <p className="text-[10.5px] leading-relaxed text-gray-400">تحلیل رفتاری، بهینه‌سازی دائم قیف خرید، کمپین اتوماسیون، سئو</p>
                  </button>
                </div>
              </div>

            </div>

            <div className="mt-8 p-3 bg-cyan-950/20 border border-cyan-500/10 rounded-xl flex items-start gap-2 text-right">
              <AlertCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              <p className="text-[10.5px] text-cyan-300 leading-relaxed font-modam">
                این محاسبات بر مبنای استانداردهای بازاریابی و داده‌های آماری پروژه‌های طراحی شده توسط علیرضا عبدی است. رشد واقعی بر اساس محصول و برند شما تفاوت دارد.
              </p>
            </div>
          </div>

          {/* Right Results Dashboard (Takes 5 Cols, highly visual grid, glowing output metrics) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-cyan-950/30 via-gray-950 to-emerald-950/20 border border-cyan-500/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden text-right shadow-2xl">
            
            {/* Glossy radial blur inside col */}
            <div className="absolute top-0 right-0 bg-cyan-400/10 w-32 h-32 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <span className="text-xs text-gray-400 font-mono">نتایج ارتقای سیستم دیزاین و سئو</span>
              <h3 className="text-xl font-bold font-morabba text-white mt-1 border-b border-white/5 pb-4 mb-6">
                درآمد جدید شبیه‌سازی شده
              </h3>

              <div className="space-y-6">
                
                {/* Current vs Target Orders count */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400 font-modam">تعداد سفارش‌های ماهانه شما:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 line-through font-mono">({formatPersianNumber(currentOrders)})</span>
                    <span>←</span>
                    <span className="text-base font-bold text-cyan-400 font-mono">
                      {formatPersianNumber(targetOrders)} سفارش
                    </span>
                  </div>
                </div>

                {/* Sales growth percentage box */}
                <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-500/20 text-center relative overflow-hidden">
                  <span className="absolute top-2 right-2 text-3xl font-black font-mono text-emerald-500/10 leading-none">
                    📈
                  </span>
                  <span className="text-xs text-emerald-400 font-modam font-semibold">بزرگی رشد فروش تضمینی:</span>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 font-mono">
                    {formatPersianNumber(growthPercent)}٪ افزایش یافته
                  </p>
                </div>

                {/* Final Gross Sales Comparison */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>فروش ناخالص فعلی ماهانه:</span>
                    <span className="font-mono">{formatPersianNumber(currentRevenue)} تومان</span>
                  </div>
                  <div className="flex justify-between text-xs text-emerald-400">
                    <span>فروش ناخالص جدید ماهانه:</span>
                    <span className="font-bold font-mono text-sm">{formatPersianNumber(targetRevenue)} تومان</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Crux highlight metric: Revenue Increase */}
            <div className="mt-10 pt-6 border-t border-white/5 flex flex-col justify-end">
              <span className="text-xs font-semibold text-cyan-400 font-modam mb-1 block">
                مقداری که به حساب بانکی شما اضافه می‌شود:
              </span>
              <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 cyan-glow text-right">
                <span className="text-3xl font-black text-cyan-300 font-mono tracking-tight block">
                  +{formatPersianNumber(revenueGrowth)}
                  <span className="text-sm font-bold text-cyan-400 font-modam mr-1">تومان / ماهانه</span>
                </span>
                <span className="text-[10px] text-gray-400 font-mono mt-1 block">
                  ROI GAUGE IN TARGET TIMELINE
                </span>
              </div>

              {/* Instant Lead CTA interaction button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#contact");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    const textarea = document.getElementById("message-input") as HTMLTextAreaElement;
                    if (textarea) {
                      textarea.value = `سلام علیرضا. من با استفاده از محاسبه‌گر نرخ تبدیل سایت دیدم که پتانسیل کسب درآمد جدید ماهانه من حدود ${revenueGrowth.toLocaleString("fa-IR")} تومان است. می‌خواهم سایت قدیمی‌ام را بازطراحی کنیم تا به این رشد برسیم.`;
                    }
                  }
                }}
                className="w-full text-center py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-950 rounded-xl text-xs sm:text-sm font-bold shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/2 transition-all duration-300 mt-6"
                id="calc-convert-cta"
              >
                بزن بریم؛ این رشد را برای بیزینس من پیاده کن
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
