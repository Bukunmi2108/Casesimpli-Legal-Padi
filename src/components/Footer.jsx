import React from 'react'
import { Logo } from '../components'

const Footer = () => {
  return (
    <div className='w-full bg-primary-text'>
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center px-8 py-12 gap-16">
            <div className='flex flex-col md:flex-row md:justify-between gap-24 md:gap-0 items-start w-full'>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                        <div className="flex-col justify-center items-center flex">
                            <img className="w-[49px] h-12" src="https://via.placeholder.com/49x48" />
                        </div>
                        <div className="ltext-white text-6xl font-bold font-lato leading-[64px] text-white">Legal Padi</div>
                    </div>
                    <div className="w-[376px] text-white text-md font-normal font-inter leading-normal">
                        reviews about Legal PadiRead reviews about Legal PadiRead reviews about Legal PadiRead reviews about Legal Padi
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="flex-col justify-start items-start gap-[18px] flex">
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">Home</div>
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">About us</div>
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">Case Simpli</div>
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">Careers</div>
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">Contact us</div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[18px] flex">
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">Home</div>
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">About us</div>
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">Case Simpli</div>
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">Careers</div>
                        <div className="self-stretch text-white text-md font-normal font-inter leading-normal">Contact us</div>
                    </div>
                </div>
            </div>

            <div className="w-full gap-4 md:justify-between items-start md:items-center flex flex-col md:flex-row">
                <div className="text-white text-md font-normal font-inter leading-normal">@ 2024 CaseSimpli Legal Padi</div>
                <div className="justify-start items-center gap-4 flex">
                    <div className="text-white text-md font-normal font-inter leading-normal">Terms of Service</div>
                    <div className="text-white text-md font-normal font-inter leading-normal">Privacy policy</div>
                    <div className="text-white text-md font-normal font-inter leading-normal">Disclaimer</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer