import axios from 'axios'
import Link from 'next/link'
import Counter from '@/components/counter'
import { headers, cookies } from 'next/headers';

// export const dynamic = 'force-dynamic'
// export const revalidate = 5

async function getEmployees(){
  // const headersList = (await headers());
  // headersList.forEach((value,key)=>{
  //   console.log(value,"=",key )
  // })
  // const hasHeader = headersList.has('Content-Type');
  // console.log(headersList.values())
  // console.log(headersList.keys())
  const cookieStore = await cookies();
  // console.log(cookieStore.get('some-cookie'))
  // console.log(cookieStore.getAll().map((cookie)=>{
  //   return cookie
  // }))
  // console.log(cookieStore.has('some-cookie'))
  // cookieStore.set('name','value',{secure:true});
  // cookieStore.delete('name')



  const res = await fetch('http://localhost:3004/employees');
  if(!res.ok){
    throw new Error('Oop, no employees found')
  }
  return res.json()
}

export default async function Home(){
  // await new Promise((resolve)=>setTimeout(resolve,3000))

  const employees = await getEmployees()
  const showEmployees = employees.map( employee =>(
    <div key={employee.id} className='col'>
      <div className='card'>
          <div className='card-body'>
            <h3>{employee.fullname}</h3>
            <hr/>
            <p className='card-text'>{employee.position}</p>
            <p className='card-text'>{employee.age}</p>
            <Link href={`/employees/${employee.id}`} className='btn btn-primary'>Go to empl</Link>
          </div>
      </div>
    </div>
  ))


  // const counterTrigger = async() => {
  //   'use server'
  //   console.log('test')
  // }

  return(
    <>
      <h1>Employees:</h1>
      <div className="row row-cols-1 rows-cols-sm-2 row-cols-md-3 g-3">
        {showEmployees}
      </div>
      <Counter/>
    </>
  )
}