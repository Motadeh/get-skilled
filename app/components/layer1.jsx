'use client';

import { useState } from "react";
import Image from "next/image"


const Layer1 = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);


    return (
        <div className="w-full h-[638px] flex justify-start" id="home">
            <div className="w-[600px] h-[338px] mt-[116px] mr-[80px] flex flex-col justify-start items-start gap-5 ">
                <div className="h-[270px] flex flex-col justify-start items-start self-stretch gap-6">
                    <div className="text-5xl font-bold break-words">Unlock your Learning Potential: Elevate your Future Now!</div>
                    <div className="w-[460px] text-base font-normal break-words">An online learning platform that offers a seamless learning experience and limitless opportunities for growth and knowledge acquisition using videos, audios, or documents.</div>
                </div>
                <div className="button w-[150px] h-12 px-[34px] hover:px-5 py-3 rounded-md overflow-hidden hover:inline-flex justify-between items-start gap-1 bg-primary">
                    <div className="w-full text-white text-base font-semibold break-words">Get started</div>
                    <div className="inner w-6 h-6 px-4.21 py-4.41 hidden flex-col justify-center items-center">
                        <div className="w-[15.58px] h-[15.18px] bg-white" />
                    </div>
                </div>


                {/* <div className="button w-[150px] h-12 px-5 py-3 rounded-md overflow-hidden inline-flex justify-between items-start gap-[4px] bg-primary">
                    <div className="w-full text-white text-base font-semibold break-words">Get started</div>
                    <div className="inner w-6 h-6 flex flex-col justify-center items-center">
                        <div className="w-[15.58px] h-[15.18px] bg-white" />
                    </div>
                </div> */}
            </div>

            <div className="w-[964px] h-[455px] mt-[60px] mr-[-80px]" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {isHovering ?
                    <Image
                        className="w-[964px] h-[455px]"
                        src="/home_2.svg"
                        alt="logo"
                        // fill
                        width={864}
                        height={455}
                        priority
                    />
                    :
                    <Image
                        className="w-[864px] h-[455px]"
                        src="/home_1.svg"
                        alt="logo"
                        // fill
                        width={964}
                        height={455}
                        priority
                    />
                }
            </div>
        </div>
    )
}

export default Layer1