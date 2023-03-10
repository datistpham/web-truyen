import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import Link from "next/link";
import { Modal, Input, Button, Popover } from "antd";
import { IoIosNotifications } from "react-icons/io";
import signup from "../../pages/api/user/signup";
import swal from "sweetalert";
import login from "../../pages/api/user/login";
import Cookies from "js-cookie";
import { ContextProvider } from "../../context/context";
import get_category from "../../pages/api/get_category";
import update_user from "../../pages/api/user/update_user";
import get_notification from "../../pages/api/user/get_notification";
import read_notification from "../../pages/api/user/read_notification";
import get_story_by_categories from "../../pages/api/get_story_by_categories";
import moment from "moment"

const Header = ({setData}) => {
  const { user } = useContext(ContextProvider);

  return (
    <>
      <div
        style={{
          width: "100%",
          padding: 10,
          height: 60,
          borderBottom: "1px solid #e7e7e7",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99,
          background: "#fff",
        }}
        className={"c-flex-center"}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            justifyContent: "space-between",
          }}
          className={"c-flex-center"}
        >
          <Logo />
          <Category setData={setData} />
          <div className={"c-flex-center"} style={{ gap: 16 }}>
            <Notification />
            <SearchBar />
            {user?.username?.length > 0 ? <UserLogged {...user} /> : <Login />}
          </div>
        </div>
      </div>
      <div style={{ height: 60 }}></div>
    </>
  );
};

const Logo = () => {
  return (
    <Link href={"/"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          width={40}
          height={40}
          style={{ width: 40, aspectRatio: 1 / 1 }}
          alt=""
        />
      </div>
    </Link>
  );
};

const Category = ({setData}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* <ComponentCategory
        icon1={<AiFillFolderOpen color={"#2dc275"} />}
        title={"Danh s??ch"}
        icon2={<IoIosArrowDown color={"#000"} />}
      /> */}
      <ComponentCategory
        setDataList={setData}
        icon1={<BiCategoryAlt color={"#2dc275"} />}
        title={"Th??? lo???i"}
        icon2={<IoIosArrowDown color={"#000"} />}
      />
    </div>
  );
};

const ComponentCategory = ({ icon1, title, icon2, setDataList }) => {
  const [data, setData]= useState([])
  useEffect(()=> {
    get_category(setData)
  }, [])
  const renderCategory= (data)=> {
    return data?.map((item, key)=> <div onClick={()=> get_story_by_categories(item.id, setDataList)} className={"aaaa"} key={key} style={{padding: 20, width: 200, cursor: "pointer", borderBottom: "1px solid #e7e7e7"}}>
        {item?.name}
    </div>)
  }
  return (
    <Popover placement="bottom" content={renderCategory(data)} >
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            cursor: "pointer"
        }}
        >
            <div className={"c-flex-center"} style={{ width: 18, height: 18 }}>
              {icon1}
            </div>
            <div style={{ fontWeight: 600 }}>{title}</div>
            <div className={"c-flex-center"} style={{ width: 18, height: 18 }}>
              {icon2}
            </div>
        </div>
    </Popover>
  );
};

const SearchBar = () => {
  return (
    <div
      className={"c-flex-center"}
      style={{ minWidth: 250, height: 40, position: "relative" }}
    >
      <input
        placeholder={"T??m t??n truy???n ho???c t??c gi???"}
        type="text"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
          border: "none",
          background: "#f2f0f5",
          padding: 10,
          outlineColor: "#2e89ff",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <AiOutlineSearch />
      </div>
    </div>
  );
};

