//* Welcome Massege
console.log("Welcome To CodeLocator");


//? Laoder
let loader = document.getElementById("loader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})
//? Menu

// let menuBtn = document.getElementById("menu");
// menuBtn.addEventListener("click", function () {
//     let menuItems = document.getElementById("menuItems");
//     // menuItems.style.transform = "translateY(0px)";
//     if (menuItems.style.transform == "translateY(0px)") {
//         menuItems.style.transform = "translateY(-400px)";
//     }
//     else {
//         menuItems.style.transform = "translateY(0px)";
//     }
// })
// API - https://ifsc.razorpay.com/SBIN0012306
// https://ifsc.razorpay.com/YESB0DNB002.
// //? ResultBox Content Hide & Show

// let arrowBtn = document.getElementById("arrow");
// arrowBtn.addEventListener("click", function(){
//     // let upArrowI = document.getElementsByClassName('uil-angle-down');

//     if (document.getElementById("arrow").className == "uil-angle-down") {

//         let resultBox = document.getElementById("resultBox");
//         resultBox.style.height = "auto";
//         document.getElementById("arrow").className = "uil-angle-up";
//     }
//     else {

//         let resultBox = document.getElementById("resultBox");
//         resultBox.style.height = "255px";
//         document.getElementById("arrow").className = "uil-angle-down";
//     }

// })


// ?Alert Check

let checkBtn = document.getElementById('checkBtn');
checkBtn.addEventListener("click", function () {

    let searchInp = $('#searchInp').val();
    if (searchInp == '') {
        let input = document.getElementById("searchInp");
        input.style.border = "1px solid #ff3d3d",
            input.placeholder = "Need to fill this field";

        // Custom Alert
        let alert = document.getElementById('alert');
        alert.style.display = 'flex',
            alert.style.background = "#dd4f4f";

        let alertMsg = document.getElementById('alertMsg');
        alertMsg.innerText = "You Need To Fill Input Field";

        let alertClose = document.getElementById("alertClose");
        alertClose.style.background = "#93000055",
            alertClose.style.border = "none";

        alertClose.addEventListener("click", function () {
            let alert = document.getElementById('alert');
            alert.style.display = 'none';
        })

        setTimeout(() => {
            let alert = document.getElementById('alert');
            alert.style.display = 'none';
        }, 4000);
    }
    else if (searchInp.length == 11) {
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
        }, 4000);

        //! Result Output

        $("#resultBox").html('');
        let searchInp = $('#searchInp').val();

        // alert(searchInp)

        $.getJSON("https://ifsc.razorpay.com/" + searchInp, function (data) {
            console.log(data);
            JSON.stringify(data);
            // let branch = data.toLowerCase(data.BRANCH);
            // console.log(branch);
            // Result
            $("#resultBox").append('<div class="resultItem"><div id="bankLink"><a id="bankName" target="_blank" href="https://www.google.com/search?q=' + data.BANK + ' ' + data.IFSC + '" class="item">Bank - ' + data.BANK + '</a></div><p id="branch" class="item">Branch - ' + data.BRANCH + '</p><p id="ifsc" class="item">IFSC - ' + data.IFSC + '</p><p id="address" class="item">Address - ' + data.ADDRESS + '</p><div id="bankInfo"><p id="bankcode" class="item">Bank Code - ' + data.BANKCODE + '</p><p id="UPI" class="item">UPI - ' + data.UPI + '</p></div><p id="contact" class="item">Contact - ' + data.CONTACT + '</p><p id="MICR" class="item">MICR - ' + data.MICR + '</p><p id="city" class="item">City - ' + data.CITY + '</p><p id="center" class="item">Center - ' + data.CENTRE + '</p><p id="district" class="item">District - ' + data.DISTRICT + '</p><p id="state" class="item">State - ' + data.STATE + '</p></div></div>')
            //     $("#resultBox").append('<li>'+po.BRANCH+'</li>')
            // })
            console.log(typeof (data));
        })

        // * Display Block - #resultBox
        let resultBox = document.getElementById("resultBox");
        resultBox.style.display = "block";
    }
    else {
        let alert = document.getElementById('alert');
        alert.style.display = 'flex',
            alert.style.background = "#dd4f4f";

        let alertMsg = document.getElementById('alertMsg');
        alertMsg.innerText = "Invalid Input, Please Enter Correct Input";

        let alertClose = document.getElementById("alertClose");
        alertClose.style.background = "#93000055",
            alertClose.style.border = "none";

        alertClose.addEventListener("click", function () {
            let alert = document.getElementById('alert');
            alert.style.display = 'none';
        })

        setTimeout(() => {
            let alert = document.getElementById('alert');
            alert.style.display = 'none';
        }, 5000);
    }
})

