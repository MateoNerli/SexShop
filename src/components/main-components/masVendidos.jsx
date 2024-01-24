import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { masVendidos } from "../../utils/masVendidos";

export const MasVendidos = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-3xl border-b border-black text-center justify-center p-4">
        Los más Vendidos
      </h1>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          // when window width is >= 425px
          425: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper p-4 mx-auto pb-8"
      >
        {masVendidos.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-[300px] h-[500px] "
          >
            <h2 className="mt-4 text-xl font-bold">{item.nombre}</h2>
            <img
              src={item.img}
              className="w-full h-full object-cover rounded-lg"
              alt={item.name}
            />
            <span className="font-bold">${item.precio}</span>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
