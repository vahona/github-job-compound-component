import React, { useState, useEffect, children } from "react";



const Context = React.createContext();

 function ContextProvider({ children }) {
   const [jobs, setJobs] = useState([]);
   const [jobsLocattion, setJobsLocattion] = useState([]);
   const [Title, setTitle] = useState("");
   const [location, setLocation] = useState("");
   const [inputValue, setInputValue] = useState("");
   const [inputValueLocation, setInputValueLocation] = useState("");
   const [newyorkJobState, setnewyorkJobState] = useState([]);
   const [checkedNewyork, setCheckedNweyork] = useState(false);
   const [franciscoJobState, setfranciscoJobState] = useState([]);
   const [checkedFrancisco, setCheckedFrancisco] = useState(false);

    const [BerlinJobState, setBerlinJobState] = useState([]);
    const [checkedBerlin, setCheckedBerlin] = useState(false);

     const [LondonJobState, setLondonJobState] = useState([]);
     const [checkedLondon, setCheckedLondon] = useState(false);

   //   const NewYork = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=new+york";
   //   const Timung = "https://jobs.github.com/positions.json?description=python&full_time=true&location=sf";
   //   const Locatio_API = "https://jobs.github.com/positions.json?description=python&full_time=true&location=sf";

   let API_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`;
   //  description=python&&location=sf
   const TitleJob = `location=${Title}`;
   const LocationJob = `location=${location}`;

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
   }, [Title]);

   useEffect(() => {
     if (Title !== "") {
       API_URL = API_URL + LocationJob;
     }

     (async () => {
       const result = await fetch(API_URL);
       const dataLocation = await result.json();
       setJobsLocattion(dataLocation);
       console.log(dataLocation);
     })();
   }, [location]);

   const SomeJobByLocation = jobs.filter((works) =>
     works.location.toLowerCase().includes(inputValueLocation.toLowerCase())
   );

   useEffect(() => {
     setJobs(SomeJobByLocation);
   }, [location, inputValueLocation]);

   useEffect(() => {
     if (jobs == []) {
       return null;
     } else {
       setJobs(jobs);
     }
   }, [jobs]);

   useEffect(() => {
     if (jobsLocattion == []) {
       return null;
     } else {
       setJobs(jobsLocattion);
     }
   }, [jobsLocattion]);

   // Filtering by the Location Berlin

   const NewYorkJobs = jobs.filter((job) => job.location === "New York");

   function JobsNewYork() {
     if (!checkedNewyork) {
       setCheckedNweyork(newyorkJobState);
       return NewYorkJobs;
     } else {
       return jobs;
     }
   }

   useEffect(() => {
     setJobs(NewYorkJobs);
   }, ["New York", checkedNewyork]);




   const FranciscoJobs = jobs.filter((job) => job.location === "San Francisco");

   function JobsFrancisco() {
     if (!checkedFrancisco) {
       setCheckedFrancisco(FranciscoJobState);
       return FranciscoJobs;
     } else {
       return jobs;
     }
   }

   useEffect(() => {
     setJobs(FranciscoJobs);
   }, ["San Francisco", checkedFrancisco]);


    const BerlinJobs = jobs.filter((job) => job.location === "Berlin"
    );

    function JobsBerlin() {
      if (!checkedFrancisco) {
        setCheckedBerlin(BerlinJobState);
        return BerlinJobs;
      } else {
        return jobs;
      }
    }

    useEffect(() => {
      setJobs(BerlinJobs);
    }, ["Berlin", checkedBerlin]);



     const LondonJobs = jobs.filter((job) => job.location === "London"
     );

     function JobsLondon() {
       if (!checkedLondon) {
         setCheckedLondon(LondonJobState);
         return LondonJobs;
       } else {
         return jobs;
       }
     }

     useEffect(() => {
       setJobs(LondonJobs);
     }, ["London", checkedLondon]);




   return (
     <Context.Provider
       value={{
         jobs,
         Title,
         location,
         inputValueLocation,
         setTitle,
         setJobs,
         setLocation,
         setInputValueLocation,
         jobsLocattion,
         setJobsLocattion,
         newyorkJobState,
         setnewyorkJobState,
         JobsNewYork,
         JobsFrancisco,
         JobsBerlin,
         JobsLondon,
         BerlinJobState,
         setBerlinJobState,
         checkedLondon,
         setCheckedLondon,
         checkedBerlin,
         setCheckedBerlin,
         LondonJobState,
         setLondonJobState,
       }}
     >
       {children}
     </Context.Provider>
   );
 }

export { ContextProvider, Context };
