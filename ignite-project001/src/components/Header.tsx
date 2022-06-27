import React from 'react';
import Logo from './Logo'

const components: React.FC = () => {
  return(
    <header className="w-full py-5 flex items-center border-b border-gray-600 justify-center bg-gray-700">
      <Logo />
    </header>
    
  );
}

export default components;