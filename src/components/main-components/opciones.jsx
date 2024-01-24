import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { OptionsEj } from "../../utils/optionsEj";

export const Opciones = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="box-border bg-[#86214d] ">
      <div className="max-w-[1200px] pt-[20px] mx-auto">
        <div className="text-3xl font-sans text-center text-[#fff] relative"></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
          {OptionsEj.map((options) => (
            <div
              key={options.title}
              data-aos="flip-up"
              className="flex flex-col items-center p-[0.5rem] relative mx-auto mb-[10px]"
            >
              <img
                src={options.img}
                alt={options.title}
                width={150}
                height={150}
                className="relative rounded-full flex justify-center items-center transform transition-transform duration-500 hover:scale-110"
              />
              <p className="mt-2 text-white font-semibold text-center">
                {options.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
