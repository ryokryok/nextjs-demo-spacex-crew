# introduce site for SpaceX crews

## aim

This is study and demo site with [Next.js](https://nextjs.org/).

If you want to create static site with Next.js + TypeScript, this repo will help you.

### attention

This site deploy to [Vercel](https://vercel.com/home).

When you deploy this repo to another service, you should check this article.

[https://vercel.com/docs/concepts/next.js/image-optimization](https://vercel.com/docs/concepts/next.js/image-optimization)

or, replace `<Image>` of `next/image`  to `<img>` tag, and disable eslint rule.

`.eslintrc.json`

```json
"rules": {
  "@next/next/no-img-element": "off"
}
```

## CLI

```bash
// launch dev server
yarn dev
// production build
yarn build
// production server  (need `yarn build`)
yarn start
```


## Thanks

SpaceX API

[https://github.com/r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API)

favicon icon by Alexey Belonogov

[https://www.iconfinder.com/icons/2944251/helmet_space_spacex_suit_icon](https://www.iconfinder.com/icons/2944251/helmet_space_spacex_suit_icon)

## License

MIT
