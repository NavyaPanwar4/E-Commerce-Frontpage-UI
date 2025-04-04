document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".search-icon").addEventListener("click", () => {
        const query = document.querySelector(".search-input").value.trim();
        if (query) {
            alert(`You searched for: "${query}"`);
        } else {
            alert("Please enter something to search.");
        }
    });

    document.querySelector(".nav-lang").addEventListener("change", (e) => {
        alert(`Language changed to: ${e.target.value}`);
    });

    document.querySelector(".nav-sign").addEventListener("click", () => {
        alert("Sign In page not implemented. This is a demo.");
    });

    document.querySelector(".nav-return").addEventListener("click", () => {
        alert("Returns & Orders clicked. This is a demo.");
    });

    document.querySelector(".nav-cart").addEventListener("click", () => {
        alert("Opening your cart... (Demo only)");
    });

    document.querySelector(".panel-all").addEventListener("click", () => {
        alert("All Categories Menu clicked (functionality not implemented).");
    });

    document.querySelectorAll(".panel-ops p").forEach(item => {
        item.addEventListener("click", () => {
            alert(`You clicked on: ${item.innerText}`);
        });
    });

    document.querySelectorAll(".box-content a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert(`Redirecting to: ${link.previousElementSibling.previousElementSibling.innerText}`);
        });
    });

    document.querySelectorAll("footer ul a").forEach(link => {
        link.addEventListener("click", () => {
            alert(`You clicked on footer link: ${link.innerText}`);
        });
    });

    document.querySelector(".foot-p1").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.querySelectorAll(".logo").forEach(logo => {
        logo.addEventListener("click", () => {
            alert("Redirecting to homepage (demo only).");
        });
    });

});
