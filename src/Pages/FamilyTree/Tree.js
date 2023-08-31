import React from "react";
import "./tree.css";

const TreeArr = [
  {
    id: 1,
    title: "Seven Samurai",
    img: "https://clipart-library.com/images/kTKo7BB8c.png",
    children: [
      {
        id: 2,
        title: "Child 1",
        img: "https://clipart-library.com/images/kTKo7BB8c.png",

        children: [
          {
            id: 3,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",

            children: [
              {
                id: 9,
                title: "heheh",
                img: "https://clipart-library.com/images/kTKo7BB8c.png",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Child 1",
        img: "https://clipart-library.com/images/kTKo7BB8c.png",

        children: [
          {
            id: 5,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",
          },
          {
            id: 6,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",
          },
          {
            id: 7,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",
          },

          {
            id: 8,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",
          },
          {
            id: 9,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",
          },
          {
            id: 10,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",
          },
        ],
      },
      {
        id: 11,
        title: "Child 2",
        img: "https://clipart-library.com/images/kTKo7BB8c.png",

        children: [
          {
            id: 12,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",
          },
          {
            id: 13,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",
          },
          {
            id: 14,
            title: "Child 1.1",
            img: "https://clipart-library.com/images/kTKo7BB8c.png",
          },
        ],
      },
    ],
  },
];

const TreeNode = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li key={item.id}>
        <img src={item.img} style={{ width: 80 }} />
        <br></br>
        <a href="#" className="targaryen">
          {item.title}
        </a>
        {item.children && <TreeNode data={item.children} />}
      </li>
    ))}
  </ul>
);

const Tree = () => {
  return (
    <div id="container">
      {TreeArr.map((data) => (
        <div className="tree" key={data.id}>
          <TreeNode data={[data]} />
        </div>
      ))}
    </div>
  );
};

export default Tree;
