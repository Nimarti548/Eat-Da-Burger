document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const devourBurger = document.querySelectorAll(".devour-btn");

  if (devourBurger) {
    devourBurger.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");

        const eatenBurger = {
          devoured: true,
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(eatenBurger),
        }).then((response) => {
          if (response.ok) {
            console.log(`changed devoured to: ${devoured}`);
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }

  const addBurger = document.querySelector(".create-form");

  if (addBurger) {
    addBurger.addEventListener("submit", (e) => {
      e.preventDefault();

      const newBurger = {
        burger_name: document.getElementById("burger-input").value.trim(),
        devoured: false,
      };

      fetch("/api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById("burger-input").value = "";
        console.log("Added a new burger!");
        location.reload();
      });
    });
  }
});
