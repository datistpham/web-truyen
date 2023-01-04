import Image from 'next/image'
import React, { useContext, useState } from 'react'
import {AiFillFolderOpen, AiOutlineSearch } from "react-icons/ai"
import {IoIosArrowDown} from "react-icons/io"
import {BiCategoryAlt} from "react-icons/bi"
import Link from 'next/link'
import { Modal, Input, Button } from 'antd';
import {IoIosNotifications} from "react-icons/io"
import signup from '../api/user/signup'
import swal from 'sweetalert'
import login from '../api/user/login'
import Cookies from 'js-cookie'

const Header = () => {
  return (
    <>
        <div style={{width: "100%", padding: 10, height: 60, borderBottom: "1px solid #e7e7e7", position: "fixed", top: 0, left: 0, zIndex: 99, background: "#fff"}} className={"c-flex-center"}>
            <div style={{width: "100%", maxWidth: 1200, justifyContent: "space-between"}} className={"c-flex-center"} >
                <Logo />    
                <Category />
                <div className={"c-flex-center"} style={{gap: 16}}>
                    <Notification />
                    <SearchBar />
                    {

                    }
                    <Login />
                </div>
            </div>
        </div>
        <div style={{height: 60}}></div>
    </>

  )
}

const Logo= ()=> {
    return (
        <Link href={"/"}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={40} height={40} style={{width: 40, aspectRatio: 1 / 1}} alt="" />
            </div>
        </Link>
    )
}

const Category= ()=> {
    return (
        <div style={{display: "flex", justifyContent: 'center', alignItems: "center", gap: 10}}>
            <ComponentCategory icon1={<AiFillFolderOpen color={"#2dc275"} />} title={"Danh sách"} icon2={<IoIosArrowDown color={"#000"} />} />
            <ComponentCategory icon1={<BiCategoryAlt color={"#2dc275"} />} title={"Thể loại"} icon2={<IoIosArrowDown color={"#000"} />} />
        </div>
    )
}

const ComponentCategory= ({icon1, title, icon2})=> {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 5}}>
            <div className={"c-flex-center"} style={{width: 18, height: 18}}>
                {icon1}
            </div>
            <div style={{fontWeight: 600}}>{title}</div>
            <div className={"c-flex-center"} style={{width: 18, height: 18}}>
                {icon2}
            </div>
        </div>
    )
}

const SearchBar= ()=> {
    return (
        <div className={"c-flex-center"} style={{minWidth: 250, height: 40, position: "relative"}}>
            <input placeholder={"Tìm tên truyện hoặc tác giả"} type="text" style={{width: "100%", height: "100%", borderRadius: 10, border: "none", background: "#f2f0f5", padding: 10, outlineColor: "#2e89ff"}} />
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", right: 0, top: "50%", transform: "translate(-50%, -50%)"}}>
                <AiOutlineSearch />
            </div>
        </div>
    )
}

const Login= ()=> {
    const [open, setOpen]= useState(false)
    const [toggle, setToggle]= useState(false)
    const [info, setInfo]= useState({})
    const [data, setData]= useState()
    return (
        <>
            <div onClick={()=> setOpen(prev=> !prev)} className={"c-flex-center"} style={{fontWeight: 600, cursor: "pointer"}}>
                Đăng nhập
            </div>
            {
                open=== true && toggle=== false && <Modal title="Đăng nhập" centered open={open} onCancel={()=> setOpen(()=> false)}
                    footer={[]}
                >
                    <div>
                        <div style={{marginBottom: 8}}>Email: </div>
                        <Input type={"email"} onChange={(e)=> setInfo(prev=> ({...prev, email: e.target.value}))} placeholder={"Email"} />
                    </div>
                    <br />
                    <div>
                        <div style={{marginBottom: 8}}>Mật khẩu: </div>
                        <Input onChange={(e)=> setInfo(prev=> ({...prev, password: e.target.value}))} type={"password"} placeholder={"Mật khẩu"} />
                    </div>
                    <br />
                    <div className={"c-flex-center"}>
                        <Button onClick={async ()=> {
                            const {message, status, accessToken, signin}= await login(info.email, info.password)
                            if(signin === false) {
                                return swal("Thông báo", message, "success")
                            }
                            swal("Thông báo", message, "success")
                            .then(()=> {
                                Cookies.set("accessToken", accessToken)
                                return window.location.reload()
                            })
                        }} type={"primary"}>Đăng nhập</Button>
                    </div>
                    <div style={{fontSize: 12, textAlign: 'center', margin: "12px 0"}}>Hoặc</div>
                    <div className={"c-flex-center"}>
                        <Button onClick={()=> setToggle(()=> true)} type={"primary"}>Đăng ký</Button>
                    </div>
                </Modal>

            }
            {/*  */}
            {
                open=== true && toggle=== true && <Modal title="Đăng ký" centered open={open} onCancel={()=> setOpen(()=> false)}
                    footer={[]}
                >
                    <div>
                        <div style={{marginBottom: 8}}>Email: </div>
                        <Input onChange={(e)=> setInfo(prev=> ({...prev, email: e.target.value}))} placeholder={"Email"} />
                    </div>
                    <br />
                    <div>
                        <div style={{marginBottom: 8}}>Họ tên: </div>
                        <Input onChange={(e)=> setInfo(prev=> ({...prev, fullName: e.target.value}))} placeholder={"Họ tên"} />
                    </div>
                    <br />
                    <div>
                        <div style={{marginBottom: 8}}>Username: </div>
                        <Input onChange={(e)=> setInfo(prev=> ({...prev, userName: e.target.value}))} placeholder={"Username"} />
                    </div>
                    <br />
                    <div>
                        <div style={{marginBottom: 8}}>Mật khẩu: </div>
                        <Input onChange={(e)=> setInfo(prev=> ({...prev, password: e.target.value}))} type={"password"} placeholder={"Mật khẩu"} />
                    </div>
                    <br />
                    <div className={"c-flex-center"}>
                        <Button onClick={async ()=> {
                            const check = await signup(info.email, info.fullName, info.userName, info.password, setData)
                            console.log(check)
                            if(check=== true) {
                                swal("Thông báo", "Đăng ký thành công", "success")
                                .then(()=> setToggle(()=> false))
                            }
                            else {
                                swal("Thông báo", "Đăng ký thất bại", "success")
                            }
                        }} type={"primary"}>Đăng ký</Button>
                    </div>
                    <div style={{fontSize: 12, textAlign: 'center', margin: "12px 0"}}>Hoặc</div>
                    <div className={"c-flex-center"}>
                        <Button onClick={()=> setToggle(()=> false)} type={"primary"}>Đăng nhập</Button>
                    </div>
                </Modal>

            }
        </>
    )
}

const Notification= ()=> {
    return (
        <div className={"c-flex-center"} style={{cursor: "pointer"}}>
            <IoIosNotifications style={{width: 24, height: 24}} />
        </div>
    )
}

const UserLogged= (props)=> {
    return (
        <div onClick={()=> setOpen(prev=> !prev)} className={"c-flex-center"} style={{fontWeight: 600, cursor: "pointer"}}>
            {props?.username}
        </div>
    )
}

export default Header
