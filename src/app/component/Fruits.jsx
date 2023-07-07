import Image from "next/image"
import { AiOutlineInstagram } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import style from './fruit.module.css'

export default function fruits({ list }) {
    const fruitList = list.map(fruit => (
        <section key={fruit.id} className={`m-auto mt-10 bg-blue-400 ${style.section}`}>
            <Image src={fruit.image} alt={fruit.name} width={200} height={200} />
            <h2>{fruit.name}</h2>
            <h2>{fruit.botanicalName}</h2>
            <h2>{fruit.season}</h2>
            <div className=" grid grid-cols-2 w-3/5">
                <  AiOutlineInstagram />
                <  FcLike />
            </div>

        </section>
    ))
    return (
        <div className="grid grid-cols-3 gap-2">
            {fruitList}
        </div>
    )
}