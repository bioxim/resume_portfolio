import React from 'react'

const PortfolioCard = ({ el }) => {

    let { title, tag, description, image, url } = el.attributes;
    
  return (
        
            <a href={`https://github/bioxim/${url}`} target="_blank" className="portfolio-main container" rel="noreferrer">
                <div class="portfolio-main-container">
                    <span>{tag}</span>
                    <img src={`http://localhost:1337${image.data.attributes.url}`} alt={title}/>
                </div>
                <div className="card-text">
                    <h2 className="card-text-title">{title}</h2>
                    <p>{description}</p>
                </div>        
            </a>
  )
}

export default PortfolioCard