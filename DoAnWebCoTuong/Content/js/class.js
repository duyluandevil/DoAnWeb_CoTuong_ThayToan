class LoaiToanCuc {
    constructor(loai, id, red, black) {
    this.loai = loai;
    this.id = id;
    this.red = red;
    this.black = black;
    }
}

class ViTri
{
    constructor(left, top)
    {
        this.top = top;
        this.left = left;
    }
}

class DiemTrenBanCo {
    constructor(id, left, top) {
        this.id = id;
        this.left = left;
        this.top = top;
    }
}

class ConCo {
    constructor(id, loai, hinh, vitri) {
        this.id = id;
        this.loai = loai;
        this.hinh = hinh;
        this.vitri = vitri;
    }
}

class QuayXe{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
