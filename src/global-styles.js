import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Graphik";
  src: local('Graphik'), url("./assets/fonts/GraphikRegular.otf") format("truetype");
  font-weight: 400;
}


html, body{
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   font-size: 16px;
   padding:0px;
   margin:0px;
   font-family: 'Graphik' !imporatant; 
 }

h1, h2, h3, h4{
};
p{
  font-family: 'Graphik' !imporatant ; 
  font-family: 400;
 
}
/* a{
  font-family: 'Graphik' ; 
  font-family: 400;
 
} */

`