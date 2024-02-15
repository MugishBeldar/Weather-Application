import { useNavigate } from "react-router-dom";

const useSettingLogoController = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("handel navigate");
    navigate("/setting");
  };
  return {
    handleClick,
  };
};

export default useSettingLogoController;
