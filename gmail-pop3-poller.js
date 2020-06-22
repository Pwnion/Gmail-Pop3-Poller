while(true) {
    for(obj of document.getElementsByClassName("rP sA")) {
        obj.click();
    }
    await new Promise(r => setTimeout(r, 1000));
}