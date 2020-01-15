import React, { Component, Fragment } from 'react';

class Navbar extends Component {
    render() {
    return (
        <Fragment>    
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="#">Dima Ivanov WebDev</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Exchange_Rates</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">To-do_list</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Interesting
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">StopWatch</a>
                                <a className="dropdown-item" href="#">......</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                </div>
                <div>
                <button type="button" className="btn btn-sm">
                    <img src={require('../navbar/world_flags_en.png')} width="25px" alt="EN"/>
                </button>
                <button type="button" className="btn btn-sm">
                    <img src={require('../navbar/world_flags_ua.png')} width="25px" alt="UA"/>
                </button>
                </div>
            </nav>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            
        </Fragment>
    );
}
}

export default Navbar;