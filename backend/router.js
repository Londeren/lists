import Router from 'koa-router';
import Api from './http/controllers/Api';

const router = new Router()
  .get('/', function(ctx, next) {
    ctx.body = 'Index';
  });


const apiRouter = new Router({
  prefix: '/api'
})
  .get('/templates', Api.templates)
  .get('/lists', function(ctx, next) {
    ctx.body = 'Lists';
  });


router.use(apiRouter.routes());

export default router;
