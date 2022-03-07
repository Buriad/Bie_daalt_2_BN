/*  Add subscription email action. When subscription POST request is successful, 
    change the email element and subscribe button into "Your subscription is successful" Text. 
    POST request should be done by AJAX request. We need a POST request end point for subscription email. 
*/
// Define Subscribe by ID name

// Add CLICK Event Listener on the button
// Then using Fetch method POST input value to http://52.221.191.153/subscribe/subscription/create

buttonSubs = document.getElementById("subscribe");

buttonSubs.addEventListener("click"),
  () => {
    const URL = "http://52.221.191.153/subscribe/subscription/create";
  };
