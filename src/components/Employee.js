import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Employee(props) {
    const [cnt, setCnt] = useState(0);
    const [data, setData] = useState([
        {
            id: 1,
            fullname: 'Lê Thu Trang',
            avatar: 'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg',
            yob: '2004-03-26',
            gender: 'f',
            status: false
        },
        {
            id: 2,
            fullname: 'Hoàng Mai Nhi',
            avatar: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-Nhat-xinh-dep-dang-yeu.jpg',
            yob: '2004-08-15',
            gender: 'f',
            status: false
        },
        {
            id: 3,
            fullname: 'Phan Ý Nhi',
            avatar: 'https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-gai-xinh-cap-2-3.jpg',
            yob: '2004-11-09',
            gender: 'f',
            status: false
        }
    ]);

    const [forms, setForms] = useState({});

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setForms(values => ({ ...values, [name]: value }));
    }

    const submitForm = (e) => {
        e.preventDefault();
        setCnt(cnt + 1);
        forms.id = cnt;        
        // console.log(forms);
        // console.log(data);
        setData(data.concat(forms));
    }

    const startLoad = () => {
        setCnt(data.length);
    }

    useEffect(startLoad, []);
    return (
        <div className='container border mt-3'>
            <h2>Hải sản ông Victor</h2>
            <hr />
            <div className='row'>
                <div className='col-md-3'>
                    <div className='border p-2'>
                        Thông tin nhân viên
                        <form action='' method='post' onSubmit={submitForm}>
                            <div class="mb-3 mt-3">
                                <label for="fullname" class="form-label">Họ và tên:</label>
                                <input type="text" onChange={handleChange} class="form-control" name="fullname" id="fullname" placeholder="Nguyễn Văn A" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="avatar" class="form-label">Ảnh đại diện:</label>
                                <input type="text" onChange={handleChange} class="form-control" name="avatar" id="avatar" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="yob" class="form-label">Ngày sinh:</label>
                                <input type="date" onChange={handleChange} class="form-control" name="yob" id="yob" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="gender" class="form-label">Giới tính: </label>
                                <input type="radio" onChange={handleChange} class="form-check-input" name="gender" value='m' /> Nam
                                <input type="radio" onChange={handleChange} class="form-check-input" name="gender" value='f' checked /> Nữ
                            </div>
                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                    <input type="checkbox" onChange={handleChange} class="form-check-input" name="status" id="status" />Đang làm việc
                                </label>
                            </div>
                            <input type='submit' className='btn btn-primary' value="Thêm" />
                        </form>
                    </div>
                </div>
                <div className='col-md-9'>
                    Danh sách nhân viên
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Họ và tên</td>
                                <td>Ảnh đại diện</td>
                                <td>Ngày sinh</td>
                                <td>Giới tính</td>
                                <td>Trạng thái</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.fullname}</td>
                                        <td>
                                            <img width='50px' src={item.avatar} />
                                        </td>
                                        <td>{item.yob}</td>
                                        <td>{item.gender}</td>
                                        <td>
                                            <input type='checkbox' checked={item.status} />
                                        </td>
                                    </tr>)
                            })}
                            {/* <tr>
                                <td>1</td>
                                <td>Lê Thu Trang</td>
                                <td>
                                    <img width='50px' src='https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg' />
                                </td>
                                <td>2004-03-26</td>
                                <td>Nữ</td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Hoàng Mai Nhi</td>
                                <td>
                                    <img width='50px' src='https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-Nhat-xinh-dep-dang-yeu.jpg' />
                                </td>
                                <td>2004-08-15</td>
                                <td>Nữ</td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Phan Ý Nhi</td>
                                <td>
                                    <img width='50px' src='https://antimatter.vn/wp-content/uploads/2022/05/hinh-anh-gai-xinh-cap-2-3.jpg' />
                                </td>
                                <td>2004-11-09</td>
                                <td>Nữ</td>
                                <td>
                                    <input type='checkbox' />
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Employee;