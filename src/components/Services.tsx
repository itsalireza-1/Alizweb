/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";
import { Service } from "../types";
import { ShoppingBag, TrendingUp, Layout, Zap, Check, ArrowLeft, Star, Clock } from "lucide-react";

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("ecommerce");

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const getIcon = (iconName: string, active: boolean) => {
    const colorClass = active ? "text-gray-950" : "text-cyan-400";
    switch (iconName) {
      case "ShoppingBag":
        return <ShoppingBag className={`w-6 h-6 ${colorClass}`} />;
      case "TrendingUp":
        return <TrendingUp className={`w-6 h-6 ${colorClass}`} />;
      case "Layout":
        return <Layout className={`w-6 h-6 ${colorClass}`} />;
      case "Zap":
        return <Zap className={`w-6 h-6 ${colorClass}`} />;
      default:
        return <ShoppingBag className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  const handleServiceSelect = (id: string) => {
    setSelectedServiceId(id);
  };

  const handleCtaClick = (serviceTitle: string) => {
    const contactFormSection = document.querySelector("#contact");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
      // Inject selected service message into the consultation textarea
      const textarea = document.getElementById("message-input") as HTMLTextAreaElement;
      if (textarea) {
        textarea.value = `سلام. من علاقه‌مند به دریافت اطلاعات و فاز اجرایی برای "${serviceTitle}" هستم. لطفا مرا در جلسه مشاوره راهنمایی کنید.`;
      }
      const selectElement = document.getElementById("service-select") as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = selectedServiceId;
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-right max-w-3xl md:mr-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 bg-cyan-950/50 px-3 py-1.5 rounded-full border border-cyan-500/10">
            خدمات AlizWeb
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-morabba mt-4 mb-6">
            من چه بازوهای کمکی برای کسب‌وکار شما دارم؟
          </h2>
          <p className="text-slate-400 font-modam text-sm leading-relaxed">
            من تلاش می‌کنم که پتانسیل مخفی سودآوری بیزینس فعلی یا فروشگاه جدید شما را فعال کنم. هر سرویس بر اساس پارامترهای تاییدشده فروش بومی طراحی می‌شود.
          </p>
        </div>

        {/* Services Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Vertical Tabs List (Takes 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {SERVICES.map((service) => {
              const isActive = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  id={`service-tab-${service.id}`}
                  className={`w-full text-right p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                    isActive
                      ? "bg-gradient-to-l from-cyan-500 to-cyan-600 border-cyan-400 shadow-xl shadow-cyan-500/10 text-gray-950 translate-x-1"
                      : "bg-gray-900/60 border-white/5 hover:border-white/10 hover:bg-gray-900 text-slate-300"
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isActive ? "bg-white/20" : "bg-cyan-950/50 border border-cyan-500/10"}`}>
                    {getIcon(service.icon, isActive)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-medium ${isActive ? "text-gray-900" : "text-cyan-400"}`}>
                        {service.englishTitle}
                      </span>
                    </div>
                    <h3 className="text-base font-bold font-morabba mt-1">{service.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Interactive Details Panel (Takes 7 cols) */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedServiceId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="glass p-6 sm:p-8 rounded-3xl border-white/5 relative flex flex-col justify-between min-h-[520px]"
                id="service-details-panel"
              >
                {/* Visual Top Accent Decors */}
                <div className="absolute top-0 left-0 bg-cyan-500/10 w-24 h-24 rounded-bl-3xl blur-md pointer-events-none"></div>

                <div>
                  {/* Category Header with Key Metric Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold">{currentService.englishTitle}</span>
                      <h4 className="text-xl sm:text-2xl font-black font-morabba text-white mt-1">
                        {currentService.title}
                      </h4>
                    </div>
                    <div className="bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-emerald-400 flex items-center gap-2">
                      <Star className="w-4 h-4 fill-emerald-400 animate-spin-slow" />
                      <span className="text-xs font-semibold font-modam">{currentService.metrics}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 font-modam text-sm leading-relaxed mb-8">
                    {currentService.description}
                  </p>

                  {/* Core Value Outcomes Checklist */}
                  <div className="mb-8">
                    <h5 className="text-xs font-bold text-gray-400 tracking-wider mb-4 font-mono">
                      دستاوردهای عینی این راهکار برای کسب‌وکار شما:
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {currentService.outcomes.map((outcome, index) => (
                        <li key={index} className="flex gap-2.5 items-start text-xs text-slate-300 leading-relaxed text-right">
                          <div className="mt-1 w-4 h-4 rounded-full bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-cyan-400" />
                          </div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Horizontal Execution Process Steps */}
                  <div className="border-t border-white/5 pt-6 mb-8">
                    <h5 className="text-xs font-bold text-gray-400 tracking-wider mb-4 font-mono flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      مراحل دقیق اجرای این سرویس علمی:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      {currentService.processSteps.map((step, idx) => (
                        <div key={idx} className="relative text-right bg-white/2 p-3.5 rounded-xl border border-white/5">
                          <span className="absolute top-2 left-2 text-lg font-black font-mono text-cyan-500/20">
                            ۰{idx + 1}
                          </span>
                          <h6 className="text-[11px] font-bold text-white mb-1 leading-normal">
                            {step.title}
                          </h6>
                          <p className="text-[10px] text-gray-400 leading-normal">
                            {step.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Footer CTA */}
                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400">نیاز به هماهنگی پروژه دارید؟</span>
                    <p className="text-xs text-white">جلسه ۱۵ دقیقه‌ای مشاوره تصویری رزرو کنید</p>
                  </div>
                  <button
                    onClick={() => handleCtaClick(currentService.title)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 hover:scale-[1.02] transform transition-all group duration-300 self-stretch sm:self-auto justify-center"
                    id={`order-${currentService.id}-btn`}
                  >
                    <span>رزرو فاز تحلیل این پروژه</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
