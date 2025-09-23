# Hello World Face Project

A simple JavaScript project that creates interactive face drawings using Konva.js canvas library.

## Features 

- **2D Graphics** using Konva.js
- **Multiple Face Variations** with different styles and shapes
- **Code Quality Tools** (ESLint + Prettier)


## 📁 Project Structure

```
├── css/
│   └── styles.css           # Main CSS styles
├── js/
│   └── hello_world_face.js  # Main JavaScript with face drawing logic
├── index.html               # Main HTML file
├── package.json             # Project dependencies and scripts
└── README.md               # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

- **Start development server**:
  ```bash
  npm start
  ```
  Opens your project at http://localhost:8080 with live reload

- **Development with file watching**:
  ```bash
  npm run dev
  ```

### Code Quality

- **Lint JavaScript**:
  ```bash
  npm run lint
  ```

- **Fix linting issues automatically**:
  ```bash
  npm run lint:fix
  ```

- **Format code**:
  ```bash
  npm run format
  ```

## 🎯 What's Included

### Face Drawing Functions
- **drawFace1()**
- **drawFace2()** 
- **drawFace3()** 


## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server at localhost:8080 |
| `npm run dev` | Start development server with file watching |
| `npm run lint` | Run ESLint code analysis |
| `npm run lint:fix` | Automatically fix ESLint issues |
| `npm run format` | Format code with Prettier |

## � Usage

The main `App` class creates a Konva stage and draws faces:

```javascript
// Create new app instance (automatically draws face1)
const app = new App();
---

