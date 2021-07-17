//Khoi tao va hien quan co
$(document).ready(function () {
    HienQuanCo();
});

//den
const xe_den1 = new ConCo("xe_den1", "Den", "/Content/coduyluan/Xe_den.png", new ViTri(0, 0));
const ma_den1 = new ConCo("ma_den1", "Den", "/Content/coduyluan/Ma_den.png", new ViTri(58, 0));
const voi_den1 = new ConCo("voi_den1", "Den", "/Content/coduyluan/Voi_den.png", new ViTri(114, 0));
const si_den1 = new ConCo("si_den1", "Den", "/Content/coduyluan/Si_den.png", new ViTri(172, 0));
const tuong = new ConCo("tuong", "Den", "/Content/coduyluan/Tuong_den.png", new ViTri(229, 0));
const si_den2 = new ConCo("si_den1", "Den", "/Content/coduyluan/Si_den.png", new ViTri(286, 0));
const voi_den2 = new ConCo("voi_den1", "Den", "/Content/coduyluan/Voi_den.png", new ViTri(342, 0));
const ma_den2 = new ConCo("ma_den1", "Den", "/Content/coduyluan/Ma_den.png", new ViTri(400, 0));
const xe_den2 = new ConCo("xe_den1", "Den", "/Content/coduyluan/Xe_den.png", new ViTri(458, 0));
const phao_den1 = new ConCo("phao_den1", "Den", "/Content/coduyluan/Phao_den.png", new ViTri(58, 117));
const phao_den2 = new ConCo("phao_den1", "Den", "/Content/coduyluan/Phao_den.png", new ViTri(400, 117));
const tot_den1 = new ConCo("tot_den", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(0, 173));
const tot_den2 = new ConCo("tot_den", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(114, 173));
const tot_den3 = new ConCo("tot_den", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(229, 173));
const tot_den4 = new ConCo("tot_den", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(342, 173));
const tot_den5 = new ConCo("tot_den", "Den", "/Content/coduyluan/Tot_den.png", new ViTri(458, 173));


//do
const tot_do1 = new ConCo("tot_do", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(0, 344));
const tot_do2 = new ConCo("tot_do", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(114, 344));
const tot_do3 = new ConCo("tot_do", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(229, 344));
const tot_do4 = new ConCo("tot_do", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(342, 344));
const tot_do5 = new ConCo("tot_do", "Do", "/Content/coduyluan/Tot_do.png", new ViTri(458, 344));
const phao_do1 = new ConCo("phao_do1", "Do", "/Content/coduyluan/Phao_do.png", new ViTri(58, 403));
const phao_do2 = new ConCo("phao_do1", "Do", "/Content/coduyluan/Phao_do.png", new ViTri(400, 403));
const xe_do1 = new ConCo("xe_do1", "Do", "/Content/coduyluan/Xe_do.png", new ViTri(0, 517));
const ma_do1 = new ConCo("ma_do1", "Do", "/Content/coduyluan/Ma_do.png", new ViTri(58, 517));
const voi_do1 = new ConCo("voi_do1", "Do", "/Content/coduyluan/Voi_do.png", new ViTri(114, 517));
const si_do1 = new ConCo("si_do1", "Do", "/Content/coduyluan/Si_do.png", new ViTri(172, 517));
const tuong_do = new ConCo("tuong_do", "Do", "/Content/coduyluan/Tuong_do.png", new ViTri(229, 517));
const si_do2 = new ConCo("si_do1", "Do", "/Content/coduyluan/Si_do.png", new ViTri(286, 517));
const voi_do2 = new ConCo("voi_do1", "Do", "/Content/coduyluan/Voi_do.png", new ViTri(342, 517));
const ma_do2 = new ConCo("ma_do1", "Do", "/Content/coduyluan/Ma_do.png", new ViTri(400, 517));
const xe_do2 = new ConCo("xe_do1", "Do", "/Content/coduyluan/Xe_do.png", new ViTri(458, 517));

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

function thongbaomatran() {
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 8; j++) {
            alert(MaTran[i][j].id);
        }
    }
}

function HienQuanCo() {
    
    for (let i = 0; i < mang.length; i++) {
        var p = mang[i].vitri;
        $(".test").append('<img src="' + mang[i].hinh + '" class="' + mang[i].id + ' ' + mang[i].loai + '"  alt="" style="position: absolute; left: ' + p.left + 'px; top: ' + p.top + 'px">');

    }
    TaoMaTran();
    //var id = MaTran[0][0].
    alert(MaTran[0][0].id);
}
