import React from "react"
import {graphql} from 'gatsby'
import lz from 'lzutf8';
import { Editor, Frame } from '@craftjs/core';
import Text from '@bit/nnikolov-dev.statify.text'
import Button from '@bit/nnikolov-dev.statify.button'
import Container from '@bit/nnikolov-dev.statify.container'
import Video from '@bit/nnikolov-dev.statify.video'
import SEO from '../components/SEO'

const App = ({data}) => {
  const {allPages: {nodes: [pageData]}} = data
  const json = lz.decompress(lz.decodeBase64(pageData.json))
  return (
    <>
      <SEO title={pageData.title} description={pageData.description} />
      <Editor enabled={false} resolver={{Text, Button, Container, Video}}>
        <Frame data={json} />
      </Editor>
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    allPages(filter: {home: {eq: true}}) {
      nodes {
        title
        description
        json
      }
    }
  }
`

export default App
