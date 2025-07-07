import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletName } from '@solana/wallet-adapter-base';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, CircleDot, LayoutDashboard, DollarSign, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';
import CustomWalletConnect from '@/components/solana/connect-wallet'

const Header = () => {
  const [activePage, setActivePage] = useState('features');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode
  const { connected, connecting, publicKey, select, wallets, connect, disconnect } = useWallet();
  const [showWallets, setShowWallets] = useState(false);

  useEffect(() => {
    // Apply the theme to the document when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    const element = document.getElementById(page);
    if (element) {
      // Special centering logic for chat-interface
      if (page === 'chat-interface') {
        const iframe = element.querySelector('iframe');
        if (iframe) {
          const iframeRect = iframe.getBoundingClientRect();
          const iframeCenter = iframeRect.top + window.scrollY + iframeRect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          window.scrollTo({
            top: iframeCenter - viewportCenter - 50,
            behavior: 'smooth',
          });
          setMobileMenuOpen(false);
          return;
        }
      }
      // Default scroll for other sections
      const yOffset = -81;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.warn(`Element with id "${page}" not found`);
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleConnect = async (walletName: WalletName) => {
    select(walletName);
    await connect();
    setShowWallets(false);
  };

  return (
    <div className="bg-background-header sticky top-0 z-50 pt-0 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 custom:px-8 flex items-center justify-between">
        <div className="p-3">
          <Logo />
        </div>
        
        {/* Mobile menu button */}
          <button 
            className="custom:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        
        {/* Desktop navigation */}
        <nav className="hidden custom:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background border border-border shadow-lg">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              <ToggleGroupItem 
                value="features"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'features' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('features')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Features
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="chat-interface" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'chat-interface' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('chat-interface')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5" /> Chat Now
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="pricing" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'pricing' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('pricing')}
              >
                <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="custom:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md my-6 py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'features' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('features')}
              >
                <CircleDot size={16} className="inline-block mr-1.5" /> Features
              </a>
              <a 
                href="#chat-interface" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'chat-interface' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('chat-interface')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5" /> Chat Now
              </a>
              <a 
                href="#pricing" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'pricing' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('pricing')}
              >
                <DollarSign size={16} className="inline-block mr-1.5" /> Pricing
              </a>
              
              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch 
                    checked={!isDarkMode} 
                    onCheckedChange={toggleTheme} 
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <CustomWalletConnect />
              </div>
            </div>
          </div>
        )}
        
        <div className="hidden custom:flex items-center gap-4">
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <CustomWalletConnect />
        </div>
      </header>
    </div>
  );
};

export default Header;
