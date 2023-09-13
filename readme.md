npm init -y
npm i -D typescript nodemon ts-node
npx tsc --init
npx tsc

     "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  },


tsconfig.json
    {
  "compilerOptions": {
    "outDir": "dist",
    "esModuleInterop": true,
    "module": "CommonJS",
    "moduleResolution": "Node",
    "baseUrl": "src",
  },
  "ts-node": {
    "esm": true
  },
}