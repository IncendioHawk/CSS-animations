import Animation from "./models/animationSchema.ts"
import mongoose from "mongoose"
import express from "express"
mongoose.connect("mongodb://127.0.0.1/animation")
const app = express()
app.use(express.json())
const PORT = 3141

async function fillDB(creator: string, title: string, html: string, css: string) {
  await new Animation({
    creator,
    title,
    html,
    css,
  }).save()
}

// await fillDB(
//   "Alberto Hartzet",
//   "Animated cube slider",
//   `<div class="title">
// <h1>Animated Cube Slider</h1>
// <p>CSS Only</p><br />
// <p class="small">best viewed in firefox</p>
// </div>
// <div class="slider">
// <div class="container">
//     <div class="slide x"></div>
//     <div class="slide y"></div>
//     <div class="slide z"></div>
// </div>
// <div class="shadow"></div>
// </div>
// <p class="credit">by <span><a href="http://www.albertohartzet.com" target="_blank">Alberto Hartzet</a></span></p>`,
//   `html, body {
// 	width: 100%;
// 	height: 100%;
// 	background: #FF0074;
// 	color: #fff;
// 	font-family: "Open Sans", sans-serif;
// 	font-size: 11px;
// 	}

// .title {
//   text-align: center;
//   margin: 40px;
// }

// 	.title h1, .title p {
// 	  margin: 0;
// 	}

// .slider {
// 	position: absolute;
// 	top: 0;
// 	bottom: 0;
// 	right: 0;
// 	left: 0;
// 	width: 200px;
// 	height: 200px;
//  	margin: auto;
// 	-webkit-perspective: 600px;
// 	        perspective: 600px;
// }

// 	.slider * {
// 		-webkit-transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
// 		        transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
// 	}

// 	.container {
// 		width: inherit;
// 		height: inherit;
// 		-webkit-transform-style: preserve-3d;
// 		        transform-style: preserve-3d;
// 		-webkit-transform: rotateY(0deg) rotateX(0deg);
// 		        transform: rotateY(0deg) rotateX(0deg);
// 	}

// 		.slide, .slide:after, .slide:before {
// 			display: block;
// 			width: inherit;
// 			height: inherit;
// 			background: url('https://cdn.dribbble.com/users/5031/screenshots/7008431/dribbble.png');
// 			position: absolute;
// 			-webkit-transform-style: preserve-3d;
// 			        transform-style: preserve-3d;
// 			background-size: cover;
// 			background-position: center;
// 		}

// 		.slide.x {
// 		  -webkit-transform: rotateY(90deg);
// 		          transform: rotateY(90deg);
// 		}

// 			.slide.x:after {
// 				content: '';
// 				background-image: url('https://cdn.dribbble.com/users/730703/screenshots/6988911/elenidebo-thisiscolossal-theroad-forchicagodesignmuseum.jpg');
// 				-webkit-transform: translateZ(100px) rotateZ(-90deg);
// 				        transform: translateZ(100px) rotateZ(-90deg);
// 			}

// 			.slide.x:before {
// 				content: '';
// 				background-image: url('https://cdn.dribbble.com/users/329207/screenshots/6220354/bemocs_geneseo_sailing.jpg');
// 				-webkit-transform: translateZ(-100px) rotateZ(-90deg);
// 				        transform: translateZ(-100px) rotateZ(-90deg);
// 			}

// 		.slide.y {
// 		  -webkit-transform: rotateX(90deg);
// 		          transform: rotateX(90deg);
// 		}

// 			.slide.y:after {
// 				content: '';
// 				background-image: url('https://cdn.dribbble.com/users/63407/screenshots/5705689/dribbble_moonlight_2x.png');
// 				-webkit-transform: translateZ(100px) scale(-1);
// 				        transform: translateZ(100px) scale(-1);
// 			}

// 			.slide.y:before {
// 				content: '';
// 				background-image: url('https://cdn.dribbble.com/users/1355613/screenshots/6441984/landscape_2x.jpg');
// 				-webkit-transform: translateZ(-100px);
// 				        transform: translateZ(-100px);
// 			}

// 		.slide.z {
// 		  -webkit-transform: rotateX(0);
// 		          transform: rotateX(0);
// 		}

// 			.slide.z:after {
// 				content: '';
// 				background-image: url('https://cdn.dribbble.com/users/3178178/screenshots/7013817/the_caravan_by_patryk_wojciechowicz_2x.png');
// 				-webkit-transform: translateZ(100px);
// 				        transform: translateZ(100px);
// 			}

