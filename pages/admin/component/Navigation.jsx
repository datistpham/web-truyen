import React from 'react';
import { AppstoreOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Danh sách user', null, null, [getItem(<Link href="/admin/user">Danh sách user</Link>, '1')], 'group'),
  ]),
  getItem('Category', 'sub2', <AppstoreOutlined />, [
    getItem(<Link href="/admin/category">Danh sách category</Link>, '5'),
    getItem(<Link href="/admin/category/add">Thêm category</Link>, '6'),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];
const Navigation = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Navigation;