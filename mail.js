document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const terms = document.getElementById("terms");

  if(terms && !terms.checked){
    alert("Please accept Terms & Conditions");
    return;
  }

  if(!document.getElementById("carSelect").value){
    alert("Please select a car");
    return;
  }

  const payment = document.querySelector('input[name="pay"]:checked')?.parentElement.innerText || "Not selected";

  const params = {
    subject: "New Booking Request",
    user_name: document.getElementById("name").value,
    user_phone: document.getElementById("phone").value,
    user_email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    car: document.getElementById("carSelect").value,
    pickup_date: document.getElementById("date").value,
    pickup_time: document.getElementById("time").value,
    payment: payment
  };

  emailjs.send("service_aktuiri", "template_dvn7xrt", params)
    .then(function(){
      alert("Booking Sent Successfully ✅");
      document.getElementById("bookingForm").reset();
    })
    .catch(function(error){
      alert("Failed ❌");
      console.log(error);
    });
});