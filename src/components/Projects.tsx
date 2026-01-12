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
    title: "Pipeline Builder",
    category: "Web Application",
    description: "A scalable no-code pipeline builder that allows users to visually construct workflows using reusable nodes, with backend DAG validation to ensure correctness and prevent cyclic pipelines.",
    image: "data:image/jpeg;base64,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",
    liveUrl: "https://sahil-kumar-technical-assessment-2.onrender.com",
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
