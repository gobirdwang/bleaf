'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //ARCGIS_API: '"https://js.arcgis.com/3.24/"',
  ARCGIS_API: '"http://localhost:12301/arcgis_js_api/library/3.28/3.28/"',
  MAP_SPATIALREFERENCE: '"4326"'
})
