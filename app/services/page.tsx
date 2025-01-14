import { Card } from "@/components/ui/card"
import { 
  BarChart, 
  Cloud, 
  Code2, 
  Database, 
  Layout, 
  Shield 
} from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your business"
    },
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored software solutions for your unique needs"
    },
    {
      icon: Layout,
      title: "Digital Design",
      description: "Modern and responsive design solutions"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights"
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Strategic insights for informed decision making"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
          alt="Services hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <service.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}