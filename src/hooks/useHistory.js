import { useState, useEffect } from 'react';

const { REACT_APP_API_URL } = process.env;

function useHistory(dependency) {
  const [histories, setHistories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${REACT_APP_API_URL}/history`)
      .then((res) => res.json())
      .then((rows) => {
        setHistories(rows);
      }).catch(setError);
  }, [dependency]);
  return [histories, error];
}

export default useHistory;