// 			.slide.z:before {
// 				content: '';
// 				background-image: url('https://cdn.dribbble.com/users/1361661/screenshots/6673317/music_girl.png');
// 				-webkit-transform: translateZ(-100px);
// 				        transform: translateZ(-100px);
// 			}

// 		.container {
// 			-webkit-animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
// 			animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
// 		}

// 		@-webkit-keyframes rotate {
// 			0%, 10% {-webkit-transform: rotateY(0deg) rotateX(0deg);transform: rotateY(0deg) rotateX(0deg);}
// 			15%, 20% {-webkit-transform: rotateY(180deg) rotateX(0deg);transform: rotateY(180deg) rotateX(0deg);}
// 			25%, 35% {-webkit-transform: rotateY(180deg) rotateX(270deg);transform: rotateY(180deg) rotateX(270deg);}
// 			40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);transform: rotateY(180deg) rotateX(90deg);}
// 			55%, 65% {-webkit-transform: rotateY(-90deg) rotateX(90deg);transform: rotateY(-90deg) rotateX(90deg);}
// 			70%, 80% {-webkit-transform: rotateY(90deg) rotateX(90deg);transform: rotateY(90deg) rotateX(90deg);}
// 			90%, 95% {-webkit-transform: rotateY(0deg) rotateX(90deg);transform: rotateY(0deg) rotateX(90deg);}
// 		}

// 		@keyframes rotate {
// 			0%, 10% {-webkit-transform: rotateY(0deg) rotateX(0deg);transform: rotateY(0deg) rotateX(0deg);}
// 			15%, 20% {-webkit-transform: rotateY(180deg) rotateX(0deg);transform: rotateY(180deg) rotateX(0deg);}
// 			25%, 35% {-webkit-transform: rotateY(180deg) rotateX(270deg);transform: rotateY(180deg) rotateX(270deg);}
// 			40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);transform: rotateY(180deg) rotateX(90deg);}
// 			55%, 65% {-webkit-transform: rotateY(-90deg) rotateX(90deg);transform: rotateY(-90deg) rotateX(90deg);}
// 			70%, 80% {-webkit-transform: rotateY(90deg) rotateX(90deg);transform: rotateY(90deg) rotateX(90deg);}
// 			90%, 95% {-webkit-transform: rotateY(0deg) rotateX(90deg);transform: rotateY(0deg) rotateX(90deg);}
// 		}

// .shadow {
// 	display: block;
// 	width: 200px;
// 	height: 200px;
// 	background: rgba(0,0,0,0.75);
// 	position: absolute;
// 	top: 60%;
// 	-webkit-transform: rotateX(90deg);
// 	        transform: rotateX(90deg);
// 	z-index: -1;
// 	-webkit-filter: blur(20px);
// 	filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="20" /></filter></svg>#filter');
// 	-webkit-filter: blur(20px);
// 	        filter: blur(20px);
// 	left: 0;
// 	right: 0;
// 	margin: auto;
// 	-webkit-animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
// 	animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
// }

// 	@-webkit-keyframes rotateShadow {
// 		0%, 10% {-webkit-transform: rotateY(0deg) rotateX(90deg);}
// 		15%, 20% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
// 		20.1%, 20.9% {-webkit-transform: rotateY(180deg) rotateX(90deg) translatez(5px);}
// 		25%, 35% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
// 		35.1%, 35.9% {-webkit-transform: rotateY(180deg) rotateX(90deg) translatez(-5px);}
// 		40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
// 		55%, 65% {-webkit-transform: rotateY(0deg) rotateX(90deg);}
// 		70%, 80% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
// 		90%, 99% {-webkit-transform: rotateY(90deg) rotateX(90deg);}
// 		99.1%, 99.9% {-webkit-transform: rotateY(90deg) rotateX(90deg) translatez(-5px);}
// 	}

// 	/*@keyframes rotateShadow {
// 		0%, 10% {transform: rotateY(0deg) rotateX(90deg);}
// 		15%, 20% {transform: rotateY(180deg) rotateX(90deg); opacity: 1; filter: alpha(opacity=100);}
// 		20.1%, 20.9% {transform: rotateY(180deg) rotateX(90deg) translatez(10px); opacity: 0.95; filter: alpha(opacity=95);}
// 		25%, 35% {transform: rotateY(180deg) rotateX(90deg); opacity: 1; filter: alpha(opacity=100);}
// 		35.1%, 35.9% {transform: rotateY(180deg) rotateX(90deg) translatez(-10px); opacity: 0.95; filter: alpha(opacity=95);}
// 		40%, 50% {transform: rotateY(180deg) rotateX(90deg);}
// 		55%, 65% {transform: rotateY(0deg) rotateX(90deg);}
// 		70%, 80% {transform: rotateY(180deg) rotateX(90deg);}
// 		90%, 99% {transform: rotateY(0deg) rotateX(90deg);}
// 		99.1%, 99.9% {transform: rotateY(180deg) rotateX(90deg) translatez(5px); opacity: 0.95; filter: alpha(opacity=95);}
// 	}*/

