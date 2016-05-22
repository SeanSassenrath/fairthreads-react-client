<!-- @import "~foundation-sites/scss/foundation.scss";
// @import "./nav.scss";
@include foundation-everything; -->

$desktop-width: 1023px;

//To-Do - adjust min height for screens below 1023 to around 400px to untangle row columns
body {
  font-family: 'Open Sans', sans-serif;
}

h5 {
  font-size: .9em;
}


// #product-filter-container {
//   ul {
//     margin: .75em 1.25em;
//     li {
//       list-style: none;
//       // display: inline;
//       margin: 0 45px;
//       font-size: .9em;
//       text-transform: uppercase;
//     }
//   }
// }

.nav-active {
  color: white !important;
  opacity: .9 !important;
  font-weight: bold;
}

.filter-nav-active {
  border-bottom: 2px solid black;
  // opacity: .9 !important;
  // font-weight: bold;
}

select {
  width: 200px;
  background-color: black;
  color: white;
  border: none;
  font-size: .9em;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.loading {
  background-color: white;
  opacity: .05;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: gray;
  position: fixed;
  right: 47%;

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}

@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
// Product Card
//   .card-container {
//     width: 95%;
//     margin: 0 auto;
//     padding: 20px 0;
//   }
//
//   .img-container {
//     width: 89%;
//     border: 1px solid gray;
//     position: relative;
//     margin: 0 auto;
//   }
//
//   .img-container img {
//       width: 100%;
//       display: block;
//       margin: 0 auto;
//       object-fit: contain;
//   }
//
// .price {
//   background: "black";
//   opacity: .6;
//   color: white;
//   width: 30%;
//   text-align: right;
//   position: absolute;
//   bottom: 5%;
//   padding-right: 8px;
// }