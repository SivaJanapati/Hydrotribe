import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Plant from "../Plant";

const plantsData = [
  {
    id:1,
    name:"plant_A",
    scientificName : "scientificName_A",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729655/plant20_zody5k.jpg"
  },
  {
    id:2,
    name:"plant_B",
    scientificName : "scientificName_B",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729644/plant19_hng8re.jpg"
  },
  {
    id:3,
    name:"plant_C",
    scientificName : "scientificName_C",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729632/plant18_zbq9ma.jpg"
  },
  {
    id:4,
    name:"plant_D",
    scientificName : "scientificName_D",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729621/plant17_h3xlup.webp"
  },
  {
    id:5,
    name:"plant_E",
    scientificName : "scientificName_E",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729443/plant16_px6dmy.jpg"
  },
  {
    id:6,
    name:"plant_F",
    scientificName : "scientificName_F",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729433/plant15_cufu4x.jpg"
  },
  {
    id:7,
    name:"plant_G",
    scientificName : "scientificName_G",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729419/plant14_pcgc27.jpg"
  },
  {
    id:8,
    name:"plant_H",
    scientificName : "scientificName_H",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729400/plant13_js6ick.jpg"
  },
  {
    id:9,
    name:"plant_I",
    scientificName : "scientificName_I",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729386/plant11_zlop7t.jpg"
  },
  {
    id:10,
    name:"plant_J",
    scientificName : "scientificName_J",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729376/plant12_wjgix9.png"
  },
  {
    id:11,
    name:"plant_K",
    scientificName : "scientificName_K",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729338/plant8_jxxbay.jpg"
  },
  {
    id:12,
    name:"plant_L",
    scientificName : "scientificName_L",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729332/plant7_h59v7k.jpg"
  },
  {
    id:13,
    name:"plant_M",
    scientificName : "scientificName_M",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729275/plant5_mfkork.jpg"
  },
  {
    id:14,
    name:"plant_N",
    scientificName : "scientificName_N",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729205/plant2_tzhjhn.jpg"
  },
  {
    id:15,
    name:"plant_O",
    scientificName : "scientificName_O",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786424/plant25_zjljeo.jpg"
  },
  {
    id:16,
    name:"plant_P",
    scientificName : "scientificName_P",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786413/plant24_oo8chk.jpg"
  },
  {
    id:17,
    name:"plant_Q",
    scientificName : "scientificName_Q",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786401/plant23_asjvc1.webp"
  },
  {
    id:18,
    name:"plant_R",
    scientificName : "scientificName_R",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786380/plant22_t83me9.webp"
  },
  {
    id:19,
    name:"plant_S",
    scientificName : "scientificName_S",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716786369/plant21_vhj8ci.webp"
  },
  {
    id:20,
    name:"plant_T",
    scientificName : "scientificName_T",
    imageUrl : "https://res.cloudinary.com/dgmtyceb9/image/upload/v1716729655/plant20_zody5k.jpg"
  }
]

const Plants = () => {
  
  

  return (
    <div className="plants-cont bg-cream">
      <Header />
      <div className="flex flex-col justify-center items-center w-full pt-8 pb-10">
        <h2 className="items-center font-bold text-[25px] text-lime-950 lg:text-[35px] font-serif">PLANTS</h2>
        {(plantsData.length) > 0 && (
          <ul className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center mt-5 gap-5 w-full">
            {plantsData.map((eachPlant) => (
              <Plant key={eachPlant.id} plant={eachPlant} />
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Plants;
