// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Star } from "lucide-react"

// const SCROLL_SPEED = 30 // seconds to complete one loop

// export function TestimonialsSection() {
//   const [isHovered, setIsHovered] = useState(false)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [scrollHeight, setScrollHeight] = useState(0)

//   useEffect(() => {
//     if (containerRef.current) {
//       setScrollHeight(containerRef.current.scrollHeight / 2)
//     }
//   }, [])

//   const testimonials = [
//     {
//       name: "Alex Johnson",
//       role: "Product Manager",
//       quote: "This platform has completely transformed how we manage our projects. Highly recommended!",
//       rating: 5,
//     },
//     {
//       name: "Sarah Lee",
//       role: "UX Designer",
//       quote: "The efficiency and ease of use are unparalleled. It's been a game-changer for our team.",
//       rating: 5,
//     },
//     {
//       name: "Michael Chen",
//       role: "Software Engineer",
//       quote: "I'm impressed by the robust features and the responsive support team. Excellent service!",
//       rating: 4,
//     },
//     {
//       name: "Emily Taylor",
//       role: "Marketing Director",
//       quote: "The analytics capabilities have given us invaluable insights. We've seen a significant boost in our ROI.",
//       rating: 5,
//     },
//     {
//       name: "David Rodriguez",
//       role: "Startup Founder",
//       quote: "As a startup, this tool has been crucial in helping us scale efficiently. Couldn't be happier!",
//       rating: 5,
//     },
//     {
//       name: "Lisa Wong",
//       role: "Project Coordinator",
//       quote: "The collaboration features are top-notch. It's made our remote work so much smoother.",
//       rating: 4,
//     },
//     {
//       name: "James Smith",
//       role: "CTO",
//       quote: "The API integration capabilities are extensive. It fits perfectly into our tech stack.",
//       rating: 5,
//     },
//     {
//       name: "Anna Kowalski",
//       role: "Customer Success Manager",
//       quote: "Our clients love the intuitive interface. It's helped us improve our customer satisfaction scores.",
//       rating: 5,
//     },
//   ]

//   return (
//     <section className="container max-w-screen-xl py-20 overflow-hidden">
//       <h2 className="text-3xl font-bold mb-12 text-center">What people say</h2>

//       <div
//         className="relative h-[400px] overflow-hidden"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div
//           ref={containerRef}
//           className="testimonial-scroll"
//           style={{
//             animationPlayState: isHovered ? "paused" : "running",
//             animationDuration: `${SCROLL_SPEED}s`,
//             transform: `translateY(-${scrollHeight}px)`,
//           }}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//             {testimonials.map((testimonial, i) => (
//               <TestimonialCard key={i} {...testimonial} />
//             ))}
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {testimonials.map((testimonial, i) => (
//               <TestimonialCard key={i + testimonials.length} {...testimonial} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function TestimonialCard({
//   name,
//   role,
//   quote,
//   rating,
// }: {
//   name: string
//   role: string
//   quote: string
//   rating: number
// }) {
//   return (
//     <Card className="bg-accent/20 border-border/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
//       <CardContent className="pt-6">
//         <div className="flex items-center mb-4">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <Star
//               key={i}
//               className={`h-4 w-4 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
//             />
//           ))}
//         </div>
//         <p className="text-sm mb-4 text-muted-foreground">{quote}</p>
//         <div className="flex items-center gap-3">
//           <Avatar className="h-8 w-8">
//             <AvatarImage src={`https://i.pravatar.cc/32?u=${name}`} />
//             <AvatarFallback>{name.charAt(0)}</AvatarFallback>
//           </Avatar>
//           <div>
//             <div className="font-medium text-sm">{name}</div>
//             <div className="text-xs text-muted-foreground">{role}</div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

