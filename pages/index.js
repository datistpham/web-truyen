// import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
import Header from "../component/header/Header";
import { IoIosArrowForward } from "react-icons/io";
// import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import get_product from "./api/get_product";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    get_product(setData);
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <Header setData={setData} />
      <div style={{ width: "100%" }} className={"c-flex-center"}>
        <div className={"home-page"} style={{ width: "100%", maxWidth: 1200 }}>
          <Category2 />
          <ListProduct data={data} />
        </div>
      </div>
    </div>
  );
}

const Category2 = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "12px 0",
      }}
    >
      <div className={"c-flex-center"} style={{ gap: 10 }}>
        <span>Truyện hot</span>
        <div className={"c-flex-center"}>
          <IoIosArrowForward />
        </div>
      </div>
      {/* <div
        className={"c-flex-center"}
        style={{
          width: 160,
          height: 40,
          backgroundColor: "#f2f0f5",
          borderRadius: 10,
          padding: "0 10px",
          justifyContent: "space-between",
        }}
      >
        <span>Tất cả</span>
        <div className={"c-flex-center"}>
          <IoIosArrowDown />
        </div>
      </div> */}
    </div>
  );
};

const ListProduct = ({data}) => {
  
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {!data?.[0]?.story && data?.slice(0, 8)?.map((item, key) => (
          <ComponentListProduct
            link={item.id}
            key={key}
            description={item.description}
            image={item.image}
            title={item.title}
            rating={7.5}
          />
        ))}
        {data?.[0]?.story && data?.slice(0, 8)?.map((item, key) => (
          <ComponentListProduct
            link={item.story.id}
            key={key}
            description={item.story.description}
            image={item.story.image}
            title={item.story.title}
            rating={7.5}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "12px 0",
        }}
      >
        <div
          style={{
            padding: "16px 50px",
            cursor: "pointer",
            background: "#2e89ff80",
            color: "#fff",
            borderRadius: 5,
          }}
          className={"c-flex-center"}
        >
          Xem thêm
        </div>
      </div>
    </>
  );
};

const ComponentListProduct = ({ link, image, title, rating, description }) => {
  return (
    <div title={description} style={{ width: "20%", padding: 10 }}>
      <Link href={"/comic/" + link}>
        <div
          style={{ width: "100%", flexDirection: "column", gap: 16 }}
          className={"c-flex-center"}
        >
          <div
            style={{ width: "100%", position: "relative", aspectRatio: 2 / 3 }}
          >
            <Image
              sizes={"100%"}
              alt=""
              fill={true}
              style={{ borderRadius: 10 }}
              src={image}
            />
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: 14,
              margin: "16px 0",
              whiteSpace: "nowrap",
              textAlign: "left",
              overflow: "hidden",
              width: "100%",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 14,
              whiteSpace: "nowrap",
              textAlign: "left",
              overflow: "hidden",
              width: "100%",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </div>
          {/* <div className={"c-flex-center"} style={{gap: 5, justifyContent: "flex-start", width: '100%'}}>
            <div className={"c-flex-center"}>
              <AiFillStar color={"orange"} />
            </div>
            <div style={{color: "#00000080", fontSize: 14}}>{rating}/10</div>
          </div> */}
        </div>
      </Link>
    </div>
  );
};
