function inThongBao() {
    alert("Bạn đã đăng ký thành công. Thông tin đăng ký của bạn như sau:\n=========================================\n" +
        "Họ tên: " + txtHoTen.value + "\n" +
        "Địa chỉ: " + txaDiaChi.value + "\n" +
        "Điện thoại: " + txtDienThoai.value + "\n" +
        "Loại khách: " + (chkKhachVN.checked ? "Việt Nam" : "Nước ngoài") + "\n" +
        "Chọn tour: " + selChonTour.options[selChonTour.selectedIndex].text + "\n" +
        "Phương tiện: " + (maybay.checked ? "Máy bay" : "") + (xedulich.checked ? "Xe du lịch" : "") + (tutuc.checked ? "Tự túc" : "") + "\n" +
        "Số lượng khách đoàn: " + numNguoiLon.value + " người lớn - " + numTreEm.value + " trẻ em" + "\n" +
        "Ghi chú thêm: " + txaGhiChu.value + "\n=========================================");
}