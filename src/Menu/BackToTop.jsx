import React, { useState } from 'react';

export default function GoBackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        }else {
            setIsVisible(false);
        }
    };
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, []);

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} className="fixed bottom-4 right-4 bg-gray-800 hover:bg-blue-800 text-white px-4 py-2 rounded-md">
                    Back to Top
                </button>
            )}
        </div>
    )
};