// /*
// Credit */

// 	.credit {
// 		position: fixed;
// 		bottom: 22px;
// 		left: 0;
// 		right: 0;
// 		margin: auto;
// 		width: 200px;
// 		text-align: center;
// 	}

// 	.credit a {
// 		font-weight: 900;
// 		color: blue;
// 		text-decoration: none;
// 		-webkit-transition: all .15s linear;
// 		        transition: all .15s linear;
// 		background: url(https://dl.dropboxusercontent.com/u/12646264/assets/open-in-new-window-icon.png)no-repeat right;
// 		background-size: 12px;
// 		padding-right: 20px !important;
// 		-filter: invert(1);
// 		-webkit-filter: invert(1);
// 		-moz--filter: invert(1);
// 	-o--filter: invert(1);

// 	}

// 	.credit a:hover {
// 		color: tomato;
// 	}

// .small {
// 	font-size: smaller;
// 	opacity: .75;
// }`
// )

// await fillDB(
//   "Amit Sheen",
//   "Newton's CSS cradle",
//   `<div class="cradle">

// <div class="floor"></div>

// <div class="wood base">
//   <div class="left"></div>
//   <div class="right"></div>
//   <div class="front"></div>
//   <div class="back"></div>
//   <div class="top">
//     <div class="shadow"></div>
//     <div class="shadow"></div>
//     <div class="shadow"></div>
//     <div class="shadow"></div>
//     <div class="shadow"></div>
//   </div>
// </div>
// <div class="wood poll">
//   <div class="left"></div>
//   <div class="right"></div>
//   <div class="front"></div>
//   <div class="back"></div>
// </div>
// <div class="wood poll">
//   <div class="left"></div>
//   <div class="right"></div>
//   <div class="front"></div>
//   <div class="back"></div>
// </div>
// <div class="wood poll">
//   <div class="left"></div>
//   <div class="right"></div>
//   <div class="front"></div>
//   <div class="back"></div>
// </div>
// <div class="wood poll">
//   <div class="left"></div>
//   <div class="right"></div>
//   <div class="front"></div>
//   <div class="back"></div>
// </div>
// <div class="wood strecher">
//   <div class="left"></div>
//   <div class="right"></div>
//   <div class="front dots"></div>
//   <div class="back"></div>
//   <div class="top"></div>
// </div>
// <div class="wood strecher">
//   <div class="left"></div>
//   <div class="right"></div>
//   <div class="front"></div>
//   <div class="back dots"></div>
//   <div class="top"></div>
// </div>

