import React, { memo } from 'react';

import { TreeNode } from './TreeNode';
import type { Node } from './TreeNode';

export type TreeViewData = {
  title: string;
  node: Node;
}

type TreeViewProps = {
  data: TreeViewData[];
}

const TreeView: React.FC<TreeViewProps> = memo(({ data }) => {
  return (
    <div className='TreeView'>
      <div className='TreeView-Header'>
        <span>Свойства</span>
        <span>Значения</span>
      </div>
      
      <ul className='TreeView-Body'>
        {data.map((item, index) => (
            <TreeNode
              depth={0}
              key={index}
              nodeKey={index}
              node={item.node}
            >{item.title}</TreeNode>
          ))
        }
          </ul>
      <style jsx>{`
        .TreeView {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          overflow: scroll;
          height: 100%;
          width: 100%;
        }

        .TreeView-Wrapper {
          margin: 0 auto;
        }

        .TreeView-Header {
          color: grey;
          font-size: 18px;
          margin: 0 auto;
          margin-top: 40px;
        }

        .TreeView-Header > span {
          margin-right: 120px;
          margin-left: -100px;
        }

        .TreeView-Body {
          display: flex;
          flex-direction: column;
          list-style-type: none;
          width: 100%;
          padding-left: 0;
          position: relative;
        }

      `}</style>
    </div>
  );
});

export { TreeView };