import { useNavigate } from 'react-router-dom';
import homeImage from '../assets/home.png';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${homeImage})`,
      }}>

      <div className="hero-overlay bg-opacity-55"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Seed Circle</h1>
          <h2 className="mb-5">
            From Seed to Plate: Discover, Grow, Enjoy.
          </h2>
          <button className="btn btn-accent glass" onClick={handleGetStarted}>Get Started</button>

        </div>
      </div>
    </div>
  );
}

export default Home;
