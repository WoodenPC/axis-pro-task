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
        <span className='TreeView-HeaderKeys'>Свойства</span>
        <span className='TreeView-HeaderValues'>Значение</span>
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
          width: 100%;
        }

        .TreeView-HeaderKeys {
          width: 40%;
          display: inline-block;
          text-align: right;
          margin-right: 200px;
        }

        .TreeView-HeaderValues {
          width: 40%;
          display: inline-block;
          margin-left: -150px;
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