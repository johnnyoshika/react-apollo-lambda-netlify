import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GraphQLDemo = () => {
  const { data } = useQuery(gql`
    query {
      hello
    }
  `);
  return (
    <div>
      A greeting from the GraphQL server: {data ? data.hello : ''}
    </div>
  );
};

export default GraphQLDemo;
