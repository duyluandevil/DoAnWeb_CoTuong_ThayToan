//Khoi tao va hien quan co
var hubcontext = $.connection.game;
var name = prompt("enter name", "");
var searchParams = new URLSearchParams(window.location.search);
var group = searchParams.get('Id');

$(document).ready(function () {
    HienQuanCo();
    LayDuLieuMaTran();
    console.log(hubcontext)
    UpdateRoom(group, name);
    
    
    $.connection.hub.start().done(function () {
        hubcontext.server.joinroom(group, name);
       
    });

    // thong bao join room
    hubcontext.client.addchatmessage = function (msg) {
        console.log(msg)
        InFoRoom(group);
        // load api du lieu phong
    } 
    hubcontext.client.getmoveMaTran = function (clquanco, yn, xn, y, x, change, id) {
        if (id != 0) {
            if (id == "tuong") {
                showPopup();
                GameOver();
            } else
                if (id == "tuong_do") {                   
                    showPopup();
                    GameOver();
                }
                else $('.' + id + '').remove();
            
        }
        MaTran[y][x].id = "";
        MaTran[yn][xn].id = clquanco;
        LoaiChange.loai = change;
    }
    hubcontext.client.getmove = function (clquanco, xn, yn) {        
        $('.' + clquanco + '').css({ "top": yn + 'px', "position": 'absolute' });
        $('.' + clquanco + '').css({ "left": xn + 'px', "position": 'absolute' });
        
    }    
});

function InFoRoom(room) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "../api/ThongtinP",
        data: {
            'maphong': room,
        },
        success: function (data) {
            $('#RoomId').text(data.Maphong);
            $('#Do').text(data.Do);
            $('#Den').text(data.Den);
            LoaiChange.id = data.Do;
            LoaiChange.red = data.Do;
            LoaiChange.black = data.Den;
        },
    });
}
//cap nhat phong
function UpdateRoom(room, player) {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "../api/NguoiChoi",
        data: {
            'maphong': room,
            'name': player
        },
        success: function (data) {
            console.log(JSON.parse(data));

        },
    });
}
const black = new QuayXe(-1,-1);
const red = new QuayXe(-1, -1);

const LoaiChange = new LoaiToanCuc("Do");
const MaTranBanCo = new Array();
//den
const xe_den1 = new ConCo("xe_den1", "Den", "/Content/coduyluan/Xe_den.png", new ViTri(0, 0));
const ma_den1 = new ConCo("ma_den1", "Den", "/Content/coduyluan/Ma_den.png", new ViTri(58, 0));
const voi_den1 = new ConCo("voi_den1", "Den", "/Content/coduyluan/Voi_den.png", new ViTri(114, 0));
const si_den1 = new ConCo("si_den1", "Den", "/Content/coduyluan/Si_den.png", new ViTri(172, 0));
const tuong = new ConCo("tuong", "Den", "/Content/coduyluan/Tuong_den.png", new ViTri(229, 0));
const si_den2 = new ConCo("si_den2", "Den", "/Content/coduyluan/Si_den.png", new ViTri(286, 0));
const voi_den2 = new ConCo("voi_den2", "Den", "/Content/coduyluan/Voi_den.png", new ViTri(342, 0));
const ma_den2 = new ConCo("ma_den2", "Den", "/Content/coduyluan/Ma_den.png", new ViTri(400, 0));
const xe_den2 = new ConCo("xe_den2", "Den", "/Content/coduyluan/Xe_den.png", new ViTri(458, 0));
const phao_den1 = new ConCo("phao_den1", "Den", "/Content/coduyluan/Phao_den.png", new ViTri(58, 117));
const phao_den2 = new ConCo("phao_den2", "Den", "/Content/coduyluan/Phao_den.png", new ViTri(400, 117));
const tot_den1 = new ConCo("tot_den1", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(0, 173));
const tot_den2 = new ConCo("tot_den2", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(114, 173));
const tot_den3 = new ConCo("tot_den3", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(229, 173));
const tot_den4 = new ConCo("tot_den4", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(342, 173));
const tot_den5 = new ConCo("tot_den5", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(458, 173));

//do
const tot_do1 = new ConCo("tot_do1", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(0, 344));
const tot_do2 = new ConCo("tot_do2", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(114, 344));
const tot_do3 = new ConCo("tot_do3", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(229, 344));
const tot_do4 = new ConCo("tot_do4", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(342, 344));
const tot_do5 = new ConCo("tot_do5", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(458, 344));
const phao_do1 = new ConCo("phao_do1", "Do", "/Content/coduyluan/Phao_do.png", new ViTri(58, 403));
const phao_do2 = new ConCo("phao_do2", "Do", "/Content/coduyluan/Phao_do.png", new ViTri(400, 403));
const xe_do1 = new ConCo("xe_do1", "Do", "/Content/coduyluan/Xe_do.png", new ViTri(0, 517));
const ma_do1 = new ConCo("ma_do1", "Do", "/Content/coduyluan/Ma_do.png", new ViTri(58, 517));
const voi_do1 = new ConCo("voi_do1", "Do", "/Content/coduyluan/Voi_do.png", new ViTri(114, 517));
const si_do1 = new ConCo("si_do1", "Do", "/Content/coduyluan/Si_do.png", new ViTri(172, 517));
const tuong_do = new ConCo("tuong_do", "Do", "/Content/coduyluan/Tuong_do.png", new ViTri(229, 517));
const si_do2 = new ConCo("si_do2", "Do", "/Content/coduyluan/Si_do.png", new ViTri(286, 517));
const voi_do2 = new ConCo("voi_do2", "Do", "/Content/coduyluan/Voi_do.png", new ViTri(342, 517));
const ma_do2 = new ConCo("ma_do2", "Do", "/Content/coduyluan/Ma_do.png", new ViTri(400, 517));
const xe_do2 = new ConCo("xe_do2", "Do", "/Content/coduyluan/Xe_do.png", new ViTri(458, 517));

const mang = [xe_den1, ma_den1, voi_den1, si_den1, tuong, si_den2, voi_den2, ma_den2, xe_den2, phao_den1, phao_den2, tot_den1, tot_den2, tot_den3, tot_den4,
    tot_den5, tot_do1, tot_do2, tot_do3, tot_do4, tot_do5, phao_do1, phao_do2, xe_do1, ma_do1, voi_do1, si_do1, tuong_do, si_do2, voi_do2, ma_do2, xe_do2
];

//Tao ma tran chua ban co
const MaTran = new Array();
MaTran[0] = new Array(new DiemTrenBanCo("", 0, 0), new DiemTrenBanCo("", 58, 0), new DiemTrenBanCo("", 114, 0), new DiemTrenBanCo("", 172, 0), new DiemTrenBanCo("", 229, 0), new DiemTrenBanCo("", 286, 0), new DiemTrenBanCo("", 342, 0), new DiemTrenBanCo("", 400, 0), new DiemTrenBanCo("", 458, 0));
MaTran[1] = new Array(new DiemTrenBanCo("", 0, 60), new DiemTrenBanCo("", 58, 60), new DiemTrenBanCo("", 114, 60), new DiemTrenBanCo("", 172, 60), new DiemTrenBanCo("", 229, 60), new DiemTrenBanCo("", 286, 60), new DiemTrenBanCo("", 342, 60), new DiemTrenBanCo("", 400, 60), new DiemTrenBanCo("", 458, 60));
MaTran[2] = new Array(new DiemTrenBanCo("", 0, 117), new DiemTrenBanCo("", 58, 117), new DiemTrenBanCo("", 114, 117), new DiemTrenBanCo("", 172, 117), new DiemTrenBanCo("", 229, 117), new DiemTrenBanCo("", 286, 117), new DiemTrenBanCo("", 342, 117), new DiemTrenBanCo("", 400, 117), new DiemTrenBanCo("", 458, 117));
MaTran[3] = new Array(new DiemTrenBanCo("", 0, 173), new DiemTrenBanCo("", 58, 173), new DiemTrenBanCo("", 114, 173), new DiemTrenBanCo("", 172, 173), new DiemTrenBanCo("", 229, 173), new DiemTrenBanCo("", 286, 173), new DiemTrenBanCo("", 342, 173), new DiemTrenBanCo("", 400, 173), new DiemTrenBanCo("", 458, 173));
MaTran[4] = new Array(new DiemTrenBanCo("", 0, 230), new DiemTrenBanCo("", 58, 230), new DiemTrenBanCo("", 114, 230), new DiemTrenBanCo("", 172, 230), new DiemTrenBanCo("", 229, 230), new DiemTrenBanCo("", 286, 230), new DiemTrenBanCo("", 342, 230), new DiemTrenBanCo("", 400, 230), new DiemTrenBanCo("", 458, 230));
MaTran[5] = new Array(new DiemTrenBanCo("", 0, 288), new DiemTrenBanCo("", 58, 288), new DiemTrenBanCo("", 114, 288), new DiemTrenBanCo("", 172, 288), new DiemTrenBanCo("", 229, 288), new DiemTrenBanCo("", 286, 288), new DiemTrenBanCo("", 342, 288), new DiemTrenBanCo("", 400, 288), new DiemTrenBanCo("", 458, 288));
MaTran[6] = new Array(new DiemTrenBanCo("", 0, 344), new DiemTrenBanCo("", 58, 344), new DiemTrenBanCo("", 114, 344), new DiemTrenBanCo("", 172, 344), new DiemTrenBanCo("", 229, 344), new DiemTrenBanCo("", 286, 344), new DiemTrenBanCo("", 342, 344), new DiemTrenBanCo("", 400, 344), new DiemTrenBanCo("", 458, 344));
MaTran[7] = new Array(new DiemTrenBanCo("", 0, 403), new DiemTrenBanCo("", 58, 403), new DiemTrenBanCo("", 114, 403), new DiemTrenBanCo("", 172, 403), new DiemTrenBanCo("", 229, 403), new DiemTrenBanCo("", 286, 403), new DiemTrenBanCo("", 342, 403), new DiemTrenBanCo("", 400, 403), new DiemTrenBanCo("", 458, 403));
MaTran[8] = new Array(new DiemTrenBanCo("", 0, 460), new DiemTrenBanCo("", 58, 460), new DiemTrenBanCo("", 114, 460), new DiemTrenBanCo("", 172, 460), new DiemTrenBanCo("", 229, 460), new DiemTrenBanCo("", 286, 460), new DiemTrenBanCo("", 342, 460), new DiemTrenBanCo("", 400, 460), new DiemTrenBanCo("", 458, 460));
MaTran[9] = new Array(new DiemTrenBanCo("", 0, 517), new DiemTrenBanCo("", 58, 517), new DiemTrenBanCo("", 114, 517), new DiemTrenBanCo("", 172, 517), new DiemTrenBanCo("", 229, 517), new DiemTrenBanCo("", 286, 517), new DiemTrenBanCo("", 342, 517), new DiemTrenBanCo("", 400, 517), new DiemTrenBanCo("", 458, 517));
function TaoMaTran() {
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
            for (let t = 0; t < 32; t++) {
                var p = mang[t].vitri;
                if (MaTran[i][j].top == p.top && MaTran[i][j].left == p.left)
                    MaTran[i][j].id = mang[t].id;
            }
        }
    }
}

