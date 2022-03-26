import React from 'react';

const Header = ({ items }) => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark px-3">
                <span className="navbar-brand fw-bold">Vagetable Bazar</span>
                <button className="btn btn-sm btn-primary ">
                    Cart <span className="badge bg-danger">{items}</span>
                </button>
            </nav>
        </header>
    );
};

export default Header;