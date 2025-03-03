import Image from "next/image"

const Layer3 = () => {
    const array1 = [
        [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="23.33px" viewBox="0 0 48 48">
                    <g fill="#368181" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                        <path d="M42 44V22c0-9.941-8.059-18-18-18S6 12.059 6 22v22" />
                        <path fill="#ffffff" d="M24 43c5.523 0 10-8.954 10-20H14c0 11.046 4.477 20 10 20" />
                    </g>
                </svg>,
                header: 'Beauty',
                text: 'Unlock the secrets of skincare, makeup, and self-care routines for a radiant you.'
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="#368181">
                    <path d="M12 5v8.55c-.94-.54-2.1-.75-3.33-.32c-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2" />
                </svg>,
                header: 'Music',
                text: 'Let your creativity flow with courses in music theory, instrument mastery, and composition.'
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="#368181">
                    <path d="M2 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0zm1-2h4V6a1 1 0 0 0-1.447-.895l-2 1A1 1 0 0 0 3 7zm8 0a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m4.75 7.21a7 7 0 0 0 1.5 0v1.79h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.25z" />
                </svg>,
                header: 'Cosmetology',
                text: 'Explore the science and artistry behind beauty treatments and salon services.'
            }
        ],
        [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="#368181">
                    <path fill="" d="M22.01 4.05L20.6 3.4l-.65-1.41a.5.5 0 0 0-.91 0L18.4 3.4l-1.41.65a.5.5 0 0 0 0 .91l1.41.64l.65 1.41a.5.5 0 0 0 .91 0l.64-1.41l1.41-.65c.39-.17.39-.73 0-.9" />
                    <circle cx="9" cy="13" r="1.25" fill="" /><circle cx="15" cy="13" r="1.25" fill="" />
                    <path fill="" d="M19.5 8.8c-.78 0-1.49-.46-1.82-1.17l-.41-.9l-.9-.41A2.01 2.01 0 0 1 15.2 4.5c0-.66.34-1.26.87-1.63C14.83 2.32 13.45 2 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10c0-1.45-.32-2.83-.87-4.07c-.37.53-.97.87-1.63.87M12 20c-4.41 0-8-3.59-8-8c0-.05.01-.1 0-.14c2.6-.98 4.69-2.99 5.74-5.55A10 10 0 0 0 17.5 10c.75 0 1.47-.09 2.17-.24c.21.71.33 1.46.33 2.24c0 4.41-3.59 8-8 8" />
                </svg>,
                header: 'Hair',
                text: 'Master the art of hairstyling, from trendy cuts to professional techniques.'
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="#368181">
                    <path d="M8 22v-1.75Q5.325 19.2 3.663 17T2 12h2V4l18-2v1.5L10.5 4.8v1.7H22V8H10.5v4H22q0 2.8-1.662 5T16 20.25V22zM8 6.5h1V4.95l-1 .125zm-2.5 0h1V5.25l-1 .1zM8 12h1V8H8zm-2.5 0h1V8h-1z" />
                </svg>,
                header: 'Food',
                text: 'Discover culinary delights with courses in cooking techniques, nutrition, and gastronomy.'
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 256 256" fill="#368181"><path d="M66.26 80.23a15.26 15.26 0 0 1-1.65-12.17a15.5 15.5 0 0 1 2-4.76L88 32.7V8a8 8 0 0 1 8.53-8A8.17 8.17 0 0 1 104 8.27v24.15l5.25 6.58a23.91 23.91 0 0 0 19.13 9a24.67 24.67 0 0 0 18.71-9.43l4.91-6.15V8a8 8 0 0 1 8.53-8A8.17 8.17 0 0 1 168 8.27V32.7l21.42 30.6a15.5 15.5 0 0 1 2 4.76a15.26 15.26 0 0 1-1.65 12.17a2 2 0 0 0-.11.18l-13.86 21.74a4 4 0 0 1-3.4 1.85H83.6a4 4 0 0 1-3.37-1.85L66.37 80.41a2 2 0 0 0-.11-.18m148.5 129.56a2.5 2.5 0 0 0-.15-.34l-40.92-87.15a4 4 0 0 0-3.63-2.3H85.94a4 4 0 0 0-3.63 2.3l-40.92 87.15a2.5 2.5 0 0 0-.15.34A16.2 16.2 0 0 0 41.6 223a16 16 0 0 0 14.4 9h144a16 16 0 0 0 14.39-9a16.2 16.2 0 0 0 .37-13.21" /></svg>,
                header: 'Fashion',
                text: 'Stay stylish and on-trend with insights into fashion design, styling, and garment construction.'
            }
        ],
        [
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 256 256" fill="#368181">
                    <path d="M224 72h-16v-8a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v96a24 24 0 0 0 24 24h112v8a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V96a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-96 16a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m80-96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8" />
                </svg>,
                header: 'Technology',
                text: 'Dive into the world of innovation with courses on coding, digital marketing, and more.'
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="#368181">
                    <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3" />
                </svg>,
                header: 'Photography',
                text: 'Express your creativity through the lens with photography courses for all skill levels.'
            },
            {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="#368181">
                    <path d="M12.06 7.635q-.933 0-1.57-.665q-.636-.664-.586-1.595q.05-1.05.71-1.864q.661-.815 1.444-1.511q.783.696 1.443 1.51t.71 1.846q.05.95-.583 1.615q-.634.664-1.567.664m7.785 9.5q.479 0 .817-.338t.337-.826t-.337-.826t-.817-.337t-.816.337t-.338.826t.338.826t.816.338M17.692 21H6.423q-1.01 0-1.716-.707T4 18.577v-1.443h5.673v-6.018q0-.667.475-1.141t1.14-.475h1.539q.666 0 1.14.475t.475 1.14v6.02h3.639q-.185-.258-.287-.55t-.102-.623q0-.901.627-1.528t1.527-.626t1.527.626t.627 1.528q0 .834-.543 1.444q-.544.61-1.342.706v.465q0 1.01-.706 1.716T17.692 21" />
                </svg>,
                header: 'DIY',
                text: 'Get hands-on with DIY projects such as home decor, crafts, and personalized gifts.'
            }
        ]
    ];
    return (
        <div className="w-full h-[918px] py-[60px] bg-white flex flex-col justify-center items-center gap-[120px]" id="courses">
            <div className="h-[718px] flex flex-col justify-start items-center self-stretch gap-10">
                <div className="h-6 text-center text-primary text-base font-bold">Course Category</div>
                <div className="w-[388px] text-center text-2xl font-semibold">Explore our course categories for endless learning opportunities</div>
                <div className="w-full h-[566px] flex flex-col justify-start items-center gap-10">

                    {array1.map((row) =>
                        <div className="flex justify-start items-start gap-8">

                            {row.map((col) =>
                                <div className="cards w-[254px] lg:w-[270px] xl:w-[354px] h-[162px] rounded-2xl overflow-hidden border border-gray-300 px-4 py-4 flex flex-col justify-center hover:bg-primary hover:text-white">
                                    <div className="h-7 flex justify-between items-center mb-4">
                                        <div className="w-7 h-7 pr-[3.5px] py-[2.33px]">
                                            {col.icon}
                                        </div>
                                        <div className="learn w-[87px] pl-[21px] pt-10 flex justify-between items-center gap-1.5 flex-nowrap overflow-hidden">
                                            <div className="text-sm text-white italic font-normal text-nowrap">Learn more</div>
                                            <div className="w-4 h-4 px-[2.81px] py-[2.94px] flex justify-center items-center overflow-hidden">
                                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 448 512">
                                                    <path stroke="#ffffff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[72px] flex flex-col justify-start items-start gap-1.5">
                                        <div className="text-sm lg:text-sm xl:text-base font-bold">{col.header}</div>
                                        <div className="text-[#4B5563] text-xs lg:text-xs xl:text-sm font-normal">{col.text}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}

export default Layer3