import React from "react";
import Enroll from "../components/form/Enroll";

const SellOnJevee = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4 px-3.5 py-2.5 mx-8">
      <div className="  col-span-full bg-gradient-to-r from-cyan-500 to-blue-500  to-purple-500 rounded  w-full h-64   sm:px-8 sm:py-5 flex items-center flex-row overflow-hidden justify-between align-center px-6 py-4">
        <div className="text-white font-serif text-wrap ">
          <h1 className="text-4xl font-bold flex justify-start">
            Sell On Jeeve
          </h1>
          <h1 class=" text-2xl">Sell products online effortlessly on jeeve</h1>
        </div>
        <div className="flex flex-row space-x-8">
          <div className="flex flex-col place-self-center space-y-8 text-white">
            <button className=" flex justify-center items-center rounded-full bg-white/20 w-12 h-12 ">
              <svg x="0px" y="0px" viewBox="0 0 500 500" class="w-4 sm:w-6">
                <path
                  fill="#fff"
                  d="M93.1,482.5c-43.2-1.5-77.3-37-77.3-80.1v-42.4c-0.2-7.8,6-14.3,13.8-14.4c0.2,0,0.4,0,0.7,0h62.9L96,32 c0-8,6.5-14.5,14.4-14.5h359.3c7.8-0.2,14.3,6,14.4,13.8c0,0.2,0,0.5,0,0.7v370.3c0,44.2-35.9,80.1-80.1,80.1L93.1,482.5z M122,345.5h216.4c7.8-0.2,14.3,6,14.4,13.8c0,0.2,0,0.4,0,0.6v42.4c-0.4,28.3,22.2,51.6,50.5,52c28.3,0.4,51.6-22.2,52-50.5 c0-0.5,0-1,0-1.4V46.4H124.9L122,345.5z M44.7,402.4c0,28.3,23,51.2,51.3,51.3h246.6l-3.6-4.8c-9.8-13.5-15.1-29.8-15.1-46.5v-28 H44.7V402.4z"
                ></path>
                <path
                  fill="#fff"
                  d="M194.2,131.9c-8,0-14.4-6.5-14.4-14.4s6.5-14.4,14.4-14.4c0,0,0,0,0,0h90.1c8,0,14.4,6.5,14.4,14.4 s-6.5,14.4-14.4,14.4c0,0,0,0,0,0H194.2z"
                ></path>
                <path
                  fill="#fff"
                  d="M194.2,207.5c-8,0-14.4-6.5-14.4-14.4s6.5-14.4,14.4-14.4h183.1c8,0,14.4,6.5,14.4,14.4s-6.5,14.4-14.4,14.4 l0,0H194.2z"
                ></path>
                <path
                  fill="#fff"
                  d="M194.2,283c-8,0.2-14.6-6.1-14.8-14.1c-0.2-8,6.1-14.6,14.1-14.8c0.3,0,0.5,0,0.8,0h183.1 c8,0.2,14.3,6.8,14.1,14.8c-0.2,7.7-6.4,13.9-14.1,14.1H194.2z"
                ></path>
                <rect fill="none" width="500" height="500"></rect>
              </svg>
            </button>
            <p className="font-sans text-sm break-words overflow-hidden">
              Fill enrollment
              <p>application</p>
            </p>
          </div>
          <div class="flex justify-center space-y-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 500.5 500.5"
                enable-background="new 0 0 500.5 500.5"
                class="w-[26px]"
              >
                <g>
                  <path
                    fill="#fff"
                    d="M278.5,434.1c-3.6,0-7.3-1.6-10-4.3l-0.1-0.1c-2.6-2.4-4.1-5.8-4.2-9.4c-0.1-3.9,1.4-7.6,4.3-10.5 l145.3-145.3H52.4c-8.2,0-14.3-6.1-14.3-14.3s6.1-14.3,14.3-14.3h361.4L268.4,90.6c-2.6-2.4-4.1-5.8-4.2-9.4 c-0.1-3.9,1.4-7.6,4.3-10.5l0.1-0.1c2.5-2.7,5.9-4.2,9.7-4.2c3.8,0,7.4,1.5,10.2,4.3l169.6,169.6c2.9,2.9,4.4,6.6,4.3,10.5 c-0.1,3.6-1.6,7-4.2,9.4L288.5,429.8C285.8,432.5,282.1,434.1,278.5,434.1z"
                  ></path>
                  <g>
                    <rect
                      x="0.2"
                      y="0.2"
                      fill="none"
                      width="500"
                      height="500"
                    ></rect>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <button className=" flex justify-center items-center  rounded-full bg-white/20 w-12 h-12 ">
              <svg viewBox="0 0 500 500" class="w-4 sm:w-6">
                <path
                  d="M47.76 482.47a13.88 13.88 0 01-14.19-14.19c0-59.54 18.71-105.81 55.6-137.51 37.05-31.84 91.16-48 160.83-48s123.78 16.14 160.83 48c36.89 31.7 55.6 78 55.6 137.51a13.88 13.88 0 01-14.19 14.19zM250 311.17c-117.4 0-180.48 47-187.47 139.7l-.25 3.22h375.44l-.25-3.22c-6.99-92.7-70.07-139.7-187.47-139.7z"
                  fill="#fff"
                ></path>
                <path
                  d="M250 251.58c-61.21 0-111-54.16-111-120.75 0-31.3 11.32-60.06 31.87-81s48.58-32.3 79.13-32.3c63.29 0 111 48.71 111 113.3 0 66.59-49.79 120.75-111 120.75zm0-205.67c-47.88 0-82.63 35.71-82.63 84.92 0 50.94 37.07 92.38 82.63 92.38s82.64-41.44 82.64-92.38c0-48.41-35.53-84.92-82.64-84.92z"
                  fill="#fff"
                ></path>
                <path fill="none" d="M0 0h500v500H0z"></path>
              </svg>
            </button>
            <p className="font-sans text-white text-sm break-words overflow-hidden">
              sell on jeeve
              <p>
                at<span>Jeeve</span>
              </p>
            </p>
          </div>
        </div>
      </div>

      <Enroll />
      <div>
        <div class="bg-white border rounded  p-6 w-full  md:shrink-0 pd">
          <h3>Why choose Jeevee?</h3>
          <div class="flex items-start space-x-4 border-b pb-4 mb-4 border-dashed last:border-0 last:pb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 500 500"
              class="w-8 shrink-0"
              enable-background="new 0 0 500 500"
            >
              <g>
                <g>
                  <path
                    fill="var(--color-dark)"
                    d="M250.7,200.4c-16.4,0-30.6-5.9-42.2-17.5c-11.6-11.6-17.5-25.8-17.5-42.2s5.9-30.6,17.5-42.2 C220.1,86.9,234.3,81,250.7,81c16.4,0,30.6,5.9,42.2,17.5c11.6,11.6,17.5,25.8,17.5,42.2c0,16.4-5.9,30.6-17.5,42.2 C281.3,194.5,267.1,200.4,250.7,200.4z M250.7,108.7c-9,0-16.2,3-22.6,9.4c-6.4,6.4-9.4,13.6-9.4,22.6c0,9,3,16.2,9.4,22.6 c6.4,6.4,13.6,9.4,22.6,9.4c9,0,16.2-3,22.6-9.4c6.4-6.4,9.4-13.6,9.4-22.6c0-9-3-16.2-9.4-22.6 C266.9,111.7,259.7,108.7,250.7,108.7z"
                  ></path>
                  <path
                    fill="var(--color-dark)"
                    d="M182.7,398.6l0.1-6.7c0-0.3,0-0.5,0-0.8c0-3.9-0.2-7.7-0.5-11.4l0-0.2c0-0.5-0.1-1-0.1-1.5l-0.8-7.2H320 l-0.8,7.2c-0.1,0.6-0.1,1.1-0.2,1.7c-0.3,3.6-0.5,7.5-0.5,11.4c0,0.3,0,0.5,0,0.8l0.1,6.7H182.7z M337.5,273.4 c-2-1.3-3.9-2.5-5.6-3.6c-0.1-0.1-0.2-0.1-0.3-0.2c-1.4,0.1-2.7,0.4-4,0.8l-7.2,2.2l-1.2-7.4c-0.1-0.5-0.2-0.9-0.2-1.4 c-0.7-4-1.6-7.8-2.7-11.2c0-0.2-0.1-0.3-0.1-0.4l-0.1-0.2c-1-2.9-2.2-5.7-3.8-8.4c-1.5-2.6-3.1-4.8-4.9-6.5 c-1.5-1.4-3.4-2.6-5.7-3.5c-1.6-0.6-3.4-1.1-5.4-1.3c-0.1,0.1-0.2,0.1-0.3,0.2c-2.4,1.6-5.3,3.4-9,5.8c-4.3,2.7-9.7,5.2-16.1,7.2 c-6.6,2.1-13.4,3.2-20.2,3.2c-6.8,0-13.6-1.1-20.2-3.2c-6.4-2.1-11.8-4.5-16.1-7.2c-3.2-2.1-6.3-4-9-5.8c-0.1-0.1-0.2-0.1-0.3-0.2 c-2,0.2-3.8,0.6-5.4,1.3c-2.3,0.9-4.2,2.1-5.7,3.5c-1.8,1.7-3.5,3.9-4.9,6.5c-1.6,2.8-2.8,5.6-3.8,8.4c-0.1,0.2-0.1,0.4-0.2,0.6 c-1.1,3.4-2,7.1-2.7,11.2c-0.1,0.5-0.2,0.9-0.2,1.4l-1.2,7.4l-7.2-2.2c-1.2-0.4-2.6-0.6-4-0.8c-0.1,0.1-0.2,0.1-0.3,0.2 c-1.7,1.1-3.5,2.3-5.6,3.6l-11.8,7.6l1.7-13.9c0.3-2.6,0.7-5.4,1.2-8.2c0.8-4.2,1.7-8.2,2.8-11.9c0.3-0.9,0.5-1.9,0.8-2.8 c1.6-4.9,3.7-9.7,6.3-14.3c2.8-4.9,6.1-9.3,9.9-12.8c4.1-3.9,9-7,14.7-9.3c5.6-2.2,11.8-3.4,18.4-3.4c4.3,0,7.9,1.8,12.6,4.8 c2.5,1.7,5.5,3.6,8.8,5.7c2.3,1.5,5.5,2.9,9.7,4.2c3.9,1.3,7.8,1.9,11.7,1.9c3.9,0,7.8-0.6,11.7-1.9c4.1-1.3,7.4-2.8,9.7-4.2 c3.3-2.1,6.2-4,8.8-5.7c4.7-3.1,8.2-4.8,12.6-4.8c6.6,0,12.8,1.1,18.4,3.4c5.7,2.2,10.6,5.4,14.7,9.3c3.8,3.6,7.1,7.9,9.9,12.9 c2.6,4.6,4.7,9.4,6.3,14.3c0.3,0.9,0.6,1.9,0.9,2.8c1.1,3.7,2,7.7,2.8,11.9c0.5,2.8,0.9,5.6,1.3,8.2l1.7,13.9L337.5,273.4z"
                  ></path>
                  <path
                    fill="var(--color-dark)"
                    d="M97.9,246.1c-16.4,0-30.6-5.9-42.2-17.5c-11.6-11.6-17.5-25.8-17.5-42.2s5.9-30.6,17.5-42.2 c11.6-11.6,25.8-17.5,42.2-17.5c16.4,0,30.6,5.9,42.2,17.5c11.6,11.6,17.5,25.8,17.5,42.2c0,16.4-5.9,30.6-17.5,42.2 C128.6,240.2,114.4,246.1,97.9,246.1z M97.9,154.4c-9,0-16.2,3-22.6,9.4c-6.4,6.4-9.4,13.6-9.4,22.6c0,9,3,16.2,9.4,22.6 c6.4,6.4,13.6,9.4,22.6,9.4c9,0,16.2-3,22.6-9.4c6.4-6.4,9.4-13.6,9.4-22.6s-3-16.2-9.4-22.6C114.2,157.3,107,154.4,97.9,154.4z"
                  ></path>
                  <path
                    fill="var(--color-dark)"
                    d="M45.8,419c-13.3,0-24.3-4.1-32.7-12.1c-8.6-8.2-13-19.2-13-32.7c0-5.2,0.2-51,0.4-55.3 c0.3-4.5,0.9-9.4,1.9-14.5c0.9-5.2,2.1-10.2,3.6-14.7c1.6-4.9,3.7-9.7,6.3-14.3c2.8-4.9,6.1-9.3,9.9-12.8c4.1-3.9,9-7,14.7-9.3 c5.6-2.2,11.8-3.4,18.4-3.4c4.4,0,7.9,1.8,12.6,4.8c2.5,1.7,5.5,3.6,8.8,5.7c2.3,1.5,5.5,2.9,9.7,4.2c3.9,1.3,7.8,1.9,11.7,1.9 c3.8,0,7.8-0.6,11.7-1.9c4.1-1.3,7.4-2.8,9.7-4.2c3.3-2.1,6.2-4,8.8-5.7c3.3-2.2,5.6-3.3,7.8-4c1.6-0.5,3.2-0.8,4.8-0.8 c4.9,0,9.5,0.6,13.9,1.8c1.5,0.4,3.1,0.9,4.5,1.5c5.7,2.3,10.6,5.4,14.7,9.3c3.7,3.6,7.1,7.9,9.9,12.8c2.6,4.6,4.7,9.4,6.3,14.3 c1.5,4.6,2.7,9.5,3.6,14.7c0.9,4.8,1.5,9.4,1.8,13.6c0,0.3,0,0.6,0.1,0.8c0.3,4.4,0.5,51.3,0.5,55.3c0,0.3,0,0.6,0,1 c-0.2,13-4.6,23.7-13,31.7c-8.5,8-19.5,12.1-32.7,12.1H45.8z M52.4,277.9c-2,0.2-3.8,0.6-5.4,1.3c-2.3,0.9-4.3,2.1-5.7,3.5 c-1.8,1.7-3.5,3.9-4.9,6.5c-1.7,2.9-3,6-4,9c-1.1,3.4-2,7.1-2.7,11.2c-0.7,4.1-1.2,8-1.5,11.5c-0.2,3.6-0.4,48.8-0.4,53.3 c0,5.7,1.4,9.7,4.4,12.6c3.2,3.1,7.5,4.5,13.6,4.5h104.4c6.1,0,10.4-1.4,13.6-4.5c2.9-2.7,4.3-6.5,4.4-11.8c0-0.2,0-0.5,0-0.8 c0-4.5-0.1-49.8-0.4-53.3l0-0.2c0-0.5-0.1-1-0.1-1.5c-0.3-3.1-0.7-6.4-1.4-9.8c-0.7-4-1.6-7.8-2.7-11.2c-1-3.1-2.3-6.1-4-9 c-1.5-2.6-3.1-4.8-4.9-6.5c-1.5-1.4-3.4-2.6-5.7-3.5c-0.5-0.2-0.9-0.3-1.4-0.5c-1.3-0.4-2.6-0.6-4-0.8c-0.1,0.1-0.2,0.1-0.3,0.2 c-1.7,1.1-3.5,2.3-5.6,3.6c0,0-2.4,1.6-3.4,2.2c-4.3,2.7-9.7,5.2-16.1,7.2c-6.6,2.1-13.4,3.2-20.2,3.2c-6.8,0-13.6-1.1-20.2-3.2 c-6.4-2.1-11.8-4.5-16.1-7.2c-3.2-2.1-6.3-4-9-5.8C52.5,278,52.5,278,52.4,277.9z"
                  ></path>
                  <path
                    fill="var(--color-dark)"
                    d="M402.1,246.1c-16.4,0-30.6-5.9-42.2-17.5c-11.6-11.6-17.5-25.8-17.5-42.2s5.9-30.6,17.5-42.2 c11.6-11.6,25.8-17.5,42.2-17.5c16.4,0,30.6,5.9,42.2,17.5c11.6,11.6,17.5,25.8,17.5,42.2c0,16.4-5.9,30.6-17.5,42.2 C432.7,240.2,418.5,246.1,402.1,246.1z M402.1,154.4c-9,0-16.2,3-22.6,9.4c-6.4,6.4-9.4,13.6-9.4,22.6c0,9,3,16.2,9.4,22.6 c6.4,6.4,13.6,9.4,22.6,9.4c9,0,16.2-3,22.6-9.4c6.4-6.4,9.4-13.6,9.4-22.6c0-9-3-16.2-9.4-22.6 C418.3,157.3,411.1,154.4,402.1,154.4z"
                  ></path>
                  <path
                    fill="var(--color-dark)"
                    d="M349.9,419c-13.3,0-24.3-4.1-32.7-12.1c-8.4-8-12.8-18.7-13-31.7c0,0,0-0.7,0-1c0-3.1,0.1-50.8,0.4-55.3 c0-0.4,0-0.6,0.1-0.9c0.3-4.2,0.9-8.8,1.8-13.6c0.9-5.2,2.2-10.2,3.6-14.7c1.6-4.8,3.7-9.6,6.3-14.3c2.8-4.9,6.1-9.3,9.9-12.9 c4.1-3.9,9-7,14.7-9.3c1.5-0.6,3-1.1,4.6-1.5c4.3-1.2,9-1.8,13.9-1.8c1.6,0,3.2,0.3,4.9,0.8c2.1,0.7,4.5,1.9,7.7,4 c2.5,1.7,5.5,3.6,8.8,5.7c2.3,1.5,5.5,2.9,9.7,4.2c3.9,1.3,7.8,1.9,11.7,1.9c3.8,0,7.8-0.6,11.7-1.9c4.1-1.3,7.4-2.8,9.7-4.2 c3.3-2.1,6.2-4,8.8-5.7c4.7-3.1,8.2-4.8,12.6-4.8c6.6,0,12.8,1.1,18.4,3.4c5.7,2.3,10.6,5.4,14.7,9.3c3.7,3.6,7.1,7.9,9.9,12.8 c2.6,4.6,4.7,9.4,6.3,14.3c1.5,4.5,2.7,9.5,3.6,14.7c0.9,5.2,1.5,10,1.9,14.5c0.3,4.2,0.5,50,0.5,55.3c0,13.5-4.4,24.5-13,32.7 c-8.5,8-19.5,12.1-32.7,12.1H349.9z M356.5,277.9c-1.4,0.1-2.7,0.4-4,0.8c-0.5,0.1-0.9,0.3-1.4,0.5c-2.3,0.9-4.3,2.1-5.7,3.5 c-1.8,1.7-3.5,3.9-4.9,6.5c-1.7,2.9-3,6-4,9c-1.1,3.4-2,7.1-2.7,11.2c-0.6,3.5-1.1,6.8-1.3,9.8c-0.1,0.6-0.1,1.2-0.1,1.7 c-0.2,3.5-0.4,48.8-0.4,53.3c0,0.3,0,0.5,0,0.8c0.1,5.3,1.5,9,4.4,11.8c3.2,3,7.5,4.5,13.6,4.5h104.4c6,0,10.4-1.5,13.6-4.5 c3-2.9,4.4-6.9,4.4-12.6c0-4.1-0.1-49.7-0.4-53.1l0-0.2c-0.2-3.5-0.7-7.4-1.5-11.5c-0.7-4-1.6-7.8-2.7-11.2c-1-3-2.3-6.1-4-9 c-1.5-2.6-3.1-4.8-4.9-6.5c-1.5-1.4-3.4-2.6-5.7-3.5c-1.6-0.6-3.4-1.1-5.4-1.3c-0.1,0.1-0.2,0.1-0.3,0.2c-2.6,1.7-5.6,3.6-9,5.8 c-4.3,2.7-9.7,5.2-16.1,7.2c-6.7,2.1-13.5,3.2-20.2,3.2s-13.6-1.1-20.2-3.2c-6.4-2.1-11.8-4.5-16.1-7.2c-1.2-0.7-2.3-1.5-3.4-2.2 c-2-1.3-3.8-2.5-5.6-3.6C356.7,278,356.6,278,356.5,277.9z"
                  ></path>
                </g>
              </g>
            </svg>
            <div>
              <div class="font-medium text-sm sm:text-base mb-2">
                Large Customer base
              </div>
              <div class="text-xs sm:text-sm">
                Jeevee is trusted by more than 7 lac customers for all their
                health, baby &amp; beauty needs. User reviews, ratings and
                influencer collabs fuel our growth. Jeevee’s commitment to
                excellence is clear with its selective vendor acquisition
                process.
              </div>
            </div>
          </div>

          <div class="flex items-start space-x-4 border-b pb-4 mb-4 border-dashed last:border-0 last:pb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 shrink-0"
              x="0px"
              y="0px"
              viewBox="0 0 500 500"
              enable-background="new 0 0 500 500"
              fill="var(--color-dark)"
            >
              <g>
                <path d="M32.8,162.7c1.1,0,1-1.2,1.3-2c3.6-11.9,14.8-19.9,27.3-19.2h146.3c5.5-0.5,10.8,2.3,13.4,7.2c3.5,6.6,1.1,14.7-5.5,18.3 c-1.6,0.9-3.4,1.4-5.2,1.6c-1.6,0.1-3.1,0.1-4.7,0c-47.2,0-94.4,0-141.6,0c-3.5,0-4.4,0.8-4.3,4.3c0,15.4,0,30.8,0,46.2 c0,3.2,0.8,3.9,3.9,3.9c47.9,0,95.8,0,143.8,0c5.6-0.5,11,2.4,13.7,7.4c3.4,6.6,0.8,14.8-5.9,18.2c-1.5,0.8-3.1,1.2-4.8,1.4 c-1.6,0-3.1,0-4.7,0c-47.2,0-94.4,0-141.6,0c-3.3,0-4.1,0.8-4.1,4.1c0,51.6,0,103.2,0,154.8c0,3.3,0.8,4.1,4.1,4.1 c124,0,247.9,0,371.8,0c3.3,0,4.1-0.8,4.1-4.1c0-30,0-59.9,0-89.9c-0.6-7.4,4.9-13.9,12.4-14.5c2-0.2,4,0.1,5.8,0.8 c5.3,1.7,8.9,6.6,8.8,12.2c0,32.1,0.3,64.2,0,96.3c-0.2,14.3-11.7,25.8-26,26.2c-1.3,0-2.5,0-3.8,0H62.7 c-11.6,0.8-22.5-5.6-27.5-16.1c-0.8-1.7-0.5-4-2.4-5.1L32.8,162.7z"></path>
                <path d="M467,148.2c0.7,20.1-0.4,40.1-3.2,60c-6,35.4-24.8,67.4-52.8,89.9c-14,11.5-28.9,21.7-44.5,30.7 c-4.7,3.2-10.8,3.3-15.6,0.3c-23-12.7-44-28.7-62.3-47.7c-19.7-21.6-32.4-48.7-36.2-77.7c-4.3-29.7-1.9-59.5-2.4-89.3 c-0.2-5.7,3.4-10.9,8.8-12.8c31.4-13.5,62.7-26.9,94.1-40.3c3.8-1.7,8.1-1.7,11.9,0l93.1,39.9c6,2.2,9.9,8.2,9.4,14.6 C466.9,126.8,467,137.5,467,148.2z M277,153.2c-0.4,14.4,0.2,28.8,1.7,43.2c2.3,21.5,10.4,42,23.5,59.3 c14.9,18.8,34.1,32.9,54.3,45.4c2,1.2,3.1,0,4.7-0.7c12-7.2,23.4-15.4,34-24.4c26.4-22,42.3-54.1,43.9-88.4 c1.4-20.5,0.4-40.9,0.8-61.4c0.3-2-1-3.8-2.9-4.3c-25.3-10.7-50.5-21.5-75.7-32.4c-1.8-0.9-3.8-0.9-5.6,0 c-25.3,10.9-50.7,21.8-76.1,32.5c-1.8,0.5-2.9,2.2-2.6,4C277.1,135.3,277,144.2,277,153.2z"></path>
                <path d="M127.7,331.5c-8.7,0-17.3,0-25.9,0c-7.5,0.6-14-4.9-14.7-12.4c-0.6-7.5,4.9-14,12.4-14.7c0.8-0.1,1.5-0.1,2.3,0 c17.4,0,34.8,0,52.2,0c7.5-0.6,14,4.9,14.7,12.4c0.6,7.5-4.9,14-12.4,14.7c-0.8,0.1-1.5,0.1-2.3,0 C145.2,331.5,136.4,331.5,127.7,331.5z"></path>
                <path d="M345.9,199.9c14.1-17.5,27.7-34.6,41.3-51.7c3.1-4.9,8.9-7.5,14.6-6.4c7.3,1.4,12.1,8.5,10.6,15.8 c-0.5,2.4-1.6,4.6-3.2,6.4c-8.5,10.9-17.3,21.6-25.9,32.4l-26.5,32.9c-7.8,9.7-17.7,9.4-24.6-1c-8.5-12.6-17-25.3-25.3-38 c-4.7-5.9-3.7-14.4,2.2-19.1c5.9-4.7,14.4-3.7,19.1,2.2c0.5,0.6,0.9,1.3,1.3,2C335,183.4,340.2,191.4,345.9,199.9z"></path>
              </g>
            </svg>
            <div>
              <div class="font-medium text-sm sm:text-base mb-2">
                Secure Payments
              </div>
              <div class="text-xs sm:text-sm">
                We ensure timely payment as per the agreed terms and conditions.
              </div>
            </div>
          </div>
          <div class="flex items-start space-x-4 border-b pb-4 mb-4 border-dashed last:border-0 last:pb-0">
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 800 800"
              class="w-8 shrink-0"
              enable-background="new 0 0 800 800"
            >
              <path
                fill="var(--color-dark)"
                d="M620.1,490.6c-15.5-16.2-34.2-24.8-54.1-24.8c-19.8,0-38.6,8.5-54.7,24.6l-50.5,50.4 c-4.2-2.2-8.3-4.3-12.3-6.4c-5.8-2.9-11.2-5.6-15.8-8.5c-47.4-30.1-90.4-69.3-131.7-120c-20-25.3-33.4-46.6-43.2-68.2 c13.1-12,25.3-24.5,37.1-36.5c4.5-4.5,9-9.1,13.4-13.6c33.6-33.6,33.6-77.1,0-110.7l-43.7-43.7c-5-5-10.1-10.1-14.9-15.2 c-9.6-9.9-19.7-20.2-30.1-29.8c-15.5-15.4-34.1-23.5-53.6-23.5s-38.4,8.2-54.4,23.5l-0.3,0.3L57,143.5 c-20.2,19.8-32.5,46.2-34.7,74.4c-3.8,46.7,9.9,90.2,20.5,118.7c25.9,69.9,64.6,134.7,122.4,204.2 c70.1,83.7,154.4,149.8,250.7,196.3c36.8,17.4,85.9,38.1,140.8,41.6c3.4,0.2,6.9,0.3,10.1,0.3c37,0,68-13.3,92.3-39.7 c0.2-0.3,0.5-0.5,0.6-0.8c8.3-10.1,17.9-19.2,28-29c6.9-6.6,13.9-13.4,20.8-20.6c15.8-16.5,24.2-35.7,24.2-55.4 c0-19.7-8.5-38.9-24.6-54.9L620.1,490.6z M677.4,659C677.2,659,677.2,659.2,677.4,659c-6.2,6.7-12.6,12.8-19.5,19.5 c-10.9,10.1-21.2,20.8-30.9,32c-16.2,17.3-35.2,25.4-60.2,25.4c-2.4,0-5,0-7.4-0.2c-47.5-3-91.7-21.6-124.8-37.4 c-90.6-43.8-170.1-106.1-236.2-185c-54.6-65.8-91-126.6-115.2-191.8C68.4,281.8,63,250.7,65.4,221.4c1.3-18,9.1-34.9,22.1-47.5 l54.6-54.6c7.8-7.4,16.2-11.4,24.3-11.4c10.1,0,18.2,6.1,23.4,11.2l0.5,0.5c9.8,9.1,19,18.6,28.8,28.6c5,5.1,10.1,10.2,15.2,15.5 l43.7,43.7c17,17,17,32.6,0,49.6c-4.6,4.6-9.1,9.3-13.8,13.8c-13.4,13.8-26.2,26.6-40.2,39c-0.3,0.3-0.6,0.5-0.8,0.8 c-13.8,13.8-11.2,27.2-8.3,36.3l0.5,1.4c11.4,27.5,27.4,53.4,51.7,84.3l0.2,0.2c44.2,54.4,90.7,96.8,142.1,129.3 c6.4,3.9,12.9,7.5,19.7,10.7c5.8,2.9,11.2,5.6,15.8,8.5c0.6,0.3,1.3,0.8,1.9,1.1c4.9,2.6,10.3,3.9,15.8,4c13.3,0,21.6-8.3,24.3-11 l54.7-54.7c5.4-5.4,14.1-12,24.2-12s18.1,6.2,23,11.7l0.3,0.3l88.2,88.2C693.7,625.3,693.7,642.1,677.4,659L677.4,659z"
              ></path>
              <path
                fill="var(--color-dark)"
                d="M430.6,201.3c85.7,14.8,152.9,82,167.8,167.7c1.7,10.4,10.8,18,21.3,17.9c1.2,0,2.5-0.1,3.7-0.3 c11.8-2,19.7-13.1,17.8-24.9c0,0,0-0.1,0-0.1c-18-103.7-99.2-185-203-202.9c-11.7-2-22.9,5.9-25,17.6c-2.2,11.6,5.5,22.7,17.1,24.9 C430.4,201.2,430.5,201.3,430.6,201.3z"
              ></path>
              <path
                fill="var(--color-dark)"
                d="M778.2,355.4C748.6,184.6,614.9,50.8,444.1,21.3c-11.8-1.9-22.9,6-24.8,17.8c-1.9,11.8,6,22.9,17.8,24.8 c152.6,26.4,272.2,145.9,298.6,298.6c1.7,10.4,10.8,18,21.3,17.9c1.2,0,2.5-0.1,3.7-0.3c11.6-1.8,19.5-12.7,17.7-24.2 C778.2,355.6,778.2,355.5,778.2,355.4z"
              ></path>
            </svg>
            <div>
              <div class="font-medium text-sm sm:text-base mb-2">
                Vendor Support
              </div>
              <div class="text-xs sm:text-sm">
                We offer clear communication channels, streamlined processes and
                valuable support to help our vendors grow their brand and
                business.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellOnJevee;