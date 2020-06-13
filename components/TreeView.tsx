import React, { memo } from 'react';

import { TreeNode } from './TreeNode';
import type { Node } from './TreeNode';

type TreeViewProps = {
  data: Node | Node[];
}

const TreeView: React.FC<TreeViewProps> = memo(({ data }) => {
  return (
    <div className='TreeView'>
      <div className='TreeView-Header'>
        <span>Свойства</span>
        <span>Значения</span>
      </div>
      <ul className='TreeView-Body'>
        {
          Array.isArray(data) ? (
            data.map((node, index) => (
              <TreeNode
                key={index}
                node={node}
              />
            ))
          ) : (
            <TreeNode node={data} key='0' />
          )
        }
      </ul>

      <style jsx>{`
        .TreeView {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          overflow: scroll;
          width: 100%;
          height: 100%;
        }

        .TreeView-Wrapper {
          margin: 0 auto;
        }

        .TreeView-Header {
          color: grey;
          font-size: 20px;
        }

        .TreeView-Header > span {
          margin-right: 5px;
        }

        .TreeView-Body {
          display: flex;
          flex-direction: column;
          list-style-type: none;
        }
      
      `}</style>
    </div>
  );
});

export { TreeView };