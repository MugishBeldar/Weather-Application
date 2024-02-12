import { useNavigate } from "react-router-dom";

const useLandingPageController = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/weather");
  };
  
  return {
    handleGetStarted,
  };
};

export { useLandingPageController };
