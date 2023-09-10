// Welcome Msg
console.log("Welocome To CodeLocator");

let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})
// Menu Box

// let menuBox = document.getElementById("menu");
// menuBox.addEventListener("click", function () {
//     console.log("you tap on Menu Box");
//     let boxItem = document.getElementById('menuItems');

//     if (boxItem.style.display == "block") {
//         boxItem.style.display = "none",
//             boxItem.style.transition = "0.5s";
//     }
//     else {
//         boxItem.style.display = "block",
//             boxItem.style.transition = "0.5s";
//     }
// })

// Dark Mode

let modes = document.getElementById("modes");
modes.addEventListener("click", function () {

    //? Dark Mode 
    if (document.getElementById("modesIcon").className == "uil uil-moon") {
        document.getElementById("modesIcon").className = "uil uil-sun";

        //*Msg 
        console.log("Dark Mode Enable");

        //*Body Color Change
        document.body.style.background = "#121316";

        //* Navbar
        let navbar = document.getElementById("navbar");
        navbar.style.background = "#121316d1";

        //* Setting Icons
        let modes = document.getElementById("modes");
        modes.style.background = "#181818",
            modes.style.border = "1px solid #505050";

        let modesIcon = document.getElementById("modesIcon");
        modesIcon.style.color = "#b4b4b4";

        let menu = document.getElementById("menu");
        menu.style.background = "#181818",
            menu.style.border = "1px solid #505050";

        let menuIcon = document.getElementById("menuIcon");
        menuIcon.style.color = "#b4b4b4";

        //* All texts in Our Web Page 
        let text = document.querySelectorAll('.text');
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "#b4b4b4",
                text[i].style.fontWeight = "400";
        }

        //* SearchBox 
        let searchBox = document.getElementById('searcherBox');
        searchBox.style.background = "#181818",
            searchBox.style.border = "1px solid #505050";

        //* Search Input  
        let searchInp = document.getElementById("searchInp");
        searchInp.style.background = "#121316",
            searchInp.style.color = "#b4b4b4",
            searchInp.style.border = "1px solid #505050";

        //* Button 
        let btn = document.getElementById("searchBtn");
        btn.style.border = "1px solid #505050";

        //* resultBox
        let resultBox = document.getElementById("resultBox");
        resultBox.style.background = "#181818",
            resultBox.style.border = "1px solid #505050";

        //* All ResultItems In OurPage 
        let resultItem = document.querySelectorAll(".resultItem");
        for (let i = 0; i < resultItem.length; i++) {
            resultItem[i].style.background = "#121316",
                resultItem[i].style.border = "1px solid #505050";

        }
        //* sideBar 
        let sideBar = document.getElementById("sideBar");
        sideBar.style.background = "#121316";

        let close = document.getElementById("close");
        close.style.background = "#181818",
            close.style.border = "1px solid #414141",
            close.style.color = "#b4b4b4";

        let sideBarsA = document.querySelectorAll('.anchor');
        for (let i = 0; i < sideBarsA.length; i++) {
            // sideBarsA[i].style.color = "#b4b4b4",
            sideBarsA[i].style.background = "#181818",
                sideBarsA[i].style.border = "1px solid #414141";
        }

    }


    //? Light Mode 
    else {
        document.getElementById("modesIcon").className = "uil uil-moon";

        //*Body Color Change
        document.body.style.background = "#fff";

        //*Msg 
        console.log("Light Mode Enable");

        //* Navbar
        let navbar = document.getElementById("navbar");
        navbar.style.background = "#f5f5f5d1";

        //* Setting Icons
        let modes = document.getElementById("modes");
        modes.style.background = "#fff",
            modes.style.border = "1px solid #ccc";

        let modesIcon = document.getElementById("modesIcon");
        modesIcon.style.color = "#181818";

        let menu = document.getElementById("menu");
        menu.style.background = "#fff",
            menu.style.border = "1px solid #ccc";

        let menuIcon = document.getElementById("menuIcon");
        menuIcon.style.color = "#181818";

        //* All texts in Our Web Page 
        let text = document.querySelectorAll('.text');
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "#181818";
        }

        //* SearchBox 
        let searchBox = document.getElementById('searcherBox');
        searchBox.style.background = "#f5f5f5",
            searchBox.style.border = "1px solid #ccc";

        //* Search Input  
        let searchInp = document.getElementById("searchInp");
        searchInp.style.background = "#fff",
            searchInp.style.color = "#181818",
            searchInp.style.border = "1px solid #ccc";

        //* Button 
        let btn = document.getElementById("searchBtn");
        btn.style.border = "1px solid #ccc";

        //* resultBox
        let resultBox = document.getElementById("resultBox");
        resultBox.style.background = "#f5f5f5",
            resultBox.style.border = "1px solid #ccc";

        //* All ResultItems In OurPage 
        let resultItem = document.querySelectorAll(".resultItem");
        for (let i = 0; i < resultItem.length; i++) {
            resultItem[i].style.background = "#fff",
                resultItem[i].style.border = "1px solid #ccc";

        }
        // * SideBar
        let sideBar = document.getElementById("sideBar");
        sideBar.style.background = "#f5f5f5";

        let close = document.getElementById("close");
        close.style.background = "#fff",
            close.style.border = "1px solid #ccc",
            close.style.color = "#181818";

        let sideBarsA = document.querySelectorAll('.anchor');
        for (let i = 0; i < sideBarsA.length; i++) {
            // sideBarsA[i].style.color = "#b4b4b4",
            sideBarsA[i].style.background = "#fff",
                sideBarsA[i].style.border = "1px solid #ccc";
        }
    }
})

