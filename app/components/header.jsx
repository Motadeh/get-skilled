import Image from "next/image"

const Header = () => {
    return (
        <div className="py-[18px] px-20 h-[84px] w-full fixed top-0 left-0 right-0 backdrop-blur-md bg-white flex flex-col gap-2 justify-center items-center">
            <div className="w-full flex self-stretch justify-between items-center">
                <div className="flex justify-center items-center gap-3 px-4 py-2">
                    <div>
                        <Image
                            // className="dark:invert"
                            src="/Frame.svg"
                            alt="logo"
                            // fill
                            width={32}
                            height={14}
                            priority
                        />
                    </div>
                    <div className="text-2xl font-semibold">Get Skilled</div>
                </div>
                <div className="flex justify-center items-center gap-2 text-sm font-normal">
                    <div className="flex justify-center items-center w-[62px] px-3 py-2 font-medium hover:text-[#368181]">Home</div>
                    <div className="flex justify-center items-center w-[74px] px-3 py-2 hover:text-[#368181]">Courses</div>
                    <div className="flex justify-center items-center w-[82px] px-3 py-2 hover:text-[#368181]">About Us</div>
                </div>
                <div className="w-[118px] p-4 bg-primary rounded-md flex justify-center items-center gap-3">
                    <div className="text-base font-semibold text-white">Get Started</div>
                </div>
            </div>
        </div>
    )
}

export default Header