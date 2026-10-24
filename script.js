const desserts = [
    {
        name: "Croissant",
        country: "France",
        region: "Europe",
        emoji: "🥐",
        color: "#f3dfbd",

        summary:
            "A buttery, flaky pastry with delicate layers and a golden crust.",

        taste:
            "Rich, buttery, lightly toasted, and just a little nutty.",

        texture:
            "Crisp and flaky on the outside, airy and tender inside.",

        story:
            "The croissant is strongly associated with French baking, but its story is often connected to the Austrian kipferl, an older crescent-shaped baked good. French bakers developed the laminated, buttery version that became famous around the world.",

        nameStory:
            "Croissant means crescent in French, referring to its curved shape.",

        fact:
            "Its signature layers come from folding butter into dough repeatedly. This technique is called lamination."
    },

    {
        name: "Tiramisu",
        country: "Italy",
        region: "Europe",
        emoji: "🍰",
        color: "#e8d3c3",

        summary:
            "A layered dessert of coffee-soaked biscuits, cream, and cocoa.",

        taste:
            "Coffee-forward, creamy, sweet, and gently bitter from cocoa.",

        texture:
            "Soft biscuits combined with cool, velvety cream.",

        story:
            "Tiramisu became popular in Italy during the twentieth century. Several places in the Veneto region are associated with its creation, so its exact origin remains debated. Its familiar combination of coffee, mascarpone cream, and cocoa made it a worldwide favourite.",

        nameStory:
            "The Italian name is commonly translated as pick me up.",

        fact:
            "Traditional recipes often use ladyfinger biscuits, mascarpone, eggs, sugar, coffee, and cocoa."
    },

    {
        name: "Pastel de Nata",
        country: "Portugal",
        region: "Europe",
        emoji: "🧁",
        color: "#f4d9a9",

        summary:
            "A small custard tart tucked inside crisp, flaky pastry.",

        taste:
            "Sweet egg custard with warm vanilla and caramelised notes.",

        texture:
            "Flaky, crisp shell with a silky centre and browned top.",

        story:
            "Pastéis de nata are closely connected to Lisbon, Portugal. A famous version is associated with the Belém neighbourhood and the pastry tradition around Jerónimos Monastery. The custard tart later became one of Portugal's best-known treats.",

        nameStory:
            "Pastel means pastry or cake, while nata refers to cream.",

        fact:
            "The browned spots on top develop when the custard is baked at high heat."
    },

    {
        name: "Mochi",
        country: "Japan",
        region: "Asia",
        emoji: "🍡",
        color: "#dce5cd",

        summary:
            "A soft, chewy rice cake with a long place in Japanese food culture.",

        taste:
            "Mild and gently sweet; filled versions may contain red bean or strawberry.",

        texture:
            "Soft, stretchy, and satisfyingly chewy.",

        story:
            "Mochi is made from glutinous rice and has long been part of Japanese celebrations and seasonal traditions. It appears in many forms, from plain rice cakes to sweets filled with sweetened bean paste.",

        nameStory:
            "Mochi is the Japanese name for this pounded rice cake.",

        fact:
            "Despite the name, glutinous rice does not contain gluten. Glutinous describes its sticky texture."
    },

    {
        name: "Mooncake",
        country: "China",
        region: "Asia",
        emoji: "🥮",
        color: "#eed5b5",

        summary:
            "A round festival pastry often shared during the Mid-Autumn Festival.",

        taste:
            "Rich and sweet, with fillings such as lotus seed paste or red bean.",

        texture:
            "Often dense and tender, with a thin patterned crust around the filling.",

        story:
            "Mooncakes are closely associated with China's Mid-Autumn Festival, a time for family gatherings and moon viewing. Their styles vary across regions, with different crusts, shapes, and fillings.",

        nameStory:
            "The name connects the round pastry with the moon, a central symbol of the festival.",

        fact:
            "Many mooncakes have decorative patterns pressed into their tops."
    },

    {
        name: "Cheesecake",
        country: "Greece / United States",
        region: "Europe",
        emoji: "🍰",
        color: "#f0dfc9",

        summary:
            "A creamy cake made with cheese, with styles that vary around the world.",

        taste:
            "Tangy, creamy, and sweet, often balanced by fruit or a biscuit base.",

        texture:
            "Dense and silky, light and airy, or soft and custardy depending on the style.",

        story:
            "Cheese-based cakes have ancient roots, including in Greece. Modern cheesecake has many regional versions, and New York-style cheesecake is especially known for its rich cream-cheese filling.",

        nameStory:
            "Its name comes from cheese, the ingredient that gives the cake its signature character.",

        fact:
            "Some cheesecakes are baked, while others set in the refrigerator without baking."
    },

    {
        name: "Doughnut",
        country: "United States / Europe",
        region: "Americas",
        emoji: "🍩",
        color: "#f3d7d4",

        summary:
            "A sweet fried dough treat that can be ring-shaped or filled.",

        taste:
            "Sweet and bready, with flavours ranging from vanilla glaze to chocolate or jam.",

        texture:
            "Usually soft and fluffy, sometimes with a slightly crisp outside.",

        story:
            "Fried dough treats have a long history in many cultures. The ring-shaped doughnut became especially iconic in the United States, while filled and regional varieties are enjoyed around the world.",

        nameStory:
            "The word combines dough with nut, though the exact history of the name is debated.",

        fact:
            "Not every doughnut has a hole. Many varieties are filled with jam, custard, or cream."
    },

    {
        name: "Strawberry Shortcake",
        country: "Japan / United States",
        region: "Asia",
        emoji: "🍓",
        color: "#f4dfe0",

        summary:
            "A celebratory cake layered with strawberries and whipped cream.",

        taste:
            "Lightly sweet, milky, and fresh with bright strawberry flavour.",

        texture:
            "Soft sponge cake, airy cream, and juicy berries.",

        story:
            "Shortcake traditions exist in several places. The Japanese strawberry shortcake, popular for celebrations, developed into a light sponge layered with whipped cream and strawberries.",

        nameStory:
            "Shortcake historically referred to a rich or crumbly cake-like pastry.",

        fact:
            "In Japan, strawberry shortcake is a popular choice for Christmas and birthdays."
    },

    {
        name: "Sacher-Torte",
        country: "Austria",
        region: "Europe",
        emoji: "🍫",
        color: "#e8d1c6",

        summary:
            "A famous chocolate cake traditionally paired with apricot jam.",

        taste:
            "Deep chocolate with a gentle fruity tang from apricot jam.",

        texture:
            "Firm chocolate cake covered with a smooth chocolate glaze.",

        story:
            "Sacher-Torte is associated with Vienna, Austria. It is linked to Franz Sacher, who is said to have created an early version in 1832. The cake became a celebrated part of Viennese café culture.",

        nameStory:
            "The name comes from the Sacher family name, associated with the cake's history.",

        fact:
            "It is traditionally served with unsweetened whipped cream to balance the chocolate."
    }
];

