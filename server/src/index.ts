import Animation from "./models/animationSchema.ts"
import mongoose from "mongoose"
import express from "express"
mongoose.connect("mongodb://localhost:3141/animation")
const app = express()

const animatedCubeSlider = await Animation.create({
  creator: "Hrtzt",
  title: "Animated Cube Slider",
  html: `<div class="title">
  <h1>Animated Cube Slider</h1>
  <p>CSS Only</p><br />
  <p class="small">best viewed in firefox</p>
</div>
<div class="slider">
  <div class="container">
      <div class="slide x"></div>
      <div class="slide y"></div>
      <div class="slide z"></div>
  </div>
  <div class="shadow"></div>
</div>
<p class="credit">by <span><a href="http://www.albertohartzet.com" target="_blank">Alberto Hartzet</a></span></p>`,
  css: `html, body {
	width: 100%;
	height: 100%;
	background: #FF0074;
	color: #fff;
	font-family: "Open Sans", sans-serif;
	font-size: 11px;
	}

.title {
  text-align: center;
  margin: 40px;
}

	.title h1, .title p {
	  margin: 0;
	}

.slider {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 200px;
	height: 200px;
 	margin: auto;
	-webkit-perspective: 600px;
	        perspective: 600px;
}

	.slider * {
		-webkit-transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
		        transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
	}

	.container {
		width: inherit;
		height: inherit;
		-webkit-transform-style: preserve-3d;
		        transform-style: preserve-3d;
		-webkit-transform: rotateY(0deg) rotateX(0deg);
		        transform: rotateY(0deg) rotateX(0deg);
	}

		.slide, .slide:after, .slide:before {
			display: block;
			width: inherit;
			height: inherit;
			background: url('https://cdn.dribbble.com/users/5031/screenshots/7008431/dribbble.png');
			position: absolute;
			-webkit-transform-style: preserve-3d;
			        transform-style: preserve-3d;
			background-size: cover;
			background-position: center;
		}

		.slide.x {
		  -webkit-transform: rotateY(90deg);
		          transform: rotateY(90deg);
		} 

			.slide.x:after {
				content: '';
				background-image: url('https://cdn.dribbble.com/users/730703/screenshots/6988911/elenidebo-thisiscolossal-theroad-forchicagodesignmuseum.jpg');
				-webkit-transform: translateZ(100px) rotateZ(-90deg);
				        transform: translateZ(100px) rotateZ(-90deg);
			}

			.slide.x:before {
				content: '';
				background-image: url('https://cdn.dribbble.com/users/329207/screenshots/6220354/bemocs_geneseo_sailing.jpg');
				-webkit-transform: translateZ(-100px) rotateZ(-90deg);
				        transform: translateZ(-100px) rotateZ(-90deg);
			}

		.slide.y {
		  -webkit-transform: rotateX(90deg);
		          transform: rotateX(90deg);
		} 

			.slide.y:after {
				content: '';
				background-image: url('https://cdn.dribbble.com/users/63407/screenshots/5705689/dribbble_moonlight_2x.png');
				-webkit-transform: translateZ(100px) scale(-1);
				        transform: translateZ(100px) scale(-1);
			}

			.slide.y:before {
				content: '';
				background-image: url('https://cdn.dribbble.com/users/1355613/screenshots/6441984/landscape_2x.jpg');
				-webkit-transform: translateZ(-100px);
				        transform: translateZ(-100px);
			}

		.slide.z {
		  -webkit-transform: rotateX(0);
		          transform: rotateX(0);
		} 

			.slide.z:after {
				content: '';
				background-image: url('https://cdn.dribbble.com/users/3178178/screenshots/7013817/the_caravan_by_patryk_wojciechowicz_2x.png');
				-webkit-transform: translateZ(100px);
				        transform: translateZ(100px);
			}

			.slide.z:before {
				content: '';
				background-image: url('https://cdn.dribbble.com/users/1361661/screenshots/6673317/music_girl.png');
				-webkit-transform: translateZ(-100px);
				        transform: translateZ(-100px);
			}


		.container {
			-webkit-animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
			animation: rotate 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
		}

		@-webkit-keyframes rotate {
			0%, 10% {-webkit-transform: rotateY(0deg) rotateX(0deg);transform: rotateY(0deg) rotateX(0deg);}
			15%, 20% {-webkit-transform: rotateY(180deg) rotateX(0deg);transform: rotateY(180deg) rotateX(0deg);}
			25%, 35% {-webkit-transform: rotateY(180deg) rotateX(270deg);transform: rotateY(180deg) rotateX(270deg);}
			40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);transform: rotateY(180deg) rotateX(90deg);}
			55%, 65% {-webkit-transform: rotateY(-90deg) rotateX(90deg);transform: rotateY(-90deg) rotateX(90deg);}
			70%, 80% {-webkit-transform: rotateY(90deg) rotateX(90deg);transform: rotateY(90deg) rotateX(90deg);}
			90%, 95% {-webkit-transform: rotateY(0deg) rotateX(90deg);transform: rotateY(0deg) rotateX(90deg);}
		}

		@keyframes rotate {
			0%, 10% {-webkit-transform: rotateY(0deg) rotateX(0deg);transform: rotateY(0deg) rotateX(0deg);}
			15%, 20% {-webkit-transform: rotateY(180deg) rotateX(0deg);transform: rotateY(180deg) rotateX(0deg);}
			25%, 35% {-webkit-transform: rotateY(180deg) rotateX(270deg);transform: rotateY(180deg) rotateX(270deg);}
			40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);transform: rotateY(180deg) rotateX(90deg);}
			55%, 65% {-webkit-transform: rotateY(-90deg) rotateX(90deg);transform: rotateY(-90deg) rotateX(90deg);}
			70%, 80% {-webkit-transform: rotateY(90deg) rotateX(90deg);transform: rotateY(90deg) rotateX(90deg);}
			90%, 95% {-webkit-transform: rotateY(0deg) rotateX(90deg);transform: rotateY(0deg) rotateX(90deg);}
		}


.shadow {
	display: block;
	width: 200px;
	height: 200px;
	background: rgba(0,0,0,0.75);
	position: absolute;
	top: 60%;
	-webkit-transform: rotateX(90deg);
	        transform: rotateX(90deg);
	z-index: -1;
	-webkit-filter: blur(20px);
	filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="20" /></filter></svg>#filter');
	-webkit-filter: blur(20px);
	        filter: blur(20px);
	left: 0;
	right: 0;
	margin: auto;
	-webkit-animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
	animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
}

	@-webkit-keyframes rotateShadow {
		0%, 10% {-webkit-transform: rotateY(0deg) rotateX(90deg);}	
		15%, 20% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
		20.1%, 20.9% {-webkit-transform: rotateY(180deg) rotateX(90deg) translatez(5px);}
		25%, 35% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
		35.1%, 35.9% {-webkit-transform: rotateY(180deg) rotateX(90deg) translatez(-5px);}
		40%, 50% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
		55%, 65% {-webkit-transform: rotateY(0deg) rotateX(90deg);}
		70%, 80% {-webkit-transform: rotateY(180deg) rotateX(90deg);}
		90%, 99% {-webkit-transform: rotateY(90deg) rotateX(90deg);}
		99.1%, 99.9% {-webkit-transform: rotateY(90deg) rotateX(90deg) translatez(-5px);}
	}

	.credit {
		position: fixed;
		bottom: 22px;
		left: 0; 
		right: 0;
		margin: auto;
		width: 200px;
		text-align: center;
	}

	.credit a {
		font-weight: 900;
		color: blue;
		text-decoration: none;
		-webkit-transition: all .15s linear;
		        transition: all .15s linear;
		background: url(https://dl.dropboxusercontent.com/u/12646264/assets/open-in-new-window-icon.png)no-repeat right;
		background-size: 12px;
		padding-right: 20px !important;
		-filter: invert(1);
		-webkit-filter: invert(1);
		-moz--filter: invert(1);
	-o--filter: invert(1);

	}

	.credit a:hover {
		color: tomato;
	}

.small {
	font-size: smaller;
	opacity: .75;
}`,
})

app.post("/details/:id", async (req, res) => {
  const id = req.params.id
  res.send(await Animation.findById(id))
})

app.listen(3141, async () => {
  console.log(animatedCubeSlider)
})

export {}
