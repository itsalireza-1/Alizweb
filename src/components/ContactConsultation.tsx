/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileQuestion, PhoneCall, Sparkles, Send, CheckCircle2, User, Phone, Globe, MessageSquare, Briefcase, Calendar } from "lucide-react";

export default function ContactConsultation() {
  const [step, setStep] = useState<number>(1);
  
  // Field States:
  const [bizGoal, setBizGoal] = useState<string>("ecommerce");
  const [hasWebsite, setHasWebsite] = useState<string>("no");
  const [currentSales, setCurrentSales] = useState<string>("zero");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("لطفاً نام و شماره همراه خود را پر نمایید.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gray-900/60 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-cyan-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[10%] w-[350px] h-[350px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-full border border-cyan-500/10">
            جلسه مشاوره استراتژیک (رایگان)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-morabba mt-4 mb-4">
            آماده تحول در درآمد آنلاین خود هستید؟
          </h2>
          <p className="text-slate-400 font-modam text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            من برای جلسات رایگان ماهانه ظرفیت محدودی دارم. لطفاً فرم مراحل زیر را با دقت پر کنید تا رفتار بیزینس شما را قبل از اولین برخورد بررسی کنیم.
          </p>
        </div>

        {/* Interactive Consultation Form Panel */}
        <div className="glass p-6 sm:p-10 rounded-3xl border-white/5 relative overflow-hidden" id="consultation-wizard-panel">
          
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-400"></div>

          {isSubmitted ? (
            /* Successful submission views */
            <motion.div
              className="text-center py-10 space-y-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="w-20 h-20 bg-emerald-950 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black font-morabba text-white">درخواست شما با موفقیت ثبت شد!</h3>
                <p className="text-sm font-modam text-cyan-300">شناسه پیگیری فاز صفر کسب‌وکار شما: FA-AZ-1142</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-modam max-w-xl mx-auto px-2">
                جناب آقا/خانم <strong className="text-white font-semibold">{fullName}</strong>، اطلاعات اولیه تحلیل بیزینس شما به سرورهای علیرضا عبدی (آلیزوب) مخابره شد. از زمان فعلی، من پژوهش‌های مقدماتی روی رقبا را شروع می‌کنم و تا حداکثر <strong className="text-cyan-400 font-semibold">۲۴ ساعت آینده</strong> برای هماهنگی زمان دقیق مکالمه در تلگرام یا تماس تلفنی با شما ارتباط برقرار خواهم کرد.
              </p>

              <div className="p-4 bg-gray-950/60 border border-cyan-500/10 rounded-2xl max-w-sm mx-auto text-right text-xs space-y-2 text-slate-400 font-mono">
                <div className="flex justify-between">
                  <span>نوع پروژه درخواستی:</span>
                  <span className="text-white font-bold">
                    {bizGoal === "ecommerce" ? "طراحی سایت فروشگاهی اختصاصی" :
                     bizGoal === "seo" ? "خدمات تخصصی سئو و گوگل" :
                     bizGoal === "uiux" ? "طراحی تجربه و رابط کاربری" : "بازطراحی و بهینه‌سازی نرخ تبدیل"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>شماره همرا ثبت شده:</span>
                  <span className="text-white">{phone}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFullName("");
                  setPhone("");
                  setDesc("");
                }}
                className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-xs text-white rounded-xl font-medium transition-colors"
              >
                ثبت مجدد یک فرم جدید دیگر
              </button>
            </motion.div>
          ) : (
            /* Multi step form wizard rendering */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Steps Progress Visualizer */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <span className="text-xs text-gray-400 font-mono">STEP {step} OF 3</span>
                <div className="flex gap-1.5">
                  <div className={`w-12 h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? "bg-cyan-500" : "bg-gray-800"}`}></div>
                  <div className={`w-12 h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? "bg-cyan-500" : "bg-gray-800"}`}></div>
                  <div className={`w-12 h-1.5 rounded-full transition-all duration-300 ${step >= 3 ? "bg-cyan-500" : "bg-gray-800"}`}></div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  /* Step 1: Goals questionnaire */
                  <motion.div
                    key="step-1"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-5"
                  >
                    <h3 className="text-lg font-black font-morabba text-white text-right">۱. هدف اصلی شما برای شروع این پروژه چیست؟</h3>
                    <p className="text-xs text-gray-400 text-right font-modam">نوع کمکی که برند آلیزوب قرار است به شما برساند را انتخاب کنید:</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: "ecommerce", title: "طراحی سایت فروشگاهی اختصاصی", desc: "افزایش فروش، درگاه امن، تسویه‌حساب آسان" },
                        { id: "seo", title: "بهینه‌سازی سئو و حضور در صفحه اول گوگل", desc: "جریان ارگانیک مشتریان هدف آماده خرید" },
                        { id: "uiux", title: "طراحی رابط و تجربه کاربری (Figma)", desc: "ساخت دیزاین‌سیستم و تجربه لوکس از صفر" },
                        { id: "redesign", title: "بازطراحی و بهینه‌سازی نرخ تبدیل (CRO)", desc: "ارتقای سایت فعلی و افزایش متناوب نرخ کارایی" }
                      ].map((goalItem) => (
                        <button
                          type="button"
                          key={goalItem.id}
                          onClick={() => setBizGoal(goalItem.id)}
                          className={`p-4 rounded-2xl text-right border transition-all ${
                            bizGoal === goalItem.id
                              ? "bg-cyan-950/40 border-cyan-500 text-white shadow-xl shadow-cyan-500/5"
                              : "bg-gray-900/30 border-white/5 hover:border-white/10 text-slate-300"
                          }`}
                        >
                          <span className="text-sm font-bold block mb-1 font-morabba">{goalItem.title}</span>
                          <span className="text-[10.5px] text-gray-400 font-modam leading-relaxed">{goalItem.desc}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  /* Step 2: Current business profile details */
                  <motion.div
                    key="step-2"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-6 text-right"
                  >
                    <h3 className="text-lg font-black font-morabba text-white">۲. وضعیت فعلی کسب‌وکار شما چگونه است؟</h3>

                    {/* Question A: has website? */}
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 font-mono">آیا سایت فعال دارید؟</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: "yes", label: "بله، سایت دارم" },
                          { id: "no", label: "خیر، سایت جدید است" },
                          { id: "redes", label: "در حال بازنویسی مجدد" }
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setHasWebsite(item.id)}
                            className={`py-3.5 rounded-xl text-xs font-semibold border transition-all ${
                              hasWebsite === item.id
                                ? "bg-cyan-950/40 border-cyan-500 text-white"
                                : "bg-gray-900/30 border-white/7 hover:border-white/10 text-gray-300"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question B: estimated sales */}
                    <div className="space-y-2 pt-2">
                      <label className="text-xs text-gray-400 font-mono">میزان میانگین فروش حدودی فعلی ماهانه:</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { id: "zero", label: "هنوز فروشی ندارم (شروع کار)" },
                          { id: "under50", label: "زیر ۵۰ میلیون تومان" },
                          { id: "above50", label: "بالای ۵۰ میلیون تومان در ماه" }
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setCurrentSales(item.id)}
                            className={`py-3.5 rounded-xl text-xs font-semibold border transition-all ${
                              currentSales === item.id
                                ? "bg-cyan-950/40 border-cyan-500 text-white"
                                : "bg-gray-900/30 border-white/7 hover:border-white/10 text-gray-300"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                )}

                {step === 3 && (
                  /* Step 3: Contact details */
                  <motion.div
                    key="step-3"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    className="space-y-4 text-right"
                  >
                    <h3 className="text-lg font-black font-morabba text-white">۳. ثبت مشخصات ارتباط کارشناسانه</h3>
                    <p className="text-xs text-gray-400 font-modam leading-normal">لطفاً اطلاعات زیر را صحیح وارد کنید تا در پیام‌رسان‌ها یا تلفن مستقیم با شما تماس بگیریم:</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-300 font-modam flex items-center gap-1.5 justify-end">
                          <User className="w-3.5 h-3.5 text-cyan-400" />
                          <span>نام و نام خانوادگی شما</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          placeholder="مثال: علیرضا عبدی"
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full text-sm bg-gray-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs text-slate-300 font-modam flex items-center gap-1.5 justify-end">
                          <Phone className="w-3.5 h-3.5 text-cyan-400" />
                          <span>شماره تماس (ترجیحاً دارای تلگرام/واتساپ)</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          placeholder="مثال: 09121234567"
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full text-sm bg-gray-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none text-left font-mono"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-slate-300 font-modam flex items-center gap-1.5 justify-end">
                        <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                        <span>توضیحات اختیاری درباره کسب‌وکار یا وب‌سایت شما:</span>
                      </label>
                      <textarea
                        id="message-input"
                        rows={4}
                        value={desc}
                        placeholder="در چند جمله کوتاه بفرمایید چه محصولی می‌فروشید و دوست دارید فروشگاه جدید چطور باشد..."
                        onChange={(e) => setDesc(e.target.value)}
                        className="w-full text-sm bg-gray-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none resize-none"
                      ></textarea>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

              {/* Wizard Nav Actions */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 rounded-xl bg-gray-800 text-xs font-semibold text-gray-300 hover:text-white transition-all"
                    >
                      مرحله قبلی
                    </button>
                  )}
                </div>

                <div>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                    >
                      <span>ادامه فرآیند</span>
                      <span>→</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-l from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-gray-950 font-bold text-xs sm:text-sm shadow-md flex items-center gap-2"
                      id="submit-consultation-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>ثبت نهایی و ارسال درخواست</span>
                    </button>
                  )}
                </div>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
