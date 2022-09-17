import React, { useState, useEffect } from 'react'
import { helpHttp } from "../helpers/helpHTTP"
import styled from 'styled-components'
import Loader from "./Loader";
import Message from "./Message";
import Portfolio from '../pages/Portfolio';



const CrudPortfolio = () => {

    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let url = "http://localhost:1337/api/portfolios?populate=*";

    useEffect(() => {
        setLoading(true);
        helpHttp()
          .get(url)
          .then((res) => {
            // console.log(res);
            if (!res.err) {
              setDb(res);
              setError(null);
            } else {
              setDb(null);
              setError(res);
            }
            setLoading(false);
          });
      }, [url]);

  return (
      <MainCrud>
          {loading && <Loader />}
            {error && (
            <Message
                msg={`Error ${error.status}: ${error.statusText}`}
                bgColor="#dc3545"
            />
            )}
            {db && (
            <Portfolio
                data={db}
            />
            )}
      </MainCrud>
  )
}

export default CrudPortfolio

const MainCrud = styled.div`
    padding-top: 5rem;
`