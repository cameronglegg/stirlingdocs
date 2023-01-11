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

Welcome to <Highlight color="#6B4B85">Stirling Docs!</Highlight>.

## What is StirlingDocs for?

This is the place to come if you have any questions related to any part of our organization. Questions like:

- How do I start the process of an apprentiship? What documents do I need to fill out and who do I send them to?
- The CNC machine has thrown _"X"_error. What do I do to fix it?
- I need to mix a gallon of primer. What materials do I need and in what quantities?


## Search!

If you have a question about anything, type it into the search bar and you will most likley find it.

If the thing you are looking for doesn't seem to be on the site, please reach out to [**The Stirling Team**](mailto:general@stirlingwoodworks.com) and let him know that there is something missing from the site.
