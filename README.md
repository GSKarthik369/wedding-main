Deployed here: Wedding application

const env = {
    brideName: "Vidyalekshmi M S",
    groomName: "Akhilchandran B S",
    type: "Wedding",
    weddingDate: "09th May 2025",
    venue: "Kairali Audiotorium, Kottamam, Trivandrum",
    time: "10:00 A.M. and 10:30 A.M.",
    eventType: "are getting married",
    bestCompliments: "Best Compliments from Vipin M S, Geethu G S, Samvrudhi G Vipin, Kith and Kin",
    invitationDownload: "Invitation | 09 May | Hope to see you there!",
    // whatsappURL: "https://api.whatsapp.com/send?phone=+919895590781&text=Hello%20,%20We%20are%20joining%20your%20daughter's%20wedding%20function&source=&data="
};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("meta[property='og:title']").setAttribute(
        "content",
        `${env.type} Invitation | ${env.brideName} weds ${env.groomName} | ${env.weddingDate} | ${env.venue}`
    );
    document.querySelector("meta[name='twitter:title']").setAttribute(
        "content",
        `${env.type} Invitation | ${env.brideName} weds ${env.groomName} | ${env.weddingDate}`
    );
    document.querySelector("meta[property='og:site_name']").setAttribute(
        "content",
        `${env.type} Invitation | ${env.brideName} weds ${env.groomName} | ${env.weddingDate}`
    );

    document.querySelector(".title h1:first-of-type").innerText = env.brideName;
    document.querySelector(".title h1:last-of-type").innerText = env.groomName;
    document.querySelector(".title .date").innerText = env.weddingDate;
    document.querySelector(".title .place").innerText = env.venue;
    document.querySelector(".title .event-type").innerText = env.eventType;
    document.querySelector('.time').textContent = env.time;
    document.querySelector('.dance-med2').textContent = env.bestCompliments;
    // document.querySelector('.venue-link').setAttribute('href', env.VENUE_URL);
    // document.querySelector('.engagement-link').setAttribute('href', env.ENGAGEMENT_URL);
    document.querySelector('.invitation-link').setAttribute('download', env.invitationDownload);
    // document.querySelector('.whatsapp-link').setAttribute('href', env.whatsappURL);
});

