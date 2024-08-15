import home_image from "../assets/home_image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className="w-full bg-colorBg min-h-[80vh] md:pt-[5rem]  ">
      <div className="h-full w-full max-w-[80%] mx-auto flex flex-col md:flex-row items-center py-14 gap-5">
        <div className="flex-grow flex-shrink basis-[60%] w-full text-center md:text-start flex items-center md:items-start flex-col">
          <h3 className="max-w-[80%] text-2xl md:text-4xl font-semibold mb-4 leading-snug">
            Streamline your Institutions Education Process with our{" "}
            <span className="text-figmaBlue">School Management Software</span>
          </h3>
          <p className="md:w-[70%] mb-4 leading-normal">
            Explore a world of seamless management of school activities which
            makes all processing easy.
          </p>
          <button className="bg-figmaBlue text-white px-4 py-2 text-center duration-300 rounded w-[40%] md:w-[30%] flex items-center justify-center gap-3">
            Learn More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="flex-grow flex-shrink basis-[40%]">
          <img src={home_image} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
