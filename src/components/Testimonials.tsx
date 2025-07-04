import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vespucci AI transformed our workflow with affordable AI agents. The pay-per-prompt model saved us thousands compared to traditional AI platforms.",
      author: "Sarah Johnson",
      position: "CTO at TechStartup",
      avatar: "bg-cosmic-light/30"
    },
    {
      quote: "The blockchain integration provides transparency we never had before. Being able to track every AI interaction on-chain gives us complete accountability.",
      author: "Michael Chen",
      position: "Head of Innovation at DataCorp",
      avatar: "bg-cosmic-light/20"
    },
    {
      quote: "Open-source approach means we can customize everything. The diverse AI agent ecosystem covers all our business needs in one platform.",
      author: "Leila Rodriguez",
      position: "AI Strategy Director at GlobalTech",
      avatar: "bg-cosmic-light/40"
    }
  ];
  
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Trusted by innovators worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            See how our platform democratizes AI access for businesses of all sizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:border-border/60 transition-all duration-300"
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary inline-block mr-1">★</span>
                ))}
              </div>
              <p className="text-lg mb-8 text-foreground/90 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${testimonial.avatar} bg-muted`}></div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
