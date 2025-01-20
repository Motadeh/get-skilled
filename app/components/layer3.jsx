import Image from "next/image"

const Layer3 = () => {
    return (
        <div className="h-[918px] px-20 py-[100px] bg-white flex flex-col justify-center items-center gap-[120px]">
            <div className="h-[718px] flex flex-col justify-start items-center self-stretch gap-10">
                <div className="h-6 text-center text-[#F16122] text-base font-bold">Our Course Category</div>
                <div className="w-[388px] text-center text-2xl font-semibold">Explore our course categories for endless learning opportunities</div>
                <div className="h-[566px] flex flex-col justify-start items-center gap-10">
                    <div className="flex justify-start items-start gap-8">
                        <div className="cards w-[356px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4 flex flex-col justify-center hover:bg-primary hover:text-white">
                            <div className="flex justify-between">
                                <div className="w-7 h-7 px-[3.5px] py-[2.33px]">
                                    <Image
                                        // className="w-[964px] h-[455px]"
                                        src="/Frametutors.svg"
                                        alt="logo"
                                        // fill
                                        width={21}
                                        height={23.33}
                                        priority
                                    />
                                </div>
                                <div className="learn hidden pt-2 pl-px pr-[3px] justify-center items-center gap-1.5">
                                    <div className="text-sm italic font-normal">Learn more</div>
                                    <div className="w-4 h-4 px-[2.81px] py-[2.94px] flex justify-center items-center">v</div>
                                </div>
                            </div>
                            <div>Beauty</div>
                            <div>Unlock the secrets of skincare, makeup, and self-care routines for a radiant you.</div>
                        </div>
                        <div className="w-[300px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4">
                            <div></div>
                            <div>Music</div>
                            <div>Let your creativity flow with courses in music theory, instrument mastery, and composition.</div>
                        </div>
                        <div className="w-[300px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4">
                            <div></div>
                            <div>Cosmetology</div>
                            <div>Explore the science and artistry behind beauty treatments and salon services.</div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-8">
                        <div className="w-[300px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4">
                            <div></div>
                            <div>Hair</div>
                            <div>Master the art of hairstyling, from trendy cuts to professional techniques.</div>
                        </div>
                        <div className="w-[300px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4">
                            <div></div>
                            <div>Food</div>
                            <div>Discover culinary delights with courses in cooking techniques, nutrition, and gastronomy.</div>
                        </div>
                        <div className="w-[300px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4">
                            <div></div>
                            <div>Fashion</div>
                            <div>Stay stylish and on-trend with insights into fashion design, styling, and garment construction.</div>
                        </div>
                    </div>
                    <div className="flex justify-start items-start gap-8">
                        <div className="w-[300px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4">
                            <div></div>
                            <div>Technology</div>
                            <div>Dive into the world of innovation with courses on coding, digital marketing, and more.</div>
                        </div>
                        <div className="w-[300px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4">
                            <div></div>
                            <div>Photography</div>
                            <div>Express your creativity through the lens with photography courses for all skill levels.</div>
                        </div>
                        <div className="w-[300px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4">
                            <div></div>
                            <div>DIY</div>
                            <div>Get hands-on with DIY projects such as home decor, crafts, and personalized gifts.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layer3