import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Blog from '../components/Blog';
import LoadingBox from '../components/LoadingBox';
import ErrorBox from '../components/ErrorBox';
import { listBlogs, listBlogCategories } from '../actions/blogActions';
import { listArticles } from '../actions/articleActions';
import Article from '../components/Article';

function HomeScreen(props) {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  useEffect(() => {
    dispatch(listArticles());
    return () => {
      //
    };
  }, []);
  const category = props.match.params.id ? props.match.params.id : '';
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const blogList = useSelector((state) => state.blogList);
  useEffect(() => {
    dispatch(listBlogs(category, searchKeyword, sortOrder));

    return () => {
      //
    };
  }, [dispatch, category]);

  const { loading, blogs, error } = blogList;

  const { loading: loadingArticles, articles, error: errorArticle } = articleList;

  return (
    <div class='container'>
    <div class='row middle-xs header'>
        <div class='col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4'>
          <div class='menu-item '>
            <Link to="/work">Work</Link>
          </div>
        </div>
        <div class='first-xs first-sm first-md initial-order-lg initial-order-xl col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
          <div class='menu-item site-title'>
            <Link to="/">Bobby Moyer</Link>
          </div>
        </div>
        <div class='col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4'>
          <div class='menu-item menu '>
            <Link to="/about">About</Link>
          </div>
        </div>
    </div><div class='content'>
    <div class='row center-xs'>
        <div class='col-xs-12 home-photo'>
            <div>
                            <img src="/assets/homeImg.png" alt="" />
            </div>
        </div>
    </div>
    <div class='row center-xs'>
        <div class='col-xs-12 site-subhead'>
            <div>
                <p>I’m a writer based in Denver, CO.</p>            </div>
        </div>
    </div>
</div>

  
</div>
    
  );
}
export default HomeScreen;





