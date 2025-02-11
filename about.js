```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate a slow API call
  const data = fetch('/api/slow').then(res => res.json());

  return (
    <div>
      <h1>About Page</h1>
      {/* This will render 'undefined' before data resolves */}
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
```
```javascript
// pages/api/slow.js

export default async function handler(req, res) {
  // Simulate a slow API call
  await new Promise(resolve => setTimeout(resolve, 3000));
  res.status(200).json({ data: 'some data' });
}
```