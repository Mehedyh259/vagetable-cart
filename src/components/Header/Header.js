import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand fw-bold">Vagetable Bazar</span>
                <button className="btn btn-sm btn-primary ">
                    Cart <span className="badge bg-danger">4</span>
                </button>
            </nav>
        </header>
    );
};

export default Header;