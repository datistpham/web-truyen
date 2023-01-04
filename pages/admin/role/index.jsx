import { Button, Modal, Select } from 'antd'
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import Navigation from '../../../component/Navigation'
import { API_URL } from '../../../config';
import change_role_user from '../../api/admin/change_role_user';
import get_all_user from '../../api/admin/get_all_user'
const { Option } = Select;

const Role = () => {
  const [data, setData]= useState([])
  const [id, setId]= useState("")
  useEffect(()=> {
    get_all_user(setData)
  }, [])
  return (
    <div style={{width: '100%', display: "flex"}} className={"role-user"}>
        <Navigation />
        <MainRole data={data} setId={setId} id={id} />
    </div>
  )
}

const MainRole= ({data, setId, id})=> {
    const [open, setOpen]= useState(false)
    return (
        <div style={{flex: '1 1 0'}}>
            <div style={{width: '100%', display: 'flex'}} className={"main-role"}>
                <table>
                    <thead>
                        <tr>
                            <td>Email</td>
                            <td>Họ Tên</td>
                            <td>Role</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, key)=> <tr key={key}>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td>
                                    <Button onClick={()=> {
                                        setOpen(true)
                                        setId(item.id)
                                    }} type="primary">
                                        Thay đổi role
                                    </Button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                open=== true && <ChangeRole id={id} setOpen={setOpen} open={open} />
            }
        </div>
    )
}

const ChangeRole= ({id, setOpen, open})=> {
    const [data, setData]= useState()
    const [role, setRole]= useState("")
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: API_URL+ "/v1/users/"+ id,
                method: "get",
                headers: {
                    "Authorization": "Bearer "+ Cookies.get("accessToken")
                }
            })
            const result= await res.data
            return setData(result)
        })()
    }, [id])
    return (
        <Modal title="Basic Modal" open={open} onOk={()=> {
            change_role_user(id, role)
        }} onCancel={()=> setOpen(prev=> !prev)}>
            <Select onChange={e=> setRole(e)} style={{width: "100%"}} defaultValue={data?.role}>
                <Option value={"user"}>User</Option>
                <Option value={"contributor"}>Contributor</Option>
                <Option value={"admin"}>Admin</Option>
            </Select>
      </Modal>
    )
}


export default Role