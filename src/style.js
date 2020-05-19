import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
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
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1586658475721'); /* IE9 */
    src: url('./iconfont.eot?t=1586658475721#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAKsAAsAAAAABlgAAAJeAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcApogQEBNgIkAwgLBgAEIAWEbQcsG6MFyC6wbdiTbVKJEAJBZ58BHZAQD/+t/e6bHUwlimbREPH+CZUEsf3SOd1L2KO1NqiHMg1/T58wS68+e79/vjdY85Y0FWgvCUKCSLos4Jp0B5vDu8ibmBjXPp5c6cE9uKb+L7xA8nzhlhEcCTiw6UCjgka2kYx8w9gFL/A4gUajtgydHF2kYFJmjwvEi9TqMFnwyTJL1gu1DUuz+EB9ekufeI++H/82Y5KkpmCXnd8dtmDni5y04q68U2DwchawVRRYBjJx3Rg7NSIYeURjbNQkOFZx8KUsA4M4qlawv84ubAbDkPdMfE/wqIUJ5KR3CFifdB2prbnSH+6m9B60KQZn3dJ+YNCVNJ9n2VpxCS25wizq0/mxtLp6ML0kRxsrslr0a8Vi1S/Wahip/lLNhx2A0iyq6Vcg+O41Vl3Y+a9vyuDzfYk8pZkNc1C/U3vwc/gDW7IhtPUpa/xGRzI0aWxCo0aUgF2dfqaqeu4kFer13I+jzkgGhXrTaMYvQ40m21Cr3j40WnK8ukkXZUTkBix6BhDafUDSqgqFdl9oxn9DjV5/UKs9RqDRbXRt2WQ25PSxojpTCxu3KJu2JVwjT8fFCdIujbrKCyNKhpQngxgOhMrJY7JILTHDu9IizAKFsk08AqeRYdjoKLtDTQ60mZ14MCia3hRo2iZMO6aQOkZaUMMtJDXZLCLozqYrn08gmkuGOtVRUefMIIpH9o/CAkID0GOZNajiUV7xXNFEMCYgQbGZ0BEYRAwGG3KaB3WQJhbQnhBxxAWdTmKoLLC9wvyBXFaDrU7hZBfSdhgAAAAA') format('woff2'),
    url('./iconfont.woff?t=1586658475721') format('woff'),
    url('./iconfont.ttf?t=1586658475721') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1586658475721#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
`