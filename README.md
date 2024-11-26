# Online Shop

This is a sample online shop project hosted on Vercel: https://online-shop-phi-six.vercel.app/

## Env

Please create an .env file with a variable "AUTH_SECRET". It will be used locally to encode session tokens.
A secret can be generated using the following command.

```bash
openssl rand -base64 32
```

Please set it as value of the variable.

## Run locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

To run test automation, please execute:

```bash
npm run test
```

## Formatting

To format the codebase, please execute:

```bash
npm run format
```

## Generate GraphQL code

To update the type declaration of your GraphQL queries, execute:

```bash
npm run generate
```
