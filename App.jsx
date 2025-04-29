import React, { useState } from "react";
import "./App.css";

function NewsApp() {
  const [newsData] = useState([
    {
      id: 1,
      title: "苹果微软亚马逊领衔，谁是下一个万亿市值巨头？",
      content: "2021-11-10",
    },
    { id: 2, title: "互联网下一站不能再以方便牺牲安全", content: "2021-11-11" },
    {
      id: 3,
      title: "工信部：到2025年行政村5G通达率将达八成",
      content: "2021-11-12",
    },
    { id: 4, title: "商业地产服务智慧化凸显", content: "2021-11-13" },
    { id: 5, title: "数据分析师：海量信息的“淘金者”", content: "2021-11-14" },
    {
      id: 6,
      title: "为什么互联网大厂[容不下」35岁中年人？”",
      content: "2021-11-15",
    },
  ]);

  // 搜索输入框的值
  const [searchTerm, setSearchTerm] = useState("");
  // 搜索关键词
  const [searchQuery, setSearchQuery] = useState("");

  // 过滤新闻
  const filteredNews = newsData.filter((news) =>
    news.title.includes(searchQuery)
  );

  const handleNewsClick = (title) => {
    alert(title);
  };

  // 处理回车
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchTerm); // 回车更新
      console.log("搜索关键词:", searchTerm);
    }
  };

  return (
    <div className="news-app">
      <div className="search-container">
        <input
          type="text"
          placeholder="搜索新闻..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 更新输入框
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="news-list">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            className="news-item"
            onClick={() => handleNewsClick(news.title)}
          >
            <h3>{news.title}</h3>
            <p>{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsApp;
