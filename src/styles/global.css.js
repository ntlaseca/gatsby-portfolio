import { createGlobalStyle } from "styled-components";
import { accent, textColor, bgColor } from "constants/theme";
import MEDIA from "helpers/mediaTemplates";

import InterWoff from "fonts/Inter.woff"
import InterWoff2 from "fonts/Inter.woff2"
import InterTtf from "fonts/Inter.ttf"
import InterSvg from "fonts/Inter.svg"

import RedactionEot from "fonts/Redaction-Regular.eot"
import RedactionWoff from "fonts/Redaction-Regular.woff"
import RedactionWoff2 from "fonts/Redaction-Regular.woff2"
import RedactionTtf from "fonts/Redaction-Regular.ttf"
import RedactionSvg from "fonts/Redaction-Regular.svg"

import RedactionItalicEot from "fonts/Redaction-Italic.eot"
import RedactionItalicWoff from "fonts/Redaction-Italic.woff"
import RedactionItalicWoff2 from "fonts/Redaction-Italic.woff2"
import RedactionItalicTtf from "fonts/Redaction-Italic.ttf"
import RedactionItalicSvg from "fonts/Redaction-Italic.svg"

import RedactionBoldEot from "fonts/Redaction-Bold.eot"
import RedactionBoldWoff from "fonts/Redaction-Bold.woff"
import RedactionBoldWoff2 from "fonts/Redaction-Bold.woff2"
import RedactionBoldTtf from "fonts/Redaction-Bold.ttf"
import RedactionBoldSvg from "fonts/Redaction-Bold.svg"

export default createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    src: local(''),
      url(${InterWoff2}) from('woff2'),
      url(${InterWoff}) from('woff'),
      url(${InterTtf}) format('truetype'),
      url(${InterSvg}#Inter) format('svg');   
    font-display: auto;
  }

  @font-face {
    font-family: 'Redaction';
    font-style: normal;
    font-weight: 400;
    src: url(${RedactionEot});
    src: local(''),
      url(${RedactionEot}?#iefix) format('embedded-opentype'),
      url(${RedactionWoff2}) format('woff2'),
      url(${RedactionWoff}) format('woff'),
      url(${RedactionTtf}) format('truetype'),
      url(${RedactionSvg}#Redaction) format('svg');
    font-display: auto;
  }

  @font-face {
    font-family: 'Redaction';
    font-style: italic;
    font-weight: 400;
    src: url(${RedactionItalicEot});
    src: local(''),
      url(${RedactionItalicEot}?#iefix) format('embedded-opentype'), 
      url(${RedactionItalicWoff2}) format('woff2'),
      url(${RedactionItalicWoff}) format('woff'),
      url(${RedactionItalicTtf}) format('truetype'),
      url(${RedactionItalicSvg}#Redaction) format('svg');
    font-display: auto;
  }

  @font-face {
    font-family: 'Redaction';
    font-style: normal;
    font-weight: 700;
    src: url(${RedactionBoldEot});
    src: local(''),
      url(${RedactionBoldEot}?#iefix) format('embedded-opentype'),
      url(${RedactionBoldWoff2}) format('woff2'),
      url(${RedactionBoldWoff}) format('woff'),
      url(${RedactionBoldTtf}) format('truetype'),
      url(${RedactionBoldSvg}#Redaction) format('svg');
    font-display: auto;
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
    text-rendering: auto;
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
    font-weight: 600;
    font-variation-settings: 'wght' 600, 'wdth' 100;
    cursor: url('../cursors/cursor_link_min.svg') 22 22, pointer;
    text-decoration: underline;
    word-break: break-word;
    hyphens: auto;
    transition: all 200ms ease;

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
    font-family: inherit;
    font-size: 2.8rem;
    font-variation-settings: 'wght' 400, 'wdth' 100;
    line-height: 1.5em;

    ${MEDIA.DESKTOP`
      font-size: 2.4rem;
    `}

    ${MEDIA.TABLET`
      font-size: 2rem;
    `}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Redaction', Garamond, Times New Roman, serif;
    font-weight: 400;
    word-break: break-word;
    hyphens: auto;
    margin-top: 0;
    letter-spacing: -.02em;
  }

  h1 {
    font-size: 8.4rem;
    line-height: 1em;
    font-variation-settings: 'wght' 700;

    ${MEDIA.DESKTOP`
      font-size: 7.2rem;
    `}

    ${MEDIA.TABLET`
      font-size: 6rem;
    `}
  }

  h2 {
    font-size: 7rem;
    line-height: 1em;
    margin-bottom: 1em;

    ${MEDIA.DESKTOP`
      font-size: 5.6rem;
    `}

    ${MEDIA.TABLET`
      font-size: 4.2rem;
    `}
  }

  h3 {
    font-size: 5.4rem;
    line-height: 1em;
    margin-bottom: 1em;

    ${MEDIA.DESKTOP`
      font-size: 4.2rem;
    `}

    ${MEDIA.TABLET`
      font-size: 3rem;
    `}
  }

  h4 {
    font-size: 2.8rem;
    font-style: italic;
    margin-bottom: 0.2em;

    ${MEDIA.DESKTOP`
      font-size: 2.4rem;
    `}

    ${MEDIA.TABLET`
      font-size: 2rem;
    `}
  }

  ::selection, ::-moz-selection {
    color: white;
    background: ${accent};
  }

  canvas {
    outline: none;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
  }

  .mobileOnly {
    display: none;

    ${MEDIA.DESKTOP`
      display: block;
    `}
  }

  .desktopOnly {
    display: block;

    ${MEDIA.DESKTOP`
      display: none;
    `}
  }
`