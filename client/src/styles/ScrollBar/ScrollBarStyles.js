import { createGlobalStyle } from "styled-components";

const ScrollBarStyle = createGlobalStyle`
    ::-webkit-scrollbar{
        width: 12px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #333;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-track{
        background-color: #1c1c1c;
    }

    scrollbar-color: #333 #1c1c1c;
`

export default ScrollBarStyle;