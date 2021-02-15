import React from "react"
import lz from 'lzutf8';
import { Editor, Frame } from '@craftjs/core';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { Video } from '../components/Video';
import { Button } from '../components/Button';
import '../assets/style.css'

const Page = ({pageContext: { pageData } }) => {
  const json = lz.decompress(lz.decodeBase64(pageData.json))
  console.log(JSON.parse(json))
  return (
    <div className="mt-10">
      <Editor
        resolver={{
          Container, Text, Video, Button
        }}
        enabled={false}
      >
        <Frame json={json} />
      </Editor>
    </div>
  )
}

export default Page