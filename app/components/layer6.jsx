'use client';

import { useState } from "react";



const Layer6 = () => {

    const num = [0, 1, 2, 3, 4, 5, 6]

    const state = {
        open0: false,
        open1: false,
        open2: false,
        open3: false,
        open4: false,
        open5: false,
        open6: false,
    }

    const [open, setOpen] = useState(state);

    const onClick = (tab) => {
        tab === 0 && setOpen(prevOpen => ({ open0: !prevOpen.open0, open1: false, open2: false, open3: false, open4: false, open5: false, open6: false }));
        tab === 1 && setOpen(prevOpen => ({ open0: false, open1: !prevOpen.open1, open2: false, open3: false, open4: false, open5: false, open6: false }));
        tab === 2 && setOpen(prevOpen => ({ open0: false, open1: false, open2: !prevOpen.open2, open3: false, open4: false, open5: false, open6: false }));
        tab === 3 && setOpen(prevOpen => ({ open0: false, open1: false, open2: false, open3: !prevOpen.open3, open4: false, open5: false, open6: false }));
        tab === 4 && setOpen(prevOpen => ({ open0: false, open1: false, open2: false, open3: false, open4: !prevOpen.open4, open5: false, open6: false }));
        tab === 5 && setOpen(prevOpen => ({ open0: false, open1: false, open2: false, open3: false, open4: false, open5: !prevOpen.open5, open6: false }));
        tab === 6 && setOpen(prevOpen => ({ open0: false, open1: false, open2: false, open3: false, open4: false, open5: false, open6: !prevOpen.open6 }));
    };


    return (
        <div className="h-[920px] -mx-20 p-20 bg-[#F7FFFF] flex flex-col justify-start items-center gap-[50px]">
            <div className="flex flex-col justify-start items-center gap-6">
                <div className="text-[32px] leading-10 font-bold">Frequently Asked Questions.</div>
                <div className="text-center text-lg font-normal">Everything you need to know about Get Skilled</div>
            </div>

            <div className="w-full h-[590px] py-5 flex flex-col justify-center items-start gap-2.5">
                <div className="w-full h-[590px] flex flex-col justify-start items-start gap-7">

                    {num.map((i) =>
                        <div className="w-full flex flex-col justify-start items-start gap-7">

                            <div className="w-full flex flex-col justify-start items-center gap-6 cursor-pointer" onClick={() => onClick(i)}>
                                <div className="w-full h-8 flex justify-between items-center">
                                    <div className="flex-1 text-2xl font-normal">Who can take courses on Get Skilled?</div>
                                    <div className="h-8 w-8 flex justify-center items-center">
                                        {!open[`open${i}`] ?
                                            <svg class="w-8 h-8 text-[#111827] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="#111827" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                                            </svg>
                                            :
                                            <svg class="w-8 h-8 text-[#111827] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="#111827" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" />
                                            </svg>
                                        }
                                    </div>
                                </div>
                                <div className={`${open[`open${i}`] && 'flex' || 'hidden'} text-[#666666] text-xl font-normal`}>Courses on Get Skilled are open to learners of all ages and backgrounds. Whether you're a student, professional, or lifelong learner, our platform welcomes anyone eager to expand their knowledge and skills.</div>
                            </div>

                            {i !== 6 && <div className="w-full border border-[#E4E4E2]" />}
                        </div>

                    )}

                </div>
            </div>
        </div>
    )
}

export default Layer6