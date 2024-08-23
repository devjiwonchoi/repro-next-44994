import { readdirSync } from 'fs';

const COMPONENTS = readdirSync('./components');

export default function Page() {
  return (
    <main>
      <h1>index page</h1>
      <ul>
        {COMPONENTS.map((slug) => (
          <li key={slug}>
            <a href={slug}>{slug}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
