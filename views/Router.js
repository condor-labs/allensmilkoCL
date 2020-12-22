import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';

const moduleURL = new URL(import.meta.url);

const __dirname = path.dirname(moduleURL.pathname);

const ViewsRouter = express();

// SETTING VEW ENGINE AND STATIC FOLDERS
const pages = path.join(__dirname, 'pages');
const layouts = path.join(__dirname, 'layouts');
    
nunjucks.configure([pages, layouts], {
      autoescape: true, 
      express: ViewsRouter,
      watch: true
});

ViewsRouter.set('view engine', 'html');
ViewsRouter.set('views', [pages, layouts]);
ViewsRouter.engine('html', nunjucks.render);
ViewsRouter.use(express.static('public'));

ViewsRouter.get("/", (req, res, next) => {
    console.log(' views ')
    res.render(`home.html`, {title: 'Trainning Condor labs.io'});
});

export default ViewsRouter;