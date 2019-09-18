import React, {useEffect, useState} from 'react'
import "./Portfolio.scss"
import Deck from "../Deck"
import makeCancellablePromise from "../../utils/makeCancellablePromise";

const Portfolio = () => {
  // I decided to make stateless component, but then decided to add loading and
  // error display, so I added this cool state stuf for functional components
  const [isLoading,
    setIsLoading] = useState(false);
  const [isError,
    setIsError] = useState(false);
  const [data,
    setData] = useState([]);


  //plentry of hooks are replaced with it
  useEffect(() => {
    //this var is used by us so that we can cancel our promise
    let cancellableResponse;

    // function that is doing async call to fetch some url (in this case it will be
    // portfolio) also it will report if there is error and if it is loading or not
    const fetchData = async(url) => {
      //we're settings state to be loading
      setIsError(false);
      setIsLoading(true);

      //we fetch portfolio.json
      try {
        cancellableResponse = await makeCancellablePromise(fetch(url));
        cancellableResponse = await makeCancellablePromise(cancellableResponse.json());
        setData(cancellableResponse);
      } catch {setIsError(true);}
      setIsLoading(false);
    }

    fetchData('/portfolioassets/portfolio.json');

    // componentWillUnpmount we calcel our async call so that satte will not be
    // changed in fechData
    return (() => {
      cancellableResponse && cancellableResponse.cancel && cancellableResponse.cancel();
    });
  }, []);

  return (
    <div id="Portfolio">
      <Deck data={data}/>
    </div>
  );
}

export default Portfolio;