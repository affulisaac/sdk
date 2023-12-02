export class MySDK {
    myApiUrl = "https://payproxyapi.hubtel.com/items/initiate";
  
    openModal(data) {
      this.createIfram();
      return fetch(this.myApiUrl, {
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
          this.renderWebpageInPopup(result.data.checkoutUrl);
        })
        .catch((error) => {
          console.error("Error:", error);
          throw error;
        });
    }
  
    createIfram() {
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
    }
  
    renderWebpageInPopup(url) {
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
      modal.style.marginRight = "auto";
      modal.style.width = "100%";
      modal.style.maxWidth = "480px";
  
      modal.style.backgroundColor = "#fff";
      modal.style.display = "flex";
      modal.style.alignItems = "center";
      modal.style.justifyContent = "center";
      modal.style.zIndex = "65675656565";
      modal.style.transition = "bottom 0.5s ease"; // Add transition property
  
      const closeIcon = document.createElement("div");
      closeIcon.innerHTML = "&times;"; // HTML entity for "times" (close) symbol
      closeIcon.style.position = "absolute";
      closeIcon.style.top = "-30px";
      closeIcon.style.right = "0px";
      closeIcon.style.cursor = "pointer";
      closeIcon.style.borderRadius = "50%";
      closeIcon.style.padding = "0 6px";
      closeIcon.style.fontSize = "20px";
      closeIcon.style.color = "#000";
      closeIcon.style.backgroundColor = "#dedede";
      closeIcon.addEventListener("click", () => {
        const iframe = document.getElementById("loaderIframe");
        console.log(iframe);
        document.body.removeChild(modal);
        console.log(modal);
        document.body.removeChild(iframe);
      });
      modal.appendChild(closeIcon);
  
      // Create loading indicator
      const loadingIndicator = document.createElement("div");
      loadingIndicator.textContent = "Loading...";
      loadingIndicator.style.display = "none"; // Initially hidden
      // modal.appendChild(loadingIndicator);
  
      iframe.addEventListener("load", () => {
        // Hide the loading indicator once the iframe is loaded
        loadingIndicator.style.display = "none";
      });
  
      // Add error event listener to the iframe
      iframe.addEventListener("error", () => {
        // Handle iframe load errors here
        loadingIndicator.textContent = "Error loading content.";
      });
  
      modal.appendChild(iframe);
      document.body.appendChild(modal);
      modal.offsetWidth;
  
      loadingIndicator.style.display = "block";
      modal.style.bottom = "0";
    }
  }
  