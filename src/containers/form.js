import React from "react";

import { Form } from "../components";
import { Input } from "../components/form/styles/form";

export default function FormContainer() {
  return (
    <Form>
      <div>
        <Input type="checkbox" />
      </div>
      <div>
        <div>
          <label>Location</label>
        </div>
        <Input placeholder="City, state, zip code, or " />
      </div>
      <div>
        <Input type="checkbox" />
      </div>
      <div>
        <Input type="checkbox" />
      </div>
      <div>
        <Input type="checkbox" />
      </div>
      <div>
        <Input type="checkbox" />
      </div>
    </Form>
  );
}