const MaTranDungDeLuuViTriMoi = new Array();
function HienFile() {
    var a = 0;
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
            MaTran[i][j].id = MangLuuViTri[a++];

        }
    }

    //alert(MaTran[0][0].id);
    //var p = mang[4].vitri;
    //if (MaTran[0][3].id == mang[4].id)
    //    $(".test").append('<img id="quanco" src="' + mang[4].hinh + '" class="' + mang[4].id + ' ' + mang[4].loai + '"  alt="" style="position: absolute; left: ' + p.left + 'px; top: ' + p.top + 'px">');

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
            for (let a = 0; a < mang.length; a++) {
                var p = mang[a].vitri;
                if (MaTran[i][j].id == mang[a].id)
                    $(".test").append('<img id="quanco" src="' + mang[a].hinh + '" class="' + mang[a].id + ' ' + mang[a].loai + '"  alt="" style="position: absolute; left: ' + MaTran[i][j].left + 'px; top: ' + MaTran[i][j].top + 'px">');
                Click(mang[a].id, a);
            }
        }
    }

    for (var i = 0; i < 32; i++) {
        var element = document.getElementById("quanco");
        element.parentNode.removeChild(element);
    }
}
function HienQuanCo() {

    for (let i = 0; i < mang.length; i++) {
        var p = mang[i].vitri;
        $(".test").append('<img id="quanco" src="' + mang[i].hinh + '" class="' + mang[i].id + ' ' + mang[i].loai + '"  alt="" style="position: absolute; left: ' + p.left + 'px; top: ' + p.top + 'px">');
        Click(mang[i].id, i);
    }
    TaoMaTran();
}

var ConCoHienTai, LoaiConCo, xToanCuc, yToanCuc, metquaToanCuc;
var NuocDiQuanCu;

function Click(id, i) {
    $('.' + id + '').click(function () {
        if (LoaiChange.loai == mang[i].loai) {
            
            ConCoHienTai = id;
            var x, y;
            for (let i = 0; i <= 9; i++) {
                for (let j = 0; j <= 8; j++) {
                    if (MaTran[i][j].id == id) {
                        x = j;
                        y = i;
                    }
                }
            }
            let loai = mang[i].loai;
            LoaiConCo = loai;
            var vt = mang[i].vitri;

            var NuocDi = new Array();
            NuocDi = TinhNuocDi(id, loai, x, y);

            for (let metqua = 0; metqua < NuocDiQuanCu; metqua++) {

                $("#dot").remove();
            }

            for (let metqua = 0; metqua < NuocDi.length; metqua++) {

                $(".test").append('<img id="dot" class="dropimage' + metqua + '" src="/Content/coduyluan/dot.png" style="position: absolute; margin-left:8px; margin-top: 6px;left: ' + MaTran[NuocDi[metqua].top][NuocDi[metqua].left].left + 'px; top: ' + MaTran[NuocDi[metqua].top][NuocDi[metqua].left].top + 'px"/>');
                $('.dropimage' + metqua + '').click(function () {
                    ClickDiChuyen(NuocDi[metqua].left, NuocDi[metqua].top, metqua, NuocDi.length);                    

                });
                NuocDiQuanCu = NuocDi.length;

            }
        }
    });
}

var DuLieu; let file;
const MaTrannew1 = new Array();
const MaTranTuFile = new Array();
function ClickDiChuyen(x, y, mq, DoDai) {
    $('.dropimage' + mq + '').click(function () {

        if (LoaiChange.loai == "Do") {
            LoaiChange.loai = "Den";
        } else LoaiChange.loai = "Do";
        alert(LoaiChange.id);
        if (LoaiChange.id == LoaiChange.red) {
            LoaiChange.id = LoaiChange.black;
        } else LoaiChange.id == LoaiChange.red;
        //var ten = $(".dropimage").;
        /* console.log(ten);*/ //split chia cai chuoi thanh cac phan bang dau cach
        let left = $('.dropimage' + mq + '').css("left").slice(0, 3);
        let top = $('.dropimage' + mq + '').css("top").slice(0, 3);




        //Lấy thông tin của top có phải là số hay không
        let t = top.slice(0, 1);
        let o = top.slice(1, 2);
        let p = top.slice(2, 3);

        let topOff;
        if (o >= '0' && o <= '9') {
            topOff = t + o;
            if (p >= '0' && p <= '9')
                topOff = topOff + p;
            else
                topOff = topOff;
        }
        else
            topOff = t;


        //Lấy thông tin của left có phải là số hay không
        let l = left.slice(0, 1);
        let e = left.slice(1, 2);
        let ft = left.slice(2, 3);

        let leftOff;
        if (e >= '0' && e <= '9') {
            leftOff = l + e;
            if (ft >= '0' && ft <= '9')
                leftOff = leftOff + ft;
            else
                leftOff = leftOff;
        }
        else
            leftOff = l;
        //alert(topOff);


        
        //var quanco;
        //Xóa con cờ ở điểm cũ
        let Xold, Yold;
        for (let i = 0; i <= 9; i++) {
            for (let j = 0; j <= 8; j++) {
                if (MaTran[i][j].id == ConCoHienTai) {
                    MaTran[i][j].id = "";
                    Yold = i;
                    Xold = j;

                }
            }
        }

        //MaTran[y][x].id = ConCoHienTai;


        hubcontext.server.sendmove(group, ConCoHienTai, leftOff, topOff)
        
        // xoa thi them 1 tham so la class cua quan co bi xoa


        $('.' + ConCoHienTai + '').css({ "top": topOff + 'px', "position": 'absolute' });
        $('.' + ConCoHienTai + '').css({ "left": leftOff + 'px', "position": 'absolute' });

        //Xóa nút di chuyển khi con cờ đã ở tại vị trí nút
        for (let stt = 0; stt < DoDai; stt++) {
            $('.dropimage' + stt + '').remove();
        }

        //Ăn cờ [Chưa test được cờ cùng loại có ăn hay chưa, lỗi chỗ con tướng, khi trùng vị trí đó thì con tướng luôn con tướng nằm trên]
        if (MaTran[y][x].id != "") {
            for (let i = 0; i < mang.length; i++) {
                if (MaTran[y][x].id == mang[i].id) {
                    if (LoaiConCo != mang[i].loai) {
                        if (mang[i].id == "tuong") {
                            showPopup();
                            GameOver();
                        } else {
                            if (mang[i].id == "tuong_do") {
                                alert("Quân đỏ thua ");
                                showPopup();
                                GameOver();
                            }
                            else {
                                $('.' + mang[i].id + '').remove();
                                MaTran[y][x].id = ConCoHienTai;
                                hubcontext.server.sendmoveMaTran(group, ConCoHienTai, y, x, Yold, Xold, LoaiChange.loai, mang[i].id)
                            }
                        }
                    }
                }
            }
        } else {
            MaTran[y][x].id = ConCoHienTai;
            hubcontext.server.sendmoveMaTran(group, ConCoHienTai, y, x, Yold, Xold, LoaiChange.loai, 0);
            LayDuLieuMaTran();
        }
    });
}    