const dessertGrid = document.getElementById("dessertGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const filterButtons = document.querySelectorAll(".filter");

const dessertDialog = document.getElementById("dessertDialog");
const dialogContent = document.getElementById("dialogContent");
const closeDialog = document.getElementById("closeDialog");

let activeRegion = "All";


// MEMBUAT KARTU DESSERT

function createCard(dessert, index) {
    return `
        <article class="dessert-card">

            <div
                class="card-art"
                style="background: ${dessert.color}"
            >
                <span class="country-tag">
                    ${dessert.country}
                </span>

                <span class="dessert-emoji">
                    ${dessert.emoji}
                </span>
            </div>

            <div class="card-body">

                <h3>${dessert.name}</h3>

                <p class="card-origin">
                    ${dessert.country.toUpperCase()}
                </p>

                <p class="card-description">
                    ${dessert.summary}
                </p>

                <button
                    class="read-more"
                    data-index="${index}"
                >
                    Discover its story ↗
                </button>

            </div>

        </article>
    `;
}


// MENAMPILKAN DESSERT

function renderDesserts() {

    const query = searchInput.value
        .trim()
        .toLowerCase();

    const matchingDesserts = desserts
        .map((dessert, index) => ({
            dessert,
            index
        }))
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

            const matchesSearch =
                searchableText.includes(query);

            const matchesRegion =
                activeRegion === "All" ||
                dessert.region === activeRegion;

            return matchesSearch && matchesRegion;
        });

    dessertGrid.innerHTML = matchingDesserts
        .map(({ dessert, index }) => {
            return createCard(dessert, index);
        })
        .join("");

    noResults.hidden = matchingDesserts.length > 0;
}


// MEMBUKA CERITA DESSERT

function openDessert(index) {

    const dessert = desserts[index];

    if (!dessert) return;

    dialogContent.innerHTML = `
        <div
            class="dialog-art"
            style="background: ${dessert.color}"
        >
            ${dessert.emoji}
        </div>

        <div class="dialog-copy">

            <p class="eyebrow">
                A SWEET LITTLE DISCOVERY
            </p>

            <h2>${dessert.name}</h2>

            <p class="dialog-country">
                ${dessert.country} · ${dessert.region}
            </p>

            <p>${dessert.summary}</p>

            <h3>Where did it come from?</h3>
            <p>${dessert.story}</p>

            <h3>A name with a story</h3>
            <p>${dessert.nameStory}</p>

            <h3>Taste & texture</h3>
            <p><strong>Taste:</strong> ${dessert.taste}</p>
            <p><strong>Texture:</strong> ${dessert.texture}</p>

            <div class="dialog-fact">
                <strong>✳ Sweet little fact:</strong>
                ${dessert.fact}
            </div>

        </div>
    `;

    dessertDialog.showModal();
}


// KLIK TOMBOL CERITA

dessertGrid.addEventListener("click", function(event) {

    const button = event.target.closest("[data-index]");

    if (button) {
        openDessert(Number(button.dataset.index));
    }

});


// PENCARIAN

searchInput.addEventListener("input", renderDesserts);


// FILTER WILAYAH

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        activeRegion = button.dataset.region;

        filterButtons.forEach(function(item) {
            item.classList.toggle("active", item === button);
        });

        renderDesserts();

    });

});


// MENUTUP POP-UP

closeDialog.addEventListener("click", function() {
    dessertDialog.close();
});

dessertDialog.addEventListener("click", function(event) {

    if (event.target === dessertDialog) {
        dessertDialog.close();
    }

});


// MENAMPILKAN KARTU SAAT WEBSITE DIBUKA

renderDesserts();
