import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div 
        className="h-16 w-16 bg-foreground"
        style={{
          maskImage: `url(/vespucc.logo.svg)`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center'
        }}
      />
    </div>
  );
};

export default Logo;