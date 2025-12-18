document.querySelectorAll(".step-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const target = document.getElementById(this.dataset.target);
  
      document.querySelectorAll(".popup").forEach((p) => {
        if (p !== target) p.style.display = "none";
      });
  
      target.style.display =
        target.style.display === "block" ? "none" : "block";
    });
  });
  