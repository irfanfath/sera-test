# Picaso.com Overview

Picaso is an builds end-to-end AI solutions, machine learning,
and human-in-the-loop systems that supercharge the way.

## Technologies

- Axios
- Cypress
- Nextjs
- Reactjs
- Sass
- Socket.io
- Typescript

## Project Setup

1. Clone this repository
2. `npm install` or `yarn instal`
3. Change `example.env.development` to `env.development`
4. Insert API Service url in `env.development`
5. Run project `npm run dev` or `yarn dev`

## Design

[Figma link](https://www.figma.com/file/ZY6WwqvCb7aoAwXFTLYeu2/DSL-e-KYC?node-id=11%3A899)

## API Documentation

Lorem ipsum dolor sit amet, consectetur adipiscing

## Coding Style Guide

```
{
  "singleQuote": true,
  "tabWidth": 2,
  "semi": true
}
```

```
import { FC } from 'react';
import Image from 'next/image';

const MyComponent: FC = () => {
  return (
    <div className="bem-class">
      <div className="bem-class__inner">
        <Image src="/logo-picaso.png" alt="Picaso Team Logo" width={230} height={53} />
      </div>
    </div>
  );
};

export default SiteFooter;
```

## Development Workflow

Lorem ipsum dolor sit amet, consectetur adipiscing

## Responsive

```
// LG: Large devices (desktops, 992px and down)
@media screen and (max-width: 992px) {

}

// MD: Medium devices (tablets, 768px and down)
@media screen and (max-width: 768px) {

}

// SM: Small devices (landscape phones, 576px and down)
@media screen and (max-width: 576px) {

}
```

### Staging

When a pull request is merged to staging, it will automatically be deployed to the staging environment. After the build successfully completes, wait a few minutes for the changes to be reflected, and then access the staging app at http://staging.piscaso.co.id.

### Production

[piscaso.co.id](https://picaso.id)
