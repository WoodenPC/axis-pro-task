import React, { memo, useState, useCallback } from 'react';
import { Checkbox } from './Checkbox';

export type Node = {
  children?: Node[];
  value?: string;
  key?: string;
}

type TreeNodeProps = {
  node: Node;
  depth: number;
  nodeKey: React.Key;
};

const TreeNode: React.FC<TreeNodeProps> = memo(({ node, nodeKey, depth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  console.log(node.children);
  return (
    <li className='TreeNode'>
      <div>
          {node.key &&
          <span className='TreeNode-Value'>
            <span className='TreeNode-ValueText'>
              {node.value}
            </span>
          </span>}
          {node.children &&
          <Checkbox
            id={`c${nodeKey}`}
            onClick={onOpenClick}
            checked={isOpen}
          />}
      </div>
      {node.children && <ul className='TreeNode-Children'>
        {node.children.map((childNode, index) => (
          <TreeNode
            depth={depth + 1}
            key={`${nodeKey}-${index}`}
            nodeKey={`${nodeKey}-${index}`}
            node={childNode}
          />
        ))}
      </ul>}

      <style jsx>{`
        .TreeNode {
          list-style-type: none;
        }

        .TreeNode-Value {
          position: relative;
          color: #11484a;
        }

        .TreeNode-Value::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -32px;
          display: block;
          width: 0;
          border-left: 1px solid #777;
          content: "";
          z-index: 0;
          height: 18px;
        }

        .TreeNode-Value::after {
          position: absolute;
          top: 0;
          left: -32px;
          display: block;
          height: 8px;
          width: 30px;
          border-bottom: 1px solid #777;
          border-left: 1px solid #777;
          content: '';
          z-index: 0;
        }

        .TreeNode:last-child .TreeNode-Value::before {
          height: 18px;
          top: -12px;
        }

        .TreeNode:first-child .TreeNode-Value::before {
          height: 100%;
          bottom: auto;
        }

        .TreeNode:first-child {
          padding-top: 18px;
        }

        .TreeNode-Children::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: -32px;
          display: block;
          width: 0;
          border-left: 1px solid #777;
          content: "";
          z-index: 0;
          height: 18px;
        }
      `}</style>
    </li>
  );
});

export { TreeNode };