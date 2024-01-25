import Annonce from '../tools/annonce'
import { GridPlus, CloudUpload, Clock } from 'iconoir-react'

const Annonces = () => {
    return (
        <div className='w-full h-screen overflow-scroll'>
            <div className='relative h-full p-9 py-5'>
                <p className='text-5xl font-bold py-2'>
                    Publications
                </p>
                <div className='flex justify-start space-x-3 mt-12'>
                    <div className='flex justify-around space-x-3 p-3 px-5 border-2 border-white cursor-pointer rounded-2xl text-white gradient'>
                        <div>
                            <GridPlus />
                        </div>
                        <p>
                            All
                        </p>
                    </div>
                    <div
                        className='flex justify-around space-x-3 p-3 px-5 border-2 border-black cursor-pointer rounded-2xl'
                        onClick={() => {
                            setStep(prev => prev - 1)
                        }}>
                        <CloudUpload />
                        <p>
                            Published
                        </p>
                    </div>
                    <div
                        className='flex justify-around space-x-3 p-3 px-5 border-2 border-black cursor-pointer rounded-2xl'
                        onClick={() => {
                            setStep(prev => prev - 1)
                        }}>
                        <Clock />
                        <p>
                            Draft
                        </p>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className="flex flex-wrap lg:flex-none">
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                        <Annonce className='lg:w-1/3 md:w-1/2 w-full mx-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Annonces