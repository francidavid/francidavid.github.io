import React, {Component} from 'react';
import style from './../styles/styles.less';

import franci_david from './../../media/img/franci_david.jpg';
import ecuador1 from './../../media/img/ecuador1.jpg';
import ecuador2 from './../../media/img/ecuador2.jpg';
import top_center_image from './../../media/img/assets/Asset 4.png';
import left_bottom_image from './../../media/img/assets/Asset 2.png';
import right_bottom_image from './../../media/img/assets/Asset 3.png';
import bottom_center_image from './../../media/img/assets/Asset 5.png';

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
              <li className={style.active}>FD</li>
              <li>Location</li>
              <li>RSVP</li>
              <li>Contact</li>
              <li>Mogrotour</li>
              <li>Info</li>
            </ul>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.container}>
            <div className={style.left_container}>
              <h3 className={style.corn_header}>Cosa<br />nostra<br />good</h3>
              <p>We are happy to welcome you to our wedding taking place.</p>
              <p>We are happy to welcome you to our wedding taking place.</p>
              <h4 className={style.airplane_header}>Italian mafia good</h4>
              <p>We are happy to welcome you to our wedding taking place.</p>
              <p>We are happy to welcome you to our wedding taking place.</p>
            </div>
            <div className={style.right_container}>
              <div><img src={franci_david} alt="Image" className={style.image + ' ' + style.image_franci_david} /></div>
            </div>
          </div>
        </div>
        <div className={style.container}>
          <h3 className={style.center}>David has a penis</h3>
        </div>
        <div className={style.container}>
          <div className={style.left_container}>
            <img src={ecuador1} alt="Image" className={style.image + ' ' + style.beach} />
          </div>
          <div className={style.right_container}>
            <h5>Title</h5>
            <p>We are happy to welcome you to our wedding taking place.</p>
            <h5>Title</h5>
            <p>We are happy to welcome you to our wedding taking place.</p>
            <h5>Title</h5>
            <p>We are happy to welcome you to our wedding taking place.</p>
            <div className={style.center_container}><button>Press me!</button></div>
          </div>
        </div>
        <div className={style.container_rsvp}>
          <div className={style.content_wrapper}>
            <div className={style.left_container}>
              <h3>R.S.V.P.</h3>
              <h4>get back by tomorrow</h4>
              <div className={style.center_container}><button>Press me!!!</button></div>
              <p>We are happy to welcome you to our wedding taking place. We are happy to welcome you to our wedding taking place. We are happy to welcome you to our wedding taking place. We are happy to welcome you to our wedding taking place.</p>
              <p>We are happy to welcome you to our wedding taking place.</p>
              <h4>KIIITOS</h4>
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
                  FRA<br />
                  +555-call-me<br />
                  send a snailmail
                </td>
                <td>
                  flower
                </td>
                <td>
                  DEIVID<br />
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