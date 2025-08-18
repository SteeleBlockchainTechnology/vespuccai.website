import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const Pricing = () => {
  const scrollToChat = () => {
    const container = document.getElementById('chat-interface');
    if (!container) return;
    // Try to center iframe in viewport similar to header logic
    const iframe = container.querySelector('iframe');
    if (iframe) {
      const rect = iframe.getBoundingClientRect();
      const centerTarget = rect.top + window.scrollY + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      window.scrollTo({ top: centerTarget - viewportCenter - 50, behavior: 'smooth' });
      return;
    }
    const yOffset = -70;
    const y = container.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
const plans = [
  {
    name: "Explorer",
    price: "Free",
    description: "Perfect for individuals discovering open-source repositories for personal use",
    features: [
      "Standard AI search",
      "Unlimited local deployments",
      "Customizable workflows",
      "Standard response time",
      "Community support",
      "Open-source access"
    ],
    buttonText: "Start Exploring",
    buttonVariant: "outline",
    popular: false
  },
  {
    name: "Premium (Staking Required)",
    price: "0.5% fee",
    period: "per cloud deployment",
    description: "Ideal for businesses and developers with regular repository needs",
    features: [
      "Unlimited deployments",
      "Access to Vespucci Prime AI",
      "Priority processing",
      "Advanced analytics",
      "API access",
      "Developer support"
    ],
    buttonText: "Stake Now (Coming Soon)",
    buttonVariant: "default",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations needing specialized repository solutions and support",
    features: [
      "White-label integrations",
      "SLA guarantees",
      "Custom repository curation",
      "Priority processing",
      "Advanced analytics",
      "API access",
      "24/7 premium support"
    ],
    buttonText: "In Development",
    buttonVariant: "outline",
    popular: false
  }
];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Revolutionary pricing for Cloud Deployments
          </h2>
          <p className="text-muted-foreground text-lg">
            No monthly fees, no subscriptions - pay only for what you use
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border flex flex-col h-full ${
                plan.popular 
                  ? "border-primary/50 cosmic-glow bg-card" 
                  : "border-border cosmic-gradient bg-card"
              } transition-all duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Coming Soon
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-2xl font-medium tracking-tighter mb-1 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold tracking-tighter text-foreground">{plan.price}</div>
                  {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                </div>
                
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className={
                    plan.buttonVariant === "default" 
                      ? "w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "w-full border-border text-foreground hover:bg-muted"
                  }
                  variant={plan.buttonVariant as "default" | "outline"}
                  onClick={plan.name === 'Explorer' ? scrollToChat : undefined}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-muted-foreground">
          Have questions? <a href="#" className="text-primary hover:underline">Contact our team</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
