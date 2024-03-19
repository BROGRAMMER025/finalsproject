import React from 'react';
//import "../styles/main.css"
const AboutUs = () => {
  return (
    <div className="mt-20 ">
      <div className="about-us-content sm:px-2">
        <h2 className="text-3xl text-start text-purple-700 font-bold font-primary mb-4">
            Welcome to SendiT Delivery
        </h2>
        <p className="mb-6 text-gray-800">
            SendiT is a courier service that helps users deliver parcels to different destinations. SendiT provides courier quotes based on weight categories. Whether you need to send small packages or larger shipments, SendiT ensures a reliable and efficient delivery experience.
        </p>
        <div className='section mt-20'>
            <div className='text'>
                <h3 className="text-2xl font-primary mb-2 font-semibold text-purple-500 mt-36">Our Mission</h3>
                <p className="text-gray-800">
                    At SendiT, our mission is to provide a seamless and dependable courier service for individuals and businesses alike. We strive to make parcel delivery hassle-free by offering transparent pricing based on weight, ensuring that your packages reach their destinations safely and on time.
                </p>
            </div>
            <div className='image1 ml-10 flex justify-center'>
                <img alt="motorcycle logo" src="data:image/jpeg;base64,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" />
            </div>
        </div>

        <div className='section mt-20'>
        <div className='text'>
            <h3 className="text-2xl font-primary mb-2 text-purple-500 font-semibold mt-32">The SendiT Experience</h3>
            <p className="text-gray-800">
              What sets the SendiT experience apart is our commitment to reliable and affordable parcel delivery. Users can easily calculate shipping costs based on weight categories, track their packages in real-time, and enjoy the convenience of a user-friendly platform that simplifies the entire delivery process.
            </p>
          </div>
          <div className='image2 ml-10 flex justify-center'>  
            <img alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOU8cNsw0mTqp4sj4F8oA117bISLlJ1jM5Q&usqp=CAU""/>                                                    
          </div>
        </div>

        <div className='section mt-40'>
          <div className='text'>
            <div className="highlighted-section">
              <h3 className="text-2xl font-primary mb-2 text-purple-700 font-semibold mt-10">Why Choose SendiT?</h3>
              <ul className="text-gray-800">
                <li>
                  <strong className="">Convenience:</strong> <br /> With a sendit delivery app, you can order your parcels from the comfort of your own home, without having to go to the store or office.
                </li>
                <li className='mt-2'>
                  <strong className="">Special deals and discounts:</strong> <br />SendiT courier provides special offers and discounts up to 30% for our customers.
                </li>
                <li className='mt-2'>
                  <strong className="">Real-time Package Tracking:</strong><br /> Stay informed about the status of your packages with our real-time tracking feature.
                </li>
                <li className='mt-2'>
                  <strong className="">User-Friendly Platform:</strong> Our user-friendly platform makes it easy to calculate shipping costs, book deliveries, and manage your shipments with ease.
                </li>
              </ul>
            </div>
          </div>
          <div className='image3 ml-10 flex justify-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR35RWIWHGmNHDgwSjPnTGmNOPBjINC9oEpPw&usqp=CAU" alt='...'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;