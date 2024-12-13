import Chef1 from '../assets/img/chefs/chefs-1.jpg'
import Chef2 from '../assets/img/chefs/chefs-2.jpg'
import Chef3 from '../assets/img/chefs/chefs-3.jpg'

function Chefs() {
    return (
        <div id='chefs' className='bg-white'>
             <div className='flex flex-col my-10 items-center'>
                <h1 className='py-10 text-gray-500'> CHEFS</h1>
                <h1 className='font-bold text-3xl font-serif'>Our  <span className='text-green-500'>Proffesional Chefs</span></h1>
            </div>
            <div className='flex flex-col lg:flex-row lg:max-w-[1240px] mx-auto justify-center items-center'>
                <div className='shadow-lg lg:hover:scale-110 duration-500 mx-6 my-6 '>
                    <img src={Chef1} alt='' />
                    <div className='flex flex-col px-5 items-center'>
                        <h1 className='py-2 font-bold'>Walter White</h1>
                        <h2 className='pb-2 text-gray-500'>Master Chef</h2>
                        <p className='pb-5 font-serif'>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
        
                    </div>
                    
                </div>
                <div className='shadow-lg lg:hover:scale-110 duration-500 mx-6 my-6 '>
                    <img src={Chef2} alt='' />
                    <div className='flex flex-col px-5 items-center'>
                        <h1  className='py-2 font-bold'>Sarah Jhonson</h1>
                        <h2 className='pb-2 text-gray-500'>Patissier</h2>
                        <p className='pb-5 font-serif'>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                    </div>
                </div>
                <div className='shadow-lg lg:hover:scale-110 duration-500 mx-6 my-6 '>
                    <img src={Chef3} alt='' />
                    <div className='flex flex-col px-5 items-center'>
                        <h1 className='py-2 font-bold'>William Anderson</h1>
                        <h2 className='pb-2 text-gray-500'>Cook</h2>
                        <p className='pb-5 font-serif'>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.</p>
                    </div>
                      
                    </div>
                </div>

            </div>
    );
}

export default Chefs;