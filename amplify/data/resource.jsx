import React from 'react';
import { a, defineData } from '@aws-amplify/backend';

// Define the schema for the PulseShape model
const schema = a.schema({
  PulseShape: a
    .model({
      Burst_Name: a.string(),
      BurstID: a.string(),
      Burst_PNG: a.string(),
      Simple: a.integer(),
      Extended: a.integer(),
      Other: a.integer(),
      Too_Noisy: a.integer(),
      Symmetrical: a.integer(),
      FastRiseSlowDecay: a.integer(),
      UnderlyingEmission: a.integer(),
      RapidlyVarying: a.integer(),
      Verify: a.string(),
      Simple_Zscore: a.float(),
      Simple_Pvalue: a.float(),
      Simple_Confidence: a.float(),
      Extended_Zscore: a.float(),
      Extended_Pvalue: a.float(),
      Extended_Confidence: a.float(),
      Other_Zscore: a.float(),
      Other_Pvalue: a.float(),
      Other_Confidence: a.float(),
      Too_Noisy_Zscore: a.float(),
      Too_Noisy_Pvalue: a.float(),
      Too_Noisy_Confidence: a.float(),
      Final_Confidence: a.float(),
    })
    .authorization((allow) => [allow.guest()]),
});

// Define the data for the schema
const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});

// Define a React component to wrap the schema configuration
const BackendDataConfig = () => {
  // Configuration logic here, no UI to render for backend-only config
  return (
    <div>
      <h1>Amplify Data Configuration</h1>
      <p>The PulseShape model schema and authorization modes have been set up in this component.</p>
    </div>
  );
};

export { data, schema }; // Export schema if needed in TypeScript for type extraction
export default BackendDataConfig;


/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update",
and "delete" any "Todo" records.
=========================================================================*/

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
