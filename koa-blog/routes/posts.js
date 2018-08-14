const router = require('koa-router')();
const controller = require('../controller/c-post.js')
router.get('/', controller.getRedirectPosts);
router.get('/posts', controller.getPosts);

module.exports = router