const Login = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [info, setInfo] = useState({});
  const [data, setData] = useState();
  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={"c-flex-center"}
        style={{ fontWeight: 600, cursor: "pointer" }}
      >
        ????ng nh???p
      </div>
      {open === true && toggle === false && (
        <Modal
          title="????ng nh???p"
          centered
          open={open}
          onCancel={() => setOpen(() => false)}
          footer={[]}
        >
          <div>
            <div style={{ marginBottom: 8 }}>Email: </div>
            <Input
              type={"email"}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder={"Email"}
            />
          </div>
          <br />
          <div>
            <div style={{ marginBottom: 8 }}>M???t kh???u: </div>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, password: e.target.value }))
              }
              type={"password"}
              placeholder={"M???t kh???u"}
            />
          </div>
          <br />
          <div className={"c-flex-center"}>
            <Button
              onClick={async () => {
                const { message, status, accessToken, signin, uid } = await login(
                  info.email,
                  info.password
                );
                if (signin === false) {
                  return swal("Th??ng b??o", message, "success");
                }
                swal("Th??ng b??o", message, "success").then(() => {
                  Cookies.set("accessToken", accessToken);
                  Cookies.set("uid", uid)
                  return window.location.reload();
                });
              }}
              type={"primary"}
            >
              ????ng nh???p
            </Button>
          </div>
          <div style={{ fontSize: 12, textAlign: "center", margin: "12px 0" }}>
            Ho???c
          </div>
          <div className={"c-flex-center"}>
            <Button onClick={() => setToggle(() => true)} type={"primary"}>
              ????ng k??
            </Button>
          </div>
        </Modal>
      )}
      {/*  */}
      {open === true && toggle === true && (
        <Modal
          title="????ng k??"
          centered
          open={open}
          onCancel={() => setOpen(() => false)}
          footer={[]}
        >
          <div>
            <div style={{ marginBottom: 8 }}>Email: </div>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder={"Email"}
            />
          </div>
          <br />
          <div>
            <div style={{ marginBottom: 8 }}>H??? t??n: </div>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, fullName: e.target.value }))
              }
              placeholder={"H??? t??n"}
            />
          </div>
          <br />
          <div>
            <div style={{ marginBottom: 8 }}>Username: </div>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, userName: e.target.value }))
              }
              placeholder={"Username"}
            />
          </div>
          <br />
          <div>
            <div style={{ marginBottom: 8 }}>M???t kh???u: </div>
            <Input
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, password: e.target.value }))
              }
              type={"password"}
              placeholder={"M???t kh???u"}
            />
          </div>
          <br />
          <div className={"c-flex-center"}>
            <Button
              onClick={async () => {
                const check = await signup(
                  info.email,
                  info.fullName,
                  info.userName,
                  info.password,
                  setData
                );
                console.log(check);
                if (check === true) {
                  swal("Th??ng b??o", "????ng k?? th??nh c??ng", "success").then(() =>
                    setToggle(() => false)
                  );
                } else {
                  swal("Th??ng b??o", "????ng k?? th???t b???i", "success");
                }
              }}
              type={"primary"}
            >
              ????ng k??
            </Button>
          </div>
          <div style={{ fontSize: 12, textAlign: "center", margin: "12px 0" }}>
            Ho???c
          </div>
          <div className={"c-flex-center"}>
            <Button onClick={() => setToggle(() => false)} type={"primary"}>
              ????ng nh???p
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

