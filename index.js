let form = document.getElementById("form1");
let form1 = document.getElementById("form2");
let checkbox = form1.elements.sameAsBilling;
let myelements = ["Fname","Lname","stradress","province","city","zip","phone",];
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    for (let i = 0; i < myelements.length; i++) {
      let test = myelements[i];
      form1.elements[`${test}1`].value = form.elements[`${test}`].value;
    }
  } else {
    for (let i = 0; i < myelements.length; i++) {
      form1.elements[myelements[i] + "1"].value = "";
    }
  }
});

function myfunc() {
  for (let i = 0; i < myelements.length; i++) {
    if (form.elements[myelements[i]].value.trim() == "") {
      form.elements[myelements[i]].setCustomValidity("this is mandatory!!!");
    } else {
      form.elements[myelements[i]].setCustomValidity("");
    }

    if (form1.elements[myelements[i] + "1"].value.trim() == "") {
      form1.elements[myelements[i] + "1"].setCustomValidity(
        "you need to input this"
      );
    } else {
      form1.elements[myelements[i] + "1"].setCustomValidity("");
    }
  }
}

document.getElementById("submit").addEventListener("click", () => {
  myfunc();
  alert("Submitted successfully! bye :)")
});
