import { Button, Input, Rate } from 'antd'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { ContextProvider } from '../../context/context'
import get_review_story from '../../pages/api/get_review_story'
import post_review from '../../pages/api/user/post_review'
const ReviewStory = ({id}) => {
  const [data, setData]= useState([])
  const {user }= useContext(ContextProvider)
  const [comment, setComment]= useState("")
  const [rating, setRating]= useState(1)
  const [result, setResult]= useState()
  useEffect(()=> {
    get_review_story(id, setData)
  }, [id])
  const postRating= ()=> {
    post_review(user.id, comment, rating, id, setResult)
    setData(prev=> ([{body: comment, rate: rating, is_active: true, story_id: parseInt(id), user_id: user?.id, createdAt: new Date(), updatedAt: new Date()}, ...prev]))
  }
  return (
    <div style={{width: '100%', marginTop: 30}}>
        <div style={{fontSize: 20, textAlign: "center", color: "#2e89ff", marginBottom: 12}}>
            Đánh giá truyện
        </div>
        <div style={{width: "100%", padding: 10, border: "1px solid #d9d9d9", display: "flex", gap: 16}}>
            <div style={{width: 40, height: 40, position: "relative"}}>
                <Image src={user?.avatar} alt={""} fill style={{objectFit: "cover", borderRadius: "50%"}} />
            </div>
            <div style={{flex: "1 1 0"}}>
              <Input value={comment} onChange={(e)=> setComment(e.target.value)} placeholder={"Viết bình luận"} />
              <Rate value={rating} onChange={setRating} />
              <div style={{marginTop: 12, width: "100%", direction: "rtl"}}>
                <Button onClick={postRating} type={"primary"}>Đăng</Button>
              </div>
            </div>
        </div>
        <div style={{marginTop: 12, width: '100%'}}>
          {
            data?.length > 0 && data?.map((item, key)=> <div key={key} style={{width: "100%", padding: 10, borderBottom: "1px solid #d9d9d9"}}>
              <div style={{marginBottom: 4}}><Rate value={parseInt(item?.rate)} /></div>
              <div>{item?.body}</div>
            </div>)
          }
        </div>
    </div>
  )
}

export default ReviewStory