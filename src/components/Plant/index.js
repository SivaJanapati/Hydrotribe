import { Link } from "react-router-dom"

const Plant =(props)=>{
    const {plant}=props
    const {id,name,scientificName,imageUrl}=plant

    return(
        <li className="flex flex-col justify-center items-center m-5 rounded-lg  lg:w-[25%] lg:h-[50%] gap-3 border-dashed border-lime-700 p-8 bg-white shadow-lg">
            <Link to={`/plants/${id}`} >
                <img src={imageUrl} alt={name} className="w-[300px] h-[350px] mt-8 rounded-md"/>
                <h1 className="mt-5 font-bold text-[20px] lg:text-[25px] text-forestGreen">{name}</h1>
                <p className="font-[300] text-[13px] lg:text-[15px] text-earthBrown">Scientific Name : {scientificName}</p>
            </Link>
        </li>
    )
}

export default Plant