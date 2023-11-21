
import sideImg from '../Assests/img/popupside-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Popup({ trigger, setTrigger }) {
  const closePopup = () => {
    setTrigger(false);
  };
 
  return trigger ?(
 <section className='popup'>
 <button type='button' className='close-btn position-absolute ' onClick={closePopup} > <FontAwesomeIcon icon={faTimes} className='close'/></button>
     <div className='popupContainer'>
      <div className='side-img'>
<img src={sideImg} alt=''/>
      </div>
      <div className='form container py-5 px-5'>
      <div className='form-head'>
        <p>FILL THE INFORMATION TO CONTINUE DOWNLOADING THE BOOK</p>
      </div>
      <form>
      <label htmlFor="firstName" className="form-label"></label>
        <input type="text"  className="  form-control " id="firstName" placeholder='Full Name' required  >
        </input>
        <label htmlFor="mobileNumber" className="form-label"></label>
        <input type="number"  className="  form-control  " id="mobileNumber" placeholder='Mobile Number...'  required>
        </input>
        <label htmlFor="place" className="form-label"></label>
        <input type="text"  className="  form-control" id="place" placeholder='Place/City...' required >
        </input>
        <label htmlFor="email" className="form-label"></label>
        <input type="email"  className="mb-5  form-control" id="email" placeholder='Email-ID...'  >
        </input>
        <Link to='/pdfviewer'>
        <button type="submit" className="submit-btn">Continue...</button>
        </Link>
      </form>
    </div> 
   
    </div>

 </section>
  ): null;
}
