import React, {useState} from 'react'
import { Button, Input } from '..'
import adminService from '../../modules/adminService'
import { useNavigate } from 'react-router-dom'

const AddAdminTemplate = () => {
  const {navigate} = useNavigate()
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  })

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSubmit = async(e) => {
    e.preventDefault()
    console.log(formData);

    try{
      const res = await adminService.createadmin(formData)
      console.log(res)
      navigate('/alladmins')
    } catch(error) {
      console.log(error);
    }
    
  }
  return (
    <main className='main'>
      <section className='max-w-7xl mx-auto py-8'>

        <h3 className='text-center h-xl mb-8'>Add New Admin</h3>

        <form onSubmit={onSubmit} className='mt-8 flex flex-col items-start justify-center mx-auto max-w-2xl w-full gap-6'>

          <Input label={'First Name'} placeholder={'Enter admin\'s first name'} name={'first_name'} type={'text'} className={'w-full'} value={formData.first_name} onChange={handleChange} required/>
          <Input label={'Last Name'} placeholder={'Enter admin\'s last name'} name={'last_name'} type={'text'} className={'w-full'} value={formData.last_name} onChange={handleChange} required/>
          <Input label={'Email'} placeholder={'Enter admin\'s email'} name={'email'} type={'email'} className={'w-full'} value={formData.email} onChange={handleChange} required/>


          <Button buttonFormType='submit' text={'Add New admin'} type='primary' />
        </form>
      </section>
    </main>
  )
}

export default AddAdminTemplate;