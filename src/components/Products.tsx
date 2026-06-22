/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COURSES } from "../data";
import { Course } from "../types";
import { Star, Clock, BookOpen, Check, ThumbsUp, Sparkles, ShoppingBag, ShieldAlert, ArrowLeft, Play, X, CheckCircle2 } from "lucide-react";

export default function Products() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");

  // Form State for Checkout Sim:
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [buySuccess, setBuySuccess] = useState(false);

  const formatPrice = (price: number) => {
    if (price === 0) return "رایگان";
    return price.toLocaleString("fa-IR") + " تومان";
  };

  const openCheckout = (course: Course) => {
    setSelectedCourse(course);
    setBuySuccess(false);
    setIsCheckoutOpen(true);
  };

  const openVideoIntro = (title: string) => {
    setVideoTitle(title);
    setIsVideoModalOpen(true);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    // Simulate payment process
    setBuySuccess(true);
    // Auto reset form after success view
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setBuySuccess(false);
  };

  return (
    <section id="products" className="py-24 bg-gray-900/40 relative overflow-hidden border-y border-white/5">
      {/* Decorative Radial Backgrounds */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-full border border-cyan-500/10">
            محصولات آموزشی و دیجیتال
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-morabba mt-4 mb-6 leading-tight">
            دانش تجربی من؛ در قالب دوره‌های مهارتی و پول‌ساز
          </h2>
          <p className="text-slate-400 font-modam text-sm max-w-xl mx-auto leading-relaxed">
            من فوت‌وفن‌های پشت‌پرده دیزاین، افزایش نرخ کارایی سبد خرید و ارتقای سئو که حاصل میلیاردها تومان فروش واقعی کارفرمایان است را بی‌واسطه به شما آموزش می‌دهم.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <motion.div
              key={course.id}
              id={`course-card-${course.id}`}
              className={`glass rounded-3xl overflow-hidden relative border transition-all duration-300 flex flex-col justify-between ${
                course.popular 
                  ? "border-cyan-500/30 cyan-glow shadow-cyan-500/5" 
                  : "border-white/5 hover:border-white/10"
              }`}
              whileHover={{ y: -6 }}
            >
              {/* If popular banner */}
              {course.popular && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-gray-900" />
                  <span>دوره پرچم‌دار</span>
                </div>
              )}

              {/* Course Top Content */}
              <div className="p-6 text-right space-y-4">
                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/65 px-2.5 py-1 rounded-md">
                  {course.tag}
                </span>

                <h3 className="text-lg font-black font-morabba text-white leading-tight min-h-[50px] flex items-center">
                  {course.title}
                </h3>

                <p className="text-[11px] text-gray-400 leading-relaxed font-modam min-h-[80px]">
                  {course.description}
                </p>

                {/* Micro KPIs (Length, ratings, chapters) */}
                <div className="grid grid-cols-3 gap-2 border-y border-white/5 py-3 text-[10px] text-gray-400 font-mono">
                  <div className="text-center flex flex-col items-center gap-1 border-l border-white/5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="text-center flex flex-col items-center gap-1 border-l border-white/5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{course.chapters} فصل کاربردی</span>
                  </div>
                  <div className="text-center flex flex-col items-center gap-1">
                    <div className="flex items-center gap-0.5 text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{course.rating}</span>
                    </div>
                    <span>امتیاز کارجویان</span>
                  </div>
                </div>

                {/* Features checklist */}
                <div className="space-y-2 pt-2">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex gap-2 items-center text-[11px] text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Purchase Action Row */}
              <div className="p-6 bg-gray-900/40 border-t border-white/5 flex items-center justify-between">
                <div>
                  {course.originalPrice > course.salePrice && (
                    <span className="text-[10px] text-gray-500 line-through block font-mono">
                      {course.originalPrice.toLocaleString("fa-IR")}
                    </span>
                  )}
                  <span className={`text-base font-black ${course.salePrice === 0 ? "text-emerald-400" : "text-white"} font-mono`}>
                    {formatPrice(course.salePrice)}
                  </span>
                </div>

                <div className="flex gap-2">
                  {/* View Promo Button */}
                  <button
                    onClick={() => openVideoIntro(course.title)}
                    className="p-2.5 rounded-xl bg-gray-800 text-gray-300 hover:text-white border border-white/5 hover:bg-gray-700 transition-all"
                    id={`intro-teaser-btn-${course.id}`}
                    title="مشاهده تریلر معرفی"
                  >
                    <Play className="w-3.5 h-3.5 fill-gray-300" />
                  </button>

                  <button
                    onClick={() => openCheckout(course)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      course.popular
                        ? "bg-cyan-500 hover:bg-cyan-400 text-gray-950"
                        : "bg-gray-800 hover:bg-gray-700 border border-white/10 text-white"
                    }`}
                    id={`buy-course-btn-${course.id}`}
                  >
                    خرید آنی دوره
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Video Teaser Modal Simulation */}
        <AnimatePresence>
          {isVideoModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md">
              <motion.div
                className="w-full max-w-2xl bg-gray-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative text-right"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white font-morabba">نمایش تیزر معرفی: {videoTitle}</h4>
                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Simulated Player */}
                <div className="aspect-video bg-gray-950 relative flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80')" }}></div>
                  
                  {/* Glowing custom play circle icon */}
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center cursor-pointer animate-pink-glow z-10 hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 text-cyan-400 fill-cyan-400 translate-x-[-1px]" />
                  </div>
                  <span className="text-xs text-slate-400 mt-4 font-modam z-10">این یک شبیه‌ساز ویدیو است. پس از خرید مستقیماً باز می‌شود.</span>
                </div>

                <div className="p-4 bg-gray-950 text-left">
                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="px-4 py-2 bg-gray-800 text-xs text-white rounded-lg hover:bg-gray-700"
                  >
                    بستن پنجره زمان تریلر
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Checkout Purchase Modal Simulation */}
        <AnimatePresence>
          {isCheckoutOpen && selectedCourse && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md">
              <motion.div
                className="w-full max-w-md bg-gray-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative text-right"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                id="checkout-simulation-modal"
              >
                {/* Modal Header */}
                <div className="p-5 border-b border-white/5 flex items-center justify-between bg-gray-950">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-400 font-mono block">CHECKOUT INVOICE</span>
                    <h4 className="text-sm font-bold text-white font-morabba">ثبت‌نام و خرید مستقیم</h4>
                  </div>
                  <button
                    onClick={handleCloseCheckout}
                    className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6">
                  {buySuccess ? (
                    /* Successful payment screen */
                    <motion.div
                      className="text-center py-6 space-y-4"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h5 className="text-lg font-bold font-morabba text-white">تراکنش موفقیت‌آمیز در شبیه‌ساز!</h5>
                      <p className="text-xs text-slate-300 font-modam leading-relaxed px-4">
                        جناب آقا/خانم <strong className="text-white">{fullName}</strong>، لینک دسترسی به فصل‌های دوره <strong className="text-cyan-400">"{selectedCourse.title}"</strong> برای شماره تلفن <strong className="text-white">{phone}</strong> ارسال گردید. به جمع دانشجویان خلاق آلیزوب خوش آمدید!
                      </p>
                      
                      <div className="p-4 bg-gray-950 rounded-xl space-y-2 border border-white/5 text-[11px] font-mono text-gray-400 text-right">
                        <div className="flex justify-between">
                          <span>شناسه ارجاع تراکنش:</span>
                          <span className="text-white">TRX91082-AZ</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ملغ تسویه شده (مستند):</span>
                          <span className="text-emerald-400 font-bold">{formatPrice(selectedCourse.salePrice)}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleCloseCheckout}
                        className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-xs rounded-xl transition-all w-full mt-4"
                      >
                        فهمیدم، بازگشت به سایت اصلی
                      </button>
                    </motion.div>
                  ) : (
                    /* Standard Checkout Form */
                    <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                      
                      {/* Product Preview details */}
                      <div className="bg-gray-950 p-4 rounded-xl border border-white/5">
                        <span className="text-[10.5px] text-gray-400 font-modam font-semibold">محصول انتخابی شما:</span>
                        <h5 className="text-sm font-bold text-white mt-1 font-morabba">{selectedCourse.title}</h5>
                        <div className="flex items-center justify-between border-t border-white/5 mt-3 pt-2 text-xs font-mono">
                          <span className="text-gray-400">قیمت نهایی قابل پرداخت:</span>
                          <span className="text-emerald-400 font-black">{formatPrice(selectedCourse.salePrice)}</span>
                        </div>
                      </div>

                      {/* Inputs */}
                      <div className="space-y-1.5 text-right">
                        <label className="text-xs text-slate-300 font-medium font-modam">نام و نام خانوادگی شما:</label>
                        <input
                          type="text"
                          required
                          placeholder="مثال: علی رضایی"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full text-sm bg-gray-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5 text-right">
                        <label className="text-xs text-slate-300 font-medium font-modam">شماره تلفن همراه (جهت پیامک دسترسی):</label>
                        <input
                          type="tel"
                          required
                          placeholder="مثال: 09123456789"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full text-sm bg-gray-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 outline-none text-left font-mono"
                          dir="ltr"
                        />
                      </div>

                      <div className="space-y-1.5 text-right flex flex-col">
                        <label className="text-xs text-slate-300 font-medium font-modam">آدرس ایمیل (اختیاری):</label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full text-sm bg-gray-950 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500 outline-none text-left font-mono"
                          dir="ltr"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-l from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-gray-950 font-bold text-xs sm:text-sm rounded-xl hover:shadow-lg hover:shadow-cyan-500/10 transition-all mt-4"
                      >
                        اتصال به درگاه و شبیه‌سازی پرداخت
                      </button>

                      <div className="text-center text-[10.5px] text-gray-500 leading-normal block">
                        🔒 این یک فرآیند شبیه‌سازی است. اطلاعات کارت بانکی واقعی نیاز نیست.
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
