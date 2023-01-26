import React from 'react'

export const Carts = ({carts, Delete_carts, setCarts}) => {
    let res;

    console.log(carts)
    if (carts.length && carts.slice(0) !== undefined) {
        res = carts.map((e, index) => {
            if (e === undefined) {
                setCarts([
                    carts.filter(
                        function(x) {
                            return x !== undefined;
                    })
                ])
                return 'Тут пока пусто'
            } else {
            return (
            <div key={e.id} className={'BlockItem'}>
                <p>{e.name}</p> 
                <div className='PriceBlock'><p>{e.count}</p></div>
                <button className='Button' onClick={() => Delete_carts(e.id)}>Delete</button>
            </div>
        )}})
    } else {
        res = 'Тут пока пусто'
    }
    
    
  return (
    <>
    <div className='BlockOerder'>
        <div className='Contaner'>
            {res}
        </div>
        <button className='Button_order'>Make order</button>
    </div>
    
    </>

  )
}
