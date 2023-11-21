import upcomingHead from '../Assests/img/group-14.svg';
import eventimg from '../Assests/img/Rectangle-29.png';

export default function UpcomingEvents() {
  return (
    <section id='events'>
      <div className="upcoming-events">
        <div className="gallery-content">
          <div className="py-4">
            <img src={upcomingHead} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-5">
                <div className="card mb-4">
                  <img src={eventimg} alt="event Image" className="card-img-top" />
                  <div className="card-body">
                    <p className="date">Date : 01/JAN/2024</p>
                    <p className="w-100">
                      Lorem Books details in brief with more information
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-5">
                <div className="card mb-4">
                  <img src={eventimg} alt="event Image" className="card-img-top" />
                  <div className="card-body">
                    <p className="date">Date : 01/JAN/2024</p>
                    <p className="w-100">
                      Lorem Books details in brief with more information
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
