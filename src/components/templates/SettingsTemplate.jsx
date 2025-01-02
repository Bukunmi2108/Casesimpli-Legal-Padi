import React from 'react'
import { FiEdit } from "react-icons/fi";
import { Input, Button, Sidelink } from '..';
import { GrSecure } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { MdDelete } from "react-icons/md";


const SettingsTemplate = () => {
  return (
    <main className='main'>
        <section className='max-w-7xl mx-auto py-8 divide-y divide-gray-300 gap-8'>
            <div className='flex flex-col items-center justify-center gap-8 pb-8'>
                <h3 className='text-center h-2xl mb-8 text-primary-blue'>Settings</h3>
                <div className='flex flex-col gap-8 max-w-2xl w-full'>
                    <div className='relative w-32 h-32 mx-auto'>
                        <img src='https://i.pravatar.cc/300' alt='profile' className='rounded-full w-32 h-32 mx-auto' />
                        <span className='absolute bottom-0 right-0 p-2 bg-white rounded-full'>
                            <FiEdit className='text-primary-text icon'/>
                        </span>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <Input label={'First name'} value={'Bukunmi'} type='text'/>
                        <Input label={'Last name'} value={'Akinyemi'} type='text'/>
                        <Input label={'Email'} value={'bkakinyemi21@gmail.com'} type='email'/>
                        <Input label={'Phone Number'} value={'09137099774'} type='text'/>
                        <Input label={'Bio'} value={''} type='text'/>
                        <Button text={'Save Changes'} type='primary' className={'w-fit'}/>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-center justify-center gap-8 py-8'>
                <h3 className='text-center h-2xl mb-8 text-primary-blue'>Security</h3>
                <div className='flex flex-col gap-8 max-w-2xl w-full'>

                    <div className='flex justify-between items-center gap-4'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='h-sm text-primary-orange'>Change Password</h4>
                            <p className='b-1 md:b-3'>Set Unique Password to protect your account</p>
                        </div>
                        <GrSecure className='icon text-primary-orange' />
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='h-sm text-primary-orange'>2 - Step Verification</h4>
                            <p className='b-1 md:b-3'>Make your Account extra secure</p>
                        </div>
                        <RiLockPasswordFill  className='icon text-primary-orange' />
                    </div>

                </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 pt-8 max-w-2xl w-full mx-auto'>                
                <Sidelink text={'Logout'} icon={<IoMdLogOut className='icon' />} className={'text-primary-orange w-fit'}/>
                <Sidelink text={'Delete Account'} icon={<MdDelete  className='icon' />} className={'text-red-500 w-fit'}/>
            </div>

        </section>
    </main>
  )
}

export default SettingsTemplate