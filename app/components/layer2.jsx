import Image from "next/image"

const Layer2 = () => {
    return (
        <div className="h-[589px] px-20 -mx-20 py-[100px] bg-[#F9FBFB] flex flex-col justify-center items-center gap-[120px]" id="about">
            <div className="h-[389px] flex flex-col gap-[48px] justify-start items-start self-stretch">
                <div className="flex gap-[89px] justify-between items-start self-stretch">
                    <div className="w-[484px] h-[77px] text-4xl lg:text-4xl xl:text-[40px] xl:leading-[48px] font-bold">Why You Should Choose Get Skilled</div>
                    <div className="w-[547px] text-base font-normal">We prioritize your educational success and unlock your full potential. With cutting-edge tools and personalized support, Get Skilled is your gateway to success in the world of learning.</div>
                </div>
                <div className="w-full justify-between items-start gap-8 flex">
                    <div className="flex-1 flex flex-col justify-start items-start flex gap-3.5 p-6">
                        <div className="w-10 h-10">
                            <Image
                                // className="w-[964px] h-[455px]"
                                src="/Framelearn.svg"
                                alt="logo"
                                // fill
                                width={40}
                                height={40}
                                priority
                            />
                        </div>
                        <div className="h-[162px] flex flex-col justify-start items-start gap-3.5">
                            <div className="text-xl font-bold">Learn Anywhere</div>
                            <div className="w-[242px] xl:w-[302px] text-base font-normal text-[#4B5563]">Learning knows no bounds. Whether you're at home, on the go, or anywhere in between, our platform ensures seamless access to educational resources making learning a part of your lifestyle.</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start items-start flex gap-3.5 p-6">
                        <div className="w-10 h-10">
                            <Image
                                // className="w-[964px] h-[455px]"
                                src="/Frametutors.svg"
                                alt="logo"
                                // fill
                                width={40}
                                height={40}
                                priority
                            />
                        </div>
                        <div className="h-[162px] flex flex-col justify-start items-start gap-3.5">
                            <div className="text-xl font-bold">Vetted Tutors</div>
                            <div className="w-[242px] xl:w-[302px] text-base font-normal text-[#4B5563]">We believe in the power of quality education. That's why we meticulously vet our tutors to ensure they're experts in their fields, delivering top-notch instruction and guidance.</div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-start items-start flex gap-3.5 p-6">
                        <div className="w-10 h-10">
                            <Image
                                // className="w-[964px] h-[455px]"
                                src="/Framerewards.svg"
                                alt="logo"
                                // fill
                                width={40}
                                height={40}
                                priority
                            />
                        </div>
                        <div className="h-[162px] flex flex-col justify-start items-start gap-3.5">
                            <div className="text-xl font-bold">Online Rewards</div>
                            <div className="w-[242px] xl:w-[302px] text-base font-normal text-[#4B5563]">We believe in recognizing and celebrating your achievements every step of the way. Earn online rewards for your dedication and hard work, motivating you to reach new heights in your educational pursuits.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layer2