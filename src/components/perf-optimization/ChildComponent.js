import { memo, useEffect } from 'react';

function ChildComponent({ fetchData }) {
  // console.log('CHILD COMPONENT RENDERING');

  useEffect(() => {
    fetchData('ChildComponent');
  }, [fetchData]);
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
}

export default memo(ChildComponent);
