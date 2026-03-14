"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code2, Database, Wrench, Layout, Sparkles } from "lucide-react"

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    icon: Layout,
    // color: "from-violet-500 to-purple-500",
    // bgColor: "bg-violet-500/10",
    // textColor: "text-violet-500",
     color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    skills: ["React.js", "Next.js", "Redux", "Node.js", "Material UI", "Tailwind CSS"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    // color: "from-emerald-500 to-teal-500",
    // bgColor: "bg-emerald-500/10",
    // textColor: "text-emerald-500",
     color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    icon: Wrench,
    // color: "from-orange-500 to-amber-500",
    // bgColor: "bg-orange-500/10",
    // textColor: "text-orange-500",
     color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    skills: ["Git", "REST APIs", "GraphQL", "Docker", "AWS", "Azure"],
  },
]

const techIcons: Record<string, string> = {
  "JavaScript": "JS",
  "TypeScript": "TS",
  "HTML5": "</>",
  "CSS3": "#",
  "Python": "Py",
  "React.js": "R",
  "Next.js": "N",
  "Redux": "Rx",
  "Node.js": "No",
  "Material UI": "MUI",
  "Tailwind CSS": "Tw",
  "PostgreSQL": "Pg",
  "MongoDB": "Mg",
  "Firebase": "Fb",
  "Redis": "Rd",
  "Git": "G",
  "REST APIs": "API",
  "GraphQL": "GQL",
  "Docker": "D",
  "AWS": "AWS",
  "Azure": "Az",
}

function SkillBadge({ 
  skill, 
  index, 
  isInView,
  color,
  bgColor,
  textColor
}: { 
  skill: string
  index: number
  isInView: boolean
  color: string
  bgColor: string
  textColor: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.1,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group cursor-default"
    >
      <div className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-transparent hover:shadow-lg transition-all duration-300`}
        style={{
          boxShadow: 'none',
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget as HTMLElement
          target.style.boxShadow = `0 10px 40px -10px var(--shadow-color, rgba(0,0,0,0.3))`
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget as HTMLElement
          target.style.boxShadow = 'none'
        }}
      >
        {/* Icon circle with gradient */}
        <div className={`w-8 h-8 rounded-lg ${bgColor} flex items-center justify-center text-xs font-bold ${textColor} group-hover:scale-110 transition-transform duration-300`}>
          {techIcons[skill] || skill.charAt(0)}
        </div>
        <span className="font-medium text-foreground text-sm">{skill}</span>
        
        {/* Gradient border on hover */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity -z-10`} />
      </div>
    </motion.div>
  )
}

function CategoryCard({ 
  category, 
  index, 
  isInView,
}: { 
  category: typeof skillCategories[0]
  index: number
  isInView: boolean
}) {
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        layout
        whileHover={{ y: -5 }}
        className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-transparent transition-all duration-500"
      >
        {/* Gradient top bar */}
        <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
        
        {/* Header */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center relative overflow-hidden`}
            >
              <Icon className={`w-7 h-7 ${category.textColor}`} />
              {/* Inner glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-30 transition-opacity`} />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.skills.length} technologies</p>
            </div>
          </div>

          {/* Skills badges */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <SkillBadge 
                key={skill} 
                skill={skill} 
                index={i} 
                isInView={isInView}
                color={category.color}
                bgColor={category.bgColor}
                textColor={category.textColor}
              />
            ))}
          </div>
        </div>

        {/* Floating ball decorations */}
        <div className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700`} />
        <div className={`absolute -top-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-15 group-hover:scale-150 transition-all duration-700`} />
        
        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
      </motion.div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // All skills for floating animation
  const allSkills = skillCategories.flatMap(c => c.skills)

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl"
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {allSkills.slice(0, 8).map((skill, i) => (
          <motion.div
            key={skill}
            className="absolute text-6xl font-bold text-primary/[0.03] select-none"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {techIcons[skill] || skill.charAt(0)}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative" ref={ref}>
        <div className="max-w-6xl mx-auto">
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
              <Sparkles className="w-4 h-4" />
              Technical Skills
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Technologies I
              <span className="gradient-text"> Master</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {[
              { value: "21+", label: "Technologies", color: "from-blue-500 to-cyan-500" },
              { value: "3+", label: "Years Experience", color: 
                // "from-violet-500 to-purple-500" 
                "from-blue-500 to-cyan-500"
            },
              { value: "50+", label: "Projects Built", color:
                //  "from-emerald-500 to-teal-500"
                "from-blue-500 to-cyan-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center px-8 py-4 rounded-2xl bg-card border border-border hover:border-transparent transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                {/* Ball decoration */}
                <div className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
