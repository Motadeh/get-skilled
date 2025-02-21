'use client';

import { useState } from "react";
import Image from "next/image"


const Layer1 = () => {

    return (
        <div className="w-full lg:w-full xl:w-full h-[638px] relative pt-[50px] flex justify-between" id="home">
            <div className="lg:w-[430px] lg:w-[430px] xl:w-[484px] h-[338px] mt-[96px] xl:mt-[86px] flex flex-col justify-start items-start gap-5 ">
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

            <div className="home w-[480px] lg:w-[480px] xl:w-[664px] h-[455px] relative">
                <div className="w-[440px] lg:w-[440px] xl:w-[580px] h-[196px] lg:h-[208px] xl:h-[286px] bg-[#EDF7F7] rounded-xl absolute right-0 lg:top-[125px] xl:top-[169px]" />

                <div className="home_1 w-[320px] lg:w-[320px] xl:w-[440px] h-[300px] lg:h-[300px] xl:h-[400px] rounded-ss-[32px] rounded-ee-[32px] absolute top-[100px] lg:top-[140px] xl:top-0 left-[570px lg:left-[570px xl:left-[122px right-[66px] bg-no-repeat bg-right bg-100 lg:bg-100 xl:bg-100 z-10" />

                <div className="home_2 h-[60px] lg:h-[50px] xl:h-[72px] py-2 px-4 lg:py-2 lg:px-4 xl:p-4 bg-white shadow-5xl rounded-lg flex flex-col justify-start items-start gap-6 absolute top-[410px] lg:top-[400px] xl:top-[350px] left-[460px lg:left-[458px xl:left-[0px] z-20">
                    <div className="self-stretch flex justify-start items-start gap-3">
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
                        <div className="grow shrink basis-0 flex flex-col justify-start items-start gap-1">
                            <div className="text-[#22C55E] text-[10px] lg:text-[10px] xl:text-sm font-semibold">Congratulations</div>
                            <div className="text-[8px] lg:text-[8px] xl:text-xs font-normal">You have successfully purchased a course</div>
                        </div>
                    </div>
                </div>

                <div className="home_3 w-12 lg:w-12 xl:w-16 h-12 lg:h-12 xl:h-16 absolute top-[173px] lg:top-[173px] xl:top-[40px] left-[850px lg:left-[865px xl:left-[539px right-[32px] bg-no-repeat bg-top z-20" />

                <div className="home_4 h-[40px] lg:h-[40px] xl:h-[54px] w-[150px] lg:w-[150px] xl:w-[185px] px-4 py-2 lg:py-1.5 xl:py-2 bg-white shadow-5xl rounded-lg flex flex-col justify-start items-start gap-6 absolute top-[300px] lg:top-[300px] xl:top-[214px] left-[834px lg:left-[833px xl:left-[484px right-[-40px] z-20">
                    <div className="self-stretch flex justify-start items-start gap-2">
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
                        <div className="grow shrink basis-0 flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch text-[10px] lg:text-[10px] xl:text-sm font-normal leading-tight">You just received a gold badge</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layer1