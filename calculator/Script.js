function ShowDemo() {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let sum = a + b;
  document.getElementById("output").innerHTML =
    "<h2>Resulted value</h2>" + sum;
}