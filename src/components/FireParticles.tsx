import { motion } from "framer-motion";

const FireParticles = () => {
  // Generate particles for the entire page
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: 10 + Math.random() * 15,
    size: 2 + Math.random() * 4,
    drift: (Math.random() - 0.5) * 200,
  }));

  const sparks = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 25,
    duration: 8 + Math.random() * 12,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
      {/* Main ember particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            bottom: "-20px",
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, hsl(30 100% 70%) 0%, hsl(25 100% 50%) 40%, hsl(15 100% 40% / 0.6) 70%, transparent 100%)`,
            boxShadow: `0 0 ${particle.size * 3}px hsl(25 100% 50% / 0.7), 0 0 ${particle.size * 5}px hsl(30 100% 60% / 0.3)`,
          }}
          animate={{
            y: [0, -window.innerHeight * 2],
            x: [0, particle.drift],
            opacity: [0, 0.9, 0.7, 0.4, 0],
            scale: [0.5, 1.1, 1, 0.7, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Small sparks */}
      {sparks.map((spark) => (
        <motion.div
          key={`spark-${spark.id}`}
          className="absolute rounded-full"
          style={{
            left: `${spark.left}%`,
            bottom: "-10px",
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
            background: `hsl(35 100% 65%)`,
            boxShadow: `0 0 4px hsl(30 100% 60%), 0 0 8px hsl(25 100% 50% / 0.5)`,
          }}
          animate={{
            y: [0, -window.innerHeight * (1 + Math.random())],
            x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 250],
            opacity: [0, 1, 0.6, 0],
          }}
          transition={{
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default FireParticles;
