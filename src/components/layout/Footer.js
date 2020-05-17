import React from 'react';

function Footer() {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Recomposed By:
            <span className="text-warning font-weight-normal">
                            Aeon Tanvir
            </span>
            , Using <i className="fab fa-react" /> React sample product review application
            <a href="http://www.aeontanvir.com/" target="_blank" rel="noopener noreferrer">
                            aeontanvir.com
            </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;