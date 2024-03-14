import React from 'react';
import { Button } from '@greatminds/dp-atomic-ui-lib';

const HomePage = props => {
  const name = props.router.query.name || 'anonymous';

  return (
    <div>
      <h1>
        Hello
        { ' ' }
        {name}
        , from next!
      </h1>

      <p>
        Try adding
        <code>name</code>
        to the query params.
      </p>

      <pre>{JSON.stringify(props, null, ' ')}</pre>
      <Button>Foo</Button>
      { ' ' }
      <Button>Bar</Button>
      { ' ' }
      <Button>
        Qux
      </Button>
    </div>
  );
};

export default HomePage;
