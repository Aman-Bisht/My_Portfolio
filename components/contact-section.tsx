// "use client";

// import { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   Send,
//   CheckCircle,
//   Loader2,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";

// const contactInfo = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "amanbisht1010@gmail.com",
//     href: "mailto:amanbisht1010@gmail.com",
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+91 6396969169",
//     href: "tel:+916396969169",
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: "Delhi, India",
//     href: "#",
//   },
// ];

// const socialLinks = [
//   {
//     icon: Github,
//     label: "GitHub",
//     href: "https://github.com/Aman-Bisht",
//   },
//   {
//     icon: Linkedin,
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/it-aman",
//   },
// ];

// export function ContactSection() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     // Simulate form submission
// //     await new Promise((resolve) => setTimeout(resolve, 1500));
// //     setIsSubmitting(false);
// //     setIsSubmitted(true);
// //     setTimeout(() => setIsSubmitted(false), 3000);
// //   };

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const formData = new FormData(form);

//   const name = formData.get("name");
//   const email = formData.get("email");
//   const subject = formData.get("subject");
//   const message = formData.get("message");

//   const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=amanbisht1010@gmail.com&su=${encodeURIComponent(
//     subject as string
//   )}&body=${encodeURIComponent(
//     `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
//   )}`;

//   window.open(gmailUrl, "_blank");
// };
//   return (
//     <section
//       id="contact"
//       className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden"
//     >
//       {/* Background decoration */}
//       <div className="absolute inset-0 -z-10">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.1, 0.2, 0.1],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.1, 0.2, 0.1],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 3,
//           }}
//           className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8" ref={ref}>
//         <div className="max-w-6xl mx-auto">
//           {/* Section header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-16"
//           >
//             <span className="text-primary font-medium text-sm tracking-wider uppercase">
//               Get In Touch
//             </span>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-balance">
//               {"Let's Work"}
//               <span className="gradient-text"> Together</span>
//             </h2>
//             <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//               {
//                 "Have a project in mind or want to discuss opportunities? I'd love to hear from you."
//               }
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
//             {/* Contact info */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="space-y-8"
//             >
//               <div>
//                 <h3 className="text-2xl font-bold mb-6 text-foreground">
//                   Contact Information
//                 </h3>
//                 <div className="space-y-4">
//                   {contactInfo.map((item, index) => (
//                     <motion.a
//                       key={item.label}
//                       href={item.href}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={isInView ? { opacity: 1, x: 0 } : {}}
//                       transition={{ delay: 0.3 + index * 0.1 }}
//                       whileHover={{ x: 10 }}
//                       className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
//                     >
//                       <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                         <item.icon className="w-5 h-5 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-muted-foreground">
//                           {item.label}
//                         </p>
//                         <p className="font-medium text-foreground">
//                           {item.value}
//                         </p>
//                       </div>
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>

//               {/* Social links */}
//               <div>
//                 <h3 className="text-lg font-semibold mb-4 text-foreground">
//                   Connect with me
//                 </h3>
//                 <div className="flex gap-4">
//                   {socialLinks.map((link, index) => (
//                     <motion.a
//                       key={link.label}
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       initial={{ opacity: 0, scale: 0 }}
//                       animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                       transition={{ delay: 0.5 + index * 0.1 }}
//                       whileHover={{ scale: 1.1, y: -5 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
//                     >
//                       <link.icon className="w-5 h-5" />
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>

//               {/* Decorative element */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 0.6 }}
//                 className="hidden lg:block p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border"
//               >
//                 <p className="text-lg italic text-muted-foreground">
//                   {'"Building the future, one line of code at a time."'}
//                 </p>
//                 <p className="text-sm text-primary mt-2 font-medium">
//                   — Aman Bisht
//                 </p>
//               </motion.div>
//             </motion.div>

//             {/* Contact form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.4 }}
//             >
//               <form
//                 onSubmit={handleSubmit}
//                 className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
//               >
//                 <h3 className="text-2xl font-bold mb-6 text-foreground">
//                   Send a Message
//                 </h3>

//                 <div className="space-y-6">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Name</Label>
//                       <Input
//                         id="name"
//                         placeholder="Your name"
//                         required
//                         disabled={isSubmitting}
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         placeholder="your@email.com"
//                         required
//                         disabled={isSubmitting}
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject</Label>
//                     <Input
//                       id="subject"
//                       placeholder="What's this about?"
//                       required
//                       disabled={isSubmitting}
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea
//                       id="message"
//                       placeholder="Your message..."
//                       rows={5}
//                       required
//                       disabled={isSubmitting}
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="w-full"
//                     disabled={isSubmitting || isSubmitted}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                         Sending...
//                       </>
//                     ) : isSubmitted ? (
//                       <>
//                         <CheckCircle className="w-5 h-5 mr-2" />
//                         Message Sent!
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-5 h-5 mr-2" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </div>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Heart } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amanbisht1010@gmail.com',
    href: 'mailto:amanbisht1010@gmail.com',
    description: 'Drop me an email',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6396969169',
    href: 'tel:+916396969169',
    description: 'Give me a call',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Delhi, India',
    href: '#',
    description: 'Based in India',
  },
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Aman-Bisht',
    description: 'View my projects',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/it-aman',
    description: 'Connect professionally',
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="py-32 lg:py-48 px-4 lg:px-8 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
          >
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Let's Connect</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out using any of the methods below.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative p-8 rounded-2xl border border-border transition-all duration-300 overflow-hidden
                ${item.href === '#' ? 'cursor-default' : 'hover:border-primary/50 hover:shadow-lg'}
              `}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Label and Value */}
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

                {/* Contact Value */}
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <span className="truncate">{item.value}</span>
                  {item.href !== '#' && (
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Follow Me Online
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                aria-label={link.label}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-center gap-2">
                  <link.icon className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
                  <span className="font-medium text-foreground text-sm">{link.label}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center p-8 lg:p-12 bg-card border border-border rounded-2xl relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
              Whether you have a project idea, want to collaborate, or just want to say hello – 
              I'd love to hear from you. The best way to reach me is via email.
            </p>

            <motion.a
              href="mailto:amanbisht1010@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Send Email
              <ExternalLink className="w-5 h-5" />
            </motion.a>

            <p className="mt-6 text-sm text-muted-foreground italic">
              Response time: Usually within 24 hours
            </p>
          </div>
            {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="hidden lg:block p-6 mt-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border"
              >
                <p className="text-lg italic text-muted-foreground">
                  {'"Building the future, one line of code at a time."'}
                </p>
                <p className="text-sm text-primary mt-2 font-medium">
                  — Aman Bisht
                </p>
              </motion.div>
        </motion.div>
        

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Open to opportunities</span> – Available for freelance and full-time roles
            </span>
          </div>
          
        </motion.div>
      </div>

     


    </section>
  )
}
