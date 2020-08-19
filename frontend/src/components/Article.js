import React from 'react';
import { Link } from 'react-router-dom';


const Article = props => (
  <ul>
<li><a target="_blank" href={props.articleLink}>{props.articleHeadline} | <em>{props.publication}</em></a></li>
</ul>


 
);
export default Article;
