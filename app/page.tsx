"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const phoneDisplay = "07359 857312";
const phoneHref = "tel:07359857312";
const facebookHref = "https://www.facebook.com/profile.php?id=61560266925285";
const messengerHref = "https://m.me/61560266925285";
const wasteLicence = "CBDU537989";

const navItems = ["Home", "Services", "Proof", "Areas", "Contact"];

const services = [
  ["House Clearances", "Full and part house clearances with labour included and tipping receipts provided after disposal."],
  ["Garden Clearances", "Green waste, old furniture, bagged rubbish, branches and general garden mess cleared quickly."],
  ["Builders Waste", "Brick, plasterboard, wood, pipes, cables and renovation waste removed responsibly."],
  ["Shed & Garage Removal", "Experienced team for taking down and clearing old sheds, garages and packed outbuildings."],
  ["Bins Emptied & Cleaned", "Waste bins emptied and cleaned, including general waste, grass, soil and mixed contents."],
  ["Scrap Metal", "Scrap metal collected and deducted from the job price where possible to help save money."],
  ["Bag Removals", "Bagged waste collections available, with pricing depending on quantity and waste type."],
  ["Item Delivery", "Goods in transit cover for reliable item delivery and protected transport across the UK."],
];

const areas = [
  "Denton",
  "Droylsden",
  "Hyde",
  "Stockport",
  "Oldham",
  "Failsworth",
  "Ashton-under-Lyne",
  "Stalybridge",
  "Glossop",
  "Bolton",
  "Chadderton",
  "Greater Manchester",
];

const galleryImages = [
  "/images/job1.png",
  "/images/job2.png",
  "/images/job3.png",
  "/images/job4.png",
  "/images/job5.png",
  "/images/job6.png",
];

const reviews = [
  {
    quote: "Got back to me straight away and came the next morning. Really friendly, professional and fast service.",
    name: "Tyler Leonard",
    date: "Facebook recommendation",
  },
  {
    quote: "Polite and friendly lads, quick and efficient removing the waste and promptly sent receipt after.",
    name: "Marcus Bond",
    date: "Facebook recommendation",
  },
  {
    quote: "They came and removed rubbish and emptied 3 bins quickly, professional, polite and friendly.",
    name: "Molly New",
    date: "Facebook recommendation",
  },
  {
    quote: "Always prompt with communication and after provided proof of tipping receipt. Highly recommend.",
    name: "Nuree Bibi",
    date: "Facebook recommendation",
  },
  {
    quote: "Cleared my large bulky items from my garage and left the garage clean and tidy. Tipping receipt same day.",
    name: "Rose Atherton",
    date: "Facebook recommendation",
  },
  {
    quote: "Booked in the next day, arrived on time and disposed of the household waste with a tipping receipt once complete.",
    name: "Katie Bushell",
    date: "Facebook recommendation",
  },
];

