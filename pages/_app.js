import { withFronteggApp } from '@frontegg/nextjs';

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withFronteggApp(CustomApp, {hostedLoginBox: true});