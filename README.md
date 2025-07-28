<img src="./reademe.png" alt="Banner image">

# Puzzles

## Table of Contents

-   [Table of Contents](#overview)
-   [Project Planning](#project-planning)
-   [Initial Setup](#initial-setup)
-   [Core Features Development](#core-features-development)
-   [PWA Enhancements](#pwa-enhancements)

## Overview

Puzzles is a PWA (progressive web app) that allows users to build puzzles from either a selection of pre-uploaded images or upload an image of their own.

This project started in late 2022 because I liked building puzzles, and I decided that the puzzle apps had too many ads, or they did not include the functionality I wanted. In addition to this, I was also interested in learning more about building websites, and this type of project would give me exposure to HTML canvas actions, building dynamic webpages, and the basics of working with URL parameters. Even though this project does not use Node.js anymore because it evolved to using Next.js, I was exposed to many different technologies and languages as I settled on the tech stack I wanted to use.

## Project Planning

The goal of this application was to have a custom built application that would allow users to build puzzles on their device using either pre-uploaded or their own images.

#### Original Tech Stack

###### Backend:

-   Node.js, Express.js

###### Frontend:

-   EJS,

###### Database

-   MongoDB

###### Image processing and uploads:

-   Multer, Sharp

#### Current Tech Stack

###### Backend & Frontend:

-   Next.js, TypeScript

## Initial Setup

### Project Initialization

When I started building this project, I was taking a course on Node.js. Since I was new to web development, I decided to use Node.js as the backend for my project. However, as I progressed and learned more about other languages, I decided to revisit this project and make some changes.

### Framework Change

One of the biggest changes was the web framework. I was now learning React and Next.js, and I thought refactoring this project would help me learn the language more quickly by giving me experience building applications with it.

### Revisiting Image Requirements

Second was the way custom images were being handled. When I switched the web framework, I revisited the requirements for this application. Since I no longer needed a database, I decided to drop it. Multer and Sharp were being used for file uploads and image optimization, but when I switched from uploading to a database to using B64 encoded strings temporarily saved in LocalStorage for transferring uploaded images between pages, they no longer had a use.

## Core Features Development

After refactoring the structure and purpose of the website, I settled on three main features:

1. The application needed to allow the user to easily build puzzles on any device, which meant it needed to be mobile friendly and the puzzle building script needed to work.
2. The application needed to include pre-uploaded images because I might not always have a particular image I want to build, so having images on hand would be useful.
3. Finally, on the occasion that I have an image in mind I want to build, I want that functionality to work, so custom images as an option was a must.

## PWA Enhancements

After the core features of the application were I decided to include the ability to add the application to the home screen to the users device because it feels more native and mobile friendly.

## Running the App

This project bootstrapped with `create-next-app`.

### Running the App

First Install Dependencies
`npm install`

Second, run the development server:
`npm run dev`

Other Commands

```
# Build application
npm run build

# Run build preview
npm run start

# Lint code
npm run lint

# Format code
npm run format
```

Open http://localhost:3000 with your browser to see the result.
