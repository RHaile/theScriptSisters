import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Seed Circle</h1>
          <p className="py-6">From Seed to Plate</p>
          <button className="btn btn-primary" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
