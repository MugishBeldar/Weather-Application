import { useState } from 'react';
import { AutoComplete, ConfigProvider } from 'antd';
import { useAppStore } from '../../store';
import useSearchCitiesController from './searchCities.controller';
import { FilterCityTypes } from '../../types';

const SearchCities = () => {

    const [filterCity, setFilterCity] = useState<FilterCityTypes[]>([])
    const [inputFieldValue, setInputFieldValue] = useState<string>('');
    const { weatherData } = useAppStore();
    const { handleSearch, handleSelect, handleChange } = useSearchCitiesController({ setFilterCity, setInputFieldValue });

    return (
        <>
            {weatherData && Object.keys(weatherData).length > 0 && (
                <div className='h-[.5%]'>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#202B3B',
                                colorBorder: '#202B3B',
                                colorBgContainer: '#202B3B',
                                colorText: "geekblue-3",
                                colorTextPlaceholder: '#A1A7B3'
                            },
                        }} >
                        <AutoComplete
                            style={{
                                width: '100%',
                                padding: '0px 10px'
                            }}
                            onSearch={handleSearch}
                            placeholder="Enter City Name"
                            options={filterCity}
                            onSelect={handleSelect}
                            value={inputFieldValue}
                            onChange={handleChange}
                        />
                    </ConfigProvider>
                </div>
            )}
        </>
    );
}

export default SearchCities;
