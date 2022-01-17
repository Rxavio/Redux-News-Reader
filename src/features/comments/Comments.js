import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCommentsForArticleId,
  isLoadingComments,
} from '../comments/commentsSlice';
import { selectCurrentArticle } from '../currentArticle/currentArticleSlice';
import CommentForm from '../../components/CommentForm';

const Comments = () => {
  const dispatch = useDispatch();
  const article = useSelector(selectCurrentArticle);
  const commentsAreLoading = useSelector(isLoadingComments);

  useEffect(() => {
    if (article) dispatch(loadCommentsForArticleId(article.id));
  }, [dispatch, article]);

  if (commentsAreLoading) return <div>Loading Comments</div>;
  if (!article) return null;

  return (
    <div className='comments-container'>
      <h3 className='comments-title'>Comments</h3>
      <CommentForm articleId={article.id} />
    </div>
  );
};
export default Comments;