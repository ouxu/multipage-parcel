# multipage-parcel

> 基于 Parcel 打包的多入口模板

### Quick Start

#### Clone Repository

```bash
git clone https://github.com/ouxu/multipage-parcel.git
cd multipage-parcel
npm install
```

#### Development

```bash
npm run dev
```

It works as `parcel watch xxx`, the file will generate to `/dist` directory without start web service. you should
start a web service in the dist directory.

#### Production

```bash
npm run build
```

It works as `parcel build xxx`, the file will also generate to `/dist` directory.

### How it work

The entry is collected by `glob`, then use the `parcel-bundler` instance to deal these entry files.

You can see the code of `build/dev.js` & `build/build.js`

### How to config parcel

After you see the code of `build/dev.js` & `build/build.js` you will know.

### Inspired

+ [brandonxiang/multipage-parcel](https://github.com/brandonxiang/multipage-parcel)




