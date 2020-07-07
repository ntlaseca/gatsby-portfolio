@mixin transition($args...) {
  -webkit-transition: $args;
     -moz-­transition: $args;
      -ms-transition: $args;
       -o-transition: $args;
          transition: $args;
}

@mixin transform($args...) {
  -webkit-transform: $args;
     -moz-­transform: $args;
      -ms-transform: $args;
       -o-transform: $args;
          transform: $args;
}

@mixin animation($str) {
  -webkit-animation: #{$str};
 	   -moz-animation: #{$str};
 	    -ms-animation: #{$str};
 	     -o-animation: #{$str};
 	        animation: #{$str};
}
  
@mixin keyframes($name) {
  @-webkit-keyframes #{$name} {
    @content;
  }
  @-moz-keyframes #{$name} {
    @content;
  }  
  @-ms-keyframes #{$name} {
    @content;
  }
  @-o-keyframes #{$name} {
    @content;
  }  
  @keyframes #{$name} {
    @content;
  }
}

/*
 * Keyframes for text reveal animation
 */

@include keyframes(reveal) {
  0% {
    opacity: 0;
    @include transform(translateY(2rem))
  }
  100% {
    opacity: 1;
    @include transform(translateY(0))
  }
}

.slide-in {
  opacity: 0;
  @include animation('reveal 250ms cubic-bezier(0.2, 0, 0.6, 1) 1 normal forwards');
}

.animate-first {
  -webkit-animation-delay: 0;
     -moz-animation-delay: 0;
       -o-animation-delay: 0;
          animation-delay: 0;
}

.animate-second {
  -webkit-animation-delay: 250ms;
     -moz-animation-delay: 250ms;
       -o-animation-delay: 250ms;
          animation-delay: 250ms;
}

.animate-third {
  -webkit-animation-delay: 500ms;
     -moz-animation-delay: 500ms;
       -o-animation-delay: 500ms;
          animation-delay: 500ms;
}