'use client'
import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from '@/app/loading'
const HomeProperties = () => {

  const [recentProperties , setRecentProperties] = useState([])
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        
        const res = await fetch('/api/properties')

        const data = await res.json()
        setRecentProperties(data.sort(()=>Math.random() -Math.random()).slice(0,3))
        

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
    return <Loader/>
  }

  return ( 
   <>
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentProperties === 0 ? (
            <p>No Properties Found</p>
        ) : recentProperties.map((property)=>(
            <PropertyCard key ={property._id} property={property}/>
        ))}
        </div>
    </div> 
</section>
  

<section className="m-auto max-w-lg my-10 px-6">
      <Link
        href="/properties"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Properties</Link
      >
    </section>
  
  </>
   
  )
}

export default HomeProperties
