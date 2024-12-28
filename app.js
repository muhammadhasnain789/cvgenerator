let button = () => {
  let Name = document.getElementById("Name").value.trim();
  let father = document.getElementById("fathername").value.trim();
  let email = document.getElementById("email").value.trim();
  let number = document.getElementById("number").value.trim();
  let skills = document.getElementById("skills").value.trim();

  if (!Name || !father || !email || !number || !skills) {
      alert("Please fill in all the fields.");
      return;
  }

  document.getElementById("name").innerHTML = `<strong> Name: ${Name} </strong>`;
  document.getElementById("fname").innerHTML = `<strong> Father's Name: ${father}</strong>`;
  document.getElementById("email").innerHTML = `<strong> Email: ${email} </strong>`;
  document.getElementById("numbe").innerHTML = `<strong> Phone Number: ${number} </strong>`;
  document.getElementById("skill").innerHTML = `<strong> Skills: ${skills} </strong>`;
};
