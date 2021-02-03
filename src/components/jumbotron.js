import React from 'react';

const Jumbo = (props) => {
    console.log(props);
    return (
        <>
            <div class="jumbotron m-5">
                <h1 class="display-4">
                    {props.titulo}
                </h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </>
    )
}
export default Jumbo;