# Online Shop

This is a sample online shop project hosted on Vercel: https://online-shop-phi-six.vercel.app/

## Environment

Please create an .env file with the following variables:

### AUTH_SECRET

It will be used locally to encode session tokens.
A secret can be generated using the following command.

```bash
openssl rand -base64 32
```

Please set the generated secret as value of the variable.

### AUTH_URL

The variable is used by next-auth. Please set it to `http://localhost:3000`.

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
