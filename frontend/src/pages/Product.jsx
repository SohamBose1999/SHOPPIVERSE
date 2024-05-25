import React, { useContext } from 'react'
import Breadcrums from '../components/breadcrums/BreadCrum'
import ProductDisplay from '../components/productdisplay/ProductDisplay'
import DescriptionBox from '../components/descriptionbox/DescriptionBox'
import RelatedProducts from '../components/relatedproducts/RelatedProducts'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
