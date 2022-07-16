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
  const [dataTable, setDataTable] = useState('');

  const [searchTxt, setSearchTxt] = useState('');

  const [visible, setVisible] = useState(false);

  const [updateProduct, setUpdateProduct] = useState(false);

  const [productDetails, setProductDetails] = useState(false);

  const [defaultValueUpdate, setDefaultValueUpdate] = useState({});

  const [valueUpdate, setValueUpdate] = useState({});

  //

  const dispatch = useDispatch();

  const todoTable = useSelector(todosRemainingSelecter);

  useEffect(() => {
    dispatch(fetchApiTable());
  }, []);

  useEffect(() => {
    dispatch(fetchApiTable());
  }, []);

  //========= Tìm kiếm sản phẩm ==========
  const handleSearchTxtChange = (e) => {
    setSearchTxt(e.target.value);
  };

  //=== Thêm Sản Phẩm ================
  const handleAddBtnClick = () => {
    dispatch(
      addTableApi({
        id: dataTable.user.id,
        name: dataTable.user.name,
        price: dataTable.user.price,
        amount: dataTable.user.amount,
        categoryId: dataTable.user.categoryId,
        trademarkId: dataTable.user.trademarkId,
        describe: dataTable.user.describe,
      })
    );

    setVisible(false);
  };

  const handleFromChange = (e, all) => {
    setDataTable(all);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  //=========== Sửa sản phẩm =====================
  const handleBtnUpdateClick = () => {
    const idUpdate = valueUpdate.id;
    console.log(idUpdate);
    dispatch(
      updateTableApi(idUpdate, {
        name: valueUpdate.name,
        price: valueUpdate.price,
        amount: valueUpdate.amount,
        categoryId: valueUpdate.categoryId,
        trademarkId: valueUpdate.trademarkId,
        describe: valueUpdate.describe,
      })
    );
    setUpdateProduct(false);
  };

  const UpdateProduct = (record) => {
    setDefaultValueUpdate(record);
    setUpdateProduct(true);
  };

  const handleValueUpdate = (e, all) => {
    const newValue = all.user;
    setValueUpdate(newValue);
  };

  const onCloseUpdateProduct = () => {
    setDefaultValueUpdate('');
    setUpdateProduct(false);
  };

  //=========== Chi tiết Sản Phẩm ==================

  const showProductDetails = () => {
    setProductDetails(true);
  };

  const onCloseProductDetails = () => {
    setProductDetails(false);
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
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '6%',
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name',
      width: '42%',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      width: '15%',
    },
    {
      title: 'Số lượng',
      dataIndex: 'amount',
      key: 'amount',
      width: '10%',
    },
    {
      title: 'Danh mục sản phẩm',
      dataIndex: 'categoryId',
      key: 'categoryId',
      width: '11%',
    },
    {
      title: 'Thương hiệu',
      dataIndex: 'trademarkId',
      key: 'trademarkId',
      width: '11%',
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      key: 'action',
      width: '15%',
      render: (text, record) => (
        <>
          <BsPencilSquare onClick={() => UpdateProduct(record)} />
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
      <Drawer
        title={<Title level={4}>Thêm Sản Phẩm</Title>}
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
      >
        <div className="main_addproduct">
          <Form layout="vertical" onValuesChange={handleFromChange}>
            <Form.Item
              name={['user', 'id']}
              label="Id Sản phẩm"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Id Sản phẩm" />
            </Form.Item>

            <Form.Item
              name={['user', 'name']}
              label="Sản phẩm"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Sản Phẩm" />
            </Form.Item>

            <Form.Item
              name={['user', 'categoryId']}
              label="Loại Sản Phẩm"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Loại sản phẩm " />
            </Form.Item>

            <Form.Item
              name={['user', 'trademarkId']}
              label="Thương Hiệu"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Thương hiệu" />
            </Form.Item>

            <Form.Item
              name={['user', 'price']}
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
              name={['user', 'amount']}
              label="Số Lượng"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Số Lượng" />
            </Form.Item>

            <Form.Item name={['user', 'describe']} label="Mô tả">
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
              <Button onClick={handleAddBtnClick}>Thêm Sản Phẩm</Button>
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

      {/* ============= Drawer Sửa ======================= */}
      <Drawer
        title="Sửa Sản Phẩm"
        placement="right"
        onClose={onCloseUpdateProduct}
        visible={updateProduct}
        size="large"
      >
        <Form layout="vertical" onValuesChange={handleValueUpdate}>
          <Form.Item
            name={['user', 'id']}
            label="ID Sản phẩm"
            initialValue={defaultValueUpdate.id}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={1} placeholder="ID Sản phẩm" />
          </Form.Item>

          <Form.Item
            name={['user', 'name']}
            label="Sản phẩm"
            initialValue={defaultValueUpdate.name}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Sản Phẩm" />
          </Form.Item>

          <Form.Item
            name={['user', 'price']}
            label="Giá"
            initialValue={defaultValueUpdate.price}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Giá" />
          </Form.Item>

          <Form.Item
            name={['user', 'amount']}
            label="Số Lượng"
            initialValue={defaultValueUpdate.amount}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Số Lượng" />
          </Form.Item>

          <Form.Item
            name={['user', 'categoryId']}
            label="Loại Sản Phẩm"
            initialValue={defaultValueUpdate.categoryId}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Loại sản phẩm " />
          </Form.Item>

          <Form.Item
            name={['user', 'trademarkId']}
            label="Thương Hiệu"
            initialValue={defaultValueUpdate.trademarkId}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Thương hiệu" />
          </Form.Item>

          <Form.Item
            name={['user', 'describe']}
            label="Mô tả"
            initialValue={defaultValueUpdate.describe}
          >
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
              <Button onClick={handleBtnUpdateClick}>Lưu</Button>
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
        visible={productDetails}
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
