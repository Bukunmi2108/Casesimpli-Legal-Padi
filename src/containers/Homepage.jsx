import React from 'react'
import { Navbar, Footer, Logo, Btn } from '../components'
import Herovideo from '../assets/hero-video.png'
import Court from '../assets/court.svg'
import AI from '../assets/ai.svg'
import Lawyer from '../assets/lawyer.svg'
import Profile from '../assets/profile.png'
import Layer from '../assets/layer.svg'

const Homepage = () => {
  return (
    <div>
        <Navbar />

        <div className='bg md:bg-center bg-bottom bg-no-repeat'>
            <div className=" w-full mx-auto flex flex-col py-24 items-center justify-center gap-4">
                <div className="text-center text-black text-6xl md:text-8xl leading-[60px] md:leading-[80px] font-bold font-lato md:w-5/6">Lorem ipsum dolor sit amet, consectetur</div>
                <div className="text-center text-primary-text text-lg md:text-xl font-medium font-inter">Lorem ipsum dolor sit amet, consectetur</div>
                <Btn 
                text='Get started for free'
                classes='bg-primary-orange text-white'
                />
            </div>
    

            <div className="mx-auto max-w-6xl object-cover">
                <img className='w-full' src={Herovideo} alt="Video" />
            </div>
        </div>

        <section className="max-w-7xl mx-auto flex flex-col py-24 gap-12">
            <div className="flex flex-col justify-start items-center gap-6">
                <div className="text-black text-4xl  md:text-5xl font-bold font-lato leading-10">Features of Legal Padi</div>
                <div className="text-center text-primary-text text-md md:taxt-lg font-normal font-inter leading-normal">Explore the exceptional features Legal Padi has for you</div>
            </div>

            <div className='flex flex-col w-full md:px-12 px-4 gap-16'>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col md:w-1/2 gap-6">
                        <div className="px-8 py-8 bg-gradient-to-b from-[#ebf5fb] to-white rounded-[100px] shadow flex-col flex justify-center items-center gap-2.5 w-fit">
                            <div className="text-[#00008b] text-5xl font-bold font-lato leading-9">1</div>
                        </div>

                        <div className="text-black text-3xl font-bold font-lato leading-9">Legal Padi Legal Research Directory</div>
                        <div className="text-black text-lg font-normal font-inter leading-normal">
                        Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                        </div>
                    </div>
                    <div className="flex md:w-1/2 w-full justify-center">
                        <img className='w-64' src={Court} alt='court' />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col md:w-1/2 gap-6 md:order-2">
                        <div className="px-8 py-8 bg-gradient-to-b from-[#ebf5fb] to-white rounded-[100px] shadow flex-col flex justify-center items-center gap-2.5 w-fit">
                            <div className="text-[#00008b] text-5xl font-bold font-lato leading-9">1</div>
                        </div>

                        <div className="text-black text-3xl font-bold font-lato leading-9">Legal Padi Legal Research Directory</div>
                        <div className="text-black text-lg font-normal font-inter leading-normal">
                        Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                        </div>
                    </div>
                    <div className="flex md:w-1/2 w-full justify-center md:order-1">
                        <img className='w-64' src={AI} alt='ai' />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col md:w-1/2 gap-6">
                        <div className="px-8 py-8 bg-gradient-to-b from-[#ebf5fb] to-white rounded-[100px] shadow flex-col flex justify-center items-center gap-2.5 w-fit">
                            <div className="text-[#00008b] text-5xl font-bold font-lato leading-9">1</div>
                        </div>

                        <div className="text-black text-3xl font-bold font-lato leading-9">Legal Padi Legal Research Directory</div>
                        <div className="text-black text-lg font-normal font-inter leading-normal">
                        Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
                        </div>
                    </div>
                    <div className="flex md:w-1/2 w-full justify-center">
                        <img className='w-64' src={Lawyer} alt='ai' />
                    </div>
                </div>
            </div>
        </section>

        <section className="flex flex-col gap-12 mt-16 px-12 items-center justify-center">
            <div className="flex flex-col justify-start items-center gap-6">
                <div className="text-black text-4xl md:text-5xl font-bold font-lato leading-10 text-center">What you would get</div>
                <div className="w-[399px] text-center text-primary-text text-md md:text-lg font-normal font-inter leading-normal">This is what we have for you</div>
            </div>
            <div className="flex flex-row flex-wrap justify-start items-end gap-6 max-w-5xl">
                <div className="min-w-72 h-80 flex flex-col  rounded-xl shadow bg-[#fdfaf9] items-center justify-start gap-8 py-4 px-4 flex-1 flex-grow">
                        <div className="w-fit px-6 py-4 bg-gradient-to-b from-[#ff9900] to-[#ffff00] rounded-[100px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-5xl font-bold font-lato leading-9">1</div>
                        </div>
                        <div className="left-0 top-[113px] text-center text-[#ff630d] text-xl font-bold font-lato leading-[1.25px]">Updated Legal Knowledge</div>
                        <div className="w-full left-0 top-[147px] text-primary-text text-sm font-normal font-inter leading-normal">
                            This is what we have for youThis is what we have for youThis is what we have for youThis is what we have for you
                        </div>
                </div>
                <div className="min-w-72 h-80 flex flex-col  rounded-xl shadow bg-[#fdfaf9] items-center justify-start gap-8 py-4 px-4 flex-1 flex-grow">
                        <div className="w-fit px-6 py-4 bg-gradient-to-b from-[#ff9900] to-[#ffff00] rounded-[100px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-5xl font-bold font-lato leading-9">1</div>
                        </div>
                        <div className="left-0 top-[113px] text-center text-[#ff630d] text-xl font-bold font-lato leading-[1.25px]">Updated Legal Knowledge</div>
                        <div className="w-full left-0 top-[147px] text-primary-text text-sm font-normal font-inter leading-normal">
                            This is what we have for youThis is what we have for youThis is what we have for youThis is what we have for you
                        </div>
                </div>
                <div className="min-w-72 h-80 flex flex-col  rounded-xl shadow bg-[#fdfaf9] items-center justify-start gap-8 py-4 px-4 flex-1 flex-grow">
                        <div className="w-fit px-6 py-4 bg-gradient-to-b from-[#ff9900] to-[#ffff00] rounded-[100px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-5xl font-bold font-lato leading-9">1</div>
                        </div>
                        <div className="left-0 top-[113px] text-center text-[#ff630d] text-xl font-bold font-lato leading-[1.25px]">Updated Legal Knowledge</div>
                        <div className="w-full left-0 top-[147px] text-primary-text text-sm font-normal font-inter leading-normal">
                            This is what we have for youThis is what we have for youThis is what we have for youThis is what we have for you
                        </div>
                </div>
                <div className="min-w-72 h-80 flex flex-col  rounded-xl shadow bg-[#fdfaf9] items-center justify-start gap-8 py-4 px-4 flex-1 flex-grow">
                        <div className="w-fit px-6 py-4 bg-gradient-to-b from-[#ff9900] to-[#ffff00] rounded-[100px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-5xl font-bold font-lato leading-9">1</div>
                        </div>
                        <div className="left-0 top-[113px] text-center text-[#ff630d] text-xl font-bold font-lato leading-[1.25px]">Updated Legal Knowledge</div>
                        <div className="w-full left-0 top-[147px] text-primary-text text-sm font-normal font-inter leading-normal">
                            This is what we have for youThis is what we have for youThis is what we have for youThis is what we have for you
                        </div>
                </div>
                <div className="min-w-72 h-80 flex flex-col  rounded-xl shadow bg-[#fdfaf9] items-center justify-start gap-8 py-4 px-4 flex-1 flex-grow">
                        <div className="w-fit px-6 py-4 bg-gradient-to-b from-[#ff9900] to-[#ffff00] rounded-[100px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-5xl font-bold font-lato leading-9">1</div>
                        </div>
                        <div className="left-0 top-[113px] text-center text-[#ff630d] text-xl font-bold font-lato leading-[1.25px]">Updated Legal Knowledge</div>
                        <div className="w-full left-0 top-[147px] text-primary-text text-sm font-normal font-inter leading-normal">
                            This is what we have for youThis is what we have for youThis is what we have for youThis is what we have for you
                        </div>
                </div>
                <div className="min-w-72 h-80 flex flex-col  rounded-xl shadow bg-[#fdfaf9] items-center justify-start gap-8 py-4 px-4 flex-1 flex-grow">
                        <div className="w-fit px-6 py-4 bg-gradient-to-b from-[#ff9900] to-[#ffff00] rounded-[100px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-5xl font-bold font-lato leading-9">1</div>
                        </div>
                        <div className="left-0 top-[113px] text-center text-[#ff630d] text-xl font-bold font-lato leading-[1.25px]">Updated Legal Knowledge</div>
                        <div className="w-full left-0 top-[147px] text-primary-text text-sm font-normal font-inter leading-normal">
                            This is what we have for youThis is what we have for youThis is what we have for youThis is what we have for you
                        </div>
                </div>
            </div>
        </section>

        <div className="flex flex-col w-full justify-center items-center mt-24 gap-20">
            <div className="flex-col justify-start items-center gap-6 flex">
                <div className="text-black text-center text-4xl md:text-5xl font-bold font-lato leading-10">Frequently asked Questions</div>
                <div className="text-center text-primary-text text-md md:text-lg font-normal font-inter leading-normal">This is what we have for you</div>
            </div>

            <div className='w-full flex flex-col max-w-3xl px-3 gap-3'>
                <div className="flex flex-col w-full gap-2">
                    <div className="justify-between items-center flex gap-4 w-full">
                        <div className="text-black text-xl font-medium font-lato leading-[1.25px]">
                        What is the Legal Padi web app?
                        </div>
                        <button>+</button>
                    </div>
                    <div className="border border-gray-400"></div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div className="justify-between items-center flex gap-4 w-full">
                        <div className="text-black text-xl font-medium font-lato leading-[1.25px]">
                        What is the Legal Padi web app?
                        </div>
                        <button>+</button>
                    </div>
                    <div className="border border-gray-400"></div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div className="justify-between items-center flex gap-4 w-full">
                        <div className="text-black text-xl font-medium font-lato leading-[1.25px]">
                        What is the Legal Padi web app?
                        </div>
                        <button>+</button>
                    </div>
                    <div className="border border-gray-400"></div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div className="justify-between items-center flex gap-4 w-full">
                        <div className="text-black text-xl font-medium font-lato leading-[1.25px]">
                        What is the Legal Padi web app?
                        </div>
                        <button>+</button>
                    </div>
                    <div className="border border-gray-400"></div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div className="justify-between items-center flex gap-4 w-full">
                        <div className="text-black text-xl font-medium font-lato leading-[1.25px]">
                        What is the Legal Padi web app?
                        </div>
                        <button>+</button>
                    </div>
                    <div className="border border-gray-400"></div>
                </div>
            </div>
        </div>


        <section className="flex flex-col justify-center items-center gap-12 my-24">
            <div className="flex-col justify-start items-center gap-6 flex">
                <div className="text-black text-4xl md:text-5xl font-bold font-lato leading-10">
                    Testimonials
                </div>
                <div className="text-center text-primary-text text-md md:text-lg font-normal font-inter leading-normal">Read reviews about Legal Padi</div>
            </div>
            <div className="flex justify-start gap-6">
                <div className="w-[400px] bg-gray-50 rounded-[18px] shadow px-4 py-8 flex flex-col gap-4">
                    <img className="w-[80px] h-[80px] rounded-full" src={Profile} alt='Profile picture' />
                    <div className="text-primary-text text-xl font-regular font-inter leading-relaxed">
                        Read reviews about Legal PadiRead reviews about Legal PadiRead reviews about Legal PadiRead reviews about Legal PadiRead reviews about Legal PadiRead reviews about Legal PadiRead reviews about Legal Padi
                    </div>
                    <div className="">
                        <div className="text-primary-text text-xl font-medium font-inter leading-loose">
                            John Parker
                        </div>
                        <div className="text-primary-text text-xl font-light font-inter leading-loose">
                            CEO, Parker inc.
                        </div>
                    </div>
                </div>
            </div>
        </section> 

        <Footer />
    </div>
  )
}

export default Homepage