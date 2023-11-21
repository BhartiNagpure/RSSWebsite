import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CardSection from '../components/CardSection';

export default function EBook() {



  return (
    <div className="custom-container pt-5 ebookContainer">
   
      <div className="row ebookContent ">
        <div className="col-2 col-lg-4 col-xl-4">
          <Sidebar />
        </div>
        <div className="col-lg-8 col-xl-8 col-12">
          <CardSection />
        </div>
      </div>
    </div>
  );
}
