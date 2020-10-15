import React from "react";

export const change = (content, author, img) => ({
  type: "CHANGE_CONTENT",
  content: content,
  author: author,
  photo: img
  })