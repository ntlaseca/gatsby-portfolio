import { createGlobalStyle } from "styled-components";
import { accent, textColor, bgColor } from "constants/theme";
import InterTtf from "fonts/inter[slnt,wght].ttf"
import InterWoff2 from "fonts/inter[slnt,wght].woff2"

export default createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    src: local(''),
      url(${InterWoff2}) from('woff2'),
      url(${InterTtf}) format('truetype');   
    font-display: swap;  
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.5;
    font-size: 1.6rem;
    color: ${textColor};
    background-color: ${bgColor};
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  section {
    position: relative;
    z-index: 3;
  }

  a {
    font-size: inherit;
    color: inherit;
    font-variation-settings: 'wght' 600, 'wdth' 100;
    cursor: url('../cursors/cursor_link_min.svg') 22 22, pointer;
    text-decoration: underline;
    word-break: break-word;
    hyphens: auto;

    &:hover {
      color: ${accent};
      text-decoration: none;
    }
    
    &:active {
      text-decoration: none;
    }

    &:focus-visible {
      color: ${accent};
      outline: 4px solid ${accent};
      outline-offset: .8rem;
      text-decoration: none;
    }
    
    & h3 {
      font-family: sans-serif;
    }
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: monospace;
  }

  video {
    max-width: 100%;
  }

  p, span {
    font-size: 2.8rem;
    font-variation-settings: 'wght' 400, 'wdth' 100;
    line-height: 1.5em;
  }

  h1 {
    font-size: 8.4rem;
    line-height: 1em;
    font-variation-settings: 'wght' 700;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: serif;
    font-weight: 400;
    word-break: break-word;
    hyphens: auto;
    margin-top: 0;
    letter-spacing: -.02em;
  }

  h2 {
    font-size: 7rem;
    line-height: 1em;
    margin-bottom: 1em;
  }

  h3 {
    font-size: 5.4rem;
    line-height: 1em;
    margin-bottom: 1em;
  }

  h4 {
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 0.2em;
  }

  ::selection, ::-moz-selection {
    color: white;
    background: ${accent};
  }

  canvas {
    outline: none;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
  }

  .small {
    font-size: 80%;
    margin-bottom: 0;
  }

  .light {
    color: rgba(34, 34, 34, 0.6);
    font-family: inherit;
  }
`