function TinhNuocDi(ten, loai, x, y) {

    var NuocDiDuoc = new Array();
    var NuocDiHienTai = new Array();
    var v1 = -1, v2 = -1, v3 = -1; v4 = -1;

    // co do
    if (loai == "Do" && (ten == "tot_do1" || ten == "tot_do2"
        || ten == "tot_do3" || ten == "tot_do4" || ten == "tot_do5")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y][x - 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (x != 8) {
                if (MaTran[y][x + 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x].id == mang[a].id) {
                    v4 = a;
                }
            }
        }
        if (y != 0) {
            if (v1 != -1) {
                if ((mang[v1].loai != "Do")) {
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1)
                    );
                }
            } else {
                NuocDiHienTai.push(
                    new ViTri(x, y - 1)
                );
            }
        }

        if (y <= 4) {
            if (v2 != -1) {
                if ((mang[v2].loai != "Do")) {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y)
                    );
                }
            } else {
                if (x != 0) {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y)
                    );
                }

            }
            if (v3 != -1) {
                if ((mang[v3].loai != "Do")) {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y)
                    );
                }
            } else {
                if (x != 8) {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y)
                    );
                }

            }
        }
        return NuocDiHienTai;

    }

    if (loai == "Do" && (ten == "xe_do1" || ten == "xe_do2")) {
        var z = y - 1;
        if (y != 0) {
            while (v1 == -1) {
                if (z == -1) {
                    v1 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[z][x].id == mang[m].id) {
                            v1 = m;
                            m = mang.length;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= y; a++) {
                if (MaTran[y - a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y - a)
                    );
                } else {
                    if (v1 != -2) {
                        if (mang[v1].loai != "Do") {
                            NuocDiHienTai.push(
                                new ViTri(x, y - a)
                            );
                        }
                    }

                    a = y;
                }
            }
        }
        var d = y + 1;
        if (y != 9) {
            while (v2 == -1) {
                if (d == 10) {
                    v2 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[d][x].id == mang[m].id) {
                            v2 = m;
                            m = mang.length;
                        }
                    }
                }
                d++;
            }
            for (let a = 1; a <= 9 - y; a++) {
                if (MaTran[y + a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y + a)
                    );
                } else {
                    if (v2 != -2) {
                        if (mang[v2].loai != "Do") {
                            NuocDiHienTai.push(
                                new ViTri(x, y + a)
                            );
                        }
                    }
                    a = 9 - y;
                }
            }
        }

        var q = x + 1;
        if (x != 8) {
            while (v3 == -1) {
                if (q == 9) {
                    v3 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[y][q].id == mang[m].id) {
                            v3 = m;
                            m = mang.length;
                        }
                    }
                }
                q++;
            }
            for (let a = 1; a <= 8 - x; a++) {
                if (MaTran[y][x + a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x + a, y)
                    );
                } else {
                    if (v3 != -2) {
                        if (mang[v3].loai != "Do") {
                            NuocDiHienTai.push(
                                new ViTri(x + a, y)
                            );
                        }
                    }
                    a = 8 - x;
                }
            }
        }

        q = x - 1;
        if (x != 0) {
            while (v4 == -1) {
                if (q == -1) {
                    v4 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[y][q].id == mang[m].id) {
                            v4 = m;
                            m = mang.length;
                        }
                    }
                }
                q--;
            }
            for (let a = 1; a <= x; a++) {
                if (MaTran[y][x - a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x - a, y)
                    );
                } else {
                    if (v4 != -2) {
                        if (mang[v4].loai != "Do") {
                            NuocDiHienTai.push(
                                new ViTri(x - a, y)
                            );
                        }
                    }
                    a = x;
                }
            }
        }

        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "ma_do1" || ten == "ma_do2")) {
        for (let a = 0; a < mang.length; a++) {
            //di len
            if (y > 1) {
                if (MaTran[y - 1][x].id == "") {
                    if (x != 0) {
                        if (MaTran[y - 2][x - 1].id == mang[a].id && mang[a].loai != loai || MaTran[y - 2][x - 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 1, y - 2));
                        }
                    }
                    if (x != 8) {
                        if (MaTran[y - 2][x + 1].id == mang[a].id && mang[a].loai != loai || MaTran[y - 2][x + 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 1, y - 2));
                        }
                    }
                }
            }
            //di xuong
            if (y < 8) {
                if (MaTran[y + 1][x].id == "") {
                    if (x != 0) {
                        if (MaTran[y + 2][x - 1].id == mang[a].id && mang[a].loai != loai || MaTran[y + 2][x - 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 1, y + 2));
                        }
                    }
                    if (x != 8) {
                        if (MaTran[y + 2][x + 1].id == mang[a].id && mang[a].loai != loai || MaTran[y + 2][x + 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 1, y + 2));
                        }
                    }
                }
            }
            //di trai
            if (x > 1) {
                if (MaTran[y][x - 1].id == "") {
                    if (y != 0) {
                        if (MaTran[y - 1][x - 2].id == mang[a].id && mang[a].loai != loai || MaTran[y - 1][x - 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 2, y - 1));
                        }
                    }
                    if (y != 9) {
                        if (MaTran[y + 1][x - 2].id == mang[a].id && mang[a].loai != loai || MaTran[y + 1][x - 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 2, y + 1));
                        }
                    }
                }
            }
            //di phai
            if (x < 8) {
                if (MaTran[y][x + 1].id == "") {
                    if (y != 0) {
                        if (MaTran[y - 1][x + 2].id == mang[a].id && mang[a].loai != loai || MaTran[y - 1][x + 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 2, y - 1));
                        }
                    }
                    if (y != 9) {
                        if (MaTran[y + 1][x + 2].id == mang[a].id && mang[a].loai != loai || MaTran[y + 1][x + 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 2, y + 1));
                        }
                    }
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "phao_do1" || ten == "phao_do2")) {
        var anquan1 = -1, anquan2 = -1, anquan3 = -1, anquan4 = -1;
        var z = y - 1;
        if (y != 0) {
            while (z > 0) {
                if (MaTran[z][x].id != "") {
                    z--;
                    while (v1 == -1) {
                        if (z <= -1) {
                            v1 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[z][x].id == mang[n].id) {
                                    v1 = n;
                                    n = mang.length;
                                    anquan1 = z;
                                }
                            }
                            z--;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= y; a++) {
                if (MaTran[y - a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y - a)
                    );
                } else {
                    if (v1 >= 0) {
                        if (mang[v1].loai != loai) {
                            NuocDiHienTai.push(
                                new ViTri(x, anquan1)
                            );
                        }
                    }
                    a = y;
                }
            }
        }
        var d = y + 1;
        if (y != 9) {
            while (d < 9) {
                if (MaTran[d][x].id != "") {
                    d++;
                    while (v2 == -1) {
                        if (d >= 10) {
                            v2 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[d][x].id == mang[n].id) {
                                    v2 = n;
                                    n = mang.length;
                                    anquan2 = d;
                                }
                            }
                            d++;
                        }
                    }
                }
                d++;
            }
            for (let a = 1; a <= 9 - y; a++) {
                if (MaTran[y + a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y + a)
                    );
                } else {
                    if (v2 >= 0) {
                        if (mang[v2].loai != loai) {
                            NuocDiHienTai.push(
                                new ViTri(x, anquan2)
                            );
                        }
                    }
                    a = 9 - y;
                }
            }
        }

        var q = x + 1;
        if (x != 8) {
            while (q < 7) {
                if (MaTran[y][q].id != "") {
                    q++;
                    while (v3 == -1) {
                        /*alert(q);*/
                        if (q >= 9) {
                            v3 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[y][q].id == mang[n].id) {
                                    v3 = n;
                                    n = mang.length;
                                    anquan3 = q;
                                    /*alert(q +" "+v3);*/
                                }
                            }
                            q++;
                        }
                    }
                }
                q++;
            }
            for (let a = 1; a <= 8 - x; a++) {
                if (MaTran[y][x + a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x + a, y)
                    );
                } else {
                    if (v3 >= 0) {
                        if (mang[v3].loai != loai) {
                            NuocDiHienTai.push(
                                new ViTri(anquan3, y)
                            );
                        }
                    }
                    a = 8 - x;
                }
            }
        }

        z = x - 1;
        if (x != 0) {
            while (z > 0) {
                if (MaTran[y][z].id != "") {
                    z--;
                    while (v4 == -1) {
                        if (z <= -1) {
                            v4 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[y][z].id == mang[n].id) {
                                    v4 = n;
                                    n = mang.length;
                                    anquan4 = z;
                                }
                            }
                            z--;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= x; a++) {
                if (MaTran[y][x - a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x - a, y)
                    );
                } else {
                    if (v4 >= 0) {
                        if (mang[v4].loai != loai) {
                            NuocDiHienTai.push(
                                new ViTri(anquan4, y)
                            );
                        }
                    }
                    a = x;
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "tuong_do")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y][x - 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (x != 8) {
                if (MaTran[y][x + 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x].id == mang[a].id) {
                    v4 = a;
                }
            }
        }

        if (y != 7) {//không nằm tại khung trên cùng
            if (x == 4) {
                if (v1 != -1) {//Phía trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }

                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }

                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
            if (x == 3) {
                if (v1 != -1) {//Phía trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }



                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
            if (x == 5) {
                if (v1 != -1) {//Phía trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }

                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }



                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
        }
        else {//Nằm dòng trên cùng
            if (x == 4) {


                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }

                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
            if (x == 3) {



                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
            if (x == 5) {//Phía phải 


                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }


                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }
            }
        }

        //if (y != 7) {
        //    NuocDiHienTai.push(
        //        new ViTri(x, y - 1),
        //    );
        //}
        //if (y <= 9) {
        //    if (x == 5) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 1, y),
        //            new ViTri(x, y + 1),
        //        );
        //    }
        //    else if (x == 3) {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y),
        //            new ViTri(x, y + 1),
        //        );
        //    }
        //    else {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y),
        //            new ViTri(x - 1, y),
        //            new ViTri(x, y + 1),
        //        );
        //    }
        //}
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "si_do1" || ten == "si_do2")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x - 1].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y - 1][x + 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x - 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x + 1].id == mang[a].id) {
                    v4 = a;
                }
            }
        }
        if (y != 7) {//Không nằm tại dòng trên cùng
            if (x == 3) {
                if (v2 != -1) {//Góc phải trên có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y - 1),
                    );
                }
                //if (v4 != -1) {//Góc phải trên có cờ
                //    if (mang[v4].loai != "Do")
                //        NuocDiHienTai.push(
                //            new ViTri(x + 1, y + 1),
                //        );
                //}
                //else {
                //    NuocDiHienTai.push(
                //        new ViTri(x + 1, y + 1),
                //    );
                //}
            }
            if (x == 4) {
                if (v1 != -1) {//Góc phải trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y - 1),
                    );
                }
                if (v2 != -1) {//Góc phải trên có cờ
                    if (mang[v2].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y - 1),
                    );
                }
                if (v3 != -1) {//Góc phải trên có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y + 1),
                    );
                }
                if (v4 != -1) {//Góc phải trên có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y + 1),
                    );
                }
            }
            if (x == 5) {
                if (v1 != -1) {//Góc phải trên có cờ
                    if (mang[v1].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y - 1),
                    );
                }

            }
        }
        else {
            if (x == 3) {
                if (v4 != -1) {//Góc phải trên có cờ
                    if (mang[v4].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y + 1),
                    );
                }
            }
            if (x == 5) {
                if (v3 != -1) {//Góc phải trên có cờ
                    if (mang[v3].loai != "Do")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y + 1),
                    );
                }

            }
        }

        //if (y == 7) {
        //    if (x == 5) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 1, y + 1),

        //        );
        //    }
        //    if (x == 3) {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y + 1),

        //        );
        //    }
        //}
        //if (y <= 9 && y != 7) {
        //    if (x == 5) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 1, y - 1),

        //        );
        //    }

        //    if (x == 3) {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y - 1),

        //        );
        //    }
        //    else {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 1, y + 1),
        //            new ViTri(x - 1, y - 1),
        //            new ViTri(x - 1, y + 1),
        //            new ViTri(x + 1, y - 1),
        //        );
        //    }
        //}
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "voi_do1" || ten == "voi_do2")) {
        for (let a = 0; a < mang.length; a++) {
            if (x != 0) {
                if (MaTran[y - 2][x - 2].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (y != 0 && x != 8) {
                if (MaTran[y - 2][x + 2].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (y != 9 && x != 0) {
                if (MaTran[y + 2][x - 2].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9 && x != 8) {
                if (MaTran[y + 2][x + 2].id == mang[a].id) {
                    v4 = a;
                }
            }
        }


        if (y != 5) {//Không nằm trên dòng trên cùng            
            if (x == 0) {//Nằm trên cột trái            
                if (v2 != -1) {//Có cờ
                    if (mang[v2].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }

                if (v4 != -1) {//Có cờ
                    if (mang[v4].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
            }
            if (x > 0 && x < 8) {
                if (v1 != -1) {//Có cờ
                    if (mang[v1].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }
                if (v2 != -1) {//Có cờ
                    if (mang[v2].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }
                if (v3 != -1) {//Có cờ
                    if (mang[v3].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }
                if (v4 != -1) {//Có cờ
                    if (mang[v4].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
            }
            if (x == 8) {
                if (v1 != -1) {//Có cờ
                    if (mang[v1].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }

                if (v3 != -1) {//Có cờ
                    if (mang[v3].loai != "Do") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }

            }
        }
        else {//Nằm dòng trên cùng
            if (v3 != -1) {//Có cờ
                if (mang[v3].loai != "Do") {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x - 2, y + 2)
                );
            }
            if (v4 != -1) {//Có cờ
                if (mang[v4].loai != "Do") {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 2, y + 2)
                );
            }
        }
        //if (y != 7 && y != 5) {
        //    NuocDiHienTai.push(
        //        new ViTri(x - 2, y - 2),
        //        new ViTri(x + 2, y - 2),
        //    );
        //}
        //if (y == 5) {
        //    NuocDiHienTai.push(
        //        new ViTri(x + 2, y + 2),
        //        new ViTri(x - 2, y + 2),
        //    );
        //}
        //if (y <= 9) {
        //    if (x == 0) {
        //        NuocDiHienTai.push(
        //            new ViTri(x + 2, y - 2),
        //            new ViTri(x + 2, y + 2),
        //        );
        //    }
        //    if (x < 8 && y != 5) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 2, y - 2),
        //            new ViTri(x + 2, y + 2),
        //            new ViTri(x - 2, y + 2),
        //            new ViTri(x + 2, y - 2),

        //        );
        //    }
        //    if (x == 8) {
        //        NuocDiHienTai.push(
        //            new ViTri(x - 2, y - 2),
        //            new ViTri(x - 2, y + 2),
        //        );
        //    }

        //}
        return NuocDiHienTai;
    }

    //co den

    if (loai == "Den" && (ten == "tot_den1" || ten == "tot_den2"
        || ten == "tot_den3" || ten == "tot_den4" || ten == "tot_den5")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y][x - 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (x != 8) {
                if (MaTran[y][x + 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x].id == mang[a].id) {
                    v4 = a;
                }
            }
        }
        if (y != 9) {
            if (v4 != -1) {
                if ((mang[v4].loai != "Den")) {
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1)
                    );
                }
            } else {
                NuocDiHienTai.push(
                    new ViTri(x, y + 1)
                );
            }
        }

        if (y >= 5) {
            if (v2 != -1) {
                if ((mang[v2].loai != "Den")) {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y)
                    );
                }
            } else {
                if (x != 0) {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y)
                    );
                }

            }
            if (v3 != -1) {
                if ((mang[v3].loai != "Den")) {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y)
                    );
                }
            } else {
                if (x != 8) {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y)
                    );
                }

            }
        }

        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "tuong")) {
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (x != 0) {
                if (MaTran[y][x - 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (x != 8) {
                if (MaTran[y][x + 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x].id == mang[a].id) {
                    v4 = a;
                }
            }
        }

        if (y != 2) {//không nằm tại khung trên cùng
            if (x == 4) {
                if (v4 != -1) {//Phía trên có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }

                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }

                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
            if (x == 3) {
                if (v4 != -1) {//Phía trên có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }



                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
            if (x == 5) {
                if (v4 != -1) {//Phía trên có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y + 1),
                        );
                }
                else {//Phía trên không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y + 1),
                    );
                }

                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }



                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
        }
        else {//Nằm dòng trên cùng
            if (x == 4) {


                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }

                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
            if (x == 3) {



                if (v3 != -1) {//Phía phải có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y),
                    );
                }

                if (v1 != -1) {//Phía phải có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
            if (x == 5) {//Phía phải 


                if (v2 != -1) {//Phía trái có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y),
                        );
                }
                else {//Phía trái không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y),
                    );
                }


                if (v4 != -1) {//Phía phải có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x, y - 1),
                        );
                }
                else {//Phía phải không có cờ
                    NuocDiHienTai.push(
                        new ViTri(x, y - 1),
                    );
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "si_den1" || ten == "si_den2")) {
        var v1 = -1, v2 = -1, v3 = -1, v4 = -1;
        for (let a = 0; a < mang.length; a++) {
            if (y != 0) {
                if (MaTran[y - 1][x - 1].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (y != 0) {
                if (MaTran[y - 1][x + 1].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x - 1].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9) {
                if (MaTran[y + 1][x + 1].id == mang[a].id) {
                    v4 = a;
                }
            }
        }
        if (y != 2) {//Không nằm tại dòng trên cùng
            if (x == 3) {
                if (v4 != -1) {//Góc phải trên có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y + 1),
                    );
                }

            }
            if (x == 4) {
                if (v1 != -1) {//Góc phải trên có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y - 1),
                    );
                }
                if (v2 != -1) {//Góc phải trên có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y - 1),
                    );
                }
                if (v3 != -1) {//Góc phải trên có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y + 1),
                    );
                }
                if (v4 != -1) {//Góc phải trên có cờ
                    if (mang[v4].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y + 1),
                    );
                }
            }
            if (x == 5) {
                if (v3 != -1) {//Góc phải trên có cờ
                    if (mang[v3].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y + 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y + 1),
                    );
                }

            }
        }
        else {
            if (x == 3) {
                if (v2 != -1) {//Góc phải trên có cờ
                    if (mang[v2].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x + 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 1, y - 1),
                    );
                }
            }
            if (x == 5) {
                if (v1 != -1) {//Góc phải trên có cờ
                    if (mang[v1].loai != "Den")
                        NuocDiHienTai.push(
                            new ViTri(x - 1, y - 1),
                        );
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 1, y - 1),
                    );
                }

            }
        }

        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "voi_den1" || ten == "voi_den2")) {
        var v1 = -1, v2 = -1, v3 = -1, v4 = -1;
        for (let a = 0; a < mang.length; a++) {
            if (y != 0 && x != 0) {
                if (MaTran[y - 2][x - 2].id == mang[a].id) {
                    v1 = a;
                }
            }
            if (y != 0 && x != 8) {
                if (MaTran[y - 2][x + 2].id == mang[a].id) {
                    v2 = a;
                }
            }
            if (y != 9 && x != 0) {
                if (MaTran[y + 2][x - 2].id == mang[a].id) {
                    v3 = a;
                }
            }
            if (y != 9 && x != 8) {
                if (MaTran[y + 2][x + 2].id == mang[a].id) {
                    v4 = a;
                }
            }
        }


        if (y != 4) {//Không nằm trên dòng trên cùng            
            if (x == 0) {//Nằm trên cột trái            
                if (v2 != -1) {//Có cờ
                    if (mang[v2].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }

                if (v4 != -1) {//Có cờ
                    if (mang[v4].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
            }
            if (x > 0 && x < 8) {
                if (v3 != -1) {//Có cờ
                    if (mang[v3].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }
                if (v4 != -1) {//Có cờ
                    if (mang[v4].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 2)
                    );
                }
                if (v1 != -1) {//Có cờ
                    if (mang[v1].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }
                if (v2 != -1) {//Có cờ
                    if (mang[v2].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }
            }
            if (x == 8) {
                if (v1 != -1) {//Có cờ
                    if (mang[v1].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }

                if (v3 != -1) {//Có cờ
                    if (mang[v3].loai != "Den") {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y + 2)
                        );
                    }
                }
                else {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 2)
                    );
                }

            }
        }
        else {//Nằm dòng trên cùng
            if (v1 != -1) {//Có cờ
                if (mang[v1].loai != "Den") {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y - 2)
                    );
                }
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x - 2, y - 2)
                );
            }
            if (v2 != -1) {//Có cờ
                if (mang[v2].loai != "Den") {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 2)
                    );
                }
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 2, y - 2)
                );
            }
        }

        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "ma_den1" || ten == "ma_den2")) {
        for (let a = 0; a < mang.length; a++) {
            //di len
            if (y > 1) {
                if (MaTran[y - 1][x].id == "") {
                    if (x != 0) {
                        if (MaTran[y - 2][x - 1].id == mang[a].id && mang[a].loai != loai || MaTran[y - 2][x - 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 1, y - 2));
                        }
                    }
                    if (x != 8) {
                        if (MaTran[y - 2][x + 1].id == mang[a].id && mang[a].loai != loai || MaTran[y - 2][x + 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 1, y - 2));
                        }
                    }
                }
            }
            //di xuong
            if (y < 8) {
                if (MaTran[y + 1][x].id == "") {
                    if (x != 0) {
                        if (MaTran[y + 2][x - 1].id == mang[a].id && mang[a].loai != loai || MaTran[y + 2][x - 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 1, y + 2));
                        }
                    }
                    if (x != 8) {
                        if (MaTran[y + 2][x + 1].id == mang[a].id && mang[a].loai != loai || MaTran[y + 2][x + 1].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 1, y + 2));
                        }
                    }
                }
            }
            //di trai
            if (x > 1) {
                if (MaTran[y][x - 1].id == "") {
                    if (y != 0) {
                        if (MaTran[y - 1][x - 2].id == mang[a].id && mang[a].loai != loai || MaTran[y - 1][x - 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 2, y - 1));
                        }
                    }
                    if (y != 9) {
                        if (MaTran[y + 1][x - 2].id == mang[a].id && mang[a].loai != loai || MaTran[y + 1][x - 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x - 2, y + 1));
                        }
                    }
                }
            }
            //di phai
            if (x < 8) {
                if (MaTran[y][x + 1].id == "") {
                    if (y != 0) {
                        if (MaTran[y - 1][x + 2].id == mang[a].id && mang[a].loai != loai || MaTran[y - 1][x + 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 2, y - 1));
                        }
                    }
                    if (y != 9) {
                        if (MaTran[y + 1][x + 2].id == mang[a].id && mang[a].loai != loai || MaTran[y + 1][x + 2].id == "") {
                            NuocDiHienTai.push(new ViTri(x + 2, y + 1));
                        }
                    }
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "phao_den1" || ten == "phao_den2")) {
        var anquan1 = -1, anquan2 = -1, anquan3 = -1, anquan4 = -1;
        var z = y - 1;
        if (y != 0) {
            while (z > 0) {
                if (MaTran[z][x].id != "") {
                    z--;
                    while (v1 == -1) {
                        if (z <= -1) {
                            v1 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[z][x].id == mang[n].id) {
                                    v1 = n;
                                    n = mang.length;
                                    anquan1 = z;
                                }
                            }
                            z--;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= y; a++) {
                if (MaTran[y - a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y - a)
                    );
                } else {
                    if (v1 >= 0) {
                        if (mang[v1].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x, anquan1)
                            );
                        }
                    }
                    a = y;
                }
            }
        }
        var d = y + 1;
        if (y != 9) {
            while (d < 9) {
                if (MaTran[d][x].id != "") {
                    d++;
                    while (v2 == -1) {
                        if (d >= 10) {
                            v2 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[d][x].id == mang[n].id) {
                                    v2 = n;
                                    n = mang.length;
                                    anquan2 = d;
                                }
                            }
                            d++;
                        }
                    }
                }
                d++;
            }
            for (let a = 1; a <= 9 - y; a++) {
                if (MaTran[y + a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y + a)
                    );
                } else {
                    if (v2 >= 0) {
                        if (mang[v2].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x, anquan2)
                            );
                        }
                    }
                    a = 9 - y;
                }
            }
        }

        var q = x + 1;
        if (x != 8) {
            while (q < 7) {
                if (MaTran[y][q].id != "") {
                    q++;
                    while (v3 == -1) {
                        /*alert(q);*/
                        if (q >= 9) {
                            v3 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[y][q].id == mang[n].id) {
                                    v3 = n;
                                    n = mang.length;
                                    anquan3 = q;
                                    /*alert(q +" "+v3);*/
                                }
                            }
                            q++;
                        }
                    }
                }
                q++;
            }
            for (let a = 1; a <= 8 - x; a++) {
                if (MaTran[y][x + a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x + a, y)
                    );
                } else {
                    if (v3 >= 0) {
                        if (mang[v3].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(anquan3, y)
                            );
                        }
                    }
                    a = 8 - x;
                }
            }
        }

        z = x - 1;
        if (x != 0) {
            while (z > 0) {
                if (MaTran[y][z].id != "") {
                    z--;
                    while (v4 == -1) {
                        if (z <= -1) {
                            v4 = -2;
                        } else {
                            for (let n = 0; n < mang.length; n++) {
                                if (MaTran[y][z].id == mang[n].id) {
                                    v4 = n;
                                    n = mang.length;
                                    anquan4 = z;
                                }
                            }
                            z--;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= x; a++) {
                if (MaTran[y][x - a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x - a, y)
                    );
                } else {
                    if (v4 >= 0) {
                        if (mang[v4].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(anquan4, y)
                            );
                        }
                    }
                    a = x;
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "xe_den1" || ten == "xe_den2")) {
        //đi lên
        var z = y - 1;
        if (y != 0) {
            while (v1 == -1) {
                if (z == -1) {
                    v1 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[z][x].id == mang[m].id) {
                            v1 = m;
                            m = mang.length;
                        }
                    }
                }
                z--;
            }
            for (let a = 1; a <= y; a++) {
                if (MaTran[y - a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y - a)
                    );
                } else {
                    if (v1 != -2) {
                        if (mang[v1].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x, y - a)
                            );
                        }
                    }

                    a = y;
                }
            }
        }
        //đi xuống
        var d = y + 1;
        if (y != 9) {
            while (v2 == -1) {
                if (d == 10) {
                    v2 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[d][x].id == mang[m].id) {
                            v2 = m;
                            m = mang.length;
                        }
                    }
                }
                d++;
            }
            for (let a = 1; a <= 9 - y; a++) {
                if (MaTran[y + a][x].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x, y + a)
                    );
                } else {
                    if (v2 != -2) {
                        if (mang[v2].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x, y + a)
                            );
                        }
                    }
                    a = 9 - y;
                }
            }
        }
        //đi phải
        var q = x + 1;
        if (x != 8) {
            while (v3 == -1) {
                if (q == 9) {
                    v3 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[y][q].id == mang[m].id) {
                            v3 = m;
                            m = mang.length;
                        }
                    }
                }
                q++;
            }
            for (let a = 1; a <= 8 - x; a++) {
                if (MaTran[y][x + a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x + a, y)
                    );
                } else {
                    if (v3 != -2) {
                        if (mang[v3].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x + a, y)
                            );
                        }
                    }
                    a = 8 - x;
                }
            }
        }
        //đi trái
        q = x - 1;
        if (x != 0) {
            while (v4 == -1) {
                if (q == -1) {
                    v4 = -2;
                } else {
                    for (let m = 0; m < mang.length; m++) {
                        if (MaTran[y][q].id == mang[m].id) {
                            v4 = m;
                            m = mang.length;
                        }
                    }
                }
                q--;
            }
            for (let a = 1; a <= x; a++) {
                if (MaTran[y][x - a].id == "") {
                    NuocDiHienTai.push(
                        new ViTri(x - a, y)
                    );
                } else {
                    if (v4 != -2) {
                        if (mang[v4].loai != "Den") {
                            NuocDiHienTai.push(
                                new ViTri(x - a, y)
                            );
                        }
                    }
                    a = x;
                }
            }
        }
        return NuocDiHienTai;
    }
}

