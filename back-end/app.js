'use strict'

const Koa = require('koa')
const koaBody = require('koa-body')
const Router = require('koa-router')
const cors = require('@koa/cors')

const pkg = require('../package')
const Fanfou = require('./utils/fanfou')

const app = new Koa()
const router = new Router()

router
  .get('/api', async ctx => {
    ctx.body = 'Fanfou for Kindle'
  })
  .get('/api/package', async ctx => {
    ctx.body = pkg
  })
  .post('/api/authorize', koaBody(), async ctx => {
    const {username, password} = ctx.request.body
    const result = await Fanfou.authorize(username, password)
    ctx.body = result
  })
  .post('/api/compose', koaBody(), async ctx => {
    const {oauth_token: oauthToken, oauht_token_secret: oauthTokenSecret, status} = ctx.request.body
    const result = await Fanfou.compose(oauthToken, oauthTokenSecret, status)
    ctx.body = result
  })
  .get('/api/timeline', async ctx => {
    const result = await Fanfou.timeline()
    ctx.body = result
  })
  .get('/api/preview', async ctx => {
    const result = await Fanfou.preview()
    ctx.body = result
  })

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
