// Daalgavar 2.
// Create an XMLHttpRequest object
// Create a callback function
// Open a GET request and use data from ../data/company_intro.json
// Send the request

let xhr = new XMLHttpRequest();
xhr.change = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let info = JSON.parse(xhr.responseText);
      let infoData = info.data;
      // let infoMsg = info.message;
      const introPost = document.querySelector("#company-intro-posts.row");
      for (let i = 0; i < infoData.length; i++) {
        introPost.innerHTML += (
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="${introDatas[i].thumbnail}"
                class="card-img-top"
                alt="post1"
              />
              <div class="card-body">
                <h5 class="card-title">${infoData[i].title}</h5>
                <p class="card-text">${infoData[i].content.slice(0, 100)}</p>
                <a href="intro-${infoData[i].id}.html" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        );
      }
    } else {
      alert(xhr.statusText);
    }
  }
};
xhr.open("GET", "../data/company_intro.json");
xhr.send();
