//Imports all the different models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const CommentPost = require('./CommentPost');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, { //**Check if this is correct**
    through: {
        model: CommentPost,
        unique: false,
    }
});

Comment.belongsToMany(Post, { //**Check if this is correct**
    through: {
        model: CommentPost,
        unique: false,
    }
})

//Exports all of the models
module.export = {
    User,
    Post,
    Comment,
    CommentPost,
};