import React from 'react';
import './RepoItem.css'

interface RepoItemProps {
  href: string;
  title: string;
  picName?: string;
}

const RepoItem: React.FC<RepoItemProps> = (props) => {

  return <a
    href={props.href}
    className="RepoItem"
  >
    <div className="RepoPic">
      {props.children}
    </div>
    <div className="RepoTitle">
      {props.title}
    </div>
  </a>;
}

export default RepoItem;