function PhoneIcon({ className = "h-5 w-5 text-[#fed406]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 10.59a16 16 0 0 0 4.41 4.41l1.26-1.26a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function MessageIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6A8.4 8.4 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z" />
    </svg>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src="/images/logo.png"
      alt="L&D Waste Removals"
      width={compact ? 170 : 260}
      height={compact ? 170 : 260}
      className={`h-auto object-contain ${compact ? "w-[76px]" : "w-[140px]"}`}
      priority
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryStart, setGalleryStart] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(true);
  const [galleryPaused, setGalleryPaused] = useState(false);
  const [reviewStart, setReviewStart] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteJobType, setQuoteJobType] = useState("");
  const [quoteDetails, setQuoteDetails] = useState("");

  const quoteMessage = encodeURIComponent(
    `Hi L&D, I'd like a waste removal quote.\n\nName: ${quoteName || "Not provided"}\nPhone: ${quotePhone || "Not provided"}\nJob type: ${quoteJobType || "Not selected"}\nDetails: ${quoteDetails || "Not provided"}`
  );
  const quoteMessengerHref = `${messengerHref}?text=${quoteMessage}`;

  useEffect(() => {
    const leaveTimer = setTimeout(() => setIntroLeaving(true), 900);
    const removeTimer = setTimeout(() => setIntroVisible(false), 1500);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (galleryPaused) return;

    const timer = setInterval(() => {
      setGalleryVisible(false);
      setTimeout(() => {
        setGalleryStart((current) => (current + 1) % galleryImages.length);
        setGalleryVisible(true);
      }, 450);
    }, 4500);

    return () => clearInterval(timer);
  }, [galleryPaused]);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewStart((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleGallery = Array.from(
    { length: 6 },
    (_, i) => galleryImages[(galleryStart + i) % galleryImages.length]
  );

  const visibleReviews = Array.from(
    { length: 3 },
    (_, i) => reviews[(reviewStart + i) % reviews.length]
  );

  const mobileReview = reviews[reviewStart % reviews.length];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f5ef] text-[#050505]">
      <style jsx global>{`
        @keyframes review-slide-in {
          0% { opacity: 0; transform: translateX(120%); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .review-slide-in { animation: review-slide-in 1.05s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      {introVisible && (
        <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-all duration-700 ease-out ${introLeaving ? "pointer-events-none opacity-0 blur-md" : "opacity-100 blur-0"}`}>
          <div className={`transition-all duration-700 ease-out ${introLeaving ? "scale-[1.35] opacity-0 blur-md" : "scale-100 opacity-100 blur-0"}`}>
            <Logo />
          </div>
        </div>
      )}

      <header className="fixed top-0 z-50 w-full md:pointer-events-none">
        <div className={`hidden transition-all duration-500 md:block ${scrolled ? "mt-0 w-full max-w-none px-0" : "mx-auto mt-5 max-w-7xl px-6"}`}>
          {!scrolled ? (
            <div className="pointer-events-auto grid h-[162px] grid-cols-[300px_1fr_220px] grid-rows-[66px_96px] overflow-hidden rounded-[2rem] bg-black shadow-2xl ring-1 ring-[#fed406]/20">
              <a href="#" className="row-span-2 flex items-center justify-center bg-black px-7">
                <Logo />
              </a>

              <div className="col-span-1 flex h-full items-center justify-end gap-8 rounded-bl-[2rem] bg-[#fed406] px-9 text-sm font-black text-black">
                <a href={phoneHref} className="flex items-center gap-2 hover:opacity-70">
                  <PhoneIcon className="h-5 w-5 text-black" />
                  {phoneDisplay}
                </a>
                <a href={messengerHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70">
                  <MessageIcon className="h-5 w-5 text-black" />
                  Message Us
                </a>
                <span className="hidden items-center gap-2 text-black/80 xl:flex">
                  <span className="h-2 w-2 rounded-full bg-black" />
                  Licence {wasteLicence}
                </span>
              </div>

              <a href={messengerHref} target="_blank" rel="noopener noreferrer" className="flex h-full items-center justify-center bg-white px-6 text-[1.05rem] font-black uppercase tracking-[0.08em] text-black transition hover:bg-[#fed406]">
                Get Quote
              </a>

              <nav className="flex items-center justify-center gap-9 text-xs font-black uppercase tracking-[0.16em] text-white">
                {navItems.map((item) => (
                  <a key={item} href="#" className="transition hover:text-[#fed406]">{item}</a>
                ))}
              </nav>

              <div className="bg-black" />
            </div>
          ) : (
            <div className="pointer-events-auto flex h-[88px] w-full items-center justify-between bg-black px-10 shadow-md ring-1 ring-[#fed406]/20">
              <a href="#" className="flex items-center"><Logo compact /></a>

              <nav className="flex items-center gap-9 text-xs font-black uppercase tracking-[0.16em] text-white">
                {navItems.map((item) => (
                  <a key={item} href="#" className="transition hover:text-[#fed406]">{item}</a>
                ))}
              </nav>

              <a href={messengerHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#fed406] px-8 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-white">
                Message For Quote
              </a>
            </div>
          )}
        </div>

        <div className="bg-black shadow-sm md:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-[92px_1fr_auto] items-center gap-3 px-4 py-3">
            <a href="#" className="flex items-center justify-start"><Logo compact /></a>
            <a href={phoneHref} className="mobile-call-wobble rounded-full bg-[#fed406] px-3 py-3 text-center text-xs font-black uppercase tracking-[0.08em] text-black transition hover:bg-white">
              Call Now
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black text-white">
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
              </span>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-white/10 bg-black px-5 py-5">
              <div className="flex flex-col gap-4 text-center text-lg font-black text-white">
                {navItems.map((item) => (
                  <a key={item} href="#" onClick={() => setMenuOpen(false)}>{item}</a>
                ))}
                <a href={messengerHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#fed406] px-5 py-3 text-sm uppercase tracking-[0.08em] text-black">Message on Facebook</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="relative h-[100svh] overflow-hidden md:h-screen">
        {/* Mobile video */}
<video
  className="absolute inset-0 h-full w-full object-cover md:hidden"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>

{/* Desktop image */}
<Image
  src="/images/hero-ldwr.png"
  alt="L&D Waste Removals team clearing waste"
  fill
  sizes="100vw"
  className="hidden object-cover saturate-[0.9] contrast-[1.05] brightness-[0.9] md:block"
  style={{ objectPosition: "70% 10%" }}
  priority
/>

{/* Much lighter mobile overlay, keep desktop stronger */}
<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/25 via-black/45 to-black/75 md:bg-gradient-to-r md:from-black/92 md:via-black/64 md:to-black/20" />
        <div className="absolute right-[-90px] top-[20%] z-10 hidden h-[430px] w-[430px] rounded-full bg-[#fed406]/25 blur-3xl md:block" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl px-4 pt-[76px] md:px-6 md:pb-8 md:pt-[190px]">
          <div className="flex h-full w-full items-center">
            <div className="w-full animate-fade-up text-white">
              <h1 className="max-w-[12ch] text-[3.05rem] font-black uppercase leading-[0.88] tracking-tight sm:text-[3.25rem] md:max-w-[13ch] md:text-[3.65rem] lg:text-[4.15rem] xl:text-[4.5rem]">
                Waste gone. Proof given.
              </h1>

              <p className="mt-4 max-w-xl text-base font-bold leading-7 text-white/90 md:text-lg md:leading-8">
                Licensed waste removals across Greater Manchester and the North West. Get in touch today for a fast quote.
              </p>

              <div className="mt-4 grid gap-2 text-sm font-bold leading-5 text-white/90 sm:grid-cols-2 md:max-w-2xl">
                {[
                  "100% recommended on Facebook",
                  `Waste licence ${wasteLicence}`,
                  "Valid tipping receipts after disposal",
                  "Same-day & next-day slots where available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fed406] text-[12px] font-black leading-none text-black">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid w-full max-w-[330px] grid-cols-1 gap-4 sm:max-w-[560px] sm:grid-cols-2">
                <a href={messengerHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#fed406] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-white">
                  Message For Quote
                </a>
                <a href={phoneHref} className="rounded-full border border-white/60 bg-white/10 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white backdrop-blur transition hover:bg-white hover:text-black">
                  Call {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f6f5ef] px-4 pb-12 pt-14 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-black/55">What We Clear</p>
              <h2 className="mt-3 max-w-4xl text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
                From single bags to full clearances.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/65 md:ml-auto md:text-base">
              L&D Waste Removals handle domestic, garden, commercial and builders waste with a simple photo-based quote process.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-black shadow-2xl ring-1 ring-black/10 sm:min-h-[560px] lg:min-h-0">

  <video
    className="absolute inset-0 h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src="/videos/website-video.mp4" type="video/mp4" />
  </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/15" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <div className="mb-4 inline-flex rounded-full bg-[#fed406] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-black">See the work</div>
                <h3 className="max-w-md text-3xl font-black uppercase leading-[0.95] md:text-4xl">Fast clearances, tidy finishes.</h3>
                <p className="mt-4 max-w-md text-sm font-bold leading-7 text-white/75">Don't let clutter take over your space. Let us handle it.</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map(([title, copy], index) => (
                <div key={title} className="group rounded-[1.25rem] bg-black p-5 text-white shadow-sm ring-1 ring-white/10 transition duration-500 hover:-translate-y-0.5 hover:shadow-xl">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <div className="h-1.5 w-10 rounded-full bg-[#fed406]" />
                    <span className="text-[10px] font-black tracking-[0.25em] text-white/30">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-black tracking-tight md:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-black px-4 py-16 text-white md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-5 md:mb-10 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#fed406]">Recent Jobs</p>
              <h2 className="mt-3 max-w-3xl text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
                Cleared properly. Disposed legally.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/65 md:ml-auto md:text-base">
A selection of recently completed rubbish removal and house clearance projects we've completed.            </p>
          </div>

          <div className={`grid grid-cols-1 gap-4 transition-opacity duration-700 ease-out sm:grid-cols-2 lg:grid-cols-3 ${galleryVisible ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => setGalleryPaused(true)} onMouseLeave={() => setGalleryPaused(false)}>
            {visibleGallery.map((src, index) => (
              <div key={`${src}-${index}-${galleryStart}`} className="group relative h-[260px] overflow-hidden rounded-[1.5rem] bg-black shadow-sm ring-1 ring-white/10 transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl sm:h-[300px]">
                <Image src={src} alt={`L&D Waste Removals recent job photo ${index + 1}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover saturate-[0.96] contrast-[1.02] brightness-[0.95] transition-all duration-1000 ease-out group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-[#fed406] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-black">Recent Job</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f5ef] px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-black/55">Facebook Reviews</p>
              <h2 className="mt-3 max-w-4xl text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
                100% recommended on Facebook.
              </h2>
            </div>
            <div className="max-w-xl md:ml-auto">
              <div className="text-2xl font-black tracking-[0.08em] text-[#fed406] drop-shadow-[0_1px_0_rgba(0,0,0,0.5)]">★★★★★</div>
              <p className="mt-3 text-sm leading-7 text-black/65 md:text-base">
                Real customer reviews from your neighbours across the region.
              </p>
            </div>
          </div>

          <div className="overflow-hidden">
            <div key={`mobile-review-${reviewStart}`} className="review-slide-in md:hidden">
              <div className="flex min-h-[260px] flex-col justify-between rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div>
                  <div className="mb-5 text-lg font-black tracking-[0.1em] text-[#fed406]">★★★★★</div>
                  <p className="text-base font-bold leading-7 text-black/75">“{mobileReview.quote}”</p>
                </div>
                <div className="mt-8 border-t border-black/10 pt-5">
                  <p className="font-black text-black">{mobileReview.name}</p>
                  <p className="mt-1 text-sm font-bold text-black/45">{mobileReview.date}</p>
                </div>
              </div>
            </div>

            <div key={`desktop-reviews-${reviewStart}`} className="hidden gap-4 md:grid md:grid-cols-3">
              {visibleReviews.map((review, index) => (
                <div key={`${review.name}-${review.date}`} className="review-slide-in flex min-h-[260px] flex-col justify-between rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl" style={{ animationDelay: `${index * 90}ms` }}>
                  <div>
                    <div className="mb-5 text-lg font-black tracking-[0.1em] text-[#fed406]">★★★★★</div>
                    <p className="text-base font-bold leading-7 text-black/75">“{review.quote}”</p>
                  </div>
                  <div className="mt-8 border-t border-black/10 pt-5">
                    <p className="font-black text-black">{review.name}</p>
                    <p className="mt-1 text-sm font-bold text-black/45">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[1.5rem] bg-black p-5 text-white md:flex-row md:items-center">
            <p className="max-w-2xl text-sm font-bold leading-7 text-white/70">
              Want a fast price? Send photos of the waste through Facebook Messenger and the team can quote from there.
            </p>
            <a href={messengerHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#fed406] px-6 py-3.5 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-white">
              Message L&D
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-black/55">Why Choose Us</p>
            <h2 className="mt-3 max-w-3xl text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
              The anti-fly-tipping choice.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-black/65 md:text-base">
              Cheap waste removal is only cheap until your rubbish gets dumped illegally. L&D are licensed and provide proof after tipping.
            </p>
            <div className="mt-8 rounded-[1.6rem] bg-black p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#fed406]">Waste Carrier Licence</p>
              <p className="mt-3 text-3xl font-black tracking-tight">{wasteLicence}</p>
              <p className="mt-3 text-sm leading-7 text-white/60">Tipping receipts provided after every job for your peace of mind.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Tipping Receipts", "Valid receipts are provided after tipping so customers know waste has been handled legally."],
              ["Photo Quotes", "Customers can send photos by Messenger for a quick, simple quote without a site visit."],
              ["Fast Turnaround", "Same-day and next-day jobs are possible depending on routes and availability."],
              ["Scrap Deductions", "Where scrap metal is present, it can be deducted from the price to save customers money."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.4rem] bg-[#f6f5ef] p-6 ring-1 ring-black/5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fed406] font-black text-black">✓</div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-[#f6f5ef] px-4 py-16 md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-[2rem] bg-black p-6 text-white shadow-2xl md:grid-cols-[0.8fr_1fr] md:p-10">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#fed406]">Areas Covered</p>
              <h2 className="mt-3 text-[2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
                Waste removal across Greater Manchester.
              </h2>
              <p className="mt-5 leading-7 text-white/65">
We provide licensed waste removal and house clearance services across Greater Manchester and the surrounding North West areas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map((area) => (
                <div key={area} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-center text-sm font-black">{area}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quote-form" className="bg-black px-4 py-16 text-white md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-black uppercase tracking-[0.25em] text-[#fed406]">Get A Fast Quote</p>
            <h2 className="mt-3 text-[2.2rem] font-black uppercase leading-[0.9] tracking-tight md:text-5xl">
              Send photos. Get a price.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">
              Tell the team what needs removing. The easiest route is Facebook Messenger with clear photos of the waste.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-white shadow-2xl md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Your name" value={quoteName} onChange={(event) => setQuoteName(event.target.value)} />
              <input className="field" placeholder="Phone number" value={quotePhone} onChange={(event) => setQuotePhone(event.target.value)} />
              <select className="field md:col-span-2" value={quoteJobType} onChange={(event) => setQuoteJobType(event.target.value)}>
                <option value="">What needs clearing?</option>
                <option>House clearance</option>
                <option>Garden clearance</option>
                <option>Builders waste</option>
                <option>Shed / garage removal</option>
                <option>Bins emptied and cleaned</option>
                <option>Bag removals</option>
                <option>Scrap metal</option>
              </select>
              <textarea className="field min-h-[160px] md:col-span-2" placeholder="Briefly tell us what needs removing..." value={quoteDetails} onChange={(event) => setQuoteDetails(event.target.value)} />
              <a href={quoteMessengerHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#fed406] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-white md:col-span-2">
                Start Quote On Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <a href={messengerHref} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-2xl ring-4 ring-white/30 transition hover:scale-105" aria-label="Message L&D Waste Removals on Facebook">
        <MessageIcon className="h-8 w-8" />
      </a>

      <footer id="contact" className="bg-black px-4 py-12 text-white md:px-5">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <div className="inline-flex overflow-hidden rounded-2xl bg-black ring-1 ring-[#fed406]/25"><Logo /></div>
            <p className="mt-5 max-w-md leading-7 text-white/55">
              Licensed waste removals, clearances, bin emptying and responsible disposal across Greater Manchester and the North West.
            </p>
            <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-[#fed406]">Licence {wasteLicence}</p>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#fed406]">Services</p>
            <div className="space-y-2 text-white/65">
              <p>House Clearances</p>
              <p>Garden Clearances</p>
              <p>Builders Waste</p>
              <p>Shed & Garage Removal</p>
              <p>Bins Emptied & Cleaned</p>
              <p>Scrap Metal</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#fed406]">Contact</p>
            <div className="space-y-3 text-white/65">
              <p className="font-bold text-white">L&D Waste Removals</p>
              <p>Greater Manchester & North West</p>
              <a href={phoneHref} className="block hover:text-[#fed406]">{phoneDisplay}</a>
              <a href={messengerHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#fed406]"><MessageIcon className="h-5 w-5 text-[#fed406]" />Message on Facebook</a>
              <a href={facebookHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#fed406]"><FacebookIcon className="h-5 w-5 text-[#fed406]" />View Facebook page</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row">
          <p>© L&D Waste Removals. All rights reserved.</p>
          <p>Licensed • Receipts Provided • Fast Waste Removal</p>
        </div>
      </footer>
    </main>
  );
}
