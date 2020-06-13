import React, { memo, useState, useCallback } from 'react';
import { Checkbox } from './Checkbox';

export type Node = {
  title?: string;
  children?: Node[];
  value?: string;
  key?: string;
}

type TreeNodeProps = {
  node: Node;
  key?: React.Key;
};

const TreeNode: React.FC<TreeNodeProps> = memo(({ node, key }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  return (
    <li className='TreeNode' key={key}>
      {node.key && <div className='TreeNode-Key'>
        {node.key}
        {node.children && <Checkbox
          id={node.title}
          onClick={onOpenClick}
          checked={isOpen}
        />}
      </div>}
      <div className='TreeNode-Value'>{node.value}</div>
      {node.children && <ul className='TreeNode-Children'>
        {isOpen && node.children.map((childNode, index) => (
          <TreeNode
            key={`${key}-${index}`}
            node={childNode}
          />
        ))}
      </ul>}

      <style jsx>{`

        .TreeNode, .TreeNode-Children {
          list-style-type: none;
        }

        .TreeNode-Title {
          font-weight: 900;
        }

        .TreeNode-Title, .TreeNode-Value, .TreeNode-Key {
          display: inline-block;
          color: #11484a;
          padding: 10px;
        }

        .TreeNode-Value {
          font-weight: 400;
        }
      `}</style>
    </li>
  );
});

export { TreeNode };