// Validations
let searchInp = document.getElementById("searchInp");
searchInp.addEventListener("focus", function () {
    searchInp.value = '';
    let msg = document.getElementById("msg");
    msg.innerText = '';
    let resultBox = document.getElementById("resultBox");
    resultBox.style.display = "none";
    $("#resultBox").html('');
})

let searchbtn = document.getElementById('searchBtn');
searchbtn.addEventListener("click", function () {
    let searchInp = document.getElementById("searchInp");
    if (searchInp.value == '') {
        let input = document.getElementById("searchInp");
        input.style.border = "1px solid #ff3d3d",
            input.placeholder = "Need to fill this field";

        // Custom Alert
        let alert = document.getElementById('alert');
        alert.style.display = 'flex',
            alert.style.background = "#dd4f4f";
        let alertMsg = document.getElementById('alertMsg');
        alertMsg.innerText = "You Need To Fill Input Feild";
        let alertClose = document.getElementById("alertClose");
        alertClose.style.background = "#93000055",
            alertClose.style.border = "none";
        alertClose.addEventListener("click", function () {
            let alert = document.getElementById('alert');
            alert.style.display = 'none';
        })
        setTimeout(() => {
            let alert = document.getElementById('alert');
            //  removes element from DOM
            alert.style.display = 'none';

            // hides element (still takes up space on page)
            // box.style.visibility = 'hidden';
        }, 5000);


        input.addEventListener("focus", function () {
            let input = document.getElementById("searchInp");
            input.style.border = "1px solid #505050",
                input.placeholder = "Eg : 414001 or New Delhi",
                console.log(input.value);

        })

        let resultBox = document.getElementById("resultBox");
        resultBox.style.display = "None";

    }
    else {

        let resultBox = document.getElementById("resultBox");
        resultBox.style.display = "block";

        console.log("You Clicked On Sumbit");
        // var x = document.forms["myForm"]["age"].value;
        // var char = /^[a-zA-Z]+$/;
        var char = /^[A-Za-z\s]*$/;
        var num = /^[0-9]+$/;
        let searchInp = document.getElementById("searchInp").value;
        console.log(searchInp);
        if (searchInp.match(char)) // this is the code I need to change
        {
            // Custom Alert
            let alert = document.getElementById('alert');
            alert.style.display = 'flex',
                alert.style.background = "#6bdc61";
            let alertMsg = document.getElementById('alertMsg');
            alertMsg.innerText = "Wait a Minutes, Data Loading..";
            let alertClose = document.getElementById("alertClose");
            alertClose.style.background = "#246828",
                alertClose.style.border = "none";
            alertClose.addEventListener("click", function () {
                let alert = document.getElementById('alert');
                alert.style.display = 'none';
            })
            setTimeout(() => {
                let alert = document.getElementById('alert');
                //  removes element from DOM
                alert.style.display = 'none';

                // hides element (still takes up space on page)
                // box.style.visibility = 'hidden';
            }, 4000);
            $("#resultBox").html('');
            // alert("You Entered Character");
            let searchInp = $('#searchInp').val();

            // alert(searchInp)

            $.getJSON("https://api.postalpincode.in/postoffice/" + searchInp, function (data) {
                console.log(data);
                // Msg
                $('#msg').html(data[0].Message)

                // Result
                data[0].PostOffice.forEach(po => {
                    $("#resultBox").append('<div class="resultItem text"><a target="_blank" href="https://www.google.com/search?q=' + po.Name + '">' + po.Name + '-</a>' + po.District + ' - ' + po.Circle + '<a target="_blank" href="https://www.google.com/search?q=' + po.Pincode + '">-' + po.Pincode + '</a></div>')
                })
                console.log(typeof (data));

            })

            // alert("Done")

            // return false;
        }
        else if (searchInp.match(num)) {
            $("#resultBox").html('');
            if (searchInp.length == 6) {
                // Custom Alert
                let alert = document.getElementById('alert');
                alert.style.display = 'flex',
                    alert.style.background = "#6bdc61";
                let alertMsg = document.getElementById('alertMsg');
                alertMsg.innerText = "Wait a Minutes, Data Loading..";
                let alertClose = document.getElementById("alertClose");
                alertClose.style.background = "#246828",
                    alertClose.style.border = "none";
                alertClose.addEventListener("click", function () {
                    let alert = document.getElementById('alert');
                    alert.style.display = 'none';
                })
                setTimeout(() => {
                    let alert = document.getElementById('alert');
                    //  removes element from DOM
                    alert.style.display = 'none';

                    // hides element (still takes up space on page)
                    // box.style.visibility = 'hidden';
                }, 4000);
                // alert("You enterd Number");
                let searchInp = $('#searchInp').val();

                // alert(searchInp)

                $.getJSON("https://api.postalpincode.in/pincode/" + searchInp, function (data) {
                    console.log(data);
                    // Msg
                    $('#msg').html(data[0].Message)

                    // Result
                    data[0].PostOffice.forEach(po => {
                        $("#resultBox").append('<div class="resultItem text"><a target="_blank" href="https://www.google.com/search?q=' + po.Name + '">' + po.Name + '-</a>' + po.District + ' - ' + po.Circle + '<a target="_blank" href="https://www.google.com/search?q=' + po.Pincode + '">-' + po.Pincode + '</a></div>')
                    })

                })
                // alert("Done")

            }
            else {
                // Custom Alert
                let alert = document.getElementById('alert');
                alert.style.display = 'flex',
                    alert.style.background = "#dd4f4f";
                let alertMsg = document.getElementById('alertMsg');
                alertMsg.innerText = "You Entered More Than 6 Latters"; 
                let alertClose = document.getElementById("alertClose");
                alertClose.style.background = "#93000055",
                    alertClose.style.border = "none";
                alertClose.addEventListener("click", function () {
                    let alert = document.getElementById('alert');
                    alert.style.display = 'none';
                })
                setTimeout(() => {
                    let alert = document.getElementById('alert');
                    //  removes element from DOM
                    alert.style.display = 'none';

                    // hides element (still takes up space on page)
                    // box.style.visibility = 'hidden';
                }, 5000);
                // alert("You Entered More than 6 letters");


                let resultBox = document.getElementById("resultBox");
                resultBox.style.display = "none";

                let input = document.getElementById("searchInp");
                input.style.border = "1px solid #dd4f4f",
                    input.placeholder = "Need to fill this field";


                input.addEventListener("focus", function () {
                    let input = document.getElementById("searchInp");
                    input.style.border = "1px solid #505050",
                        input.placeholder = "Eg : 414001 or New Delhi",
                        input.placeholder.style.color = "#b4b4b4";

                })
            }
            // return false;
        }
        else {
            // alert("Invalid Input");
            // Custom Alert
            let alert = document.getElementById('alert');
            alert.style.display = 'flex';
            let alertMsg = document.getElementById('alertMsg');
            alertMsg.innerText = "Invalid Input, Please Enter Correct Input";
            let alertClose = document.getElementById("alertClose");
            alertClose.addEventListener("click", function () {
                let alert = document.getElementById('alert');
                alert.style.display = 'none';
            })
            setTimeout(() => {
                let alert = document.getElementById('alert');
                //  removes element from DOM
                alert.style.display = 'none';

                // hides element (still takes up space on page)
                // box.style.visibility = 'hidden';
            }, 5000);
            // $("#resultBox").html('');

            // return false;
        }
    }
})


//* Menu
let menu = document.getElementById("menu");
menu.addEventListener("click", function () {
    let sideBar = document.getElementById("sideBar");
    sideBar.style.transform = "translateX(0px)";
})
let close = document.getElementById("close");
close.addEventListener("click", function () {
    let sideBar = document.getElementById("sideBar");
    sideBar.style.transform = "translateX(400px)";
})