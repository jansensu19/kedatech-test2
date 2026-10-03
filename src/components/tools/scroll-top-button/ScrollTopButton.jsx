import { useState, useEffect } from 'react';
import './ScrollTopButton.scss';
import useSmoothScroll from '../../../hooks/useSmoothScroll';

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;

      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scrollTo(0, 1000);
  };

  if (!isVisible) return null;

  return (
    <button type="button" className="scroll-top-button show" onClick={scrollToTop}>↑</button>
  );
}
