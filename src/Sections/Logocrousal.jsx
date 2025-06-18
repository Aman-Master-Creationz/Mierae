
import logo1 from '../assets/images/logo1.svg';
import logo2 from '../assets/images/logo2.svg';
import logo3 from '../assets/images/logo3.svg';
import logo4 from '../assets/images/logo4.svg';


const logos = [logo1, logo2, logo3, logo4];

const LogoCarousel = () => {
  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
    background: '#F6F6F6',
    whiteSpace: 'nowrap',
  };

  const trackStyle = {
    display: 'inline-flex',
    animation: 'scroll 30s linear infinite',
  };

  const slideStyle = {
    flex: '0 0 auto',
  };

  // Keyframes injected directly
  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `;

  // Repeat logos more than twice to ensure smooth loop (5 * 3 = 15 slides)
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="container crousal">
      <div className="row ">

          <div className='logo-carousel' style={containerStyle}>
            <style>{keyframes}</style>
            <div className='logo-track' style={trackStyle}>
              {repeatedLogos.map((logo, index) => (
                <div key={index} style={slideStyle}>
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    style={{ height: '50px', width: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </div>

      </div>
    </div>

  );
};

export default LogoCarousel;
