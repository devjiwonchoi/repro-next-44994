import dynamic from 'next/dynamic';

import OriginalComponent from '../../components/hello-world';

/*
 * we dont need anything further than this,
 * weirdly simply logging the component will force
 * style inclusion in the page.
 *
 * uncomment to see the styles injected.
 */

// console.log(OriginalComponent);

export default async function Page({ params }) {
  const { default: StaticPath } = await import(`../../components/hello-world`);

  const NextDynamic = dynamic(() => import(`../../components/hello-world`), {
    loading: () => <div>'loading'</div>,
  });

  const { default: DynamicPath } = await import(
    `../../components/${params.slug}`
  );

  return (
    <main>
      <h1>component page ({params.slug})</h1>
      {/*<OriginalComponent />*/}
      <StaticPath />
      <NextDynamic />
      <DynamicPath />
    </main>
  );
}
