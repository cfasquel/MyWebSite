# MyWebSite

Hello and welcome to my website repository !

This is still a project and it is not finished. It uses Gatsby and based on "Resume" template by startbootstrap.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

Check online preview [here](https://anubhavsrivastava.github.io/gatsby-starter-resume/)

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

And run from your CLI:

```sh
gatsby new <site-name> https://github.com/cfasquel/MyWebSite
```

Then you can run it by:

```sh
cd gatsby-example-site
npm install
gatsby develop
```

### Personalization

Edit `config.js` to put up your details

```javascript
module.exports = {
  siteTitle: 'Gatsby Starter Resume', // <title>
  ...
  firstName: 'Clément',
  lastName: 'Fasquel',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/cfasquel',
    }
    ...
  ],
};

```

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.
