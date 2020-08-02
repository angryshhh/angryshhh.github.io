import React from 'react';
import RepoItem from './components/RepoItem';
import './App.css';

import LeetCodePic from './components/LeetCode.svg';
import BlogPic from './components/blog.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <RepoItem
        href="https://angryshhh.github.io/my-blog"
        title="我的博客"
      >
        <img src={BlogPic} alt="我的博客" />
      </RepoItem>
      <RepoItem
        href="https://angryshhh.github.io/my-leetcode-page"
        title="我的力扣"
      >
        <img src={LeetCodePic} alt="我的力扣" />

      </RepoItem>
      
    </div>
  );
}

export default App;
