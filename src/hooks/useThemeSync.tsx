import { useEffect } from 'react';

export const useThemeSync = (iframeRef: React.RefObject<HTMLIFrameElement>) => {
  const getCurrentTheme = () => {
    return document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
  };

  const sendThemeToIframe = (theme: string) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'THEME_CHANGE',
        theme: theme
      }, '*'); // Use specific origin in production: 'http://localhost:3080'
    }
  };

  const handleIframeLoad = () => {
    // Send initial theme when iframe loads
    const currentTheme = getCurrentTheme();
    setTimeout(() => {
      sendThemeToIframe(currentTheme);
    }, 1000); // Small delay to ensure iframe is fully loaded
  };

  // Listen for theme changes on main website
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const currentTheme = getCurrentTheme();
          sendThemeToIframe(currentTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return { handleIframeLoad };
};