// <div class="ballPlate">
//   <div class="ballWrapper">
//     <div class="ball"></div>
//   </div>
//   <div class="line"></div>
//   <div class="line"></div>
// </div>
// <div class="ballPlate">
//   <div class="ballWrapper">
//     <div class="ball"></div>
//   </div>
//   <div class="line"></div>
//   <div class="line"></div>
// </div>
// <div class="ballPlate">
//   <div class="ballWrapper">
//     <div class="ball"></div>
//   </div>
//   <div class="line"></div>
//   <div class="line"></div>
// </div>
// <div class="ballPlate">
//   <div class="ballWrapper">
//     <div class="ball"></div>
//   </div>
//   <div class="line"></div>
//   <div class="line"></div>
// </div>
// <div class="ballPlate">
//   <div class="ballWrapper">
//     <div class="ball"></div>
//   </div>
//   <div class="line"></div>
//   <div class="line"></div>
// </div>
// </div>`,
//   `*, *::before, *::after {
//   padding: 0;
//   margin: 0 auto;
//   box-sizing: border-box;
//   transform-style: preserve-3d;
// }
// body {
//   background-color: #111;
//   color: #fff;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 50px;
//   perspective: 800px;
//   perspective-origin: center calc(50% - 2.4em);
//   overflow: hidden;
// }
// .cradle {
//   position: relative;
//   animation: rotate 60s infinite linear;
// }
// @keyframes rotate {
//   to {
//     transform: rotateY(360deg);
//   }
// }
// .floor {
//   position: absolute;
//   width: 20em;
//   height: 20em;
//   background-color: #fff;
//   background-image: radial-gradient(#012a, #111 66%), url('https://assets.codepen.io/1948355/marble01.jpg');
//   background-size: 20em, 10em;
//   transform: translate(-50%, -50%) rotateX(90deg) translateZ(-3em);
// }
// .floor::after {
//   content: '';
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 8.5em;
//   height: 4.5em;
//   background-color: #000;
//   filter: blur(0.3em);
// }
// .wood {
//   --width: 0;
//   --height: 0;
//   --depth: 0;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: var(--width);
//   height: var(--height);
//   transform: translate(-50%, -50%);
// }
// .wood.base {
//   --width: 8em;
//   --height: 1em;
//   --depth: 4em;
//   transform: translate(-50%, calc(-50% + 2.5em));
// }
// .wood.poll {
//   --width: 0.25em;
//   --height: 3em;
//   --depth: 0.25em;
// }
// .wood.poll:nth-child(3) {
//   transform: translate3d(calc(-50% +  3.5em), calc(-50% + 0.5em), 1.5em);
// }
// .wood.poll:nth-child(4) {
//   transform: translate3d(calc(-50% +  3.5em), calc(-50% + 0.5em), -1.5em);
// }
// .wood.poll:nth-child(5) {
//   transform: translate3d(calc(-50% + -3.5em), calc(-50% + 0.5em), 1.5em);
// }
// .wood.poll:nth-child(6) {
//   transform: translate3d(calc(-50% + -3.5em), calc(-50% + 0.5em), -1.5em);
// }
// .wood.strecher {
//   --width: 8em;
//   --height: 0.25em;
//   --depth: 1em;
// }
// .wood.strecher:nth-child(7) {
//   transform: translate3d(-50%, calc(-50% - 1em), 1.5em);
// }
// .wood.strecher:nth-child(8) {
//   transform: translate3d(-50%, calc(-50% - 1em), -1.5em);
// }
// .wood.strecher .dots::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: radial-gradient(circle at 76% 50%, #777 0px, #7770 2px), radial-gradient(circle at 63% 50%, #777 0px, #7770 2px), radial-gradient(circle at 50% 50%, #777 0px, #7770 2px), radial-gradient(circle at 37% 50%, #777 0px, #7770 2px), radial-gradient(circle at 24% 50%, #777 0px, #7770 2px);
// }
// .wood > * {
//   position: absolute;
//   box-shadow: 0 0 1em #0007 inset;
//   background-size: 5em;
//   background-image: url('https://assets.codepen.io/1948355/wood04.png');
// }
// .wood > .top {
//   width: var(--width);
//   height: var(--depth);
//   transform: translateY(-50%) rotateX(90deg);
//   background-color: #6f463f;
// }
// .wood > .left {
//   width: var(--depth);
//   height: var(--height);
//   transform: translateX(-50%) rotateY(90deg);
//   background-color: #5f3c35;
// }
// .wood > .right {
//   width: var(--depth);
//   height: var(--height);
//   right: 0;
//   transform: translateX(50%) rotateY(90deg);
//   background-color: #1d1211;
// }
// .wood > .front {
//   width: var(--width);
//   height: var(--height);
//   transform: translateZ(calc(var(--depth) / 2));
//   background-color: #3E2723;
// }
// .wood > .back {
//   width: var(--width);
//   height: var(--height);
//   transform: translateZ(calc(var(--depth) / -2));
//   background-color: #3E2723;
// }
// .ballPlate {
//   position: absolute;
//   top: -1em;
//   width: 2em;
//   height: 3em;
//   transform: translate(-50%, 0%) rotateY(90deg);
//   transform-origin: top;
// }
// .ballPlate:nth-child(9) {
//   left: -2.05em;
//   animation: ballPlateStart 3s infinite;
// }
// .ballPlate:nth-child(9) .ballWrapper {
//   animation: ballWrapperStart 3s infinite;
// }
// .ballPlate:nth-child(9) .ball {
//   background-position-y: 0%;
// }
// .ballPlate:nth-child(10) {
//   left: -1.025em;
//   animation: ballPlateSwing 3s linear infinite;
// }
// .ballPlate:nth-child(10) .ballWrapper {
//   animation: ballWrapperSwing 3s linear infinite;
// }
// .ballPlate:nth-child(10) .ball {
//   background-position-y: 25%;
// }
// .ballPlate:nth-child(11) {
//   left: 0;
//   animation: ballPlateSwing 3s linear infinite;
// }
// .ballPlate:nth-child(11) .ballWrapper {
//   animation: ballWrapperSwing 3s linear infinite;
// }
// .ballPlate:nth-child(11) .ball {
//   background-position-y: 50%;
// }
// .ballPlate:nth-child(12) {
//   left: 1.025em;
//   animation: ballPlateSwing 3s linear infinite;
// }
// .ballPlate:nth-child(12) .ballWrapper {
//   animation: ballWrapperSwing 3s linear infinite;
// }
// .ballPlate:nth-child(12) .ball {
//   background-position-y: 75%;
// }
// .ballPlate:nth-child(13) {
//   left: 2.05em;
//   animation: ballPlateEnd 3s infinite;
// }
// .ballPlate:nth-child(13) .ballWrapper {
//   animation: ballWrapperEnd 3s infinite;
// }
// .ballPlate:nth-child(13) .ball {
//   background-position-y: 100%;
// }
// @keyframes ballPlateSwing {
//   0%, 100% {
//     transform: translate(-50%, 0%) rotateY(90deg) rotateX(5deg);
//   }
//   50% {
//     transform: translate(-50%, 0%) rotateY(90deg) rotateX(-5deg);
//   }
// }
// @keyframes ballPlateStart {
//   0%, 100% {
//     animation-timing-function: ease-out;
//     transform: translate(-50%, 0%) rotateY(90deg) rotateX(5deg);
//   }
//   50% {
//     animation-timing-function: ease-out;
//     transform: translate(-50%, 0%) rotateY(90deg) rotateX(-5deg);
//   }
//   75% {
//     animation-timing-function: ease-in;
//     transform: translate(-50%, 0%) rotateY(90deg) rotateX(-80deg);
//   }
// }
// @keyframes ballPlateEnd {
//   0%, 100% {
//     animation-timing-function: ease-out;
//     transform: translate(-50%, 0%) rotateY(90deg) rotateX(5deg);
//   }
//   25% {
//     animation-timing-function: ease-in;
//     transform: translate(-50%, 0%) rotateY(90deg) rotateX(80deg);
//   }
//   50% {
//     animation-timing-function: ease-out;
//     transform: translate(-50%, 0%) rotateY(90deg) rotateX(-5deg);
//   }
// }
// @keyframes ballWrapperSwing {
//   0%, 100% {
//     transform: rotateY(90deg) rotate(-5deg);
//   }
//   50% {
//     transform: rotateY(90deg) rotate(5deg);
//   }
// }
// @keyframes ballWrapperStart {
//   0%, 100% {
//     animation-timing-function: ease-out;
//     transform: rotateY(90deg) rotate(-5deg);
//   }
//   50% {
//     animation-timing-function: ease-out;
//     transform: rotateY(90deg) rotate(5deg);
//   }
//   75% {
//     animation-timing-function: ease-in;
//     transform: rotateY(90deg) rotate(80deg);
//   }
// }
// @keyframes ballWrapperEnd {
//   0%, 100% {
//     animation-timing-function: ease-out;
//     transform: rotateY(90deg) rotate(-5deg);
//   }
//   25% {
//     animation-timing-function: ease-in;
//     transform: rotateY(90deg) rotate(-80deg);
//   }
//   50% {
//     animation-timing-function: ease-out;
//     transform: rotateY(90deg) rotate(5deg);
//   }
// }
// .ballPlate .ballWrapper {
//   position: absolute;
//   bottom: 0.1em;
//   left: calc(50% - 0.5em);
//   width: 1em;
//   height: 1em;
// }
// .ballPlate .ball {
//   position: absolute;
//   width: 1em;
//   height: 1em;
//   background-color: #fff;
//   border-radius: 50%;
//   background-image: radial-gradient(circle at top, #fff, #678a, #000), url('https://assets.codepen.io/1948355/marble01.jpg');
//   background-size: 1em, 5em;
//   box-shadow: 0 0 10px #000a inset;
//   animation: backPos 120s infinite linear, rotate 60s infinite linear reverse;
// }
// @keyframes backPos {
//   from {
//     background-position-x: center, 5em;
//   }
//   to {
//     background-position-x: center, 0;
//   }
// }
// .ballPlate .line {
//   position: absolute;
//   top: 0;
//   width: 2px;
//   height: 2.15em;
//   background-color: #fff7;
//   transform-origin: top;
// }
// .ballPlate .line::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: #fff7;
//   transform: rotateY(90deg);
// }
// .ballPlate .line:nth-child(2) {
//   transform: translateX(-1px) rotate(-20deg);
// }
// .ballPlate .line:nth-child(3) {
//   right: 0;
//   transform: translateX(1px) rotate(20deg);
// }
// .shadow {
//   position: absolute;
//   top: 50%;
//   width: 3em;
//   height: 3em;
//   background-image: radial-gradient(#0006, #0000 50%);
// }
// .shadow:nth-child(1) {
//   animation: shadowSwing 3s ease-out infinite, shadowStart 3s ease-out infinite;
// }
// .shadow:nth-child(2) {
//   left: 2.975em;
//   animation: shadowSwing 3s linear infinite;
// }
// .shadow:nth-child(3) {
//   left: 4em;
//   animation: shadowSwing 3s linear infinite;
// }
// .shadow:nth-child(4) {
//   left: 5.025em;
//   animation: shadowSwing 3s linear infinite;
// }
// .shadow:nth-child(5) {
//   animation: shadowSwing 3s ease-out infinite, shadowEnd 3s ease-out infinite;
// }
// @keyframes shadowSwing {
//   0%, 100% {
//     transform: translate(-50%, -50%) rotateX(0deg) translateZ(0em) translateX(10px);
//   }
//   50% {
//     transform: translate(-50%, -50%) rotateX(0deg) translateZ(0em) translateX(-10px);
//   }
// }
// @keyframes shadowStart {
//   0%, 50%, 100% {
//     left: 1.95em;
//     opacity: 1;
//   }
//   75% {
//     left: 0;
//     opacity: -0.5;
//     animation-timing-function: ease-in;
//   }
// }
// @keyframes shadowEnd {
//   0%, 50%, 100% {
//     left: 6.05em;
//     opacity: 1;
//   }
//   25% {
//     left: 8em;
//     opacity: -0.5;
//     animation-timing-function: ease-in;
//   }
// }
// .twitterLink {
//   font-size: 24px;
// }
// `
// )

