import BookTableImg from '../assets/img/reservation.jpg'

function BookTable() {
    return (
        <div id='booktable' className='w-full justify-center items-center mx-auto'>
            <div className='flex flex-col my-10 items-center'>
                <h1 className='py-10 text-gray-500'> Book A Table</h1>
                <h1 className='font-bold text-3xl font-serif'>
                    Book Your <span className='text-green-500'>Stay With Us</span>
                </h1>
            </div>
            <div className="flex justify-center mb-10">
                <div className='bg-gray-50 flex flex-col lg:flex-row lg:w-[1240px] lg:h-[450px] mx-10'>
                    {/* Image Section */}
                    <div>
                        <img
                            src={BookTableImg}
                            alt='reservation img'
                            className='lg:h-[100%] h-[500px] w-full lg:w-[500px]'
                        />
                    </div>
                    {/* Form Section */}
                    <div className='flex flex-col items-center justify-center lg:flex-wrap mt-10 mx-7 lg:mx-0'>
                        <form className='lg:pl-0 pl-5'>
                            {/* Input Fields */}
                            <div className='flex flex-wrap lg:justify-between'>
                                <input
                                    type='text'
                                    placeholder='Your Name'
                                    className='border-2 my-2 lg:mx-2 px-5 py-2 w-full lg:w-[266px]'
                                    required
                                />
                                <input
                                    type='email'
                                    placeholder='Your Email'
                                    className='border-2 my-2 px-5 py-2 w-full lg:w-[266px]'
                                    required
                                />
                                <input
                                    type='tel'
                                    placeholder='Your Phone'
                                    className='border-2 my-2 lg:mx-2 px-5 py-2 w-full lg:w-[266px]'
                                    required
                                />
                                <input
                                    type='date'
                                    className='border-2 my-2 lg:mx-2 px-5 py-2 w-full lg:w-[266px]'
                                    required
                                />
                                <input
                                    type='time'
                                    placeholder='12:30'
                                    className='border-2 my-2 px-5 py-2 w-full lg:w-[266px]'
                                    required
                                />
                                <input
                                    type='number'
                                    placeholder='# of people'
                                    className='border-2 my-2 lg:mx-2 px-5 py-2 w-full lg:w-[266px]'
                                    required
                                />
                            </div>
                            {/* Textarea */}
                            <textarea
                                placeholder='Message'
                                className='border-2 text-gray-500 my-5 px-5 py-3 lg:mx-2 w-full lg:w-[950px]'
                            ></textarea>
                            {/* Submit Button */}
                            <div className='flex justify-center'>
                                <button
                                    type='submit'
                                    className='bg-green-500 text-white py-2 px-5 rounded-full my-6 hover:bg-green-700 hover:shadow-lg'
                                >
                                    Book a Table
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookTable;
