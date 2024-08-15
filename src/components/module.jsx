function Module(props) {
    let style;
    let style_mobile;
    let module_color;
    let module_bg;
    let image_position 
  
    if (props.module_theme === "bg-figmaGreen") {
      style = "flex-row-reverse";
      style_mobile = "flex-col-reverse";
      module_color = "text-figmaBlue";
      module_bg = "bg-figmaBlue";
      image_position = 'md:absolute md:top-[50%] md:left-[-28%]'
    } else if (props.module_theme === "bg-figmaBlue") {
      style = "flex-row";
      style_mobile = "flex-col";
      module_color = "text-figmaGreen";
      module_bg = "bg-figmaGreen";
      image_position = 'md:absolute md:top-[50%] md:right-[-28%]'
    }
  
    return (
      <div className="">
        {style && (
          <div className={`flex ${style_mobile} md:${style} flex-wrap min-h-[100vh]`}>
            {/* Left Side with Blue Background */}
            <div
              className={`${props.module_theme} flex-grow flex-shrink basis-[30%] w-full h-[30vh] py-6 md:h-[100vh] flex items-center justify-center relative`}
            >
              <div className={`w-[50%] h-auto ${image_position}`}>
                <img
                  src={props.module_image}
                  alt="an image"
                  className="w-full h-auto"
                />
              </div>
            </div>
  
            {/* Right Side Content */}
            <div className="flex-1 flex-shrink basis-[70%] w-full flex items-center justify-center flex-col ">
              <div className="w-[30rem] px-5 py-10">
                <h3 className={`${module_color} font-semibold text-sm mb-4`}>
                  MODULES
                </h3>
                <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-6">
                  {props.module_title}
                </h2>
                <p className="text-gray-600 mb-6">{props.module_description}</p>
  
                {/* Feature List */}
                <ul className="space-y-8 px-4">
                  <li className="flex items-start">
                    <span className={`${module_color} font-bold text-2xl mr-4`}>
                      1
                    </span>
                    <div>
                      <h4 className="text-gray-900 font-semibold">
                        {props.one_title}
                      </h4>
                      <p className="text-gray-600">{props.one_description}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold text-2xl mr-4">
                      2
                    </span>
                    <div>
                      <h4 className="text-gray-900 font-semibold">
                        {props.two_title}
                      </h4>
                      <p className="text-gray-600">{props.two_description}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 font-bold text-2xl mr-4">
                      3
                    </span>
                    <div>
                      <h4 className="text-gray-900 font-semibold">
                        {props.three_title}
                      </h4>
                      <p className="text-gray-600">{props.three_description}</p>
                    </div>
                  </li>
                </ul>
  
                {/* Login Button */}
                <div className="mt-8 flex justify-center md:justify-start">
                  <button
                    className={`${module_bg} text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-500`}
                  >
                    {props.button_text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Module;
  
