import backgroundImage from './Rectangle.png'
const Banner = () => {
      return (
            <div>
            <div className="hero min-h-[500px] bg-blend-lighten" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="max-w-fit ">
                  <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                                    <div>
                                           <input className="bg-white border-2 border-gray-400 px-8 py-3 rounded-l-xl" type="text" name="" id="" />
                                    <input className="bg-red-500 px-8 py-3 rounded-r-xl" type="submit" value="Submit" />
            </div>
            </div>
            </div>
            </div>
                  
            </div>
            // brightness-[4.75]
      );
};

export default Banner;