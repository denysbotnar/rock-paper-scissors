import { useState } from 'react';

const { REACT_APP_API_URL } = process.env;

function useCreateHistory() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  function createHistory(history) {
    setPending(true);
    setError(null);
    fetch(`${REACT_APP_API_URL}/history`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(history) })
      .then(() => {
        setPending(false);
      }).catch(setError);
  }

  return [createHistory, pending, error];
}

export default useCreateHistory;
