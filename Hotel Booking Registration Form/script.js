let room_rate = 0;
let amenities_rate = 0;
let days = 0;
let persons = 0;
let Advance_payment = 0;
let total_cost = 0;
let balance_cost=0;
let Date1='';
let Customer_name='';
let room_type='';
let amenities_type='';


const No_of_days = (value) => {
  days = value;
}

const customer_name=(name1)=>{
  Customer_name=name1;
}
const check_date = (date) => {
  Date1 = date;
}
const No_of_persons = (person) => {
  persons = person;
}
const advance_payment = (amount) => {
  Advance_payment = amount;
}
let selectRoom = (room) => {
  room_type=room;
  if(room === 'delux'){
    room_rate = 2500;
  }
  else if(room === 'suite'){
    room_rate = 4000;
  }
}
let selectAmenities = (amenities) => {
  amenities_type=amenities;
  if(amenities === 'ac'){
    amenities_rate = 1000;
  }
  else if(amenities === 'locker'){
    amenities_rate = 300;
  }
}
const show = () => {
  let room_cost = 0;
  let amenities_cost = 0;
  
  if(persons > 2){
    extra_person_cost = (persons - 2) * 1000;
    const newRate = days * extra_person_cost;
    room_cost = room_rate * days;
    amenities_cost = amenities_rate * days;
    total_cost = ((room_cost + amenities_cost) + newRate);
    balance_cost = ((room_cost + amenities_cost) + newRate)-Advance_payment;

  }
  else {
    room_cost = room_rate * days;
    amenities_cost = amenities_rate * days;
    total_cost = room_cost + amenities_cost
    balance_cost = ((room_cost + amenities_cost) - Advance_payment);
  }

  var total = document.getElementById("total_amount");
  total.innerHTML = parseInt(total.innerHTML , 10) + total_cost;

  
  var balance2 = document.getElementById("balance_amount");
  balance2.innerHTML = parseInt(balance2.innerHTML , 10) + balance_cost;

  
  document.getElementById('myform').reset();
  

  // creating new data of each user after the form submition !!
  const div = document.createElement("div");
  div.className = "detail";
  div.innerHTML = `<div class="details">
      <div class="Information">
        <label>Customer name:</label>
        <span>${Customer_name}</span>
      </div>
      <div class="Information">
        <label>Check-in Date:</label>
        <span>${Date1}</span>
      </div>
      <div class="Information">
        <label>Total no of days:</label>
        <span>${days}</span>
      </div>
      <div class="Information">
        <label>Total no of persons:</label>
        <span>${persons}</span>
      </div>
      <div class="Information">
        <label>Room types:</label>
        <span>${room_type}</span>
      </div>
      <div class="Information">
        <label>Amenities types:</label>
        <span>${amenities_type}</span>
      </div>
      <div class="Information">
        <label>Advance Payment:</label>
        <span>${Advance_payment}</span>
      </div>
      <div class="Information">
        <label>Total Amount:</label>
        <span>${total_cost}</span>
      </div>
      <div class="Information">
        <label>Balance Amount:</label>
        <span>${balance_cost}</span>
      </div>
    </div>`;
document.getElementById("Info-container").appendChild(div);
  setTimeout(() => {
    reset_amount();
  },1000);

}
const reset_amount = () => {
  var balance2=document.getElementById("balance_amount")
  var total = document.getElementById("total_amount");
  total.innerHTML = "0";
  balance2.innerHTML="0";

}


 

 
