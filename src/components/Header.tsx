/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ArrowLeft, Sparkles } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "خانه", href: "#hero" },
    { name: "خدمات ما", href: "#services" },
    { name: "چرا علیزوب؟", href: "#why-us" },
    { name: "محاسبه‌گر رشد فروش", href: "#roi-calculator" },
    { name: "نمونه‌کارها", href: "#portfolio" },
    { name: "دوره‌های آموزشی", href: "#products" },
    { name: "نظرات کارفرمایان", href: "#testimonials" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-gray-950/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5"
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-500">
                <div className="w-full h-full bg-gray-950 rounded-[10.5px] flex items-center justify-center">
                  <span className="font-morabba font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">عل</span>
                </div>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-sans font-bold text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                  Aliz<span className="text-cyan-400">Web</span>
                </span>
                <span className="text-[9px] font-medium text-gray-400 tracking-tight -mt-1 font-mono">
                  GROWTH-ORIENTED AGENCY
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-900/40 p-1 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="px-4 py-2 rounded-full text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions Button */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20 flex items-center gap-1">
              <Sparkles className="w-32 h-3 w-3 text-cyan-400" />
              افزایش فروش تضمینی
            </span>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-gradient-to-l from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-gray-950 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transform transition-all duration-300"
              id="header-cta-btn"
            >
              <span>درخواست مشاوره رایگان</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            className="lg:hidden fixed inset-x-0 top-[73px] bg-gray-950/95 backdrop-blur-2xl border-b border-white/5 z-40 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2 max-w-7xl mx-auto flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 scale-0 group-hover:scale-100 transition-transform"></div>
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="flex items-center justify-between px-4">
                  <span className="text-xs text-gray-400 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    تماس با علیرضا عبدی:
                  </span>
                  <span className="text-xs font-mono text-cyan-400">۰۹۱۲۰۱۷۰۴۷۴</span>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, "#contact")}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium bg-cyan-500 text-gray-950 text-center font-semibold"
                  id="mobile-header-cta"
                >
                  <span>درخواست جلسه مشاوره آنلاین</span>
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
