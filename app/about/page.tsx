import { Card } from "@/components/ui/card"
import { Target, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="About hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">
            Learn about our mission, vision, and the values that drive us forward
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-500 mb-4">
                Founded in 2020, Modern Company has been at the forefront of digital transformation, 
                helping businesses navigate the complexities of the modern digital landscape.
              </p>
              <p className="text-gray-500">
                Our team of experts brings together decades of experience in technology, 
                business strategy, and digital innovation to deliver exceptional results 
                for our clients.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
                alt="Our team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Mission",
                description: "To empower businesses with innovative solutions that drive growth and success"
              },
              {
                icon: Zap,
                title: "Vision",
                description: "To be the leading force in digital transformation and business innovation"
              },
              {
                icon: Users,
                title: "Values",
                description: "Excellence, integrity, innovation, and customer success drive everything we do"
              }
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <value.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}