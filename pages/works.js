import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '@components/section'
import { WorkGridItem } from '@components/grid-item'
import typebitsThumbnail from '../public/images/works/typebits-thumb.png'
import vaultThumbnail from '../public/images/works/vault-thumb.png'
import raytracerThumbnail from '../public/images/works/raytracer-thumb.png'
import tetrisThumbnail from '../public/images/works/tetris-thumb.png'
import Layout from '@components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="typebits"
              title="Typebits"
              thumbnail={typebitsThumbnail}
            >
              A typing practice app for hackers, where you can practice with
              your own code snippets.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="vault" title="Vault" thumbnail={vaultThumbnail}>
              A CLI based secure password managing tool.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="raytracer"
              title="Ray Tracer"
              thumbnail={raytracerThumbnail}
            >
              Ray Tracing algorithm that creates realistic 3D images.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="tetris"
              title="Tetris"
              thumbnail={tetrisThumbnail}
            >
              Tetris made with vanila JS, CSS and HTML.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
