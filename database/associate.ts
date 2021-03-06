import User from "@Model/user.model";
import Book from "@Model/book.model";
import BookComment from "@Model/bookComment.model";
import BookCommentReport from '@Model/bookCommentReport.model';
import BookLike from '@Model/bookLike.model';

export const associate = () => {
  User.hasMany(Book, {
    sourceKey: 'pk',
    foreignKey: 'user_pk',
    as: 'book',
  });

  User.hasMany(BookComment, {
    sourceKey: 'pk',
    foreignKey: 'user_pk',
    as: 'bookComment',
  });

  User.hasMany(BookCommentReport, {
    sourceKey: 'pk',
    foreignKey: 'user_pk',
    as: 'bookCommentReport',
  });

  User.hasMany(BookLike, {
    sourceKey: 'pk',
    foreignKey: 'user_pk',
    as: 'bookLike',
  });

  Book.hasMany(BookComment, {
    sourceKey: 'pk',
    foreignKey: 'book_pk',
    as: 'bookComment',
  });

  Book.hasMany(BookCommentReport, {
    sourceKey: 'pk',
    foreignKey: 'book_pk',
    as: 'bookCommentReport',
  });

  Book.hasMany(BookLike, {
    sourceKey: 'pk',
    foreignKey: 'book_pk',
    as: 'bookLike',
  });

  Book.belongsTo(User, {
    foreignKey: 'user_pk',
    as: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  BookComment.hasMany(BookCommentReport, {
    sourceKey: 'pk',
    foreignKey: 'comment_pk',
    as: 'bookCommentReport',
  });

  BookComment.belongsTo(Book, {
    foreignKey: 'book_pk',
    as: 'book',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  BookComment.belongsTo(User, {
    foreignKey: 'user_pk',
    as: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  BookCommentReport.belongsTo(User, {
    foreignKey: 'user_pk',
    as: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  BookCommentReport.belongsTo(Book, {
    foreignKey: 'book_pk',
    as: 'book',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  BookCommentReport.belongsTo(BookComment, {
    foreignKey: 'comment_pk',
    as: 'bookComment',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  BookLike.belongsTo(User, {
    foreignKey: 'user_pk',
    as: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  BookLike.belongsTo(Book, {
    foreignKey: 'book_pk',
    as: 'book',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
};