# baldeweg/cms-businesscard

A simple CMS for your business card. Present yourself in an easy way.

## Requirements

- NodeJS 12 <https://nodejs.org/en/>
- Yarn <https://classic.yarnpkg.com/lang/en/>

## Getting Startet

Download this [archive](https://github.com/abaldeweg/cms-businesscard) and extract the file. Install the dependencies with `yarn install`.
Now you can edit the files in the content directory. Run `yarn watch` to see your changes.

To build the static files you just have to run `yarn build`. Upload the files from the dist directory to the webspace.

## Content

The config file `config.js` allows you to configure your navigation on the top and the bottom links. Set it to `null` if you want to deactivate it e.g. `nav: null`.

Include an image. Please, refer with an relative path (`./` in the following example) to the image.

```markdown
![Description](./image.png)
```

For more details on VuePress have a look at the [VuePress documentation](https://v1.vuepress.vuejs.org/).

The documentation for the components can be found on [Github](https://github.com/abaldeweg/components).
