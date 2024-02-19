import { useAppStore } from '../../store';
import { ConfigProvider, Modal } from 'antd';
import useUnitSettingContrller from './unitSetting.controller';

const UnitSetting = () => {
    const { openModal, settings} = useAppStore();
    const {handleSettings, handleOk, handleCancle} = useUnitSettingContrller()

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            contentBg: 'bg-customCharcolBlack',
                            headerBg: 'bg-customCharcolorBlack',
                            borderRadiusOuter: 10,
                            colorTextHeading: "whitesmoke",
                            titleFontSize: 25
                        }
                    },
                }}
            >
                <Modal
                    title="Setting"
                    centered
                    open={openModal}
                    onOk={handleOk}
                    onCancel={handleCancle}
                    className='bg-customCharcolBlack'
                    classNames={{ wrapper: 'backdrop-blur-md', }}
                    okText='Save'
                >

                    <div className='text-customGray text-sm mb-4'>
                        <p className='m-2 '>TEMPERATURE</p>
                        <div className='flex w-full text-center bg-customeDarkBlue rounded py-1'>
                            <p onClick={() => { handleSettings('temperature', 'celsius') }} className={`w-1/2 m-1 py-2 ${settings?.temperature === 'celsius' ? 'bg-customGray text-white rounded' : null}`}>Celsius</p>
                            <p onClick={() => { handleSettings('temperature', 'fahrenheit') }} className={`w-1/2 m-1 py-2 ${settings?.temperature === 'fahrenheit' ? 'bg-customGray text-white rounded' : null}`}>Fahrenheit</p>
                            <p onClick={() => { handleSettings('temperature', 'kelvin') }} className={`w-1/2 m-1 py-2 ${settings?.temperature === 'kelvin' ? 'bg-customGray text-white rounded' : null}`}>Kelvin</p>
                        </div>
                    </div>

                    <div className='text-customGray text-sm mb-4'>
                        <p className='m-2 '>WIND SPEED</p>
                        <div className='flex w-full text-center bg-customeDarkBlue rounded py-1'>
                            <p onClick={() => { handleSettings('windSpeed', 'km/h') }} className={`w-1/2 m-1 py-2 ${settings?.windSpeed === 'km/h' ? 'bg-customGray text-white rounded' : null}`}>km/h</p>
                            <p onClick={() => { handleSettings('windSpeed', 'm/s') }} className={`w-1/2 m-1 py-2 ${settings?.windSpeed === 'm/s' ? 'bg-customGray text-white rounded' : null}`}>m/s</p>
                            <p onClick={() => { handleSettings('windSpeed', 'knots') }} className={`w-1/2 m-1 py-2 ${settings?.windSpeed === 'knots' ? 'bg-customGray text-white rounded' : null}`}>knots</p>
                        </div>
                    </div>

                    <div className='text-customGray text-sm mb-4'>
                        <p className='m-2 '>PRESSURE</p>
                        <div className='flex w-full text-center bg-customeDarkBlue rounded py-1'>
                            <p onClick={() => { handleSettings('pressure', 'hPa') }} className={`w-1/2 m-1 py-2 ${settings?.pressure === 'hPa' ? 'bg-customGray text-white rounded' : null}`}>hPa</p>
                            <p onClick={() => { handleSettings('pressure', 'inches') }} className={`w-1/2 m-1 py-2 ${settings?.pressure === 'inches' ? 'bg-customGray text-white rounded' : null}`}>inches</p>
                            <p onClick={() => { handleSettings('pressure', 'kPa') }} className={`w-1/2 m-1 py-2 ${settings?.pressure === 'kPa' ? 'bg-customGray text-white rounded' : null}`}>kPa</p>
                            <p onClick={() => { handleSettings('pressure', 'mm') }} className={`w-1/2 m-1 py-2 ${settings?.pressure === 'mm' ? 'bg-customGray text-white rounded' : null}`}>mm</p>
                        </div>
                    </div>

                </Modal>
            </ConfigProvider >
        </>
    );
};

export default UnitSetting;
