import React from 'react'
import Navigation from '../component/Navigation'

const CategoryIndex = () => {
  return (
    <div style={{width: '100%', display: "flex"}}>
        <Navigation />
        <MainCategory />
    </div>
  )
}
const MainCategory= ()=> {
    return (
        <div style={{flex: "1 1 0"}}>
            <div style={{width: '100%'}}>
                <table>
                    <thead>
                        <tr>
                            <td>Tên thể loại</td>
                            <td>Mô tả</td>
                            <td>Trạng thái</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoryIndex
