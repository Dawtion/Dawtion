dawtion = [];
dawtion.version = 'InDev, before publish';

dawtion.init = function() {
    /* Creating elements in the DOM */
    // Version display in the header
    const headerVersionDisplay = document.createElement('p');
    headerVersionDisplay.setAttribute('id', 'header-version-display');
    headerVersionDisplay.innerHTML = `Dawtion Version: ${dawtion.version}`;

    // Appending the elements to the document
    document.getElementById('header').appendChild(headerVersionDisplay)
};