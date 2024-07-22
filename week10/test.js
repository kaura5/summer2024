let guests = [];
let nameElement = document.querySelectorAll("div._name_em4437");
let subInfoElement = document.querySelectorAll("div._sub-info_em4437");
for (let i = 0; i < nameElement.length; i++) {
  let customerName = nameElement[i].textContent.trim();
  let subInfo = subInfoElement[i].textContent.trim();
  let [phoneNumber, email] = subInfo.split(" • ");
  guests.push({
    customerName: customerName,
    phoneNumber: phoneNumber,
    email: email,
  });
}
console.log("GuestList", guests);