// await fillDB(
//   "Dead pixel",
//   "Submit button",
//   `<div class="cont">
// <button class="btn"><span>Submit</span><img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62"></button>
// </div>`,
//   `@-webkit-keyframes {
// }
// @-webkit-keyframes extend {
//     0% {
//         width: 600px;
//         height: 200px;
//         border-radius: 100px;
//         } 10% {
//         width: 610px;
//         height: 210px;
//         background: #fff;
//         margin-left: - 5px;
//         margin-top: - 5px;
//         } 20% {
//         width: 600px;
//         height: 200px;
//         background: #6fb07f;
//         margin-left: 0px;
//         margin-top: 0px;
//         } 100% {
//         width: 200px;
//         height: 200px;
//         border-radius: 100px;
//         margin-left: 190px;
//         background: #6fb07f;
//         }
//     }
// @keyframes extend {
//     0% {
//         width: 600px;
//         height: 200px;
//         border-radius: 100px;
//         } 10% {
//         width: 610px;
//         height: 210px;
//         background: #fff;
//         margin-left: - 5px;
//         margin-top: - 5px;
//         } 20% {
//         width: 600px;
//         height: 200px;
//         background: #6fb07f;
//         margin-left: 0px;
//         margin-top: 0px;
//         } 100% {
//         width: 200px;
//         height: 200px;
//         border-radius: 100px;
//         margin-left: 190px;
//         background: #6fb07f;
//         }
//     }
// @-webkit-keyframes {
// }
// @-webkit-keyframes disappear {
//     0% {
//         opacity: 1;
//         } 20% {
//         color: #fff;
//         } 100% {
//         opacity: 0;
//         }
//     }
// @keyframes disappear {
//     0% {
//         opacity: 1;
//         } 20% {
//         color: #fff;
//         } 100% {
//         opacity: 0;
//         }
//     }
// @-webkit-keyframes {
// }
// @-webkit-keyframes appear {
//     0% {
//         opacity: 0;
//         } 70% {
//         opacity: 0;
//         } 100% {
//         opacity: 1;
//         }
//     }
// @keyframes appear {
//     0% {
//         opacity: 0;
//         } 70% {
//         opacity: 0;
//         } 100% {
//         opacity: 1;
//         }
//     }
// html {
//     background: #fff
//     }

