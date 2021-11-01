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
          Vault is a password management tool to generate and store robust
          passwords. You simply input a service name and an account ID and it
          will generate a password for you. Alternatively, if you have your own
          password you can also store it as it is.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Terminal</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS</span>
          </ListItem>
          <ListItem>
            <Meta>Source code</Meta>
            <Link
              href="https://github.com/sawamotokai/secure-password-vault"
              isExternal
            >
              https://github.com/sawamotokai/secure-password-vault
              <ExternalLinkIcon />
            </Link>
          </ListItem>
        </List>
        <Heading as="h4" fontSize={14} ml={2}>
          Generate Password
        </Heading>
        <WorkImage src="/gifs/gen.gif" alt="Vault generate option" />
        <Heading as="h4" fontSize={14} ml={2}>
          Browse Password
        </Heading>
        <WorkImage src="/gifs/show.gif" alt="Vault show option" />
        <Heading as="h4" fontSize={14} ml={2}>
          Record Password
        </Heading>
        <WorkImage src="/gifs/sto.gif" alt="Vault store option" />
        <Heading as="h4" fontSize={14} ml={2}>
          Delete Password
        </Heading>
        <WorkImage src="/gifs/del.gif" alt="Vault delete option" />
      </Container>
    </Layout>
  )
}

export default Work
