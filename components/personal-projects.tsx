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
  Stethoscope,
  FileCheck,
  FileSpreadsheet,
  User,
  Dice5,
  Landmark,
  Brain,
  Wallet,
  MapPin,
  Armchair,
  UserCheck,
  Film,
  ShoppingCart,
  Users,
  Gamepad2,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const personalProjects = [
  {
    id: 1,
    title: "Medica Website",
    description:
      "Responsive healthcare landing website with appointment booking and service information.",
    fullDescription: `Healthcare landing website designed to showcase medical services and help users book appointments easily.

• Responsive layout built with modern HTML and CSS techniques
• Sections for services, doctors, blogs and appointment scheduling
• Smooth navigation using structured navigation bar
• Disease search and informational medical sections
• Clean UI designed for accessibility and usability`,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive Design", "Doctor Profiles", "Appointment Booking"],
    icon: Stethoscope,
    github: "https://github.com/Aman-Bisht/Medica.git",
    demo: "https://medica001.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 2,
    title: "Form Validator",
    description:
      "User registration form with regex validation and local storage data management.",
    fullDescription: `Form validation application designed to ensure accurate user data input and record management.

• Custom regex validation for all form input fields
• Dynamic error handling and validation feedback
• Data persistence using browser local storage
• Table interface for viewing stored records
• Edit, delete and view functionality with modal display`,
    technologies: ["HTML", "CSS", "JavaScript", "Regex"],
    features: ["Form Validation", "Local Storage", "CRUD Operations"],
    icon: FileCheck,
    github: "https://github.com/Aman-Bisht/Registeration-Form.git",
    demo: "https://formvalidation001-01.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 3,
    title: "Form Validator (jQuery)",
    description:
      "Enhanced form validation system using jQuery with dynamic table operations.",
    fullDescription: `Improved version of the form validation project implemented with jQuery for simplified DOM manipulation.

• Regex based validation for user input fields
• Dynamic table generation and record management
• Edit, delete and view user entries
• jQuery event handling for improved interactivity
• Data stored securely in browser local storage`,
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    features: ["Regex Validation", "Dynamic Table", "CRUD Operations"],
    icon: FileSpreadsheet,
    github: "https://github.com/Aman-Bisht/Registration-Form-JQuery.git",
    demo: "https://jquery-form-validation001.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio showcasing projects, skills and contact information.",
    fullDescription: `Personal developer portfolio designed to present professional profile and completed projects.

• Home page introducing developer profile
• Resume section displaying education and experience
• Project gallery showcasing completed work
• Contact page allowing visitors to reach out
• Fully responsive design using Bootstrap framework`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: ["Responsive Layout", "Project Showcase", "Contact Form"],
    icon: User,
    github: "https://github.com/Aman-Bisht/Portfolio-Javascript-.git",
    demo: "https://myrandom-portfolio.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 5,
    title: "Game Gallery",
    description:
      "Interactive webpage hosting multiple mini-games playable through modal windows.",
    fullDescription: `Interactive gaming interface that allows users to play multiple mini games within one page.

• Includes Number Guessing Game and Tic Tac Toe
• Games open inside dynamic JavaScript modals
• Interactive UI powered by DOM manipulation
• Organized single page gaming layout`,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Multiple Games", "Modal Interface", "Interactive UI"],
    icon: Gamepad2,
    github: "https://github.com/Aman-Bisht/Game-Gallery.git",
    demo: "https://modal-game-gallery.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 6,
    title: "Pig Dice Game",
    description:
      "Two-player dice game where players compete to reach 20 points first.",
    fullDescription: `Browser-based dice game demonstrating JavaScript DOM manipulation and event handling.

• Two-player turn based gameplay
• Dice roll determines score accumulation
• Rolling a 1 ends current player's turn
• Real-time score tracking and winner detection`,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Two Player Game", "Dice Logic", "Score Tracking"],
    icon: Dice5,
    github: "https://github.com/Aman-Bisht/Dice_Number_Guess.git",
    demo: "https://dashing-kangaroo-7276cc.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 7,
    title: "Bankist Website",
    description:
      "Modern banking landing page implementing lazy loading and smooth scrolling.",
    fullDescription: `Landing page project demonstrating advanced JavaScript performance techniques.

• Custom lazy loading for images
• Smooth scrolling navigation between sections
• Interactive slider component
• Animated UI transitions`,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Lazy Loading", "Smooth Scrolling", "Slider"],
    icon: Landmark,
    github: "https://github.com/Aman-Bisht/Banker.git",
    demo: "https://banker01.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 8,
    title: "Quiz Application",
    description:
      "Interactive quiz platform that tracks attempts, scores and performance analytics.",
    fullDescription: `Quiz platform that allows users to test knowledge and track performance across attempts.

• Multiple choice questions with navigation
• Performance analytics with score and percentage
• History of all quiz attempts
• Detailed review of correct and incorrect answers`,
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Quiz Attempts", "Score Tracking", "Performance Analysis"],
    icon: Brain,
    github: "https://github.com/Aman-Bisht/Quiz_game.git",
    demo: "https://quizapps010.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 9,
    title: "Expense Tracker",
    description:
      "Group expense management app that tracks shared expenses and balances.",
    fullDescription: `Financial tracking application designed for managing shared expenses between groups.

• Create expense groups and add members
• Record transactions between participants
• Automatically calculate balances and debts
• Settle payments directly within the app`,
    technologies: ["React.js", "Firebase", "JavaScript"],
    features: ["Group Expenses", "Debt Tracking", "Settlement System"],
    icon: Wallet,
    github: "https://github.com/Aman-Bisht/Expense_Tracker.git",
    demo: "https://expensetrackerweb01.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 10,
    title: "Favorite Place",
    description:
      "Travel discovery platform to explore popular tourist destinations in India.",
    fullDescription: `React based travel platform helping users discover famous tourist destinations.

• Authentication system for exploring places
• Destination search functionality
• Detailed pages showing attractions and activities
• Dark and light theme support`,
    technologies: ["React.js", "Material UI", "React Toastify"],
    features: ["Destination Search", "Authentication", "Theme Toggle"],
    icon: MapPin,
    github: "https://github.com/Aman-Bisht/Best_Place.git",
    demo: "https://favoriteplace01.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 11,
    title: "Seat Management",
    description:
      "Real-time seat reservation system built with MERN stack and Socket.io.",
    fullDescription: `Seat booking system enabling real time reservation updates across users.

• Real-time seat availability using Socket.io
• Color coded seat booking interface
• Secure authentication with JWT
• Ticket management dashboard`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    features: ["Real-time Seats", "JWT Auth", "Ticket Tracking"],
    icon: Armchair,
    github: "https://github.com/Aman-Bisht/Seat-Management.git",
    demo: "https://seat-management.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 12,
    title: "User Onboarding",
    description:
      "Secure onboarding system with Google authentication and bank account integration.",
    fullDescription: `User onboarding platform built with MERN stack for secure user registration.

• Email and Google authentication
• Email verification workflow
• Address suggestions using Geoapify API
• Bank linking through Plaid API`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: ["Google Login", "Email Verification", "Bank Linking"],
    icon: UserCheck,
    github: "https://github.com/Aman-Bisht/User_Onboarding.git",
    demo: "https://useronboarding01.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 13,
    title: "Movie Recommendation",
    description: "Movie and TV discovery platform powered by TMDB API.",
    fullDescription: `Movie discovery application allowing users to browse trending and recommended content.

• Trending movies and TV shows
• Detailed pages with ratings and cast
• Recommendation and similar content tabs
• Instant search functionality`,
    technologies: ["React.js", "Redux Toolkit", "Material UI", "TMDB API"],
    features: ["Trending Movies", "Search", "Recommendations"],
    icon: Film,
    github: "https://github.com/Aman-Bisht/Movie_Recommendations_Typeorm.git",
    demo: "https://movie-recommended001.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 14,
    title: "Flipkart Clone",
    description:
      "Full stack e-commerce platform with cart management and order processing.",
    fullDescription: `Modern e-commerce application inspired by Flipkart.

• Product browsing by categories and subcategories
• Cart management and order placement
• Address management for checkout
• Admin dashboard for product management`,
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "GraphQL",
      "PostgreSQL",
    ],
    features: ["Product Catalog", "Cart System", "Order Tracking"],
    icon: ShoppingCart,
    github: "https://github.com/Aman-Bisht/Flipcart.git",
    demo: "https://eccom001.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },

  {
    id: 15,
    title: "HRMS System",
    description:
      "Human Resource Management System for employee and attendance management.",
    fullDescription: `Full stack HR platform designed to streamline employee operations.

• Employee registration and profile management
• Attendance tracking with event scheduling
• Task management with priority tracking
• Internal blog system for company updates`,
    technologies: [
      "React.js",
      "TypeScript",
      "Material UI",
      "Node.js",
      "PostgreSQL",
    ],
    features: ["Employee Management", "Attendance Tracking", "Task System"],
    icon: Users,
    github: "https://github.com/Aman-Bisht/HRMS_Management.git",
    demo: "https://rainbow-kitsune-0d972c.netlify.app/",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-500",
    borderColor: "border-blue-500/30",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof personalProjects)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
      >
        {/* Gradient header with balls */}
        <div
          className={`relative p-6 bg-gradient-to-br ${project.color} overflow-hidden`}
        >
          {/* Floating balls */}
          <div className="absolute top-2 right-16 w-16 h-16 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-0 left-8 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-white/20 blur-lg" />

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors text-white cursor-pointer z-50"
          >
            <X className="w-5 h-5 pointer-events-none" />
          </button>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <project.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              <p className="text-white/80 text-sm">Personal Project</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.fullDescription}
                    </p> */}
          <div className="text-muted-foreground leading-relaxed mb-6">
            {project.fullDescription.split("\n").map((line, i) => {
              if (line.startsWith("•")) {
                return (
                  <li key={i} className="ml-4 list-disc">
                    {line.replace("•", "").trim()}
                  </li>
                );
              }
              return <p key={i}>{line}</p>;
            })}
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Key Features
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 text-sm p-2 rounded-lg ${project.bgColor}`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <ChevronRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-full ${project.bgColor} ${project.textColor} text-sm font-medium`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button
              asChild
              className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0`}
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
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
  project: (typeof personalProjects)[0];
  index: number;
  onSelect: () => void;
  isInView: boolean;
}) {
  const row = Math.floor(index / 3);
  const col = index % 3;

  // Floating animation - cards come from different directions
  const getInitialPosition = () => {
    if (col === 0) return { x: -100, y: 50, rotate: -5 };
    if (col === 2) return { x: 100, y: 50, rotate: 5 };
    return { x: 0, y: 80, rotate: 0 };
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initial.x,
        y: initial.y,
        rotate: initial.rotate,
        scale: 0.8,
      }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: row * 0.2 + col * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onClick={onSelect}
        className={`relative h-full overflow-hidden rounded-2xl bg-card border ${project.borderColor} cursor-pointer transition-all duration-300 hover:shadow-2xl`}
      >
        {/* Top gradient bar */}
        <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

        {/* Floating ball decorations */}
        <div
          className={`absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700`}
        />
        <div
          className={`absolute -top-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-15 group-hover:scale-150 transition-all duration-700`}
        />
        <div
          className={`absolute top-1/3 right-4 w-16 h-16 rounded-full bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-all duration-500`}
        />

        {/* Content */}
        <div className="relative p-5">
          {/* Icon and title row */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
            >
              <project.icon className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3
                className={`text-lg font-bold text-foreground group-hover:${project.textColor} transition-colors truncate`}
              >
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mt-1">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 rounded-md ${project.bgColor} ${project.textColor} text-xs font-medium`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span
                className={`px-2 py-1 rounded-md ${project.bgColor} ${project.textColor} text-xs`}
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Actions row - slides up on hover */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg ${project.bgColor} hover:bg-gradient-to-r hover:${project.color} hover:text-white transition-all`}
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg ${project.bgColor} hover:bg-gradient-to-r hover:${project.color} hover:text-white transition-all`}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>

            <motion.div
              className={`flex items-center text-sm font-medium ${project.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}
            >
              See More
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${project.color} pointer-events-none`}
        />
      </motion.div>
    </motion.div>
  );
}

export function PersonalProjects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof personalProjects)[0] | null
  >(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Scroll progress for filler bar
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ["0%", "100%"],
  );

  return (
    <section
      id="personal-projects"
      className="py-24 lg:py-32 relative overflow-hidden bg-muted/30"
    >
      {/* Floating background balls */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-rose-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <Code2 className="w-4 h-4" />
              Side Projects
            </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Personal{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Side projects and experiments I have built to explore new
              technologies and solve interesting problems
            </p>
          </motion.div>

          {/* Scroll progress filler bar */}
          <div className="relative h-1.5 bg-muted rounded-full mb-12 overflow-hidden max-w-md mx-auto">
            <motion.div
              style={{ width: progressWidth }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 rounded-full"
            />
          </div>

          {/* Project count */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border shadow-sm relative overflow-hidden">
              {/* Ball decoration */}
              <div className="absolute -right-4 -bottom-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 opacity-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent relative z-10">
                {personalProjects.length}
              </span>
              <span className="text-muted-foreground text-sm relative z-10">
                Projects Built
              </span>
            </div>
          </motion.div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={() => setSelectedProject(project)}
                isInView={isInView}
              />
            ))}
          </div>
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