// input, button, submit {
//     border: none
//     }

// .cont {
//     position: absolute;
//     width: 610px;
//     height: 10px;
//     left: 50%;
//     top: 50%;
//     margin: -100px 0 0 -300px
//     }

// button {
//     border-width: 1px;
//     width: 600px;
//     height: 200px;
//     /*border-radius*/
//     border-radius: 100px;
//     background: #fff;
//     position: absolute;
//     border: 5px solid #6fb07f
//     }

// button > span {
//     font-size: 48px;
//     color: #6fb07f
//     }

// img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     margin: auto;
//     -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
//     filter: alpha(opacity=0);
//     opacity: 0
//     }

// button:focus {
//     /*animation*/
//     -webkit-animation: extend 1s ease-in-out;
//     -ms-animation: extend 1s ease-in-out;
//     animation: extend 1s ease-in-out;
//     -webkit-animation-fill-mode: forwards;
//     /* Chrome, Safari, Opera */
//     animation-fill-mode: forwards
//     }

// button:focus > span {
//     /*animation*/
//     -webkit-animation: disappear 1s ease-in-out;
//     -ms-animation: disappear 1s ease-in-out;
//     animation: disappear 1s ease-in-out;
//     -webkit-animation-fill-mode: forwards;
//     /* Chrome, Safari, Opera */
//     animation-fill-mode: forwards
//     }

