import React, { useEffect, useState } from "react";

const Benefis = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 3000);
      setIntervalId(interval);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setIsHovered(index);
      clearInterval(intervalId);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(null);
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 3000);
      setIntervalId(interval);
    }
  };

  return (
    <div className="benefis_container">
      <div className="benefits">
        <h2 className="benefits_title">Benefits</h2>
        <p className="benefits_desc">
          As a merchant or customer, you can seamlessly utilize Coinsub to
          process crypto payments and track your digital currency transactions.
        </p>
        <ul className="benefits_item">
          {[0, 1, 2].map((index) => (
            <li
              key={index}
              className={
                activeIndex === index || isHovered === index ? "active" : ""
              }
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h4>
                {index === 0 && "Recurring Payments"}
                {index === 1 && "One-off Payments"}
                {index === 2 && "Easy Product Management"}
              </h4>
              <p className="p1">
                {index === 0 &&
                  "You can subscribe streaming platforms or music services easily."}
                {index === 1 &&
                  "You can sell products, courses or anything digital via crypto!"}
                {index === 2 &&
                  "It’s only matter of a couple clicks to create and manage your products!"}
              </p>

              {/* Mobilde resim */}
              {isMobile && (
                <img
                  src={
                    index === 0
                      ? "Rectangle27.jpg"
                      : index === 1
                      ? "Rectangle28.jpg"
                      : "Rectangle29.jpg"
                  }
                  alt="Benefit visual"
                  className="benefits_img mobile_only"
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="benefits_image">
        {activeIndex === 0 && (
          <img
            src={isMobile ? "Rectangle27.jpg" : "RecurringPayments.png"}
            className="benefits_img"
            alt="Recurring Payments"
          />
        )}
        {activeIndex === 1 && (
          <img
            src={isMobile ? "Rectangle28.jpg" : "One-off Payments.png"}
            className="benefits_img"
            alt="One-off Payments"
          />
        )}
        {activeIndex === 2 && (
          <img
            src={isMobile ? "public/Rectangle29.jpg" : "Frame390.png"}
            className="benefits_img image8"
            alt="Product Management"
          />
        )}
      </div>
    </div>
  );
};

export default Benefis;
