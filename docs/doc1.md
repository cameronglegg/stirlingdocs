---
id: doc1
title: Introduction
sidebar_label: Introduction
slug: /
---

<!-- This was commented out. :::important

This is the Introduction

::: -->

<!--This is an MDX test -->
export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

Welcome to <Highlight color="#6B4B85">Stirling Docs!</Highlight> We are glad you found us.

Here is a fun gif of a monkey!

![MonkeyGif](https://media.giphy.com/media/ySpxjJmsq9gsw/source.gif)

**HA!** He *hates* laptops!

:::warning

There will be more information here... Please be patient while we work on it.

:::