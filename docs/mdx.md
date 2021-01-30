---
id: mdx
title: Powered by MDX
---

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

<!-- Theme UI Components @ https://theme-ui.com/components -->
___

## We have Buttons!

import { Button } from "theme-ui";

<Button onClick={() => alert("You found my super secret button!!!!!")}>Click me.</Button>

___

### We have progress indicators.

import { Progress } from 'theme-ui'

<Progress max={1} value={1/2}>
  75%
</Progress>

___

## There are Sliders.

import { Slider } from 'theme-ui'

<Slider
  defaultValue={50}
/>

___

## Messages?

import { Message } from 'theme-ui'

<Message>
  This is just a message for someone to read
</Message>