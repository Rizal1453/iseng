// let text ="aku makan seblak"
// let pisah = text.split("")

// let coba=pisah.sort().slice(2,16)
// //console.log(coba);
//  let gabung=coba.join("")
// //console.log(gabung);

// let hurufbanyak = {}
// for (let i = 0; i < gabung.length; i++) {
//     if (hurufbanyak[gabung[i]] == undefined) {
//         hurufbanyak[gabung[i]] = 1
//     } else {
//         hurufbanyak[gabung[i]] += 1
//     }
// }
// console.log(hurufbanyak);
// let filter = Object.keys(hurufbanyak).filter((item) => {
//     return hurufbanyak[item] > 1
// }
// )
// console.log(filter);

// let harga = 75000
// function pijarfood(harga){
//     let diskon = 0.5
// if (harga >= 50000 && harga<=100000) {
//     console.log(harga * diskon);
// } else if (harga>100000){
//     console.log(harga - 50000);
// }

// }

// function pijarfood2(){
//     let diskon=0.6
//     if(harga>=25000 && harga<=50000){
//         console.log(harga*diskon);
//     }else if(harga>50000){
//         console.log(harga-30000);
//     }
// }

// let tambah=3000
// let jauh = 6;
// let biaya = 5000;
// function jarak(){
//     if(jauh<=2){
//         console.log(biaya);
//     }else if(jauh>2){
//         console.log(biaya+(jauh-2)*3000);
//     }

// }
// function pajak(){
//     if (pajak=true){
//         console.log(harga*5/100);
//     }else{
//         console.log(false);
//     }
// }

// const pijarFood=(harga, voucher, jarak, pajak) => {
//   let harga = 75000
// if(voucher=pijarFood5(harga)){
//       let diskon = 0.5
//   if (harga >= 50000 && harga<=100000) {
//       return harga * diskon;
//   } else if (harga>100000){
//       return harga - 50000;
//   }
//   return harga
//   }

//     else if(voucher=diTraktirPijar){
//       let diskon=0.6
//       if(harga>=25000 && harga<=50000){
//           return harga*diskon;
//       }else if(harga>50000){
//           return harga-30000;
//       }
//   }
//   console.log(pijarfood5);

//   jarak==jauh
//   let biaya = 5000;
//   const jarak=()=>{
//       if(jauh<=2){
//           return biaya;
//       }else if(jauh>2){
//           return biaya+(jauh-2)*3000;
//       }
//   }
//   const pajak=()=>{
//       if (pajak=true){
//           return harga*5/100;
//       }else{
//           return false;
//       }
//   }
// // // }







// const reqApi = async () => {
//   try {
//     const test = await fetch("https://jsonplaceholder.typicode.com/users");
//     const pakejson = await test.json()

//     pakejson.map(element => {
//         console.log(element.name);
//     });

//   } catch (error) {
//     console.log(error, "gadapet doong");
//   }
// };
// reqApi();

// const getMonth = (callback) => {
//   setTimeout(() => {
//     let error = false;
//     let month = [
//       "january",
//       "february",
//       "maret",
//       "april",
//       "mei",
//       "juni",
//       "juli",
//       "agustus",
//       "september",
//       "oktober",
//       "november",
//       "desember",
//     ];
//     if (!error) {
//       callback( null,month);
//     } else {
//       callback(new Error("sorry data Not Found"), []);
//     }
//   }, 4000);
// };

// function dapet() {
//   try {  
//     getMonth((error, result) => {
//       if (error) {
//         console.log(error);
//       } else {
//         result.map((item) => {
//           console.log(item);
//         });
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// dapet()
