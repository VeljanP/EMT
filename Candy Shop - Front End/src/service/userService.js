import Korisnik from "../model/Korisnik";

let mockKorisnik = {
    idKorisnik: 1,
    ime: " ",
    ulica: " ",
    broj: ' ',
    telefonskiBroj: " ",
    email: ' '
}

const userService = {
    getUser: (idKorisnik) => {
        return new Promise((resolve, reject) => {
            resolve({
                status: 200,
                data: mockKorisnik
            })
        }).then((result) => {
            return Object.assign(new Korisnik(), result.data);
        })
    },
};


export default userService;
