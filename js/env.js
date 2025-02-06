const env = {
    brideName: "Ajin V Alex",
    groomName: "Solomon K.R",
    weddingDate: "08th February 2025",
    venue: "St. Mary's Malankara Syriac Catholic Church, Ayoor",
    time: "11:00 A.M.",
    bestCompliments: "Best Compliments from Josun V Alex and Vadakkethalackal Family",
    invitationDownload: "Invitation | 17 February | Hope to see you there!",
    // whatsappURL: "https://api.whatsapp.com/send?phone=+919400693283&text=Hello%20Josun%20V%20Alex,%20We%20are%20joining%20your%20sister's%20wedding%20function&source=&data="
};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("meta[property='og:title']").setAttribute(
        "content",
        `Engagement Invitation | ${env.brideName} weds ${env.groomName} | ${env.weddingDate} | ${env.venue}`
    );
    document.querySelector("meta[name='twitter:title']").setAttribute(
        "content",
        `Engagement Invitation | ${env.brideName} weds ${env.groomName} | ${env.weddingDate}`
    );
    document.querySelector("meta[property='og:site_name']").setAttribute(
        "content",
        `Engagement Invitation | ${env.brideName} weds ${env.groomName} | ${env.weddingDate}`
    );

    document.querySelector(".title h1:first-of-type").innerText = env.brideName;
    document.querySelector(".title h1:last-of-type").innerText = env.groomName;
    document.querySelector(".title .date").innerText = env.weddingDate;
    document.querySelector(".title .place").innerText = env.venue;
    document.querySelector('.time').textContent = env.time;
    document.querySelector('.dance-med2').textContent = env.bestCompliments;
    // document.querySelector('.venue-link').setAttribute('href', env.VENUE_URL);
    // document.querySelector('.engagement-link').setAttribute('href', env.ENGAGEMENT_URL);
    document.querySelector('.invitation-link').setAttribute('download', env.invitationDownload);
    // document.querySelector('.whatsapp-link').setAttribute('href', env.whatsappURL);
});
