import { styles } from "./styles";
import AnimatedImages from "./animated/AnimatedImages";
import ScrollDown from "./animated/scrolldown";
import { BlobComponent } from "./animated/Blob";
import CommonButton from "./ui/CommonButton";

const Hero = () => {
  return (
    <div className="relative w-full h-full mx-auto violet-gradient lg:pt-20">
      <div className="absolute inset-0 z-0 items-center flex justify-center w-full">
        <BlobComponent />
      </div>
      <div
        className={`${styles.paddingX} relative w-full max-w-8xl mx-auto flex flex-col lg:flex-row justify-around items-start  pt-[80px]`}
      >
        <div className="flex gap-4 justify-center items-center lg:w-2/4 ml-10">
          {/* <div className="flex flex-col justify-center items-center ">
            <div className="w-5 h-5 rounded-full bg-[#1AD47A]" />
            <div className="w-1 sm:h-48 h-64 green-gradient" />
          </div> */}
          <div className="flex flex-col">
            <h4 className={`${styles.heroHeadText} text-gray-300 py-3`}>
              We Develop Product <br />{" "}
              <span className="green-text-gradient lg:text-[42px] sm:text-[35px] text-[35px] lg:leading-[48px] py-2">
                For Business and Individuals
              </span>
            </h4>

            <p className={`${styles.heroSubText} mt-2 text-gray-400 py-4`}>
              We specialize in building powerful digital experiences through conversationational website, mobile apps and softwares.
            </p>
            <div className="pt-10 w-full justify-center items-center xs:mb-8 lg:ml-40">
              <a href="#contact">
                <CommonButton>{`Let's Connect`}</CommonButton>
               
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/4 md:ml-20  items-center justify-center">
          <AnimatedImages />
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Hero;
