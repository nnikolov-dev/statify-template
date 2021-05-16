import React from "react"
import lz from 'lzutf8';
import { Editor, Frame } from '@craftjs/core';
import Text from '@bit/nnikolov-dev.statify.text'
import Button from '@bit/nnikolov-dev.statify.button'
import Container from '@bit/nnikolov-dev.statify.container'
import Video from '@bit/nnikolov-dev.statify.video'
import Link from '@bit/nnikolov-dev.statify.link'
import Image from '@bit/nnikolov-dev.statify.image'
import '../assets/style.css'
import SEO from '../components/SEO'

const Page = ({pageContext: { pageData } }) => {
  const json = lz.decompress(lz.decodeBase64(pageData.json))
  return (
    <>
      <SEO title={pageData.title} description={pageData.description} />
      <Editor
        resolver={{
          Container, Text, Video, Button, Image, Link
        }}
        enabled={false}
      >
        <Frame data={json} />
      </Editor>
    </>
  )
}

export default Page