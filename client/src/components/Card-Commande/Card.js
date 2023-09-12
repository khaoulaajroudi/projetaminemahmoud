import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div>
  <div class="product-card">
		<div class="badge">New</div>
		<div class="product-tumb">
			<img src="https://www.club-sandwich.net/images/photobreves/subway-unreal-teriyaki.jpg" alt="" />
		</div>
		<div class="product-details">
			<span class="product-catagory">Women,bag</span>
			<h4><a href="">Women leather bag</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price">$230.99</div>
				<div class="product-links">
                <a href=""><i class="fa-solid fa-pen-to-square"></i></a>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Card
