import React, { useState, useEffect} from 'react';
import Loader from '../components/Loader';
import Message from '../components/Message';
import styled from 'styled-components';
import PortfolioCard from './PortfolioCard';


const parseJSON = (resp) => (resp.json ? resp.json() : resp);

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then(resp => {
    throw resp;
  });
};

const headers = { 'Content-Type': 'application/json' };

const Portfolio = ({ data }) => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:1337/api/portfolios?populate=*`, { headers, method: 'GET' })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => { 
        setPortfolios(data)
        setLoading(false);  
      })
      .catch((error) => setError(error))
  }, [])

     return (
      <>
        <Portafolio>
          <article className="header">
              <h1>My <i>Github</i> Porfolio</h1>
              <div>
                <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
                </svg>
              </div>
          </article>
          <article className="section portfolio-big">
          {loading && <Loader />}
          {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
          )}   
          {portfolios.length > 0 ? (
            portfolios.map((el) => (
              <PortfolioCard
                key={el.id}
                el={el}
              />
            ))
          ) : (
            <section>
              <h5>No Data</h5>
            </section>
          )}
          </article> 
          <article className="section text-center">
              <a href={`https://github.com/bioxim`} target="_blank" className="load-more" rel="noreferrer">All repositories</a>
          </article> 
        </Portafolio>
      </>
    );
  };
  
  export default Portfolio;

  const Portafolio = styled.div`
    
    /* Header del portfolio */
    
    h1 {
      font-weight: 500;
      letter-spacing: .1rem;
      font-size: 2.7rem;
    }
    
    .header {
      padding-top: 6rem;
      position:relative;
      text-align:center;
      background: linear-gradient(to bottom right, #509ee3, #501464);
      color:white;
    }

    .waves {
      position:relative;
      width: 100%;
      height:15vh;
      margin-bottom:-7px; /*Fix for safari gap*/
      min-height:100px;
      max-height:150px;
    }

    .parallax > use {
      animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
    }
    .parallax > use:nth-child(1) {
      animation-delay: -2s;
      animation-duration: 7s;
    }
    .parallax > use:nth-child(2) {
      animation-delay: -3s;
      animation-duration: 10s;
    }
    .parallax > use:nth-child(3) {
      animation-delay: -4s;
      animation-duration: 13s;
    }
    .parallax > use:nth-child(4) {
      animation-delay: -5s;
      animation-duration: 20s;
    }

    @keyframes move-forever {
      0% {
      transform: translate3d(-90px,0,0);
      }
      100% { 
        transform: translate3d(85px,0,0);
      }
    }
    
    /*Shrinking for mobile*/
    @media (max-width: 768px) {
      .waves {
        height:40px;
        min-height:40px;
      }
      .content {
        height:30vh;
      }
      h1 {
        font-size:24px;
      }
    }

    /* Portfolio Body */

    .card-link {
      margin-top: 2.5rem;
      margin-bottom: 2.25rem;
    }

    .card-text {
      padding-top: 1rem;
      padding-bottom: 1.25rem;
      line-height: 1.4;
      color: #212529;
    }

    .card-text-title {
        margin-top: 1.188rem;
        margin-bottom: 2.188rem;
        font-weight: 700;
        text-transform: capitalize;
        font-size: 1.4rem;      
    }

    .load-more {
      color:#17161A;
      text-decoration: none;
      background-color: rgba(177, 177, 180, 0.3);
      border-radius: 50rem;
      padding: 0.938rem 2.5rem;
      font-weight: bold;
      transition: all 150ms linear;
      margin-bottom: 2rem;
    } 

    .load-more:hover, .load-more:active {
      color: #293d4e;
      background-color: #F5F5F7;
      opacity: 1;
      box-shadow: 0px 11px 28px 0px rgba(6, 6, 6, 0.634);;
    } 

    .section {
      padding: 2rem 1rem;
    }

    .portfolio-main-container {
      overflow: hidden;
      border-radius: 1.25rem;
    }

    .portfolio-main-container span {
        position: absolute;
        color: white;
        z-index: 1;
        font-size: 0.9rem;
        text-transform: uppercase;
        margin-top: 1.1rem;
        margin-left: 1.1rem;
        background-color: #17161A;
        padding-top: 0.375rem;
        padding-bottom: 0.375rem;
        padding-left: 0.563rem;
        padding-right: 0.563rem;
        border-radius: 1.25rem;
    }

    .portfolio-main:hover {
      opacity: 1;
    }

    a.portfolio-main {
      text-decoration: none;
    }

    .portfolio-main img {
      border-radius: 1.25rem;
      width: 100vw;
      height: auto;
      transition: all 0.5s ease-in-out;
      width: 100%;
      height: auto;
    }

    .portfolio-main img:hover {
      transform: scale(1.05);
    }

    .portfolio-main div:nth-child(2) {
      padding-right: 3.75rem;
  }

  .text-center {
    text-align: center;
  }


    /* Github load more button */

    @media (min-width: 1024px) {

      .load-more {
          font-size: 1.75rem;
      }

      .portfolio-big > .container {
          display: grid;
          grid-template-columns: repeat(2, 50%);
          margin-top: 1rem;
          margin-left: 2rem;
          margin-right: 2rem;
        }

        .portfolio-main-container {
            margin-right: 6.25rem;
        }
      
      }
  `
