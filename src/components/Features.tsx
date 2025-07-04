
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "AI Agent Marketplace",
      description: "Discover and deploy specialized AI agents for any use case through our unified platform.",
      expandedDescription: "Browse through our diverse ecosystem of AI agents covering general purpose tasks, education, finance, professional services, and blockchain-specific applications. Each agent is pre-configured and ready to deploy.",
      icon: (
        <Layers size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Pay-Per-Prompt Pricing",
      description: "Revolutionary pricing model with costs as low as $0.0008 per prompt - no monthly subscriptions.",
      expandedDescription: "Break free from expensive monthly fees. Our transparent, blockchain-powered pricing ensures you only pay for what you use. Perfect for individuals, startups, and enterprises looking for cost-effective AI solutions.",
      icon: (
        <Grid3x3 size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Blockchain Integration",
      description: "Built on Solana blockchain for transparency, security, and seamless token-based transactions.",
      expandedDescription: "Leverage the power of blockchain technology with our native token system. All transactions are transparent, secure, and recorded on-chain. Experience the future of AI with decentralized infrastructure.",
      icon: (
        <LayoutDashboard size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Open Source Foundation",
      description: "Fully open-source platform built with cutting-edge technologies like MCP, LangChain, and Node-RED.",
      expandedDescription: "Our commitment to open-source means complete transparency and community collaboration. Built with Model Context Protocol for standardized AI agent communication, LangChain for robust AI workflows, and Node-RED for visual programming.",
      icon: (
        <ListCheck size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "No Technical Barriers",
      description: "Web-based platform accessible to users of all technical levels.",
      expandedDescription: "Whether you're a developer or a business user, our intuitive interface makes AI accessible to everyone. No complex setups, no technical expertise required - just point, click, and deploy AI agents instantly.",
      icon: (
        <Star size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Diverse AI Ecosystem",
      description: "Comprehensive suite of AI agents for text generation, image editing, code analysis, and specialized tasks.",
      expandedDescription: "From market analysts and content creators to 3D modelers and smart contract auditors, our growing ecosystem covers every industry need. Specialized agents for education, finance, legal, medical, and blockchain applications.",
      icon: (
        <BookOpen size={24} className="text-cosmic-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            Everything you need to explore AI
          </h2>
          <p className="text-cosmic-muted text-lg">
            Chart the digital frontier with our blockchain-powered marketplace of specialized AI agents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                <p className="text-cosmic-muted">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-cosmic-light/10">
                  <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
