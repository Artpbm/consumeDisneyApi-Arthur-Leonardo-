import { Metadata } from "next"
import { Suspense } from "react"
import Image from "next/image"
type IData = {
    data: {
      name: string;
      imageUrl: string;
      films: string;
      tvShows: string;
    }[]
}

export const metadada : Metadata = {
    title: "Lista personagem Disney",
    description: "Api dos personagens da disney"
}

const ServerSide = async () => {
  const res = await fetch("https://api.disneyapi.dev/character")
  const data: IData = await res.json()
  
  return(
    <>
    <div className="flex flex-wrap gap-6 justify-center">
    {data?.data.map((item, index) => {
      return(
        <div className="bg-white shadow-lg rounded-xl p-6 w-72 mb-20 flex flex-col items-center text-center space-y-4" key={index}>
          <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
          <Image src={item.imageUrl} alt={item.name} width={200} height={200} className="rounded-md border border-gray-200"/>
          <p className="text-gray-600 text-sm">{item.films}</p>
          <p className="text-gray-600 text-sm">{item.tvShows}</p>
        </div>
      )
    })}
    </div>
    </>
  )
}

export default ServerSide