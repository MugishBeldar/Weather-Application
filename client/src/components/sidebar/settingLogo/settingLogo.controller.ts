// import { useNavigate } from "react-router-dom";

import { useAppStore } from "../../../store";

const useSettingLogoController = () => {
  // const navigate = useNavigate();
  const {setOpenModal} = useAppStore();
  const handleClick = () => {
    console.log("handel navigate");
    setOpenModal(true);
  };
  return {
    handleClick,
  };
};

export default useSettingLogoController;
