export interface CPU {
    id:string;
    foto: string;
    merek: string;
    model: string;
    baseclk: string;
    boostclk: string;
    core: string;
    thread: string;
    harga:string;
    stok:string;

}
export interface RAM {
    id:string;
    foto: string;
    merek: string;
    model: string;
    speed: string;
    ukuran: string;
    harga: string;
    stok: string;
}

export interface Motherboard{
    id:string;
    foto:string;
    merek:string;
    model:string;
    chipset:string;
    processor:string;
    harga:string;
    stok:string;
}

export interface GPU{
    id:string;
    foto:string;
    merek:string;
    model:string;
    harga:string;
    stok:string;
}