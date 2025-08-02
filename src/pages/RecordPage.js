import { useState, useEffect } from 'react'
import CardRecord from '../components/CardRecord'
import CardDiary from '../components/CardDiary'
import Button from '../components/Button'
import BodyRecordChart from '../components/BodyRecordChart'
import { fetchBodyGraphData, fetchBodyExerciseData } from "../services/api";

const RecordPage = () => {
    const [graphData, setGraphData] = useState(null);
    const [exerciseData, setExerciseData] = useState([]);

    useEffect(() => {
        fetchBodyGraphData().then(setGraphData);
        fetchBodyExerciseData().then(setExerciseData);
    }, []);

    return (
        <div className='max-w-[960px] mx-auto'>
            {/* record */}
            <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mt-16'>
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

            {/* body record chart */}
            <div className='bg-dark-600 h-[304px] mt-16 text-white px-4 py-3'>
                <div className='flex flex-wrap items-center gap-2'>
                    <p className='w-full sm:w-[96px]' style={{ fontSize: "15px" }}>BODY RECORD</p>
                    <p style={{ fontSize: "22px" }}>2021.05.21</p>
                </div>
                <div className='h-[210px]'>
                    <BodyRecordChart data={graphData} />
                </div>
                <div className='flex flex-wrap gap-2 mt-2'>
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

            {/* exercise records */}
            <div className='bg-dark-500 mt-16 text-white h-[264px] px-4 py-3'>
                <div className='flex flex-wrap items-center gap-2'>
                    <p className='w-full sm:w-[96px]' style={{ fontSize: "15px" }}>MY EXERCISE</p>
                    <p style={{ fontSize: "22px" }}>2021.05.21</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 h-[192px] overflow-y-auto">
                    {exerciseData.map((item) => (
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

            {/* diary */}
            <div className='mt-16'>
                <p style={{ fontSize: "22px" }}>MY DIARY</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2 mt-1'>
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
