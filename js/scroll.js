function anchorLinkHandler(e) {
    //get distance from the top of the page currently
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    //prevent default event
    e.preventDefault();
    //get distance from the top of the page for element where we are going
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    //if no target  element return 
    if (!targetAnchor) return;
    // otherwise calculate distance between where we are and where we need to go
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));
