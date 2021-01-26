---
id: doc1
title: Introduction
sidebar_label: Introduction
slug: /
---

<!-- This is an MDX script that you add a highlight colour to text. Just add the "<Highlight>sample text</Highlight>" and set the Hex Value for your "color" inline, and voila! -->

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

Welcome to <Highlight color="#6B4B85">Stirling Docs!</Highlight> We are glad you found us.

Here is a fun gif of a monkey!

![MonkeyGif](https://media.giphy.com/media/ySpxjJmsq9gsw/source.gif)

:satisfied: **HA!** He *hates* laptops!

___

Here is a preview of the kind of sweet .gifs you are going to find on this site.

![TeamsLocation](https://static.wixstatic.com/media/e64ace_beaecb4bbb7c49a3a2b0f87faee968b5~mv2.gif)

:::warning

There will be more information here... Please be patient while we work on it.

:::