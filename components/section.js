import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  // filters props out
  // shouldForwardProp(prop) => false if prop is a deafault chakra style prop; transition is one of default prop here.
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition',
})

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mt={6}
  >
    {children}
  </StyledDiv>
)

export default Section
