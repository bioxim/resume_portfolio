import React from 'react';
import styled from 'styled-components';
import { Blogbar } from '../components/Blogbar';
import photo from '../components/img/notes-1.jpg';
import image from '../components/img/notes-2.jpg';
import RelatedPosts from '../components/RelatedPosts';


const Dashboard = () => {
    return (
      <>
        <Post>
          {/* Blog Header w title */}
          <article className="margin-none">
              <div className="header">
                <aside className="container-single-note">
                  <div>
                      <div className="subtitle-single-note">
                          Xime Camino
                          <span className="set-dot"></span>
                          Sep 05, 2022
                      </div>
                      <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                  </div>
                </aside>
              </div>
          </article>
          {/* Blog body */}
          <article className="container">
            <div>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates numquam exercitationem beatae excepturi quo harum, architecto voluptatem maxime. Voluptatum quod explicabo assumenda rerum expedita ullam eius consectetur tempora reprehenderit.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores cum tenetur explicabo culpa vitae soluta earum, illo adipisci quia expedita accusamus voluptatem, porro, debitis suscipit doloribus voluptas eius officia?</p>
                <p>Mollitia provident qui iure corrupti error tenetur officiis inventore consequatur exercitationem, modi voluptate, laborum nulla odit unde velit itaque dicta veniam eligendi! Commodi itaque maiores soluta voluptate, assumenda libero deleniti.</p>
                <p>Cumque possimus ut magni magnam nostrum omnis perspiciatis incidunt rerum corrupti tempora adipisci quisquam qui quo porro harum amet provident maxime voluptas quod libero odio, aspernatur non. Nulla, cumque! Maxime?</p>
            </div>
          </article>
          <article className="container portfolio-main">
            <div className="portfolio-main-container">
                <img src={image} alt="Trabajo 2"/>
            </div>
          </article> 
          <article className="container">
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, necessitatibus. Qui facilis officiis, eum pariatur repellendus minus natus asperiores nobis laboriosam exercitationem id odio ipsa officia temporibus? Suscipit, minus doloribus.</p>
                <p>Soluta, velit? Dignissimos debitis, soluta, repudiandae iure nam et facere, autem qui praesentium cum odit tempore a impedit! Magni quis similique id earum velit provident sunt quo mollitia suscipit omnis.</p>
                <p>Error reiciendis, ipsa animi quis temporibus laudantium molestias, deleniti beatae vitae iusto ea iure consectetur, mollitia aliquid pariatur et qui odit magnam ipsum tempore similique maiores eveniet cum! Quis, eum.</p>
                <p>Placeat pariatur ea dignissimos, quo quam in ducimus reiciendis eius eligendi odio magnam autem hic veritatis libero a praesentium quasi suscipit impedit aspernatur tempora fuga fugit deleniti! Explicabo, veniam. Necessitatibus.</p>
            </div>
          </article> 
          {/* Tags and social */}
          <article class="container">
            <hr/>
          </article>
          <article className="social-note-container padding-sides padding-sides-lg">
            <div>
                <span className="tag-title">Tags:</span>
                <a className="tag" href="/">Company</a>&nbsp;
                <a className="tag" href="/">Design</a>
                &nbsp;
                <a className="tag" href="/">Business</a>
            </div>
            <aside className="container">
                <hr/>
            </aside>
            <div>
                <ul className="nav">
                    <span className="tag-title">Share:</span>
                    <li className="nav-item"><a class="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" fill="none">
                                <path fill="currentColor" d="M5.15 2.158H6.3V.091C6.102.063 5.42 0 4.625 0 2.966 0 1.83 1.077 1.83 3.054v1.821H0v2.31h1.83V13h2.244V7.186H5.83l.28-2.311H4.073V3.283c0-.668.174-1.125 1.076-1.125Z"></path>
                            </svg></a></li>
                    <li className="nav-item"><a class="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="none">
                                <path fill="currentColor" d="M14.324 3.849c.01.13.01.262.01.393 0 3.991-3.155 8.59-8.922 8.59a9.11 9.11 0 0 1-4.814-1.355c.252.028.495.038.757.038a6.434 6.434 0 0 0 3.892-1.29c-1.378-.028-2.533-.898-2.931-2.094.194.028.388.046.592.046.281 0 .563-.037.825-.103C2.296 7.794 1.22 6.58 1.22 5.111v-.037a3.25 3.25 0 0 0 1.417.383c-.844-.542-1.398-1.468-1.398-2.515 0-.56.156-1.075.427-1.524C3.21 3.251 5.53 4.448 8.13 4.578a3.288 3.288 0 0 1-.077-.692c0-1.664 1.398-3.02 3.135-3.02.903 0 1.718.365 2.291.954a6.32 6.32 0 0 0 1.99-.729 3.035 3.035 0 0 1-1.378 1.664 6.477 6.477 0 0 0 1.805-.467 6.61 6.61 0 0 1-1.572 1.56Z"></path>
                            </svg></a></li>
                    <li className="nav-item"><a class="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" fill="none">
                                <path fill="currentColor" d="M5.844 0C2.904 0 0 1.919 0 5.024 0 6.998 1.134 8.12 1.822 8.12c.283 0 .447-.774.447-.992 0-.261-.68-.817-.68-1.902 0-2.256 1.754-3.854 4.023-3.854 1.95 0 3.394 1.085 3.394 3.08 0 1.489-.61 4.283-2.586 4.283-.714 0-1.324-.505-1.324-1.229 0-1.06.756-2.087.756-3.18 0-1.858-2.69-1.521-2.69.723 0 .471.06.993.276 1.422-.396 1.666-1.204 4.149-1.204 5.865 0 .53.078 1.052.13 1.582.097.107.048.096.197.043 1.444-1.936 1.392-2.315 2.045-4.848.353.657 1.264 1.01 1.985 1.01C9.634 10.123 11 7.22 11 4.603 11 1.818 8.542 0 5.844 0Z"></path>
                            </svg></a></li>
                </ul>
            </div>
          </article>
        </Post>
        <RelatedPosts />
        <Blogbar />
      </>
    );
  };
  
  export default Dashboard;

  const Post = styled.div`
    
    padding-top: 5rem;

    h1 {
      letter-spacing: .2rem;
      font-weight: 600;
      font-size: 1.6rem;
    }

    h4 {
      margin-bottom: 2rem;
      font-size: 1.375rem;
      line-height: 1.5;
    }

    hr {
      width: 100%;
      max-width: 45rem;
      background-color: transparent;
      border-top: 0.16rem solid #B1B1B4;
      opacity: 0.3;
      margin-top: 0;
      margin-bottom: 1.563rem;
    }

    p {
      line-height: 1.6;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 2.75rem;
      padding-top: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: calc(-1 * 0);
      margin-right: calc(-0.5 * .6rem);
      margin-left: calc(-0.5 * .6rem);
      color: #17161A;
      justify-content: center;
    }

    .container-single-note {
      display: flex;
      align-items: flex-end;
      height: 100%;
      max-width: 80%;
    }

    .header{
      position:relative;
      overflow:hidden;
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      height:40vw;
      min-height:300px;
      max-height:450px;
      min-width:300px;
      color:#eee;
    }

    .header:after{
      content:"";
      width:100%;
      height:100%;
      position:absolute;
      bottom:0;
      left:0;
      z-index:-1;
      background: linear-gradient(to bottom, rgba(0,0,0,0.12) 40%,rgba(27,32,48,1) 100%);
    }
  
    .header:before{
      content:"";
      width:100%;
      height:200%;
      position:absolute;
      top:0;
      left:0;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translateZ(0); backface-visibility: hidden;
      scale(1.0, 1.0);
        transform: translateZ(0);
      background:#1B2030 url(${photo}) 50% 0 no-repeat;
      background-size:cover;
      background-attachment:fixed;
      animation: grow 360s  linear 10ms infinite;
      transition:all 0.4s ease-in-out;
      z-index:-2
    }

    @keyframes grow{
      0% { transform: scale(1) translateY(0px)}
      50% { transform: scale(1.2) translateY(-400px)}
    }
    
    .margin-none{
      margin: 0;
    }

    .set-dot {
      display: inline-block;
      width: 3px;
      height: 3px;
      margin: 0 14px;
      vertical-align: middle;
      background-color: currentColor;
      border-radius: 50%;
    }

    .subtitle-single-note {
      font-size: .8rem;
      margin-bottom: 0.5rem;
    }

    /* Image */

    .portfolio-main:hover {
      opacity: 1;
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

    .portfolio-main-container {
      overflow: hidden;
      border-radius: 1.25rem;
    }

    /* Tags and Social */

    .nav {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: baseline;
      margin-bottom: 3.75rem;
      padding: 0;
    }

    .nav-item a {
        text-decoration: none;
        font-weight: bold;
        color: #858589;
        padding: 0.575rem 1.125rem;
        &:hover {
          color: #17161A;
        }
    }

    .social-note-container {
      padding-bottom: 3.75rem;
      margin-right: calc(-0.5 * 0.6rem);
      margin-left: calc(-0.5 * 0.6rem);
    }

    .padding-sides {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .tag-title {
      font-size: 1.5rem;
      font-weight: 200;
      letter-spacing: .1rem;
      margin-right: 1rem;
    }

    .tag {
      background: #eee;
      border-radius: 3px 0 0 3px;
      color: #999;
      display: inline-block;
      height: 26px;
      line-height: 26px;
      padding: 0 20px 0 23px;
      position: relative;
      margin: 0 10px 10px 0;
      text-decoration: none;
      -webkit-transition: color 0.2s;
    }

    .tag::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  .tag::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #eee;
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
  }

  .tag:hover {
    background-color: #501464;
    color: white;
  }

  .tag:hover::after {
    border-left-color: #501464; 
  }

    @media (min-width: 768px) {
      h1 {
        font-size: 2rem;
      }

      .container {
        padding-left: 8rem;
        padding-right: 8rem;
      }

      .subtitle-single-note {
        font-size: 1rem;
        margin-bottom: 0.938rem;
      }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }

    .container {
        padding-left: 12rem;
        padding-right: 12rem;
    }
    
    .padding-sides-lg {
      padding-left: 15rem;
      padding-right: 15rem;
    }
  }
  `
