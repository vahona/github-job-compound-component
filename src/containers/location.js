import React, { useState, useEffect, createContext, Children } from "react";



export default function MainJob() {
  const [jobs, setJobs] = useState([]);

  const fullTime =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code";
  //   const NewYork = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york";
  //   const Timung = "https://jobs.github.com/positions.json?description=python&full_time=true&location=sf";
  //   const Locatio_API = "https://jobs.github.com/positions.json?description=python&full_time=true&location=sf";

  useEffect(() => {
    (async () => {
      const result = await fetch(fullTime);
      const data = await result.json();
      setJobs(data);
    })();
  }, []);

  useEffect(() => {
    if (jobs == []) {
      return null;
    } else {
      setJobs(jobs);
    }
  }, [jobs]);

  MainJob.Article = function MainJob({ ...restProps }) {
    <Article {...restProps}>{children}</Article>;
  };

  return (
    <>
      <div>mmmmmm</div>
    </>
  );
}