const Notification = () => {
  const [data, setData]= useState([])
  useEffect(()=> {
    get_notification(setData)
  }, [])
  const [open, setOpen]= useState(false)
  const renderNotification= (data)=> {
    if(data?.length <= 0) {
      return <div style={{textAlign: 'center', padding: 10}}>Kh??ng c?? th??ng b??o</div>
    }
    else if(parseInt(data?.statusCode)=== 401) {

    }
    else if(data?.length > 0) {
      return data?.map((item, key)=> <Link href={"/story/"+ item?.story+ "/" + item?.chap} key={key}>
        <div style={{padding: 10, width: "100%", borderBottom: "1px solid #e7e7e7", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div>{item.body}</div>
          <div>{moment(item?.createdAt).format("HH:mm:ss DD-MM-YYYY")}</div>
        </div>
      </Link>)
    }

  }
  return (
    <>
      <Popover
        placement="bottomRight"
        open={open}
        content={<div style={{width: 350}}>{renderNotification(data)}</div>}
        >
        <div onClick={()=> {
          setOpen(prev=> !prev)
          read_notification()
        }} className={"c-flex-center"} style={{ cursor: "pointer" }}>
          <IoIosNotifications style={{ width: 24, height: 24 }} />
        </div>
      </Popover>
    </>
  );
};

const UserLogged = (props) => {
  const [open, setOpen] = useState(false);
  const [update, setUpdate]= useState(false)
  const [avatar, setAvatar]= useState("")
  const [address, setAddress]= useState("")
  const [phone, setPhone]= useState("")
  const {user}= useContext(ContextProvider)
  const [data, setData]= useState()
  useEffect(()=> {
    setAvatar(props?.avatar)
    setAddress(props?.address)
    setPhone(props?.phone)
  }, [props])
  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={"c-flex-center"}
        style={{ fontWeight: 600, cursor: "pointer" }}
      >
        {props?.username}
      </div>
      {
        update=== false && <Modal
        title="Th??ng tin"
        centered
        open={open}
        onCancel={() => setOpen(() => false)}
        footer={[]}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginBottom: 8, width: 200 }}>T??n ng?????i d??ng: </div>
          <div>
            <strong>{props?.username}</strong>
          </div>
        </div>
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginBottom: 8, width: 200 }}>Email: </div>
          <div>
            <strong>{props?.email}</strong>
          </div>
        </div>
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginBottom: 8, width: 200 }}>???nh ?????i di???n: </div>
          <div>
            <div style={{position: "relative", width :40, height: 40}}>
                <Image src={props?.avatar || "https://sstruyen.vn"} alt="" fill style={{borderRadius: "50%"}} />
            </div>
          </div>
        </div>
        <br />
        {/*  */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginBottom: 8, width: 200 }}>?????a ch???: </div>
          <div>
            <strong>{props?.address || "https://sstruyen.vn"}</strong>
          </div>
        </div>
        <br />
        {/*  */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginBottom: 8, width: 200 }}>S??? ??i???n tho???i: </div>
          <div>
            <strong>{props?.phone || "Ch??a thi???t l???p"}</strong>
          </div>
        </div>
        <br />
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: 'center', gap: 16}}>
          <Button onClick={()=> setUpdate(()=> true)} type="primary">C???p nh???t th??ng tin</Button>
          <Button onClick={()=> {
            Cookies.remove("accessToken")
            return window.location.reload()
          }} type="primary">????ng xu???t</Button>
        </div>
        <br />
      </Modal>
      }
      {
        update=== true && <Modal
        title="Th??ng tin"
        centered
        open={open}
        onCancel={() => setOpen(() => false)}
        footer={[]}
      >
        <div>
          <div style={{ marginBottom: 8, width: 200 }}>???nh ?????i di???n: </div>
          <Input onChange={(e)=> setAvatar(e.target.value)} value={avatar} />
        </div>
        <br />
        {/*  */}
        <div>
          <div style={{ marginBottom: 8, width: 200 }}>?????a ch???: </div>
          <Input onChange={(e)=> setAddress(e.target.value)} value={address} />
        </div>
        <br />
        {/*  */}
        <div>
          <div style={{ marginBottom: 8, width: 200 }}>S??? ??i???n tho???i: </div>
          <Input onChange={(e)=> setPhone(e.target.value)} value={phone} />
        </div>
        <br />
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: 'center', gap: 17}}>
            <Button onClick={()=> setUpdate(()=> false)} type="primary">Quay l???i</Button>
            <Button onClick={()=> {
                update_user(user.id, avatar, phone, address, setData)
            }} type="primary">X??c nh???n</Button>
        </div>
        <br />
      </Modal>
      }
    </>
  );
};

export default Header;
