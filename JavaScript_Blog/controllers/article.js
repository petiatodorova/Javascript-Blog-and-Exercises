const Article = require('../models').Article;
const User = require('../models').User;

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },

    createPost: (req, res) => {
        //take values from request
        const title = req.body.title;
        const content = req.body.content;

        let errorMsg = false;

        if (!req.isAuthenticated()) {
            errorMsg = 'You must be logged in before creating articles.';
        } else if (!title) {
            errorMsg = 'Title cannot be empty.';
        } else if (!content) {
            errorMsg = 'Title cannot be empty.';
        }

        if(errorMsg) {
            res.render('article/create', {error: errorMsg, title, content});
            return;
        }

        //find the author
        const authorId = req.user.id;

        const article = {
            title,
            content,
            authorId
        };

        Article.create(article).then(article => {
            res.redirect('/');
        }).catch(e => {
            console.log(e.message);
            res.render('article/create');
        })
    },

    details: (req, res) => {
        const articleId = Number(req.params.id);
        Article.findById(articleId, {
            include: [{
                model: User
            }]
            }).then(article => {
            res.render('article/details', article.dataValues)
        }).catch(e => {
            console.log(e.message);
            res.redirect('/404');
        });

    }
};