function GameOver() {
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
            MaTran[i][j].id = "";
        }
    }
    for (let i = 0; i < mang.length; i++) {
        $('.' + mang[i].id + '').remove();
    }
    HienQuanCo();
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    //document.body.removeChild(element);
}

function ChapNhanLuu() {
    var fileSave = DuLieu;
    $("#LuuBanCo").click(function () {
        download("BanCoSave.txt", fileSave);
    });
}

function LayDuLieuMaTran() {

    const MaTrannew = new Array();
    MaTrannew[0] = new Array(new DiemTrenBanCo("", 0, 0), new DiemTrenBanCo("", 58, 0), new DiemTrenBanCo("", 114, 0), new DiemTrenBanCo("", 172, 0), new DiemTrenBanCo("", 229, 0), new DiemTrenBanCo("", 286, 0), new DiemTrenBanCo("", 342, 0), new DiemTrenBanCo("", 400, 0), new DiemTrenBanCo("", 458, 0));
    MaTrannew[1] = new Array(new DiemTrenBanCo("", 0, 60), new DiemTrenBanCo("", 58, 60), new DiemTrenBanCo("", 114, 60), new DiemTrenBanCo("", 172, 60), new DiemTrenBanCo("", 229, 60), new DiemTrenBanCo("", 286, 60), new DiemTrenBanCo("", 342, 60), new DiemTrenBanCo("", 400, 60), new DiemTrenBanCo("", 458, 60));
    MaTrannew[2] = new Array(new DiemTrenBanCo("", 0, 117), new DiemTrenBanCo("", 58, 117), new DiemTrenBanCo("", 114, 117), new DiemTrenBanCo("", 172, 117), new DiemTrenBanCo("", 229, 117), new DiemTrenBanCo("", 286, 117), new DiemTrenBanCo("", 342, 117), new DiemTrenBanCo("", 400, 117), new DiemTrenBanCo("", 458, 117));
    MaTrannew[3] = new Array(new DiemTrenBanCo("", 0, 173), new DiemTrenBanCo("", 58, 173), new DiemTrenBanCo("", 114, 173), new DiemTrenBanCo("", 172, 173), new DiemTrenBanCo("", 229, 173), new DiemTrenBanCo("", 286, 173), new DiemTrenBanCo("", 342, 173), new DiemTrenBanCo("", 400, 173), new DiemTrenBanCo("", 458, 173));
    MaTrannew[4] = new Array(new DiemTrenBanCo("", 0, 230), new DiemTrenBanCo("", 58, 230), new DiemTrenBanCo("", 114, 230), new DiemTrenBanCo("", 172, 230), new DiemTrenBanCo("", 229, 230), new DiemTrenBanCo("", 286, 230), new DiemTrenBanCo("", 342, 230), new DiemTrenBanCo("", 400, 230), new DiemTrenBanCo("", 458, 230));
    MaTrannew[5] = new Array(new DiemTrenBanCo("", 0, 288), new DiemTrenBanCo("", 58, 288), new DiemTrenBanCo("", 114, 288), new DiemTrenBanCo("", 172, 288), new DiemTrenBanCo("", 229, 288), new DiemTrenBanCo("", 286, 288), new DiemTrenBanCo("", 342, 288), new DiemTrenBanCo("", 400, 288), new DiemTrenBanCo("", 458, 288));
    MaTrannew[6] = new Array(new DiemTrenBanCo("", 0, 344), new DiemTrenBanCo("", 58, 344), new DiemTrenBanCo("", 114, 344), new DiemTrenBanCo("", 172, 344), new DiemTrenBanCo("", 229, 344), new DiemTrenBanCo("", 286, 344), new DiemTrenBanCo("", 342, 344), new DiemTrenBanCo("", 400, 344), new DiemTrenBanCo("", 458, 344));
    MaTrannew[7] = new Array(new DiemTrenBanCo("", 0, 403), new DiemTrenBanCo("", 58, 403), new DiemTrenBanCo("", 114, 403), new DiemTrenBanCo("", 172, 403), new DiemTrenBanCo("", 229, 403), new DiemTrenBanCo("", 286, 403), new DiemTrenBanCo("", 342, 403), new DiemTrenBanCo("", 400, 403), new DiemTrenBanCo("", 458, 403));
    MaTrannew[8] = new Array(new DiemTrenBanCo("", 0, 460), new DiemTrenBanCo("", 58, 460), new DiemTrenBanCo("", 114, 460), new DiemTrenBanCo("", 172, 460), new DiemTrenBanCo("", 229, 460), new DiemTrenBanCo("", 286, 460), new DiemTrenBanCo("", 342, 460), new DiemTrenBanCo("", 400, 460), new DiemTrenBanCo("", 458, 460));
    MaTrannew[9] = new Array(new DiemTrenBanCo("", 0, 517), new DiemTrenBanCo("", 58, 517), new DiemTrenBanCo("", 114, 517), new DiemTrenBanCo("", 172, 517), new DiemTrenBanCo("", 229, 517), new DiemTrenBanCo("", 286, 517), new DiemTrenBanCo("", 342, 517), new DiemTrenBanCo("", 400, 517), new DiemTrenBanCo("", 458, 517));

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
            if (MaTrannew[i][j].top == MaTran[i][j].top && MaTran[i][j].left == MaTrannew[i][j].left) {
                MaTrannew[i][j].id = MaTran[i][j].id;
            }
        }
    }
    //DuLieu = "MaTrannew[0] = new Array(new DiemTrenBanCo(" + MaTrannew[0][0].id + ", 0, 0), new DiemTrenBanCo(" + MaTrannew[0][1].id + ", 58, 0), new DiemTrenBanCo(" + MaTrannew[0][2].id + ", 114, 0), new DiemTrenBanCo(" + MaTrannew[0][3].id + ", 172, 0), new DiemTrenBanCo(" + MaTrannew[0][4].id + ", 229, 0), new DiemTrenBanCo(" + MaTrannew[0][5].id + ", 286, 0), new DiemTrenBanCo(" + MaTrannew[0][6].id + ", 342, 0), new DiemTrenBanCo(" + MaTrannew[0][7].id + ", 400, 0), new DiemTrenBanCo(" + MaTrannew[0][8].id +", 458, 0));\n"+
    //            "MaTrannew[1] = new Array(new DiemTrenBanCo(" + MaTrannew[1][0].id + ", 0, 60), new DiemTrenBanCo(" + MaTrannew[1][1].id + ", 58, 60), new DiemTrenBanCo(" + MaTrannew[1][2].id + ", 114, 60), new DiemTrenBanCo(" + MaTrannew[1][3].id + ", 172, 60), new DiemTrenBanCo(" + MaTrannew[1][4].id + ", 229, 60), new DiemTrenBanCo(" + MaTrannew[1][5].id + ", 286, 60), new DiemTrenBanCo(" + MaTrannew[1][6].id + ", 342, 60), new DiemTrenBanCo(" + MaTrannew[1][7].id + ", 400, 60), new DiemTrenBanCo(" + MaTrannew[1][8].id +", 458, 60));\n"+
    //            "MaTrannew[2] = new Array(new DiemTrenBanCo(" + MaTrannew[2][0].id + ", 0, 117), new DiemTrenBanCo(" + MaTrannew[2][1].id + ", 58, 117), new DiemTrenBanCo(" + MaTrannew[2][2].id + ", 114, 117), new DiemTrenBanCo(" + MaTrannew[2][3].id + ", 172, 117), new DiemTrenBanCo(" + MaTrannew[2][4].id + ", 229, 117), new DiemTrenBanCo(" + MaTrannew[2][5].id + ", 286, 117), new DiemTrenBanCo(" + MaTrannew[2][6].id + ", 342, 117), new DiemTrenBanCo(" + MaTrannew[2][7].id + ", 400, 117), new DiemTrenBanCo(" + MaTrannew[2][8].id +", 458, 117));\n"+
    //            "MaTrannew[3] = new Array(new DiemTrenBanCo(" + MaTrannew[3][0].id + ", 0, 173), new DiemTrenBanCo(" + MaTrannew[3][1].id + ", 58, 173), new DiemTrenBanCo(" + MaTrannew[3][2].id + ", 114, 173), new DiemTrenBanCo(" + MaTrannew[3][3].id + ", 172, 173), new DiemTrenBanCo(" + MaTrannew[3][4].id + ", 229, 173), new DiemTrenBanCo(" + MaTrannew[3][5].id +", 286, 173), new DiemTrenBanCo(" + MaTrannew[3][6].id + ", 342, 173), new DiemTrenBanCo(" + MaTrannew[3][7].id + ", 400, 173), new DiemTrenBanCo(" + MaTrannew[3][8].id +", 458, 173));\n"+
    //            "MaTrannew[4] = new Array(new DiemTrenBanCo(" + MaTrannew[4][0].id + ", 0, 230), new DiemTrenBanCo(" + MaTrannew[4][1].id + ", 58, 230), new DiemTrenBanCo(" + MaTrannew[4][2].id + ", 114, 230), new DiemTrenBanCo(" + MaTrannew[4][3].id + ", 172, 230), new DiemTrenBanCo(" + MaTrannew[4][4].id + ", 229, 230), new DiemTrenBanCo(" + MaTrannew[4][5].id + ", 286, 230), new DiemTrenBanCo(" + MaTrannew[4][6].id + ", 342, 230), new DiemTrenBanCo(" + MaTrannew[4][7].id + ", 400, 230), new DiemTrenBanCo(" + MaTrannew[4][8].id +", 458, 230));\n"+
    //            "MaTrannew[5] = new Array(new DiemTrenBanCo(" + MaTrannew[5][0].id + ", 0, 288), new DiemTrenBanCo(" + MaTrannew[5][1].id + ", 58, 288), new DiemTrenBanCo(" + MaTrannew[5][2].id + ", 114, 288), new DiemTrenBanCo(" + MaTrannew[5][3].id + ", 172, 288), new DiemTrenBanCo(" + MaTrannew[5][4].id + ", 229, 288), new DiemTrenBanCo(" + MaTrannew[5][5].id + ", 286, 288), new DiemTrenBanCo(" + MaTrannew[5][6].id + ", 342, 288), new DiemTrenBanCo(" + MaTrannew[5][7].id + ", 400, 288), new DiemTrenBanCo(" + MaTrannew[5][8].id +", 458, 288));\n"+
    //            "MaTrannew[6] = new Array(new DiemTrenBanCo(" + MaTrannew[6][0].id + ", 0, 344), new DiemTrenBanCo(" + MaTrannew[6][1].id + ", 58, 344), new DiemTrenBanCo(" + MaTrannew[6][2].id + ", 114, 344), new DiemTrenBanCo(" + MaTrannew[6][3].id + ", 172, 344), new DiemTrenBanCo(" + MaTrannew[6][4].id + ", 229, 344), new DiemTrenBanCo(" + MaTrannew[6][5].id + ", 286, 344), new DiemTrenBanCo(" + MaTrannew[6][6].id + ", 342, 344), new DiemTrenBanCo(" + MaTrannew[6][7].id + ", 400, 344), new DiemTrenBanCo(" + MaTrannew[6][8].id +", 458, 344));\n"+
    //            "MaTrannew[7] = new Array(new DiemTrenBanCo(" + MaTrannew[7][0].id + ", 0, 403), new DiemTrenBanCo(" + MaTrannew[7][1].id + ", 58, 403), new DiemTrenBanCo(" + MaTrannew[7][2].id + ", 114, 403), new DiemTrenBanCo(" + MaTrannew[7][3].id + ", 172, 403), new DiemTrenBanCo(" + MaTrannew[7][4].id + ", 229, 403), new DiemTrenBanCo(" + MaTrannew[7][5].id + ", 286, 403), new DiemTrenBanCo(" + MaTrannew[7][6].id + ", 342, 403), new DiemTrenBanCo(" + MaTrannew[7][7].id + ", 400, 403), new DiemTrenBanCo(" + MaTrannew[7][8].id +", 458, 403));\n"+
    //            "MaTrannew[8] = new Array(new DiemTrenBanCo(" + MaTrannew[8][0].id + ", 0, 460), new DiemTrenBanCo(" + MaTrannew[8][1].id + ", 58, 460), new DiemTrenBanCo(" + MaTrannew[8][2].id + ", 114, 460), new DiemTrenBanCo(" + MaTrannew[8][3].id + ", 172, 460), new DiemTrenBanCo(" + MaTrannew[8][4].id + ", 229, 460), new DiemTrenBanCo(" + MaTrannew[8][5].id + ", 286, 460), new DiemTrenBanCo(" + MaTrannew[8][6].id + ", 342, 460), new DiemTrenBanCo(" + MaTrannew[8][7].id + ", 400, 460), new DiemTrenBanCo(" + MaTrannew[8][8].id +", 458, 460));\n"+
    //            "MaTrannew[9] = new Array(new DiemTrenBanCo(" + MaTrannew[9][0].id + ", 0, 517), new DiemTrenBanCo(" + MaTrannew[9][1].id + ", 58, 517), new DiemTrenBanCo(" + MaTrannew[9][2].id + ", 114, 517), new DiemTrenBanCo(" + MaTrannew[9][3].id + ", 172, 517), new DiemTrenBanCo(" + MaTrannew[9][4].id + ", 229, 517), new DiemTrenBanCo(" + MaTrannew[9][5].id + ", 286, 517), new DiemTrenBanCo(" + MaTrannew[9][6].id + ", 342, 517), new DiemTrenBanCo(" + MaTrannew[9][7].id + ", 400, 517), new DiemTrenBanCo(" + MaTrannew[9][8].id +", 458, 517));\n"

    //DuLieu = "new Array(new DiemTrenBanCo(" + MaTrannew[0][0].id + ", 0, 0), new DiemTrenBanCo(" + MaTrannew[0][1].id + ", 58, 0), new DiemTrenBanCo(" + MaTrannew[0][2].id + ", 114, 0), new DiemTrenBanCo(" + MaTrannew[0][3].id + ", 172, 0), new DiemTrenBanCo(" + MaTrannew[0][4].id + ", 229, 0), new DiemTrenBanCo(" + MaTrannew[0][5].id + ", 286, 0), new DiemTrenBanCo(" + MaTrannew[0][6].id + ", 342, 0), new DiemTrenBanCo(" + MaTrannew[0][7].id + ", 400, 0), new DiemTrenBanCo(" + MaTrannew[0][8].id +", 458, 0));\n"+
    //            "new Array(new DiemTrenBanCo(" + MaTrannew[1][0].id + ", 0, 60), new DiemTrenBanCo(" + MaTrannew[1][1].id + ", 58, 60), new DiemTrenBanCo(" + MaTrannew[1][2].id + ", 114, 60), new DiemTrenBanCo(" + MaTrannew[1][3].id + ", 172, 60), new DiemTrenBanCo(" + MaTrannew[1][4].id + ", 229, 60), new DiemTrenBanCo(" + MaTrannew[1][5].id + ", 286, 60), new DiemTrenBanCo(" + MaTrannew[1][6].id + ", 342, 60), new DiemTrenBanCo(" + MaTrannew[1][7].id + ", 400, 60), new DiemTrenBanCo(" + MaTrannew[1][8].id +", 458, 60));\n"+
    //            "new Array(new DiemTrenBanCo(" + MaTrannew[2][0].id + ", 0, 117), new DiemTrenBanCo(" + MaTrannew[2][1].id + ", 58, 117), new DiemTrenBanCo(" + MaTrannew[2][2].id + ", 114, 117), new DiemTrenBanCo(" + MaTrannew[2][3].id + ", 172, 117), new DiemTrenBanCo(" + MaTrannew[2][4].id + ", 229, 117), new DiemTrenBanCo(" + MaTrannew[2][5].id + ", 286, 117), new DiemTrenBanCo(" + MaTrannew[2][6].id + ", 342, 117), new DiemTrenBanCo(" + MaTrannew[2][7].id + ", 400, 117), new DiemTrenBanCo(" + MaTrannew[2][8].id +", 458, 117));\n"+
    //            "new Array(new DiemTrenBanCo(" + MaTrannew[3][0].id + ", 0, 173), new DiemTrenBanCo(" + MaTrannew[3][1].id + ", 58, 173), new DiemTrenBanCo(" + MaTrannew[3][2].id + ", 114, 173), new DiemTrenBanCo(" + MaTrannew[3][3].id + ", 172, 173), new DiemTrenBanCo(" + MaTrannew[3][4].id + ", 229, 173), new DiemTrenBanCo(" + MaTrannew[3][5].id +", 286, 173), new DiemTrenBanCo(" + MaTrannew[3][6].id + ", 342, 173), new DiemTrenBanCo(" + MaTrannew[3][7].id + ", 400, 173), new DiemTrenBanCo(" + MaTrannew[3][8].id +", 458, 173));\n"+
    //            "new Array(new DiemTrenBanCo(" + MaTrannew[4][0].id + ", 0, 230), new DiemTrenBanCo(" + MaTrannew[4][1].id + ", 58, 230), new DiemTrenBanCo(" + MaTrannew[4][2].id + ", 114, 230), new DiemTrenBanCo(" + MaTrannew[4][3].id + ", 172, 230), new DiemTrenBanCo(" + MaTrannew[4][4].id + ", 229, 230), new DiemTrenBanCo(" + MaTrannew[4][5].id + ", 286, 230), new DiemTrenBanCo(" + MaTrannew[4][6].id + ", 342, 230), new DiemTrenBanCo(" + MaTrannew[4][7].id + ", 400, 230), new DiemTrenBanCo(" + MaTrannew[4][8].id +", 458, 230));\n"+
    //            "new Array(new DiemTrenBanCo(" + MaTrannew[5][0].id + ", 0, 288), new DiemTrenBanCo(" + MaTrannew[5][1].id + ", 58, 288), new DiemTrenBanCo(" + MaTrannew[5][2].id + ", 114, 288), new DiemTrenBanCo(" + MaTrannew[5][3].id + ", 172, 288), new DiemTrenBanCo(" + MaTrannew[5][4].id + ", 229, 288), new DiemTrenBanCo(" + MaTrannew[5][5].id + ", 286, 288), new DiemTrenBanCo(" + MaTrannew[5][6].id + ", 342, 288), new DiemTrenBanCo(" + MaTrannew[5][7].id + ", 400, 288), new DiemTrenBanCo(" + MaTrannew[5][8].id +", 458, 288));\n"+
    //            "new Array(new DiemTrenBanCo(" + MaTrannew[6][0].id + ", 0, 344), new DiemTrenBanCo(" + MaTrannew[6][1].id + ", 58, 344), new DiemTrenBanCo(" + MaTrannew[6][2].id + ", 114, 344), new DiemTrenBanCo(" + MaTrannew[6][3].id + ", 172, 344), new DiemTrenBanCo(" + MaTrannew[6][4].id + ", 229, 344), new DiemTrenBanCo(" + MaTrannew[6][5].id + ", 286, 344), new DiemTrenBanCo(" + MaTrannew[6][6].id + ", 342, 344), new DiemTrenBanCo(" + MaTrannew[6][7].id + ", 400, 344), new DiemTrenBanCo(" + MaTrannew[6][8].id +", 458, 344));\n"+
    //            "new Array(new DiemTrenBanCo(" + MaTrannew[7][0].id + ", 0, 403), new DiemTrenBanCo(" + MaTrannew[7][1].id + ", 58, 403), new DiemTrenBanCo(" + MaTrannew[7][2].id + ", 114, 403), new DiemTrenBanCo(" + MaTrannew[7][3].id + ", 172, 403), new DiemTrenBanCo(" + MaTrannew[7][4].id + ", 229, 403), new DiemTrenBanCo(" + MaTrannew[7][5].id + ", 286, 403), new DiemTrenBanCo(" + MaTrannew[7][6].id + ", 342, 403), new DiemTrenBanCo(" + MaTrannew[7][7].id + ", 400, 403), new DiemTrenBanCo(" + MaTrannew[7][8].id +", 458, 403));\n"+
    //            "new Array(new DiemTrenBanCo(" + MaTrannew[8][0].id + ", 0, 460), new DiemTrenBanCo(" + MaTrannew[8][1].id + ", 58, 460), new DiemTrenBanCo(" + MaTrannew[8][2].id + ", 114, 460), new DiemTrenBanCo(" + MaTrannew[8][3].id + ", 172, 460), new DiemTrenBanCo(" + MaTrannew[8][4].id + ", 229, 460), new DiemTrenBanCo(" + MaTrannew[8][5].id + ", 286, 460), new DiemTrenBanCo(" + MaTrannew[8][6].id + ", 342, 460), new DiemTrenBanCo(" + MaTrannew[8][7].id + ", 400, 460), new DiemTrenBanCo(" + MaTrannew[8][8].id +", 458, 460));\n"+
    //            "new Array(new DiemTrenBanCo(" + MaTrannew[9][0].id + ", 0, 517), new DiemTrenBanCo(" + MaTrannew[9][1].id + ", 58, 517), new DiemTrenBanCo(" + MaTrannew[9][2].id + ", 114, 517), new DiemTrenBanCo(" + MaTrannew[9][3].id + ", 172, 517), new DiemTrenBanCo(" + MaTrannew[9][4].id + ", 229, 517), new DiemTrenBanCo(" + MaTrannew[9][5].id + ", 286, 517), new DiemTrenBanCo(" + MaTrannew[9][6].id + ", 342, 517), new DiemTrenBanCo(" + MaTrannew[9][7].id + ", 400, 517), new DiemTrenBanCo(" + MaTrannew[9][8].id +", 458, 517));\n"

    DuLieu = MaTrannew[0][0].id + "\n" +
        MaTrannew[0][1].id + "\n" +
        MaTrannew[0][2].id + "\n" +
        MaTrannew[0][3].id + "\n" +
        MaTrannew[0][4].id + "\n" +
        MaTrannew[0][5].id + "\n" +
        MaTrannew[0][6].id + "\n" +
        MaTrannew[0][7].id + "\n" +
        MaTrannew[0][8].id + "\n" +
        MaTrannew[1][0].id + "\n" +
        MaTrannew[1][1].id + "\n" +
        MaTrannew[1][2].id + "\n" +
        MaTrannew[1][3].id + "\n" +
        MaTrannew[1][4].id + "\n" +
        MaTrannew[1][5].id + "\n" +
        MaTrannew[1][6].id + "\n" +
        MaTrannew[1][7].id + "\n" +
        MaTrannew[1][8].id + "\n" +
        MaTrannew[2][0].id + "\n" +
        MaTrannew[2][1].id + "\n" +
        MaTrannew[2][2].id + "\n" +
        MaTrannew[2][3].id + "\n" +
        MaTrannew[2][4].id + "\n" +
        MaTrannew[2][5].id + "\n" +
        MaTrannew[2][6].id + "\n" +
        MaTrannew[2][7].id + "\n" +
        MaTrannew[2][8].id + "\n" +
        MaTrannew[3][0].id + "\n" +
        MaTrannew[3][1].id + "\n" +
        MaTrannew[3][2].id + "\n" +
        MaTrannew[3][3].id + "\n" +
        MaTrannew[3][4].id + "\n" +
        MaTrannew[3][5].id + "\n" +
        MaTrannew[3][6].id + "\n" +
        MaTrannew[3][7].id + "\n" +
        MaTrannew[3][8].id + "\n" +
        MaTrannew[4][0].id + "\n" +
        MaTrannew[4][1].id + "\n" +
        MaTrannew[4][2].id + "\n" +
        MaTrannew[4][3].id + "\n" +
        MaTrannew[4][4].id + "\n" +
        MaTrannew[4][5].id + "\n" +
        MaTrannew[4][6].id + "\n" +
        MaTrannew[4][7].id + "\n" +
        MaTrannew[4][8].id + "\n" +
        MaTrannew[5][0].id + "\n" +
        MaTrannew[5][1].id + "\n" +
        MaTrannew[5][2].id + "\n" +
        MaTrannew[5][3].id + "\n" +
        MaTrannew[5][4].id + "\n" +
        MaTrannew[5][5].id + "\n" +
        MaTrannew[5][6].id + "\n" +
        MaTrannew[5][7].id + "\n" +
        MaTrannew[5][8].id + "\n" +
        MaTrannew[6][0].id + "\n" +
        MaTrannew[6][1].id + "\n" +
        MaTrannew[6][2].id + "\n" +
        MaTrannew[6][3].id + "\n" +
        MaTrannew[6][4].id + "\n" +
        MaTrannew[6][5].id + "\n" +
        MaTrannew[6][6].id + "\n" +
        MaTrannew[6][7].id + "\n" +
        MaTrannew[6][8].id + "\n" +
        MaTrannew[7][0].id + "\n" +
        MaTrannew[7][1].id + "\n" +
        MaTrannew[7][2].id + "\n" +
        MaTrannew[7][3].id + "\n" +
        MaTrannew[7][4].id + "\n" +
        MaTrannew[7][5].id + "\n" +
        MaTrannew[7][6].id + "\n" +
        MaTrannew[7][7].id + "\n" +
        MaTrannew[7][8].id + "\n" +
        MaTrannew[8][0].id + "\n" +
        MaTrannew[8][1].id + "\n" +
        MaTrannew[8][2].id + "\n" +
        MaTrannew[8][3].id + "\n" +
        MaTrannew[8][4].id + "\n" +
        MaTrannew[8][5].id + "\n" +
        MaTrannew[8][6].id + "\n" +
        MaTrannew[8][7].id + "\n" +
        MaTrannew[8][8].id + "\n" +
        MaTrannew[9][0].id + "\n" +
        MaTrannew[9][1].id + "\n" +
        MaTrannew[9][2].id + "\n" +
        MaTrannew[9][3].id + "\n" +
        MaTrannew[9][4].id + "\n" +
        MaTrannew[9][5].id + "\n" +
        MaTrannew[9][6].id + "\n" +
        MaTrannew[9][7].id + "\n" +
        MaTrannew[9][8].id
}
var MangLuuViTri;
function HienThiFileSave() {
    document.querySelector("#read-button").addEventListener('click', function () {
        let file = document.querySelector("#file-input").files[0];
        let reader = new FileReader();
        reader.addEventListener('load', function (e) {
            let text = e.target.result;
            var stri = text.toString();
            MangLuuViTri = stri.split("\n");

        });
        reader.readAsText(file);
    });
    //Xóa quân cờ
    //for (var i = 0; i < 32; i++) {
    //    var element = document.getElementById("quanco");
    //    element.parentNode.removeChild(element);
    //}

    HienFile();
    //var element = document.getElementById("quanco");
    //element.parentNode.removeChild(element);

}

