import React from 'react';

const Nav = (props) => {
  console.log(props);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">{props.logo}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">{props.link1}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{props.link2}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{props.link3}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">{props.link4}</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Nav;