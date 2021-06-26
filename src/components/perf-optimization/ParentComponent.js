import { useState, useMemo, useEffect, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [number, setNumber] = useState(0);
  const values = useMemo(() => [1, 2, 3, 4, 5], []);

  const fetchData = useCallback((action) => {
    setTimeout(() => {
      console.log('FETCHED DATA ', action);
    }, 2000);
  }, []);

  useEffect(() => {
    fetchData('ParentComponent');
  }, []);

  return (
    <div>
      <h1 className="text-white">Parent Component - {number}</h1>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setNumber(Math.floor(Math.random() * 100))}>
        Change Number
      </button>

      <ChildComponent
        title="Primitive value"
        isAdmin={false}
        values={values}
        fetchData={fetchData}
      />
    </div>
  );
}

export default ParentComponent;
