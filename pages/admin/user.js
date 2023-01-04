import React from "react";
import Navigation from "../../component/Navigation";

const User = () => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Navigation />
      <MainUser />
    </div>
  );
};

const MainUser = () => {
  return (
    <div style={{ flex: "1 1 0" }}>
      <div style={{ width: "100%" }}>
        <table>
          <thead>
            <tr>
              <td>Tên người dùng</td>
              <td>Email</td>
              <td>Tên đầy đủ</td>
              <td>Chức vụ</td>
              <td>Ảnh đại diện</td>
              <td>Địa chỉ</td>
              <td>Số điện thoại</td>
              <td>Trạng thái</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
