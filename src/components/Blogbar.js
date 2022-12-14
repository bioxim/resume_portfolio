import React from 'react'
import styled from 'styled-components';

export const Blogbar = ({ el }) => {

  let { name } = el.attributes

  return (
    <Navigation>
            <li className="nav-item"><a className="nav-link" href="/">{name}</a></li>
    </Navigation>
  )
}

const Navigation = styled.div`
    
    background-color: #fff!important;

    .text-center {
        text-align: center;
    }

    .nav-item a {
        text-decoration: none;
        font-weight: bold;
        color: #858589;
        padding: 0.575rem 1.125rem;
    }

    a:hover {
      color: #17161A!important;
    }


    .nav-item:active  {
      border-radius: 3.125rem;
      background-color: #e9ecef!important;
      padding-bottom: .1rem;
    }
`