//Undo, ReDo
let LuuTruCu = [];
let ViTruCu = [];
var mangHienThiNuocDi = new Array();
var mangLuuTenConCo = new Array();
function LayViTriCu(NuocDi, TenConCo) {

    LuuTruCu.push(TenConCo);
    var chuoi = "";
    mangHienThiNuocDi.push(NuocDi);
    mangLuuTenConCo.push(TenConCo);
    for (var i = 0; i < mangHienThiNuocDi.length; i++) {
        var p1 = mangHienThiNuocDi[i];
        chuoi = chuoi + "" + p1.top + " " + p1.left + " ";
    }

    document.querySelector("#file-contents").textContent = chuoi;
}

function Undo() {

    if (LoaiChange.loai == "Do")
        LoaiChange.loai = "Den";
    else
        LoaiChange.loai = "Do";
    var p1 = mangHienThiNuocDi.pop();;
    var top, left, ccht;
    ccht = LuuTruCu.pop();

    top = p1.top;
    left = p1.left;

    var topOf, leftOf;
    topOf = MaTran[top][left].top;
    leftOf = MaTran[top][left].left;

    MaTran[top][left].id = "";
    MaTran[xxx][yyy].id = ccht;

    $('.' + ccht + '').css({ "top": leftOf + 'px', "position": 'absolute' });
    $('.' + ccht + '').css({ "left": topOf + 'px', "position": 'absolute' });
}

