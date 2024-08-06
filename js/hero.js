
document.getElementById("fetch_hero").addEventListener("click", function () {
    console.log("fetching hero...");
    const heroId = 1; // Set the ID of the hero you want to fetch
    const myRequest = new Request(
        "https://phpvisa.maxwelltraining.net/router.php?key=012345abcdefghijklmnopqrstuvwxyz&route=get-hero&id=" + heroId,
        {
            method: "GET",
        }
    );

    fetch(myRequest)
        .then((response) => response.json())
        .then((data) => {
            var hero = document.getElementById("hero");

            // Clear previous content
            hero.innerHTML = '';

            const heroData = data.hero;

            const heroDiv = document.createElement("div");
            heroDiv.className = "hero-item"; // Adding a CSS class
            heroDiv.innerHTML =
                "<img src='" + heroData.dp + "' class='hero-image' /><br>" +
                "<strong>First Name:</strong> " + heroData.first_name + "<br>" +
                "<strong>Last Name:</strong> " + heroData.last_name + "<br>" +
                "<strong>Email:</strong> " + heroData.email + "<br>" +
                "<strong>Tel:</strong> " + heroData.tel + "<br>" +
                "<strong>Profession:</strong> " + heroData.profession + "<br>" +
                "<strong>City:</strong> " + heroData.city + "<br>" +
                "<strong>Status:</strong> " + heroData.stat + "<br>" +
                "<strong>Address:</strong> " + heroData.address + "<br>";
            hero.appendChild(heroDiv);
        });
});X