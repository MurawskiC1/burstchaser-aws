import React from 'react';
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage, firstBucket, secondBucket } from './storage/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const BackendConfig = () => {
  // Define backend configuration using Amplify's defineBackend function
  defineBackend({
    auth,
    data,
    storage,
    firstBucket,
    secondBucket,
  });

  return (
    <div>
      <h1>Amplify Backend Configuration </h1>
      < p > Your backend configuration is defined programmatically in this component.</p>
    </div>
  );
};

export default BackendConfig;