// button:focus > img {
//     /*animation*/
//     -webkit-animation: appear 1s ease-in-out;
//     -ms-animation: appear 1s ease-in-out;
//     animation: appear 1s ease-in-out;
//     -webkit-animation-fill-mode: forwards;
//     /* Chrome, Safari, Opera */
//     animation-fill-mode: forwards
//     }`
// )

// await fillDB(
//   "Aliaksei Peterson",
//   "Dots loading",
//   `<div class="loader">
// <span class="loader__element"></span>
// <span class="loader__element"></span>
// <span class="loader__element"></span>
// </div>`,
//   `:root {
//   --main-color: #ecf0f1;
//   --point-color: #555;
//   --size: 5px;
// }

// .loader {
// 	background-color: var(--main-color);
// 	overflow: hidden;
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   top: 0; left: 0;
//   display: flex;
//   align-items: center;
//   align-content: center;
//   justify-content: center;
// 	z-index: 100000;
// }

// .loader__element {
//   border-radius: 100%;
//   border: var(--size) solid var(--point-color);
//   margin: calc(var(--size)*2);
// }

// .loader__element:nth-child(1) {
//   animation: preloader .6s ease-in-out alternate infinite;
// }
// .loader__element:nth-child(2) {
//   animation: preloader .6s ease-in-out alternate .2s infinite;
// }

// .loader__element:nth-child(3) {
//   animation: preloader .6s ease-in-out alternate .4s infinite;
// }

// @keyframes preloader {
//   100% { transform: scale(2); }
// }
// `
// )

