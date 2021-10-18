import React, {Component} from 'react';
import style from './../styles/styles.less';

import franci_david from './../../media/img/franci_david.jpg';
import ecuador1 from './../../media/img/ecuador1.jpg';
import ecuador2 from './../../media/img/ecuador2.jpg';
import top_center_image from './../../media/img/assets/Asset 4.png';
import left_bottom_image from './../../media/img/assets/Asset 2.png';
import right_bottom_image from './../../media/img/assets/Asset 3.png';
import bottom_center_image from './../../media/img/assets/Asset 5.png';
import flower from './../../media/img/assets/Asset 15.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  onClick() {
    return false;
  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <div className={style.top_container}>
          <div className={style.image_container}><img src={top_center_image} alt="" className={style.top_center_image} /></div>
          <h3>Francesca<br />David</h3>
          <h5>27&middot;02&middot;2022</h5>
          <div className={style.image_container}><img src={left_bottom_image} alt="" className={style.left_bottom_image} /></div>
          <div className={style.image_container}><img src={right_bottom_image} alt="" className={style.right_bottom_image} /></div>
          <div className={style.image_container + ' ' + style.bottom_center_image_container}><img src={bottom_center_image} alt="" className={style.bottom_center_image} /></div>
        </div>
        <div className={style.container}>
          <div className={style.navigation_container}>
            <ul>
              <li><a href="#" className={style.active}>FD</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">RSVP</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Mogrotour</a></li>
              <li><a href="#">Info</a></li>
            </ul>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.container}>
            <div className={style.left_container}>
              <h3 className={style.corn_header}>We are<br />getting<br />married</h3>
              <p>We are happy to welcome you to our wedding taking place on Sunday 27 February, 2022 at 16:00 at Villa Jaco in Olón. It’s carnaval time so a few prompt reservations might be in order depending on the length of your stay and travel plans. We are happy to share some travel tips with you as well, under mogrotours.</p>
              <h4 className={style.airplane_header}>Let's celebrate</h4>
              <p>Pack your chanclas, your sombrero, and prepare to party. We will be waiting for you!</p>
            </div>
            <div className={style.right_container}>
              <div><img src={franci_david} alt="Image" className={style.image + ' ' + style.image_franci_david} /></div>
            </div>
          </div>
        </div>
        <div className={style.container}>
          <h3 className={style.center}>Villa Jaco</h3>
        </div>
        <div className={style.container}>
          <div className={style.left_container}>
            <img src={ecuador1} alt="Image" className={style.image + ' ' + style.ecuador1} />
            <img src={ecuador2} alt="Image" className={style.image + ' ' + style.ecuador2} />
          </div>
          <div className={style.right_container}>
            <h5>Location</h5>
            <p><a href="https://goo.gl/maps/S8jAXQWwwdxmUsqi9">Olón, Santa Elena, Ecuador. Villa Jaco</a></p>
            <h5>Schedule</h5>
            <p><strong>Ceremony:</strong> 16:00 ECT<br /><strong>Sunset:</strong> 18:30 ECT<br /><strong>Party:</strong> all weekend long</p>
            <h5>Accommodation</h5>
            <p>We have made reservations for those of you coming from abroad from Saturday 26 to Monday 28 February in our favourite small but lovely hostel, La Mariposa, near the house where we will get married. We would recommend you stay a little longer after to enjoy the massive beach area and recover from the party.</p>
            <p>The hostel is 3 minutes walking from the beach. La Mariposa has no restaurant and there are no services other than a nice clean room with AC. You will find plenty of food options nearby, on the beach or in town. Olón is also right next to a “surfing-party town” called Montañita. There are plenty of restaurants and other stay options there and it’s only a one-dollar-10-minute taxi ride away.</p>
            <div className={style.center_container}><button>Press me!</button></div>
          </div>
        </div>
        <div className={style.container_rsvp}>
          <div className={style.content_wrapper}>
            <div className={style.left_container}>
              <h3>Let's toast together</h3>
              <p>Your presence at our wedding is the greatest gift, should you wish to show further affection, bring a bottle for a toast or your best dancing shoes.</p>
              <h3>R.S.V.P.</h3>
              <p>Please confirm your attendance by 5.12.2021<br />Via e-mail at: francescazago.fz@gmail.com</p>
              <div className={style.center_container}><button>Press me!!!</button></div>
            </div>
            <div className={style.right_container}>

            </div>
          </div>
        </div>
        <div className={style.container}>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Fra</strong><br />
                  +555-call-me<br />
                  send a snailmail
                </td>
                <td>
                  <img src={flower} alt="Image" className={style.image + ' ' + style.flower} />
                </td>
                <td>
                  <strong>Deivid</strong><br />
                  +555-don't-call-me<br />
                  send a snailmail
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;