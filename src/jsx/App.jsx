import React, {Component} from 'react';
import style from './../styles/styles.less';

import franci_david from './../../media/img/franci_david.jpg';
import franci_child from './../../media/img/franci_child.jpg';
import david_child from './../../media/img/david_child.jpg';
import ecuador1 from './../../media/img/ecuador1.jpg';
import ecuador2 from './../../media/img/ecuador2.jpg';
import mariposa from './../../media/img/mariposa.jpg';
import top_center_image from './../../media/img/assets/top_center_image.png';
import left_bottom_image from './../../media/img/assets/left_bottom_image.png';
import right_bottom_image from './../../media/img/assets/right_bottom_image.png';
import bottom_center_image from './../../media/img/assets/bottom_center_image.png';
import tupo from './../../media/img/assets/tupo.png';
import flower from './../../media/img/assets/flower.png';
import corn_sparkly from './../../media/img/assets/corn_sparkly.png';
import amp from './../../media/img/assets/amp.png';
import saraguro from './../../media/img/saraguro.jpg';
import sombrero from './../../media/img/assets/sombrero.png';
import mitad_mundo from './../../media/img/mitad_mundo.jpg';
import wiki from './../../media/img/assets/wiki.png';
import tours from './../../media/img/tours.jpg';
import quilotoa from './../../media/img/quilotoa.jpg';
import road from './../../media/img/road.jpg';
import beach from './../../media/img/beach.jpg';
import mitad from './../../media/img/mitad.jpg';
import amazon from './../../media/img/amazon.jpg';
import franci_explaining from './../../media/vid/franci_explaining.mp4';

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
          <div className={style.updated}>Updated<br />17.2.2022</div>
          <h3>Fran<span className={style.over}>c</span>esca<br /><img src={amp} className={style.amp} /><br />Da<span className={style.over}>v</span>id</h3>
          <h5>27&middot;02&middot;2022</h5>
          <div className={style.image_container}><img src={left_bottom_image} alt="" className={style.left_bottom_image} /></div>
          <div className={style.image_container}><img src={right_bottom_image} alt="" className={style.right_bottom_image} /></div>
          <div className={style.image_container + ' ' + style.bottom_center_image_container}><img src={bottom_center_image} alt="" className={style.bottom_center_image} /></div>
        </div>
        <div className={style.container}>
          <div className={style.navigation_container}>
            <ul>
              <li><a href="#info" className={style.active}>Info</a></li>
              <li><a href="#funfacts" className={style.active}>Fun facts</a></li>
              <li><a href="#mogrotour" className={style.active}>Mogrotour</a></li>
            </ul>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.navigation_container}>
            <ul>
              <li><a href="https://francidavid-github-io.translate.goog/?_x_tr_sl=en&_x_tr_tl=it&_x_tr_hl=en-US&_x_tr_pto=wapp" className={style.active}>In italiano</a></li>
              <li><a href="https://francidavid-github-io.translate.goog/?_x_tr_sl=en&_x_tr_tl=fi&_x_tr_hl=en-US&_x_tr_pto=wapp" className={style.active}>En español</a></li>
              <li><a href="https://francidavid-github-io.translate.goog/?_x_tr_sl=en&_x_tr_tl=de&_x_tr_hl=en-US&_x_tr_pto=wapp" className={style.active}>Auf Deutsch</a></li>
              <li><a href="https://francidavid-github-io.translate.goog/?_x_tr_sl=en&_x_tr_tl=fi&_x_tr_hl=en-US&_x_tr_pto=wapp" className={style.active}>Suomeksi</a></li>
            </ul>
          </div>
        </div>
        <div className={style.container}>
          <h3 className={style.corn_header + ' ' + style.title}>We are<br />getting<br />married</h3>
          <div className={style.left_container}>
            <div className={style.mobile}><img src={franci_david} alt="Image" className={style.image + ' ' + style.image_franci_david} /></div>
            <p>We are happy to share with you the beginning of our personal adventure and union with a big party at the beach of Olón on Sunday 27 February 2022, at 16:00 at <a href="https://www.instagram.com/villajaco/?hl=en" target="_blank">Villa Jaco</a> (Instagram).</p>
            <p>You can walk through the beach, or we will have some of our relatives coming to Mariposa Hostel and driving you over. The latter is the best option. Ceremony starts at 16:30 till the 28th midday at least. ;-)</p>
            <p>We love travelling, so if you are coming from afar we are happy to share some Ecuador suggestions under MogroTours.</p>
            <h4 className={style.airplane_header}>Let's celebrate</h4>
            <p>Pack your chanclas, your sombrero, and prepare to party. We will be waiting for you!</p>
          </div>
          <div className={style.right_container}>
            <div className={style.desktop}><img src={franci_david} alt="Image" className={style.image + ' ' + style.image_franci_david} /></div>
          </div>
        </div>
        <h3 className={style.center + ' ' + style.title + ' ' + style.accommodation_header}>Accommodation</h3>
        <div className={style.container}>
          <img src={ecuador1} alt="Image" className={style.image + ' ' + style.ecuador1 + ' ' + style.float_left + ' ' + style.desktop} />
          <img src={ecuador1} alt="Image" className={style.image + ' ' + style.ecuador1 + ' ' + style.mobile} />
          <p>For those of you coming from abroad we have made a reservation at our favourite hostel, La Mariposa, near the beach in Olón. The reservation covers Saturday 26 to Monday 28 February. If you want to stay a little longer to enjoy the beach and the area you can extend you can extend your stay by contacting the hotel directly via <a target="_blank" href="https://wa.me/+593980178357" target="_blank">Whatsapp (+593&nbsp;98&nbsp;017&nbsp;8357)</a>. Mention that you are coming to the Matrimonio Mogrovejo Zago.</p>
          <img src={mariposa} alt="Image" className={style.desktop + ' ' + style.image + ' ' + style.ecuador2 + ' ' + style.float_right} />
          <p>La Mariposa offers you a nice room with AC and the beach is three minutes away. You will find plenty of food options nearby, on the beach or in town. Olón is also right next to a “surfing-party town” called Montañita. There are plenty of restaurants and other stay-in options and it’s only a one-dollar-10-minute taxi ride away.</p>
          <h5>Dress code</h5>
          <p>The saying goes “Fancy-Franci”, so we want you looking your best and comfortable. It’s going to be pretty hot on Ecuador’s coast, so take that into account.</p>
          <p>Some folks might want to consider wearing a traditional “Guayabera”, a light, white, typically embroidered shirt, to pair with the trousers of your choice.</p>
          <p>Some others may choose a long or short dress that will allow you to dance.</p>
          <p>We will be at the beach and although you can dance on the sand, there will be a hard floor space for your best moves.</p>
        </div>
        <h3 className={style.center + ' ' + style.title} id="info">Important info</h3>
        <div className={style.container}>
          <h5>Vaccines</h5>
          <img src={flower} alt="Image" className={style.image + ' ' + style.flower + ' ' + style.float_right} />
          <p>We suggest you check the US CDC for general vaccine info for Ecuador, it’s very complete. Of course, do check your own country’s recommendations as well.</p>
          <p>- Please note that to attend the wedding you have to be vaccinated for COVID-19.</p>
          <p>- <strong>UPDATE 17.2.2022 1820 CET</strong>: To enter Ecuador by air must present only the vaccination certificate against covid-19, with the complete scheme. This requirement will also apply for entry to the Galapagos Islands. This eliminates the presentation of a PCR or antigen test. <a href="https://www.aviacioncivil.gob.ec/category/noticias/" target="_blank">Check the latest information from here</a>.</p>
          <p>- <span style={{textDecoration: 'line-through'}}><strong>UPDATE 30.11.2021 2148 CET</strong>: Vaccinations are now mandatory to enter Ecuador. A PCR test is also mandatory with a validity of 72 hours ahead of travel.</span></p>
          <h5>Currency</h5>
          <img src={corn_sparkly} alt="Image" className={style.image + ' ' + style.corn_sparkly + ' ' + style.float_left} />
          <p>Ecuador uses the US dollar. Make sure you get small banknotes, below 100 USD, otherwise people might not accept them.</p>
          <p><strong>Coins:</strong> Ecuador produces its own dollar coins. Make sure you get rid of all the Ecuadorian ones before you leave. They won’t be accepted anywhere else.</p>
          <p><strong>Car rentals:</strong> they can be expensive in Ecuador, so reach out to us in case you can’t find something interesting and we can help you find a local “cooperativa”.</p>
          <p><strong>National flights:</strong> they work very well and from the airports of Quito, Guayaquil and Cuenca there are multiple options every day.</p>
          <h5>Security in Guayaquil and Quito:</h5>
          <p>You're going to have a very nice time in Ecuador and Ecuadorians are a nice people, however you should keep in mind a few main things about security, especially as a tourist.</p>
          <p>Big cities in Ecuador, like other places in Latin America can be dangerous, particularly Guayaquil. But <strong>in both Quito and Guayaquil always keep an extra vigilant eye</strong>: avoid wearing jewellery and do not go around alone or walk in dark alleys. Night strolls should be avoided. Try to use taxis from the hotels and agree with them on a pick-up spot.</p>
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
            <div className={style.david_child_container}><div></div><img src={david_child} alt="Image" className={style.image + ' ' + style.david_child} /></div>
            <h3>Let's toast to&shy;geth&shy;er</h3>
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
                  <strong>Franci</strong><br />
                  <i className={style.phonenumber}><a target="_blank" href="https://wa.me/00393477211577">+39&nbsp;347&nbsp;7211577</a></i><br />
                  <i><a href="mailto:francescazago.fz@gmail.com" className={style.mail}>MAIL</a></i>
                </td>
                <td>
                  <img src={tupo} alt="Image" className={style.image + ' ' + style.footer_flower} />
                </td>
                <td>
                  <strong>David</strong><br />
                  <i className={style.phonenumber}><a target="_blank" href="https://wa.me/0041792193495">+41&nbsp;79&nbsp;219&nbsp;3495</a></i><br />
                  <i><a href="mailto:dmogrove@gmail.com" className={style.mail}>MAIL</a></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.container_funfacts} id="funfacts">
          <div className={style.content}>
            <h3>Fun facts about the wedding</h3>
            <p>Some of our little motifs in the overall design and invitations are references from Saraguro. The indigenous town where the Mogrovejo Maridueñas grew up.</p>
            <br />
            <br />
            <div className={style.left_container + ' ' + style.left_container_30}>
              <h4 style={{color: '#000'}} className={style.title}></h4>
            </div>
            <div className={style.right_container + ' ' + style.legend + ' ' + style.right_container_70}>
              <img src={sombrero} className={style.float_left + ' ' + style.sombrero_legend} />
              <h5>Sombrero</h5>
              <p>Saraguro sombrero is white on the top and black and white at the bottom. It is typically made of compressed sheep wool, wax and painted with indigo. Women and men still wear it today, mostly for important ceremonies.</p>
              <img src={wiki} className={style.float_left + ' ' + style.wiki_legend} />
              <h5>Wiki</h5>
              <p>Little party devil of the Saraguro people. It always appears on important events, to sing “wiki, wiki” and dance and jump around. And given that it’s a devil, it carries a whip to chase down children.</p>
              <img src={tupo} className={style.float_left + ' ' + style.tupo_legend} />
              <h5>Tupo</h5>
              <p>Silver made and intended to close the Saraguro women’s shawl on the front. It is fashioned to resemble the sun, with multiple faces on its rays and a chain. We chose it as a symbol of union, because without it the Saraguro’s dress wouldn’t hold.</p>
            </div>
            <div className={style.clearfix}></div>
            <br />
            <br />
            <p>Multiple flowers and corn were added as well. The flowers are generally tropical, for the amazon or coast regions of Ecuador and the corn reminds of Saraguro once more. Saraguro in fact is known as the land of corn.</p>
          </div>
        </div>
        {/*<div className={style.container_funfacts}>
          <div className={style.content}>
            <h3 className={style.branch_header}>Fun Facts</h3>
            <h4>About Ecuador</h4>
            <h5>A bit of history</h5>
            <img src={saraguro} className={style.float_right + ' ' + style.saraguro} />
            <h6>From the origins to the Inca</h6>
            <p>Around 30-40,000 years ago, the first humans to populate Ecuador came from Siberia through Alaska. In more recent times, some 5,500 years ago, its lands were occupied by the tribes of Valdivia, Machalillas and Chorreras. Later on, many other civilisations appeared, up to the Inca. Although according to the legend the Inca civilisation was born in 1200 between Peru and Bolivia, the empire only reached Ecuador in 1515. Born of the union between Huayna Capác and a princess from Quito, Atahualpa reigned over the empire with his half-brother Huascar, settled in Cuzco. A war breaks out between the two parties where Huascar gets killed by Atahualpa. He is alone in command of the empire when Pizarro disembarks.</p>
            <h6>From Spanish colonies to independence</h6>
            <p>In 1533, Spanish colonists arrived in Ecuador, took over Quito and built Guayaquil. The indigenous population is enslaved and the death toll reaches hundreds of thousands.</p>
            <p>It was not until 1809 that Juan Pío Montúfar and, a little later, Simón Bolivar fought to liberate the country.  In 1820 Guayaquil was liberated and ten years later the whole country was able to declare its independence.</p>
            <h6>Up to the present day</h6>
            <p>From Flores to Correa, there has been a succession of presidents, crises and coups. Important dates to remember from this period include 1861, when Gabriel García Moreno abolished slavery. The years 1925, 1961 and 2010 were marked by attempted coups. Among the great men, José María Velasco Ibarra was elected President of the Republic five times. In 2005, President Lucio Gutierrez was dismissed from Parliament, a state of emergency was declared and a new Constitution was adopted.</p>*/}
            {/*<img src={sombrero} className={style.float_left + ' ' + style.sombrero} />
            <h5>Panama</h5>
            <p>Patrimonio dell’estate, del sole e dei Tropici è il famosissimo cappello “Panama”, che nonostante il nome, nasce proprio in Ecuador. Viene prodotto da ormai 300 anni nel cuore delle montagne, a 2.550 metri, nella città di Cuenca.</p>
            <p>Questi cappelli di paglia venivano intrecciati lungo la costa ecuadoriana e poi portati a Panama per essere venduti agli operai che lavoravano al canale. In seguito all’apertura del canale di Panama, diventarono unaccessorio di lusso per i benestanti in viaggio. La paglia utilizzata proviene dalle palme “toquilla”, nella città di Montecristi, dove gli stessi locali, la lavorano con macchinari essenziali. La qualità dipende da quanto è fine la fibra che si usa, più è sottile, piùla realizzazione è pregiata.</p>
            <p>Di cappelli se ne producono dieci al giorno, e dai 40 euro dei modelli più economici il prezzo può salire fino a toccare diecimila, se si utilizzano paglie pregiatissime.</p>
            <img src={mitad_mundo} className={style.float_right + ' ' + style.mitad_mundo} />
            <h5>Le Due Mitad Del Mundo</h5>
            <p>Dove si trovano le due Mitad del Mundo dell’Ecuador e come arrivarci Le due Mitad del Mundo si trovano ad una ventina di chilometri da Quito, nei pressi di San Antonio de Pichincha.</p>
            <p>Dalla stazione Ofelia di Quito partono frequentemente degli autobus contrassegnati proprio Mitad del Mundo.</p>
            <p>Ciudad Mitad del Mundo, vale a dire il complesso che sorge dove De la Condamine ne XVIII secolo ha tracciato ed individuato l’Equatore.</p>
            <p>La linea esatta comunque, che si trova all’interno del Museo Intanan.</p>
          </div>
        </div>*/}
        <div className={style.container_tours} id="mogrotour">
          <div className={style.content}>
            <div className={style.left_container + ' ' + style.left_container_40}>
              <h3>Mogrotour #1</h3>
              <h5>Quito-Andes-Amazon-Guayaquil-Olón</h5>
              <h3>Mogrotour #2</h3>
              <h5>Quito-Equator line-Otavalo-Amazon</h5>
            </div>
            <div className={style.right_container + ' ' + style.right_container_60}>
              <img src={tours} alt="Image" className={style.image + ' ' + style.tours} />
            </div>
          </div>
        </div>
        <div className={style.container_tour_details}>
          <div style={{maxWidth:'600px', margin: 'auto auto'}}>
            <p>We will be travelling ahead of the wedding and spending some days at the beach after. So consider staying a little longer to relax on the beach and play, surf, do the things that one does at the beach.</p>
            <p>Ecuador’s huge diversity is determined by its topography. Not only in terms of how the flora and fauna have evolved but also how Ecuadorians distinguish themselves the most.</p>
            <p>Ecuador has three very distinct regions: the flat lands of the “Costa” for coast region, the “Sierra” for the Andes mountain range —that splits the country from north to south-, and the “Oriente” for the Amazon region. There are also the Galapagos islands, but that’s a completely different thing. Overall, there are a lot of large spaces where nature is overpowering. That is Ecuador’s best appeal.</p>
            <p>The tours are roughly based on 10 days of travel ahead of the wedding.</p>
            <p>Two suggestions: they all require travel by car or bus. The trips involve a mix of Andes and Amazon region and end in Olón for the wedding, which lies on the coast.</p>
          </div>
          <div className={style.content}>
            <div className={style.left_container + ' ' + style.left_container_50} style={{paddingRight: '40px'}}>
              <h3>Quito-Andes-Amazon-Guayaquil-Olón</h3>
              <p><strong>Note:</strong> we recommend renting a car only when you leave Quito, otherwise you must consider that the city has a traffic control system that allows only certain plate numbers to circulate depending on the day of the week.</p>
              <p><strong>Taxi contact:</strong> Santiago Reynoso +593&nbsp;96&nbsp;798&nbsp;8913 – (recommended by Enrico), Uber works quite well there (according to a local).</p>
              <ol>
                <li>
                  <h5><a target="_blank" href="https://storyteller.travel/quito-ecuador-facts/">Quito</a> (Andes) old town</h5>
                  <p>One of Latin America’s best preserved. The plaza grande is surrounded by churches and palaces, including the <a target="_blank" href="https://en.wikipedia.org/wiki/Carondelet_Palace">Carondelet Palace</a> (seat of government). There are also multiple reminders of the grim colonial past, and times of dictatorship, i.e.: at Carondelet there is a <a target="_blank" href="https://es.wikipedia.org/wiki/Archivo:Palacio_de_Carondelet_Placa_conmemorativa_Muerte_Garcia_Moreno.jpg">plaque</a> commemorating the savage murder of the conservative dictator Gabriel Garcia Moreno in 1873.</p>
                  <ul>
                    <li><strong>Must see:</strong> <a target="_blank" href="https://en.wikipedia.org/wiki/Church_of_la_Compa%C3%B1%C3%ADa_de_Jes%C3%BAs,_Quito">Compañía de Jesus</a>, San Francisco de Quito and Basílica del Voto National, <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g294308-d1774138-Reviews-Calle_La_Ronda-Quito_Pichincha_Province.html">la Ronda</a> street.</li>
                    <li>Museo: <a target="_blank" href="https://www.facebook.com/Capilla.del.Hombre/">Capilla del Hombre</a>/Casa Museo Guayasamín, painter Oswaldo Guayasamín. </li>
                    <li>Museo: <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g294308-d6965734-Reviews-Museo_Templo_del_Sol_Pintor_Ortega_Maila-Quito_Pichincha_Province.html">Templo del Sol</a>, painter Ortega Maila</li>
                    <li><a target="_blank" href="https://teleferico.com.ec/">Teleférico</a> to visit the Ruco Pichincha, Guagua Pichincha volcanoes and have an amazing view of the city at 4000m. (Ruco means old and Guagua means baby in Kichwa/Quechua). </li>
                    <li>Restaurant recommendations thanks to <strong>“La Fer a.k.a la Maldi”</strong>: <a target="_blank" href="https://www.plazagrandequito.com/cafe-plaza-grande">Café Hotel Plaza Grande</a> (order the helado de paila for a <a target="_blank" href="https://www.google.com/search?q=cucurucho+quito">cucurucho</a> surprise); <a target="_blank" href="https://zerdoquito.com/simple-menu/">Zerdo</a> (everything pork); <a target="_blank" href="http://ppbotella.ec/">PP Botellas</a> for live music; <a target="_blank" href="https://www.cafemosaicoecuador.com/">Cafe Mosaico</a> for a great view of Quito (better to reserve in advance). For the Italians already missing their food, <a target="_blank" href="https://almercato.com.ec/">Al Mercato</a> (in Quito’s fancy Cumbaya area) might be an option. </li>
                  </ul>
                </li>
                <li>
                  <h5>Quilotoa</h5>
                  <p>One of the most amazing volcano lagoons you can visit in Ecuador (see the photo). You might also want to check the <a target="_blank" href="https://goo.gl/maps/NZ14kFvSC7gEriqu7">Mirador de Cristal</a></p>
                   <img src={quilotoa} alt="Image" className={style.image + ' ' + style.quilotoa + ' ' + style.mobile_img} />
                </li>
                <li>
                  <h5>Cotopaxi volcano (5,897m)</h5>
                  <p>Second highest in the country and truly beautiful. We recommend staying at Hacienda los Mortiños if you want to wake up surrounded by an amazing view of beautiful volcanoes.</p>
                </li>
                <li>
                  <h5>Baños (Tungurahua)</h5>
                  <p>This is an adventurers’ town with lots of sporting options to check out. The waterfalls trail is truly worth it. Don’t miss the Pailón del diablo waterfall and Machay waterfall.</p>
                </li>
                <li>
                  <h5>Puyo (Amazon)</h5>
                  <p>If you leave in the early morning to the <a target="_blank" href="https://www.facebook.com/Mirador-Indichuris-235081186615798">Indichuris mirador</a> and <a target="_blank" href="https://www.google.com/maps/dir/-1.5987688,-77.9080059/Cascada+Hola+Vida,+V%C3%ADa+a+Macas,+desv%C3%ADo+a+la+derecha+sector+Nuevo+Mundo,+Puyo,+Ecuador/@-1.6350626,-77.8976234,13.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x91d17f401dba32eb:0x8943011e3a0e9727!2m2!1d-77.9014315!2d-1.6287053!3e0">Hola Vida</a> waterfall (these two have to be contacted via Facebook or WhatsApp, an indigenous member of the community will guide you), you can stop in Puyo for an early afternoon lunch and headout again.</p>
                  <p><strong>Note:</strong> It’s a long way to Guayaquil and really far from Olón. If you have enough time maybe stop at Chimborazo volcano (6,263m, closest point from earth to the sun). </p>
                  <img src={road} alt="Image" className={style.image + ' ' + style.road + ' ' + style.mobile_img} />
                </li>
                <li>
                  <h5>Guayaquil (Coast)</h5>
                  <p>The rio Guayas crosses the city, making it very humid and in February it’s going to be very hot. We recommend staying in the city overnight, and hopefully you can meet us for a dinner on the side of the river on 25 February evening at a <a target="_blank" href="https://www.hoteldelparquehistorico.com/dining/">historic restaurant</a>.</p>
                  <p>Recommended areas to stay: find an Airbnb in Puerto Santa Ana for a great location and view. <a target="_blank" href="https://www.booking.com/hotel/ec/casadelaspena.en-gb.html?aid=1288233;label=metagha-link-LUCH-hotel-4092846_dev-desktop_los-1_bw-26_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-var_p_aud-1046869798_gacid-6623582131_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20211228_lp-1002992_r-17243707171206824354;sid=58f2abae9931452522b10b78cc3cb1b8;all_sr_blocks=409284603_337796365_2_1_0;checkin=2021-12-28;checkout=2021-12-29;dest_id=-927505;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=0;highlighted_blocks=409284603_337796365_2_1_0;hpos=0;matching_block_id=409284603_337796365_2_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A,A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=409284603_337796365_2_1_0__7259;srepoch=1638478717;srpvid=bf32937ee2ec0004;type=total;ucfs=1&#hotelTmpl">Hotel las Peñas B&B</a>, <a target="_blank" href="https://www.booking.com/hotel/ec/puerto-pacifico-guayaquil.en-gb.html?label=metagha-link-LUCH-hotel-4092846_dev-desktop_los-1_bw-26_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-var_p_aud-1046869798_gacid-6623582131_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20211228_lp-1002992_r-17243707171206824354&sid=58f2abae9931452522b10b78cc3cb1b8&utm_source=metagha&utm_medium=localuniversal&utm_term=hotel-4092846&utm_content=dev-desktop_los-1_bw-26_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-var_p_aud-1046869798_gacid-6623582131_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20211228&utm_campaign=CH&gclid=Cj0KCQiA-qGNBhD3ARIsAO_o7ymkrSDQzvA9aFEqaOkvllXnTstNBVHGKZefOwHOu7SAf5d78GFaeT0aAvLDEALw_wcB&aid=1288233&ucfs=1&arphpl=1&checkin=2021-12-28&checkout=2021-12-29&dest_id=-927505&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=popularity&srpvid=38d97c8e72b101e9&srepoch=1638466974&all_sr_blocks=687825001_279467551_2_1_0&highlighted_blocks=687825001_279467551_2_1_0&matching_block_id=687825001_279467551_2_1_0&sr_pri_blocks=687825001_279467551_2_1_0__9000&from=searchresults#hotelTmpl">Hotel Puerto Pacifico</a>, and Samborondón area for Airbnb (near my family’s place) or the hotel <a target="_blank" href="https://www.ebookers.ch/Hotel-Search?selected=4609918&startDate=2021-12-28&endDate=2021-12-29&adults=2&children=&langid=en&langid=2057&MDPCID=EBOOKERS-CH.META.GOOGLE.CORESEARCH-desktop.HOTEL&MDPDTL=HTL.4609918.20211228.20211229.DDT.26.CID.8764119072.AUDID..localuniversal&mctc=10&exp_curr=CHF&exp_dp=130.59&exp_tx=15.23&gclid=Cj0KCQiA-qGNBhD3ARIsAO_o7ykg5NeMwRSQYq9D6mhGFKiXxku_86P4IT_4i5EDZcTrL1DBRoJ19CgaAiOgEALw_wcB">Orilla del Rio</a>.</p>
                  <p>
                    <strong>Taxi:</strong> Ivan car +593&nbsp;99&nbsp;706&nbsp;8126; +593&nbsp;4-371-1800.<br />
                    <strong>Visit:</strong><a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g303845-d317918-Reviews-Parque_Historico_Guayaquil-Guayaquil_Guayas_Province.html">Parque histórico</a>, Malecón Simón Bolivar, Parque Seminario (iguanas park), Barrio de las Peñas.<br />
                    <strong>Restaurants:</strong> <a target="_blank" href="https://www.tripadvisor.com/Restaurant_Review-g303845-d15295693-Reviews-Mercado_del_Rio-Guayaquil_Guayas_Province.html">Mercado del Rio</a>, Calle Panamá and Calle Junín crossing - some nice <a target="_blank" href="https://quenoticias.com/comunidad/restaurantes-calle-panama-guayaquil/">restaurants</a> like the <a target="_blank" href="https://www.instagram.com/lamedialuna.ec/?hl=en">Media Luna</a> for empanadas, great fruit juice at <a target="_blank" href="https://www.google.com/maps/place/Frutabar/@-2.1886356,-79.8789464,18.72z/data=!4m12!1m6!3m5!1s0x0:0x7a18790331c47f89!2sLa+Cevicher%C3%ADa+Guayaca!8m2!3d-2.1750885!4d-79.9054692!3m4!1s0x902d6dd596bfd46b:0xaf6638ebb8bc2ab3!8m2!3d-2.187987!4d-79.8782172>">Frutabar</a>, <a target="_blank" href="https://www.google.com/maps/place/La+Cevicher%C3%ADa+Guayaca+Samborond%C3%B3n/@-2.1413028,-79.866892,19.37z/data=!4m12!1m6!3m5!1s0x0:0x7a18790331c47f89!2sLa+Cevicher%C3%ADa+Guayaca!8m2!3d-2.1750885!4d-79.9054692!3m4!1s0x902d6dc7c27816b3:0xa19fcb1ea3f0bc1c!8m2!3d-2.1408431!4d-79.8668984">Cevicheria Guayaca</a>. For some great plantain bolón head for <a target="_blank" href="https://www.google.com/maps/place/Caf%C3%A9+de+Tere/@-2.1926577,-79.8799421,18.18z/data=!4m12!1m6!3m5!1s0x0:0x7a18790331c47f89!2sLa+Cevicher%C3%ADa+Guayaca!8m2!3d-2.1750885!4d-79.9054692!3m4!1s0x902d6e794bf68997:0xa7cd9a146a5ad3ce!8m2!3d-2.1930325!4d-79.8803713">Café de Tere</a>; nice for drinks in the night and good food <a target="_blank" href="https://www.facebook.com/lapaleta.enlasrocas/">La Paleta</a>.
                  </p>
                  <video width="100%" controls>
                    <source src={franci_explaining} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </li>
                <li>
                  <h5>Olón, ***Wedding location***</h5>
                  <p>It’s a former fishermen’s town, surrounded by similar towns with long beaches. Head to Montañita to take some surf lessons after our wedding, or head north to visit the reserves of <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g635729-d3229640-Reviews-Playa_de_los_Frailes-Machalilla_National_Park_Manabi_Province.html">Playa de los Frailes</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Isla_de_la_Plata">Isla de la Plata</a> a.k.a the Galapagos for the poor, a place where you can also spot the famous Blue footed booby, and <a target="_blank" href="https://www.comunidadaguablanca.com/">Agua Blanca</a> community tourism.</p>
                </li>
              </ol>
            </div>
            <div className={style.right_container + ' ' + style.right_container_50}>
              <img src={quilotoa} alt="Image" className={style.image + ' ' + style.quilotoa + ' ' + style.desktop_img} />
              <br />
              <br />
              <img src={road} alt="Image" className={style.image + ' ' + style.road + ' ' + style.desktop_img} />
            </div>
          </div>
          <div className={style.clearfix}></div>
          <div className={style.content}>
            <div className={style.right_container + ' ' + style.left_container_50}>
              <img src={mitad} alt="Image" className={style.image + ' ' + style.mitad + ' ' + style.desktop_img} />
              <br />
              <br />
              <img src={amazon} alt="Image" className={style.image + ' ' + style.amazon + ' ' + style.desktop_img} />
            </div>
            <div className={style.left_container + ' ' + style.right_container_50} style={{paddingLeft: '40px'}}>
              <h3>Quito-Equator line-Otavalo-Amazon</h3>
              <p>This tour has a longer Amazon stay.</p>
              <p><strong>Note:</strong> we recommend renting a car only when you leave Quito, otherwise you must consider that the city has a traffic control system that allows only certain cars to circulate depending on the day of the week and plaque number.</p>
              <p><strong>Taxi contact:</strong> Santiago Reynoso +593&nbsp;96&nbsp;798&nbsp;8913 – (recommended by Enrico), Uber works quite well there (According to a local).</p>
              <ol>
                <li>
                  <h5><a target="_blank" href="https://storyteller.travel/quito-ecuador-facts/">Quito</a> (Andes) old town</h5>
                  <p>One of Latin America’s best preserved. The plaza grande is surrounded by churches and palaces, including the <a target="_blank" href="https://en.wikipedia.org/wiki/Carondelet_Palace">Carondelet Palace</a> (seat of government). There are also multiple reminders of the grim colonial past, and times of dictatorship, i.e.: at Carondelet there is a <a target="_blank" href="https://es.wikipedia.org/wiki/Archivo:Palacio_de_Carondelet_Placa_conmemorativa_Muerte_Garcia_Moreno.jpg">plaque</a> commemorating the savage murder of the conservative dictator Gabriel Garcia Moreno in 1873.</p>
                  <ul>
                    <li><strong>Must see:</strong> <a target="_blank" href="https://en.wikipedia.org/wiki/Church_of_la_Compa%C3%B1%C3%ADa_de_Jes%C3%BAs,_Quito">Compañía de Jesus</a>, San Francisco de Quito and Basílica del Voto National, <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g294308-d1774138-Reviews-Calle_La_Ronda-Quito_Pichincha_Province.html">la Ronda</a> street.</li>
                    <li>Museo: <a target="_blank" href="https://www.facebook.com/Capilla.del.Hombre/">Capilla del Hombre</a>/Casa Museo Guayasamín, painter Oswaldo Guayasamín. </li>
                    <li>Museo: <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g294308-d6965734-Reviews-Museo_Templo_del_Sol_Pintor_Ortega_Maila-Quito_Pichincha_Province.html">Templo del Sol</a>, painter Ortega Maila</li>
                    <li><a target="_blank" href="https://teleferico.com.ec/">Teleférico</a> to visit the Ruco Pichincha, Guagua Pichincha volcanoes and have an amazing view of the city at 4000m. (Ruco means old and Guagua means baby in Kichwa/Quechua). </li>
                    <li>Restaurant recommendations thanks to <strong>“La Fer a.k.a la Maldi”</strong>: <a target="_blank" href="https://www.plazagrandequito.com/cafe-plaza-grande">Café Hotel Plaza Grande</a> (order the helado de paila for a <a target="_blank" href="https://www.google.com/search?q=cucurucho+quito">cucurucho</a> surprise); <a target="_blank" href="https://zerdoquito.com/simple-menu/">Zerdo</a> (everything pork); <a target="_blank" href="http://ppbotella.ec/">PP Botellas</a> for live music; <a target="_blank" href="https://www.cafemosaicoecuador.com/">Cafe Mosaico</a> for a great view of Quito (better to reserve in advance). For the Italians already missing their food, <a target="_blank" href="https://almercato.com.ec/">Al Mercato</a> (in Quito’s fancy Cumbaya area) might be an option.</li>
                  </ul>
                </li>
                <li>
                  <h5><a target="_blank" href="http://www.mitaddelmundo.gob.ec/es/">Mitad del Mundo</a></h5>
                  <p>It’s quite a particular thing to visit, but you’re in Ecuador in the end (can be done in a couple of hours from Quito).</p>
                  <img src={mitad} alt="Image" className={style.image + ' ' + style.mitad + ' ' + style.mobile_img} />
                </li>
                <li>
                  <h5>Otavalo</h5>
                  <p>Home to the Otavalo indigenous people, north of Quito passing through the inactive Imbabura volcano. The town has a large market (best on weekends) for ponchos, clothing and lots of handicraft.</p>
                </li>
                <li>
                  <h5><a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g297518-d315621-Reviews-Laguna_Cuicocha-Cotacachi_Imbabura_Province.html">Cuicocha lagoon</a></h5>
                  <p>The “guinea-pigs lake” is quite an amazing location, you can rent a boat or go for an almost 12km long hike around it.</p>
                </li>
                <li>
                  <h5>Cayambe volcano (5,790m)</h5>
                  <p>60 km north-east of Quito, it’s the third largest in Ecuador and the only volcano that sits on the equator.</p>
                </li>
                <li>
                  <h5>Quito flight to Coca and trip to the Yasuni National park in Napo</h5>
                  <p>This is an expensive trip but it means accessing one of the most remote areas in the entire Amazon rainforest. It is often compared to visiting the Galapagos and one of the areas with the greatest biodiversity on the planet. You can organise a tour with the <a target="_blank" href="https://www.napowildlifecenter.com/location/">Napo Wildlife</a>, <a target="_blank" href="https://www.sachalodge.com/the-lodge/">Sachalodge</a> or <a target="_blank" href="https://www.laselvajunglelodge.com/?gclid=Cj0KCQiA-qGNBhD3ARIsAO_o7yk1klAk_NK21S2-ZmeR8XRDHR-om2VXBpky6rHUgMVsP2JUemefNNcaAl5HEALw_wcB">La Selva Amazon EcoLodge</a> to travel from Quito to Coca. You would be received there and taken on canoes to the lodges in the middle of the rainforest and go on day tours.</p>
                  <img src={amazon} alt="Image" className={style.image + ' ' + style.amazon + ' ' + style.mobile_img} />
                </li>
                <li>
                  <h5>Flight Quito to Guayaquil</h5>
                  <p>Recommended to save time.</p>
                </li>
                <li>
                  <h5>Guayaquil (Coast)</h5>
                  <p>The rio Guayas crosses the city, making it very humid and in February it’s going to be very hot. We recommend staying in the city overnight, and hopefully you can meet us for a dinner on the side of the river on 25 February evening at a <a target="_blank" href="https://www.hoteldelparquehistorico.com/dining/">historic restaurant</a>.</p>
                  <p>Recommended areas to stay: find an Airbnb in Puerto Santa Ana for a great location and view. <a target="_blank" href="https://www.booking.com/hotel/ec/casadelaspena.en-gb.html?aid=1288233;label=metagha-link-LUCH-hotel-4092846_dev-desktop_los-1_bw-26_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-var_p_aud-1046869798_gacid-6623582131_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20211228_lp-1002992_r-17243707171206824354;sid=58f2abae9931452522b10b78cc3cb1b8;all_sr_blocks=409284603_337796365_2_1_0;checkin=2021-12-28;checkout=2021-12-29;dest_id=-927505;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=0;highlighted_blocks=409284603_337796365_2_1_0;hpos=0;matching_block_id=409284603_337796365_2_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A,A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=409284603_337796365_2_1_0__7259;srepoch=1638478717;srpvid=bf32937ee2ec0004;type=total;ucfs=1&#hotelTmpl">Hotel las Peñas B&B</a>, <a target="_blank" href="https://www.booking.com/hotel/ec/puerto-pacifico-guayaquil.en-gb.html?label=metagha-link-LUCH-hotel-4092846_dev-desktop_los-1_bw-26_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-var_p_aud-1046869798_gacid-6623582131_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20211228_lp-1002992_r-17243707171206824354&sid=58f2abae9931452522b10b78cc3cb1b8&utm_source=metagha&utm_medium=localuniversal&utm_term=hotel-4092846&utm_content=dev-desktop_los-1_bw-26_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-var_p_aud-1046869798_gacid-6623582131_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20211228&utm_campaign=CH&gclid=Cj0KCQiA-qGNBhD3ARIsAO_o7ymkrSDQzvA9aFEqaOkvllXnTstNBVHGKZefOwHOu7SAf5d78GFaeT0aAvLDEALw_wcB&aid=1288233&ucfs=1&arphpl=1&checkin=2021-12-28&checkout=2021-12-29&dest_id=-927505&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=popularity&srpvid=38d97c8e72b101e9&srepoch=1638466974&all_sr_blocks=687825001_279467551_2_1_0&highlighted_blocks=687825001_279467551_2_1_0&matching_block_id=687825001_279467551_2_1_0&sr_pri_blocks=687825001_279467551_2_1_0__9000&from=searchresults#hotelTmpl">Hotel Puerto Pacifico</a>, and Samborondón area for Airbnb (near my family’s place) or the hotel <a target="_blank" href="https://www.ebookers.ch/Hotel-Search?selected=4609918&startDate=2021-12-28&endDate=2021-12-29&adults=2&children=&langid=en&langid=2057&MDPCID=EBOOKERS-CH.META.GOOGLE.CORESEARCH-desktop.HOTEL&MDPDTL=HTL.4609918.20211228.20211229.DDT.26.CID.8764119072.AUDID..localuniversal&mctc=10&exp_curr=CHF&exp_dp=130.59&exp_tx=15.23&gclid=Cj0KCQiA-qGNBhD3ARIsAO_o7ykg5NeMwRSQYq9D6mhGFKiXxku_86P4IT_4i5EDZcTrL1DBRoJ19CgaAiOgEALw_wcB">Orilla del Rio</a>.</p>
                  <p>
                    <strong>Taxi:</strong> Ivan car +593&nbsp;99&nbsp;706&nbsp;8126; +593&nbsp;4-371-1800.<br />
                    <strong>Visit:</strong><a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g303845-d317918-Reviews-Parque_Historico_Guayaquil-Guayaquil_Guayas_Province.html">Parque histórico</a>, Malecón Simón Bolivar, Parque Seminario (iguanas park), Barrio de las Peñas.<br />
                    <strong>Restaurants:</strong> <a target="_blank" href="https://www.tripadvisor.com/Restaurant_Review-g303845-d15295693-Reviews-Mercado_del_Rio-Guayaquil_Guayas_Province.html">Mercado del Rio</a>, Calle Panamá and Calle Junín crossing - some nice <a target="_blank" href="https://quenoticias.com/comunidad/restaurantes-calle-panama-guayaquil/">restaurants</a> like the <a target="_blank" href="https://www.instagram.com/lamedialuna.ec/?hl=en">Media Luna</a> for empanadas, great fruit juice at <a target="_blank" href="https://www.google.com/maps/place/Frutabar/@-2.1886356,-79.8789464,18.72z/data=!4m12!1m6!3m5!1s0x0:0x7a18790331c47f89!2sLa+Cevicher%C3%ADa+Guayaca!8m2!3d-2.1750885!4d-79.9054692!3m4!1s0x902d6dd596bfd46b:0xaf6638ebb8bc2ab3!8m2!3d-2.187987!4d-79.8782172>">Frutabar</a>, <a target="_blank" href="https://www.google.com/maps/place/La+Cevicher%C3%ADa+Guayaca+Samborond%C3%B3n/@-2.1413028,-79.866892,19.37z/data=!4m12!1m6!3m5!1s0x0:0x7a18790331c47f89!2sLa+Cevicher%C3%ADa+Guayaca!8m2!3d-2.1750885!4d-79.9054692!3m4!1s0x902d6dc7c27816b3:0xa19fcb1ea3f0bc1c!8m2!3d-2.1408431!4d-79.8668984">Cevicheria Guayaca</a>. For some great plantain bolón head for <a target="_blank" href="https://www.google.com/maps/place/Caf%C3%A9+de+Tere/@-2.1926577,-79.8799421,18.18z/data=!4m12!1m6!3m5!1s0x0:0x7a18790331c47f89!2sLa+Cevicher%C3%ADa+Guayaca!8m2!3d-2.1750885!4d-79.9054692!3m4!1s0x902d6e794bf68997:0xa7cd9a146a5ad3ce!8m2!3d-2.1930325!4d-79.8803713">Café de Tere</a>; nice for drinks in the night and good food <a target="_blank" href="https://www.facebook.com/lapaleta.enlasrocas/">La Paleta</a>.
                  </p>
                </li>
                <li>
                  <h5>Olón, ***Wedding location***</h5>
                  <p>It’s a former fishermen’s town, surrounded by similar towns with long beaches. Head to Montañita to take some surf lessons after our wedding, or head north to visit the reserves of <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g635729-d3229640-Reviews-Playa_de_los_Frailes-Machalilla_National_Park_Manabi_Province.html">Playa de los Frailes</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Isla_de_la_Plata">Isla de la Plata</a> a.k.a the Galapagos for the poor, a place where you can also spot the famous Blue footed booby, and <a target="_blank" href="https://www.comunidadaguablanca.com/">Agua Blanca</a> community tourism.</p>
                </li>
              </ol>
            </div>
            <img src={beach} alt="Image" className={style.image + ' ' + style.beach} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;