// ? Focus On Input Field

let searchInp = document.getElementById('searchInp');
searchInp.addEventListener("focus", function () {
    let searchInp = document.getElementById('searchInp');
    searchInp.value = '';

    let input = document.getElementById("searchInp");
    input.style.border = "1px solid #cccccc",
        input.placeholder = "Eg - SBIN0012306";
    // console.log(input.value);

    let resultBox = document.getElementById("resultBox");
    resultBox.style.display = "none";
})

//? ResultBox Problem
// let searchBtn =document.getElementById('checkBtn');
// searchBtn.addEventListener("click",function(){
//     alert("Now this Style will be Enable")
//     if (document.getElementById('modesIcon').className == "uil-moon"){
//         alert("Now You Using Light mode")
//         //* ResultBox 
//         let resultBox = document.getElementById('resultBox');
//         resultBox.style.background = "#181818",
//             resultBox.style.border = "1px solid #505050";

//         //* All Text In Our WebPage 
//         let resultItem = document.querySelectorAll('.item');
//         for (let i = 0; i < resultItem.length; i++) {
//             resultItem[i].style.color = "#b4b4b4",
//                 resultItem[i].style.background = "#121316",
//                 resultItem[i].style.border = "1px solid #505050";
//         }
//     }
//     else{
//         //* ResultBox 
//         let resultBox = document.getElementById('resultBox');
//         resultBox.style.background = "#f5f5f5",
//             resultBox.style.border = "1px solid #ccc";

//         //* ResultBox Item 
//         let resultItem = document.querySelectorAll('.item');
//         for (let i = 0; i < resultItem.length; i++) {
//             resultItem[i].style.color = "#b4b4b4",
//                 resultItem[i].style.background = "#fff";
//                 resultItem[i].style.border = "1px solid #ccc";

//         };
//     }
// }) 



//? Dark-Light Mode

