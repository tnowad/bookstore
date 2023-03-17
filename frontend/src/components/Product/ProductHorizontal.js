import React from 'react'
import { productImg, star } from '../../assets/images'

export function ProductHorizontal(props) {
  return (
    <div
      className={`product-info h-fit flex ${props.width} sm:w-64 md:w-80`}
    >
      <div className="img w-56 h-full">
        <img src={productImg} alt="" />
      </div>
      <div className={`product-body sm:w-full p-2 lg:text-lg font-medium md:text-base flex flex-col lg:gap-0 md:gap-2 mobile:w-3/4`}>
        <div className={`product-name`}>
          <a href="/book_detail">My Dearest Darkest</a>
        </div>
        <div className="product-rate">
          <img src={star} alt="" />
        </div>
        <div className="product-author text-sm">Enrique Wallace</div>
        <div className="desc">{props.desc}</div>
        <div className="product-price p-0 text-primary-900 font-semibold">
          150.000VND
        </div>
      </div>
    </div>
  )
}
