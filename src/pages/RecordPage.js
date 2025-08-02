import React from 'react'
import CardRecord from '../components/CardRecord'
import CardDiary from '../components/CardDiary'
import Button from '../components/Button'
const exercise_data = [
    {
        id: 1,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 2,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 3,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 4,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 5,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 6,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 7,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 8,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 9,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 10,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 11,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 12,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 13,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 14,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 15,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 16,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 17,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
    {
        id: 18,
        name: '家事全般（立位・軽い）',
        calories: 'kcal',
        duration: '10 min',
    },
]

const RecordPage = () => {
    return (
        <div className='max-w-[960px] mx-auto'>
            <div className='flex items-center justify-between  mt-16'>
                <CardRecord src="/imgs/MyRecommend-1.jpg"
                    label='BODY RECORD'
                    description='自分のカラダの記録' />
                <CardRecord src="/imgs/MyRecommend-2.jpg"
                    label='MY EXERCISE'
                    description='自分の運動の記録' />
                <CardRecord src="/imgs/MyRecommend-3.jpg"
                    label='MY DIARY'
                    description='自分の日記' />
            </div>

            <div className='bg-black h-[304px] mt-16'>Chart</div>

            <div className='bg-dark-500 mt-16 text-white h-[264px] px-6 py-3'>
                <div className='flex'>
                    <p className='w-[96px]' style={{ fontSize: "15px" }}>MY EXERCISE</p>
                    <p style={{ fontSize: "22px" }}>2021.05.21</p>
                </div>

                {/* a row */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 h-[192px] overflow-y-auto">
                    {exercise_data.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between pr-4 border-b border-gray-400 last:border-b-0"
                            style={{ fontSize: '15px' }}
                        >
                            <div className="flex">
                                <p className="mt-1 mr-3 text-primary-300" style={{ fontSize: '6px' }}>●</p>
                                <div>
                                    <p>{item.name}</p>
                                    <p className="text-primary-300">26kcal</p>
                                </div>
                            </div>
                            <p className="text-primary-300 text-lg">{item.duration}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-16'>
                <p style={{ fontSize: "22px" }}>MY DIARY</p>
                <div className='grid grid-cols-4 gap-x-2 gap-y-2 mt-1'>
                    <CardDiary />
                    <CardDiary />
                    <CardDiary />
                    <CardDiary />
                    <CardDiary />
                    <CardDiary />
                    <CardDiary />
                    <CardDiary />
                </div>
            </div>

            <div className='flex justify-center mt-8 mb-16'>
                <Button label='自分の日記をもっと見る'></Button>
            </div>
        </div>
    )
}

export default RecordPage