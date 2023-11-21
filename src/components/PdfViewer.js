import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../Assests/img/Rectangle3.png';
import ImbedImage from '../Assests/pdf/dummy.pdf';
import { Button } from 'react-bootstrap';

export default function PdfViewer(){
  return (
    <Container fluid className="backround ">
      <div className="main ">
        <Row className="align-items-center customRow">
          <Col lg={2}>
            <div className="imageSection d-flex">
              <div className="imgContainer">
                <img src={img} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="titleContainer">
              <h3>BOOK HEAD</h3>
              <p>Books Details in brief with more information</p>

              <div className="Btn">
                <Button>DOWNLOAD</Button>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="pdfContainer">
              <iframe
                src="https://mozilla.github.io/pdf.js/web/viewer.html"
                style={{ border: "1px solid black" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}



