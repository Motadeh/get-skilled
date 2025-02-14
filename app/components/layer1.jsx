'use client';

import { useState } from "react";
import Image from "next/image"


const Layer1 = () => {

    return (
        <div className="w-full lg:w-full xl:w-full h-[638px] flex justify-start" id="home">
            <div className="lg:w-[430px] lg:w-[430px] xl:w-[600px] h-[338px] mt-[96px] xl:mt-[116px] xl:mr-[80px] flex flex-col justify-start items-start gap-5 ">
                <div className="h-[220px] lg:h-[220px] xl:h-[270px] flex flex-col justify-start items-start self-stretch gap-6">
                    <div className="text-4xl lg:text-4xl xl:text-5xl font-bold break-words">Unlock your Learning Potential: Elevate your Future Now!</div>
                    <div className="w-[360px] lg:w-[360px] xl:w-[460px] text-sm lg:text-sm xl:text-base font-normal break-words">An online learning platform that offers a seamless learning experience and limitless opportunities for growth and knowledge acquisition using videos, audios, or documents.</div>
                </div>
                <div className="button w-[150px] h-12 pl-[34px] py-3 rounded-md overflow-hidden justify-between items-start gap-[54px] bg-primary inline-flex flex-nowrap hover:px-5 hover:gap-1">
                    <div className="w-full text-white text-base font-semibold text-nowrap">Get started</div>
                    <div className="inner w-6 h-6 relative flex flex-col justify-start items-start">
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512">
                            <path stroke="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </div>
                </div>

            </div>

            <div className="home w-[480px] lg:w-[480px] xl:w-[664px] h-[455px] mt-[60px] mr-[-80px]">
                <div className="w-[440px] lg:w-[440px] xl:w-[580px] h-[196px] lg:h-[208px] xl:h-[286px] bg-[#EDF7F7] rounded-xl mt-[115px] lg:mt-[125px] xl:mt-[169px] xl: xl:ml-[20px]" />

                <div className="home_1 w-[320px] lg:w-[320px] xl:w-[440px] h-[300px] lg:h-[300px] xl:h-[400px] rounded-ss-[32px] rounded-ee-[32px] absolute top-[100px] lg:top-[140px] xl:top-[140px] left-[570px] lg:left-[570px] xl:left-[845px] bg-no-repeat bg-right bg-100 lg:bg-100 xl:bg-100 z-10" />

                <div className="home_2 h-[60px] lg:h-[50px] xl:h-[72px] py-2 px-4 lg:py-2 lg:px-4 xl:p-4 bg-white shadow-5xl rounded-lg flex flex-col justify-start items-start gap-6 absolute top-[410px] lg:top-[400px] xl:top-[494px] left-[460px] lg:left-[458px] xl:left-[700px] z-20">
                    <div className="flex justify-start items-start gap-3">
                        <div>
                            <Image
                                // className=""
                                src="/gem.svg"
                                alt="logo"
                                // fill
                                width={24}
                                height={24}
                                priority
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-start items-start gap-1">
                            <div className="text-[#22C55E] text-[10px] lg:text-[10px] xl:text-sm font-semibold">Congratulations</div>
                            <div className="text-[8px] lg:text-[8px] xl:text-xs font-normal">You have successfully purchased a course</div>
                        </div>
                    </div>
                </div>

                <div className="home_3 w-12 lg:w-12 xl:w-16 h-12 lg:h-12 xl:h-16 absolute top-[173px] lg:top-[173px] xl:top-[180px] left-[850px] lg:left-[865px] xl:left-[1250px] bg-no-repeat bg-top z-20" />

                <div className="home_4 h-[40px] lg:h-[40px] xl:h-[60px] w-[150px] lg:w-[150px] xl:w-[200px] px-4 py-2 lg:py-1.5 xl:py-3 bg-white shadow-5xl rounded-lg flex flex-col justify-start items-start gap-6 absolute top-[300px] lg:top-[300px] xl:top-[355px] left-[834px] lg:left-[833px] xl:left-[1208px] z-20">
                    <div className="flex justify-start items-start gap-2">
                        <div className="mt-0.5 xl:mt-1">
                            <Image
                                // className=""
                                src="/badge.svg"
                                alt="logo"
                                // fill
                                width={18}
                                height={24}
                                priority
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-start items-start gap-1">
                            <div className="text-[10px] lg:text-[10px] xl:text-sm font-normal">You just received a gold badge</div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="home w-[964px] h-[455px] mt-[60px] mr-[-80px] bg-no-repeat bg-center transition-all ease-in-out duration-700" /> */}

            {/* <div className="w-[964px] h-[455px] mt-[60px] mr-[-80px] transition-all ease-in-out duration-700" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> */}
            {/* {isHovering ? */}
            {/* <Image
                        // className="w-[964px] h-[455px] mt-[60px] mr-[-80px] transition-all ease-in-out duration-700"
                        src={isHovering && "/home_2.svg" || "/home_1.svg"}
                        alt="logo"
                        // fill
                        width={864}
                        height={455}
                        priority
                        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                    /> */}
            {/* :
                    <Image
                        className="w-[864px] h-[455px] transition-all ease-in-out duration-75"
                        src="/home_1.svg"
                        alt="logo"
                        // fill
                        width={964}
                        height={455}
                        priority
                    />
                } */}
            {/* </div> */}
        </div>
    )
}

export default Layer1