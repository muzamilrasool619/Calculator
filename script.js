
let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {

    if (e.target.innerHTML == "=") {
      try {
        let result = eval(string);

        if (result === undefined || result === null || Number.isNaN(result)) {
          document.querySelector("input").value = "Error";
          string = "";
        } else {
          string = result.toString();
          document.querySelector("input").value = string;
        }

      } catch (error) {
        document.querySelector("input").value = "Error";
        string = "";
      }

    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;

    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      document.querySelector("input").value = string;

    } else {
      string += e.target.innerHTML;
      document.querySelector("input").value = string;
    }

  });
});
