//Khoi tao va hien quan co
var hubcontext = $.connection.game;
var name = prompt("enter name", "");
var group = prompt("groups", "");//api ten phong

$(document).ready(function () {
    HienQuanCo();
    console.log(hubcontext)
   
    $.connection.hub.start().done(function () {
            hubcontext.server.joinroom(group, name);
    });

    // thong bao join room
    hubcontext.client.addchatmessage = function (msg) {
        console.log(msg)
        // load api diu lieu phong
    } 

    hubcontext.client.getmove = function (clquanco, xn, yn) {
        $('.' + clquanco + '').css({ "top": yn + 'px', "position": 'absolute' });
        $('.' + clquanco + '').css({ "left": xn + 'px', "position": 'absolute' });
    }

});

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

//function thongbaomatran() {
//    for (let i = 0; i <= 9; i++) {
//        for (let j = 0; j <= 8; j++) {
//            alert(MaTran[i][j].id);
//        }
//    }
//}

function HienQuanCo() {

    for (let i = 0; i < mang.length; i++) {
        var p = mang[i].vitri;
        $(".test").append('<img src="' + mang[i].hinh + '" class="' + mang[i].id + ' ' + mang[i].loai + '"  alt="" style="position: absolute; left: ' + p.left + 'px; top: ' + p.top + 'px">');
        Click(mang[i].id, i);
        
    }
    TaoMaTran();
}

var ConCoHienTai, LoaiConCo, xToanCuc, yToanCuc, metquaToanCuc;
var NuocDiQuanCu;
function Click(id, i) {
    $('.' + id + '').click(function () {
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
        //let v = mang[i].vitri;
        //var vt = new ViTri(v.left, v.top);
        //if (loai == "Do" && (id == "tot_do1" || id == "tot_do2"
        //    || id == "tot_do3" || id == "tot_do4" || id == "tot_do5")) {
        //    if (y <= 4) {
        //        y = y - 1;
        //        x = x + 1;
        //    }
        //    else
        //        y = y - 1;
        //    alert(y);
        //}      
        //if (loai == "Den" && (id == "tot_den1" || id == "tot_den2"
        //    || id == "tot_den3" || id == "tot_den4" || id == "tot_den5")) {
        //    y = y + 1;
        //}
        //if (loai == "Den" && id == "tuong") {
        //    y = y + 1;
        //}
        //alert(MaTran[y][x].left)
        var NuocDi = new Array();
        NuocDi = TinhNuocDi(id, loai, x, y);
        
        //NuocDi.forEach(e => {
        //    $(".test").append('<img id="dot" class="dropimage" src="/Content/coduyluan/dot.png" style="position: absolute; margin-left:8px; margin-top: 6px;left: ' + MaTran[e.top][e.left].left + 'px; top: ' + MaTran[e.top][e.left].top + 'px"/>');
        //    //ClickDiChuyen(x, y);
        //    alert(e.top +"  "+ e.left);
        //    ClickDiChuyen(e.left, e.top);

        
        //});
        //$("#dot").clearQueue();
        for (let metqua = 0; metqua < NuocDiQuanCu; metqua++) {

            $("#dot").remove();
        }

        for (let metqua = 0; metqua < NuocDi.length; metqua++) {
            
            $(".test").append('<img id="dot" class="dropimage' + metqua + '" src="/Content/coduyluan/dot.png" style="position: absolute; margin-left:8px; margin-top: 6px;left: ' + MaTran[NuocDi[metqua].top][NuocDi[metqua].left].left + 'px; top: ' + MaTran[NuocDi[metqua].top][NuocDi[metqua].left].top + 'px"/>');
            $('.dropimage' + metqua + '').click(function () {
                ClickDiChuyen(NuocDi[metqua].left, NuocDi[metqua].top, metqua, NuocDi.length);
                //alert("cc");
                
            });
            NuocDiQuanCu = NuocDi.length;
            
        }
        //for (let a = 0; a <= e.length; a++) {

            //}
        //ClickDiChuyen(x, y-1);
        

    });
}

