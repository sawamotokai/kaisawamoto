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
        <P>Simple tetris clone that runs on browser.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, HTML, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Web Link</Meta>
            <Link href="https://sawamotokai.github.io/tetris/" isExternal>
              https://sawamotokai.github.io/tetris/
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <Link href="https://github.com/sawamotokai/tetris" isExternal>
              https://github.com/sawamotokai/tetris
              <ExternalLinkIcon />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/works/tetris-thumb.png" alt="Tetris" />
      </Container>
    </Layout>
  )
}

export default Work
