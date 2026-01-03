import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import bgVideo from "@/assets/website-bg.mp4";
const skills = [
  { name: "React / Next.js", category: "Frontend", percentage: 95 },
  { name: "TypeScript", category: "Frontend", percentage: 90 },
  { name: "Node.js", category: "Backend", percentage: 85 },
  { name: "UI/UX Design", category: "Design", percentage: 88 },
];

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Play video when in view
  if (videoRef.current) {
    if (isInView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden min-h-[700px]">
      {/* Dragon Video Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: 0.5,
            filter: "brightness(0.7) contrast(1.2)",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          }}
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        
        {/* Fiery glow overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={isInView ? {
            background: [
              "radial-gradient(ellipse at center, hsl(25 100% 50% / 0.15) 0%, transparent 60%)",
              "radial-gradient(ellipse at center, hsl(30 100% 55% / 0.2) 0%, transparent 65%)",
              "radial-gradient(ellipse at center, hsl(25 100% 50% / 0.15) 0%, transparent 60%)",
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Background ember particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10px",
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              background: `hsl(${25 + Math.random() * 15} 100% ${50 + Math.random() * 20}%)`,
              boxShadow: `0 0 8px hsl(25 100% 50%)`,
            }}
            animate={isInView ? {
              y: [0, -600 - Math.random() * 400],
              x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 150],
              opacity: [0, 1, 0.7, 0],
            } : { opacity: 0 }}
            transition={{
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-foreground text-glow-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 700 }}>
              My{" "}
            </span>
            <span className="text-gradient-ember" style={{ fontFamily: "'Cinzel', serif" }}>
              Arsenal
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-card/80 backdrop-blur-md border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0 0 30px hsl(25 100% 50% / 0.3)" }}
            >
              {/* Skill Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 
                  className="text-lg text-foreground tracking-wide font-bold"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {skill.name}
                </h3>
                <span className="text-sm text-primary font-medium px-3 py-1 rounded border border-primary/30 bg-primary/10">
                  {skill.category}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-muted rounded-full overflow-hidden mb-2">
                {/* Animated loading bar */}
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, hsl(25 100% 50%) 0%, hsl(35 100% 55%) 50%, hsl(25 100% 45%) 100%)`,
                    boxShadow: `0 0 10px hsl(25 100% 50% / 0.5), 0 0 20px hsl(30 100% 60% / 0.3)`,
                  }}
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: `${skill.percentage}%` } : { width: "0%" }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ left: "-20%" }}
                  animate={isInView ? { left: "120%" } : { left: "-20%" }}
                  transition={{
                    duration: 1.2,
                    delay: 1.8 + index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </div>

              {/* Percentage */}
              <div className="flex justify-end">
                <motion.span
                  className="text-muted-foreground text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                >
                  {skill.percentage}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
