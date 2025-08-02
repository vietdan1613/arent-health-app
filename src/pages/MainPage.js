import React, { useState, useEffect } from 'react'
import FilterButton from '../components/FilterButton'
import CardPhoto from '../components/CardPhoto'
import Button from '../components/Button'
import BodyRecordChart from '../components/BodyRecordChart'
import { fetchBodyGraphData } from "../services/api";

const MainPage = () => {
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        fetchBodyGraphData().then(setGraphData);
    }, []);

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='bg-red-500'>
                <div className='flex h-[312px] justify-between'>
                    <div className='overflow-hidden bg-gray-100 w-[540px] shadow-md'>
                        <img
                            src='/imgs/d01.jpg'
                            className='object-cover w-full h-full'
                            alt='Main Visual'
                        />
                    </div>

                    <div className='bg-dark-600 flex-1 flex justify-center items-center text-white px-16 py-2'>
                        <BodyRecordChart data={graphData} />
                    </div>
                </div>
            </div>

            <div className='flex py-8 gap-[64px] items-center justify-center'>
                <FilterButton text='Morning' />
                <FilterButton text='Lunch' />
                <FilterButton text='Dinner' />
                <FilterButton text='Snack' />
            </div>

            <div>
                <div class="flex gap-2 flex-wrap items-center justify-center px-[140px]">
                    <CardPhoto
                        src={"/imgs/m01.jpg"}
                        label='05.21.Morning' />
                    <CardPhoto
                        src={"/imgs/d02.jpg"}
                        label='05.21.Lunch' />
                    <CardPhoto
                        src={"/imgs/m02.jpg"}
                        label='05.21.Dinner' />
                    <CardPhoto
                        src={"/imgs/d01.jpg"}
                        label='05.21.Snack' />
                    <CardPhoto
                        src={"/imgs/s01.jpg"}
                        label='05.20.Morning' />
                    <CardPhoto
                        src={"/imgs/m03.jpg"}
                        label='05.20.Lunch' />
                    <CardPhoto
                        src={"/imgs/d02.jpg"}
                        label='05.20.Dinner' />
                    <CardPhoto
                        src={"/imgs/m01.jpg"}
                        label='05.21.Snack' />
                </div>
            </div>

            <div className='flex justify-center mt-8 items-center mb-16'>
                <Button label='記録をもっと見る' />
            </div>
        </div>
    )
}

export default MainPage