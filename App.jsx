import React, { useState } from "react";
import { Input, Button, List, Avatar, Row, Col, Card } from "antd";
import axios from "axios";

// const { Meta } = Card;

const UserSearch = () => {
  //关键词与用户状态必须
  const [keyword, setKeyword] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    //输入为空返回
    if (!keyword.trim()) return;

    setLoading(true);

    try {
      const response = await axios.get(
        // `https://api.github.com/search/users?q=${encodeURIComponent(keyword)}`
        `https://api.github.com/search/users?q=${keyword}`
      );
      setUsers(response.data.items);
    } catch (err) {
      // setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="header"
        style={{ marginBottom: 20, justifyContent: "center", display: "flex" }}
      >
        <Input
          placeholder="Enter keyword to search users"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onPressEnter={handleSearch}
          style={{ width: 300, marginRight: 10 }}
        />
        <Button type="primary" onClick={handleSearch} loading={loading}>
          Search
        </Button>
      </div>

      {/* <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={user.avatar_url} />}
              title={<a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>}
              description={`User ID: ${user.id}`}
            />
          </List.Item>
        )}
      /> */}
        {users.map((user) => (
            <Card
              hoverable
              loading={loading}
              cover={<img alt="avatar" src={user.avatar_url} />}
              style={{ width: 200, margin: "10px auto", display: "inline-block" ,marginLeft: "50px"}}
              actions={[
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {user.login}
                </a>
              ]}
            >
              {/* <Meta
                avatar={<Avatar src={user.avatar_url} />}
                title={user.login}
                description={`ID: ${user.id}`}
              /> */}
            </Card>
        ))}
    </div>
  );
};

export default UserSearch;
