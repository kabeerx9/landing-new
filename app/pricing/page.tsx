import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for small businesses",
      features: [
        "Basic analytics",
        "5 team members",
        "10GB storage",
        "Email support",
        "Basic reporting"
      ]
    },
    {
      name: "Professional",
      price: "$199",
      description: "Ideal for growing companies",
      features: [
        "Advanced analytics",
        "15 team members",
        "50GB storage",
        "Priority support",
        "Custom reporting",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      description: "For large organizations",
      features: [
        "Full analytics suite",
        "Unlimited team members",
        "500GB storage",
        "24/7 dedicated support",
        "Custom solutions",
        "API access",
        "On-premise option"
      ]
    }
  ]

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-500">
            Choose the plan that best fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 ${plan.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="text-primary text-sm font-semibold mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-500 mb-6">{plan.description}</p>
              <Button 
                className="w-full mb-6"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-500">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}