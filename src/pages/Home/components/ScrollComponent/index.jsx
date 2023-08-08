import React from 'react'

const  ScrollComponent = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const elementOffset = /* вычислите смещение компоненты относительно верхней части страницы */;

      if (scrollTop + windowHeight >= elementOffset) {
        setIsVisible(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isVisible && <YourComponent />}
    </div>
  );
}

export default React.memo(ScrollComponent)