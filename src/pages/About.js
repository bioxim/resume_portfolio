import React from 'react';
import styled from 'styled-components';
import profile from '../components/img/mxc-my-photo.jpg'


const About = () => {
    return (
      <>
        <Acerca>
        <section className="about section container-about full-lg-screen">
          <article className="text-lg-right">
              <aside className="text-center text-lg-right">
                  <h1>María Ximena Camino</h1>
                  <h5>IT Agronomist</h5>
              </aside>
              <p>I am an agronomist graduated in 2009.  Throughout these years I specialized myself in international trading of raw materials such as honey, corn and sunflower and the statistic analysis in these product's Market.</p>
              <p>At the same time, I have always being interested in programming, web development and data science, partly because the companies for whom I worked just then needed a main website, custom reports from big amount of information, traceability systems, among other requirements.</p>
              <div className="section text-center text-lg-left card-container">
                  <a className="btn btn__primary" href="assets/resume.pdf" target="_blank" rel="noopener">
                      My Resume
                  </a>
              </div>
          </article>
          <article className="section text-center card-container">
              <div className="card card0">
                <div className="border">
                  <h2 className="card-text">Xime</h2>
                </div>
              </div>
          </article>
          <article>
              <h2 class="text-center text-lg-left">My IT Skills</h2>
                <div className="cloud-container">
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Excel</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#PowerBI</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#CSS</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#HTML</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Javascript</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#React</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Python</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Figma</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#MongoDB</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#MySQL</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Wordpress</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Cloud</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Minery</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Blockchain</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Webpack</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Node.js</span>
                  </a>
                  <a href="/tags/mvp/">
                    <span className="tag tag-minimum-viable-product tag-lg">#Json</span>
                  </a>
                </div>
            </article>
        </section>
        </Acerca>
      </>
    );
  };
  
  export default About;

  const Acerca = styled.div`
    a {
      color: #509ee3;
      transition: all 0.5s ease-out;
      text-decoration: none;
    }
    
    h1 {
      margin: 0;
      font-size: 2rem;
    }

    h5 {
      margin: 0;
      font-size: 0.85rem;
    }

    img {
      max-width: 100%;
      height: auto;
    }
    
    p {
      line-height: 1.6;
    }

    .about > article {
      margin-bottom: 2rem;
    }

    .btn {
      width: 12rem;
      height: 3.5rem;
      border-radius: 1rem;
      box-shadow: $shadow;
      justify-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s ease;
    }

    .btn__primary {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      background: #293d4e;
      box-shadow: inset 0.2rem 0.2rem 1rem #1f3d5796, inset -0.2rem -0.2rem 1rem;
      color: #e4ebf5;
      &:hover {
        color: #fff;
      }
      &:active {
        box-shadow: inset 0.2rem 0.2rem 1rem #509ee3, inset -0.2rem -0.2rem 1rem;
      }
    }
    
    .container-about {
      margin-left: auto;
      margin-right: auto;
      max-width: 75rem;
    }

    .section {
      padding: 2rem 1rem;
    }

    .text-center {
      text-align: center;
    }

    /* Card de la foto de perfil */

    .border {
      height: 369px;
      width: 290px;
      background: transparent;
      border-radius: 10px;
      transition: border 1s;
      position: relative;
      &:hover {
        border: 1px solid white
      }    
    }

    .card {
      height: 379px;
      width: 300px;
      background: grey;
      border-radius: 10px;
      transition: background 0.8s;
      overflow: hidden;
      background: black;
      box-shadow: 0 70px 63px -60px #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .card-container {
      display: flex;
      justify-content: center;
    }

    .card0 {
      background: url(${profile}) center center no-repeat;
      background-size: 300px;
      filter: grayscale(1);
      &:hover {
        background: url(${profile}) left center no-repeat;
        background-size: 500px;
      }
    }

    .card-text {
      color: white;
      margin: 1.2rem;
      transition: opacity 1s;
      text-align: left;
      opacity: 0;
      height: 100%;
    }

    .card-text:hover {
      opacity: 1;
    }

    /* Cloud tags of my IT skills */

    .cloud-container {
      margin: 0;
      display: flex;
      min-height: 100vh;
      flex-wrap: wrap;
      align-content: flex-start;
    }

    .tag {
        display: inline-block;
        border-radius: 3px;
        padding: .2em .5em .3em;
        border-radius: 2px;
        background: #454e56;
        font-weight: 600;
        margin: .25em .1em
    }

    .tag-lg {
       font-size: 1.2em;
       border-radius: 4px;
    }

    .tag-minimum-viable-product {
      color: #fff;
      background-image: linear-gradient(90deg, #ff8901, #db1d5f);
      font-weight: 700;
    }

    @media(min-width: 1024px){
      
      .full-lg-screen {
        width: 100%;
        min-height: 100vh;
      }

      .about {
        display: grid;
        grid-template-columns: repeat(3, 30%);
        justify-content: space-between;
        align-content: center;
      }

      .text-lg-right {
        text-align: right;
      }

      .text-lg-left {
      text-align: left;
      }
    }
  `
