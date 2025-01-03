import { getDicionary } from './dictionaries';

export default async function Home({ params: { lang } }) {
  const dictionary = await getDicionary(lang);
  return (
    <div>
      <h1>{dictionary.followers}</h1>
    </div>
  );
}
