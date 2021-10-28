import Section from '@components/section'
import { GridItem } from '@components/grid-item'
import Layout from '@components/layouts/article'
import { SimpleGrid, Box, Container, Heading } from '@chakra-ui/react'

const Post = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Heading as="h4" fontSize={14} my={4}>
        Coming Soon!
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}></SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Post
