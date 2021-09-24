
import { useParams } from "react-router-dom"
import { useState } from "react"

export default function Home (){
    
    let { slug } = useParams()

    const [n] = useState(slug)

    return (
        <div> Ola {n}! Seja bem vindo(a) </div>
    )
}