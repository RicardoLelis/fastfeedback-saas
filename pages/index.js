import Head from 'next/head'
import { Button, Flex, Text, Code, Icon } from "@chakra-ui/core"

import { useAuth } from "@/lib/auth";
import EmptyState from '@/components/EmptyState';


const Home = () => {
  const auth = useAuth()

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <Icon color="black" name="logo" size="64px" ></Icon>
      {auth.user ? (
        <EmptyState />
      ) : (
        // <Button onClick={(e) => auth.signout()}>Sign Out</Button>

        <Button mt={4} size="sm"
          onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
      )}
    </Flex>
  )
}

export default Home;
