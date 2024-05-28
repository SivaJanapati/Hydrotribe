import {useParams} from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import { FaStar ,FaRupeeSign} from "react-icons/fa";

const detailsList = [
    {
        id:1,
        name:"plant_A",
        scientificName : "scientificName_A",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729655/plant20_zody5k.jpg",
        rating : 3,
        price: 499,
        offer:299,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:2,
        name:"plant_B",
        scientificName : "scientificName_B",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729644/plant19_hng8re.jpg",
        rating : 4,
        price: 699,
        offer:499,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:3,
        name:"plant_C",
        scientificName : "scientificName_C",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729632/plant18_zbq9ma.jpg",
        rating : 3,
        price: 399,
        offer:259,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:4,
        name:"plant_D",
        scientificName : "scientificName_D",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729621/plant17_h3xlup.webp",
        rating : 2,
        price: 499,
        offer:399,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:5,
        name:"plant_E",
        scientificName : "scientificName_E",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729443/plant16_px6dmy.jpg",
        rating : 4,
        price: 459,
        offer:409,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:6,
        name:"plant_F",
        scientificName : "scientificName_F",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729433/plant15_cufu4x.jpg",
        rating : 5,
        price: 399,
        offer:339,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:7,
        name:"plant_G",
        scientificName : "scientificName_G",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729419/plant14_pcgc27.jpg",
        rating : 3,
        price: 629,
        offer:369,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:8,
        name:"plant_H",
        scientificName : "scientificName_H",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729400/plant13_js6ick.jpg",
        rating : 4,
        price: 499,
        offer:199,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:9,
        name:"plant_I",
        scientificName : "scientificName_I",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729386/plant11_zlop7t.jpg",
        rating : 3,
        price: 479,
        offer:299,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:10,
        name:"plant_J",
        scientificName : "scientificName_J",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729376/plant12_wjgix9.png",
        rating : 4,
        price: 299,
        offer:129,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:11,
        name:"plant_K",
        scientificName : "scientificName_K",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729338/plant8_jxxbay.jpg",
        rating : 2,
        price: 199,
        offer:99,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:12,
        name:"plant_L",
        scientificName : "scientificName_L",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729332/plant7_h59v7k.jpg",
        rating : 5,
        price: 499,
        offer:299,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:13,
        name:"plant_M",
        scientificName : "scientificName_M",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729275/plant5_mfkork.jpg",
        rating : 2,
        price: 999,
        offer:699,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:14,
        name:"plant_N",
        scientificName : "scientificName_N",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729205/plant2_tzhjhn.jpg",
        rating : 3,
        price: 599,
        offer:209,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:15,
        name:"plant_O",
        scientificName : "scientificName_O",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786424/plant25_zjljeo.jpg",
        rating : 2,
        price: 499,
        offer:299,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:16,
        name:"plant_P",
        scientificName : "scientificName_P",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786413/plant24_oo8chk.jpg",
        rating : 4,
        price: 409,
        offer:359,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:17,
        name:"plant_Q",
        scientificName : "scientificName_Q",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786401/plant23_asjvc1.webp",
        rating : 3,
        price: 499,
        offer:399,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:18,
        name:"plant_R",
        scientificName : "scientificName_R",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786380/plant22_t83me9.webp",
        rating : 4,
        price: 499,
        offer:99,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:19,
        name:"plant_S",
        scientificName : "scientificName_S",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786369/plant21_vhj8ci.webp",
        rating : 5,
        price: 799,
        offer:579,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      },
      {
        id:20,
        name:"plant_T",
        scientificName : "scientificName_T",
        imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729655/plant20_zody5k.jpg",
        rating : 3,
        price: 699,
        offer:199,
        description: "The lime plant, scientifically known as Citrus aurantiifolia, is a small, evergreen tree or shrub widely cultivated for its tart, green fruits. Native to Southeast Asia, lime plants thrive in tropical and subtropical climates, requiring plenty of sunlight and well-drained soil. The plant produces fragrant white flowers that develop into bright green limes, rich in vitamin C and commonly used in culinary and medicinal applications. Lime plants can be grown in gardens or containers, making them a versatile addition to home landscapes. Their attractive foliage, aromatic blooms, and flavorful fruits make lime plants popular among gardeners and home chefs alike."

      }
]

