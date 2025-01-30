'use client';

import Image from "next/image"
import { useState } from "react";

const Layer4 = () => {
    const [isHovering, setIsHovered] = useState(false);
    const [isHovering2, setIsHovered2] = useState(false);
    const [isHovering3, setIsHovered3] = useState(false);



    const onMouseEnter = (tab) => {
        tab === 1 && setIsHovered(true);
        tab === 2 && setIsHovered2(true);
        tab === 3 && setIsHovered3(true);
    };


    const onMouseLeave = (tab) => {
        tab === 1 && setIsHovered(false);
        tab === 2 && setIsHovered2(false);
        tab === 3 && setIsHovered3(false);
    };


    return (
        <div className="h-[756px] px-20 py-20 flex flex-col justify-center items-center gap-[120px]">
            <div className="h-[596px] flex flex-col justify-start items-center gap-10">
                <div className="h-6 gap-4 text-[#F16122] text-base font-bold">Featured Courses</div>
                <div className="h-16 w-[550px] text-center text-2xl font-semibold">Discover the best courses handpicked to propel your learning journey forward at affordable prices</div>
                <div className="h-[444px] w-full flex flex-col justify-start items-center gap-10">
                    <div className="w-full flex justify-start items-start gap-8 mt-2">
                        <div className="beauty w-full flex-1 flex flex-col justify-start items-start gap-3.5 rounded-lg overflow-hidden border border-[#D1D5DB]" onMouseEnter={() => onMouseEnter(1)} onMouseLeave={() => onMouseLeave(1)}>
                            <div className="h-[200px] w-[352px]">
                                {isHovering ?
                                    <Image
                                        className="h-[200px] w-[352px]"
                                        src="/beauty_2.svg"
                                        alt="logo"
                                        // fill
                                        width={352}
                                        height={200}
                                        priority
                                    />
                                    :
                                    <Image
                                        className="h-[200px] w-[352px]"
                                        src="/beauty.svg"
                                        alt="logo"
                                        // fill
                                        width={352}
                                        height={200}
                                        priority
                                    />
                                }
                            </div>
                            <div className="h-[246px] pb-6 px-4 flex flex-col justify-start items-start gap-2">
                                <div className="h-[158px] flex flex-col justify-start items-start gap-3.5">
                                    <div className="w-full flex justify-between items-center flex">
                                        <div className="px-3 py-1 bg-[#FDF2F8] text-[#DB2777] text-xs font-semibold rounded-xl flex justify-center items-center gap-2">Beauty</div>
                                        <div className="text-lg font-semibold">2900</div>
                                    </div>
                                    <div className="h-[118px] flex flex-col justify-start items-start gap-3">
                                        <div className="h-[72px] flex flex-col justify-start items-start gap-2">
                                            <div className="h-6 text-base font-bold">The Skin Structure for Beautician Beginners</div>
                                            <div className="text-sm font-normal">Everything from foundational knowledge of skin anatomy, skin essentials, structure and care...</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-start gap-2">
                                        <div className="w-8 h-8">
                                            <Image
                                                className="h-8 w-8"
                                                src="/profile.svg"
                                                alt="logo"
                                                // fill
                                                width={32}
                                                height={32}
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col justify-start itema-start gap-0.5">
                                            <div className="text-xs font-medium">Temitayo Hilda</div>
                                            <div className="text-[#6B7280] text-xs font-normal">Skin beautician</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex justify-between items-center mt-2">
                                    <div className="flex justify-start items-center gap-1">
                                        <div className="text-[#6C6C5A] text-base font-medium">4.7</div>
                                        <div className="flex justify-center items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star_half.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[68px] px-4 py-2 rounded-md text-white text-sm font-semibold bg-primary">Enroll</div>
                                </div>
                            </div>
                        </div>


                        <div className="beauty w-full flex-1 flex flex-col justify-start items-start gap-3.5 rounded-lg overflow-hidden border border-[#D1D5DB]" onMouseEnter={() => onMouseEnter(2)} onMouseLeave={() => onMouseLeave(2)}>
                            <div className="h-[200px] w-[352px]">
                                {isHovering2 ?
                                    <Image
                                        className="h-[200px] w-[352px]"
                                        src="/beauty_2.svg"
                                        alt="logo"
                                        // fill
                                        width={352}
                                        height={200}
                                        priority
                                    />
                                    :
                                    <Image
                                        className="h-[200px] w-[352px]"
                                        src="/beauty.svg"
                                        alt="logo"
                                        // fill
                                        width={352}
                                        height={200}
                                        priority
                                    />
                                }
                            </div>
                            <div className="h-[246px] pb-6 px-4 flex flex-col justify-start items-start gap-2">
                                <div className="h-[158px] flex flex-col justify-start items-start gap-3.5">
                                    <div className="w-full flex justify-between items-center flex">
                                        <div className="px-3 py-1 bg-[#FDF2F8] text-[#DB2777] text-xs font-semibold rounded-xl flex justify-center items-center gap-2">Beauty</div>
                                        <div className="text-lg font-semibold">2900</div>
                                    </div>
                                    <div className="h-[118px] flex flex-col justify-start items-start gap-3">
                                        <div className="h-[72px] flex flex-col justify-start items-start gap-2">
                                            <div className="h-6 text-base font-bold">The Skin Structure for Beautician Beginners</div>
                                            <div className="text-sm font-normal">Everything from foundational knowledge of skin anatomy, skin essentials, structure and care...</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-start gap-2">
                                        <div className="w-8 h-8">
                                            <Image
                                                className="h-8 w-8"
                                                src="/profile.svg"
                                                alt="logo"
                                                // fill
                                                width={32}
                                                height={32}
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col justify-start itema-start gap-0.5">
                                            <div className="text-xs font-medium">Temitayo Hilda</div>
                                            <div className="text-[#6B7280] text-xs font-normal">Skin beautician</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex justify-between items-center mt-2">
                                    <div className="flex justify-start items-center gap-1">
                                        <div className="text-[#6C6C5A] text-base font-medium">4.7</div>
                                        <div className="flex justify-center items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star_half.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[68px] px-4 py-2 rounded-md text-white text-sm font-semibold bg-primary">Enroll</div>
                                </div>
                            </div>
                        </div>


                        <div className="beauty w-full flex-1 flex flex-col justify-start items-start gap-3.5 rounded-lg overflow-hidden border border-[#D1D5DB]" onMouseEnter={() => onMouseEnter(3)} onMouseLeave={() => onMouseLeave(3)}>
                            <div className="h-[200px] w-[352px]">
                                {isHovering3 ?
                                    <Image
                                        className="h-[200px] w-[352px]"
                                        src="/beauty_2.svg"
                                        alt="logo"
                                        // fill
                                        width={352}
                                        height={200}
                                        priority
                                    />
                                    :
                                    <Image
                                        className="h-[200px] w-[352px]"
                                        src="/beauty.svg"
                                        alt="logo"
                                        // fill
                                        width={352}
                                        height={200}
                                        priority
                                    />
                                }
                            </div>
                            <div className="h-[246px] pb-6 px-4 flex flex-col justify-start items-start gap-2">
                                <div className="h-[158px] flex flex-col justify-start items-start gap-3.5">
                                    <div className="w-full flex justify-between items-center flex">
                                        <div className="px-3 py-1 bg-[#FDF2F8] text-[#DB2777] text-xs font-semibold rounded-xl flex justify-center items-center gap-2">Beauty</div>
                                        <div className="text-lg font-semibold">2900</div>
                                    </div>
                                    <div className="h-[118px] flex flex-col justify-start items-start gap-3">
                                        <div className="h-[72px] flex flex-col justify-start items-start gap-2">
                                            <div className="h-6 text-base font-bold">The Skin Structure for Beautician Beginners</div>
                                            <div className="text-sm font-normal">Everything from foundational knowledge of skin anatomy, skin essentials, structure and care...</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start items-start gap-2">
                                        <div className="w-8 h-8">
                                            <Image
                                                className="h-8 w-8"
                                                src="/profile.svg"
                                                alt="logo"
                                                // fill
                                                width={32}
                                                height={32}
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col justify-start itema-start gap-0.5">
                                            <div className="text-xs font-medium">Temitayo Hilda</div>
                                            <div className="text-[#6B7280] text-xs font-normal">Skin beautician</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex justify-between items-center mt-2">
                                    <div className="flex justify-start items-center gap-1">
                                        <div className="text-[#6C6C5A] text-base font-medium">4.7</div>
                                        <div className="flex justify-center items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                            <div className="w-4 h-4">
                                                <Image
                                                    className="h-4 w-4"
                                                    src="/star_half.svg"
                                                    alt="logo"
                                                    // fill
                                                    width={16}
                                                    height={16}
                                                    priority
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[68px] px-4 py-2 rounded-md text-white text-sm font-semibold bg-primary">Enroll</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layer4