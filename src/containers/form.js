import React, {useContext} from "react";

import { Form } from "../components";
import { Input } from "../components/form/styles/form";

import {Context} from '../Context'

export default function FormContainer() {


   const {
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
   } = useContext(Context);

  return (
    <Form>
      <div>
        <Input type="checkbox" />
        <label> Full time </label>
      </div>
      <div>
        <div>
          <label>Location</label>
        </div>
        <Input 
              placeholder="City, State, zip code or country"
              type="text"
              value={inputValueLocation}
              onChange={(e) => setInputValueLocation(e.target.value)}
            /> 
      </div>
      <div>
        <Input type="checkbox" />
        <label>New York</label>
      </div>
      <div>
        <Input type="checkbox" />
        <label>San Francisco</label>
      </div>
      <div>
        <Input type="checkbox" />
        <label>Berlin</label>
      </div>
      <div>
        <Input type="checkbox" />
        <label>London</label>
      </div>
    </Form>
  );
}
