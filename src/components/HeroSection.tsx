import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import TaskBoard from './TaskBoard';
import { Loader } from 'lucide-react';
import { useThemeSync } from '@/hooks/useThemeSync';

const HeroSection = () => {
  const [activePage, setActivePage] = useState('features');
  const [isVisible, setIsVisible] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { handleIframeLoad } = useThemeSync(iframeRef);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    console.log('Looking for element with id:', page); // Debug log
    const element = document.getElementById(page);
    console.log('Found element:', element); // Debug log
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.warn(`Element with id "${page}" not found`);
    }
  };

  return (
    <section className="relative w-full py-12 md:py-20 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Cosmic particle effect (background dots) */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-4xl text-center space-y-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            Developing Repository Marketplace
            <Loader className="h-3 w-3 animate-spin text-primary" />
          </span>
        </div>

          <h1 className="hero-title font-medium tracking-tighter text-balance text-foreground mx-auto max-w-full">
            Democratizing <span className="text-muted-foreground">Intelligence</span>
            <br />
            with <span className="text-muted-foreground">Blockchain</span> Technology
          </h1>

        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Discover, access, and deploy cutting-edge open-source repositories through our unified platform. Built on Solana blockchain for transparent, affordable solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 items-center">
            <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
            >
            <a href="https://chat.vespucc.ai" target="_blank" rel="noopener noreferrer">
              Test Our Beta
            </a>
            </Button>
          <Button
            asChild
            variant="outline"
            className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8 transition-all duration-200 min-h-[48px]"
          >
            <a
              href="/Whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Vespucci AI Whitepaper in a new tab"
            >
              Learn More
            </a>
          </Button>
        </div>
        
        <div className="pt-6 text-sm text-muted-foreground">
          Open-source • Pay per prompt • No monthly fees
        </div>
      </div>
 
      {/* Vespucci.ai Chat Interface iframe */}
      <div 
        id ="chat-interface"
        className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="cosmic-glow Hello relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
          <iframe 
            ref={iframeRef}
            src="https://chat.vespucc.ai" 
            width="100%" 
            height="50%"
            frameBorder="0"
            title="Vespucci.ai Chat Interface"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            className="w-full h-[60vh] rounded-xl"
            onLoad={handleIframeLoad}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
