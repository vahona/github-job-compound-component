import React, { useState, useEffect, children } from "react";



const Context = React.createContext();

 function ContextProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [Title, setTitle] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValueLocation, setInputValueLocation] = useState("");

  //   const NewYork = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york";
  //   const Timung = "https://jobs.github.com/positions.json?description=python&full_time=true&location=sf";
  //   const Locatio_API = "https://jobs.github.com/positions.json?description=python&full_time=true&location=sf";

  let API_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`;
  //  description=python&&location=sf
  const TitleJob = `location=${Title}`;

  useEffect(() => {
    if (Title !== "") {
      API_URL = API_URL + TitleJob;
    }

    (async () => {
      const result = await fetch(API_URL);
      const data = await result.json();
      setJobs(data);
      console.log(data);
    })();
  }, []);

  useEffect(() => {
    if (jobs == []) {
      return null;
    } else {
      setJobs(jobs);
    }
  }, [jobs]);


  return (
      <Context.Provider value={{ jobs, Title, setTitle, setJobs }}>
        {children}
      </Context.Provider>

  );
}

export { ContextProvider, Context };
