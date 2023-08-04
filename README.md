Go to [alexdphan.com](https://alexdphan.com) to see the live site :)

Note: need to put '' around the YAML
Also, need to put a space after the colon
You can't have ' marks in the YAML
For numbers in the YAML, you don't need quotes

In most scenarios, you can avoid URL encoding if you ensure that your slugs don't contain any characters that have special meanings in a URL context. These characters include #, ?, &, %, /, :, ;, =, @, +, $, ,, , ", <, >, {, }, |, \, ^, ~, [, ], `, and '.

<!-- # Next.js Contentlayer Example

## Demo

View the deployed project: [Demo](https://next-contentlayer-example.vercel.app/)

## Try it Now

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](http://gitpod.io/#https://github.com/contentlayerdev/next-contentlayer-example)

## Local Installation

Clone the project:

    git clone git@github.com:contentlayerdev/next-contentlayer-example.git

Install dependencies:

    yarn

Run dev server:

    yarn dev


1. cloned repo into developer directory (locally)
2. renamed the template
3. git remote set-url origin https://github.com/alexdphan/alexdphan.github.io.git                 
4. git remote add origin https://github.com/alexdphan/alexdphan.github.io.git
   git branch -M main
   git push -u origin main
5. can clear history if you want (ask gpt) -->

---
title: What's This?
date: 2023-07-30
---

Normal Text

# H1
## H2
### H3
Bold **bold text**

Italic _italicized text_

Blockquote > blockquote

Strikethrough ~~The world is flat.~~

Ordered List

1. First item
2. Second item
3. Third item

Unordered List / Bullet Points

- First item
- Second item
- Third item

Code `This is inline code`

Horizontal Rule: Try to put a blank line before...

---

...and after a horizontal rule.

Link [title](https://www.example.com)

| Table     | Syntax | Description |
| --------- | ------ | ----------- |
| Header    | Title  | Text        |
| Paragraph | Text   | Text        |

---

# Markdown Previewer

---

> **Note:** This is a note, quote, or blockquote


<Callout emoji="💡">

This is a callout

</Callout>

Emoji! 😀

Image from url
![A cute kitten](https://placekitten.com/200/300)

Gif from local
![NFT](/images/nft.gif)

Image from local
![Patrick](/images/patrick.png)

Rounded Image from local
<Image src="/images/patrick.png" alt="Patrick" width="200" height="200" />

<ConsCard
  title="vanilla CSS"
  cons={[`You're building a large web application.`]}
/>

<ProsCard
  title="vanilla CSS"
  pros={[
    `You don't want to add a toolchain. Vanilla CSS works with every browser & language.`,
  ]}
/>

<a href="https://www.example.com">This link will use CustomLink</a>

Here's an [internal link](/another-post), an [anchor link](#section-1), and an [external link](https://example.com).


Combining with multiple attributes: [internal link](/another-post "A link to another post")
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

This is a reference-style link: 

Here's a footnote reference,[^1] and another.[^longnote]
Here's another footnote reference that refers to the same footnote,[^1]
Here's another footnote reference that refers to a different footnote,[^3]
Here's another footnote that refers to the another long footnote,[^longnote]
Here's another footnote that refers to the a different long footnote,[^longnote2]


[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they

    they also like

    something they also
    so something

[^longnote2]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
    they also like
    something they also
    so something

[^3]: Here is a different footnote.


- [x] Latex
- [x] Images
- [x] Lists
- [x] Code
- [x] Headings
- [x] Table
- [x] Spacing
- [x] Notes or Quotes (blockquote)
- [x] Links
- [x] line
- [x] line break
- [x] callout (made from mdx.tsx)
- [x] inline code
- [x] bold
- [x] italic
- [x] strikethrough
- [x] horizontal rule
- [x] task list
- [x] emoji
- [x] ProsCard (made from mdx.tsx)
- [x] ConsCard (made from mdx.tsx)
- [x] Rounded Image 
- [x] CustomLink a (made from mdx.tsx)
- [x] Footnote Reference with multiple blocks
- [x] Footnote 





