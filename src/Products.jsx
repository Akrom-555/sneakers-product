import React, { useState } from 'react';
import Product from './Product';

const Products = () => {
  const prod = [
    {
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2016a636-2953-41b4-b496-55263f2b26bc/air-jordan-1-mid-shoes-M2KS6n.png",
      name: "nike sneakers",
      prise: "$120"
    },
    {
      image: "https://i.ebayimg.com/00/s/ODIwWDE0MDc=/z/BY4AAOSwXqhh1GVw/$_57.JPG?set_id=8800005007",
      name: "adidas",
      prise: "$220"
    },
    {
      image: "https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1746830&recipeId=729",
      name: "adidas",
      prise: "$180"
    },
    {
      image: "https://cdn.urbanvibes.com/upload/mdm/media_content/resize/a16/1000_1000_33a6/61182900299.jpg",
      name: "puma",
      prise: "$280"
    },
    {
      image: "https://www.highsnobiety.com/static-assets/thumbor/7PFUtad7SNxoTwT2a9vG7a_Ythg=/1500x1000/whatdropsnow.s3.amazonaws.com/product_image/171896/shrine_image/a6bfe916afdaa50c82c806ae4ceb23cf.jpeg",
      name: "puma",
      prise: "$220"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0zzRFfF4iVB3Mr1d1aVaBZxWDYQkQqjiEA&usqp=CAU",
      name: "reebok",
      prise: "$300"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5lvYfbGO05cQx4IPLz4m_8NVZn0og1l8ng&usqp=CAU",
      name: "reebok",
      prise: "$270"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z0flMh7DXUmioyRLZWcLWVUYdft2WrbuXg&usqp=CAU",
      name: "random",
      prise: "$100"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjBzuEmlMJhx7DEb_0b6B1_vLoiQ0nfSFzA&usqp=CAU",
      name: "random",
      prise: "$120"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5lvYfbGO05cQx4IPLz4m_8NVZn0og1l8ng&usqp=CAU",
      name: "reebok",
      prise: "$270"
    },
    {
      image: "https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1746830&recipeId=729",
      name: "adidas",
      prise: "$180"
    },
    {
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2016a636-2953-41b4-b496-55263f2b26bc/air-jordan-1-mid-shoes-M2KS6n.png",
      name: "nike sneakers",
      prise: "$120"
    },
  ]

  const [value, setValue] = useState('')
  const [arrProd, setArrProd] = useState(prod);

  const filteredContries = arrProd.filter((country) => {
    return country.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <>
    <div className="block_form">
      <form className='form_1'>
        <input className='input' value={value}
          onChange={(e) => setValue(e.target.value)} />
      </form>
      </div>
      <div className="countries">

        {filteredContries.map((item, index) => {
          return (
            <Product image={item.image} name={item.name} price={item.prise} />
          )
        })}
      </div>
    </>
  );
};

export default Products;




