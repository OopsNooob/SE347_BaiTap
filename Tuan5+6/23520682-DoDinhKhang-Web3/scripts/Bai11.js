function KiemTraNhapLieu(){
    if(txtUser.value == "")
    {
        lblThongBao.innerHTML = "Bạn chưa nhập <b>tên người dùng</b>";
        txtUser.focus();
        return false;
    }
    if(txtPass.value == "")
    {
        lblThongBao.innerHTML = "Bạn chưa nhập mật khẩu";
        txtPass.focus();
        return false;
    }
    if(txtUser.value == "Yến Trần" && txtPass.value == "123456")
    {
        alert("Chào bạn " + txtUser.value);
        return true;
    }
    else{
        lblThongBao.innerHTML = "Thông tin đăng nhập không hợp lệ";
        txtUser.select();
        return false;
    }
}

function NhapLai(){
    lblThongBao.innerHTML = "";
    txtUser.focus();
}