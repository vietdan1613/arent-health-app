import React from 'react'
import CardRecommanded from '../components/CardRecommanded'
import Button from '../components/Button'
import CardPhotoDescription from '../components/CardPhotoDescription'

const ColumnPage = () => {
    return (
        <div className='max-w-[960px] mx-auto'>
            {/* recommended */}
            <div className='flex flex-wrap justify-between gap-4 mt-16'>
                <CardRecommanded label='RECOMMENDED COLUMN' description='オススメ' />
                <CardRecommanded label='RECOMMENDED DIET' description='ダイエット' />
                <CardRecommanded label='RECOMMENDED BEAUTY' description='美容' />
                <CardRecommanded label='RECOMMENDED HEALTH' description='健康' />
            </div>

            {/* photos */}
            <div className='mt-16'>
                <p style={{ fontSize: "22px" }}>MY DIARY</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 mt-1'>
                    <CardPhotoDescription src={"/imgs/column-1.jpg"} label='2021.05.17 23:25' description='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメい魚を食べるメリット' tags={['魚料理', '和食', 'DHA']} />
                    <CardPhotoDescription src={"/imgs/column-2.jpg"} label='2021.05.17 23:25' description='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメい魚を食べるメリット' tags={['魚料理', '和食', 'DHA']} />
                    <CardPhotoDescription src={"/imgs/column-3.jpg"} label='2021.05.17 23:25' description='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメい魚を食べるメリット' tags={['魚料理', '和食', 'DHA']} />
                    <CardPhotoDescription src={"/imgs/column-4.jpg"} label='2021.05.17 23:25' description='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメい魚を食べるメリット' tags={['魚料理', '和食', 'DHA']} />
                    <CardPhotoDescription src={"/imgs/column-5.jpg"} label='2021.05.17 23:25' description='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメい魚を食べるメリット' tags={['魚料理', '和食', 'DHA']} />
                    <CardPhotoDescription src={"/imgs/column-6.jpg"} label='2021.05.17 23:25' description='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメい魚を食べるメリット' tags={['魚料理', '和食', 'DHA']} />
                    <CardPhotoDescription src={"/imgs/column-7.jpg"} label='2021.05.17 23:25' description='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメい魚を食べるメリット' tags={['魚料理', '和食', 'DHA']} />
                    <CardPhotoDescription src={"/imgs/column-8.jpg"} label='2021.05.17 23:25' description='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメい魚を食べるメリット' tags={['魚料理', '和食', 'DHA']} />
                </div>
            </div>

            <div className='flex justify-center mt-8 mb-16'>
                <Button label='自分の日記をもっと見る'></Button>
            </div>
        </div>
    )
}

export default ColumnPage
