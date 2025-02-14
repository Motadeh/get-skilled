'use client';

import Image from "next/image"

const Layer4 = () => {

    const num = [0, 1, 2]

    return (
        <div className="h-[756px] px-20 py-20 flex flex-col justify-center items-center gap-[120px]">
            <div className="h-[596px] flex flex-col justify-start items-center gap-10">
                <div className="h-6 gap-4 text-[#F16122] text-base font-bold">Featured Courses</div>
                <div className="h-16 w-[550px] text-center text-2xl font-semibold">Discover the best courses handpicked to propel your learning journey forward at affordable prices</div>
                <div className="h-[444px] w-full flex flex-col justify-start items-center gap-10">
                    <div className="w-full flex justify-start items-start gap-8 mt-2">

                        {num.map(() =>
                            <div className="beauty w-full flex-1 flex flex-col justify-start items-start gap-3.5 rounded-lg overflow-hidden border border-[#D1D5DB]">
                                <div className="h-[200px] lg:h-[150px] xl:h-[200px] w-[352px] lg:w-[277px] xl:w-[352px]">
                                    <div className="w-full h-full bg-no-repeat bg-right-bottom" />
                                </div>
                                <div className="h-[246px] pb-6 px-4 flex flex-col justify-start items-start gap-2">
                                    <div className="h-[158px] flex flex-col justify-start items-start gap-3.5">
                                        <div className="w-full flex justify-between items-center flex">
                                            <div className="px-3 py-1 bg-[#FDF2F8] text-[#DB2777] text-xs font-semibold rounded-xl flex justify-center items-center gap-2">Beauty</div>
                                            <div className="text-sm lg:text-sm xl:text-lg font-semibold">2,900</div>
                                        </div>
                                        <div className="h-[118px] flex flex-col justify-start items-start gap-3">
                                            <div className="h-[72px] flex flex-col justify-start items-start gap-2">
                                                <div className="h-6 text-xs lg:text-xs xl:text-base font-bold">The Skin Structure for Beautician Beginners</div>
                                                <div className="text-[10px] lg:text-[10px] xl:text-sm font-normal">Everything from foundational knowledge of skin anatomy, skin essentials, structure and care...</div>
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
                                                <div className="text-[10px] lg:text-[10px] xl:text-xs font-medium">Temitayo Hilda</div>
                                                <div className="text-[#6B7280] text-[10px] lg:text-[10px] xl:text-xs font-normal">Skin beautician</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-between items-center mt-2">
                                        <div className="flex justify-start items-center gap-1">
                                            <div className="text-[#6C6C5A] text-[10px] lg:text-[10px] xl:text-base font-medium">4.7</div>
                                            <div className="flex justify-center items-center">
                                                <div className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4">
                                                    <Image
                                                        className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4"
                                                        src="/star.svg"
                                                        alt="logo"
                                                        // fill
                                                        width={16}
                                                        height={16}
                                                        priority
                                                    />
                                                </div>
                                                <div className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4">
                                                    <Image
                                                        className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4"
                                                        src="/star.svg"
                                                        alt="logo"
                                                        // fill
                                                        width={16}
                                                        height={16}
                                                        priority
                                                    />
                                                </div>
                                                <div className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4">
                                                    <Image
                                                        className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4"
                                                        src="/star.svg"
                                                        alt="logo"
                                                        // fill
                                                        width={16}
                                                        height={16}
                                                        priority
                                                    />
                                                </div>
                                                <div className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4">
                                                    <Image
                                                        className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4"
                                                        src="/star.svg"
                                                        alt="logo"
                                                        // fill
                                                        width={16}
                                                        height={16}
                                                        priority
                                                    />
                                                </div>
                                                <div className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4">
                                                    <Image
                                                        className="h-2 lg:h-3 xl:h-4 w-2 lg:w-3 xl:w-4"
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
                                        <div className="w-[68px] px-4 py-1 xl:py-2 rounded-md text-white text-sm font-semibold bg-primary">Enroll</div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layer4