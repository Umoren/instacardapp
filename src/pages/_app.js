import "@/styles/globals.css";
import { Amplify } from 'aws-amplify';
import config from '@/amplifyconfiguration.json';
import { ChakraProvider } from '@chakra-ui/react'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config);

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}
