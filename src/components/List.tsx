import { useState } from 'react';

interface ListProps {
  list: string[];
  heading: string;
  onSelectItem: (listItem: number, listName: string) => void;
}

export default function List({ list, heading, onSelectItem }: ListProps) {
  const [select, setSelect] = useState(-1);

  const message = list.length === 0 && <p>No item found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {list.map((name, idx) => (
          <li
            key={idx}
            className={
              select === idx ? 'list-group-item active' : 'list-group-item'
            }
            onClick={() => {
              setSelect(idx);
              onSelectItem(idx, name);
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
