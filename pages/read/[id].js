import Image from 'next/image'
import React from 'react'
import Header from '../header/Header'
import ProgressBar from 'react-progressbar-on-scroll'

const ReadComic = () => {
  return (
    <div className="read-comic" style={{width: "100%"}}>
        <Header />
        <ProgressBarComponent />
        <MainRead />
    </div>
  )
}

const ProgressBarComponent= ()=> {
    return (
        <>
            <div style={{position: "fixed", top: 60, left: 0, width: "100%", background: "#fff", zIndex: 99}}>
                <div style={{width: "100%", height: 80, justifyContent: "space-between", padding: 10, borderBottom: "1px solid #e7e7e7"}} className={"c-flex-center"}>
                    <div style={{gap: 10}} className={"c-flex-center"}>
                        <div style={{aspectRatio: 2 / 3, width: 40, position: "relative"}}>
                            <Image style={{objectFit: "cover"}} alt="" src={"https://img.wattpad.com/cover/153520931-64-k34270.jpg"} fill />
                        </div>
                        <div>
                            <div style={{fontWeight: 600}}>[Cao H] Hôn học trưởng (Full)  - Nam Triều Di Nam</div>
                            <div style={{fontSize: 14}}>by TrinhTran1202</div>
                        </div>
                    </div>
                    <div className={"c-flex-center"}>
                        <div className={"c-flex-center"} style={{background: "#2dc275", fontSize: 12, color: "#fff", padding: 10, borderRadius: 10, cursor: "pointer"}}>
                            Theo dõi
                        </div>
                    </div>
                    <div style={{position: "absolute", left: 0, bottom: 0}}>
                        <ProgressBar
                            color="#2e89ff"
                            height={4}
                            direction="right"
                            position="top"
                            
                        />
                    </div>
                </div>
            </div>
            <div style={{height: 80}}></div>
        </>

    )
}

const MainRead= ()=> {
    return (
        <div className={"main-read c-flex-center"} style={{width: "100%", padding: 20}}>
            <div style={{width: "100%", maxWidth: 1200}}>
                <TitleMainRead title={"Chương 1"} />
                <MainRead1 />
            </div>
        </div> 
    )
}

const TitleMainRead= ({title})=> {
    return (
        <div className={"c-flex-center"} style={{fontSize: 24, fontWeight: 600, margin: "12px 0", width: "100%", paddingBottom: 12, borderBottom: "1px solid #e7e7e7"}}>
            {title}
        </div>  
    )
}

const MainRead1= ()=> {
    return (
        <div style={{display: 'flex', width: "100%", alignItems: "flex-start"}}>
            <LeftSideMainRead1 />
            <RightSideMainRead1 />
        </div>
    )
}

const LeftSideMainRead1= ()=> {
    return (
        <div style={{width: 300, display: 'flex', justifyContent: "center", flexDirection: "column", padding: 20}}>
            <div className={"c-flex-center"}>
                <div style={{width: 72, aspectRatio: 1 / 1, borderRadius: "50%", marginBottom: 12, position: "relative"}}>
                    <Image alt={""} src={"https://img.wattpad.com/useravatar/TrinhTran1202.128.360630.jpg"} fill style={{objectFit: "contain", borderRadius: "50%"}} />
                </div>
            </div>
            <div className={"c-flex-center"}>
                <span>by</span><strong>TrinhTran1202</strong>
            </div>
        </div>
    )
}

const RightSideMainRead1= ()=> {
    return (
        <div style={{width: 580, padding: 20}}>
            <div style={{marginBottom: 16}}>Tháng ba mưa dầm liên miên, trong không khí còn lưu lại hơi lạnh của những ngày mùa đông. Khí hậu ẩm ướt lành lạnh khiến người ta không hăng hái nổi mà cứ mệt mỏi và buồn ngủ. Đêm tháng ba giá rét, đường xá thưa thớt chỉ có vài người, đa số các nhà đều đã tắt đèn đi ngủ sớm.</div>
            <div style={{marginBottom: 16}}>Tống Tiểu Vũ một mình khoác chiếc áo xám đậm chạy băng băng trên đường.</div>
            
            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>
            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div style={{marginBottom: 16}}>Ánh sáng đèn đường thưa thớt chiếu xuống, in trên mặt đất những cái bóng dài bóng ngắn. Bóng của những tán lá cây ngô đồng chồng chéo lên nhau. Tống Tiểu Vũ không dám đi vào đường tối, bèn chạy mau về phía ngã tư nơi có ánh đèn sáng nhất trung tâm, mong muốn nhanh chóng rời khỏi đoạn đường yên tĩnh đến dọa người này.</div>

            <div className={"c-flex-center"} style={{background: "#ff6122", borderRadius: 10, cursor: "pointer", color: "#fff", fontWeight: 600, padding: 16}}>
                Đọc tiếp 
            </div>
        </div>
    )
}

export default ReadComic