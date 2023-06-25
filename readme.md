## //Read this first//
**Shinobu** does not purify html by default, in most cases this can be unsafe.\
but theres an option to make a function that can be used to purify html.
```js
shinobu.purifyHTML = (HTML) => {
  ...
  return pureHTML;
};
```
### Also note
**Shinobu** is for single page apps.

# Shinobu <img src='https://files.catbox.moe/3z5ev4.gif' height=28 />
Fast, simple and **vanilla** javascript 🍦 web framework for weebs.

## Script
```js
https://shinobu.js.org/v0.0.1/script.js
```

### Include script
```js
<script src='https://shinobu.js.org/v0.0.1/script.js'></script> 
```

## ShinobuApp({});
```js
ShinobuApp({
  o,
  lazy,
  html,
  dynamicHtml, 
  props,
  dynamicProps,
  funcs,
});
```

### Usage
```js
ShinobuApp({
  o: '..',
  lazy: '..',
  html: `
    ..
  `,
  dynamicHtml: (props, dynamicProps) => {
    return '..';
  },
  props: {
    a: 0,
  },
  dynamicProps: () => {
    return {};
  },
  funcs: {
    onload: () => console.log('app load success >w<'),
  },
});
```

# Donut 🍩

## Include `donut`
```html
<html id='donut'>
  ...
</html>
```

## O
Takes in **`donut`** 🍩.

```js
ShinobuApp({
  o: o('#app'),
  ...
});
```

## Lazy
Takes in html that pops up and waits for **`dynamicProps`**.
```js
ShinobuApp({
  ...
  lazy: '< loading />',
  ...
});
```

## Html

### html
Takes in **`app`** html.
```js
ShinobuApp({
  ...
  html: '< app />',
  ...
});
```

### dynamicHtml: () => {};
Takes in a function that returns **`app`** html.
```js
ShinobuApp({
  ...
  dynamicHtml: async (props, dynamicProps) => {
    return '< app />';
  },
  ...
});
```

## Props

### props: {};
Takes in data/props
```js
ShinobuApp({
  ...
  props: {
    id: 2,
  },
  ...
});
```

### dynamicProps: () => {};
Takes in a function that returns props.
```js
ShinobuApp({
  ...
  dynamicProps: async () => {
    return {id: 2};
  },
  ...
});

```

## Funcs: {};
Takes in functions `funcs.onload`.
```js
ShinobuApp({
  ...
  html: `
    < onclick=funcs.onclick() />
  `,
  ...
  funcs: {
    onload: () => console.log('app load success >w<'),
    onclick: () => console.log('clicked >w<'),
    ...
  },
});

```

## shinobu{};

### onError
Runs when theres a new error. 
```js
shinobu.onError = (err) => console.error(err);
```
But you can kill errors.
```js
shinobu.onError = (err) => {};
```