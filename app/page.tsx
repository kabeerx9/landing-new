import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, BarChart, Check, Cloud, Code2, Database, Layout, Mail, MapPin, Phone, Shield, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { Marquee } from "@/components/ui/marquee"
import { HighlightGroup } from "@/components/ui/highlighter"

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Dynamic Pattern */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          <Image
            src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&q=80"
            alt="Hero background"
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-white/20 rounded-full transform -rotate-6" />
                <div className="relative">
                  <GooeyText
                    texts={["VISION", "DESIGN", "IMPACT", "FUTURE"]}
                    morphTime={2}
                    cooldownTime={1.5}
                    className="text-7xl md:text-9xl font-bold mb-6 text-white"
                    textClassName="text-white"
                  />
                </div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light tracking-wide">
              Crafting digital excellence through minimalist design and powerful functionality
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg bg-white text-black hover:bg-gray-100 group">
                Start Project
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-black text-white border-white/20 hover:opacity-50">
                Our Process
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Marquee className="bg-black/50 backdrop-blur-sm rounded-xl border border-white/10" pauseOnHover speed={40}>
            <div className="flex gap-12 px-4 py-2">
              {[
                "Innovative Solutions",
                "Modern Design",
                "Cutting-edge Technology",
                "Seamless Experience",
                "Scalable Architecture",
                "24/7 Support"
              ].map((text, i) => (
                <div key={i} className="text-white/70 text-sm font-medium px-4">
                  {text}
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* About Section with Parallax Effect */}
      <section className="py-32 bg-white relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#f3f3f3_25%,#f3f3f3_50%,transparent_50%,transparent_75%,#f3f3f3_75%)] bg-[length:64px_64px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-black/80 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative h-[600px] transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Our vision"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-5xl font-bold relative">
                  Our Vision
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-black" />
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Since our inception, we've been redefining digital experiences through
                minimalist design and powerful functionality. Our approach merges
                aesthetic simplicity with technical excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "200+", label: "Projects Delivered" },
                  { number: "50+", label: "Team Members" },
                  { number: "99%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    <div className="relative p-6 border border-black/10 group-hover:border-transparent transition-colors">
                      <h3 className="font-bold text-3xl mb-1 group-hover:text-white transition-colors">{stat.number}</h3>
                      <p className="text-gray-600 group-hover:text-white/80 transition-colors">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Highlighter Effect */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <GooeyText
              texts={["Why Choose Us", "Our Features", "What We Offer"]}
              morphTime={3}
              cooldownTime={2}
              className="text-4xl md:text-5xl font-bold text-white"
              textClassName="text-white"
            />
          </div>
          <HighlightGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Clean Code",
                description: "We write maintainable, scalable, and efficient code that stands the test of time."
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Modern Design",
                description: "Beautiful, responsive interfaces that engage users and enhance their experience."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Solutions",
                description: "Built-in security measures to protect your data and your users."
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Native",
                description: "Leverage the power of cloud computing for scalable and reliable applications."
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Data Driven",
                description: "Make informed decisions with powerful analytics and insights."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Support",
                description: "24/7 support to ensure your business runs smoothly."
              }
            ].map((feature, i) => (
              <Card key={i} className="group relative overflow-hidden bg-black/50 border border-white/10 hover:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 relative">
                  <div className="text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </HighlightGroup>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white relative" id="services">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#00000010,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">Services</h2>
            <div className="w-20 h-1 bg-black mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                description: "Scalable cloud solutions built for performance"
              },
              {
                icon: Shield,
                title: "Cyber Security",
                description: "Advanced protection for your digital assets"
              },
              {
                icon: Code2,
                title: "Development",
                description: "Custom software tailored to your needs"
              },
              {
                icon: Layout,
                title: "UI/UX Design",
                description: "Intuitive interfaces that engage users"
              },
              {
                icon: Database,
                title: "Data Analytics",
                description: "Transform data into actionable insights"
              },
              {
                icon: BarChart,
                title: "Business Intel",
                description: "Strategic insights for growth"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
                <div className="relative p-8 border border-black/10 hover:border-black/20 transition-all duration-500 h-full">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
                  <div className="absolute bottom-0 right-0 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full" />
                  <service.icon className="h-12 w-12 mb-6 text-black/80 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-black relative" id="pricing">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <GooeyText
              texts={["Pricing Plans", "Choose Your Plan", "Get Started"]}
              morphTime={3}
              cooldownTime={2}
              className="text-5xl font-bold text-white mb-4"
              textClassName="text-white"
            />
            <div className="w-20 h-1 bg-white mx-auto" />
          </div>
          <HighlightGroup className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "$99",
                description: "For small businesses",
                features: [
                  "Basic analytics",
                  "5 team members",
                  "10GB storage",
                  "Email support",
                  "API access"
                ]
              },
              {
                name: "Professional",
                price: "$199",
                description: "For growing teams",
                features: [
                  "Advanced analytics",
                  "15 team members",
                  "50GB storage",
                  "Priority support",
                  "Full API access",
                  "Custom integrations",
                  "Team training"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$399",
                description: "For large organizations",
                features: [
                  "Custom analytics",
                  "Unlimited members",
                  "500GB storage",
                  "24/7 support",
                  "Custom solutions",
                  "Advanced security",
                  "Dedicated manager",
                  "Custom training"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`group relative ${
                  plan.popular ? 'transform -translate-y-4' : ''
                }`}
              >
                <div className={`relative p-8 transition-all duration-500 ${
                  plan.popular
                    ? 'bg-white text-black'
                    : 'bg-black/50 text-white border border-white/10 group-hover:border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm font-semibold py-1 px-4 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className={plan.popular ? 'text-gray-600' : 'text-gray-300'}>/month</span>
                  </div>
                  <p className={`mb-8 ${plan.popular ? 'text-gray-600' : 'text-gray-300'}`}>
                    {plan.description}
                  </p>
                  <Button
                    className={`w-full mb-8 ${
                      plan.popular
                        ? 'bg-black text-white hover:bg-gray-900'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    Get Started
                  </Button>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className={`h-5 w-5 mr-3 ${
                          plan.popular ? 'text-black' : 'text-white'
                        }`} />
                        <span className={plan.popular ? 'text-gray-600' : 'text-gray-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </HighlightGroup>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white relative" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#00000010,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">Contact</h2>
            <div className="w-20 h-1 bg-black mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-black/5 backdrop-blur-lg p-8 border border-black/10">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg">Name</Label>
                  <Input
                    id="name"
                    className="mt-2 h-12 bg-white border-black/10"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-2 h-12 bg-white border-black/10"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg">Message</Label>
                  <Textarea
                    id="message"
                    className="mt-2 bg-white border-black/10"
                    placeholder="Your message..."
                    rows={6}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-lg bg-black text-white hover:bg-gray-900"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <HighlightGroup className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    details: ["123 Design Avenue", "Creative City, CC 12345"]
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    details: ["+1 (555) 123-4567", "Mon-Fri, 9AM-6PM"]
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    details: ["hello@vision.com", "support@vision.com"]
                  }
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden bg-black/5 border border-black/10 hover:border-black/20"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(0,0,0,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-black/5 rounded-lg group-hover:bg-black/10 transition-colors">
                          <item.icon className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <p className="font-semibold text-lg mb-2">{item.title}</p>
                          {item.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </HighlightGroup>

              <Card className="p-8 bg-black/5 border border-black/10">
                <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed" }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
