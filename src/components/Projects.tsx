import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

// Projects data - one active, rest coming soon
const projects = [
  {
    id: 1,
    title: "Tenancy Tracker",
    category: "Web Application",
    description: "A comprehensive property management platform for tracking tenancies and rentals.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    liveUrl: "https://tenancy-frontend.onrender.com",
    isComingSoon: false,
  },
  {
    id: 2,
    title: "Coming Soon",
    category: "Project",
    description: "Exciting new project in development. Stay tuned for updates.",
    image: "",
    liveUrl: "",
    isComingSoon: true,
  },
  {
    id: 3,
    title: "Coming Soon",
    category: "Project",
    description: "Another amazing project on the way.",
    image: "",
    liveUrl: "",
    isComingSoon: true,
  },
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as Easing },
    },
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground text-glow-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 700 }}>
                Featured{" "}
              </span>
              <span className="text-gradient-ember" style={{ fontFamily: "'Cinzel', serif" }}>
                Works
              </span>
            </motion.h2>
          </motion.div>

          {/* Projects grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {projects.map((project) => {
              const isLink = !project.isComingSoon && project.liveUrl;
              const CardComponent = isLink ? motion.a : motion.div;

              return (
                <CardComponent
                  key={project.id}
                  href={isLink ? project.liveUrl : undefined}
                  target={isLink ? "_blank" : undefined}
                  rel={isLink ? "noopener noreferrer" : undefined}
                  className="group relative bg-card/30 backdrop-blur-sm rounded-lg overflow-hidden border border-border/30 hover:border-primary/40 transition-all duration-500 flex flex-col"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project image */}
                  <div className="relative h-56 overflow-hidden bg-muted/20 shrink-0">
                    {project.isComingSoon ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10">
                        <motion.div
                          className="text-muted-foreground/40 text-6xl"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ?
                        </motion.div>
                      </div>
                    ) : (
                      <>
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                      </>
                    )}
                  </div>

                  {/* Project content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category */}
                    <span className="text-primary text-xs uppercase tracking-widest font-medium">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-2xl text-foreground mt-2 mb-3"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* View link - visually a link but div tag to avoid nested anchors */}
                    {!project.isComingSoon && (
                      <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider group/link mt-auto">
                        View Project
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </div>
                    )}

                    {project.isComingSoon && (
                      <span className="text-muted-foreground/50 text-sm uppercase tracking-wider mt-auto">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at center, hsl(25 100% 50% / 0.05) 0%, transparent 70%)",
                    }}
                  />
                </CardComponent>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
