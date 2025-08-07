
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Open-Source Repository Marketplace",
      description: "Discover and deploy specialized open-source repositories for any use case through our unified platform.",
      expandedDescription: "Browse through our diverse ecosystem of repositories covering general purpose tasks, education, finance, professional services, and blockchain-specific applications. Each repository is AI-curated and ready for hybrid deployment.",
      icon: (
        <Layers size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Hybrid Deployment Pricing",
      description: " model with free local cloning and cloud fees as low as 0.5% per transaction - no monthly subscriptions.",
      expandedDescription: "Break free from complex setups. Our transparent, blockchain-powered pricing ensures free local deployments for control and nominal token fees for cloud convenience via IPFS. Perfect for individuals, startups, and enterprises seeking efficient open-source solutions.",
      icon: (
        <Grid3x3 size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Blockchain Integration",
      description: "Built on Solana blockchain for transparency, security, and seamless token-based incentives.",
      expandedDescription: "Leverage Solana's high throughput and low fees for features like staking, bounties (with 7% platform cut), and NFT rewards. All transactions are transparent, secure, and on-chain, enabling decentralized governance and contributor rewards.",
      icon: (
        <LayoutDashboard size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Open Source Foundation",
      description: "Fully open-source platform built with cutting-edge technologies like React, LangChain, and IPFS.",
      expandedDescription: "Our commitment to open-source ensures complete transparency and community collaboration. Built with React for intuitive UIs, LangChain for AI workflows, and IPFS for decentralized cloud deployments, fostering innovation in discovery and integration.",
      icon: (
        <ListCheck size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "No Technical Barriers",
      description: "Web-based platform accessible to users of all technical levels with AI-guided discovery.",
      expandedDescription: "Whether you're a novice or expert, our intuitive interface and AI assistants like Vespucci Guide make open-source accessible. No complex setups required - just search, click, and deploy repositories instantly with automated dependency resolution.",
      icon: (
        <Star size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Diverse Repository Ecosystem",
      description: "Comprehensive suite of repositories for text generation, image editing, code analysis, and specialized tasks.",
      expandedDescription: "From educational tools and financial optimizers to blockchain auditors and professional simulators, our growing ecosystem covers every domain. Enhanced with AI personalization and blockchain incentives for contributions across AI, finance, education, and more.",
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
