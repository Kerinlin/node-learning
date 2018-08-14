exports.getRedirectPosts=async ctx =>{
  ctx.redirect('/post');

}
exports.getPosts=async ctx =>{
  ctx.body='getPosts'
}