import React from "react";

const commentData = [
  {
    name: "Prajwal Patil",
    text: "Lorem ipsum dolor sit amet, consector adip",
    replies: []
  },
  {
    name: "Prajwal Patil",
    text: "Lorem ipsum dolor sit amet, consector adip",
    replies: []
  },
  {
    name: "Prajwal Patil",
    text: "Lorem ipsum dolor sit amet, consector adip",
    replies: [
      {
        name: "Prajwal Patil",
        text: "Lorem ipsum dolor sit amet, consector adip",
        replies: [
          {
          name: "Prajwal Patil",
          text: "Lorem ipsum dolor sit amet, consector adip",
          replies: [
            {
              name: "Prajwal Patil",
              text: "Lorem ipsum dolor sit amet, consector adip",
              replies: [
                {
                  name: "Prajwal Patil",
                  text: "Lorem ipsum dolor sit amet, consector adip",
                  replies: []
                },
              ]
            },
          ]
        },
      ]
      },
    ]
  },
  {
    name: "Prajwal Patil",
    text: "Lorem ipsum dolor sit amet, consector adip",
    replies: []
  },
  {
    name: "Prajwal Patil",
    text: "Lorem ipsum dolor sit amet, consector adip",
    replies: [
      {
        name: "Prajwal Patil",
        text: "Lorem ipsum dolor sit amet, consector adip",
        replies: []
      },
    ]
  },
  {
    name: "Prajwal Patil",
    text: "Lorem ipsum dolor sit amet, consector adip",
    replies: []
  },
  {
    name: "Prajwal Patil",
    text: "Lorem ipsum dolor sit amet, consector adip",
    replies: [
      {
        name: "Prajwal Patil",
        text: "Lorem ipsum dolor sit amet, consector adip",
        replies: []
      },
    ]
  },
];

const Comment = ({data}) => {
  const {name, text, replies } = data;
  return (
  <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
    <img className="w-12 h-12" 
    alt="user" 
    src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
    />
    <div className="px-3">
      <p className="font-bold">{name}</p>
      <p>{text}</p>
    </div>
  </div>
  );
};

const CommentsList = ({comments}) => {
  //Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
  <Comment key={index} data={comment} />
  <div className="pl-5 border border-l-black ml-5">
      <CommentsList comments={comment.replies} />
     </div>
  </div>
 ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentData} />
    </div>
  );
};


export default CommentsContainer;