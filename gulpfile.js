const gulp = require('gulp')
const watch = require('gulp-watch')
const webpack = require('webpack')
const browserSync = require('browser-sync').create()
const webpackConfig = require('./webpack.config.js')

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'public',
    },
  })

  watch('./src', () => {
    gulp.start('scripts')
  })

  watch('./public', () => {
    browserSync.reload()
  })
})

gulp.task('scripts', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.log(err.toString())
    }
    console.log(stats.toString())
    callback()
  })
})
