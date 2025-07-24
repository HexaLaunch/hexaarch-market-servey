import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const testimonials = [
  {
    text: "Investing in REITs was a game-changer for me. I now earn passive income from commercial real estate without the headaches of property management.",
    name: "Ananya Rao",
    location: "Bangalore, India",
    image: "/images/home/user1.jpeg",
  },
  {
    text: "As someone new to investing, REITs made it simple to diversify my portfolio. I started with a small amount and now enjoy steady returns every quarter.",
    name: "Daniel Kim",
    location: "Seoul, South Korea",
    image: "/images/home/user2.jpg",
  },
  {
    text: "Thanks to your REIT platform, I was able to invest in premium real estate across major cities. The transparency and regular updates give me great peace of mind.",
    name: "Meera Desai",
    location: "Mumbai, India",
    image: "/images/home/user3.png",
  },
  {
    text: "I’ve seen consistent income and long-term growth through REITs, without the hassle of tenants or repairs. It’s the smartest investment move I’ve made.",
    name: "Robert Hayes",
    location: "Chicago, USA",
    image: "/images/home/user4.png",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [webApi, setWebApi] = useState<CarouselApi>();

  return (
    <section className="lg:py-12 px-4 lg:px-24 py-6" id="testimonials">
      <p className="uppercase text-base font-medium text-[#2A3342] underline underline-offset-2 pb-9 flex items-center gap-2">
        <img src="/logo.svg" alt="Hexaarch" className="inline-block w-5 h-5 " />
        Testimonials
      </p>
      <div className="lg:flex relative hidden">
        {/* Left Side Image */}
        <div className="flex-1 max-h-[400px] overflow-hidden">
          <img
            src="/images/home/review.png"
            alt="Customer"
            className="w-full object-contain rounded-xl hidden lg:flex"
          />
        </div>
        {/* Right Side Empty Space to fill the gap */}
        <div className="flex-[0.8] w-full h-full" />

        {/* Right Side - Carousel */}
        <div className="absolute inset-0 flex flex-col gap-6">
          <div className="flex w-full gap-10">
            {/* Left Side Empty Space to fill the gap */}

            <div className="flex-1" />
            <div className="flex-[0.8]">
              <h2 className="lg:text-4xl font-bold inline bg-white text-[#1F1F1F] mb-6  text-[23px] text-center lg:text-start">
                What Our Customers Say About Us
              </h2>
              <div className="flex items-center gap-5 justify-end">
                <button
                  onClick={() => webApi?.scrollPrev()}
                  className="rounded-full bg-black w-10 h-10 flex items-center justify-center"
                >
                  <svg
                    width="22"
                    height="17"
                    viewBox="0 0 22 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.05575 7.30184C0.627023 7.73057 0.627023 8.42568 1.05575 8.85441L8.04227 15.8409C8.471 16.2697 9.16611 16.2697 9.59483 15.8409C10.0236 15.4122 10.0236 14.7171 9.59483 14.2884L3.38459 8.07812L9.59483 1.86788C10.0236 1.43915 10.0236 0.74405 9.59483 0.315322C9.16611 -0.113406 8.471 -0.113406 8.04227 0.315322L1.05575 7.30184ZM20.861 9.17595C21.4673 9.17595 21.9588 8.68444 21.9588 8.07812C21.9588 7.47181 21.4673 6.9803 20.861 6.9803V9.17595ZM1.83203 8.07812V9.17595H20.861V8.07812V6.9803H1.83203V8.07812Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => webApi?.scrollNext()}
                  className="rounded-full bg-black w-10 h-10 flex items-center justify-center"
                >
                  <svg
                    width="22"
                    height="17"
                    viewBox="0 0 22 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.26172 6.9803C0.655406 6.9803 0.163893 7.47181 0.163893 8.07812C0.163893 8.68444 0.655406 9.17595 1.26172 9.17595V6.9803ZM21.067 8.85441C21.4957 8.42568 21.4957 7.73057 21.067 7.30184L14.0805 0.315322C13.6517 -0.113406 12.9566 -0.113406 12.5279 0.315322C12.0992 0.74405 12.0992 1.43915 12.5279 1.86788L18.7381 8.07812L12.5279 14.2884C12.0992 14.7171 12.0992 15.4122 12.5279 15.8409C12.9566 16.2697 13.6517 16.2697 14.0805 15.8409L21.067 8.85441ZM1.26172 8.07812V9.17595H20.2907V8.07812V6.9803H1.26172V8.07812Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[min(920px,80%)] h-full w-full ms-auto">
            <Carousel
              className="h-full bg-white ps-4 pt-4"
              setApi={setWebApi}
              opts={{
                loop: true,
                align: "start",
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
            >
              <CarouselContent className="h-full">
                {testimonials.map((item, index) => (
                  <CarouselItem key={index} className="lg:basis-1/2 h-full">
                    <div className="bg-[#EEF1FF]  text-black rounded-xl py-4 px-8 w-full h-full flex justify-center flex-col gap-5">
                      <div>
                        <svg
                          width="37"
                          height="29"
                          viewBox="0 0 37 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.535913 28.1087V20.6235C0.535913 18.4143 0.951756 16.0882 1.78344 13.6451C2.61513 11.2021 3.77169 8.86295 5.25313 6.62779C6.73458 4.39263 8.47592 2.48235 10.4772 0.896956L16.247 5.02939C14.6616 7.34252 13.3101 9.75961 12.1925 12.2807C11.0749 14.8017 10.5162 17.5437 10.5162 20.5066V28.1087H0.535913ZM20.4184 28.1087V20.6235C20.4184 18.4143 20.8343 16.0882 21.6659 13.6451C22.4976 11.2021 23.6542 8.86295 25.1356 6.62779C26.6171 4.39263 28.3584 2.48235 30.3597 0.896956L36.1295 5.02939C34.5441 7.34252 33.1926 9.75961 32.075 12.2807C30.9574 14.8017 30.3987 17.5437 30.3987 20.5066V28.1087H20.4184Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <p className="lg:text-[17px] font-normal text-[13px]">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold  text-[13px] lg:[17px]">
                            {item.name}
                          </p>
                          <p className="  lg:text-sm text-[11px] font-medium">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <h2 className="text-[23px] text-center font-bold  text-[#1F1F1F] mb-6">
          What Our Customers Say About Us
        </h2>

        <Carousel
          setApi={setApi}
          className="h-full bg-white ps-4 pt-4"
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent className="h-full">
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 h-full">
                <div className="bg-[#EEF1FF]  text-black   rounded-xl py-4 px-8 w-full h-full flex justify-center flex-col gap-5">
                  <div>
                    <svg
                      width="37"
                      height="29"
                      viewBox="0 0 37 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.535913 28.1087V20.6235C0.535913 18.4143 0.951756 16.0882 1.78344 13.6451C2.61513 11.2021 3.77169 8.86295 5.25313 6.62779C6.73458 4.39263 8.47592 2.48235 10.4772 0.896956L16.247 5.02939C14.6616 7.34252 13.3101 9.75961 12.1925 12.2807C11.0749 14.8017 10.5162 17.5437 10.5162 20.5066V28.1087H0.535913ZM20.4184 28.1087V20.6235C20.4184 18.4143 20.8343 16.0882 21.6659 13.6451C22.4976 11.2021 23.6542 8.86295 25.1356 6.62779C26.6171 4.39263 28.3584 2.48235 30.3597 0.896956L36.1295 5.02939C34.5441 7.34252 33.1926 9.75961 32.075 12.2807C30.9574 14.8017 30.3987 17.5437 30.3987 20.5066V28.1087H20.4184Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className=" lg:text-[17px]  font-normal text-[13px]">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold   text-[13px] lg:[17px]">
                        {item.name}
                      </p>
                      <p className=" lg:text-sm text-[11px] font-medium">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center gap-5 justify-end mt-8">
          <button
            onClick={() => api?.scrollPrev()}
            className="rounded-full bg-black w-10 h-10 flex items-center justify-center"
          >
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.05575 7.30184C0.627023 7.73057 0.627023 8.42568 1.05575 8.85441L8.04227 15.8409C8.471 16.2697 9.16611 16.2697 9.59483 15.8409C10.0236 15.4122 10.0236 14.7171 9.59483 14.2884L3.38459 8.07812L9.59483 1.86788C10.0236 1.43915 10.0236 0.74405 9.59483 0.315322C9.16611 -0.113406 8.471 -0.113406 8.04227 0.315322L1.05575 7.30184ZM20.861 9.17595C21.4673 9.17595 21.9588 8.68444 21.9588 8.07812C21.9588 7.47181 21.4673 6.9803 20.861 6.9803V9.17595ZM1.83203 8.07812V9.17595H20.861V8.07812V6.9803H1.83203V8.07812Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="rounded-full bg-black w-10 h-10 flex items-center justify-center"
          >
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.26172 6.9803C0.655406 6.9803 0.163893 7.47181 0.163893 8.07812C0.163893 8.68444 0.655406 9.17595 1.26172 9.17595V6.9803ZM21.067 8.85441C21.4957 8.42568 21.4957 7.73057 21.067 7.30184L14.0805 0.315322C13.6517 -0.113406 12.9566 -0.113406 12.5279 0.315322C12.0992 0.74405 12.0992 1.43915 12.5279 1.86788L18.7381 8.07812L12.5279 14.2884C12.0992 14.7171 12.0992 15.4122 12.5279 15.8409C12.9566 16.2697 13.6517 16.2697 14.0805 15.8409L21.067 8.85441ZM1.26172 8.07812V9.17595H20.2907V8.07812V6.9803H1.26172V8.07812Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
