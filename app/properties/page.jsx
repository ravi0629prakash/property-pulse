// import properties from '@/properties.json';
'use client'
import PropertyCard from '@/components/PropertyCard';
import { useEffect, useState } from 'react';
import Loader from '@/app/loading'
  
const PropertiesPage = async() => {
 
  const [properties , setProperties] = useState([])
  const [loading , setLoading] = useState(true)
  
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/properties')
        const data  = await res.json()
        setProperties(data)
      } catch (error) {
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    }

    fetchProperties()
  } , [])

  if(loading){
    return <Loader loading={loading}/>
  }
  
  //sort properties by date 
  properties.sort((a, b)=> new Date(b.createdAt)-new Date(a.createdAt));


  return (
    <section className= "px-4 py-6">
      <div className= "container-xl lg:container m-auto px-4 py-6">
        {properties.length=== 0 ? (
          <p>No Properties Found </p>
        ) : ( 
        <div className= "grid grid-cols-1 md:grid-cols-3 gap-6">
          { properties.map((property)=> (
           <PropertyCard Key={property._id} property={property} / >
          ))}
          </div>)}
       
    </div>
    </section>
  );
};

export default PropertiesPage;
