import '../styles/globals.scss';
// import './create-post/index.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component  {...pageProps} />
    </>
  );
}
