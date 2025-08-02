import React from 'react'
import FilterButton from '../components/FilterButton'
import Photo from '../components/Photo'
import Button from '../components/Button'

const MainPage = () => {
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

                    <div className='bg-black flex-1 '>
                        <span>Graph Area</span>
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
                    <Photo
                        src={"/imgs/m01.jpg"}
                        label='05.21.Morning' />
                    <Photo
                        src={"/imgs/d02.jpg"}
                        label='05.21.Lunch' />
                    <Photo
                        src={"/imgs/m02.jpg"}
                        label='05.21.Dinner' />
                    <Photo
                        src={"/imgs/d01.jpg"}
                        label='05.21.Snack' />
                    <Photo
                        src={"/imgs/s01.jpg"}
                        label='05.20.Morning' />
                    <Photo
                        src={"/imgs/m03.jpg"}
                        label='05.20.Lunch' />
                    <Photo
                        src={"/imgs/d02.jpg"}
                        label='05.20.Dinner' />
                    <Photo
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