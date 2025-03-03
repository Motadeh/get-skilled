'use client'

import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { HeaderContext } from "../providers"

const Footer = () => {

    const { headerState, setHeaderState } = useContext(HeaderContext)

    return (
        <div className="w-full bg-[#EDF7F7] pt-[100px] pb-16 flex justify-center items-center">
            <div className="flex-1 self-stretch px-14 flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex justify-start items-start gap-40">
                    <div className="text-[32px] leading-10 font-semibold">Get Skilled</div>

                    <div className="flex-1 h-[142px] flex justify-start items-start gap-20">

                        <div className="flex-1 flex flex-col justify-start items-start gap-3">
                            <div className="flex justify-start items-start gap-2">
                                <div className="flex-1 text-lg font-semibold">Company</div>
                            </div>
                            <div className="h-[104px] flex flex-col justify-start items-start gap-2 text-sm font-normal">
                                <div>About us</div>
                                <div>Courses</div>
                                <div>Blog</div>
                                <div>Help Center</div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-start items-start gap-3">
                            <div className="flex justify-start items-start gap-2">
                                <div className="flex-1 text-lg font-semibold">Community</div>
                            </div>
                            <div className="h-[104px] flex flex-col justify-start items-start gap-2 text-sm font-normal">
                                <div>Join</div>
                                <div>Terms</div>
                                <div>Privacy</div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-start items-start gap-3">
                            <div className="flex justify-start items-start gap-2">
                                <div className="flex-1 text-lg font-semibold">Services</div>
                            </div>
                            <div className="h-[104px] flex flex-col justify-start items-start gap-2 text-sm font-normal">
                                <div>Become a tutor</div>
                                <div>Teaching help center</div>
                                <div>Company rules</div>
                            </div>
                        </div>

                        <Link href="/#home" onClick={() => setHeaderState(1)}>
                            <div className="h-full w-14 flex items-end">
                                <Image
                                    className="w-12 h-12 "
                                    src="/scroll.svg"
                                    alt="logo"
                                    // fill
                                    width={580}
                                    height={455}
                                    priority
                                />
                            </div>
                        </Link>

                    </div>
                </div>

                <div className="w-full py-8 pr-20 border-t border-[#E4E4E2] flex justify-start items-center gap-[173px]">
                    <div className="flex-1 h-6 text-base font-medium">©2024 Get Skilled. All rights reserved </div>
                    <div className="flex justify-between items-center gap-8">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1C4.13 1 1 4.15 1 8.04c0 3.51 2.56 6.43 5.91 6.96v-4.92H5.13V8.04h1.78V6.49c0-1.77 1.05-2.74 2.64-2.74c.77 0 1.57.14 1.57.14v1.73h-.88c-.87 0-1.14.54-1.14 1.1v1.32h1.94l-.31 2.04H9.1V15c3.35-.53 5.91-3.44 5.91-6.96c0-3.89-3.13-7.04-7-7.04Z" /></svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 2c-2.716 0-3.056.012-4.123.06c-1.064.049-1.791.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.011 8.944 2 9.284 2 12s.011 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.772a4.9 4.9 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465c1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.772-1.153a4.9 4.9 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.9 4.9 0 0 0-1.153-1.772a4.9 4.9 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2m0 1.802c2.67 0 2.986.01 4.04.058c.976.045 1.505.207 1.858.344c.466.182.8.399 1.15.748c.35.35.566.684.748 1.15c.136.353.3.882.344 1.857c.048 1.055.058 1.37.058 4.041c0 2.67-.01 2.986-.058 4.04c-.045.976-.208 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.684.566-1.15.748c-.353.136-.882.3-1.857.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.987-.01-4.04-.058c-.976-.045-1.505-.208-1.858-.344a3.1 3.1 0 0 1-1.15-.748a3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857c-.048-1.055-.058-1.37-.058-4.041c0-2.67.01-2.986.058-4.04c.045-.976.207-1.505.344-1.858c.182-.466.399-.8.748-1.15c.35-.35.684-.566 1.15-.748c.353-.137.882-.3 1.857-.344c1.055-.048 1.37-.058 4.041-.058m0 11.531a3.333 3.333 0 1 1 0-6.666a3.333 3.333 0 0 1 0 6.666m0-8.468a5.135 5.135 0 1 0 0 10.27a5.135 5.135 0 0 0 0-10.27m6.538-.203a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0" /></svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" /></svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z" /></svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer