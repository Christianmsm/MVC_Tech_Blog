const { Model, DataTypes } =  require('sequelize');
const sequelize = require('../config/connection');

class CommentPost extends Model {}

CommentPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Comment',
                key: 'id',
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Post', //confirm this is correct
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment_post',
    }
);

module.exports = CommentPost;