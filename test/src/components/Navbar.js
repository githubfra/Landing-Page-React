import React from "react";

function Navbar(props) {
    return (
      <nav className="navbar navbar-expand-lg bg-dark ">   
    <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
      <ul className="nav justify-content-end">
      <li className="nav-item">
        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
      <a class="nav-link active text-white" aria-current="page" href="#">About</a>
        </li>
      <li className="nav-item">
      <a class="nav-link active text-white" aria-current="page" href="#">Services</a>
       </li>
      <li className="nav-item">
      <a class="nav-link active text-white" aria-current="page" href="#">Contact</a>
       </li>
    </ul>
    </div>
    </nav>
    );
      
}

export default Navbar;