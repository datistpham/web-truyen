import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Header from "../../component/header/Header";
import { AiFillStar, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import get_detail_comic from "../api/get_detail_comic";
import { useRouter } from "next/router";
import { Button } from "antd";
import follow_story from "../api/user/follow_story";
import { ContextProvider } from "../../context/context";
import unfollow_story from "../api/user/unfollow_story";
import ReviewStory from "../../component/ReviewStory/ReviewStory";

const DetailComic = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const {user }= useContext(ContextProvider)
  const { id } = router.query;
  useEffect(() => {
    get_detail_comic(id, setData);
  }, [id]);
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div className="c-flex-center" style={{ width: "100%" }}>
        <div style={{ width: "100%", maxWidth: 1200 }}>
          <div
            className="c-flex-center"
            style={{
              width: "100%",
              gap: 10,
              alignItems: "flex-start",
              marginTop: 12,
            }}
          >
            <ImagePreview data={data} />
            <BriefComic data={data} />
            {/* <Category /> */}
          </div>
          <div style={{width: '100%', marginTop: 20}}>
            <div style={{display: "flex", alignItems: 'center', width: '100%', paddingBottom: 12, borderBottom: "1px solid #2e89ff"}}>
                <AiOutlineMenu color={"#2e89ff"} />
                <span style={{marginLeft: 12, fontSize: 18, color: "#2e89ff"}}>Danh sách chương</span>
            </div>
            {
              Array.from(Array(data?.chaps).keys()).map((item, key)=> 
                <Link key={key} href={"/story/"+id+ "/"+ (parseInt(item) + parseInt(1))}>
                    <div className={"aaaa"} style={{cursor: "pointer", padding: 10, borderBottom: "1px solid #d9d9d9"}}> Chương {parseInt(item) + parseInt(1)}</div>
                </Link>
              )
            }
            {
              user?.username?.length > 0 && 
              <ReviewStory id={id} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const ImagePreview = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div style={{ width: "calc(100% / 5)" }}>
      <div style={{ width: "100%", aspectRatio: 2 / 3, position: "relative" }}>
        <Image
          style={{
            borderRadius: 10,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            overflow: "hidden",
          }}
          alt=""
          fill
          src={data?.image || "https://sstruyen.vn/assets/img/story//mot-thai-hai-bao-giam-doc-hang-ti-yeu-vo-tan-xuong.1576219741.jpg"}
        />
      </div>
      <br />
      <div className={"c-flex-center"}>
        <Link href={"/story/" + id + "/" + 1}>
          <div
            style={{
              width: "max-content",
              background: "#2dc275",
              fontSize: 14,
              color: "#fff",
              padding: 10,
              borderRadius: 10,
              cursor: "pointer",
            }}
            className={"c-flex-center"}
          >
            Đọc truyện
          </div>
        </Link>
      </div>
    </div>
  );
};

const BriefComic = ({ data }) => {
  const router= useRouter()
  const {followStory }= useContext(ContextProvider)
  const { id } = router.query;
  const [result, setResult]= useState()
  const [isFollow, setIsFollow]= useState()

  const followStoryFunc= ()=> {
    follow_story(id, setResult)
    setIsFollow(true)
  }
  const unfollowStoryFunc= ()=> {
    unfollow_story(id, setResult)
    setIsFollow(false)
  }
  useEffect(()=> {
    if(followStory && followStory?.filter(item=> parseInt(item?.story?.id) === parseInt(id))?.length > 0) {
        setIsFollow(true)
    }
    else {
        setIsFollow(false)
    }
  }, [followStory, id])
  return (
    <div style={{ flex: "1 1 0" }}>
      <div style={{ margin: "12px 0", fontSize: 24, fontWeight: 600 }}>
        {data?.title}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginBottom: 12,
        }}
      >
        <div className={"c-flex-center"}>
          <AiFillStar color={"orange"} />
        </div>
        <span style={{ color: "#00000080", fontSize: 14 }}>7.5/10</span>
        {
            isFollow=== false && 
            <div
                className={"c-flex-center"}
                style={{
                    background: "#2dc275",
                    fontSize: 12,
                    color: "#fff",
                    padding: 10,
                    borderRadius: 10,
                    cursor: "pointer",
                }}
                onClick={followStoryFunc}
            >
            Theo dõi
            </div>
        }
        {
            isFollow=== true && <div
                className={"c-flex-center"}
                style={{
                    background: "#2dc275",
                    fontSize: 12,
                    color: "#fff",
                    padding: 10,
                    borderRadius: 10,
                    cursor: "pointer",
                }}
                onClick={unfollowStoryFunc}
            >
            Bỏ theo dõi
            </div>
        }
      </div>
      <div
        style={{
          width: "100%",
          background: "#f0f0f0",
          borderRadius: 10,
          padding: 20,
        }}
      >
        <Component1
          title={"Tác giả:"}
          content={
            data?.author?.length <= 0 || !data?.author
              ? "Khuyết danh"
              : data?.author
          }
        />
        <Component1
          title={"Thể loại:"}
          content={data?.story_category?.map(
            (item, key) =>
              `${item.category.name}${
                parseInt(key) === data?.story_category?.length - 1 ? "" : ", "
              }`
          )}
        />
        <Component1 title={data?.description} />
      </div>
      <div style={{marginTop: 12}}>
        <Link href={"/story/"+ id + "/" + 1}>
            <Button type={"primary"}>Đọc từ đầu</Button>
        </Link>
        <Link href={"/story/" + id+ "/" + data?.chaps}>
            <Button style={{marginLeft: 16}} type={"primary"}>Đọc mới nhất</Button>
        </Link>
      </div>
    </div>
  );
};

const Component1 = ({ title, content }) => {
  return (
    <div
      className="c-flex-center"
      style={{ gap: 10, marginBottom: 12, justifyContent: "flex-start" }}
    >
      {title} <strong>{content}</strong>
    </div>
  );
};

const Category = ({}) => {
  return (
    <div style={{ width: "calc(100% / 5)" }}>
      <div
        style={{
          padding: 20,
          width: "100%",
          backgroundColor: "#f0f0f0",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            textAlign: "center",
            margin: "12px 0",
          }}
        >
          Thể loại truyện
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <ComponentCategory category={"Tiên hiệp"} />
          <ComponentCategory category={"Truyện sủng"} />
          <ComponentCategory category={"Kiếm hiệp"} />
          <ComponentCategory category={"Ngôn tình"} />
          <ComponentCategory category={"Đô thị"} />
          <ComponentCategory category={"Quan trường"} />
          <ComponentCategory category={"Võng du"} />
          <ComponentCategory category={"Huyền nhuyễn"} />
          <ComponentCategory category={"Dị giới"} />
          <ComponentCategory category={"Dị năng"} />
          <ComponentCategory category={"Quân sự"} />
        </div>
      </div>
    </div>
  );
};

const ComponentCategory = ({ category }) => {
  return (
    <div
      style={{
        width: "50%",
        fontWeight: 600,
        padding: 10,
        whiteSpace: "nowrap",
        justifyContent: "flex-start",
      }}
      className={"c-flex-center"}
    >
      {category}
    </div>
  );
};

export default DetailComic;
