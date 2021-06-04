import React from 'react'
import ContactForm from '../Component/ContactForm/ContactForm';
import SectionPrincipal from '../Component/SectionPrincipal/SectionPrincipal';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';


const Home = () => {
    return (
        <>
        <header>
        <div className="container">
            <div className="jumbotron">
                <h2><Header>Mi primera pagina</Header> </h2>
            </div>     
        </div>
        </header>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Principal <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Secundaria</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
        </nav>
        <div className="row">
            <div className="col-4 offset-4">
                <ContactForm />
            </div>
        </div>
        <br></br>
        <div className="row">
            <div className="col-4 offset-4">
                <SectionPrincipal 
                    name="Claudio R."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque leo non egestas feugiat. Vivamus fermentum faucibus elit eu volutpat. Donec in mollis augue, nec semper dui."
                />
            </div>
        </div>
        <br></br>
        <br></br>
        <footer>
        <div className="footer">
            <div className="container">
                <div className="w3_footer_grids">
			        <div className="col-md-3 w3_footer_grid">
					<ul className="info"> 
                        <li>
                            <Footer>Derechos reservados</Footer>
                        </li>
					</ul>
            </div>     
        </div>
        </div>
        </div>
        </footer>
        </>
    )
}

export default Home
