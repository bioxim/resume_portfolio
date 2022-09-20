import React from 'react'
import styled from 'styled-components'

const Error404 = () => {
  return (
    <Error>
       <div>
            <h1>Error 404</h1>
            <h4>Not Found.</h4>
        </div> 
    </Error>
    
  )
}

export default Error404

const Error = styled.div`
    padding: 10rem 2rem;
`