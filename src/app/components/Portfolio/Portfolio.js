import React, {useEffect, useState} from 'react'
import "./Portfolio.scss"

const Portfolio = () => {
  // I decided to make stateless component, but then decided to add loading and
  // error display, so I added this cool state stuf for functional components
  const [isLoading,
    setIsLoading] = useState(false);
  const [isError,
    setIsError] = useState(false);
  const [data,
    setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      //we're settings state to be loading
      setIsError(false);
      setIsLoading(true);

      //we fetch portfolio.json
      try {
        let response = await fetch('/portfolio/portfolio.json');
        //after fetching we need to get json answer
        response = await response.json();
        setData(response);
      } catch {setIsError(true);}
      setIsLoading(false);
    }

    fetchData();
    console.log(data);
  },[]);

  return (
    <div id="Portfolio">Hi!</div>
  );
}

export default Portfolio;