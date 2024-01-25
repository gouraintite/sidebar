import Annonce from '../tools/annonce'

const MyFavs = () => {
    return (
        <div className='w-full h-screen overflow-scroll'>
            <div className='relative h-full p-9 py-5'>
                <p className='text-5xl font-bold py-2'>
                    Mes Favoris
                </p>
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

export default MyFavs