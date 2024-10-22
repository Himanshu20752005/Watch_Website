import watch from '../assets/Hero_Watch.svg'

const Hero = () => {
    return (
      
      <div className="my-9 mx-36 bg-custom h-150 flex justify-center">
        <div className="w-1/3">

          <img src={watch} alt="Watch IMG" className='w-64 h-150 mt-20 ml-5' />
        </div>





        <div className="w-2/3  ">

        <h1 className="text-5xl mt-12 w-96 leading-normal">WAY KAMBAS
        MINI EBONY</h1>

        <div class="h-0.5 bg-black w-1/6 mt-1"></div>

        <div className="">
          <p className="font-font2 mt-5 w-150">MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>
        </div>

        <div className="mt-3 font-semibold underline"> <h4>Discover</h4></div>

        <div className="flex gap-3">

            <div className="bg-red-500 flex justify-center items-center mt-6 h-14 w-48"> 
                <h1 className="text-neutral-50">Add to cart</h1>
            </div>

            <div className="border border-red-500 flex justify-center items-center mt-6 h-14 w-48"> 
                <h1 className="text-red-400">CICIL</h1>
            </div>
        </div>
        </div>
        
      </div>
    );
  };
  
  export default Hero;
  