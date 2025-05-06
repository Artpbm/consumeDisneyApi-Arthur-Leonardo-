"use client"
import { useEffect, useState } from "react";
import  Image  from "next/image"

interface IData{
    name: string;
    imageUrl: string;
    films: string;
    tvShows: string;
}

const HookPage = () => {
const [characters, setCharacters] = useState<IData[]>([])

useEffect(() => {
    const load = async () => {
        const res = await fetch("https://api.disneyapi.dev/character")
        const data = await res.json()
        setCharacters(data.data)
    }
    load()
}, [])
    return(
    <>
    <div className="flex flex-wrap gap-6 justify-center">
        {characters.map((item, index) => {
            return(
                <div key={index} className="bg-white shadow-lg rounded-xl p-6 w-72 mb-20 flex flex-col items-center text-center space-y-4">
                    <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                    <Image src={item.imageUrl} alt={item.name} width={200} height={200}  className="rounded-md border border-gray-200"/>
                    <p className="text-gray-600 text-sm">{item.films}</p>
                    <p className="text-gray-600 text-sm">{item.tvShows}</p>
                </div>
            )
        })}
    </div>
    </>
)
}

export default HookPage