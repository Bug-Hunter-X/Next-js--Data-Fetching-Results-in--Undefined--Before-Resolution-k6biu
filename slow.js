```javascript
// pages/about.js
import { useState, useEffect } from 'react';

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/slow');
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {data ? (
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```