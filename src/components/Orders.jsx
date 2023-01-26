import React from 'react'

export const Orders = ({orders}) => {

    let res = orders.map((e, index) => {
        return (
        <div key={e.id} className={'BlockItem'}>
            <p>{e.name}</p> 
            <div className='PriceBlock'><p >{e.price}</p></div>
        </div>
    )})
  return (
    <div className='Contaner'>
        {res}
    </div>
  )
}
