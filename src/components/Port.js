import PortImg from '../assets/img/stats-bg.jpg' 

function Port() {
    return (
        <div>
            <div className='h-96 lg:h-64 w-full bg-cover bg-center brightness-75' style={{ backgroundImage: `url(${PortImg})` }}>

                <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-between max-w-[1240px] mx-auto py-10 lg:py-28 px-16 gap-4 lg:px-0 text-green-500'>
                    <div>
                        <h1 className='font-bold text-5xl font-mono text-white'>
                          232
                        </h1>
                        <p className='font-bold'>
                          Clients
                        </p>
                    </div>
                    <div>
                        <h1 className='font-bold text-5xl font-mono text-white'>
                          521
                        </h1>
                        <p className='font-bold'>
                          Projects
                        </p>
                    </div>
                    <div>
                        <h1 className='font-bold text-5xl font-mono text-white'>
                          1453
                        </h1>
                        <p className='font-bold'>
                          Hours of Support
                        </p>
                    </div>
                    <div>
                        <h1 className='font-bold text-5xl font-mono text-white'>
                          32
                        </h1>
                        <p className='font-bold'>
                          Workers
                        </p>
                    </div>
                </div>   

            </div>
            
        </div>
    );
}

export default Port;