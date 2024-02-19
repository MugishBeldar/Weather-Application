import { useEffect } from "react";
import { useAppStore } from "../../store";
import { SettingTypes } from "../../types";

const useUnitSettingContrller = () => {
  const { settings, setSettings, setOpenModal } = useAppStore();

  useEffect(() => {
    localStorage.setItem("oldSetting", JSON.stringify(settings));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSettings = (parameter: keyof SettingTypes, unit: string) => {
    console.log(settings);
    settings[parameter] = unit;
    setSettings(settings);
  };

  const handleOk = () => {
    setOpenModal(false);
    setSettings(settings);
    localStorage.setItem("oldSetting", JSON.stringify(settings));
  };

  const handleCancle = () => {
    const oldSettingFromLocalStorage = localStorage.getItem("oldSetting");
    let parseSettingFromLocalStorage;
    if (oldSettingFromLocalStorage) {
      parseSettingFromLocalStorage = JSON.parse(oldSettingFromLocalStorage);
    }
    setSettings(parseSettingFromLocalStorage);
    setOpenModal(false);
  };

  return {
    handleSettings,
    handleOk,
    handleCancle,
  };
};
export default useUnitSettingContrller;
