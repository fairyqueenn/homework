function Bus (trayek, uang, penumpang, supir) {
    this.trayek=trayek
    this.uang=uang
    this.penumpang=penumpang
    this.supir=supir
    this.penumpangNaik=function (namaPenumpang) {
        // console.log (namaPenumpang);    
        this.penumpang.push(namaPenumpang)
        return this.penumpang    
        // return namaPenumpang
    }
    this.penumpangTurun=function (namaPenumpang,bayar) {
        // console.log("penumpangTurun");
        for (let index = 0; index < penumpang.length; index++) {
             if (this.penumpang[index]== namaPenumpang){
               this.penumpang.splice(index,1,null) 
               this.uang += bayar 
               return this.penumpang
             }
             
            
        }
        // this.penumpang.splice()
    }    
}

bus1 = new Bus (["medan", "bekasi"],0, [], "Yoga");

console.log (bus1);
