import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage, Title, Meta } from '@components/work'
import P from '@components/paragraph'
import Layout from '@components/layouts/article'

const Work = () => {
  return (
    <Layout title="Vault">
      <Container>
        <Title>
          Vault <Badge>2020</Badge>
        </Title>
        <P>
          Basic raytracer without libraries and framework, built with vanila
          C++.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>C++</span>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <Link href="https://github.com/sawamotokai/raytracer" isExternal>
              https://github.com/sawamotokai/raytracer
              <ExternalLinkIcon />
            </Link>
          </ListItem>
        </List>
        <Heading as="h4" fontSize={14} ml={2}>
          Sample image outputed by the program
        </Heading>
        <WorkImage
          src="/images/works/raytracer-thumb.png"
          alt="Sample output of the raytracer"
        />
      </Container>
    </Layout>
  )
}

export default Work
