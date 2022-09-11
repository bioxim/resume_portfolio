import React from 'react';
import styled from 'styled-components';
import HeroImage from '../components/img/hero-image-home.jpg';
import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
      <>
        <Main>
          <article className="hero-image area">
              <aside className="hero-image-opacity ">
              <ul className="circles">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
                  <div className="hero-image-content">
                      <div className="hero-image-title">
                          <div className="tagline text-left">Hi! My name is</div> 
                          Maria Ximena Camino
                          <div className="subtitle text-right">IT Agronomist</div>
                      </div>
                      <button className="btn animated">About me</button>
                  </div>
              </aside>
          </article>
        </Main>
        <About />
        <Contact />
      </>
    );
  };
  
  export default Home;

  const Main = styled.div`

    .btn {
      box-sizing: border-box;
      appearance: none;
      background-color: transparent;
      border: 2px solid #e74c3c;
      border-radius: 0.6em;
      color: #e74c3c;
      cursor: pointer;
      display: flex;
      align-self: center;
      font-size: 0.7rem;
      font-weight: 400;
      line-height: 1;
      margin: 20px;
      padding: 1.2em 2.8em;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      z-index: 1;

      &:hover,
      &:focus {
        color: #fff;
        outline: 0;
      }
    }

    .animated {
      border-color: #509ee3;
      color: #fff;
      box-shadow: 0 0 40px 40px #509ee3 inset, 0 0 0 0 #509ee3;
      transition: all .5s ease-in-out;
      
      &:hover {
        box-shadow: 0 0 10px 0 #509ee3 inset, 0 0 10px 4px #509ee3;
      }
    }
    
    .hero-image {
      background-image: url(${HeroImage});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }

    .hero-image-opacity {
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5);
    }
  
  .hero-image-title {
    font-size: 7.5vw;
    color: #fff;
    text-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.25);
  }

    .hero-image-content {
      display: flex;
      flex-direction: column;
  }

  .tagline {
    font-size: 5vw;
    width: 100%;
    font-weight: 200;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .subtitle {
    font-size: 4.5vw;
    width: 100%;
    font-weight: 200;
    font-style: italic;
    padding-bottom: 1rem;
  }

  @media(min-width: 768px){
      .btn {
        font-size: 1rem;
      }
  }

  /* Fondo */

  .hero-image.area{
    /* background: #4e54c8;   */
    /* background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);   */
    width: 100%;
    min-height:auto;
    z-index: -1000;
    }

    .circles{
        position: fixed;
        top: 4rem;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .circles li{
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
        
    }

    .circles li:nth-child(1){
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }


    .circles li:nth-child(2){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    .circles li:nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    .circles li:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    .circles li:nth-child(5){
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    .circles li:nth-child(6){
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    .circles li:nth-child(7){
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    .circles li:nth-child(8){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    .circles li:nth-child(9){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    .circles li:nth-child(10){
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }



    @keyframes animate {

        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100%{
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }

    }

  `
