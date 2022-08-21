This is a Dockerized [Next.js](https://nextjs.org/) project.

## Demo

You can check [demo](https://june50232.github.io/next-typescript-tailwind-starter/)

## Features

- [React.js 17](https://reactjs.org/blog/2020/10/20/react-v17.html) - Blog introduce react v17.0.
- [Next.js 12](https://nextjs.org/blog/next-12) - Blog introduce next.js 11.
- [Typescript 4](https://www.typescriptlang.org/) - Documentation of typescript.
- [Tailwind CSS 3](https://tailwindcss.com/docs/) - Documentation of tailwind css.
- [Docker](https://docs.docker.com/) - Documentation of Docker.
- [Eslint 7](https://eslint.org/docs/user-guide/getting-started) - Documentation of eslint.
- [Prettier 2](https://prettier.io/docs/en/index.html) - Documentation of prettier.
- [Husky 7](https://typicode.github.io/husky/#/) - Documentation of husky.
- [Lint Staged 12](https://github.com/okonet/lint-staged) - Documentation of lint staged.

## Usage

This project using node >= 12.13.0 & yarn

#### Docker Compose Hot Reload

```bash
docker-compose up -d --build
```

#### Docker Debug

```bash
docker create --name="tmp_$$" image:tag
docker export tmp_$$ | tar t
docker rm tmp_$$
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Github page

It's easy to use the Github Actions to publish on [Gitbub Page](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

Copyright © 2022 by June
