import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Img from 'react-image-smooth-loading'

import view1 from './images/trees_mountain_view.JPG';
import view2 from './images/street_view.JPG';
import view3 from './images/beautiful_mountain_view.JPG';

import mamaAndPapa from './images/mama_and_papa.JPG';
import fedjaAndPapa from './images/fedja_and_papa.png';
import fedjaAndMama from './images/fedja_and_mama.JPG';
import birdy from './images/birdy.JPG';
import rotatedBirdy from './images/birdy_rotated.JPG';
import gatheringBerries from './images/gathering_berries.JPG';
import deer from './images/deer.JPG';
import gras from './images/beautiful_gras.JPG';
import reflection from './images/reflection.JPG';
import papaSitting from './images/papa_sitting.JPG';

import backgroundM from '../src/music/prekrsnoe_daleko.mp3';

var {SparkScroll, SparkProxy, sparkScrollFactory} =
  require('react-spark-scroll-gsap')({
    invalidateAutomatically: true
  });

Img.globalPlaceholder = '/images/street_view.JPG';



class App extends Component {
	
  render() {
	  return (
		  <div style={{
			  background: `fixed no-repeat url(${view2})`, 
			  backgroundSize: 'cover', 
			  height: '9000px', 
			  width: '100%'}}
		  >
			<img style={{width: '100%'}} src={mamaAndPapa} />
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}} style={{textAlign: 'center', marginTop: '2em', color: 'white', fontSize: '40px'}}>
				<h1>Папа!</h1>
			</SparkScroll.div>
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}}>
				<img style={{width: '100%', marginTop: '2em'}} src={fedjaAndPapa} />
			</SparkScroll.div>
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}} style={{textAlign: 'center', marginTop: '2em', fontWeight: '300', color: 'white', fontSize: '40px'}}>
				<h1>Мы оба тебя очень любим!!!</h1>
			</SparkScroll.div>
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}}>
				<img style={{width: '100%', marginTop: '2em'}} src={fedjaAndMama} />
			</SparkScroll.div>
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}} style={{textAlign: 'center', marginTop: '2em', color: 'white', fontSize: '40px'}}>
				<h1>Бывают дни, когда мы не находим взаимопонимания...</h1>
			</SparkScroll.div>
			<SparkProxy proxyId="scale-proxy" />
			<SparkScroll.div proxy="scale-proxy" timeline={{
            'topCenter-201': { scale: 0.01, opacity: 0},
            'topCenter-200': { scale: 0.01, opacity: 1 },
            'topCenter+70': { scale: 1, ease: 'bouncePast' }
          }}>
				<img style={{width: '50%', marginTop: '2em'}} src={birdy} />
				<img style={{width: '50%', marginTop: '2em'}} src={rotatedBirdy} />
			</SparkScroll.div>
			
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}} style={{textAlign: 'center', marginTop: '2em', color: 'white', fontSize: '40px'}}
			>
				<h1>И именно в эти дни мы должны держаться вместе и жить мирно!</h1>
			</SparkScroll.div>
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}} >
				<img style={{width: '100%', marginTop: '2em'}} src={gatheringBerries} />
			</SparkScroll.div>
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}}>
				<img style={{width: '100%', marginTop: '2em'}} src={deer} />
			</SparkScroll.div>
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}}>
				<img style={{width: '100%', marginTop: '2em'}} src={gras} />
			</SparkScroll.div>
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}} style={{textAlign: 'center', marginTop: '2em', color: 'white', fontSize: '40px'}}
			>
				<h1>Ведь мы команда и мы помогаем друг другу!</h1>
			</SparkScroll.div>
				<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}}>
				<embed style={{visibility: 'hidden', height: '0px', width: '0px'}} name="GoodEnough" src={backgroundM} loop="true" hidden autostart />
				<img style={{width: '100%', marginTop: '2em'}} src={reflection} />
			</SparkScroll.div>
			<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}} style={{textAlign: 'center', marginTop: '2em', color: 'white', fontSize: '40px'}}
			>
				<h1>С Днём Рожденья!!!</h1>
			</SparkScroll.div>
				<SparkScroll.div timeline={{
				  topBottom: {opacity: 0},
				  centerCenter: {opacity: 1}
				}}>
				<img style={{width: '100%', marginTop: '2em'}} src={papaSitting} />
			</SparkScroll.div>
		  </div>
	  )
  }
}

export default App;
