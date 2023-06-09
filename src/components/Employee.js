import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Employee(props) {
    return (
        <div className='container border mt-3'>
            <h2>Hải sản ông Victor</h2>
            <hr />
            <div className='row'>
                <div className='col-md-3'>
                    <div className='border p-2'>
                        Thông tin nhân viên
                        <form action='' method='post'>
                            <div class="mb-3 mt-3">
                                <label for="fullname" class="form-label">Họ và tên:</label>
                                <input type="text" class="form-control" name="fullname" id="fullname" placeholder="Nguyễn Văn A" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="avatar" class="form-label">Ảnh đại diện:</label>
                                <input type="text" class="form-control" name="avatar" id="avatar" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="yob" class="form-label">Ngày sinh:</label>
                                <input type="date" class="form-control" name="yob" id="yob" />
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="gender" class="form-label">Giới tính: </label>
                                <input type="radio" class="form-check-input" name="gender" value='m' /> Nam
                                <input type="radio" class="form-check-input" name="gender" value='f' checked /> Nữ
                            </div>
                            <div class="form-check mb-3">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" name="status" id="status" />Đang làm việc
                                </label>
                            </div>
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
                            <tr>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Employee;