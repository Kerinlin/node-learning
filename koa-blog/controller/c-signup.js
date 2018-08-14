exports.getSignup = async ctx =>  {
  await ctx.render('signup', {
    session: ctx.session
  });
}

exports.postSignup = async ctx => {
  ctx.body = {
    code: 200,
    message: '注册成功'
  }
}