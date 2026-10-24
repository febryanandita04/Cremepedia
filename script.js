// ============================================
// CREMEPEDIA — THE ART OF PASTRIES
// ============================================

const desserts = [
    {
        name: "Croissant",
        country: "France",
        region: "Europe",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85",
        color: "#f3dfbd",
        summary: "A buttery, flaky pastry with delicate layers and a golden crust.",
        taste: "Rich, buttery, lightly toasted, and just a little nutty.",
        texture: "Crisp and flaky outside, airy and tender inside.",
        story: "The croissant is strongly associated with French baking, although its story is often connected to the Austrian kipferl. French bakers developed the buttery, layered pastry that became famous around the world.",
        nameStory: "Croissant means crescent in French, referring to its curved shape.",
        fact: "Its signature layers come from folding butter into dough repeatedly. This technique is called lamination."
    },
    {
        name: "Tiramisu",
        country: "Italy",
        region: "Europe",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85",
        color: "#e8d3c3",
        summary: "A delicate dessert layered with coffee-soaked biscuits, cream, and cocoa.",
        taste: "Coffee-forward, creamy, sweet, with a gentle cocoa bitterness.",
        texture: "Soft biscuits meet cool, velvety mascarpone cream.",
        story: "Tiramisu became popular in Italy during the twentieth century. Several places in the Veneto region are associated with its creation, so its exact origin remains debated.",
        nameStory: "The Italian name is commonly translated as 'pick me up'.",
        fact: "Traditional recipes often use ladyfinger biscuits, mascarpone, eggs, sugar, coffee, and cocoa."
    },
    {
        name: "Pastel de Nata",
        country: "Portugal",
        region: "Europe",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1000&q=85",
        color: "#f4d9a9",
        summary: "A little custard tart tucked inside crisp, flaky pastry.",
        taste: "Sweet egg custard with warm vanilla and caramelised notes.",
        texture: "A crisp, flaky shell with a silky centre and browned top.",
        story: "Pastéis de nata are closely connected to Lisbon, Portugal. A famous version is associated with the Belém neighbourhood and the pastry tradition around Jerónimos Monastery.",
        nameStory: "Pastel means pastry or cake, while nata refers to cream.",
        fact: "The browned spots on top develop when the custard is baked at high heat."
    },
    {
        name: "Mochi",
        country: "Japan",
        region: "Asia",
        image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&w=1000&q=85",
        color: "#dce5cd",
        summary: "A soft, chewy rice cake with a special place in Japanese food culture.",
        taste: "Mild and gently sweet; filled versions may contain red bean or strawberry.",
        texture: "Soft, stretchy, and satisfyingly chewy.",
        story: "Mochi is made from glutinous rice and has long been part of Japanese celebrations and seasonal traditions. It appears in many forms, from plain rice cakes to sweets filled with sweetened bean paste.",
        nameStory: "Mochi is the Japanese name for this pounded rice cake.",
        fact: "Despite the name, glutinous rice does not contain gluten. Glutinous describes its sticky texture."
    },
    {
        name: "Mooncake",
        country: "China",
        region: "Asia",
        image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&w=1000&q=85",
        color: "#eed5b5",
        summary: "A round festival pastry traditionally shared during the Mid-Autumn Festival.",
        taste: "Rich and sweet, often filled with lotus seed paste or red bean.",
        texture: "Dense and tender, with a patterned crust around the filling.",
        story: "Mooncakes are closely associated with China's Mid-Autumn Festival, a time for family gatherings and moon viewing. Their styles vary across regions, with different crusts, shapes, and fillings.",
        nameStory: "The name connects the round pastry with the moon, a central symbol of the festival.",
        fact: "Many mooncakes have decorative patterns pressed into their tops."
    },
    {
        name: "Cheesecake",
        country: "Greece / United States",
        region: "Europe",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1000&q=85",
        color: "#f0dfc9",
        summary: "A creamy cake made with cheese, with styles found around the world.",
        taste: "Tangy, creamy, and sweet, often balanced by fruit or a biscuit base.",
        texture: "Dense and silky, light and airy, or soft and custardy.",
        story: "Cheese-based cakes have ancient roots, including in Greece. Modern cheesecake has many regional versions, and New York-style cheesecake is especially known for its rich cream-cheese filling.",
        nameStory: "Its name comes from cheese, the ingredient that gives the cake its signature character.",
        fact: "Some cheesecakes are baked, while others set in the refrigerator without baking."
    },
    {
        name: "Doughnut",
        country: "United States / Europe",
        region: "Americas",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1000&q=85",
        color: "#f3d7d4",
        summary: "A sweet fried dough treat that can be ring-shaped or filled.",
        taste: "Sweet and bready, with flavours ranging from vanilla glaze to chocolate.",
        texture: "Usually soft and fluffy, sometimes with a slightly crisp outside.",
        story: "Fried dough treats have a long history in many cultures. The ring-shaped doughnut became especially iconic in the United States, while filled and regional varieties are enjoyed worldwide.",
        nameStory: "The word combines dough with nut, though the exact history of the name is debated.",
        fact: "Not every doughnut has a hole. Many varieties are filled with jam, custard, or cream."
    },
    {
        name: "Strawberry Shortcake",
        country: "Japan / United States",
        region: "Asia",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
        color: "#f4dfe0",
        summary: "A celebratory cake layered with strawberries and whipped cream.",
        taste: "Lightly sweet, milky, and fresh with bright strawberry flavour.",
        texture: "Soft sponge cake, airy cream, and juicy berries.",
        story: "Shortcake traditions exist in several places. Japanese strawberry shortcake developed into a light sponge layered with whipped cream and strawberries.",
        nameStory: "Shortcake historically referred to a rich or crumbly cake-like pastry.",
        fact: "In Japan, strawberry shortcake is a popular choice for Christmas and birthdays."
    },
    {
        name: "Sacher-Torte",
        country: "Austria",
        region: "Europe",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
        color: "#e8d1c6",
        summary: "A famous chocolate cake traditionally paired with apricot jam.",
        taste: "Deep chocolate with a gentle fruity tang from apricot jam.",
        texture: "Firm chocolate cake covered with a smooth chocolate glaze.",
        story: "Sacher-Torte is associated with Vienna, Austria. It is linked to Franz Sacher, who is said to have created an early version in 1832. The cake became part of Viennese café culture.",
        nameStory: "The name comes from the Sacher family, associated with the cake's history.",
        fact: "It is traditionally served with unsweetened whipped cream to balance the chocolate."
    }
];