// await fillDB(
//   "Jon Kantner",
//   "3d toggle switch",
//   `<div class="toggle-switch-container"><input class="pristine" type="checkbox" name="toggle" value="on"></div><script>document.getElementById("toggle-switch-container")
// document.addEventListener("click",e => {
// 	let tar = e.target;
// 	if (tar.name == "toggle")
// 		tar.removeAttribute("class")
// })</script>`,
//   `* {
// 	border: 0;
// 	box-sizing: border-box;
// 	margin: 0;
// 	padding: 0;
// }
// body, input {
// 	font: 80px/1.5 sans-serif;
// }
// body, input[type=checkbox]:before {
// 	background-image:
// 		linear-gradient(90deg,#f1f2f3 2px,#f1f2f300 2px),
// 		linear-gradient(#f1f2f3 2px,#fff 2px);
// 	background-repeat: repeat;
// 	background-size: 0.75em 0.375em;
// }
// body {
// 	background-position: 50% calc(50% + 0.2em);
// 	display: grid;
// 	place-items: center;
// 	height: 100vh;
// }
// input[type=checkbox] {
// 	--off: #c7cad1;
// 	--mid: #829ad6;
// 	--on: #255ff4;
// 	--transDur: 0.5s;
// 	--timing: cubic-bezier(0.6,0,0.4,1);
// 	animation: bgOff var(--transDur) var(--timing);
// 	background-color: var(--off);
// 	border-radius: 0.67em / 0.5em;
// 	box-shadow:
// 		0 0.05em 0.1em #00000007 inset,
// 		0 -0.25em 0.25em #0001 inset,
// 		0 -0.5em 0 #0001 inset,
// 		0 0.1em 0.1em #0001;
// 	cursor: pointer;
// 	position: relative;
// 	width: 2.25em;
// 	height: 1.5em;
// 	-webkit-appearance: none;
// 	appearance: none;
// 	-webkit-tap-highlight-color: transparent;
// }
// input[type=checkbox]:before {
// 	animation: handleOff var(--transDur) var(--timing);
// 	background-attachment: fixed;
// 	background-position: 50% calc(50% - 0.1875em);
// 	border-radius: 0.5em / 0.375em;
// 	box-shadow:
// 		0 0.175em 0.175em 0 #0001 inset,
// 		0 0.375em 0 #0002 inset,
// 		0 0.375em 0 var(--off) inset,
// 		0 0.475em 0.1em #0001 inset;
// 	content: "";
// 	display: block;
// 	position: absolute;
// 	top: 0.125em;
// 	left: 0.125em;
// 	width: 1em;
// 	height: 0.75em;
// }
// input[type=checkbox]:checked {
// 	animation: bgOn var(--transDur) var(--timing) forwards;
// }
// input[type=checkbox]:checked:before {
// 	animation: handleOn var(--transDur) var(--timing) forwards;
// }
// input[type=checkbox]:focus {
// 	outline: none;
// }
// input[type=checkbox].pristine, input[type=checkbox].pristine:before {
// 	animation: none;
// }
// /* Dark mode */
// @media (prefers-color-scheme: dark) {
// 	body, input[type=checkbox]:before {
// 		background-image:
// 			linear-gradient(90deg,#3a3d46 2px,#3a3d4600 2px),
// 			linear-gradient(#3a3d46 2px,#2e3138 2px);
// 	}
// 	input[type=checkbox] {
// 		--off: #5c6270;
// 		--mid: #3d5fb6;
// 	}
// }
// /* Animations */
// @keyframes bgOff {
// 	from {
// 		background-color: var(--on);
// 	}
// 	50% {
// 		background-color: var(--mid);
// 	}
// 	to {
// 		background-color: var(--off);
// 	}
// }
// @keyframes bgOn {
// 	from {
// 		background-color: var(--off);
// 	}
// 	50% {
// 		background-color: var(--mid);
// 	}
// 	to {
// 		background-color: var(--on);
// 	}
// }
// @keyframes handleOff {
// 	from {
// 		box-shadow:
// 			0 0.175em 0.175em 0 #0001 inset,
// 			0 0.375em 0 #0002 inset,
// 			0 0.375em 0 var(--on) inset,
// 			0 0.475em 0.1em #0001 inset;
// 		left: 1.125em;
// 		width: 1em;
// 	}
// 	50% {
// 		box-shadow:
// 			0 0.175em 0.175em 0 #0001 inset,
// 			0 0.375em 0 #0002 inset,
// 			0 0.375em 0 var(--mid) inset,
// 			0 0.475em 0.1em #0001 inset;
// 		left: 0.125em;
// 		width: 2em;
// 	}
// 	to {
// 		box-shadow:
// 			0 0.175em 0.175em 0 #0001 inset,
// 			0 0.375em 0 #0002 inset,
// 			0 0.375em 0 var(--off) inset,
// 			0 0.475em 0.1em #0001 inset;
// 		left: 0.125em;
// 		width: 1em;
// 	}
// }
// @keyframes handleOn {
// 	from {
// 		box-shadow:
// 			0 0.175em 0.175em 0 #0001 inset,
// 			0 0.375em 0 #0002 inset,
// 			0 0.375em 0 var(--off) inset,
// 			0 0.475em 0.1em #0001 inset;
// 		left: 0.125em;
// 		width: 1em;
// 	}
// 	50% {
// 		box-shadow:
// 			0 0.175em 0.175em 0 #0001 inset,
// 			0 0.375em 0 #0002 inset,
// 			0 0.375em 0 var(--mid) inset,
// 			0 0.475em 0.1em #0001 inset;
// 		left: 0.125em;
// 		width: 2em;
// 	}
// 	to {
// 		box-shadow:
// 			0 0.175em 0.175em 0 #0001 inset,
// 			0 0.375em 0 #0002 inset,
// 			0 0.375em 0 var(--on) inset,
// 			0 0.475em 0.1em #0001 inset;
// 		left: 1.125em;
// 		width: 1em;
// 	}
// }`
// )

app.post("/details/:id", async (req, res) => {
  const id = req.params.id
  res.send(await Animation.findById(id))
})

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  Array.from(await Animation.find()).forEach((i) => console.log({ title: i.title }))
})

export {}
