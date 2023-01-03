import Image from 'next/image'
import React from 'react'
import {AiFillFolderOpen, AiOutlineSearch } from "react-icons/ai"
import {IoIosArrowDown} from "react-icons/io"
import {BiCategoryAlt} from "react-icons/bi"
import Link from 'next/link'

const Header = () => {
  return (
    <div style={{width: "100%", padding: 10, height: 60, borderBottom: "1px solid #e7e7e7"}} className={"c-flex-center"}>
       <div style={{width: "100%", maxWidth: 1200, justifyContent: "space-between"}} className={"c-flex-center"} >
        <Logo />    
        <Category />
        <SearchBar />
       </div>
    </div>
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

export default Header
