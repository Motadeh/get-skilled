'use client'

import Image from "next/image"
import { useState } from "react"

const Layer5 = () => {

    const [isHovering, setIsHovered] = useState(false);

    const tutorVal = [
        { info: 'Inspire and educate students from around the world, leaving a lasting impact on their lives and learning journey from the comfort of your home.' },
        { info: 'Enjoy the freedom to create and customize your courses according to your expertise and schedule, giving you full control over your teaching experience.' },
        { info: 'Expand your skills and expertise as an educator through continuous interaction with students, feedback, and support from our platform, enhancing your professional development.' },
        { info: 'Generate a steady income by monetizing your knowledge and skills, with the opportunity to reach a global audience and earn royalties from your successful courses.' }
    ]

    const stuVal = [
        { info: "Explore a wide range of courses across various subjects, levels, and formats, ensuring there's something for every interest and learning goal." },
        { info: "Learn from experienced tutors who are passionate about their subjects, offering high-quality instruction and valuable insights to help you succeed." },
        { info: "Access courses anytime, anywhere, and at your own pace, with user-friendly features and mobile compatibility for seamless learning on any device." },
        { info: "Gain the knowledge, skills, and confidence you need to excel in your personal, academic, and professional pursuits, with courses designed to help you reach your goals." }
    ]

    const [state, setState] = useState({ opt: 'tutor', value: tutorVal });


    return (
        <div className="layer5 h-[831px] py-[60px] flex flex-col justify-start items-center gap-[60px]">
            <div className="h-44 flex flex-col justify-start items-center gap-8">
                <div className="h-20 flex flex-col justify-start items-center gap-4">
                    <div className="h-20 w-[440px] text-center flex justify-start font-bold text-[32px] leading-10">Ready to redefine your future? Join us and thrive together.</div>
                </div>

                <div className="w-[360px] h-16 relative bg-white rounded-[40px] border-x border-t border-b-4 border-primary border-solid">
                    <div className={`${state.opt === 'tutor' && `left-3 ` || "left-48"} w-[156px] h-12 bg-primary rounded-[100px] absolute top-[6.5px]`} />
                    <div className={`w-[156px] py-3 absolute left-3 top-2 rounded-[28px] flex justify-center items-center cursor-pointer`}
                        onClick={() => setState(prev => ({ opt: 'tutor', value: tutorVal }))}
                    >
                        <div className={`${state.opt === 'tutor' && `text-white` || "text-primary"} text-base font-normal`}>Tutors</div>
                    </div>
                    <div className={`px-12 py-3 absolute left-48 top-2 rounded-[28px] flex justify-center items-center cursor-pointer`}
                        onClick={() => setState(prev => ({ opt: 'student', value: stuVal }))}
                    >
                        <div className={`${state.opt === 'tutor' && `text-primary` || "text-white"} text-base font-normal`}>Students</div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-start items-center gap-14">
                {/* <div className="w-1/2"> */}
                <div className={`w-[580px] h-[455px] bg-no-repeat ${state.opt === 'tutor' && "bg-[url('/tutor.png')]" || "bg-[url('/student.png')]"}`} />
                {/* </div> */}
                <div className="w-1/2 h-full flex flex-col justify-start items-end">

                    <div className="lg:w-[384px] xl:w-[484px] flex flex-col justify-start items-start gap-8 mt-2 lg:mt-2 xl:mt-4">
                        <div className="flex flex-col justify-start items-start self-stretch gap-4">

                            {state.value.map((val) =>
                                <div className="inline-flex justify-start items-start self-stretch gap-5">
                                    <div className="w-2 lg:w-3 xl:w-4 h-2 lg:h-3 xl:h-4 bg-[#F16122] rounded-full mt-1" />
                                    <div className="flex-1 text-xs lg:text-xs xl:text-base font-normal">{val.info}</div>
                                </div>
                            )}

                        </div>


                        <div className={`button5 ${state.opt === 'tutor' && `w-[130px] xl:w-[175px]` || "w-[150px]"} h-10 xl:h-12 pl-[24px] xl:pl-[34px] py-2 xl:py-3 rounded-md overflow-hidden justify-between items-center xl:items-start gap-[50px] xl:gap-[54px] bg-primary inline-flex flex-nowrap hover:px-3 xl:hover:px-5 hover:gap-1`}>
                            <div className="w-full text-white text-xs xl:text-base font-semibold text-nowrap">{state.opt === 'tutor' && 'Become a Tutor' || 'Get Started'}</div>
                            <div className="inner w-4 xl:w-6 h-4 xl:h-6 relative flex flex-col justify-start items-start">
                                <svg className="w-4 xl:w-6 h-4 xl:h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512">
                                    <path stroke="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Layer5