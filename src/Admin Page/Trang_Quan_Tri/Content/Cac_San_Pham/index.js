import React, { useState, useEffect } from 'react';
import { Typography, Input, Button, Select, Space, Drawer, Modal, Upload, Table, Form } from 'antd';
import CacSanPhamStyle from './container.style';
import 'antd/dist/antd.css';
import { BsPatchPlus, BsTrash, BsPencilSquare, BsEye } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { addTableApi, fetchApiTable, updateTableApi } from './productSlice';
import { todosRemainingSelecter } from '../../../../Redux/selectors';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

// ==== Thêm ảnh =======================
// const getBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = () => resolve(reader.result);

//     reader.onerror = (error) => reject(error);
//   });

/*

=======================================================================================================

*/

const CacSanPham = () => {
  const [visibleAdd, setVisibleAdd] = useState(false);

  const [visibleUpdate, setVisibleUpdate] = useState(false);

  const [visibleView, setVisibleView] = useState(false);

  const [searchTxt, setSearchTxt] = useState('');

  const [dbAddProduct, setDBAddProduct] = useState({});

  const [selectUpdate, setSelectUpdate] = useState({});

  const [valueUpdate, setValueUpdate] = useState({});

  //

  const dispatch = useDispatch();

  const todoTable = useSelector(todosRemainingSelecter);

  useEffect(() => {
    dispatch(fetchApiTable());
  }, [dispatch]);

  //========= Tìm kiếm sản phẩm ==========
  function handleSearchTxtChange(e) {
    setSearchTxt(e.target.value);
  }

  //=== Thêm Sản Phẩm ================
  const AddBtnOnClick = () => {
    dispatch(
      addTableApi({
        TenSanPham: dbAddProduct.TenSanPham,
        Gia: dbAddProduct.Gia,
        SoLuong: dbAddProduct.SoLuong,
        DanhMucSanPham: dbAddProduct.DanhMucSanPham,
        ThuongHieu: dbAddProduct.ThuongHieu,
        MoTa: dbAddProduct.MoTa,
      })
    );
    setVisibleAdd(false);
  };

  const handleAddFromChange = (e, all) => {
    const db = all.product;
    setDBAddProduct(db);
  };

  const showDrawer = () => {
    setVisibleAdd(true);
  };

  const onClose = () => {
    setVisibleAdd(false);
  };

  //=========== Sửa sản phẩm =====================
  const UpdateBtnOnClick = () => {
    dispatch(
      updateTableApi({
        id: selectUpdate.id,
        TenSanPham: valueUpdate.TenSanPham,
        Gia: valueUpdate.Gia,
        SoLuong: valueUpdate.SoLuong,
        DanhMucSanPham: valueUpdate.DanhMucSanPham,
        ThuongHieu: valueUpdate.ThuongHieu,
        MoTa: valueUpdate.MoTa,
      })
    );
    setVisibleUpdate(false);
  };

  const UpdateOnClick = (record) => {
    setSelectUpdate(record);
    setVisibleUpdate(true);
  };

  const handleUpdateFromChange = (e, all) => {
    const db = all.product;
    setValueUpdate(db);
  };

  const onCloseUpdate = () => {
    setSelectUpdate({});
    setVisibleUpdate(false);
  };

  //=========== Chi tiết Sản Phẩm ==================
  const showProductDetails = () => {
    setVisibleView(true);
  };

  const onCloseProductDetails = () => {
    setVisibleView(false);
  };

  //=============== Thêm ảnh ==============================
  // const [previewVisible, setPreviewVisible] = useState(false);
  // const [previewImage, setPreviewImage] = useState('');
  // const [previewTitle, setPreviewTitle] = useState('');
  // const [fileList, setFileList] = useState([]);

  // const handleCancel = () => setPreviewVisible(false);

  // const handlePreview = async (file) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }

  //   setPreviewImage(file.url || file.preview);
  //   setPreviewVisible(true);
  //   setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  // };

  // const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  // const uploadButton = (
  //   <div>
  //     <PlusOutlined />
  //     <div
  //       style={{
  //         marginTop: 8,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </div>
  // );

  //=========== data table ======================
  const columns = [
    {
      title: 'Mã SP',
      dataIndex: 'id',
      key: 'id',
      width: '6%',
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'TenSanPham',
      key: 'TenSanPham',
      width: '42%',
    },
    {
      title: 'Giá',
      dataIndex: 'Gia',
      key: 'Gia',
      width: '15%',
    },
    {
      title: 'Số lượng',
      dataIndex: 'SoLuong',
      key: 'SoLuong',
      width: '10%',
    },
    {
      title: 'Danh mục sản phẩm',
      dataIndex: 'DanhMucSanPham',
      key: 'DanhMucSanPham',
      width: '11%',
    },
    {
      title: 'Thương hiệu',
      dataIndex: 'ThuongHieu',
      key: 'ThuongHieu',
      width: '11%',
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'action',
      width: '15%',
      render: (text, record) => (
        <>
          <BsPencilSquare onClick={() => UpdateOnClick(record)} />
          <BsTrash />
          <BsEye onClick={showProductDetails} />
        </>
      ),
    },
  ];

  return (
    <CacSanPhamStyle>
      <div className="title_box">
        <Title level={4}>Các Sản Phẩm</Title>
      </div>

      {/* start - thanh tác vụ tìm kiếm - lọc */}
      <div className="task_bar">
        <Space align="center" size={28}>
          <Input placeholder="Tìm Kiếm" value={searchTxt} onChange={handleSearchTxtChange} />
          <Select
            defaultValue="jack"
            className="filter_categories filter_style"
            dropdownStyle={{ borderRadius: '8px' }}
          >
            <Option value="jack">Điện thoại</Option>
            <Option value="lucy">Máy tính bảng</Option>
            <Option value="Yiminghe">Đồng hồ thông minh</Option>
          </Select>
          <Select
            defaultValue="jack"
            className="filter_price filter_style"
            dropdownStyle={{ borderRadius: '8px' }}
          >
            <Option value="jack">Giá thấp đến cao</Option>
            <Option value="lucy">Giá cao đến thấp</Option>
          </Select>
          <Button onClick={showDrawer}>
            <BsPatchPlus />
            <Text>Thêm Sản Phẩm</Text>
          </Button>
        </Space>
      </div>
      {/* cửa sổ thêm sản phẩm */}
      <Drawer
        title={<Title level={4}>Thêm Sản Phẩm</Title>}
        width={720}
        onClose={onClose}
        visible={visibleAdd}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <div className="main_addproduct">
          <Form layout="vertical" onValuesChange={handleAddFromChange}>
            <Form.Item
              name={['product', 'TenSanPham']}
              label="Sản phẩm"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Tên Sản Phẩm" />
            </Form.Item>

            <Form.Item
              name={['product', 'Gia']}
              label="Giá"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Giá" />
            </Form.Item>

            <Form.Item
              name={['product', 'SoLuong']}
              label="Số lượng"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Số lượng" />
            </Form.Item>

            <Form.Item
              name={['product', 'DanhMucSanPham']}
              label="Danh muc sản phẩm"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Danh muc sản phẩm" />
            </Form.Item>

            <Form.Item
              name={['product', 'ThuongHieu']}
              label="Thương hiệu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Thương hiệu" />
            </Form.Item>

            <Form.Item name={['product', 'MoTa']} label="Mô tả">
              <TextArea rows={4} placeholder="Mô tả" />
            </Form.Item>
            <>
              {/* <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{
                    width: '100%',
                  }}
                  src={previewImage}
                />
              </Modal> */}
            </>
            <Form.Item>
              <Button onClick={AddBtnOnClick}>Thêm Sản Phẩm</Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
      {/* end - thanh tác vụ */}

      {/* start - bảng sản phẩm */}
      <div className="product_table">
        <Table
          columns={columns}
          dataSource={todoTable}
          bordered
          tableLayout="fixed"
          rowClassName="colums_content"
        />
      </div>

      {/* cửa sổ sửa sản phẩm */}
      <Drawer
        title="Sửa Sản Phẩm"
        placement="right"
        onClose={onCloseUpdate}
        visible={visibleUpdate}
        size="large"
      >
        <Form layout="vertical" onValuesChange={handleUpdateFromChange}>
          <Form.Item
            name={['product', 'TenSanPham']}
            label="Sản phẩm"
            initialValue={selectUpdate.TenSanPham}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Sản Phẩm" />
          </Form.Item>

          <Form.Item
            name={['product', 'Gia']}
            label="Giá"
            initialValue={selectUpdate.Gia}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Giá" />
          </Form.Item>

          <Form.Item
            name={['product', 'SoLuong']}
            label="Số Lượng"
            initialValue={selectUpdate.SoLuong}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Số Lượng" />
          </Form.Item>

          <Form.Item
            name={['product', 'DanhMucSanPham']}
            label="Danh mục Sản Phẩm"
            initialValue={selectUpdate.DanhMucSanPham}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Danh mục sản phẩm " />
          </Form.Item>

          <Form.Item
            name={['product', 'ThuongHieu']}
            label="Thương Hiệu"
            initialValue={selectUpdate.ThuongHieu}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Thương hiệu" />
          </Form.Item>

          <Form.Item name={['product', 'MoTa']} label="Mô tả" initialValue={selectUpdate.MoTa}>
            <TextArea rows={4} placeholder="Mô tả" />
          </Form.Item>
          <>
            {/* <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{
                    width: '100%',
                  }}
                  src={previewImage}
                />
              </Modal> */}
          </>
          <Form.Item>
            <Space size={16}>
              <Button onClick={UpdateBtnOnClick}>Lưu</Button>
              <Button>Hủy</Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>

      {/* ============= Drawer Xem chi tiết ======================= */}
      <Drawer
        title="Xem Chi Tiết Sản Phẩm"
        placement="right"
        onClose={onCloseProductDetails}
        visible={visibleView}
        size="large"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      {/* end - bảng sản phẩm */}
    </CacSanPhamStyle>
  );
};

export default CacSanPham;
