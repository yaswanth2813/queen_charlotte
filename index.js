function day() {
    document.getElementById("projects").style.backgroundColor = "white";
}

function dark() {
    document.getElementById("projects").style.backgroundColor = "black";
}

const people = [{
        Title: "Bedurulanka",
        imageSrc: "https://static.toiimg.com/thumb/msid-96399612,width-1280,resizemode-4/96399612.jpg",
        Url: "https://pixeldrain.com/u/E7mSipJm",
    },

    {
        Title: "King Of Kotha",
        imageSrc: "https://img.etimg.com/photo/103084624/103084624.jpg",
        Url: "https://pixeldrain.com/u/VLECgLrP",
    },
    {
        Title: "Gandheevadhari Arjuna",
        imageSrc: "https://timesofindia.indiatimes.com/photo/103054355.cms",
        Url: "https://pixeldrain.com/u/QRgQLyMo",
    },
    {
        Title: "Bhola Shankar",
        imageSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRcfQpNsKyuHWu-_aOHYud3kuqhn-qzGT4BG7UxAQZV9KBuZKHu",
        Url: "https://pixeldrain.com/u/sMugusQJ",
    },
    {
        Title: "Kushi",
        imageSrc: "https://cdn.gulte.com/wp-content/uploads/2023/07/Kushi-Song-Out-TWT-scaled.jpg",
        Url: "https://pixeldrain.com/u/RHx1AtFL",
    },
    {
        Title: "Ramabanam",
        imageSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBfselgIN1kBiq1t2HhDUaB-HQbjchsPudzaQK-itVyAmJEJ_A",
        Url: "https://pixeldrain.com/u/zaJeqiVg",
    },
    {
        Title: "Jailer",
        imageSrc: "https://m.media-amazon.com/images/M/MV5BNzFkNmZkMTctYjRhMS00ODZiLWFlNjQtZmZmN2IzMDJlNmVkXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_FMjpg_UX1000_.jpg",
        Url: "",
    },
    {
        Title: "Bro",
        imageSrc: "https://data1.ibtimes.co.in/en/full/787793/bro-movie.jpg",
        Url: "",
    },


    // Add more person objects here
];
const container = document.getElementById("mlist");

// Loop through the array of people
people.forEach(person => {
    // Create a column for each person with Bootstrap column classes
    const col = document.createElement("div");
    col.className = " col-sm-4 col-6 col-lg-3 col-md-4 mb-4 "; // Adjust column size for different screen sizes

    // Create an anchor tag to link to the person's profile
    const anchor = document.createElement("a");
    anchor.href = person.Url; // Set the profile URL

    // Create a card element using Bootstrap
    const card = document.createElement("div");
    card.className = "card";

    // Create an image element inside the card
    const img = document.createElement("img");
    img.src = person.imageSrc; // Set the image source
    img.alt = `${person.firstName} ${person.lastName}`; // Set alt text
    img.className = "image";

    // Create a card body
    const cardBody = document.createElement("div");
    cardBody.className = "card";

    // Create an h5 element for the first name
    const h5 = document.createElement("h5");
    h5.className = "head";
    h5.textContent = person.Title;

    // Append elements to their respective parents
    cardBody.appendChild(h5);
    card.appendChild(img);
    card.appendChild(cardBody);
    anchor.appendChild(card);
    col.appendChild(anchor);

    // Append the column to the container
    container.appendChild(col);
});