import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mohammad Rahman",
    role: "Construction Project Manager",
    country: "Singapore",
    flag: "sg",
    rating: 5,
    text: "VisaHOBe made our S Pass application seamless. Their embassy-ready documentation saved us weeks of back-and-forth. The team's knowledge of Singapore's MOM regulations is exceptional.",
  },
  {
    name: "Sarah Mitchell",
    role: "HR Director, Global Staffing Corp",
    country: "Australia",
    flag: "au",
    rating: 5,
    text: "We've placed over 200 skilled workers through VisaHOBe's recruitment services. Their Subclass 482 expertise and end-to-end support are unmatched in the industry.",
  },
  {
    name: "Ahmed Al-Mansour",
    role: "Operations Manager",
    country: "Saudi Arabia",
    flag: "sa",
    rating: 5,
    text: "Professional, reliable, and incredibly thorough. VisaHOBe handled our entire workforce visa process from screening to placement. Highly recommend their services.",
  },
  {
    name: "Elena Petrovic",
    role: "Talent Acquisition Lead",
    country: "Serbia",
    flag: "rs",
    rating: 4,
    text: "As an emerging European gateway, finding a recruitment partner who understands Serbia's visa landscape was challenging — until we found VisaHOBe. Outstanding service.",
  },
  {
    name: "Tanvir Hossain",
    role: "Electrical Engineer",
    country: "Russia",
    flag: "ru",
    rating: 5,
    text: "From document preparation to post-arrival guidance, VisaHOBe supported me at every step. I'm now working in Moscow thanks to their dedicated team.",
  },
  {
    name: "Kamal Uddin",
    role: "IT Specialist",
    country: "Cambodia",
    flag: "kh",
    rating: 5,
    text: "I was worried about the complexity of international work visas, but VisaHOBe simplified everything. Their consultancy approach is transparent and trustworthy.",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="section-padding bg-section-alt overflow-hidden">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by businesses and professionals across the globe.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 z-20 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 z-20 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full"
              >
                <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-10 text-center relative">
                  <Quote className="text-primary/20 absolute top-6 left-6" size={40} />

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < t.rating ? "text-primary fill-primary" : "text-border"}
                      />
                    ))}
                  </div>

                  <p className="text-foreground leading-relaxed text-sm md:text-base italic mb-6 max-w-2xl mx-auto">
                    "{t.text}"
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={`https://flagcdn.com/w40/${t.flag}.png`}
                      alt={t.country}
                      className="w-8 h-5 rounded object-cover shadow-sm"
                    />
                    <div className="text-left">
                      <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} — {t.country}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-border w-2.5 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
