/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShieldAlert, Zap, TrendingUp, HelpCircle, LineChart, Globe, Trophy } from "lucide-react";

export default function WhyUs() {
  const cards = [
    {
      icon: <LineChart className="w-8 h-8 text-cyan-400" />,
      title: "زیبایی بدون استراتژی بی‌فایده است",
      subtitle: "حس خوب خرید به جای تزئینات آزاردهنده",
      description: "اکثر طراحان به زیبایی ظاهری توجه می‌کنند اما سایت زیبایی که فرم ثبت‌سفارش پیچیده‌ای دارد هرگز نمی‌فروشد. دیزاین ما بر پایه داده‌های رفتارشناسی مشتری ایرانی بنا شده است.",
      badge: "طراحی بر پایه آمار",
      glowColor: "cyan"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      title: "سئو، فرشته نجات بیزینس هاست",
      subtitle: "کاهش ۹۰٪ هزینه‌های جاری تبلیغاتی",
      description: "ما ساختار فنی کل وب سایت را به صورت آماده در کلمات پربازدید سئو گوگل بهینه‌سازی می‌کنیم. مشتری فعال در لحظه‌ای که نیاز دارد نام برند شما را با اقتدار لمس خواهد کرد.",
      badge: "تضمین رتبه ۱ گوگل",
      glowColor: "emerald"
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "سرعت لود، پادشاه مخفی نرخ تبدیل",
      subtitle: "هر ۱ ثانیه تاخیر یعنی ۷٪ فروش کمتر",
      description: "کدهای اضافه و قالب‌های سنگین آماده، دشمن کارایی سایت هستند. ساختار بهینه‌سازی فنی ما لرزش عجیبی روی بارگذاری سریع ایجاد می‌کند که خروجی آن افزایش سرعت فوق‌العاده است.",
      badge: "سرعت زیر ۱.۵ ثانیه",
      glowColor: "amber"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "یکپارچگی و سادگی سیستم مدیریت",
      subtitle: "آماده برای آینده بدون وابستگی مجدد",
      description: "سایت‌های لوکس ما چه روی بستر وردپرس پیشرفته و چه با فریم‌ورک‌های مدرن headless ساخته شده باشند، مدیریت محصولات را توسط کادر داخلی بیزینس شما مثل آب خوردن می‌کنند.",
      badge: "پنل مدیریت فارسی روان",
      glowColor: "cyan"
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-gray-950 relatif overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Why AlizWeb Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-emerald-400 bg-emerald-950/50 px-3 py-1.5 rounded-full border border-emerald-500/10">
            فلسفه تمایز AlizWeb
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-morabba mt-4 mb-6 leading-tight">
            چرا تفاوت چشمگیری بین <span className="text-cyan-400">یک طراح ساده</span> و{" "}
            <span className="text-emerald-400">علیـرزا عبدی</span> وجود دارد؟
          </h2>
          <p className="text-slate-400 font-modam text-sm max-w-xl mx-auto leading-relaxed">
            کارفرمایان ما به دنبال یک کارت ویزیت آنلاین نیستند؛ آن‌ها خواهان یک شریک استراتژیک هستند که دغدغه فروش، مارکتینگ و توسعه بیزینس آن‌ها را داشته باشد.
          </p>
        </div>

        {/* Bento Grid Design Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              id={`why-card-${idx}`}
              className="glass p-8 rounded-3xl border-white/5 relative group hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              {/* Outer top highlight card overlay */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>

              <div>
                {/* Icon row & badge detail */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-gray-900 border border-white/5 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-3 py-1 bg-gray-900 border ${
                    card.glowColor === "emerald" 
                      ? "border-emerald-500/20 text-emerald-400" 
                      : card.glowColor === "amber" 
                      ? "border-amber-500/20 text-amber-400" 
                      : "border-cyan-500/20 text-cyan-400"
                  } rounded-full`}>
                    {card.badge}
                  </span>
                </div>

                <span className="text-xs font-mono text-gray-500 block leading-none mb-1">
                  {card.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white font-morabba leading-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 font-modam leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Graphic mini element mimicking micro metrics */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-400">تاثیر فنی روی بیزینس:</span>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold font-mono">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>تضمین‌شده در قرارداد نویسی رسمی</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Banner (Center Callout) */}
        <motion.div
          className="mt-16 bg-gradient-to-tr from-cyan-950/20 via-gray-900/60 to-emerald-950/20 border border-cyan-500/10 p-6 sm:p-8 rounded-3xl text-center relative overflow-hidden"
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="philosophy-quote-banner"
        >
          {/* Decorative glowing backdrops */}
          <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-cyan-500/10 blur-xl pointer-events-none"></div>

          <p className="text-base sm:text-lg font-morabba italic text-slate-100 max-w-4xl mx-auto leading-relaxed">
            «تفاوت یک طراحی ۳۰ میلیون تومانی معمولی با یک سرمایه‌گذاری ۱۵۰ میلیونی، در شکل دکمه‌ها نیست! تفاوت اصلی در فهم روان‌شناسی ترغیب مخاطب ایرانی، فرمول‌های سئو تکنیکال و بومی‌سازی فرآیند سفارش است که بلافاصله نرخ سود عملیاتی بیزینس را افزایش می‌دهد.»
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-7 h-7 rounded-full bg-cyan-900 flex items-center justify-center border border-cyan-500/30">
              <span className="text-[10px] font-bold text-cyan-300">ع</span>
            </div>
            <span className="text-xs font-semibold text-cyan-300">علیرضا عبدی - مدیر برند شخصی AlizWeb</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
