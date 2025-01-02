import React from 'react'
import { Button, ViewCoursesMiniDisplay } from '..'

const AllAdminsTemplate = () => {
  return (
    <main className='main overflow-x-hidden'>
      <section className='max-w-7xl mx-auto py-8'>
        <h3 className='text-center h-xl mb-8'>View All Admins</h3>
        <div className='overflow-x-auto'>
          <table className='w-full table-auto text-left text-nowrap'>
            <thead>
              <tr className='bg-gray-200 border-y border-gray-500 h-sm'>
                <th className='p-4'>S/N</th>
                <th className='p-4'>Full Name</th>
                <th className='p-4'>Email</th>
                <th className='p-4'>Phone Number</th>
                <th className='p-4'>Role</th>
              </tr>
            </thead>
            <tbody className='bg-gray-100 b-3 divide-y divide-gray-500'>
              <tr className=''>
                <td className='p-4'>1</td>
                <td className='p-4'>Bukunmi Akinyemi</td>
                <td className='p-4'>bkakinyemi21@gmail.com</td>
                <td className='p-4'>09137099774</td>
                <td className='p-4'>Admin</td>
              </tr>
              <tr className=''>
                <td className='p-4'>1</td>
                <td className='p-4'>Bukunmi Akinyemi</td>
                <td className='p-4'>bkakinyemi21@gmail.com</td>
                <td className='p-4'>09137099774</td>
                <td className='p-4'>Admin</td>
              </tr>
              <tr className=''>
                <td className='p-4'>1</td>
                <td className='p-4'>Bukunmi Akinyemi</td>
                <td className='p-4'>bkakinyemi21@gmail.com</td>
                <td className='p-4'>09137099774</td>
                <td className='p-4'>Admin</td>
              </tr>
              <tr className=''>
                <td className='p-4'>1</td>
                <td className='p-4'>Bukunmi Akinyemi</td>
                <td className='p-4'>bkakinyemi21@gmail.com</td>
                <td className='p-4'>09137099774</td>
                <td className='p-4'>Admin</td>
              </tr>
              <tr className=''>
                <td className='p-4'>1</td>
                <td className='p-4'>Bukunmi Akinyemi</td>
                <td className='p-4'>bkakinyemi21@gmail.com</td>
                <td className='p-4'>09137099774</td>
                <td className='p-4'>Admin</td>
              </tr>
              <tr className=''>
                <td className='p-4'>1</td>
                <td className='p-4'>Bukunmi Akinyemi</td>
                <td className='p-4'>bkakinyemi21@gmail.com</td>
                <td className='p-4'>09137099774</td>
                <td className='p-4'>Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default AllAdminsTemplate
