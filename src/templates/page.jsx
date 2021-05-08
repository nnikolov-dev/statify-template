import React from "react"
import lz from 'lzutf8';
import { Editor, Frame } from '@craftjs/core';
import Text from '@bit/nnikolov-dev.statify.text'
import Button from '@bit/nnikolov-dev.statify.button'
import Container from '@bit/nnikolov-dev.statify.container'
import Video from '@bit/nnikolov-dev.statify.video'
import '../assets/style.css'
import SEO from '../components/SEO'

const Page = ({pageContext: { pageData } }) => {
  const json = lz.decompress(lz.decodeBase64(pageData.json))
  return (
    <>
      <SEO title={pageData.title} description={pageData.description} />
      <Editor
        resolver={{
          Container, Text, Video, Button
        }}
        enabled={false}
      >
        <Frame data={json} />
      </Editor>
    </>
  )
}

export default Page