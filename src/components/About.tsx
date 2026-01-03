import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing elegant, maintainable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating stunning interfaces that users love to interact with.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing every aspect for lightning-fast user experiences.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technologies.",
  },
];

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as Easing },
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.span
              className="text-primary font-body uppercase tracking-[0.3em] text-sm"
              variants={itemVariants}
            >
              About Me
            </motion.span>
            <motion.h2
              className="font-display text-5xl md:text-6xl text-foreground mt-4 font-bold text-glow-white"
              variants={itemVariants}
            >
              Crafting Digital{" "}
              <span className="text-gradient-ember">Excellence</span>
            </motion.h2>
          </motion.div>

          {/* About content */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div variants={itemVariants}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with a keen eye for design 
                and a love for creating seamless user experiences. With expertise 
                in modern web technologies, I transform complex problems into 
                elegant solutions.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                From concept to deployment, I bring ideas to life with precision 
                and creativity. Every line of code is written with purpose, every 
                design decision made with intention.
              </p>
              <motion.div
                className="flex gap-4 justify-center"
                variants={itemVariants}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 bg-gradient-ember rounded-full font-body font-semibold text-primary-foreground shadow-ember transition-all duration-300 hover:scale-105"
                >
                  Work With Me
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="group bg-gradient-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <skill.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
