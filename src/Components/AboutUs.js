import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-primary mb-4">
            Welcome to SendIT Delivery
          </h2>
          <p className="text-muted fs-5">
            SendIT is a courier service that helps users deliver parcels to different destinations. SendiT provides courier quotes based on weight categories. Whether you need to send small packages or larger shipments, SendiT ensures a reliable and efficient delivery experience.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniWXau0FxuT-msM27RawdAsT-UUN-P7J3Ew&usqp=CAU" alt="..." className="img-fluid rounded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <h3 className="text-primary mb-3">Our Mission</h3>
          <p className="text-muted fs-5">
            At SendiT, our mission is to provide a seamless and dependable courier service for individuals and businesses alike. We strive to make parcel delivery hassle-free by offering transparent pricing based on weight, ensuring that your packages reach their destinations safely and on time.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOU8cNsw0mTqp4sj4F8oA117bISLlJ1jM5Q&usqp=CAU" alt="..." className="img-fluid rounded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <h3 className="text-primary mb-3">The SendIT Experience</h3>
          <p className="text-muted fs-5">
            What sets the SendiT experience apart is our commitment to reliable and affordable parcel delivery. Users can easily calculate shipping costs based on weight categories, track their packages in real-time, and enjoy the convenience of a user-friendly platform that simplifies the entire delivery process.
          </p>
        </div>
        <div className="col-md-6">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6zXz-18a0BFDNQzVxgGKsxeZUiYl3ZyJxQ&usqp=CAU" alt="..." className="img-fluid rounded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12">
          <h3 className="text-primary mb-3">Why Choose SendIT?</h3>
          <ul className="text-muted fs-5">
            <li>
              <strong className="text-primary">Convenience:</strong> <br /> With a SendiT delivery app, you can order your parcels from the comfort of your own home, without having to go to the store or office.
            </li>
            <li className='mt-3'>
              <strong className="text-primary">Special deals and discounts:</strong> <br />SendiT courier provides special offers and discounts up to 30% for our customers.
            </li>
            <li className='mt-3'>
              <strong className="text-primary">Real-time Package Tracking:</strong><br /> Stay informed about the status of your packages with our real-time tracking feature.
            </li>
            <li className='mt-3'>
              <strong className="text-primary">User-Friendly Platform:</strong> Our user-friendly platform makes it easy to calculate shipping costs, book deliveries, and manage your shipments with ease.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
