function inThongBao(){
    var chonSP ="";
    var arrSelSP=document.getElementsById("selSanPham");
    for(var i=0;i<arrSelSP.length;i++)
        if(arrSelSP[i].selected)
            chonSP = chonSP + arrSelSP[i].text+"; ";
            alert("Họ tên: "+txtHoTen.value+"\nĐịa chỉ: "+txtDiaChi.value+"\nEmail: "+txtEmail.value+"\nĐiện thoại: "+txtDienThoai.value+"\nGiới tính: "+
                (name.checked?"Nam":"Nữ")+"\nNghề nghiệp: "+selNgheNghiep.options[selNgheNghiep.selectedIndex].text+"\nChọn sản phẩm: "+chonSP +"\nDự đoán số người tham gia: "+numDuDoan.value);    
    }

function lamLai()
{
    lblThongBao.innerText="";
    txtHoTen.focus();
}