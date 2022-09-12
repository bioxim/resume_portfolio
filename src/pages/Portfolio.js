import React from 'react';
import styled from 'styled-components';
import portfolio1 from '../components/img/portfolio-1.jpg';
import portfolio2 from '../components/img/portfolio-2.jpg';
import portfolio3 from '../components/img/portfolio-3.jpg';
import portfolio4 from '../components/img/portfolio-4.jpg';


const Portfolio = () => {
    return (
      <>
        <Portafolio>
          {/* Portfolio Header */}
          <article className="header">
              <h1>My <i>Github</i> Porfolio</h1>
              <div>
                <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
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
          {/* Portfolio Body */}
          <article className="section portfolio-big">
            <a href="#link-github-1" target="_blank" className="portfolio-main container">
                <div class="portfolio-main-container">
                    <span>Javascript</span>
                    <img src={portfolio1} alt="Trabajo 1"/>
                </div>
                <div className="card-text">
                  <h2 className="card-text-title">Portfolio title #1</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo officia nesciunt alias ipsexplicabo exercitationem est modi quis amet illo culpa ex, quae asperiores aliquam natus navoluptates cupiditate dignissimos!
                 </p>
                </div>
            </a>

            <a href="#link-github-2" target="_blank" class="portfolio-main container">
                <div className="portfolio-main-container">
                    <span>Blockchain</span>
                    <img src={portfolio2} alt="Trabajo 1"/>
                </div>
                <div className="card-text">
                  <h2 class="card-text-title">Portfolio title #2</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo officia nesciunt alias ipsexplicabo exercitationem est modi quis amet illo culpa ex, quae asperiores aliquam natus navoluptates cupiditate dignissimos!
                  </p>
                </div>
            </a>

            <a href="#link-github-3" target="_blank" class="portfolio-main container">
                <div class="portfolio-main-container">
                    <span>React</span>
                    <img src={portfolio3} alt="Trabajo 3"/>
                </div>
                <div class="card-text">
                  <h2 class="card-text-title">Portfolio title #3</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo officia nesciunt alias ipsexplicabo exercitationem est modi quis amet illo culpa ex, quae asperiores aliquam natus navoluptates cupiditate dignissimos!
                 </p>
                </div>
            </a>

            <a href="#link-github-4" target="_blank" class="portfolio-main container">
                <div class="portfolio-main-container">
                    <span>Python</span>
                    <img src={portfolio4} alt="Trabajo 4"/>
                </div>
                <div class="card-text">
                  <h2 class="card-text-title">Portfolio title #4</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo officia nesciunt alias ipsexplicabo exercitationem est modi quis amet illo culpa ex, quae asperiores aliquam natus navoluptates cupiditate dignissimos!
                 </p>
                </div>
            </a>
          </article>
          <article className="section text-center">
            <a href="/" className="load-more">Load more</a>
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
