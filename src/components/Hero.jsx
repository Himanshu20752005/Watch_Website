import watch from '../assets/Hero_Watch.svg';
import watch2 from '../assets/Hero_Watch.png';
import line from '../assets/line.png';
import left from '../assets/left.png'
import right from '../assets/right.png'
import line1 from '../assets/line1.png';
import line2 from '../assets/line2.png';
import line3 from '../assets/line3.png';

const Hero = () => {
  return (
    
    <div >
      {/* line patterns on right side - updated*/}
      <div className="absolute inset-0 flex flex-col   justify-center items-center z-10 ">
        <img src={line} alt="line2" className="w-150 h-auto  mb-40 ml-auto hidden md:block md:opacity-50" />
      </div>
      
      {/* Main cream color background (MAIN BOX)*/}
      <div className="my-9 mx-36 bg-custom md:flex-row h-150 flex justify-center relative overflow-hidden z-0  sm: md: lg: ">

       {/* MAIN BOX - Left*/}
      <div className="w-1/3 relative flex items-center justify-center">
        <img src={watch2} alt="Watch IMG" className='w-36 h-36 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-contain' />
      </div>
       
       {/* MAIN BOX - Right*/}
       <div className="w-2/3">
       <h1 className="sm:text-4xl lg:text-5xl mt-12 w-96 lg:leading-normal">
  WAY KAMBAS MINI EBONY
</h1>

  <div className="h-0.5 bg-black w-1/6 mt-1"></div>
  <p className="font-font2 sm:text-sm md:text-base mt-5 lg:w-150 md:w-100">
    MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.
  </p>
  <div className="mt-3 font-semibold underline sm:text-sm md:text-base">
    <h4>Discover</h4>
  </div>

  <div className="flex gap-3">
    <div className="bg-red-500 flex justify-center items-center mt-6 h-14 w-48">
      <h1 className="text-neutral-50 sm:text-sm md:text-base">Add to cart</h1>
    </div>

    <div className="border border-red-500 flex justify-center items-center mt-6 h-14 w-36">
      <h1 className="text-red-400 sm:text-xs md:text-sm">3 LEFT</h1>
    </div>
  </div>


         {/* not needed */}
        {/* Sliding buttons*/}
        {/* <div className="flex gap-3 ml-100 mb-24 z-20 relative  ">
          <div className="border border-red-500 flex justify-center items-center mt-3  h-12 w-12">
            <img src={left} alt="" />
          </div>
          <div className=" bg-red-500 flex justify-center items-center mt-3 h-12 w-12">
            <img src={right} alt="" />
          </div>
        </div> */}
      </div>
      </div>
    </div>
  );
};

export default Hero;
// update it
