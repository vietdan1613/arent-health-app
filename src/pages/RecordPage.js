import React from 'react'
import CardRecord from '../components/CardRecord'
import CardDiary from '../components/CardDiary'
import Button from '../components/Button'
import BodyRecordChart from '../components/BodyRecordChart'

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

            <div className='bg-dark-600 h-[304px] mt-16 text-white h-[304px] mt-16 px-6 py-3'>
                <div className='flex'>
                    <p className='w-[96px]' style={{ fontSize: "15px" }}>BODY RECORD</p>
                    <p style={{ fontSize: "22px" }}>2021.05.21</p>
                </div>
                <div className='h-[210px]'>
                    <BodyRecordChart data={chart_data} />
                </div>
                <div className='flex gap-4'>
                    <button className='bg-white text-dark-500 w-[56px] rounded-full'>
                        日
                    </button>
                    <button className='bg-white text-dark-500 w-[56px] rounded-full'>
                        週
                    </button>
                    <button className='bg-white text-dark-500 w-[56px] rounded-full'>
                        月
                    </button>
                    <button className='bg-primary-300 text-white w-[56px] rounded-full'>
                        年
                    </button>
                </div>
            </div>

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

const chart_data = [
    { month: '6月', weight: 75, fat: 75 },
    { month: '7月', weight: 74, fat: 74 },
    { month: '8月', weight: 65, fat: 72 },
    { month: '9月', weight: 72, fat: 71 },
    { month: '10月', weight: 69, fat: 68 },
    { month: '11月', weight: 67, fat: 67 },
    { month: '12月', weight: 70, fat: 65 },
    { month: '1月', weight: 65, fat: 64 },
    { month: '2月', weight: 64, fat: 63 },
    { month: '3月', weight: 62, fat: 60 },
    { month: '4月', weight: 60, fat: 59 },
    { month: '5月', weight: 59, fat: 58 },
];

export default RecordPage