import React from 'react'
import styled from 'styled-components';

export const Blogbar = () => {
  return (
    <Navigation>
        <ul className="nav text-center">
            <li className="nav-item active"><a className="nav-link" href="/">All</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Crypto</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Programming</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Design</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Data Science</a></li>
        </ul>
    </Navigation>
  )
}

const Navigation = styled.div`
    
    background-color: #fff!important;

    .text-center {
        text-align: center;
    }

    .nav {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 3.75rem;
      padding: 0;
      /* font-size: 0.875rem; */
    }

    .nav-item a {
        text-decoration: none;
        font-weight: bold;
        color: #858589;
        padding: 0.575rem 1.125rem;
    }

    .nav-item a:hover {
      color: #17161A;
    }

    .nav-item.active a {
      color: #509ee3;
    }

    ul li.nav-item.active {
      border-radius: 3.125rem;
      background-color: #e9ecef;
    }
`