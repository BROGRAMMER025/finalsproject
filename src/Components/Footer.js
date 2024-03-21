import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#010101', color: 'white', width: '100%', position: 'fixed', bottom: '0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <p className="mb-0" style={{ borderTop: '1px solid gray', paddingTop: '20px', paddingBottom: '10px' }}>© 2024 SendIt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
