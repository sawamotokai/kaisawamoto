import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { WorkImage, Title, Meta } from '@components/work'
import P from '@components/paragraph'
import Layout from '@components/layouts/article'

const Work = () => {
  return (
    <Layout title="Typebits">
      <Container>
        <Title>
          Typebits <Badge>2021</Badge>
        </Title>
        <P>
          Typebits is a typing game to improve your typing speed. Typebits
          allows you to practice typing with code snippets. You can create, edit
          and delete your own snippets from the dashboard.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React (TypeScript) / Firebase</span>
          </ListItem>
          <ListItem>
            <Meta>App Link</Meta>
            <Link href="https://typebits.vercel.app/" isExternal>
              https://typebits.vercel.app
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <Link href="https://github.com/sawamotokai/typebits" isExternal>
              https://github.com/sawamotokai/typebits
              <ExternalLinkIcon />
            </Link>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/typebits-thumb.png"
          alt="Typebits dashboard"
        />
        <WorkImage
          src="/images/works/typebits-2.png"
          alt="Typebits edit snippet"
        />
        <WorkImage
          src="/images/works/typebits-3.png"
          alt="Typebits snippet list"
        />
      </Container>
    </Layout>
  )
}

export default Work
