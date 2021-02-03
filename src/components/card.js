import React from 'react';

const Card = (props) => {
    console.log(props);
    return (
        <>
            {
                props.arreglodecards.map((carta, i) => {
                    return (
                        <div className="col-md-3" key={i}>
                            <div className="card">
                                <img src={carta.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{carta.cardTitle}</h5>
                                    <p className="card-text">{carta.cardDescription}</p>
                                    <a href="#" className="btn btn-primary">{carta.button.label}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
export default Card;