@import "../../styles/scss/animations.scss";

/*
 * keyframes for "Live easy."
 */

@include keyframes(floating-text) {
  0% {
    transform: translateY(.15em);
    text-shadow:0 0 .1em rgba(255,255,255,.6),
      0 0 .1em rgba(0,0,0,.1),
      0 .1em .2em rgba(0,0,0,.2);

  }
  100% {
    text-shadow:0 0 .4em rgba(255,255,255,.1),
      0 0 .3em rgba(0,0,0,.1),
      0 .3em .5em rgba(0,0,0,.1);
  }
}

.floating {
  font-family: 'Metropolis', sans-serif;
  font-weight: 700;
 	font-size: 12vw;
 	letter-spacing: -.025em;
 	color: #369AFF;
  padding-top: 1.5em;
 	padding-bottom: 1.2em;
 	margin-bottom: 0;
 	@include animation('floating-text 4s ease-in-out alternate infinite');
}