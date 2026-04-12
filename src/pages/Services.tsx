import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Plane, Building2, FileCheck, Globe, Users, ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import servicesVisa from "@/assets/services-visa.jpg";
import servicesManpower from "@/assets/services-manpower.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import globalNetwork from "@/assets/global-network.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Briefcase,
      title: "Manpower Recruitment",
      desc: "Placement of skilled and semi-skilled workers, including overseas employer coordination, worker screening, and professional employment contract preparation.",
      features: ["Overseas employer coordination", "Worker screening & selection", "Employment contract preparation", "Pre-departure orientation", "Post-placement follow-up"],
      destinations: "Singapore (WP, S Pass, EP), Australia (Subclass 482), Russia, Saudi Arabia, Cambodia, Belarus",
      image: servicesManpower,
    },
    {
      icon: Plane,
      title: "Visa & Travel Services",
      desc: 'Processing assistance for all visa types (Work, Tourist, Business, Student). We specialize in preparing "Embassy-Ready" documentation to minimize errors.',
      features: ['"Embassy-Ready" documentation', "Work, Tourist, Business, Student visas", "Post-approval travel guidance", "Relocation assistance", "Document verification"],
      destinations: "Australia, Serbia, Moldova, and other European Gateways",
      image: servicesVisa,
    },
  ];

  const additionalServices = [
    { icon: Globe, title: "Global Work Authorizations", desc: "End-to-end management of work authorization processes across multiple jurisdictions." },
    { icon: Building2, title: "Strategic Program Management", desc: "Comprehensive program management for organizations with complex, multi-country needs." },
    { icon: FileCheck, title: "Consular Services & Business Travel", desc: "Expert handling of consular appointments, business travel visas, and corporate travel programs." },
    { icon: Users, title: "Employer Compliance Support", desc: "Guidance on employer obligations, audit preparation, and regulatory compliance." },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={globalNetwork} alt="Services" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold text-background mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-background/80 max-w-2xl text-sm md:text-base"
          >
            Comprehensive immigration and recruitment solutions tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      {mainServices.map((service, i) => (
        <section key={i} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-section-alt"}`}>
          <div className={`container-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            <AnimatedSection className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <service.icon className="text-primary mb-4" size={40} />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm"><span className="font-semibold text-foreground">Target Destinations:</span> <span className="text-muted-foreground">{service.destinations}</span></p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <motion.img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Additional Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-card rounded-xl p-6 shadow-lg border border-border text-center h-full"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <s.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-card-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-main text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Help with Your Immigration Needs?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Get in touch with our team to discuss your specific requirements and find the best solution.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-background text-foreground font-semibold rounded-full hover:shadow-xl transition-all">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