function TinhNuocDi(ten, loai, x, y) {

    var NuocDiDuoc = new Array();
    var NuocDiHienTai = new Array();

    
    // co do
    if (loai == "Do" && (ten == "tot_do1" || ten == "tot_do2"
        || ten == "tot_do3" || ten == "tot_do4" || ten == "tot_do5")) {
        if (y != 0) {
            NuocDiHienTai.push(
                new ViTri(x, y - 1)
            );
        }
        if (y <= 4) {
            if (x == 8) {
                NuocDiHienTai.push(
                    new ViTri(x - 1, y),
                );
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y),
                    new ViTri(x - 1, y),
                );
            }
        }
       
        return NuocDiHienTai;
        
    } 

    if (loai == "Do" && (ten == "xe_do1" || ten == "xe_do2")) {
        //di len
        if (y > 0) {
            NuocDiHienTai.push(new ViTri(x, y - 1));
            if (y > 1) {
                NuocDiHienTai.push(new ViTri(x, y - 2));
                if (y > 2) {
                    NuocDiHienTai.push(new ViTri(x, y - 3));
                    if (y > 3) {
                        NuocDiHienTai.push(new ViTri(x, y - 4));
                        if (y > 4) {
                            NuocDiHienTai.push(new ViTri(x, y - 5));
                            if (y > 5) {
                                NuocDiHienTai.push(new ViTri(x, y - 6));
                                if (y > 6) {
                                    NuocDiHienTai.push(new ViTri(x, y - 7));
                                    if (y > 7) {
                                        NuocDiHienTai.push(new ViTri(x, y - 8));
                                        if (y > 8) {
                                            NuocDiHienTai.push(new ViTri(x, y - 9));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di xuong
        if (y < 9) {
            NuocDiHienTai.push(new ViTri(x, y + 1));
            if (y < 8) {
                NuocDiHienTai.push(new ViTri(x, y + 2));
                if (y < 7) {
                    NuocDiHienTai.push(new ViTri(x, y + 3));
                    if (y < 6) {
                        NuocDiHienTai.push(new ViTri(x, y + 4));
                        if (y < 5) {
                            NuocDiHienTai.push(new ViTri(x, y + 5));
                            if (y < 4) {
                                NuocDiHienTai.push(new ViTri(x, y + 6));
                                if (y < 3) {
                                    NuocDiHienTai.push(new ViTri(x, y + 7));
                                    if (y < 2) {
                                        NuocDiHienTai.push(new ViTri(x, y + 8));
                                        if (y < 1) {
                                            NuocDiHienTai.push(new ViTri(x, y + 9));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di trai
        if (x > 0) {
            NuocDiHienTai.push(new ViTri(x - 1, y));
            if (x > 1) {
                NuocDiHienTai.push(new ViTri(x - 2, y));
                if (x > 2) {
                    NuocDiHienTai.push(new ViTri(x - 3, y));
                    if (x > 3) {
                        NuocDiHienTai.push(new ViTri(x - 4, y));
                        if (x > 4) {
                            NuocDiHienTai.push(new ViTri(x - 5, y));
                            if (x > 5) {
                                NuocDiHienTai.push(new ViTri(x - 6, y));
                                if (x > 6) {
                                    NuocDiHienTai.push(new ViTri(x - 7, y));
                                    if (x > 7) {
                                        NuocDiHienTai.push(new ViTri(x - 8, y));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di phai
        if (x < 8) {
            NuocDiHienTai.push(new ViTri(x + 1, y));
            if (x < 7) {
                NuocDiHienTai.push(new ViTri(x + 2, y));
                if (x < 6) {
                    NuocDiHienTai.push(new ViTri(x + 3, y));
                    if (x < 5) {
                        NuocDiHienTai.push(new ViTri(x + 4, y));
                        if (x < 4) {
                            NuocDiHienTai.push(new ViTri(x + 5, y));
                            if (x < 3) {
                                NuocDiHienTai.push(new ViTri(x + 6, y));
                                if (x < 2) {
                                    NuocDiHienTai.push(new ViTri(x + 7, y));
                                    if (x < 1) {
                                        NuocDiHienTai.push(new ViTri(x + 8, y));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "ma_do1" || ten == "ma_do2")) {
        if (x > 1 && x < 7 && y > 1 && y < 8) {
            NuocDiHienTai.push(
                //di len
                new ViTri(x - 1, y - 2),
                new ViTri(x + 1, y - 2),
                //di xuong
                new ViTri(x - 1, y + 2),
                new ViTri(x + 1, y + 2),
                //di trai
                new ViTri(x - 2, y - 1),
                new ViTri(x - 2, y + 1),
                //di phai
                new ViTri(x + 2, y - 1),
                new ViTri(x + 2, y + 1),
            );
        } else {
            //trai
            if (x==0) {
                if (y == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 1),
                        new ViTri(x + 1, y + 2),
                    );
                } else
                    if (y == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 2, y + 1),
                            new ViTri(x + 1, y + 2),
                        );
                    } else
                        if (y == 9) {
                            NuocDiHienTai.push(
                                new ViTri(x + 2, y - 1),
                                new ViTri(x + 1, y - 2),
                            );
                        } else
                            if (y == 8) {
                                NuocDiHienTai.push(
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                );
                            }
            }
            
            if (x == 1) {
                if (y == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 1),
                        new ViTri(x + 1, y + 2),
                        new ViTri(x - 1, y + 2)
                    );
                } else
                    if (y == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 2, y + 1),
                            new ViTri(x + 1, y + 2),
                            new ViTri(x - 1, y + 2)
                        );
                    } else
                        if (y == 9) {
                            NuocDiHienTai.push(
                                new ViTri(x + 2, y - 1),
                                new ViTri(x + 1, y - 2),
                                new ViTri(x - 1, y - 2)
                            );
                        } else
                            if (y == 8) {
                                NuocDiHienTai.push(
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2)

                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                );
                            }
            }
            //phai
            if (x == 8) {
                if (y == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 1),
                        new ViTri(x - 1, y + 2),
                    );
                } else
                    if (y == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 1),
                            new ViTri(x - 2, y + 1),
                            new ViTri(x - 1, y + 2),
                        );
                    } else
                        if (y == 9) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y - 1),
                                new ViTri(x - 1, y - 2),
                            );
                        } else
                            if (y == 8) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x - 1, y - 2),
                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                );
                            }
            }

            if (x == 7) {
                if (y == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 1),
                        new ViTri(x + 1, y + 2),
                        new ViTri(x - 1, y + 2)
                    );
                } else
                    if (y == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 1),
                            new ViTri(x - 2, y + 1),
                            new ViTri(x + 1, y + 2),
                            new ViTri(x - 1, y + 2)
                        );
                    } else
                        if (y == 9) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y - 1),
                                new ViTri(x + 1, y - 2),
                                new ViTri(x - 1, y - 2)
                            );
                        } else
                            if (y == 8) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2)

                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                );
                            }
            }
            //tren
            if (y == 0) {
                if (x == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 1),
                        new ViTri(x + 1, y + 2),
                    );
                } else
                    if (x == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 1),
                            new ViTri(x - 1, y + 2),
                            new ViTri(x + 1, y + 2),
                        );
                    } else
                        if (x == 8) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y + 1),
                                new ViTri(x - 1, y + 2),
                            );
                        } else
                            if (x == 7) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x + 1, y + 2),
                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x + 2, y + 1),
                                    new ViTri(x - 2, y + 1),
                                );
                            }
            }

            if (y == 1) {
                if (x == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 1),
                        new ViTri(x + 1, y + 2),
                        new ViTri(x - 1, y + 2)
                    );
                } else
                    if (x == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 2, y + 1),
                            new ViTri(x + 1, y + 2),
                            new ViTri(x - 1, y + 2)
                        );
                    } else
                        if (x == 8) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y + 1),
                                new ViTri(x - 1, y - 2),
                                new ViTri(x - 1, y + 2)
                            );
                        } else
                            if (x == 7) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2)

                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                );
                            }
            }
            //duoi
            if (y == 9) {
                if (x == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 1),
                        new ViTri(x + 1, y - 2),
                    );
                } else
                    if (x == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 1, y - 2),
                            new ViTri(x - 1, y - 2),
                        );
                    } else
                        if (x == 8) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y - 1),
                                new ViTri(x - 1, y - 2),
                            );
                        } else
                            if (x == 7) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 1, y - 2),
                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x - 2, y - 1),
                                );
                            }
            }

            if (y == 8) {
                if (x == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 1),
                        new ViTri(x + 1, y - 2),
                        new ViTri(x + 2, y + 1)
                    );
                } else
                    if (x == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 2, y + 1),
                            new ViTri(x + 1, y - 2),
                            new ViTri(x - 1, y - 2)
                        );
                    } else
                        if (x == 8) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y + 1),
                                new ViTri(x - 1, y - 2),
                                new ViTri(x - 2, y - 1)
                            );
                        } else
                            if (x == 7) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2)

                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                );
                            }
            }
        }       
        return NuocDiHienTai;

    }

    if (loai == "Do" && (ten == "phao_do1" || ten == "phao_do2")) {
        //di len
        if (y > 0) {
            NuocDiHienTai.push(new ViTri(x, y - 1));
            if (y > 1) {
                NuocDiHienTai.push(new ViTri(x, y - 2));
                if (y > 2) {
                    NuocDiHienTai.push(new ViTri(x, y - 3));
                    if (y > 3) {
                        NuocDiHienTai.push(new ViTri(x, y - 4));
                        if (y > 4) {
                            NuocDiHienTai.push(new ViTri(x, y - 5));
                            if (y > 5) {
                                NuocDiHienTai.push(new ViTri(x, y - 6));
                                if (y > 6) {
                                    NuocDiHienTai.push(new ViTri(x, y - 7));
                                    if (y > 7) {
                                        NuocDiHienTai.push(new ViTri(x, y - 8));
                                        if (y > 8) {
                                            NuocDiHienTai.push(new ViTri(x, y - 9));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di xuong
        if (y < 9) {
            NuocDiHienTai.push(new ViTri(x, y + 1));
            if (y < 8) {
                NuocDiHienTai.push(new ViTri(x, y + 2));
                if (y < 7) {
                    NuocDiHienTai.push(new ViTri(x, y + 3));
                    if (y < 6) {
                        NuocDiHienTai.push(new ViTri(x, y + 4));
                        if (y < 5) {
                            NuocDiHienTai.push(new ViTri(x, y + 5));
                            if (y < 4) {
                                NuocDiHienTai.push(new ViTri(x, y + 6));
                                if (y < 3) {
                                    NuocDiHienTai.push(new ViTri(x, y + 7));
                                    if (y < 2) {
                                        NuocDiHienTai.push(new ViTri(x, y + 8));
                                        if (y < 1) {
                                            NuocDiHienTai.push(new ViTri(x, y + 9));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di trai
        if (x > 0) {
            NuocDiHienTai.push(new ViTri(x - 1, y));
            if (x > 1) {
                NuocDiHienTai.push(new ViTri(x - 2, y));
                if (x > 2) {
                    NuocDiHienTai.push(new ViTri(x - 3, y));
                    if (x > 3) {
                        NuocDiHienTai.push(new ViTri(x - 4, y));
                        if (x > 4) {
                            NuocDiHienTai.push(new ViTri(x - 5, y));
                            if (x > 5) {
                                NuocDiHienTai.push(new ViTri(x - 6, y));
                                if (x > 6) {
                                    NuocDiHienTai.push(new ViTri(x - 7, y));
                                    if (x > 7) {
                                        NuocDiHienTai.push(new ViTri(x - 8, y));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di phai
        if (x < 8) {
            NuocDiHienTai.push(new ViTri(x + 1, y));
            if (x < 7) {
                NuocDiHienTai.push(new ViTri(x + 2, y));
                if (x < 6) {
                    NuocDiHienTai.push(new ViTri(x + 3, y));
                    if (x < 5) {
                        NuocDiHienTai.push(new ViTri(x + 4, y));
                        if (x < 4) {
                            NuocDiHienTai.push(new ViTri(x + 5, y));
                            if (x < 3) {
                                NuocDiHienTai.push(new ViTri(x + 6, y));
                                if (x < 2) {
                                    NuocDiHienTai.push(new ViTri(x + 7, y));
                                    if (x < 1) {
                                        NuocDiHienTai.push(new ViTri(x + 8, y));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Do" && (ten == "tuong_do")) {
        if (y != 7 ) {
            NuocDiHienTai.push(
                new ViTri(x, y - 1),
            );
        }
        if (y <= 9) {
            if (x == 5 ) {
                NuocDiHienTai.push(
                    new ViTri(x - 1, y),
                    new ViTri(x, y + 1),
                );
            }
            else if (x == 3) {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y),
                    new ViTri(x, y + 1),
                );
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y),
                    new ViTri(x - 1, y),
                    new ViTri(x, y + 1),
                );
            }
        }
        return NuocDiHienTai;
    } 

    if (loai == "Do" && (ten == "si_do1" || ten == "si_do2")) {
        if (y == 7) {
            if (x == 5) {
                NuocDiHienTai.push(
                    new ViTri(x - 1, y + 1),

                );
            }
            if (x == 3) {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y + 1),

                );
            }
        }
        if (y <= 9 && y != 7) {
            if (x == 5) {
                NuocDiHienTai.push(
                    new ViTri(x - 1, y - 1),

                );
            }

            if (x == 3) {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y - 1),

                );
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y + 1),
                    new ViTri(x - 1, y - 1),
                    new ViTri(x - 1, y + 1),
                    new ViTri(x + 1, y - 1),
                );
            }
        }
        return NuocDiHienTai;
    }

     if (loai == "Do" && (ten == "voi_do1" || ten == "voi_do2")) {

        if (y != 7 && y != 5) {
            NuocDiHienTai.push(
                new ViTri(x - 2, y - 2),
                new ViTri(x + 2, y - 2),
            );
        }
        if (y == 5) {
            NuocDiHienTai.push(
                new ViTri(x + 2, y + 2),
                new ViTri(x - 2, y + 2),
            );
        }
        if (y <= 9) {
            if (x == 0) {
                NuocDiHienTai.push(
                    new ViTri(x + 2, y - 2),
                    new ViTri(x + 2, y + 2),
                );
            }
            if (x < 8 && y != 5) {
                NuocDiHienTai.push(
                    new ViTri(x - 2, y - 2),
                    new ViTri(x + 2, y + 2),
                    new ViTri(x - 2, y + 2),
                    new ViTri(x + 2, y - 2),

                );
            }
            if (x == 8) {
                NuocDiHienTai.push(
                    new ViTri(x - 2, y - 2),
                    new ViTri(x - 2, y + 2),
                );
            }

        }
        return NuocDiHienTai;
    }

    //co den

    if (loai == "Den" && (ten == "tot_den1" || ten == "tot_den2"
        || ten == "tot_den3" || ten == "tot_den4" || ten == "tot_den5")) {
        if (y != 9) {
            NuocDiHienTai.push(
                new ViTri(x, y + 1)
            );
        }
        alert(MaTran[y][x].id);
        if (y >= 5) {
            if (x == 8) {
                NuocDiHienTai.push(
                    new ViTri(x - 1, y),
                );
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y),
                    new ViTri(x - 1, y),
                );
            }
        }

        return NuocDiHienTai;
    } 

    if (loai == "Den" && (ten == "tuong")) {
        if (y != 2) {
            NuocDiHienTai.push(
                new ViTri(x, y + 1),
            );
        }
        if (y >= 0) {
            if (x == 5) {
                NuocDiHienTai.push(
                    new ViTri(x - 1, y),
                    new ViTri(x, y - 1),
                );
            }
            else if (x == 3) {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y),
                    new ViTri(x, y - 1),
                );
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y),
                    new ViTri(x - 1, y),
                    new ViTri(x, y - 1),
                );
            }
        }
        return NuocDiHienTai;
    } 

    if (loai == "Den" && (ten == "si_den1" || ten == "si_den2")) {
        if (y == 2) {
            if (x == 5) {
                NuocDiHienTai.push(
                    new ViTri(x - 1, y - 1),
                );
            }
            if (x == 3) {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y - 1),
                );
            }
        }
        if (y >= 0 && y != 2) {
            if (x == 5) {
                NuocDiHienTai.push(
                    new ViTri(x - 1, y + 1),
                );
            }
            if (x == 3) {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y + 1),
                );
            }
            else {
                NuocDiHienTai.push(
                    new ViTri(x + 1, y + 1),
                    new ViTri(x - 1, y + 1),
                    new ViTri(x - 1, y - 1),
                    new ViTri(x + 1, y - 1),
                );
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "voi_den1" || ten == "voi_den2")) {
        if (y != 2 && y != 4) {
            NuocDiHienTai.push(
                new ViTri(x - 2, y + 2),
                new ViTri(x + 2, y + 2),
            );
        }
        if (y == 4) {
            NuocDiHienTai.push(
                new ViTri(x + 2, y - 2),
                new ViTri(x - 2, y - 2),
            );
        }
        if (y >= 0) {
            if (x == 0) {
                NuocDiHienTai.push(
                    new ViTri(x + 2, y - 2),
                    new ViTri(x + 2, y + 2),
                );
            }
            if (x < 8 && y != 4) {
                NuocDiHienTai.push(
                    new ViTri(x - 2, y - 2),
                    new ViTri(x + 2, y + 2),
                    new ViTri(x - 2, y + 2),
                    new ViTri(x + 2, y - 2),
                );
            }
            if (x == 8) {
                NuocDiHienTai.push(
                    new ViTri(x - 2, y - 2),
                    new ViTri(x - 2, y + 2),
                );
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "ma_den1" || ten == "ma_den2")) {
        if (x > 1 && x < 7 && y > 1 && y < 8) {
            NuocDiHienTai.push(
                //di len
                new ViTri(x - 1, y - 2),
                new ViTri(x + 1, y - 2),
                //di xuong
                new ViTri(x - 1, y + 2),
                new ViTri(x + 1, y + 2),
                //di trai
                new ViTri(x - 2, y - 1),
                new ViTri(x - 2, y + 1),
                //di phai
                new ViTri(x + 2, y - 1),
                new ViTri(x + 2, y + 1),
            );
        } else {
            //trai
            if (x == 0) {
                if (y == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 1),
                        new ViTri(x + 1, y + 2),
                    );
                } else
                    if (y == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 2, y + 1),
                            new ViTri(x + 1, y + 2),
                        );
                    } else
                        if (y == 9) {
                            NuocDiHienTai.push(
                                new ViTri(x + 2, y - 1),
                                new ViTri(x + 1, y - 2),
                            );
                        } else
                            if (y == 8) {
                                NuocDiHienTai.push(
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                );
                            }
            }

            if (x == 1) {
                if (y == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 1),
                        new ViTri(x + 1, y + 2),
                        new ViTri(x - 1, y + 2)
                    );
                } else
                    if (y == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 2, y + 1),
                            new ViTri(x + 1, y + 2),
                            new ViTri(x - 1, y + 2)
                        );
                    } else
                        if (y == 9) {
                            NuocDiHienTai.push(
                                new ViTri(x + 2, y - 1),
                                new ViTri(x + 1, y - 2),
                                new ViTri(x - 1, y - 2)
                            );
                        } else
                            if (y == 8) {
                                NuocDiHienTai.push(
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2)

                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                );
                            }
            }
            //phai
            if (x == 8) {
                if (y == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 1),
                        new ViTri(x - 1, y + 2),
                    );
                } else
                    if (y == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 1),
                            new ViTri(x - 2, y + 1),
                            new ViTri(x - 1, y + 2),
                        );
                    } else
                        if (y == 9) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y - 1),
                                new ViTri(x - 1, y - 2),
                            );
                        } else
                            if (y == 8) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x - 1, y - 2),
                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                );
                            }
            }

            if (x == 7) {
                if (y == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x - 2, y + 1),
                        new ViTri(x + 1, y + 2),
                        new ViTri(x - 1, y + 2)
                    );
                } else
                    if (y == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x - 2, y - 1),
                            new ViTri(x - 2, y + 1),
                            new ViTri(x + 1, y + 2),
                            new ViTri(x - 1, y + 2)
                        );
                    } else
                        if (y == 9) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y - 1),
                                new ViTri(x + 1, y - 2),
                                new ViTri(x - 1, y - 2)
                            );
                        } else
                            if (y == 8) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2)

                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                );
                            }
            }
            //tren
            if (y == 0) {
                if (x == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 1),
                        new ViTri(x + 1, y + 2),
                    );
                } else
                    if (x == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y + 1),
                            new ViTri(x - 1, y + 2),
                            new ViTri(x + 1, y + 2),
                        );
                    } else
                        if (x == 8) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y + 1),
                                new ViTri(x - 1, y + 2),
                            );
                        } else
                            if (x == 7) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x + 1, y + 2),
                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x + 2, y + 1),
                                    new ViTri(x - 2, y + 1),
                                );
                            }
            }

            if (y == 1) {
                if (x == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y + 1),
                        new ViTri(x + 1, y + 2),
                        new ViTri(x - 1, y + 2)
                    );
                } else
                    if (x == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 2, y + 1),
                            new ViTri(x + 1, y + 2),
                            new ViTri(x - 1, y + 2)
                        );
                    } else
                        if (x == 8) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y + 1),
                                new ViTri(x - 1, y - 2),
                                new ViTri(x - 1, y + 2)
                            );
                        } else
                            if (x == 7) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2)

                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y + 2),
                                    new ViTri(x - 1, y + 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                );
                            }
            }
            //duoi
            if (y == 9) {
                if (x == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 1),
                        new ViTri(x + 1, y - 2),
                    );
                } else
                    if (x == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 1, y - 2),
                            new ViTri(x - 1, y - 2),
                        );
                    } else
                        if (x == 8) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y - 1),
                                new ViTri(x - 1, y - 2),
                            );
                        } else
                            if (x == 7) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 1, y - 2),
                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x - 2, y - 1),
                                );
                            }
            }

            if (y == 8) {
                if (x == 0) {
                    NuocDiHienTai.push(
                        new ViTri(x + 2, y - 1),
                        new ViTri(x + 1, y - 2),
                        new ViTri(x + 2, y + 1)
                    );
                } else
                    if (x == 1) {
                        NuocDiHienTai.push(
                            new ViTri(x + 2, y - 1),
                            new ViTri(x + 2, y + 1),
                            new ViTri(x + 1, y - 2),
                            new ViTri(x - 1, y - 2)
                        );
                    } else
                        if (x == 8) {
                            NuocDiHienTai.push(
                                new ViTri(x - 2, y + 1),
                                new ViTri(x - 1, y - 2),
                                new ViTri(x - 2, y - 1)
                            );
                        } else
                            if (x == 7) {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2)

                                );
                            } else {
                                NuocDiHienTai.push(
                                    new ViTri(x - 2, y - 1),
                                    new ViTri(x - 2, y + 1),
                                    new ViTri(x + 1, y - 2),
                                    new ViTri(x - 1, y - 2),
                                    new ViTri(x + 2, y - 1),
                                    new ViTri(x + 2, y + 1),
                                );
                            }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "phao_den1" || ten == "phao_den2")) {
        //di len
        if (y > 0) {
            NuocDiHienTai.push(new ViTri(x, y - 1));
            if (y > 1) {
                NuocDiHienTai.push(new ViTri(x, y - 2));
                if (y > 2) {
                    NuocDiHienTai.push(new ViTri(x, y - 3));
                    if (y > 3) {
                        NuocDiHienTai.push(new ViTri(x, y - 4));
                        if (y > 4) {
                            NuocDiHienTai.push(new ViTri(x, y - 5));
                            if (y > 5) {
                                NuocDiHienTai.push(new ViTri(x, y - 6));
                                if (y > 6) {
                                    NuocDiHienTai.push(new ViTri(x, y - 7));
                                    if (y > 7) {
                                        NuocDiHienTai.push(new ViTri(x, y - 8));
                                        if (y > 8) {
                                            NuocDiHienTai.push(new ViTri(x, y - 9));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di xuong
        if (y < 9) {
            NuocDiHienTai.push(new ViTri(x, y + 1));
            if (y < 8) {
                NuocDiHienTai.push(new ViTri(x, y + 2));
                if (y < 7) {
                    NuocDiHienTai.push(new ViTri(x, y + 3));
                    if (y < 6) {
                        NuocDiHienTai.push(new ViTri(x, y + 4));
                        if (y < 5) {
                            NuocDiHienTai.push(new ViTri(x, y + 5));
                            if (y < 4) {
                                NuocDiHienTai.push(new ViTri(x, y + 6));
                                if (y < 3) {
                                    NuocDiHienTai.push(new ViTri(x, y + 7));
                                    if (y < 2) {
                                        NuocDiHienTai.push(new ViTri(x, y + 8));
                                        if (y < 1) {
                                            NuocDiHienTai.push(new ViTri(x, y + 9));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di trai
        if (x > 0) {
            NuocDiHienTai.push(new ViTri(x - 1, y));
            if (x > 1) {
                NuocDiHienTai.push(new ViTri(x - 2, y));
                if (x > 2) {
                    NuocDiHienTai.push(new ViTri(x - 3, y));
                    if (x > 3) {
                        NuocDiHienTai.push(new ViTri(x - 4, y));
                        if (x > 4) {
                            NuocDiHienTai.push(new ViTri(x - 5, y));
                            if (x > 5) {
                                NuocDiHienTai.push(new ViTri(x - 6, y));
                                if (x > 6) {
                                    NuocDiHienTai.push(new ViTri(x - 7, y));
                                    if (x > 7) {
                                        NuocDiHienTai.push(new ViTri(x - 8, y));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di phai
        if (x < 8) {
            NuocDiHienTai.push(new ViTri(x + 1, y));
            if (x < 7) {
                NuocDiHienTai.push(new ViTri(x + 2, y));
                if (x < 6) {
                    NuocDiHienTai.push(new ViTri(x + 3, y));
                    if (x < 5) {
                        NuocDiHienTai.push(new ViTri(x + 4, y));
                        if (x < 4) {
                            NuocDiHienTai.push(new ViTri(x + 5, y));
                            if (x < 3) {
                                NuocDiHienTai.push(new ViTri(x + 6, y));
                                if (x < 2) {
                                    NuocDiHienTai.push(new ViTri(x + 7, y));
                                    if (x < 1) {
                                        NuocDiHienTai.push(new ViTri(x + 8, y));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return NuocDiHienTai;
    }

    if (loai == "Den" && (ten == "xe_den1" || ten == "xe_den2")) {
        //di len
        if (y > 0) {
            NuocDiHienTai.push(new ViTri(x, y - 1));
            if (y > 1) {
                NuocDiHienTai.push(new ViTri(x, y - 2));
                if (y > 2) {
                    NuocDiHienTai.push(new ViTri(x, y - 3));
                    if (y > 3) {
                        NuocDiHienTai.push(new ViTri(x, y - 4));
                        if (y > 4) {
                            NuocDiHienTai.push(new ViTri(x, y - 5));
                            if (y > 5) {
                                NuocDiHienTai.push(new ViTri(x, y - 6));
                                if (y > 6) {
                                    NuocDiHienTai.push(new ViTri(x, y - 7));
                                    if (y > 7) {
                                        NuocDiHienTai.push(new ViTri(x, y - 8));
                                        if (y > 8) {
                                            NuocDiHienTai.push(new ViTri(x, y - 9));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di xuong
        if (y < 9) {
            NuocDiHienTai.push(new ViTri(x, y + 1));
            if (y < 8) {
                NuocDiHienTai.push(new ViTri(x, y + 2));
                if (y < 7) {
                    NuocDiHienTai.push(new ViTri(x, y + 3));
                    if (y < 6) {
                        NuocDiHienTai.push(new ViTri(x, y + 4));
                        if (y < 5) {
                            NuocDiHienTai.push(new ViTri(x, y + 5));
                            if (y < 4) {
                                NuocDiHienTai.push(new ViTri(x, y + 6));
                                if (y < 3) {
                                    NuocDiHienTai.push(new ViTri(x, y + 7));
                                    if (y < 2) {
                                        NuocDiHienTai.push(new ViTri(x, y + 8));
                                        if (y < 1) {
                                            NuocDiHienTai.push(new ViTri(x, y + 9));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di trai
        if (x > 0) {
            NuocDiHienTai.push(new ViTri(x - 1, y));
            if (x > 1) {
                NuocDiHienTai.push(new ViTri(x - 2, y));
                if (x > 2) {
                    NuocDiHienTai.push(new ViTri(x - 3, y));
                    if (x > 3) {
                        NuocDiHienTai.push(new ViTri(x - 4, y));
                        if (x > 4) {
                            NuocDiHienTai.push(new ViTri(x - 5, y));
                            if (x > 5) {
                                NuocDiHienTai.push(new ViTri(x - 6, y));
                                if (x > 6) {
                                    NuocDiHienTai.push(new ViTri(x - 7, y));
                                    if (x > 7) {
                                        NuocDiHienTai.push(new ViTri(x - 8, y));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //di phai
        if (x < 8) {
            NuocDiHienTai.push(new ViTri(x + 1, y));
            if (x < 7) {
                NuocDiHienTai.push(new ViTri(x + 2, y));
                if (x < 6) {
                    NuocDiHienTai.push(new ViTri(x + 3, y));
                    if (x < 5) {
                        NuocDiHienTai.push(new ViTri(x + 4, y));
                        if (x < 4) {
                            NuocDiHienTai.push(new ViTri(x + 5, y));
                            if (x < 3) {
                                NuocDiHienTai.push(new ViTri(x + 6, y));
                                if (x < 2) {
                                    NuocDiHienTai.push(new ViTri(x + 7, y));
                                    if (x < 1) {
                                        NuocDiHienTai.push(new ViTri(x + 8, y));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return NuocDiHienTai;
    }
}      
   

function ClickDiChuyen(x,y, mq, DoDai) {
    $('.dropimage'+ mq + '').click(function () {
        
        //alert("Ngu dốt");
        //alert(ConCoHienTai);
  
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
        for (let i = 0; i <= 9; i++) {
            for (let j = 0; j <= 8; j++) {
                if (MaTran[i][j].id == ConCoHienTai) {
                    MaTran[i][j].id = "";
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
                        $('.' + mang[i].id + '').remove();
                        MaTran[y][x].id = ConCoHienTai;
                    }
                    else {

                    }
                }

            }
        } else MaTran[y][x].id = ConCoHienTai;

        //else {
        //    MaTran[y][x].id = ConCoHienTai;
        //}

        //alert(x + " " + y);
        //MaTran[y][x].id = ConCoHienTai;
        //alert(MaTran[xCo][yCo].id);
        

    });
}

