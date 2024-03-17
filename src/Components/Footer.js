import React from 'react';


const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#010101', color: 'white' }}>
      <div className="container">
        <div className="row">

          <div className="col-md-3">
  <p style={{ color: 'gray', display: 'inline-block', marginBottom: '40px', marginTop: '40px' }}>
    At SendIt, your delivery is our main priority  we obsess over customer satisfaction and getting your package there, wherever that may be.
  </p>
  <button className="btn btn-primary">ABOUT US</button>
</div>

<div className="col-md-3">
    <h4 style={{ color: 'white', display: 'inline-block', marginBottom: '40px', marginTop: '40px' }}>
        <span style={{position: 'relative', zIndex: 1, borderBottom: '4px solid #ff0000', paddingBottom: '10px'}}>ContactUs</span>
        <span style={{position: 'relative', zIndex: 0,}}></span></h4>
    <p style={{ color: 'gray' }}>Feel free to reach out to us at any moment</p>
    
         <button  className="btn btn-primary">ContactUs</button>
    
</div>


        {/* Copyright Notice */}
        <div className="row">
  <div className="col-md-12 text-center" style={{ borderTop: '1px solid gray',marginTop:'40px', paddingTop: '20px', paddingBottom: '10px' }}>
    <p>© 2024 SendIt. All rights reserved.</p>
  </div>
</div>
</div>
</div>
    </footer>
  );
};

export default Footer;