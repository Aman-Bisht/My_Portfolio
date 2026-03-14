"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Celestial Systems",
    role: "Software Engineer",
    period: "Sep 2024 – Present",
    location: "Remote",
    description: [
      "Built dynamic UI components using React.js and Material UI",
      "Integrated REST APIs for seamless data flow",
      "Improved application performance and user experience",
      "Collaborated with cross-functional teams on enterprise solutions",
    ],
    technologies: ["React.js", "Material UI", "REST APIs", "TypeScript"],
    side: "left",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },
  {
    company: "Costa Cloud",
    role: "Frontend Developer",
    period: "Feb 2024 – Sep 2024",
    location: "Remote",
    description: [
      "Built enterprise UI using React.js and Redux",
      "Developed License Management System from scratch",
      "Improved user engagement by 25% through UX enhancements",
      "Integrated APIs and managed large datasets efficiently",
    ],
    technologies: ["React.js", "Redux", "API Integration", "JavaScript"],
    side: "right",
    // color: "from-violet-500 to-purple-500",
    // bgColor: "bg-violet-500/10",
    // textColor: "text-violet-500",
    // borderColor: "border-violet-500/30",
       color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },
  {
    company: "PurpleTalk",
    role: "Software Intern",
    period: "Oct 2023 – Jan 2024",
    location: "Remote",
    description: [
      "Developed React applications for client projects",
      "Used Redux Toolkit for state management",
      "Built responsive UI using Material UI components",
      "Learned best practices for enterprise development",
    ],
    technologies: ["React.js", "Redux Toolkit", "Material UI"],
    side: "left",
    // color: "from-emerald-500 to-teal-500",
    // bgColor: "bg-emerald-500/10",
    // textColor: "text-emerald-500",
    // borderColor: "border-emerald-500/30",
       color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: experience.side === "left" ? -100 : 100,
        y: 50,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: experience.side === "left" ? -100 : 100, y: 50 }
      }
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className={`relative flex ${
        experience.side === "left"
          ? "lg:justify-start"
          : "lg:justify-end"
      } w-full`}
    >
      <div
        className={`w-full lg:w-[calc(50%-40px)] ${
          experience.side === "right" ? "lg:ml-auto" : ""
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          className={`group relative p-6 lg:p-8 rounded-2xl bg-card border ${experience.borderColor} hover:border-transparent transition-all duration-300 hover:shadow-xl overflow-hidden`}
        >
          {/* Gradient top bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${experience.color}`} />
          
          {/* Floating ball decorations */}
          <div className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${experience.color} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700`} />
          <div className={`absolute -top-10 -left-10 w-28 h-28 rounded-full bg-gradient-to-br ${experience.color} opacity-5 group-hover:opacity-15 group-hover:scale-150 transition-all duration-700`} />
          <div className={`absolute top-1/2 right-8 w-20 h-20 rounded-full bg-gradient-to-br ${experience.color} opacity-5 group-hover:opacity-10 transition-all duration-500`} />

          {/* Company badge */}
          <div className="flex items-start justify-between mb-4 relative z-10">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${experience.color} flex items-center justify-center`}>
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <span className={`${experience.textColor} font-medium`}>
                  {experience.company}
                </span>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              className={`p-2 rounded-full ${experience.bgColor} ${experience.textColor} opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer`}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground relative z-10">
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${experience.bgColor}`}>
              <Calendar className={`w-4 h-4 ${experience.textColor}`} />
              <span>{experience.period}</span>
            </div>
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${experience.bgColor}`}>
              <MapPin className={`w-4 h-4 ${experience.textColor}`} />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-6 relative z-10">
            {experience.description.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + i * 0.1 }}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 flex-shrink-0`} />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 relative z-10">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full ${experience.bgColor} ${experience.textColor} text-xs font-medium`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hover glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"])
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Floating background balls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto" ref={sectionRef}>
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
              Career Journey
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-balance">
              My Professional
              <span className="gradient-text"> Journey</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              My professional experience and the companies I have worked with
            </p>
          </motion.div>

          {/* Timeline */}
          <div ref={containerRef} className="relative">
            {/* Timeline line - visible on lg screens */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full overflow-hidden">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500"
              />
            </div>

            {/* Experience cards */}
            <div className="space-y-8 lg:space-y-12">
              {experiences.map((experience, index) => (
                <div key={experience.company} className="relative">
                  {/* Timeline dot with glow */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10"
                  >
                    {/* Outer glow */}
                    <div className={`absolute inset-0 w-8 h-8 -m-2 rounded-full bg-gradient-to-r ${experience.color} opacity-30 blur-md`} />
                    {/* Inner dot */}
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} border-4 border-background shadow-lg`} />
                  </motion.div>

                  {/* Horizontal connecting line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    className={`hidden lg:block absolute top-8 h-0.5 bg-gradient-to-r ${experience.color} -translate-y-1/2 ${
                      experience.side === "left" 
                        ? 'right-1/2 w-10 origin-left ml-2' 
                        : 'left-1/2 w-10 origin-right mr-2'
                    }`}
                  />

                  <ExperienceCard experience={experience} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-4"
          >
            {[
              { value: "3+", label: "Companies", color: "from-blue-500 to-cyan-500" },
              { value: "2+", label: "Years Experience", color:
                //  "from-violet-500 to-purple-500"
                "from-blue-500 to-cyan-500"
                 },
              { value: "10+", label: "Projects Delivered", color:
                //  "from-emerald-500 to-teal-500"
                  "from-blue-500 to-cyan-500"
                 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-card border border-border relative overflow-hidden group"
              >
                {/* Ball decorations */}
                <div className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-25 group-hover:scale-125 transition-all duration-500`} />
                <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-15 transition-all duration-500`} />
                
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm mt-1 relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
