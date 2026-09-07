function showService(serviceId, button) {

    document.querySelectorAll(".service-tab")
        .forEach(tab => {
            tab.classList.remove("active");
        });

    document.querySelectorAll(".service-content")
        .forEach(content => {
            content.classList.remove("active");
        });

    button.classList.add("active");

    document.getElementById(serviceId)
        .classList.add("active");
}
