import BangDieuKhien from "../website/Admin/Page_Quan_Tri/container/Bang_Dieu_Khien";
import CacSanPham from "../website/Admin/Page_Quan_Tri/container/Cac_San_Pham";
import CaiDat from "../website/Admin/Page_Quan_Tri/container/Cai_Dat";
import DonHang from "../website/Admin/Page_Quan_Tri/container/Don_Hang";
import DSNhanVien from "../website/Admin/Page_Quan_Tri/container/DS_Nhan_Vien";
import KhachHang from "../website/Admin/Page_Quan_Tri/container/Khach_Hang";
import LoaiSanPham from "../website/Admin/Page_Quan_Tri/container/Loai_San_Pham";
import ThuongHieu from "../website/Admin/Page_Quan_Tri/container/Thuong_Hieu";

const publicRoutes = [
  {
    path: "/bangdieukhien",
    component: BangDieuKhien,
  },
  {
    path: "/cacsanpham",
    component: CacSanPham,
  },
  {
    path: "/caidat",
    component: CaiDat,
  },
  {
    path: "/donhang",
    component: DonHang,
  },
  {
    path: "/nhanvien",
    component: DSNhanVien,
  },
  {
    path: "/khachhang",
    component: KhachHang,
  },
  {
    path: "/loaisanpham",
    component: LoaiSanPham,
  },
  {
    path: "/thuonghieu",
    component: ThuongHieu,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
