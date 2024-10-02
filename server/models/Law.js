const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const commentSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
        },
        commentText: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    }
);

const lawSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        source: {
            type: String,
            trim: true,
        },
        description: {
            type: String, 
            required: true,
            trim: true,
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    }
);

const Law = model('Law', lawSchema);

module.exports = Law;