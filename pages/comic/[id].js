import Image from "next/image";
import React from "react";
import Header from "../header/Header";
import {AiFillStar} from "react-icons/ai"

const DetailComic = () => {
  return (
    <div style={{width: '100%'}}>
        <Header />
        <div className="c-flex-center" style={{width: "100%"}}>
            <div style={{width: "100%", maxWidth: 1200}}>
                <div className="c-flex-center" style={{width: "100%", gap: 10, alignItems: "flex-start", marginTop: 12}}>
                    <ImagePreview />
                    <BriefComic />
                    <Category />
                </div>
            </div>
        </div>
    </div>
  );
};

const ImagePreview= ()=> {
    return (
        <div style={{width: "calc(100% / 5)"}}>
            <div style={{width: "100%", aspectRatio: 2 / 3, position: "relative"}}>
                <Image style={{borderRadius: 10, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", overflow: "hidden"}} alt="" fill src={"https://sstruyen.vn/assets/img/story//quy-de-cuong-the-dai-tieu-thu-an-choi-trac-tang.1576219219.jpg"} />
            </div>
            <br />
            <div className={"c-flex-center"}>
                <div style={{width: "max-content", background: "#2dc275", fontSize: 14, color: "#fff", padding: 10, borderRadius: 10, cursor: "pointer"}} className={"c-flex-center"}>
                    Đọc truyện
                </div>
            </div>
        </div>
    )
}

const BriefComic= ()=> {
    return (
        <div style={{flex: "1 1 0"}}>
            <div style={{margin: "12px 0", fontSize: 24, fontWeight: 600}}>
                Quỷ Đế Cuồng Thê: Đại Tiểu Thư Ăn Chơi Trác Táng
            </div>
            <div style={{width: "100%", display: "flex", alignItems: "center", gap: 5, marginBottom: 12}}>
                <div className={"c-flex-center"}>
                    <AiFillStar color={"orange"} />
                </div>
                <span style={{color: "#00000080", fontSize: 14}}>7.5/10</span>
                <div className={"c-flex-center"} style={{background: "#2dc275", fontSize: 12, color: "#fff", padding: 10, borderRadius: 10, cursor: "pointer"}}>
                    Theo dõi
                </div>
            </div>
            <div style={{width: "100%", background: "#f0f0f0", borderRadius: 10, padding: 20}}>
                <Component1 title={"Tác giả:"} content={"Tiêu thất gia"} />
                <Component1 title={"Thể loại:"} content={"Xuyên Không, Ngôn Tình, Dị Giới"} />
                <Component1 title={"Ở thời hiện đại thì Vân Lạc Phong nổi danh là thiên tài y học Trung Hoa. Tuy nhiên ngoài ý muốn lại chết đi,  linh hồn nhập vào đại tiểu thư phế vật của phủ tướng quân ở đại lục Long Khiếu.\nPhế vật này chẳng những không được võ cũng chẳng xong, lại thêm ngực to não như trái nho, ngang ngược kiêu ngạo tuỳ hứng, có vị hôn phu hoàn mỹ như thái tử còn chưa đủ, lại đi cướp đoạt mỹ nam giữa đám đông, dẫn đến dưới cơn giận dữ thái tử huỷ bỏ hôn ước."} />
            </div>
        </div>
    )
}

const Component1= ({title, content})=> {
    return (
        <div className="c-flex-center" style={{gap: 10, marginBottom: 12, justifyContent: "flex-start"}}>{title} <strong>{content}</strong></div>
    )
}

const Category= ({})=> {
    return (
        <div style={{width: "calc(100% / 5)"}}>
            <div style={{padding: 20, width: "100%", backgroundColor: "#f0f0f0", borderRadius: 10}}>
                <div style={{fontSize: 20, fontWeight: 600, textAlign: "center", margin: "12px 0"}}>
                    Thể loại truyện
                </div>
                <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"}}>
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
    )
}

const ComponentCategory= ({category})=> {
    return (
        <div style={{width: "50%", fontWeight: 600, padding: 10, whiteSpace: "nowrap", justifyContent: "flex-start"}} className={"c-flex-center"}>
            {category}
        </div>
    )
}

export default DetailComic
