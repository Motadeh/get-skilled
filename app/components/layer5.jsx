'use client'

import Image from "next/image"
import { useState } from "react"

const Layer5 = () => {

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <div className="h-[907px] py-20 flex flex-col justify-start items-center gap-[100px]">
            <div className="h-48 flex flex-col justify-start items-center gap-12">
                <div className="h-20 w-[440px] text-center font-bold text-[32px] leading-10">Ready to redefine your future? Join us and thrive together.</div>
                <div className="w-[360px] h-20 p-2.5 rounded-[40px] border-x border-t border-b-4 border-primary border-solid flex justify-between items-center">
                    <div className="w-[156px] h-12 bg-primary flex justify-center items-center rounded-[28px] py-3 text-white text-base font-normal">Tutors</div>
                    <div className="px-12 py-3 flex justify-center items-center text-base font-normal text-primary">Students</div>
                </div>
            </div>

            <div className="w-full flex justify-start items-center gap-14">
                <div className="w-[580px] h-[455px]">
                    <Image
                        className="w-[580px] h-[455px] "
                        src="/tutor.png"
                        alt="logo"
                        // fill
                        width={580}
                        height={455}
                        priority
                    />
                </div>

                <div className="w-1/2 h-full flex flex-col justify-start items-end">
                    {/* <ul className="w-[484px] text-base list-item list-['.'] marker:text-[#F16122] marker:text-[100px]">
                        <li className="pl-4 mt-[-4]">Inspire and educate students from around the world, leaving a lasting impact on their lives and learning journey from the comfort of your home</li>
                        <li className="pl-4">Enjoy the freedom to create and customize your courses according to your expertise and schedule, giving you full control over your teaching experience.</li>
                        <li className="pl-4">Expand your skills and expertise as an educator through continuous interaction with students, feedback, and support from our platform, enhancing your professional development.</li>
                        <li className="pl-4">Generate a steady income by monetizing your knowledge and skills, with the opportunity to reach a global audience and earn royalties from your successful courses.</li>
                    </ul> */}
                    <div className="w-[484px] flex flex-col justify-start items-start gap-8 mt-4">
                        <div className="flex flex-col justify-start items-start self-stretch gap-4">
                            <div className="inline-flex justify-start items-start self-stretch gap-5">
                                <div className="w-4 h-4 bg-[#F16122] rounded-full mt-1" />
                                <div className="flex-1 text-base font-normal">Inspire and educate students from around the world, leaving a lasting impact on their lives and learning journey from the comfort of your home</div>
                            </div>
                            <div className="inline-flex justify-start items-start self-stretch gap-5">
                                <div className="w-4 h-4 bg-[#F16122] rounded-full mt-1" />
                                <div className="flex-1 text-base font-normal">Enjoy the freedom to create and customize your courses according to your expertise and schedule, giving you full control over your teaching experience.</div>
                            </div>
                            <div className="inline-flex justify-start items-start self-stretch gap-5">
                                <div className="w-4 h-4 bg-[#F16122] rounded-full mt-1" />
                                <div className="flex-1 text-base font-normal">Expand your skills and expertise as an educator through continuous interaction with students, feedback, and support from our platform, enhancing your professional development.</div>
                            </div>
                            <div className="inline-flex justify-start items-start self-stretch gap-5">
                                <div className="w-4 h-4 bg-[#F16122] rounded-full mt-1" />
                                <div className="flex-1 text-base font-normal">Generate a steady income by monetizing your knowledge and skills, with the opportunity to reach a global audience and earn royalties from your successful courses.</div>
                            </div>
                        </div>
                        <div
                            className={`w-[175px] h-12 py-3 text-white bg-primary rounded-md overflow-hidden flex ${isHovering && 'justify-end items-start' || 'justify-center items-start'} gap-10`}
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <div className="text-base font-semibold">Become a Tutor</div>
                            <div className={`${isHovering && 'flex' || 'hidden'} w-6 h-6`}>-</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layer5