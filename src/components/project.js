import React from "react";


function Project(props) {
    return (
        <div class="container">
            <div class="card mb-3">
                <a href={props.href}>
                <img src={props.img} class="card-img-top" alt={props.alt} />
                </a>
                <div class="card-body">
                    <h5 class="card-title">{props.text}</h5>
                </div>
            </div>
        </div>
    )
}

export default Project;