import Layout from '@components/layouts/article'
import Section from '@components/section'
import { Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
const PDFViewer = dynamic(import('../components/pdf-viewer'), {
  ssr: false,
  loading: () => <p>...</p>,
})

const Resume = () => {
  return (
    <Layout>
      <Heading as="h3" fontSize={20}>
        Resume
      </Heading>
      <Section delay={0.1}>
        <PDFViewer />
      </Section>
    </Layout>
  )
}

export default Resume
