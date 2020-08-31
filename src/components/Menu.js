import React from 'react';
import {Layout} from './Layout';

import styled from 'styled-components'

const Styled = styled.div`

li{
    margin-bottom:1%;
}
h1{
    font-size: 50px;
}

`

export const Menu = () =>(
    <Layout>
    <Styled>
    <h1>Menu</h1>
    <h2>Sandwiches</h2>
    <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Etiam malesuada nunc nec mi tristique, vel mollis sem pharetra.</li>
        <li>Quisque sagittis lacus sit amet lacus vulputate consequat.</li>
        <li>Integer id leo in mi congue euismod.</li>
        <li>Etiam aliquet mi ac malesuada vehicula.</li>
        <li>Praesent pretium mi vel orci dignissim, euismod finibus nisi bibendum.</li> 
       
    </ul>
    <h2>Our Coffee</h2>
    <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Etiam malesuada nunc nec mi tristique, vel mollis sem pharetra.</li>
        <li>Quisque sagittis lacus sit amet lacus vulputate consequat.</li>
        <li>Integer id leo in mi congue euismod.</li>
        <li>Etiam aliquet mi ac malesuada vehicula.</li>
        <li>Praesent pretium mi vel orci dignissim, euismod finibus nisi bibendum.</li> 
       
    </ul>
    </Styled>
    </Layout>
)
