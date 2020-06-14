import React, { memo, useState, useCallback, useMemo } from 'react';
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

const TreeNode: React.FC<TreeNodeProps> = memo(({ node, nodeKey, depth, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onOpenClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);
  const transformStyle = useMemo(() => {
    return { transform: `translateX(${25 * depth}px)` };
  }, [depth]);
  return (
    <li className='TreeNode'>
      {node.key && <span className='TreeNode-Branch' style={transformStyle}></span>}
      {
        <div className='TreeNode-Body'>
          <span className='TreeNode-Key'>
            <span className='TreeNode-KeyTitle'>{children}</span>
            {node.key}
          </span>
          <span className={`TreeNode-Value ${children && 'TreeNode-ValueFirst'}`} style={transformStyle}>
          {node.children &&
            <Checkbox
                id={`c${nodeKey}`}
                onClick={onOpenClick}
                checked={isOpen}
              />
          }
            {node.value}
          </span>
        </div>
      }
      {isOpen && node.children &&
        <ul className='TreeNode-Children'>
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
          position: relative;
          padding-top: 5px;
          padding-bottom: 5px;
        }

        .TreeNode-Value {
          position: relative;
          color: #11484a;
          width: 50%;
          word-break: break-word;
        }

        .TreeNode-Branch {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: calc(40% - 16px);
          height: calc(100% + 10px);
          display: block;
          width: 0;
          border-left: 1px solid #ccc;
        }

        .TreeNode-Children > .TreeNode:last-child .TreeNode-Branch {
          border-left: 1px solid transparent;
        }

        .TreeNode-KeyTitle ~ .TreeNode-Key {
          border-right: 1px solid #000;
        }

        .TreeNode-Value::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -16px;
          bottom: 50%;
          width: 12px;
          border: 1px solid #ccc;
          border-top: 0 none transparent;
          border-right: 0 none transparent;
        }

        .TreeNode-ValueFirst::before {
          border-left: 0 none transparent;
        }

        .TreeNode-Key {
          color: #11484a;
          box-sizing: border-box;
          width: 40%;
          word-break: break-word;
          text-align: right;
          display: block;
          transform: translateX(-20px);
        }

        .TreeNode-KeyTitle {
          font-weight: 900;
        }

        .TreeNode-Children {
          padding-left: 0;
        }

        .TreeNode-Body {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </li>
  );
});

export { TreeNode };