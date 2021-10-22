import React, {Component} from 'react';
import style from './../styles/styles.less';

import franci_david from './../../media/img/franci_david.jpg';
import franci_child from './../../media/img/franci_child.png';
import david_child from './../../media/img/david_child.jpg';
import ecuador1 from './../../media/img/ecuador1.jpg';
import ecuador2 from './../../media/img/ecuador2.jpg';
import top_center_image from './../../media/img/assets/top_center_image.png';
import left_bottom_image from './../../media/img/assets/left_bottom_image.png';
import right_bottom_image from './../../media/img/assets/right_bottom_image.png';
import bottom_center_image from './../../media/img/assets/bottom_center_image.png';
import footer_flower from './../../media/img/assets/footer_flower.png';
import amp from './../../media/img/assets/amp.png';

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
          <h3>Fran<span className={style.over}>c</span>esca<br /><img src={amp} className={style.amp} /><br />Da<span className={style.over}>v</span>id</h3>
          <h5>27&middot;02&middot;2022</h5>
          <div className={style.image_container}><img src={left_bottom_image} alt="" className={style.left_bottom_image} /></div>
          <div className={style.image_container}><img src={right_bottom_image} alt="" className={style.right_bottom_image} /></div>
          <div className={style.image_container + ' ' + style.bottom_center_image_container}><img src={bottom_center_image} alt="" className={style.bottom_center_image} /></div>
        </div>
        <div className={style.container}>
          <div className={style.navigation_container + ' ' + style.hidden}>
            <ul>
              <li><a href="#" className={style.active}>Info</a></li>
              <li><a href="#">Location</a></li>
              <li><a href="#">Mogrotour</a></li>
            </ul>
          </div>
        </div>
        <div className={style.container}>
          <h3 className={style.corn_header + ' ' + style.title}>We are<br />getting<br />married</h3>
          <div className={style.left_container}>
            <div className={style.mobile}><img src={franci_david} alt="Image" className={style.image + ' ' + style.image_franci_david} /></div>
            <p>We are happy to share with you the beginning of our personal adventure and union with a big party at the beach of Olón on 27 February, 2022 in Ecuador.</p>
            <p>We love travelling, so if you are coming from afar we are happy to share some Ecuador suggestions under MogroTours.</p>
            <h4 className={style.airplane_header}>Let's celebrate</h4>
            <p>Pack your chanclas, your sombrero, and prepare to party. We will be waiting for you!</p>
          </div>
          <div className={style.right_container}>
            <div className={style.desktop}><img src={franci_david} alt="Image" className={style.image + ' ' + style.image_franci_david} /></div>
          </div>
        </div>
        <h3 className={style.center + ' ' + style.title}>Accommodation</h3>
        <div className={style.container}>
          <div className={style.left_container}>
            <img src={ecuador1} alt="Image" className={style.image + ' ' + style.ecuador1} />
            <img src={ecuador2} alt="Image" className={style.desktop + ' ' + style.image + ' ' + style.ecuador2} />
          </div>
          <div className={style.right_container}>
            <p>For those of you coming from abroad we have made a reservation at our favourite hostel, La Mariposa, near the beach in Olón. The reservation covers Saturday 26 to Monday 28 February. If you want to stay a little longer to enjoy the beach and the area you can extend your stay via <a href="https://www.booking.com/hotel/ec/la-mariposa-hostal.en-gb.html?aid=1258472&checkin=2022-02-28&checkout=2022-03-04&dest_id=-931297&dest_type=city&group_adults=2&group_children=0&label=Share-RunWvd@1632327419&no_rooms=1&room1=A,A" target="_blank">bookings</a> (just mention that you are coming to the wedding).</p>
            <p>La Mariposa offers you a nice room with AC and the beach is three minutes away. You will find plenty of food options nearby, on the beach or in town. Olón is also right next to a “surfing-party town” called Montañita. There are plenty of restaurants and other stay-in options and it’s only a one-dollar-10-minute taxi ride away.</p>
            <h5>Dress code</h5>
            <p>The saying goes “Fancy-Franci”, so we want you looking your best and comfortable. It’s going to be pretty hot on Ecuador’s coast, so take that into account.</p>
            <p>Some folks might want to consider wearing a traditional “Guayabera”, a light, white, typically embroidered shirt, to pair with the trousers of your choice.</p>
            <p>Some others may choose a long or short dress that will allow you to dance.</p>
            <p>We will be at the beach and although you can dance on the sand, there will be a hard floor space for your best moves.</p>
          </div>
        </div>
        <h3 className={style.center + ' ' + style.title}>Important info</h3>
        <div className={style.container}>
          <h5>Vaccines</h5>
          <p>We suggest you check the US CDC for general vaccine info for Ecuador, it’s very complete. Of course, do check your own country’s recommendations as well.</p>
          <p>- Please note that to attend the wedding you have to be vaccinated for COVID-19.</p>
          <h5>Currency</h5>
          <p>Ecuador uses the US dollar. Make sure you get small banknotes, below 100 USD, otherwise people might not accept them.</p>
          <p><strong>Coins:</strong> Ecuador produces its own dollar coins. Make sure you get rid of all the Ecuadorian ones before you leave. They won’t be accepted anywhere else.</p>
          <p><strong>Car rentals:</strong> they can be expensive in Ecuador, so reach out to us in case you can’t find something interesting and we can help you find a local “cooperativa”.</p>
          <p><strong>National flights:</strong> they work very well and from the airports of Quito, Guayaquil and Cuenca there are multiple options every day.</p>
          <h5>Security in Guayaquil and Quito:</h5>
          <p>You're going to have a very nice time in Ecuador and Ecuadorians are a nice people, however you should keep in mind a few main things about security, especially as a tourist.</p>
          <p>Big cities in Ecuador, like other places in Latin America can be dangerous, particularly Guayaquil. But in both Quito and Guayaquil always keep an extra vigilant eye: avoid wearing jewellery and do not go around alone or walk in dark alleys. Night strolls should be avoided. Try to use taxis from the hotels and agree with them on a pick-up spot.</p>
          <p>Guayaquil is the largest and most dynamic city in Ecuador, but it is not really a tourist destination. It is worth a short visit, but you should move around by car and walk only in designated areas like the Malecón Simón Bolivar, Cerro Santa Ana and Puerto Santa Ana. Just don’t be very adventurous in Guayaquil.</p>
          <p>Quito is the capital of Ecuador, has a large old town, and it’s surrounded by volcanoes. It is a top tourist destination, and if it wouldn’t be for its people (Guayaquileans are more fun and eat better) it would be a better place. Also here, avoid strolling around like you would in a typical European city, stick to designated tourist spots.</p>
          <h5>How to get to Olón or Ecuador?</h5>
          <p>If you’re coming from abroad - Quito or Guayaquil are your arrival destinations in Ecuador.</p>
          <p><strong>From Europe:</strong> KLM (via Amsterdam) is your best choice and the economy plus seat option is always a good treat, particularly considering the long flight between Amsterdam (AMS) and Guayaquil (GYE)/Quito (UIO). I would recommend buying the whole trip in economy and then upgrading the economy plus seats of the long-haul flight.</p>
          <p>LATAM or IBERIA via Madrid. LATAM is actually quite ok, but the Iberia flights aren’t often the best.</p>
          <p>UK/USA/Miami/Newark: requires extra controls and migration time and an additional stop.</p>
          <p><strong>Getting to Olón</strong> most probably means passing through Guayaquil. Getting there is only possible via car or bus/mini bus. We have hotel and travel recommendations for this too, but closer to the date.</p>
        </div>

        <div className={style.container_rsvp}>
          <div className={style.content}>
            <div className={style.franci_child_container}><img src={franci_child} alt="Image" className={style.image + ' ' + style.franci_child} /></div>
            <div className={style.david_child_container}><img src={david_child} alt="Image" className={style.image + ' ' + style.david_child} /></div>
            <h3>Let's toast together</h3>
            <p>Your presence at our wedding is the greatest gift, should you wish to show further affection, bring a bottle for a toast or your best dancing shoes.</p>
            <h3>R.S.V.P.</h3>
            <p>Please confirm your attendance by 5.12.2021 via e-mail at: francescazago.fz@gmail.com</p>
          </div>
        </div>
        <div className={style.container}>
          <table>
            <tbody>
              <tr>
                <td>
                  {/*<strong>Fra</strong><br />*/}
                  {/*<i>+555-call-me</i><br />*/}
                  {/*<i><a href="mailto:abc@example.com">Mail</a></i>*/}
                </td>
                <td>
                  <img src={footer_flower} alt="Image" className={style.image + ' ' + style.footer_flower} />
                </td>
                <td>
                  {/*<strong>Deivid</strong><br />*/}
                  {/*<i>+555-not-me</i><br />*/}
                  {/*<i><a href="mailto:abc@example.com">Mail</a></i>*/}
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