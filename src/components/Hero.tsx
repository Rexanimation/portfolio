import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-image.png";
import bgVideo from "@/assets/website-bg.mp4";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Fiery ash particles - glowing embers floating upward
  const ashParticles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 8 + Math.random() * 12,
    size: 2 + Math.random() * 5,
    drift: (Math.random() - 0.5) * 300,
    startY: Math.random() * 100,
  }));

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: 0.9,
            filter: "brightness(1) contrast(1.1) saturate(1.2)",
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Lighter overlay - text area protected, rest visible */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, 
                hsl(var(--background) / 0.6) 0%, 
                hsl(var(--background) / 0.35) 35%, 
                hsl(var(--background) / 0.15) 60%, 
                hsl(var(--background) / 0.2) 100%
              ),
              linear-gradient(180deg, 
                hsl(var(--background) / 0.2) 0%, 
                transparent 40%, 
                transparent 60%, 
                hsl(var(--background) / 0.5) 100%
              )
            `
          }}
        />
      </div>
      {/* Fiery ash flying effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {ashParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              bottom: `${particle.startY}%`,
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, hsl(30 100% 70%) 0%, hsl(25 100% 50%) 40%, hsl(15 100% 40% / 0.6) 70%, transparent 100%)`,
              boxShadow: `0 0 ${particle.size * 3}px hsl(25 100% 50% / 0.8), 0 0 ${particle.size * 6}px hsl(30 100% 60% / 0.4)`,
            }}
            animate={{
              y: [0, -window.innerHeight * 1.5],
              x: [0, particle.drift],
              opacity: [0, 1, 0.8, 0.5, 0],
              scale: [0.5, 1.2, 1, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
        {/* Smaller sparks */}
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`,
              width: 1 + Math.random() * 2,
              height: 1 + Math.random() * 2,
              background: `hsl(35 100% 65%)`,
              boxShadow: `0 0 4px hsl(30 100% 60%), 0 0 8px hsl(25 100% 50% / 0.6)`,
            }}
            animate={{
              y: [0, -window.innerHeight * (0.6 + Math.random() * 0.6)],
              x: [(Math.random() - 0.5) * 80, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 0.7, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 8,
              delay: Math.random() * 15,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Background gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"
        style={{ opacity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left content - always on top on mobile */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1 flex-1 relative z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-primary font-body uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Welcome to my realm
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-gradient-ember block font-serif tracking-wide font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
                Conquer
              </span>
              <span className="text-foreground text-glow-white block font-serif italic tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
                Your Vision
              </span>
            </motion.h1>

            <motion.p
              className="font-body text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              A passionate developer crafting exceptional digital experiences.
              Turning bold ideas into powerful solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-ember rounded-full font-body font-semibold text-primary-foreground shadow-ember transition-all duration-300 hover:scale-105 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 md:px-8 py-3 md:py-4 ember-border rounded-full font-body font-semibold text-foreground transition-all duration-300 hover:bg-primary/10 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative flex justify-center order-1 lg:order-2 flex-1 z-10"
            style={{ y, scale }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 blur-3xl opacity-40 bg-primary rounded-full scale-90" />

              <motion.img
                src={heroImage}
                alt="Sahil - Developer"
                className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Decorative elements - hidden on mobile for cleaner look */}

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 md:w-16 h-12 md:h-16 bg-primary/20 rounded-full blur-sm hidden sm:block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
