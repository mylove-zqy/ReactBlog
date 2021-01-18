import request from "./index";

export function getArticleDetail(article_id) {
  return request({
    url: "/article/get_one_article",
    params: {
      article_id,
    },
  });
}

export function changeArticleReadingCount(article_id) {
  return request({
    method: "post",
    url: "/article/updateViewCount",
    data: {
      article_id,
    },
  });
}

export function getArticleComment(article_id) {
  return request({
    url: "/comment/article_comment",
    params: {
      article_id,
    },
  });
}

export function addComment(config) {
  // console.log(config);
  return request({
    url: "/comment/add_comment",
    method: "post",
    data: {
      themeId: config.themeId,
      comment: config.comment,
      fatherId: config.fatherId,
      userId: config.userId,
      levelId: config.levelId,
      type:config.type
    },
  });
}
