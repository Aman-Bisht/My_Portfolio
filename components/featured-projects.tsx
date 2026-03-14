"use client";

import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronRight,
  Layers,
  Cpu,
  FileText,
  Shield,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    id: 1,
    title: "Hitachi FSM",
    subtitle: "Field Worker Application",
    description:
      "Enterprise application for field technicians to manage service operations, work orders, and customer interactions.",
    fullDescription:
      "A comprehensive enterprise solution designed for Hitachi's field service management. This application enables field technicians to efficiently manage their daily operations, including work order management, customer service tracking, inventory management, and real-time reporting. Built with a focus on usability and performance, the app handles complex workflows while maintaining a clean, intuitive interface.",
    technologies: [
      "React.js",
      "TypeScript",
      "Material UI",
      "REST APIs",
      "Redux",
    ],
    features: [
      "Work order management and tracking",
      "Real-time synchronization",
      "Customer interaction logging",
      "Inventory management",
      "Performance analytics dashboard",
    ],
    icon: Layers,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    shadowColor: "shadow-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    title: "CareCorp AI Voice Agent",
    subtitle: "AI-Powered Communication",
    description:
      "AI voice bot using Azure Communication Services with Speech-to-Text, Text-to-Speech and GPT responses.",
    fullDescription:
      "An innovative AI-powered voice agent that revolutionizes customer support interactions. The system uses Azure Communication Services for voice handling, integrates Speech-to-Text for understanding user queries, processes them through GPT for intelligent responses, and delivers answers via Text-to-Speech. The result is a seamless, natural conversation experience that handles complex queries efficiently.",
    technologies: [
      "Azure Services",
      "GPT Integration",
      "React.js",
      "Node.js",
      "WebRTC",
    ],
    features: [
      "Real-time speech recognition",
      "Natural language processing",
      "Context-aware responses",
      "Multi-language support",
      "Call analytics and insights",
    ],
    icon: Cpu,
    // color: "from-violet-500 to-purple-500",
    // bgColor: "bg-violet-500/10",
    // textColor: "text-violet-500",
    // shadowColor: "shadow-violet-500/20",
    // borderColor: "border-violet-500/30",
     color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    shadowColor: "shadow-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 3,
    title: "DocuTalk",
    subtitle: "Intelligent Q&A System",
    description:
      "AI system that retrieves answers from documents with optimized query processing and semantic search.",
    fullDescription:
      "A sophisticated document intelligence system that enables users to interact with their documents using natural language queries. The system employs advanced NLP techniques for semantic understanding, vector embeddings for efficient document retrieval, and GPT for generating accurate, contextual answers. Perfect for knowledge management and document exploration.",
    technologies: ["Python", "LangChain", "Vector DB", "React.js", "FastAPI"],
    features: [
      "Semantic document search",
      "Multi-format document support",
      "Context-aware Q&A",
      "Citation and source tracking",
      "Batch document processing",
    ],
    icon: FileText,
    // color: "from-emerald-500 to-teal-500",
    // bgColor: "bg-emerald-500/10",
    // textColor: "text-emerald-500",
    // shadowColor: "shadow-emerald-500/20",
    // borderColor: "border-emerald-500/30",
     color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    shadowColor: "shadow-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 4,
    title: "License Management System",
    subtitle: "Enterprise License Tracking",
    description:
      "Enterprise system for license tracking, allocation, and compliance management with detailed reporting.",
    fullDescription:
      "A comprehensive license management solution for enterprises to track, allocate, and manage software licenses across the organization. Features include automated compliance monitoring, usage analytics, renewal reminders, and detailed reporting. The system helps organizations optimize their software spending while ensuring compliance.",
    technologies: ["React.js", "Redux", "PostgreSQL", "Node.js", "Chart.js"],
    features: [
      "License allocation and tracking",
      "Compliance monitoring",
      "Usage analytics dashboard",
      "Automated renewal alerts",
      "Role-based access control",
    ],
    icon: Shield,
    // color: "from-orange-500 to-amber-500",
    // bgColor: "bg-orange-500/10",
    // textColor: "text-orange-500",
    // shadowColor: "shadow-orange-500/20",
    // borderColor: "border-orange-500/30",
     color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    shadowColor: "shadow-blue-500/20",
    borderColor: "border-blue-500/30",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof featuredProjects)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl"
      >
        {/* Gradient header */}
        <div
          className={`relative p-8 bg-gradient-to-br ${project.color} overflow-hidden`}
        >
          {/* Floating balls in header */}
          <div className="absolute top-4 right-20 w-20 h-20 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-0 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/20 blur-lg" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <project.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-white/80">{project.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-muted-foreground leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-3 p-3 rounded-xl ${project.bgColor}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <ChevronRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full ${project.bgColor} ${project.textColor} text-sm font-medium`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

       
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  onSelect,
  isInView,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
  onSelect: () => void;
  isInView: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isEven ? -100 : 100,
      }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`flex ${isEven ? "lg:pr-12" : "lg:pl-12 lg:flex-row-reverse"}`}
    >
      <motion.div
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
        onClick={onSelect}
        className={`relative overflow-hidden rounded-3xl bg-card border ${project.borderColor} cursor-pointer transition-all duration-500 hover:shadow-2xl ${project.shadowColor} group w-full`}
      >
        {/* Gradient top bar */}
        <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

        {/* Floating ball decorations */}
        <div
          className={`absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700`}
        />
        <div
          className={`absolute -top-10 -left-10 w-28 h-28 rounded-full bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-15 group-hover:scale-150 transition-all duration-700`}
        />
        <div
          className={`absolute top-1/2 right-10 w-20 h-20 rounded-full bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-15 transition-all duration-500`}
        />

        {/* Content */}
        <div className="relative p-8">
          {/* Top row */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden shadow-lg`}
            >
              <project.icon className="w-7 h-7 text-white" />
            </motion.div>

            {/* Project number */}
            <span
              className={`text-6xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}
            >
              0{index + 1}
            </span>
          </div>

          {/* Title and description */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground transition-colors mb-1">
              {project.title}
            </h3>
            <p className={`text-sm ${project.textColor} opacity-70 mb-3`}>
              {project.subtitle}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-full ${project.bgColor} ${project.textColor} text-xs font-medium`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span
                className={`px-3 py-1.5 rounded-full ${project.bgColor} ${project.textColor} text-xs font-medium`}
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <motion.span
              className={`${project.textColor} font-semibold flex items-center gap-2`}
              whileHover={{ x: 5 }}
            >
              View Details
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.span>

         
          </div>
        </div>

        {/* Hover glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        />
      </motion.div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof featuredProjects)[0] | null
  >(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500"
          style={{ width: progressWidth }}
        />
      </div>

      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <Briefcase className="w-4 h-4" />
              Professional Work
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Company
              <span className="gradient-text"> Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Enterprise applications and professional projects I have
              contributed to during my career
            </p>
          </motion.div>

          {/* Projects - Zig-zag layout with connecting line */}
          <div className="relative">
            {/* Zig-zag SVG connecting line */}
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="zigzagGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                  <stop offset="33%" stopColor="rgb(139, 92, 246)" />
                  <stop offset="66%" stopColor="rgb(16, 185, 129)" />
                  <stop offset="100%" stopColor="rgb(249, 115, 22)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 50% 0 
                   L 25% 12.5% 
                   L 75% 37.5% 
                   L 25% 62.5% 
                   L 75% 87.5%
                   L 50% 100%"
                fill="none"
                stroke="url(#zigzagGradient)"
                strokeWidth="2"
                strokeDasharray="8 4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{
                  filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))",
                }}
              />
            </svg>

            {/* Vertical center line with gradient */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-blue-500 via-violet-500 via-emerald-500 to-orange-500"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            <div className="space-y-8 lg:space-y-16">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="relative">
                  {/* Horizontal connecting line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    className={`hidden lg:block absolute top-1/2 h-px bg-gradient-to-r ${
                      project.color
                    } -translate-y-1/2 ${
                      index % 2 === 0
                        ? "left-1/2 w-12 origin-left"
                        : "right-1/2 w-12 origin-right"
                    }`}
                  />

                  <ProjectCard
                    project={project}
                    index={index}
                    onSelect={() => setSelectedProject(project)}
                    isInView={isInView}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                value: "4+",
                label: "Enterprise Projects",
                color: "from-blue-500 to-cyan-500",
              },
              {
                value: "1M+",
                label: "Users Impacted",
                // color: "from-violet-500 to-purple-500",
                  color: "from-blue-500 to-cyan-500",
              },
              {
                value: "99.9%",
                label: "Uptime",
                // color: "from-emerald-500 to-teal-500",
                  color: "from-blue-500 to-cyan-500",
              },
              {
                value: "3+",
                label: "Years Experience",
                // color: "from-orange-500 to-amber-500",
                  color: "from-blue-500 to-cyan-500",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-card border border-border relative overflow-hidden group hover:border-transparent transition-colors"
              >
                {/* Ball decoration */}
                <div
                  className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500`}
                />
                <div
                  className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-15 transition-all duration-500`}
                />

                <div
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}
                >
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1 relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
