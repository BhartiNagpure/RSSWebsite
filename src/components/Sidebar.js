import React, { useState } from 'react';
import magnifierImg from '../Assests/img/Vector (1).png';
import img1 from '../Assests/img/bx-checkbox.png';
import img2 from '../Assests/img/checkboxChecked.png';
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const labels = ["Marathi", "Hindi", "English", "Sanskrit"];
  const [imageStates, setImageStates] = useState(labels.map(() => true));

  const toggleImage = (index) => {
    const updatedImageStates = [...imageStates];
    updatedImageStates[index] = !updatedImageStates[index];
    setImageStates(updatedImageStates);
  };

  const categoryLabels = ["Category1", "Category2", "Category3", "Category4", "Category5", "Category6", "Category7", "Category8", "Category9"];
  const [categoryImageStates, setCategoryImageStates] = useState(categoryLabels.map(() => true));

  const toggleCategoryImage = (index) => {
    const updatedCategoryImageStates = [...categoryImageStates];
    updatedCategoryImageStates[index] = !updatedCategoryImageStates[index];
    setCategoryImageStates(updatedCategoryImageStates);
  };

  return (
    <section>
      <div className="sidebar d-none d-lg-block ">
        <div className="inputBox">
          <img src={magnifierImg} alt="" />
          <input
            type="text"
            id="search"
            placeholder="Search Categories and ..."
          />
        </div>
        <div className="checkbox">
          <h3 className="border-bottom">Languages</h3>
          <div className="flex">
            {labels.map((label, index) => (
              <div key={label}>
                {imageStates[index] ? (
                  <img
                    src={img1}
                    alt={`Image 1 for ${label}`}
                    onClick={() => toggleImage(index)}
                    className="common-image-class" 
                  />
                ) : (
                  <img
                    src={img2}
                    alt={`Image 2 for ${label}`}
                    onClick={() => toggleImage(index)}
                    className="common-image-class" 
                  />
                )}
                <label htmlFor={`myCheckbox${index + 1}`}>{label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="checkbox">
          <h3 className="border-bottom">New Books Categories</h3>
          <div className="flex">
            {categoryLabels.map((label, index) => (
              <div key={label}>
                {categoryImageStates[index] ? (
                  <img
                    src={img1}
                    alt={`Image 1 for ${label}`}
                    onClick={() => toggleCategoryImage(index)}
                    className="common-image-class" // Add the common class here
                  />
                ) : (
                  <img
                    src={img2}
                    alt={`Image 2 for ${label}`}
                    onClick={() => toggleCategoryImage(index)}
                    className="common-image-class" // Add the common class here
                  />
                )}
                <label htmlFor={`myCategoryCheckbox${index + 1}`}>
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button className='BarBtn d-lg-none'  onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} />
      </Button>
      <Offcanvas className="offcanvasSection" show={show} onHide={handleClose}>
        
        <Offcanvas.Body className="p-0 custom-offcanvas ">
            <div className="sidebar">
            <div className='custom-closebutton'>
              <Offcanvas.Header closeButton></Offcanvas.Header>
            </div>
            <div className="inputBox">
              <img src={magnifierImg} alt=""/>
              <input
                type="text"
                id="search"
                placeholder="Search Categories and ..."
              />
            </div>
            <div className="checkbox">
              <h3 className="border-bottom">Languages</h3>
              <div className="flex">
                {labels.map((label, index) => (
                  <div key={label}>
                    {imageStates[index] ? (
                      <img
                        src={img1}
                        alt={`Image 1 for ${label}`}
                        onClick={() => toggleImage(index)}
                        className="common-image-class" // Add the common class here
                      />
                    ) : (
                      <img
                        src={img2}
                        alt={`Image 2 for ${label}`}
                        onClick={() => toggleImage(index)}
                        className="common-image-class" 
                      />
                    )}
                    <label htmlFor={`myCheckbox${index + 1}`}>{label}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="checkbox">
              <h3 className="border-bottom">New Books Categories</h3>
              <div className="flex">
                {categoryLabels.map((label, index) => (
                  <div key={label}>
                    {categoryImageStates[index] ? (
                      <img
                        src={img1}
                        alt={`Image 1 for ${label}`}
                        onClick={() => toggleCategoryImage(index)}
                        className="common-image-class" 
                      />
                    ) : (
                      <img
                        src={img2}
                        alt={`Image 2 for ${label}`}
                        onClick={() => toggleCategoryImage(index)}
                        className="common-image-class" 
                      />
                    )}
                    <label htmlFor={`myCategoryCheckbox${index + 1}`}>
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
}



