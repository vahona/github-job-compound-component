import React, { useContext } from "react";

import { useParams, useHistory } from "react-router-dom";

import styled from "styled-components";
import { Context } from "../Context";
// import { AiOutlineArrowLeft } from "react-icons/Ai";
// import {
//   Logo,
//   JobList,
//   DateLocation,
//   Dates,
//   Text,
//   Container,
//   Button,
//   Company,
//   Description,
//   MoreInfo,
//   Title,
//   Span,
//   SubTitle,
//   SpanMail,
//   Contact,
//   Information,
//   TitleJob,
//   Application,
//   Mail,
// } from "./Style";

export default function DescriptionContainer() {
  const { jobs, setJobs } = useContext(Context);
  const { id } = useParams();


  const job = jobs.find((job) => job.id === id);

  console.log("ooo", id);

  return (

    
    <section>
      <article>
        <h1>
          Github <span>jobs</span>
        </h1>
        <h2>
          <i onClick={() => history.goBack()} />
          Back to search
        </h2>
        <p>How to apply</p>
        <div>
          {" "}
          Please Email a copy of your resume and online portfolio to{" "}
          <p> wes@Kosisto.com & cc</p>
          <p>eric@kosisto.com</p>
        </div>
      </article>
      <article>
        <div>
          <p>{job?.company}</p>
          <button>{job?.type}</button>
        </div>
        <div>
          <div>
            <img src={job?.company_logo} />
          </div>

          <article>
            <div>
              <p>
                <span>{Date.now()}</span>
              </p>
              <h2>{job?.title}</h2>
            </div>

            <div>
              <p>{job?.location}</p>
            </div>
          </article>
        </div>

        <p>{job?.description.replace(/<[^>]+>/g, "")}</p>
      </article>
    </section>
  )

 
}


