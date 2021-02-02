import React, { useContext, useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import styled from "styled-components";


import {Context} from '../Context'

import {
  Container,
  Image,
  Article,
  SubContainer,
  Location,
  Dates,
} from "../components/main/styles/main";
import { DESCRIPTION } from "../constants/routes";


 const LinkJob = styled(Link)`
   text-decoration: none;
   color: black;
   font-family: Roboto;
   font-size: 13px;
   
 `;

export default function MainJob() {
    const {
      jobs,
      Title,
      setTitle,
      description,
      isfull,
      setIsfull,
      setDescription,
    } = useContext(Context);


    const [loading, setLoading] = useState(true);

      useEffect(() => {
        if(!loading )
          setLoading(false);

          else {
            setLoading(true)
          }
       
      }, [jobs]);

    // {`/DescriptionContainer/${job.id}`}

    const someJobs = jobs.map((job) => {
      return (

        <>
        <LinkJob to={`/DESCRIPTION/${job.id}`} key={job.id}>
          <Container>
            <Article>
              <Image src={job.company_logo} />
              <div>
                <p>{job.company}</p>
                <p>{job.title}</p>
                <button>{job.type}</button>
              </div>
              <SubContainer>
                <Location> {job.location} </Location>
                <Dates>{job.created_at}</Dates>
              </SubContainer>
            </Article>
          </Container>
        </LinkJob>
        </>
      );
    });

    

    return (
      <>
      {someJobs}  
      </>
    )
}