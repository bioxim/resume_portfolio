import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Blogbar } from '../components/Blogbar'
import Loader from '../components/Loader'
import Message from '../components/Message'
import BlogCard from './BlogCard'

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


const Blog = () => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:1337/api/categories`, { headers, method: 'GET' })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => { 
        setCategories(data)
        setLoading(false);  
      })
      .catch((error) => setError(error))
  }, [])

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:1337/api/posts?populate=*`, { headers, method: 'GET' })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => { 
        setPosts(data)
        setLoading(false);  
      })
      .catch((error) => setError(error))
  }, [])

  

    return (
      <>
        <Notes>
          <article className="header">
            <h1>Blog</h1>
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
            <ul className="nav text-center">
              {loading && <Loader />}
              {error && (
              <Message
                msg={`Error ${error.status}: ${error.statusText}`}
                bgColor="#dc3545"
              />
              )}   
              {categories.length > 0 ? (
                categories.map((el) => (
                  <Blogbar
                    key={el.id}
                    el={el}
                  />
                ))
              ) : (
                <section>
                  <h5>No Categories yet.</h5>
                </section>
              )}
            </ul>
            
              {loading && <Loader />}
                {error && (
                <Message
                  msg={`Error ${error.status}: ${error.statusText}`}
                  bgColor="#dc3545"
                />
                )}
              {posts.length > 0 ? (
                posts.map((el) => (
                  <BlogCard
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
            <a href="/" className="load-more">Load more</a>
          </article>
        </Notes>
      </>
    );
  };

  export default Blog;

  const Notes = styled.div`
    
    /* Header del Blog */

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

    /* Nav del blog */

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


    /* Body Blog */

    a, Link {
      font-size: 1.2rem;
    }

    img {
      max-width: 100%;
      height: auto;
    }
    
    p {
      line-height: 1.6;
    }

    .card-link {
      margin-top: 2.5rem;
      margin-bottom: 2.25rem;
    }

    .card-text {
      padding-top: 1rem;
      padding-left: 1rem;
      padding-bottom: 1.25rem;
      line-height: 1.4;
      color: #212529;
    }

    .card-text-title {
        margin-top: 1.188rem;
        margin-bottom: 2.188rem;
        font-weight: 700;
        text-transform: capitalize;
        font-size: 1.875rem;      
    }

    .container-fit {
      padding-top: 0!important;
      padding-left: 0!important;
      padding-right: 0!important;
    }

    .portfolio-big > div {
      background-color: #e9ecef;
      border-radius: 1.25rem;
      /* padding: 0.6rem; */
      margin-bottom: 2rem;
    }

    .portfolio-big > div:hover {
      background-color:#dee2e6;
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

  .portfolio-main-container {
    overflow: hidden;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
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

  a.portfolio-main, :Link.portfolio-main {
    text-decoration: none;
  }

  .portfolio-main img {
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out;
  }

  .portfolio-main img:hover {
    transform: scale(1.05);
    border: none;
  }

  .portfolio-main div:nth-child(2) {
    padding-right: 3.75rem;
  }

  .text-center {
    text-align: center;
  }

  @media screen and (min-width: 1024px) {

    .load-more {
        font-size: 1.75rem;
    }
    
    .portfolio-big div > .container {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        margin-top: 1rem;
        /* margin-left: 2rem; */
        margin-right: 2rem;
      }
    
      .portfolio-main-container {
          margin-right: 6.25rem;
          border-radius: 0;
          &:hover {
            border-radius: 0;
          }
      }

      .portfolio-main-container > img {
        border-radius: 0;
      }

  }

    .section {
      padding: 2rem 4rem;
    }
  `
