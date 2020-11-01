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

The config file `config.js` allows you to configure your navigation on the top and the links at the bottom. Set it to `null` if you want to deactivate it e.g. `nav: null`.

Place your logo in `content/.vuepress/public/` and define the filename in `content/.vuepress/config.js` under the `logo` key in the `themeConfig` config e.g. `logo: 'logo.svg'`.

You can also set the height for the header. Use the `mastheadHeight` key under the `themeConfig` config to e.g. `mastheadHeight: '100px'`.

You can make use of [Markdown](https://daringfireball.net/projects/markdown/syntax) and HTML.

Include an image.

```markdown
![Description](./image.png)
```

Please, refer with a relative path (`./` in the following example) to the image.

You can set the `containerWidth` under the `themeConfig` key to l, m or s.

For more details on VuePress have a look at the [VuePress documentation](https://v1.vuepress.vuejs.org/).

The documentation for the components can be found on [Github](https://github.com/abaldeweg/components).
