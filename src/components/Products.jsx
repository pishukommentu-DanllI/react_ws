import React from 'react'


export const Products = ({user, products, add_to_cart}) => {
  let res = products.map((e, index) => {
    return (
    <div key={e.id} className={'BlockItem'}>
        <p>{e.name}</p> 
        {user 
        ? 
        <>
          <p>{e.description}</p>
          <div className='PriceBlock'><p >{e.price}</p></div>
          <button className='Button' onClick={() => add_to_cart(e)}>Add to Cart</button>
        </>: ''
        } 
    </div>
  )})
  return (
    <div className='Contaner'>
        {res}
    </div>
  )
}