const PlantDetails = ()=>{
    const {id} = useParams()
    
    const plantData=detailsList[id-1]

  
    return(
        <div className="bg-cream w-full">
            <Header/>
            <div className="flex flex-col justify-center items-center p-5 w-full">
                <div className="flex flex-col md:hidden">
                  <img src={plantData.imageUrl} alt={plantData.name} className="w-full"/>
                  <div className="flex flex-col mt-5">
                    <h1 className="font-bold text-[25px]  text-lime-950">{plantData.name}</h1>
                    <div className="flex flex-row justify-between items-center">
                      <p className="font-[500] text-[15px] mt-2 text-earthBrown">{plantData.scientificName}</p>
                      <p className="flex flex-row gap-2 justify-center items-center font-bold text-[16px] text-earthBrown">
                            {Array.from({ length: plantData.rating }, (_, index) => (
                                <FaStar key={index} className="text-yellow-600" />
                            ))}
                            {plantData.rating} Stars
                      </p>
                    </div>
                    <p className="font-bold mt-8 flex text-[26px]">About The Plant</p>
                    <p className="font-[400] text-[16px] mt-4  mb-5 text-justify text-earthBrown">{plantData.description}</p>
                    <div className="flex flex-row justify-start items-center gap-4">
                      <p className="flex flex-row justify-start items-center relative line-through font-bold text-[16px] text-sageGreen"><FaRupeeSign/> {plantData.price}/-</p>
                      <p className="flex flex-row justify-start items-center font-bold text-[30px] text-lime-900"><FaRupeeSign/> {plantData.offer}/-</p>
                       
                    </div>
                    <div className="flex flex-row justify-between items-center mt-7 mb-[50px]">
                      <button type="button" className="bg-lime-600 h-[35px] w-[120px] text-white font-[600] rounded-[20px]">Add to Cart</button>
                      <button type="button" className="bg-lime-600 h-[35px] w-[120px] text-white font-[600] rounded-[20px]">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:flex-col md:w-[80%] md:pt-20 md:pb-15 w-full lg:hidden">
                  <div className="flex flex-row items-center w-full">
                      <img src={plantData.imageUrl} alt={plantData.name} className="w-[50%] h-[40%] shadow-lg"/> 
                      <div className="flex flex-col justify-center items-start ml-[30px] lg:ml-[60px] w-[50%] ">
                          <h1 className="font-bold text-[28px] lg:text-[35px] text-lime-950">{plantData.name}</h1>
                          <p className="font-[400] text-[15px] lg:text-[16px] mt-2 text-earthBrown">{plantData.scientificName}</p>
                          <div className="flex flex-col justify-start items-center ">
                            <p className="flex flex-col gap-2 justify-start items-start font-bold text-[20px] mt-8 mb-8 text-earthBrown">
                                  <p className="flex flex-row gap-2">
                                  {Array.from({ length: plantData.rating }, (_, index) => (
                                      <FaStar key={index} className="text-yellow-600" />
                                  ))}
                                  </p>
                                  <p>{plantData.rating} Stars</p>
                                  
                            </p>
                          </div>

                          <div className="flex flex-col justify-start items-start gap-4 mb-6">
                            <p className="flex flex-row justify-start items-center relative line-through font-bold text-[18px] text-sageGreen"><FaRupeeSign/> {plantData.price}/-</p>
                            <p className="flex flex-row justify-start items-center font-bold text-[28px] lg:text-[33px] text-lime-900"><FaRupeeSign/> {plantData.offer}/-</p>
                          </div>
                          
                        
                      </div>
                  </div>
                  <div>
                      <p className="font-bold mt-8 flex text-[26px]">About The Plant</p>
                      <p className="font-[300] text-[16px] lg:text-[18px] mt-4  mb-5 text-justify text-earthBrown">{plantData.description}</p>    
                  </div>
                  <div className="flex flex-row justify-center items-center mt-7 mb-[50px] gap-7">
                              <button type="button" className="bg-lime-600 h-[35px] w-[120px] lg:h-[40px] lg:[w-140px] text-white font-[500] rounded-[20px]">Add to Cart</button>
                              <button type="button" className="bg-lime-600 h-[35px] w-[120px] lg:h-[40px] lg:[w-140px] text-white font-[500] rounded-[20px]">Buy Now</button>
                  </div>
                </div>
                <div className="hidden lg:flex lg:flex-col  lg:w-[80%] lg:pt-20 lg:pb-20 w-full">
                  <div className="flex flex-row items-center w-full">
                      <img src={plantData.imageUrl} alt={plantData.name} className="w-[50%] h-[50%] shadow-lg"/> 
                      <div className="flex flex-col justify-center items-start ml-[30px] lg:ml-[60px] w-[50%] ">
                          <h1 className="font-bold text-[28px] lg:text-[35px] text-lime-950">{plantData.name}</h1>
                          <p className="font-[400] text-[15px] lg:text-[16px] mt-2 text-earthBrown">{plantData.scientificName}</p>
                          <p className="font-bold mt-8 flex text-[26px]">About The Plant</p>
                          <p className="font-[300] text-[16px] lg:text-[18px] mt-3  mb-4 text-justify text-earthBrown">{plantData.description}</p>
                          <div className="flex flex-row justify-between items-center">
                            <p className="flex flex-row gap-2 justify-center items-center font-bold text-[20px] mt-5 mb-5 text-earthBrown">
                                  {Array.from({ length: plantData.rating }, (_, index) => (
                                      <FaStar key={index} className="text-yellow-600" />
                                  ))}
                                  {plantData.rating} Stars
                            </p>
                          </div>

                          <div className="flex flex-row justify-start items-center gap-4 mb-6">
                            <p className="flex flex-row justify-start items-center relative line-through font-bold text-[18px] text-sageGreen"><FaRupeeSign/> {plantData.price}/-</p>
                            <p className="flex flex-row justify-start items-center font-bold text-[28px] lg:text-[33px] text-lime-900"><FaRupeeSign/> {plantData.offer}/-</p>
                          </div>
                          <div className="flex flex-row justify-around items-center mt-5 gap-5">
                              <button type="button" className="bg-lime-600 h-[35px] w-[120px] lg:h-[40px] lg:[w-140px] text-white font-[500] rounded-[20px]">Add to Cart</button>
                              <button type="button" className="bg-lime-600 h-[35px] w-[120px] lg:h-[40px] lg:[w-140px] text-white font-[500] rounded-[20px]">Buy Now</button>
                          </div>
                        
                      </div>
                  </div>
                  
                  
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default PlantDetails