let darkBtn = document.getElementById("modes");
darkBtn.addEventListener("click", function () {

    // ! Light Mode
    if (document.getElementById('modesIcon').className == "uil uil-sun") {
        document.body.style = "#fff";
        document.getElementById('modesIcon').className = "uil uil-moon";

        //* Text
        let item = document.querySelectorAll('.text');
        for (let i = 0; i < item.length; i++) {
            item[i].style.color = "#181818";
        }

        //* Navbar
        document.getElementById("navbar").style.background = "#f5f5f5ff";

        //* Mode Icons
        let modes = document.getElementById('modes');
        modes.style.background = "#fff",
            modes.style.border = "1px solid #ccc";
        document.getElementById("modesIcon").style.color = "#181818";

        let menu = document.getElementById('menu');
        menu.style.background = "#fff",
            menu.style.border = "1px solid #ccc";
        document.getElementById("menu").style.color = "#181818";

        //* SearchBox
        let search = document.getElementById("search");
        search.style.background = "#f5f5f5",
            search.style.border = "1px solid #ccc";

        //* Serach Input
        let searchInp = document.getElementById('searchInp');
        searchInp.style.background = "#fff",
            searchInp.style.borderTop = "1px solid #ccc",
            searchInp.style.borderLeft = "1px solid #ccc",
            searchInp.style.borderBottom = "1px solid #ccc";
        searchInp.addEventListener("focus", function () {
            searchInp.style.outline = "none",
                searchInp.style.borderTop = "1px solid #ccc",
                searchInp.style.borderLeft = "1px solid #ccc",
                searchInp.style.borderBottom = "1px solid #ccc";
        })

        //* Search Button
        let checkBtn = document.getElementById("checkBtn");
        checkBtn.style.background = "#23EEE4",
            checkBtn.style.borderTop = "1px solid #ccc",
            checkBtn.style.borderRight = "1px solid #ccc",
            checkBtn.style.borderBottom = "1px solid #ccc",
            checkBtn.style.borderLeft = "none";

        //* ResultBox 
        let resultBox = document.getElementById('resultBox');
        resultBox.style.background = "#f5f5f5",
            resultBox.style.border = "1px solid #ccc";

        //* All Text In Our WebPage 
        let resultItem = document.querySelectorAll('.item');
        for (let i = 0; i < resultItem.length; i++) {
            resultItem[i].style.color = "#181818",
                resultItem[i].style.background = "#fff",
                resultItem[i].style.border = "1px solid #ccc";
        }
        // //* Link 
        // let bankName = document.getElementById("bankName");
        // bankName.style.color = "#228f99";

        //* Menu Bar
        // let menuItems = document.getElementById("menuItems").style.background = "#f5f5f5";

        //* All Hr In Our WebPage
        let border = document.querySelectorAll('.border');
        for (let i = 0; i < border.length; i++) {
            border[i].style.border = "#1px solid #202020";
        }
        // * SideBar
        let sideBar = document.getElementById("sideBar");
        sideBar.style.background = "#f5f5f5";

        let close = document.getElementById("close");
        close.style.background = "#fff",
        close.style.border  = "1px solid #ccc",
        close.style.color = "#181818";

        let sideBarsA = document.querySelectorAll('.anchor');
        for (let i = 0; i < sideBarsA.length; i++) {
            // sideBarsA[i].style.color = "#b4b4b4",
            sideBarsA[i].style.background = "#fff",
            sideBarsA[i].style.border = "1px solid #ccc";
        }
    }
    //! Dark Mode
    else {
        //* Changing Icon Class 
        document.getElementById('modesIcon').className = "uil uil-sun";

        //* All Text In Our WebPage 
        document.body.style.background = "#121316";
        let item = document.querySelectorAll('.text');
        for (let i = 0; i < item.length; i++) {
            item[i].style.color = "#b4b4b4";

        }

        //* Navbar
        document.getElementById("navbar").style.background = "#191919ef";

        //* Mode Icons
        let modes = document.getElementById('modes');
        modes.style.background = "#181818",
            modes.style.border = "1px solid #505050",
            modes.style.color = "#b4b4b4";
        document.getElementById("modesIcon").style.color = "#b4b4b4";

        let menu = document.getElementById('menu');
        menu.style.background = "#181818",
            menu.style.border = "1px solid #505050";

        //* SearchBox
        let search = document.getElementById("search");
        search.style.background = "#181818",
            search.style.border = "1px solid #505050";

        //* Serach Input
        let searchInp = document.getElementById('searchInp');
        searchInp.style.background = "#121316",
            searchInp.style.borderTop = "1px solid #505050",
            searchInp.style.borderLeft = "1px solid #505050",
            searchInp.style.borderBottom = "1px solid #505050";
        searchInp.addEventListener("focus", function () {
            searchInp.style.outline = "none",
                searchInp.style.borderTop = "1px solid #505050",
                searchInp.style.borderLeft = "1px solid #505050",
                searchInp.style.borderBottom = "1px solid #505050";
        })

        //* Search Button
        let checkBtn = document.getElementById("checkBtn");
        checkBtn.style.background = "#23EEE4",
            checkBtn.style.borderTop = "1px solid #505050",
            checkBtn.style.borderRight = "1px solid #505050",
            checkBtn.style.borderBottom = "1px solid #505050",
            checkBtn.style.borderLeft = "none";

        //* ResultBox 
        let resultBox = document.getElementById('resultBox');
        resultBox.style.background = "#181818",
            resultBox.style.border = "1px solid #505050";

        //* ResultBox Item 
        let resultItem = document.querySelectorAll('.item');
        for (let i = 0; i < resultItem.length; i++) {
            resultItem[i].style.color = "#b4b4b4",
                resultItem[i].style.background = "#121316";
            resultItem[i].style.border = "1px solid #505050";

        };

        //* Link 
        // let bankName = document.getElementById("bankName");
        // bankName.style.color = "#228f99";

        //* Menu Bar
        // let menuItems = document.getElementById("menuItems").style.background = "#181818";



        // //* All Text In Our WebPage 
        // let links = document.querySelectorAll('.link');
        // for (let i = 0; i < links.length; i++) {
        //     links[i].style.color = "#b4b4b4",
        //     links[i].style.background = "#181818";
        // }

        //* All Hr In Our WebPage
        let border = document.querySelectorAll('.border');
        for (let i = 0; i < border.length; i++) {
            border[i].style.background = "#505050";
        }

        //* sideBar 
        let sideBar = document.getElementById("sideBar");
        sideBar.style.background = "#121316";

        let close = document.getElementById("close");
        close.style.background = "#181818",
        close.style.border  = "1px solid #414141",
        close.style.color = "#b4b4b4";

        let sideBarsA = document.querySelectorAll('.anchor');
        for (let i = 0; i < sideBarsA.length; i++) {
            // sideBarsA[i].style.color = "#b4b4b4",
            sideBarsA[i].style.background = "#181818",
            sideBarsA[i].style.border = "1px solid #414141";
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