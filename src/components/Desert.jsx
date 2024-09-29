
function Desert() {
    const imageSrc = "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-cover bg-center text-white'>
            <img
                src={imageSrc}
                alt=""
                className='z-0 bg-center bg-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full'
            />
            <div className='absolute top-0 left-0 h-full w-full bg-black opacity-50'></div>

            <div className='z-50 flex flex-col justify-center items-center text-center gap-2 sm:gap-4 md:gap-8'>
                <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Desert</h1>
                <p className='text-white text-lg sm:text-2xl md:text-3xl max-w-[40ch]'>Arid regions with sparse vegetation and extreme temperature fluctuations.</p>
            </div>
        </div>
    )
}

export default Desert