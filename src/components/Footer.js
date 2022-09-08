import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
      <>
        <Foot>
            <div>
                <small>Designed by <a href="https://ximecamino.tech">@ximecamino</a></small>
            </div>
        </Foot>
      </>
    );
  };
  
  export default Footer;

  const Foot = styled.div`
    margin-bottom: 4rem;
    padding: 0.5rem;
    text-align: center;
    color: #fff;
    background-color: #501464;
    
    a {
        color: #509ee3;
    }

    a:hover {
        opacity: 0.75;
    }

    @media screen and (min-width: 1024px) {
        margin-bottom: 0;
    }
  `