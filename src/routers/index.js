import TrangChu from '../User Page/Trang_Chu';
import DanhMucSanPham from '../User Page/Danh_Muc_San_Pham';
import ChiTietSanPham from '../User Page/Chi_Tiet_San_Pham';
import GioHang from '../User Page/Gio_Hang';
import TraCuuDonHang from '../User Page/Tra_Cuu_Don_Hang';
import DangNhap from '../User Page/Dang_Nhap';
import DangKy from '../User Page/Dang_Ky';
import QuenMatKhau from '../User Page/Quen_Mat_Khau';

import BangDieuKhien from '../Admin Page/Trang_Quan_Tri/Content/Bang_Dieu_Khien';
import CacSanPham from '../Admin Page/Trang_Quan_Tri/Content/Cac_San_Pham';
import CaiDat from '../Admin Page/Trang_Quan_Tri/Content/Cai_Dat';
import DonHang from '../Admin Page/Trang_Quan_Tri/Content/Don_Hang';
import NhanVien from '../Admin Page/Trang_Quan_Tri/Content/Nhan_Vien';
import LoaiSanPham from '../Admin Page/Trang_Quan_Tri/Content/Loai_San_Pham';
import ThuongHieu from '../Admin Page/Trang_Quan_Tri/Content/Thuong_Hieu';
import ADDangNhap from '../Admin Page/AD_Dang_Nhap';
import ADQuenMatKhau from '../Admin Page/AD_Quen_Mat_Khau';

const publicRoutes = [
  {
    path: '/',
    component: TrangChu,
  },
  {
    path: '/danhmucsanpham',
    component: DanhMucSanPham,
  },
  {
    path: '/chitietsanpham',
    component: ChiTietSanPham,
  },
  {
    path: '/giohang',
    component: GioHang,
  },
  {
    path: '/tracuudonhang',
    component: TraCuuDonHang,
  },
  {
    path: '/dangnhap',
    component: DangNhap,
  },
  {
    path: '/dangky',
    component: DangKy,
  },
  {
    path: '/quenmatkhau',
    component: QuenMatKhau,
  },
  {
    path: '/admin',
    component: ADDangNhap,
  },
  {
    path: '/admin/quenmatkhau',
    component: ADQuenMatKhau,
  },
];

const privateRoutes = [
  {
    path: '/admin/bangdieukhien',
    component: BangDieuKhien,
  },
  {
    path: '/admin/cacsanpham',
    component: CacSanPham,
  },
  {
    path: '/admin/caidat',
    component: CaiDat,
  },
  {
    path: '/admin/donhang',
    component: DonHang,
  },
  {
    path: '/admin/nhanvien',
    component: NhanVien,
  },
  {
    path: '/admin/khachhang',
    component: NhanVien,
  },
  {
    path: '/admin/loaisanpham',
    component: LoaiSanPham,
  },
  {
    path: '/admin/thuonghieu',
    component: ThuongHieu,
  },
];

export { publicRoutes, privateRoutes };
