export default {
  name: "likes",
  title: "Likes",
  type: "document",
  fields: [
    {
      name: "post",
      title: "Post",
      type: "reference",
      to: { type: "post" },
    },
    {
      name: "likesCount",
      title: "Likes count",
      type: "number",
    },
  ],
};
