import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../Assests/img/Rectangle1.png";
import Img2 from "../Assests/img/Rectangle2.png";
import Img3 from "../Assests/img/Rectangle3.png";
import Popup from '../components/Popup';


export default function CardSection() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const openPopup = () => {
    setPopupVisible(true);
  };

  const initialCardCount = 9;
  const [visibleCardCount, setVisibleCardCount] = useState(initialCardCount);

  const loadMoreCards = () => {
    setVisibleCardCount(visibleCardCount + 6);
  };

  return (
    <section>
     <Popup trigger={isPopupVisible} setTrigger={setPopupVisible} />
      <div className="CardsSection ml-4 d-flex justify-content-center align-items-center">
        <div className="download-content p-5 container">
          <div className="row ">
            {Array.from({ length: visibleCardCount }).map((_, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className=" card mb-4">                 
                      <img className="card-img-top"
                        src={
                          index % 3 === 0 ? Img1 : index % 3 === 1 ? Img2 : Img3
                        }
                      />
                    <div className="card-body" >
                      <h5 className="card-title">BOOK HEAD</h5>
                      <p className="card-text">Books Details in brief with more information</p>
                    </div>
                    <button className="btn" onClick={openPopup}>VIEW PDF</button>
                  </div>
              </div>
            ))}
          </div>
          {visibleCardCount < 27 && (
            <div className="d-flex justify-content-center LoadMoreBtn">
              <button
                onClick={loadMoreCards}
                className="LoadMoreButton btn"
              >
                Load More{" "}
                <FontAwesomeIcon
                  icon={faChevronDown}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
