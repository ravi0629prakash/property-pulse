// import properties from '@/properties.json';
'use client'
import { useEffect, useState } from 'react';
import Loader from '@/app/loading'
import PropertySearchForm from '@/components/PropertySearchForm';
import Properties from '@/components/Properties';
const PropertiesPage = () => {
 
  // const [properties , setProperties] = useState([])
  // const [loading , setLoading] = useState(true)
  
  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     try {
  //       const res = await fetch('/api/properties')
  //       const data  = await res.json()
  //       setProperties(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //     finally{
  //       setLoading(false)
  //     }
  //   }

  //   fetchProperties()
  // } , [])

  // if(loading){
  //   return <Loader loading={loading}/>
  // }
  
  // //sort properties by date 
  // properties.sort((a, b)=> new Date(b.createdAt)-new Date(a.createdAt));

  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <Properties/>
      
        
    </>
  );


};

export default PropertiesPage;
