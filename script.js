const storageKey = "STORAGE_KEY";
const submitAction = document.getElementById("form-data-user");

// fungsi check storage
function checkForStorage() {
  return typeof Storage !== "undefined";
}

function putUserList(data) {
  if (checkForStorage()) {
    let userData = [];
    if (localStorage.getItem(storageKey) !== null) {
      userData = JSON.parse(localStorage.getItem(storageKey));
    }
    userData.unshift(data);
    if (userData.length > 5) {
      userData.pop();
    }
    localStorage.setItem(storageKey, JSON.stringify(userData));
  }
}

function getUserList() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(storageKey) || []);
  } else {
    return [];
  }
}

// fungsi untuk merender data user pada tabel html!

function renderUserList() {
  const userData = getUserList();
  const userList = document.querySelector("#user-list-detail");

  userList.innerHTML = "";
  for (let user of userData) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + user.nama + "</td>";
    row.innerHTML += "<td>" + user.umur + "</td>";
    row.innerHTML += "<td>" + user.domisili + "</td>";

    userList.appendChild(row);
  }
}

submitAction.addEventListener("submit", function (event) {
  const inputNama = document.getElementById("nama").value;
  const inputUmur = document.getElementById("umur").value;
  const inputDomisili = document.getElementById("domisili").value;
  event.preventDefault();
  const newUserData = {
    nama: inputNama,
    umur: inputUmur,
    domisili: inputDomisili,
  };

  putUserList(newUserData);
  renderUserList();
});

window.addEventListener("load", function () {
  if (checkForStorage) {
    if (localStorage.getItem(storageKey) !== null) {
      renderUserList();
    } else {
      alert("browser yang anda gunakan tidak mendukung web storage");
    }
  }
});

// const celcius = (temperature = 97) => {
//   const temperatureFahrenheit = (9 / 5) * temperature + 32;
//   console.log("Hasil konversi", temperatureFahrenheit);
// };
// celcius();

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     //varaibel awal, kondisi nilai awal
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// const n = 15;
// fizzBuzz(n);

// const nilaiKamu = (grade) => {
//   let result;

//   if (grade >= 70) {
//     return "";
//   }
// };
