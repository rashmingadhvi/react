import React from 'react';
import Cart from "./cart";

const Navbar = ()=>  {

            return (
                <nav className="navbar navbar-expand-md navbar-dark bg-light fixed-top">
                    <main role="main" className="container">
                        <div className="starter-template">
                            <Cart/>
                        </div>
                    </main>
                </nav>
        );

}
export default Navbar;