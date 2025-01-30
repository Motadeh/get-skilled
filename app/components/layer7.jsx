// 'use client'

const Layer7 = () => {

    return (
        <div>
            {/* <div className={`preF h-[410px] -mx-20 py-20 flex flex-col justify-center items-center bg-no-repeat bg-center rounded-b-[64px] ${isHovering && 'bg-110' || 'bg-cover'}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> */}
            <div className={`preF h-[410px] -mx-20 py-20 flex flex-col justify-center items-center bg-no-repeat bg-center rounded-b-[64px] hover:bg-120`}>
                <div className="h-[192px] flex flex-col justify-start items-center gap-8">
                    <div className="w-[580px] h-[112px] flex flex-col justify-start items-center gap-4">
                        <div className="text-center text-white text-5xl leading-[56px] font-bold">Apply for Your Favorite Courses Today!</div>
                    </div>
                    <div className="h-12 px-8 py-4 bg-white rounded-md flex justify-center items-center gap-3">
                        <div className="text-base font-semibold">Apply Now</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Layer7