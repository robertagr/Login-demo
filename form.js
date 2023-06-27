document.addEventListener("DOMContentLoaded", () => {
  console.log("Page has loaded!");

  const form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const submitForm = async () => {
      const response = await fetch("/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      console.log(responseData);
    };
    submitForm();
  });
});
