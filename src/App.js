import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TrangChu from './page/Page-Home/TrangChu';
import ThongTinSanPham from './page/Page-Home/ThongTinSanPham';
import DangNhap from './page/Page-Home/DangNhap';
import DangKy from './page/Page-Home/DangKy';
import QuenMatKhau from './page/Page-Home/QuenMatKhau';
import GioHang from './page/Page-Home/GioHang';
import DienThoai from './page/Page-Home/DMSanPham/DienThoai';
import AmThanh from './page/Page-Home/DMSanPham/AmThanh';
import MayTinhBang from './page/Page-Home/DMSanPham/MayTinhBang';
import SmartWatch from './page/Page-Home/DMSanPham/SmartWatch';
import PhuKien from './page/Page-Home/DMSanPham/PhuKien';
import Xbox from './page/Page-Home/DMSanPham/Xbox';
import TaiNghe from './page/Page-Home/DMSanPham/TaiNghe';
import Camera from './page/Page-Home/DMSanPham/Camera';
import TraCuuDonHang from './page/Page-Home/TraCuuDonHang';

//====== Admin =====================================
import PageQuanTriAD from './website/Admin/Page_Quan_Tri';
import DangNhapAD from './page/Page-Admin/DangNhapAD';
import QuenMatKhauAD from './page/Page-Admin/QuenMatKhauAD';

import { publicRoutes } from './routers';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/thongtinsanpham" element={<ThongTinSanPham />} />
        <Route path="/dangnhap" element={<DangNhap />} />
        <Route path="/dangky" element={<DangKy />} />
        <Route path="/quenmatkhau" element={<QuenMatKhau />} />
        <Route path="/giohang" element={<GioHang />} />
        <Route path="/tracuudonhang" element={<TraCuuDonHang />} />

        <Route path="/dienthoai" element={<DienThoai />} />
        <Route path="/maytinhbang" element={<MayTinhBang />} />
        <Route path="/amthanh" element={<AmThanh />} />
        <Route path="/smartwatch" element={<SmartWatch />} />
        <Route path="/Phukien" element={<PhuKien />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/tainghe" element={<TaiNghe />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || PageQuanTriAD;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        <Route path="/dangnhapadmin" element={<DangNhapAD />} />
        <Route path="/quenmatkhauadmin" element={<QuenMatKhauAD />} />
      </Routes>
    </>
  );
};

export default App;
