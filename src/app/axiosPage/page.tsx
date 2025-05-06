"use client"
import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import { api } from "@/constant/api"


interface IData{
    name: string;
    imageUrl: string;
    films: string;
    tvShows: string;
}
const AxiosPage = () => {

const [data, setData] = useState<IData[]>([])

useEffect(() => {
    api.get(`/character`).then((res) => {
        setData(res.data.data)
    }).catch((error) => {
        console.log("Deu merda ai pai", error)
    })
}, [])
    return(
        <>
        <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-wrap gap-6 justify-center">
        {data.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 w-72 mb-20 flex flex-col items-center text-center space-y-4">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <Image src={item.imageUrl} alt={item.name} width={200} height={200}  className="rounded-md border border-gray-200" />
                    <p className="text-gray-600 text-sm">{item.films}</p>
                    <p className="text-gray-600 text-sm">{item.tvShows}</p>
            </div>
           
        ))}
         </div>
         </Suspense>
        </>
    )
}

export default AxiosPage