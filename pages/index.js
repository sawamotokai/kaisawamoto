import Section from '@components/section'
import Paragraph from '@components/paragraph'
import Layout from '@components/layouts/article'
import { BioSection, BioYear } from '@components/bio'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue,
  List,
  Link,
  ListItem,
  Icon,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5'
export default function Home() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hi👋🏻 I&apos;m a Japanese CS student based in Vancouver.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kai Sawamoto
            </Heading>
            <p>4th-year CS major at The University of British Columbia</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <LinkBox cursor="pointer">
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                borderRadius="full"
                display="inline-block"
                src="/images/linkedin_profile.jpg"
                alt="Profile Image"
              />
              <LinkOverlay
                isExternal
                href="https://www.linkedin.com/in/kaisawamoto/"
              />
            </LinkBox>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Kai is a Japanese software engineer based in Vancouver, with
            passions in software enginering and solving problems. He is a senior
            Computer Science student at The University of British Columbia (UBC)
            and anticipated to graduate in May, 2023. Currently, looking for a
            2022 summer internship.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Tokyo, Japan.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Started university in Vancouver.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Interned at Eaglys as a SWE for 4 months in Tokyo.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Interned at ExaWizards as a DevOps for 4 months in Tokyo.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Co-op&apos;d at UBC lab as an RA for 8 months in Vancouver.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Co-op&apos;d at SkyBox Labs as a SWE for 4 months in Burnaby.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Anticipated to graduate.
          </BioSection>
          <Box align="center" my={4}>
            <NextLink href="/resume">
              <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
                My Resume
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies & Interests
          </Heading>
          <Paragraph>
            Chess, Golf, Soccer, Baseball, Surfing, Competitive Programming,
            Photography, Languages, etc...
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://www.linkedin.com/in/kaisawamoto" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @kaisawamoto
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/sawamotokai" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @sawamotokai
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/techkai_" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @techkai_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/kai_atom/" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @kai_atom
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
