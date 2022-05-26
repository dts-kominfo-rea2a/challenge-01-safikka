// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
class User {
    constructor(
        name,
        gender,
        age,
        email,
        favcolor,
        havepet,
        education,
        favrest
    ){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.email = email;
        this.favoriteColor = favcolor;
        this.isHavePet = havepet;
        this.education = education;
        this.favoriteRestaurant = favrest;
    }
}

const firstUser = new User(
    "Monica",
    "Female",
    17,
    "monica@dingdong.com",
    ["Yellow", "Pink", "White", "Purple"],
    "Yes",
    [
        {
            name:"SD 01",
            city:"Jakarta",
            graduate:"2016"
        },
        {
            name:"SMP 02",
            city:"Jakarta",
            graduate:"2019"
        },
        {
            name:"SMA 03",
            city:"Tangerang",
        }
    ],
    ["Bento","Sushi","Pancake","Eggy","Tempura","Padang","Tteok"]
);
const secondUser = new User(
    "Wendy",
    "Male",
    23,
    "wendy@dingdong.com",
    ["Blue", "Black", "Grey"],
    "No",
    [
        {
            name:"SD 02",
            city:"Jakarta",
            graduate:"2010"
        },
        {
            name:"SMP 03",
            city:"Bogor",
            graduate:"2013"
        },
        {
            name:"SMA 01",
            city:"Surabaya",
            graduate: "2016"
        }
    ],
    ["Tempura","Bento","Sushi","Pancake","Padang","Katsu","Geprek","Eggy"]
);

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};