# Files hash (React/TS)

This app calculates SHA-1 hash for uploaded files using Web Crypto API. User can upload files traditional way or drag-n-drop them and copy calculated hash to clipboard. User recieves notification, if file hash has changed since last check.

My goal was to develop an application to practise differenet browser APIs, such as FileReader API, Crypto API, Clipboard API and make useful app for my friend.

## [Live demo](https://files-hash.vercel.app/)

<img width="600px" alt="image" src="https://github.com/gl-el/files-hash/assets/118758307/52762050-c14f-4fb1-9ae8-5278759fd885" />
<img width="600px" alt="image" src="https://github.com/gl-el/files-hash/assets/118758307/2f0e4733-28e0-40ef-a0ff-1a74aa1e1029" />

## Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Features

- [x] user can select or drag-n-drop file to upload;
- [x] user can copy SHA-1 hash to clipboard;
- [x] show notification, if the file has changed since last check;

## How to run locally

* install dependencies
```cli
npm install
```

* start local server via Vite
```cli
npm run dev
```
