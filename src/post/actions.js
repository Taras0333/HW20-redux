import React from "react";
export const changeCount = (messagesCount, messagesActive, sharesCount, sharesActive, likesCount, likesActive) =>({
      type: "CHANGE_COUNT",
      likes: messagesCount,
      messagesActive: messagesActive,
      sharesCount: sharesCount,
      sharesActive: sharesActive,
      likesCount: likesCount,
      likesActive: likesActive
  })