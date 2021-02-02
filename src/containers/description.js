import React, { useContext } from "react";

import { useParams, useHistory } from "react-router-dom";

import styled from "styled-components";
import { Context } from "../Context";

import { AiOutlineArrowLeft } from "react-icons/Ai";
// import { AiOutlineArrowLeft } from "react-icons/Ai";
import {
  Logo,
  JobList,
  DateLocation,
  Dates,
  Text,
  Container,
  Button,
  Company,
  Descriptions,
  MoreInfo,
  Title,
  Span,
  SubTitle,
  SpanMail,
  Contact,
  Information,
  TitleJob,
  Application,
  Mail,
} from "../components/description/styles/description";

export default function DescriptionContainer() {
  const { jobs, setJobs } = useContext(Context);
  const { id } = useParams();
   const history = useHistory();


  const job = jobs.find((job) => job.id === id);

  console.log("ooo", id);

  return (
    <Descriptions>
      <Contact>
        <Title>
          Github <Span>jobs</Span>
        </Title>
        <SubTitle>
          <AiOutlineArrowLeft onClick={() => history.goBack()} />
          Back to search
        </SubTitle>
        <Application>How to apply</Application>
        <Mail>
          {" "}
          Please Email a copy of your resume and online portfolio to{" "}
          <SpanMail> wes@Kosisto.com & cc</SpanMail>
          <SpanMail>eric@kosisto.com</SpanMail>
        </Mail>
      </Contact>
      <Information>
        <Container>
          <Company>{job?.company}</Company>
          <Button>{job?.type}</Button>
        </Container>
        <JobList>
          <div>
            <Logo src={job?.company_logo} />
          </div>

          <MoreInfo>
            <div>
              <DateLocation>
                <Dates>{job?.created_at}</Dates>
              </DateLocation>
              <TitleJob>{job?.title}</TitleJob>
            </div>

            <DateLocation>
              <p>{job?.location}</p>
            </DateLocation>
          </MoreInfo>
        </JobList>

        <Text>{job?.description.replace(/<[^>]+>/g, "")}</Text>
      </Information>
    </Descriptions>
  );

 
}


