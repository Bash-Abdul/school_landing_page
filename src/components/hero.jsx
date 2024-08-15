import home_image from '../assets/home_image.png'

function Hero() {
  return (
    <div className="w-full bg-colorBg h-[60vh] md:h-[80vh]">
      {/* <div className="h-[90vh] w-full max-w-[80%] mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-1/2">
          <img src={home_image} alt="" className="w-full" />
        </div>

        <div className="w-1/2 text-center md:text-start">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4 leading-snug">
            Streamline your Institutions Education Process with our{" "}
            <span className="text-figmaBlue">School Management Software</span>
          </h3>
          <p className="md:w-[70%] mb-4 leading-normal">
            Explore a world of seamless management of school activities which
            makes all processing easy.
          </p>
          <button className="bg-figmaBlue text-white px-4 py-2 text-center duration-300 rounded">
            Learn More
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
