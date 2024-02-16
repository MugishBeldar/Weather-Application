import { useAppStore } from '../../store';
import { ConfigProvider, Modal } from 'antd';

const UnitSetting = () => {
    const { openModal, setOpenModal } = useAppStore();
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
                    onOk={() => setOpenModal(false)}
                    onCancel={() => setOpenModal(false)}
                    className='bg-customCharcolBlack'
                    classNames={{ wrapper: 'backdrop-blur-md', }}
                    okText='Save'
                >

                    <div className='text-customGray text-sm mb-4'>
                        <p className='my-2 '>TEMPERATURE</p>
                        <div className='flex w-full text-center bg-customeDarkBlue rounded py-1'>
                            <p className='w-1/2 m-1'>Celsius</p>
                            <p className='w-1/2 m-1'>Fahrenheit</p>
                        </div>
                    </div>

                    <div className='text-customGray text-sm mb-4'>
                        <p className='my-2 '>WIND SPEED</p>
                        <div className='flex w-full text-center bg-customeDarkBlue rounded py-1'>
                            <p className='w-1/2 m-1'>km/h</p>
                            <p className='w-1/2 m-1'>m/s</p>
                            <p className='w-1/2 m-1'>knots</p>
                        </div>
                    </div>

                    <div className='text-customGray text-sm mb-4'>
                        <p className='my-2 '>PRESSURE</p>
                        <div className='flex w-full text-center bg-customeDarkBlue rounded py-1'>
                            <p className='w-1/2 m-1'>hPa</p>
                            <p className='w-1/2 m-1'>inches</p>
                            <p className='w-1/2 m-1'>kPa</p>
                            <p className='w-1/2 m-1'>mm</p>
                        </div>
                    </div>

                </Modal>
            </ConfigProvider >
        </>
    );
};

export default UnitSetting;
