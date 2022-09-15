import React from 'react'
import styled from 'styled-components'
import notes1 from '../components/img/notes-1.jpg'
import notes2 from '../components/img/notes-2.jpg'
import notes3 from '../components/img/notes-3.jpg'
import notes4 from '../components/img/notes-4.jpg'

const RelatedPosts = () => {
  return (
    <>
        <Related>
            <section className="notes section">
                <h2 className="section-title">Related Posts</h2>
                <div className="container">
                    <a href="/" target="_blank" rel="noopener noreferrer" className="notes-card notes-hover">
                        <div className="note-card">
                            <img src={notes1} alt="Note 1"/>
                            <aside className="notes-card-info">
                                <h4>Post Title # 1</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quidem minus impedit quibusdam ipsam et nobis nostrum illo, unde dolore quo perspiciatis. Tenetur sit expedita repellendus voluptate? Voluptate, sit eos!</p>
                                <h5>Jun 25, 2022</h5>
                            </aside>
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="notes-card notes-hover">
                        <div className="note-card">
                            <img src={notes2} alt="Note 2"/>
                            <aside className="notes-card-info">
                                <h4>Post Title # 2</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quidem minus impedit quibusdam ipsam et nobis nostrum illo, unde dolore quo perspiciatis. Tenetur sit expedita repellendus voluptate? Voluptate, sit eos!</p>
                                <h5>Jun 30, 2022</h5>
                            </aside>
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="notes-card notes-hover">
                        <div class="note-card">
                            <img src={notes3} alt="Note 3"/>
                            <aside className="notes-card-info">
                                <h4>Post Title # 3</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quidem minus impedit quibusdam ipsam et nobis nostrum illo, unde dolore quo perspiciatis. Tenetur sit expedita repellendus voluptate? Voluptate, sit eos!</p>
                                <h5>Aug 25, 2022</h5>
                            </aside>
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="notes-card notes-hover">
                        <div class="note-card">
                            <img src={notes4} alt="Note 4"/>
                            <aside className="notes-card-info">
                                <h4>Post Title # 4</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quidem minus impedit quibusdam ipsam et nobis nostrum illo, unde dolore quo perspiciatis. Tenetur sit expedita repellendus voluptate? Voluptate, sit eos!</p>
                                <h5>Nov 25, 2022</h5>
                            </aside>
                        </div>
                    </a>
                </div>
            </section>
        </Related>
        
    </>
  )
}

export default RelatedPosts

const Related = styled.div`

    a {
        color: #509ee3;
        text-decoration: none;
    }

    h4, h5 {
        margin: 0;
    }

    img {
        transition:all 0.4s ease-in-out;
    }

    img:hover {
        filter: contrast(1.5)
    }

    .container {
        margin-left: auto;
        margin-right: auto;
        max-width: var(--max-width);
    }

    .notes-card {
        text-decoration: none;
    }

    .notes-card > div {
        cursor: pointer;
        display: grid;
        grid-template-columns: repeat(2, 30% 70%);
        justify-content: space-between;
    }

    .note-card {
        padding-bottom: 1rem;
    }

    .note-card img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }

    .notes-card-info h4 {
        font-size: 1.1rem;
        padding-left: 1rem;
    }
    
    .notes-card-info h5 {
        font-size: 0.8rem;
        font-weight: 400;
        padding-left: 0.6rem;
        color: #666;
    }


    .notes-card-info p {
        display: none;
    }

    .section {
        padding: 2rem 1rem;
    }

    .section-title {
        border-top: thin solid #293d4e;
        border-bottom: thin solid #293d4e;
        margin: 2rem auto;
        padding: 0.5rem 1rem;
        /* width: 250px; */
        text-align: center;
        color: #333;
    }

    @media(min-width: 768px) {
    
        .notes-card-info p {
        display: inline-block;
        padding-left: 0.6rem;
        margin: 0;
        }

        @keyframes shake {
        10%,
        90% {
            transform: translate(-1px, 0);
        }
        
        20%,
        80% {
            transform: translate(2px, 0);
        }
        
        30%,
        50%,
        70% {
            transform: translate(-4px, 0);
        }
        
        40%,
        60% {
            transform: translate(4px, 0);
        }
        }

        .notes-hover:hover {
            animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
            transform: translate(0, 0);
        }

    }

    @media(min-width: 1024px) {
        .notes > .container {
            display: grid;
            grid-template-columns: repeat(2, 50%);  
        }
    }
`