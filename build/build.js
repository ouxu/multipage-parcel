const glob = require('glob')
const path = require('path')
const Bundler = require('parcel-bundler')

const htmlEntry = glob.sync('src/**/*.html')

htmlEntry.forEach((html) => {
  new Bundler(html, {
    noCache: true,
    outDir: path.dirname(html).replace('src', 'dist'),
    production: true,
    publicUrl: './',
    sourceMaps: false
  }).bundle()
})
