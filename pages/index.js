import Head from 'next/head'
import { Fragment, useState, useEffect, useCallback } from 'react'
import { Box, Heading, HStack, Container, Button } from '@chakra-ui/react'
import { Layout } from '../layout/FacebookLayout'
import { StoryList } from '../collections/StoryList'

import collection from '../data/collections.json'
import users from '../data/users.json'

import { Status } from '../components/Status'
import { Room } from '../components/Room'
import { Post } from '../components/Post'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Facebook by Meta </title>
      </Head>
      <StoryList collections={collection} />
      <Status />
      <Room users={users} />
      <Post />
    </Layout>
  )
}
