import React from 'react'
import './Card.css'

const Card = ({data}) => {
	console.log(data)
  return (
    <div>
  <div class="product-card">
  {data?.product?.map((el)=>
  (<>
		<div class="badge">New</div>
		<div class="product-tumb">
			
			<img src={el?.photo} alt="majitich" />
		</div>
		<div class="product-details">
			<span class="product-catagory">{data?.etat}</span>
			<h4><a href="">{el?.name}</a></h4>
			{/* <p>{data?.details.name}</p> */}
			<div class="product-bottom-details">
				<div class="product-price">{el?.price}dt </div>
				<div class="product-links">
                <a href=""><i class="fa-solid fa-pen-to-square"></i></a>
				</div>
			</div>
		</div>
		</>))}
	</div>
    </div>
  )
}

export default Card
