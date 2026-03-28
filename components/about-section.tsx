"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Layers,
  Zap,
  Users,
  Sparkles,
  Target,
  Lightbulb,
  Shield,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, readable, and well-documented code following best practices",
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderGradient: "from-blue-500/50 to-cyan-500/50",
    iconColor: "text-blue-500",
  },
  {
    icon: Layers,
    title: "Modern Stack",
    description:
      "Expert in React.js, TypeScript, and cutting-edge frontend technologies",
    gradient: "from-emerald-500/10 to-teal-500/10",
    borderGradient: "from-emerald-500/50 to-teal-500/50",
    iconColor: "text-emerald-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Building lightning-fast applications with optimized rendering and caching",
    gradient: "from-amber-500/10 to-orange-500/10",
    borderGradient: "from-amber-500/50 to-orange-500/50",
    iconColor: "text-amber-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively with cross-functional teams to deliver excellence",
    gradient: "from-rose-500/10 to-pink-500/10",
    borderGradient: "from-rose-500/50 to-pink-500/50",
    iconColor: "text-rose-500",
  },
];

const stats = [
  { value: "2+", label: "Years Experience", icon: Target },
  { value: "10+", label: "Projects Completed", icon: Lightbulb },
  { value: "5+", label: "Technologies", icon: Sparkles },
  { value: "100%", label: "Client Satisfaction", icon: Shield },
];

const techBadges = [
  { label: "React.js", color: "text-blue-500" },
  { label: "TypeScript", color: "text-emerald-500" },
  { label: "Node.js", color: "text-purple-500" },
  { label: "AI APIs", color: "text-indigo-500" },
  { label: "AI Bot", color: "text-pink-500" },
  { label: "TypeORM", color: "text-orange-500" },
  { label: "Full Stack", color: "text-cyan-500" },
  { label: "WebSocket", color: "text-teal-500" },
  { label: "PostgreSQL", color: "text-violet-500" },
  { label: "REST APIs", color: "text-red-500" },
];

function FloatingCircle({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 ${className}`}
      animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 lg:py-25 relative overflow-hidden">
      <FloatingCircle
        className="w-64 h-64 bg-primary/30 -top-32 -right-32 blur-3xl"
        delay={0}
      />

      <FloatingCircle
        className="w-48 h-48 bg-blue-500/20 top-1/2 -left-24 blur-2xl"
        delay={2}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}

          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Get to know me
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <div className="flex flex-col items-center">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Orbit Ring */}

                <motion.div
                  className="absolute w-[320px] h-[320px] border border-dashed border-primary/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Orbit Badges */}

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {techBadges.map((badge, i) => {
                    const angle = (360 / techBadges.length) * i;

                    return (
                      <div
                        key={badge.label}
                        className="absolute"
                        style={{
                          transform: `rotate(${angle}deg) translate(160px)`,
                        }}
                      >
                        <motion.div
                          style={{ rotate: -angle }}
                          animate={{ rotate: -angle - 360 }}
                          transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-card border border-border rounded-lg shadow-lg backdrop-blur-sm whitespace-nowrap">
                            <span
                              className={`text-[10px] sm:text-xs font-medium ${badge.color}`}
                            >
                              {badge.label}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>

                {/* Profile Card */}

                <div className="relative w-56 h-56">
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <motion.div
                    className="absolute -inset-4 rounded-3xl border border-dashed border-primary/10"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="absolute inset-0 bg-card rounded-2xl border border-border shadow-2xl flex items-center justify-center">
                    <span className="text-7xl font-bold bg-gradient-to-br from-primary to-blue-500 bg-clip-text text-transparent">
                      AB
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact */}

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="mailto:amanbisht1010@gmail.com"
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  amanbisht1010@gmail.com
                </a>

                <a
                  href="tel:+916396969169"
                  className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
                >
                  +91 63969 69169
                </a>
              </div>
            </div>

            {/* RIGHT */}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a{" "}
                <span className="text-foreground font-semibold">
                  Software Engineer
                </span>{" "}
                specializing in{" "}
                <span className="text-primary font-semibold">React.js</span> and
                modern frontend development. With a passion for creating
                exceptional user experiences, I focus on building applications
                that are not only functional but also beautiful and performant.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My experience spans across API integration, performance
                optimization, scalable UI development, and collaboration with
                backend and QA teams on enterprise web applications. I thrive in
                environments where I can contribute to building products that
                make a real impact.
              </p>

              {/* Location with enhanced styling */}
              <motion.div
                className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-muted-foreground">
                  Based in{" "}
                  <span className="text-foreground font-medium">
                    Delhi, India
                  </span>
                </span>
              </motion.div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-card/50 border border-border/50 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Highlights */}

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className={`relative h-full p-6 bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:border-transparent`}
                >
                  {/* Gradient border on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-card rounded-[11px]" />

                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Decorative circle */}
                  <div
                    className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${item.gradient} opacity-50 blur-2xl group-hover:opacity-100 transition-opacity`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
