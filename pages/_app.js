import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@components/layouts/main'
import Fonts from '@components/fonts'
import theme from '@libs/theme'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
