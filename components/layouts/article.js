import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '@components/grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

const Layout = ({ children, title }) => (
  <AnimatePresence exitBeforeEnter>
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Kai Sawamoto</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  </AnimatePresence>
)

export default Layout
