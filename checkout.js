
var MySDK = function () { 
  var myApiUrl = "https://payproxyapi.hubtel.com/items/initiate";

   function openModal (data) {
    createIfram();
    return fetch(myApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic a09va1BHdjo4MDA2ZTA5NjRkYWI0ZjFmYWEyZGVlOTgyZmMyMWNiMw==",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        renderWebpageInPopup(result.data.checkoutUrl);
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
  };

   function  createIfram () {
    // Create the iframe element
    let iframe = document.createElement("iframe");

    // Set attributes for the iframe
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("id", "loaderIframe");
    iframe.setAttribute(
      "style",
      "z-index: 2147483647; background: rgba(0 0 0 / 53%); border: 0px none transparent; overflow: hidden; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%; transition: opacity 0.3s ease 0s; visibility: visible; opacity: 1;"
    );

    document.body.appendChild(iframe);
  };

 function renderWebpageInPopup (url) {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "true");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50px";
    modal.style.marginLeft = "auto";
  }
}

