import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../component/header/Header";
import ProgressBar from "react-progressbar-on-scroll";
import { useRouter } from "next/router";
import get_chap_from_comic from "../api/get_chap_from_comic";
// import get_product from "../api/get_product";
import get_detail_comic from "../api/get_detail_comic";
import {MdGTranslate } from "react-icons/md"
import { Input, Modal } from "antd";
import contribute_translation from "../api/contributor/contribute_translation";
import swal from "sweetalert";
import { ContextProvider } from "../../context/context";

const ReadComic = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  useEffect(() => {
    get_chap_from_comic(id?.[0], id?.[1], setData);
  }, [id]);
  return (
    <div className="read-comic" style={{ width: "100%" }}>
      <Header />
      <ProgressBarComponent comic={id?.[0]} />
      <MainRead data={data} chap={id?.[1]} comic={id?.[0]} />
    </div>
  );
};

const ProgressBarComponent = ({comic}) => {
  const [data, setData]= useState([])
  useEffect(()=> {
    get_detail_comic(comic, setData)
  }, [comic])
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 60,
          left: 0,
          width: "100%",
          background: "#fff",
          zIndex: 99,
        }}
      >
        <div
          style={{
            width: "100%",
            height: 80,
            justifyContent: "space-between",
            padding: 10,
            borderBottom: "1px solid #e7e7e7",
          }}
          className={"c-flex-center"}
        >
          <div style={{ gap: 10 }} className={"c-flex-center"}>
            <div
              style={{ aspectRatio: 2 / 3, width: 40, position: "relative" }}
            >
              <Image
                style={{ objectFit: "cover" }}
                alt=""
                src={data?.image}
                fill
              />
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>
                {data?.title}
              </div>
              <div style={{ fontSize: 14 }}>by {(data?.author?.length <=0 || !data?.author) ? "Khuy???t danh" : data?.author}</div>
            </div>
          </div>
          <div className={"c-flex-center"}>
            {/* <div
              className={"c-flex-center"}
              style={{
                background: "#2dc275",
                fontSize: 12,
                color: "#fff",
                padding: 10,
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              Theo d??i
            </div> */}
          </div>
          <div style={{ position: "absolute", left: 0, bottom: 0 }}>
            <ProgressBar
              color="#2e89ff"
              height={4}
              direction="right"
              position="top"
            />
          </div>
        </div>
      </div>
      <div style={{ height: 80 }}></div>
    </>
  );
};

const MainRead = ({ data, chap, comic }) => {
  return (
    <div
      className={"main-read c-flex-center"}
      style={{ width: "100%", padding: 20 }}
    >
      <div style={{ width: "100%", maxWidth: 1200 }}>
        <TitleMainRead title={"Chap " + chap} />
        <MainRead1 data={data} chap={chap} comic={comic} />
      </div>
    </div>
  );
};

const TitleMainRead = ({ title }) => {
  return (
    <div
      className={"c-flex-center"}
      style={{
        fontSize: 24,
        fontWeight: 600,
        margin: "12px 0",
        width: "100%",
        paddingBottom: 12,
        borderBottom: "1px solid #e7e7e7",
      }}
    >
      {title}
    </div>
  );
};

const MainRead1 = ({ data, chap, comic }) => {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      {/* <LeftSideMainRead1 /> */}
      <RightSideMainRead1 data={data} chap={chap} comic={comic} />
    </div>
  );
};

const LeftSideMainRead1 = () => {
  return (
    <div
      style={{
        width: 300,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <div className={"c-flex-center"}>
        <div
          style={{
            width: 72,
            aspectRatio: 1 / 1,
            borderRadius: "50%",
            marginBottom: 12,
            position: "relative",
          }}
        >
          <Image
            alt={""}
            src={
              "https://img.wattpad.com/useravatar/TrinhTran1202.128.360630.jpg"
            }
            fill
            style={{ objectFit: "contain", borderRadius: "50%" }}
          />
        </div>
      </div>
      <div className={"c-flex-center"}>
        <span>by</span>
        <strong>TrinhTran1202</strong>
      </div>
    </div>
  );
};

const RightSideMainRead1 = ({ data, chap, comic }) => {
  const {user}= useContext(ContextProvider)
  const [numberPage, setNumberPage] = useState(0);
  const [translateId, setTranslateId]= useState("")
  const [originTranslate, setOriginTranslate]= useState("")
  const [translation, setTranslation]= useState("")
  const [open, setOpen]= useState(false)
  const router = useRouter();
  const nextChap = () => {
    if (parseInt(chap) + parseInt(1) > parseInt(numberPage.chaps) + 1) {
    } else {
      router.push("/read/" + comic + "/" + (parseInt(chap) + parseInt(1)));
    }
  };
  useEffect(() => {
    get_detail_comic(comic, setNumberPage);
  }, [comic]);
  return (
    <div style={{ width: 580, padding: 20 }}>
      {data?.map((item, key) => (
        <div
          key={item.id + key}
          style={{ marginBottom: 30, borderBottom: "1px solid #e7e7e7" }}
        >
          <div style={{ marginBottom: 10 }}>{item.sentence_context}</div>
          <div style={{ fontSize: 14, marginBottom: 10, fontWeight: 600 }}>
            {/* B???n d???ch */}
          </div>
          <div style={{ marginBottom: 10, position: "relative"}}>
            {item?.translation_sentence?.[0]?.translate_context}
            {
              user?.role=== "contributor" &&
              <div onClick={()=> {
                setOpen(()=> true)
                setOriginTranslate(item.sentence_context)
                setTranslateId(item.id)
              }} title={"Th??m b???n d???ch"} className={"c-flex-center"} style={{cursor: "pointer", right: 0, top: "50%", transform: "translate(50%, -50%)", position: "absolute", paddingLeft: 10}}>
                <MdGTranslate style={{width: 24, height: 24}} />
              </div>
            }
          </div>
        </div>
      ))}
      <div
        onClick={nextChap}
        className={"c-flex-center"}
        style={{
          background: "#ff6122",
          borderRadius: 10,
          cursor: "pointer",
          color: "#fff",
          fontWeight: 600,
          padding: 16,
        }}
      >
        {parseInt(chap) + parseInt(1) > parseInt(numberPage.chaps) + 1
          ? "??ang ra ti???p..."
          : "?????c ti???p"}
      </div>
      <Modal open={open} centered title={"Th??m b???n d???ch"} onCancel={()=> setOpen(()=> false)} onOk={()=> {
        contribute_translation(translation, "", translateId)
        swal("Th??ng b??o", "B???n ???? ????ng g??p b???n d???ch th??nh c??ng", "success")
        .then(()=> setOpen(()=> false))
      }}>
          <div>{originTranslate}</div>
          <br />
          <div>
            <div style={{marginBottom: 8, fontSize: 14, fontWeight: 600}}>B???n d???ch c???a b???n</div>
            <Input value={translation} onChange={(e)=> setTranslation(e.target.value)} style={{width: "100% "}} />
          </div>
      </Modal>
    </div>
  );
};


export default ReadComic;
