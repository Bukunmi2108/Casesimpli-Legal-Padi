import React, { useEffect, useState } from 'react'
import adminService from '../../modules/adminService'


const AllEditorsTemplate = () => {
  const [allEditors, setAllEditors] = useState([])

  useEffect(() => {
    const fetchEditor = async() => {
      const res = await adminService.getEditors()
      setAllEditors(res)
    }
    fetchEditor()
  }, [])

  return (
    <main className='main overflow-x-hidden'>
      <section className='max-w-7xl mx-auto py-8'>
        <h3 className='text-center h-xl mb-8'>View All Editors</h3>
        <div className='overflow-x-auto'>
          <table className='w-full table-auto text-left text-nowrap'>
            <thead>
              <tr className='bg-gray-200 border-y border-gray-500 h-sm'>
                <th className='p-4'>S/N</th>
                <th className='p-4'>Full Name</th>
                <th className='p-4'>Email</th>
                <th className='p-4'>Temporary Password</th>
                <th className='p-4'>Role</th>
              </tr>
            </thead>
            {allEditors && <tbody className='bg-gray-100 b-3 divide-y divide-gray-500'>
              {allEditors.map((editor, index) => (
                <tr key={index} className=''>
                  <td className='p-4'>{index + 1}</td>
                  <td className='p-4'>{editor.first_name} {editor.last_name}</td>
                  <td className='p-4'>{editor.email}</td>
                  <td className='p-4'>{editor.temporary_password}</td>
                  <td className='p-4'>{editor.role}</td>
                </tr>
              ))}
            </tbody>}
          </table>
        </div>
      </section>
    </main>
  )
}

export default AllEditorsTemplate
