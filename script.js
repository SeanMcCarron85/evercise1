function main() {
    //add class
        const pElement3 = document.getElementById("grow-me");
        pElement3.classList.add("big");
    //remove class
        const pElement4 = document.getElementById("shrink-me");
        pElement4.classList.remove("big");
    // Find all the <li>s and log their text content to the console.
        const listItems = document.querySelectorAll('li');
        for (let i = 0; i <= listItems.length - 1; i++) {
            console.log(listItems[i]);
    }
    // Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
        const link = document.querySelector("a");
        link.getAttribute("href");
        link.setAttribute("href",
        "https://www.example.com");
        link.textContent = "somewhere";
    //Set the "display" CSS property of the "hide-me" paragraph to "none".
        const pStyle1 = document.getElementById("hide-me");
        pStyle1.style.display = "none";
    //Set the "display" CSS property of the "show-me" paragraph to "block".
        const pStyle2 = document.getElementById("show-me");
        pStyle2.style.display = "block";
    //Get the text that the user enters into the "name" input box 
    //and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".
        let pName = document.getElementById("name").value;
        console.log(pName);
        document.getElementsByTagName("h1")[0].setAttribute("id", "heading");
        let head1 = document.getElementById("heading");
        head1.innerText = "Welcome " + pName;
        

        





}