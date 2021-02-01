import React, { useContext } from "react";

import {Context} from '../Context'

import {
  Container,
  Image,
  Article,
  SubContainer,
  Location,
  Dates,
} from "../components/main/styles/main";

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


    const someJobs = jobs.map((job) => {
      return (
        <Container to={`/Jobdescription/${job.id}`} key={job.id}>
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
      );
    });

    return (
      <>
      {someJobs}
      </>
    )
}