// ============================================
// ELEMENTS
// ============================================

const dessertGrid = document.getElementById("dessertGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const filterButtons = document.querySelectorAll(".filter");
const dessertDialog = document.getElementById("dessertDialog");
const dialogContent = document.getElementById("dialogContent");
const closeDialog = document.getElementById("closeDialog");

let activeRegion = "All";

// ============================================
// IMAGE HELPER
// If an image fails, show a graceful fallback.
// ============================================

function makeImage(imageUrl, name, className) {
    const safeName = name.replace(/"/g, "&quot;");

    return `
        <img
            class="${className}"
            src="${imageUrl}"
            alt="${safeName}"
            loading="lazy"
            onerror="
                this.style.display='none';
                this.parentElement.classList.add('image-failed');
            "
        >
        <span class="image-fallback" aria-hidden="true">
            ${safeName}
        </span>
    `;
}

// ============================================
// DESSERT CARDS
// ============================================

function createCard(dessert, index) {
    return `
        <article class="dessert-card">
            <div
                class="card-art"
                style="--dessert-color: ${dessert.color}"
                data-fallback="${dessert.name}"
            >
                ${makeImage(dessert.image, dessert.name, "dessert-photo")}

                <span class="country-tag">
                    ${dessert.country}
                </span>

                <span class="photo-caption">
                    A taste of ${dessert.country}
                </span>
            </div>

            <div class="card-body">
                <p class="card-origin">
                    ${dessert.country.toUpperCase()}
                </p>

                <h3>${dessert.name}</h3>

                <p class="card-description">
                    ${dessert.summary}
                </p>

                <button
                    class="read-more"
                    type="button"
                    data-index="${index}"
                >
                    Discover its story <span aria-hidden="true">↗</span>
                </button>
            </div>
        </article>
    `;
}

// ============================================
// RENDER & FILTER
// ============================================

function renderDesserts() {
    if (!dessertGrid) return;

    const query = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const matchingDesserts = desserts
        .map((dessert, index) => ({ dessert, index }))
        .filter(({ dessert }) => {
            const searchableText = [
                dessert.name,
                dessert.country,
                dessert.region,
                dessert.summary,
                dessert.taste,
                dessert.texture,
                dessert.story,
                dessert.nameStory,
                dessert.fact
            ].join(" ").toLowerCase();

            const matchesSearch = searchableText.includes(query);
            const matchesRegion =
                activeRegion === "All" ||
                dessert.region === activeRegion;

            return matchesSearch && matchesRegion;
        });

    dessertGrid.innerHTML = matchingDesserts
        .map(({ dessert, index }) => createCard(dessert, index))
        .join("");

    if (noResults) {
        noResults.hidden = matchingDesserts.length > 0;
    }
}

// ============================================
// DETAIL DIALOG
// ============================================

function openDessert(index) {
    const dessert = desserts[index];

    if (!dessert || !dialogContent || !dessertDialog) return;

    dialogContent.innerHTML = `
        <div
            class="dialog-art"
            style="--dessert-color: ${dessert.color}"
            data-fallback="${dessert.name}"
        >
            ${makeImage(dessert.image, dessert.name, "dialog-photo")}
        </div>

        <div class="dialog-copy">
            <p class="eyebrow">A SWEET LITTLE DISCOVERY</p>

            <h2>${dessert.name}</h2>

            <p class="dialog-country">
                ${dessert.country} · ${dessert.region}
            </p>

            <p class="dialog-summary">${dessert.summary}</p>

            <h3>Where did it come from?</h3>
            <p>${dessert.story}</p>

            <h3>A name with a story</h3>
            <p>${dessert.nameStory}</p>

            <h3>Taste &amp; texture</h3>
            <p><strong>Taste:</strong> ${dessert.taste}</p>
            <p><strong>Texture:</strong> ${dessert.texture}</p>

            <div class="dialog-fact">
                <strong>✳ Sweet little fact</strong>
                <p>${dessert.fact}</p>
            </div>
        </div>
    `;

    dessertDialog.showModal();
}

// ============================================
// EVENT LISTENERS
// ============================================

if (dessertGrid) {
    dessertGrid.addEventListener("click", function (event) {
        const button = event.target.closest("[data-index]");

        if (button) {
            openDessert(Number(button.dataset.index));
        }
    });
}

if (searchInput) {
    searchInput.addEventListener("input", renderDesserts);
}

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        activeRegion = button.dataset.region || "All";

        filterButtons.forEach(function (item) {
            item.classList.toggle("active", item === button);
        });

        renderDesserts();
    });
});

if (closeDialog && dessertDialog) {
    closeDialog.addEventListener("click", function () {
        dessertDialog.close();
    });
}

if (dessertDialog) {
    dessertDialog.addEventListener("click", function (event) {
        if (event.target === dessertDialog) {
            dessertDialog.close();
        }
    });
}

// Close with Escape is handled automatically by <dialog>.

// ============================================
// START WEBSITE
// ============================================

renderDesserts();
