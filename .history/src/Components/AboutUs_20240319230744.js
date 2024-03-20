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
                <img alt="https://www.shutterstock.com/image-photo/target-mission-vision-business-goal-aim-465623387" alt="..." className="w-full h-auto" />
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
            <img alt="desk logo" src ="data:image/jpeg;base64,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"/>                                                    
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR35RWIWHGmNHDgwSjPnTGmNOPBjINC9oEpPw&usqp=CAU" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;