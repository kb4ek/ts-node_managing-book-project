import { Router } from 'express';
import getBookValidation from '@Middleware/book/get/_validation';
import checkValidation from '@Middleware/common/checkValidation';
import getBook from '@Middleware/book/get/getBook';
import getBookCommentValidation from '@Middleware/book/comment/get/_validation';
import getBookComment from '@Middleware/book/comment/get/getBookComment';
import postBookCommentValidation from '@Middleware/book/comment/post/_validation';
import postBookComment from '@Middleware/book/comment/post/postBookComment';
import deleteBookCommentValidation from '@Middleware/book/comment/delete/_validation';
import deleteBookCommnet from '@Middleware/book/comment/delete/deleteBookComment';
import putBookCommentValidation from '@Middleware/book/comment/put/_validation';
import putBookComment from '@Middleware/book/comment/put/putBookComment';
import BookCommentReportValidation from '@Middleware/book/comment/report/_validation';
import bookCommentReport from '@Middleware/book/comment/report/report';
import postBookLikeValidation from '@Middleware/book/like/_validation';
import postBookLike from '@Middleware/book/like/postBookLike';

const router: Router = Router();

router.get('/', getBookValidation);
router.post('/like', postBookLikeValidation);
router.get('/comment', getBookCommentValidation);
router.post('/comment', postBookCommentValidation);
router.put('/comment', putBookCommentValidation);
router.delete('/comment', deleteBookCommentValidation);
router.post('/report', BookCommentReportValidation);

router.use(checkValidation);

router.get('/', getBook);
router.post('/like', postBookLike)
router.get('/comment', getBookComment);
router.post('/comment', postBookComment);
router.put('/comment', putBookComment);
router.delete('/comment', deleteBookCommnet);
router.post('/report', bookCommentReport);

export default router;