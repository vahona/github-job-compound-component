import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";


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


//  const LinkJob = styled(Link)`
//    text-decoration: none;
//    color: black;
//    font-family: Roboto;
//    font-size: 13px;
//  `;

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


    // {`/DescriptionContainer/${job.id}`}

    const someJobs = jobs.map((job) => {
      return (
        <Link to={`/DESCRIPTION/${job.id}`} key={job.id}>
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
        </Link>
      );
    });

    return (
      <>
      {someJobs}
      </>
    )
}