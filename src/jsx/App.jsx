import React, {Component} from 'react';
import style from './../styles/styles.less';

import franci_david from './../../media/img/franci_david.jpg';

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
          <div><img src="" alt="" className={style.top_center_image} /></div>
          <h3>Francesca</h3>
          <h4></h4>
          <h3>David</h3>
          <h5>22.2.2022</h5>
          <div><img src="" alt="" className={style.left_bottom_image} /></div>
          <div><img src="" alt="" className={style.left_right_image} /></div>
          <div><img src="" alt="" className={style.bottom_center_image} /></div>
        </div>
        <div className={style.container}>
          <div className={style.navigation_container}>
            <ul>
              <li>Francesca &amp; David</li>
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
              <h3>Cosa nostra</h3>
              <p>We are happy to welcome you to our wedding taking place</p>
              <p>We are happy to welcome you to our wedding taking place</p>
              <h4>Italian mafia</h4>
              <p>We are happy to welcome you to our wedding taking place</p>
              <p>We are happy to welcome you to our wedding taking place</p>
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
            <img src={franci_david} alt="Image" className={style.image + ' ' + style.image_franci_david} />
          </div>
          <div className={style.right_container}>
            <h5>Title</h5>
            <p>We are happy to welcome you to our wedding taking place</p>
            <h5>Title</h5>
            <p>We are happy to welcome you to our wedding taking place</p>
            <h5>Title</h5>
            <p>We are happy to welcome you to our wedding taking place</p>
            <div className={style.center_container}><button>Press me!</button></div>
          </div>
        </div>
        <div className={style.container_rsvp}>
          <div className={style.content_wrapper}>
            <div className={style.left_container}>
              <h3>R.S.V.P.</h3>
              <h4>come back by tomorrow</h4>
            </div>
            <div className={style.right_container}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;