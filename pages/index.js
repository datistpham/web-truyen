import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from './header/Header'
import {IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import {AiFillStar} from "react-icons/ai"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{width: "100%"}}>
      <Header />
      <div style={{width: "100%"}} className={"c-flex-center"}>
        <div className={"home-page"} style={{width: "100%", maxWidth: 1200}}>
          <Category2 />
          <ListProduct />
        </div>
      </div>
    </div>
  )
}

const Category2= ()=> {
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "12px 0"}}>
      <div className={"c-flex-center"} style={{gap: 10}}>
        <span>Truyện hot</span>
        <div className={"c-flex-center"}>
          <IoIosArrowForward  />
        </div>
      </div>
      <div className={"c-flex-center"} style={{width: 160, height: 40, backgroundColor: "#f2f0f5", borderRadius: 10, padding: "0 10px", justifyContent: "space-between"}}>
        <span>Tất cả</span>
        <div className={"c-flex-center"}>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  )
}

const ListProduct= ()=> {
  return (
    <>
      <div style={{width: "100%", display: 'flex', alignItems: "center", flexWrap: "wrap"}}>
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/mot-thai-hai-bao-giam-doc-hang-ti-yeu-vo-tan-xuong.1576219741.jpg"} title={"Một Thai Hai Bảo: Giám Đốc Hàng Tỉ Yêu Vợ Tận Xương"} rating={7.5} />
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/tan-hon-khong-tinh-yeu-the-toi-vo-truoc.1576216946.jpg"} title={"Tân Hôn Không Tình Yêu, Thế Tội Vợ Trước"} rating={7.5} />
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/doc-ton-tam-gioi.1576221738.jpg"} title={"Độc Tôn Tam Giới"} rating={7.5} />
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/linh-vu-thien-ha.1576601653.jpg"} title={"Linh Vũ Thiên Hạ"} rating={7.5} />
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/co-chap-ngot.jpg"} title={"Cố Chấp Ngọt"} rating={9.1} />
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/images/story/Co-Vo-Ngot-Ngao-Co-Chut-Bat-Luong.jpg"} title={"Cô Vợ Ngọt Ngào Có Chút Bất Lương"} rating={8.5} />
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/co-vo-ngot-ngao-co-chut-bat-luong-vo-moi-bat-luong-co-chut-ngot.1576254700.jpg"} title={"Cô Vợ Ngọt Ngào Có Chút Bất Lương (Vợ Mới Bất Lương Có Chút Ngọt)"} rating={7.5} />
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/than-ao-an-ton.jpg"} title={"Thần Đạo Đan Tôn"} rating={7.4} />
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/xuyen-nhanh-nam-than-bung-chay-i.jpg"} title={"Xuyên Nhanh: Nam Thần, Bùng Cháy Đi!"} rating={9.7} />
        <ComponentListProduct image={"https://sstruyen.vn/assets/img/story/hello-nguoi-thua-ke-xin-chao-nguoi-thua-ke.jpg"} title={"Hello, Người Thừa Kế (Xin Chào, Người Thừa Kế)"} rating={8.4} />
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "12px 0"}}>
        <div style={{padding: "16px 50px", cursor: "pointer", background: "#2e89ff80", color: "#fff", borderRadius: 5}} className={"c-flex-center"}>
          Xem thêm
        </div>
      </div>
    </>
  )
}

const ComponentListProduct= ({link, image, title, rating})=> {
  return (
    <div style={{width: "20%", padding: 10, }}>
      <Link href={"/comic/1"}>
        <div style={{width: "100%", flexDirection: "column", gap: 16}} className={"c-flex-center"}>
          <div style={{width: "100%", position: "relative", aspectRatio: 2 / 3}}>
            <Image sizes={"100%"} alt="" fill={true}  style={{borderRadius: 10}} src={image} />
          </div>
          <div style={{fontWeight: 600, fontSize: 14, margin: "16px 0"}}>
            {title}
          </div>
          <div className={"c-flex-center"} style={{gap: 5, justifyContent: "flex-start", width: '100%'}}>
            <div className={"c-flex-center"}>
              <AiFillStar color={"orange"} />
            </div>
            <div style={{color: "#00000080", fontSize: 14}}>{rating}/10</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
