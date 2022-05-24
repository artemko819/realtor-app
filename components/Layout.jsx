import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import { NavBar } from './NavBar'

export const Layout = ({children}) => {
  return (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <NavBar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </Box>
    </>
  )
}
