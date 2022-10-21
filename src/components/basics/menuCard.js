import React from 'react'
import "./style.css"

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className="main-card--cointainer">
                {
                    menuData.map((value) => {
                        //destructuring es6
                        const { id, image, name, category, price, description } = value
                        return (
                            <>
                                <div className='card-container'>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'> {id} </span>
                                            <span className='card-author subtle'> {category} </span>
                                            <h2 className='card-title'> {name} </h2>
                                            <span className='card-description subtle'> {description} </span>
                                            <div className="card-read">{price}</div>
                                        </div>
                                        {/* <img src="" alt="images" className="card-media" /> */}
                                        <span className="card-tag subtle">{price}</span>
                                        <span className="card-tag subtle">Order Now</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default MenuCard