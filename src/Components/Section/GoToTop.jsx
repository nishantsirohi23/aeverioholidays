import { useEffect } from 'react';

function GoToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const goTopButton = document.querySelector('.go-top');
      if (window.scrollY > 300) {
        goTopButton.classList.add('active');
      } else {
        goTopButton.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#top" className="go-top" onClick={scrollToTop} data-go-top>
      <ion-icon name="chevron-up-outline"></ion-icon>
    </a>
  );
}

export default GoToTop;