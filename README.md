# **OmGPT**

Welcome to OmGPT, a clone of the Gemini website built with Next.js. This project uses modern web development technologies including React.js, Spring Boot, Firebase, and various UI libraries to deliver a seamless experience.

## **Table of Contents**

- [Project Setup](#project-setup)
- [Dependencies](#dependencies)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Common Issues and Solutions](#common-issues-and-solutions)
- [Folder Structure](#folder-structure)
- [License](#license)

##** Project Setup
**
To get started with the project, clone the repository and install the necessary dependencies.

```
git clone https://github.com/yourusername/omgpt.git
cd omgpt
npm install 
```
## **Dependencies**
Ensure you have the following dependencies installed:

Next.js
React.js
Firebase
@radix-ui/react-popover
@google/generative-ai
clsx
tailwind-merge
You can install missing dependencies using:

```
Copy code
npm install @radix-ui/react-popover @google/generative-ai clsx tailwind-merge
```
## **Development**
To start the development server, run:

```
Copy code
npm run dev
```
Navigate to http://localhost:3000 to see the application in action.

## **Building for Production**
To create an optimized production build, run:

```
npm run build
```
## **To start the production server:
**
```
npm start
```
## **Common Issues and Solutions**
**Module Not Found**
If you encounter a "Module not found" error, ensure the required package is installed:

```
npm install <package-name>
```
**TypeScript Errors**
For TypeScript issues, ensure all props and components are correctly typed. For example, the RootLayout component should be typed as:

**typescript**
```
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // component code
}
```
Clearing Cache
If you face persistent issues, try clearing the Next.js cache:






