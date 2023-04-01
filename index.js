const cardsList = document.getElementById('cardsList');
const carousel1 = document.getElementById('carousel-show');
const cards = document.getElementById('cards');
const contactUs = document.getElementById('contactUs');
const contactForm = document.getElementById('contactForm');
const categ = document.getElementById('categ');
const homeCardList = document.getElementById('homeCardsList');
const offcanCart = document.getElementById('offcan-cart');
const badge = document.getElementById('bg');
const badge1 = document.getElementById('bg1');
const spin = document.getElementById('spin');
const log = document.getElementById('log');
const sign = document.getElementById('sign');
const clse = document.getElementById('cls');
const clse1 = document.getElementById('cls1');
let inputFirstName = document.getElementById("fn");
let inputLastName = document.getElementById("ln");
let inputEmail = document.getElementById("eml");
let inputPswrd = document.getElementById("pswrd");
let cnfrmPswrd = document.getElementById("cnfrmPswrd");
let email = document.getElementById("email");
let pswrd = document.getElementById("pswrdlog");
let pic = document.getElementById("pic");
let underline1 = document.getElementById("1");
let underline2 = document.getElementById("2");
let upload = document.getElementById("inputGroupFile04");
let logInBtn = document.getElementById("logInBtn");
let profileSignOut = document.querySelector(".subm1");
let signOutDiv = document.querySelector(".signOutDiv");
const quantityInput = document.querySelector('.quantity-input');
const orderThings = document.querySelector('.order-items');
const ordersPage = document.querySelector('.orders');
const closeCan = document.querySelector('.canvas-close');
const toastLiveExample = document.getElementById('liveToast')
const toast4 = document.getElementById('liveToast4')


// Get the plus and minus buttons


///////////////// SignOut Profile //////////////

const signOutProfile = () => {
    localStorage.setItem('cnfrmUser', JSON.stringify({ eml: '', pswrd: '' }));
    location.reload();
}

////////////// Constants //////////////////

let ObjItem;
localStorage.setItem('itemsInCart', JSON.stringify([]));
localStorage.setItem('orderedItems', JSON.stringify([]));
localStorage.setItem('haveAcc', 0)


/////////////// clothes Category //////////////

const categoryClothes = () => {
    ordersPage.classList.add('d-none');
    spin.classList.remove('d-none');
    carousel1.classList.add('d-none');
    contactUs.classList.add('d-none');
    contactForm.classList.add('d-none');
    cards.classList.add('d-none');
    underline1.classList.remove('underline');

    setTimeout(() => {

        spin.classList.add('d-none');
        cards.classList.remove('d-none');



    }, 500);
    fetch('clotheItem.json')
        .then(response => response.json())
        .then(data => {
            ObjItem = data;
            rendringItems(data, 'Clothes');
        });
    window.scrollTo(0, 0);

}


/////////////// Shoes Category //////////////

const categoryShoes = () => {
    ordersPage.classList.add('d-none');
    spin.classList.remove('d-none');
    carousel1.classList.add('d-none');
    contactUs.classList.add('d-none');
    contactForm.classList.add('d-none');
    cards.classList.add('d-none');
    underline1.classList.remove('underline');

    setTimeout(() => {

        spin.classList.add('d-none');
        cards.classList.remove('d-none');



    }, 500);
    fetch('shoesItems.json')
        .then(response => response.json())
        .then(data => {
            ObjItem = data;
            rendringItems(data, 'Shoes');
        });
    window.scrollTo(0, 0);
}


/////////////// Jeans Category //////////////

const categoryJeans = () => {
    ordersPage.classList.add('d-none');
    spin.classList.remove('d-none');
    carousel1.classList.add('d-none');
    contactUs.classList.add('d-none');
    contactForm.classList.add('d-none');
    cards.classList.add('d-none');
    underline1.classList.remove('underline');

    setTimeout(() => {

        spin.classList.add('d-none');
        cards.classList.remove('d-none');


    }, 500);
    fetch('jeansItems.json')
        .then(response => response.json())
        .then(data => {
            ObjItem = data;
            rendringItems(data, 'Jeans');
        });
    window.scrollTo(0, 0);
}



/////////////// Page Load Cards Render  //////////////

window.addEventListener('load', () => {
    console.log(JSON.parse(this.localStorage.getItem('cnfrmUser')));
    if (JSON.parse(this.localStorage.getItem('user')) == null) {
        this.localStorage.setItem('user', JSON.stringify({
            fName: '',
            lName: '',
            email: '',
            pswrd: '',
            cnfrm: ''
        }));
    }
    if (JSON.parse(this.localStorage.getItem('cnfrmUser')) == null) {
        this.localStorage.setItem('cnfrmUser', JSON.stringify({ eml: '', pswrd: '' }));
    }

    let cnfrmUser = JSON.parse(this.localStorage.getItem('cnfrmUser'));
    let alreadyUser = JSON.parse(this.localStorage.getItem('user'));

    console.log('Page loaded');
    badge.classList.add('d-none');
    badge1.classList.add('d-none')
    ordersPage.classList.add('d-none');
    sign.classList.remove('d-none');
    underline1.classList.add('underline');
    pic.classList.add('d-none');
    homeCardList.classList.remove('d-none');
    window.scrollTo(0, 0);
    if (cnfrmUser.eml === alreadyUser.email && cnfrmUser.pswrd === alreadyUser.pswrd) {
        // console.log(cnfrmUser);
        // console.log(alreadyUser);
        email.value = cnfrmUser.eml;
        pswrd.value = cnfrmUser.pswrd;
        // logInBtn.click();
    }
    categoryHomeCards();
});




/////////////// Home Page Cards //////////////

const categoryHomeCards = () => {
    ordersPage.classList.add('d-none');
    spin.classList.remove('d-none');
    carousel1.classList.add('d-none');
    contactUs.classList.add('d-none');
    contactForm.classList.add('d-none');
    cards.classList.add('d-none');


    setTimeout(() => {

        spin.classList.add('d-none');
        carousel1.classList.remove('d-none');
        fetch('homeCards.json')
            .then(response => response.json())
            .then(data => {
                ObjItem = data;
                rendringItems(data, 'homeCards');
            });

    }, 500);

}



/////////////// Render Components //////////////

const rendringItems = (data, Category) => {
    // console.log(data);
    categ.innerHTML = `<span
    class="border border-dark text-bg  ps-2 py-1 text-light">
    Category </span><span class="text-bg-light  text-dark py-1 pe-2 ps-1 border border-dark"> ${Category}</span>`
    let listHTML = '';

    data.forEach((item, index) => {
        listHTML += `
                    <div class="card mb-2">
                            <img src=${item.image} class="card-img-top imgHeight" alt="...">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <p class="card-title d-inline text-secondary">${item.type}</p>
                                    <p class="card-title text-secondary d-inline ">${item.brand}</p>
                                </div>
                                <p class="card-text text-secondary clr">
                                   $${item.price}
                                </p>
                                <div class="d-flex justify-content-between clr1 btn-pair">
                                    <button class="btn btn-light text-bg clr1 border poppin butto" 
                                        onClick="buyProduct(${index},'card') " id="liveToastBtn">
                                        <i class="fa-solid fa-bag-shopping clr1 text-black "></i>
                                        Order Now
                                    </button>
                                    <button class="btn border clr1 text-bg poppin" type="button" onClick="cnsl('${index}')">
                                        <i class="fa-solid fa-cart-shopping clr1 " ></i>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                     `;
    });

    cardsList.innerHTML = listHTML;
    homeCardList.innerHTML = listHTML;

}


/////////////////// Buy Product /////////////////

function buyProduct(index, type) {
    if (localStorage.getItem('haveAcc') == 1) {
        let items = JSON.parse(localStorage.getItem('orderedItems'));
        let cartItems = JSON.parse(localStorage.getItem('itemsInCart'));
        if (type === 'card') {
            // console.log(ObjItem[index]);
            items.push({ ...ObjItem[index], 'qty': 1 });
            // console.log(items);
        }
        else {
            items.push(cartItems[index]);
            // console.log(items);
        }
        localStorage.setItem('orderedItems', JSON.stringify(items))
        orderThings.classList.remove('d-none')
        badge1.classList.remove('d-none');
        let inHtml = '';
        items.forEach((item, index) => {
            inHtml += `
                <div class="d-flex flex-wrap position-relative m-md-5 mb-3 ordr border p-4">
                    <img src=${item.image} class="flex-shrink-0 me-2" alt="...">
                    <div class="ms-md-4">
                        <h5 class="mt-1 fw-bolder fs-3 poppin ">${item.type}</h5>
                            <div class="h6 poppin">QUANTITY : ${item.qty}</div>
                            <div class=" h6 poppin">PRICE : $ ${item.price}</div>
                        <div class="h6 poppin">TOTAL : $ ${(item.qty * item.price).toFixed(2)}</div>
                        <div class="h6 poppin text-success">ORDER STATUS : &nbsp;&nbsp;&nbsp;&nbsp;✔</div>
                    </div>
                </div>
            `
        })

        orderThings.innerHTML = inHtml;

        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
    }
    else {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast4);
        toastBootstrap.show()
    }
}


//////////////////// Show Orders ////////////////

function showOrders() {
    spin.classList.remove('d-none');
    contactUs.classList.add('d-none');
    contactForm.classList.add('d-none');
    cards.classList.add('d-none');
    carousel1.classList.add('d-none');
    ordersPage.classList.add('d-none')
    closeCan.click();
    setTimeout(() => {
        spin.classList.add('d-none');
        ordersPage.classList.remove('d-none')
    }, 500);
    let items = JSON.parse(localStorage.getItem('orderedItems'));
    if (items.length == 0) {
        orderThings.classList.remove('d-none');
        orderThings.innerHTML = `<div class="text-center my-5 fs-3 poppin"> NO ORDERS YET... 😒</div>`;
    }
}


//////////////////// Send Item Cart ////////////////
const cnsl = (index) => {

    if (localStorage.getItem('haveAcc') == 1) {

        badge.classList.remove('d-none');
        let data = ObjItem[index];
        let found = false;
        let cartItems = JSON.parse(localStorage.getItem('itemsInCart'));

        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === data.id) {
                cartItems[i].qty++;
                found = true;
                break
            }
        }
        if (found === false) {
            data.qty = 1;
            cartItems.push(data);

        }
        localStorage.setItem('itemsInCart', JSON.stringify(cartItems));


        removeAndAddCartItem();
    }
    else {
        console.log('no acc');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast4);
        toastBootstrap.show()
    }

}


////////////// Remove and Add Item to cart ////////////////


function removeAndAddCartItem() {

    let listHTML1 = '';
    let cartItems = JSON.parse(localStorage.getItem('itemsInCart'));
    cartItems = cartItems.filter(item => item.qty !== 0)
    cartItems.forEach((item, index) => {

        listHTML1 += `<div class="border border-1 py-3 container ms-md-4 my-3 d-flex flex-wrap cart-adds">
    <div>
    <img src="${item.image}" class="img-fluid cart-image text-secondary" alt="...">
    </div>
    <div class="ms-sm-4 ms-3  cart-line text-secondary">
    <div class="siz">${item.type}</div>
    <div> $ ${(item.price).toFixed(2)}</div>
    <div class="quantity-buttons mt-1">
    <button class="quantity-button quantity-minus" onClick="increaseQuantity(${item.qty},${item.id},2)">-</button>
    <input type="number" class="quantity-input"  value=${item.qty}>
    <button class="quantity-button quantity-plus" onClick="increaseQuantity(${item.qty},${item.id},1)">+</button>
    </div>
    <div class="badge bg-dark text-wrap mt-2 py-2" id="liveToastBtn1" onClick="buyProduct(${index},'cart')" style="max-width: 6rem;">
    Order Now
    </div>
    </div>
    <button type="button" class="btn-close align-self-start ms-3 " onClick="removeItem(${item.id})" aria-label="Close"></button>
    </div>`;
    });

    offcanCart.innerHTML = listHTML1;

}

///////////////// Increment /////////////

function increaseQuantity(qty, id, nmb) {
    // console.log(qty);
    // console.log(nmb);
    let cartItems = JSON.parse(localStorage.getItem('itemsInCart'));

    // console.log(cartItems[cartItems.length - 1]);

    cartItems = cartItems.filter((item) => {
        if (item.id !== id) {
            return item;
        }
        else {
            switch (nmb) {
                case 1:
                    return item.qty++
                default:
                    return item.qty--
            }
        }
    }
    );

    // console.log(cartItems);
    localStorage.setItem('itemsInCart', JSON.stringify(cartItems))
    removeAndAddCartItem();
}


////////////////// Clear Cart ////////////////

const clearCart = () => {

    localStorage.setItem('itemsInCart', JSON.stringify([]));
    offcanCart.innerHTML = ' ';
    badge.classList.add('d-none');
}

///////////////// Remove Item from Cart ///////////

const removeItem = (id) => {
    let cartItems = JSON.parse(localStorage.getItem('itemsInCart'))
    cartItems = cartItems.filter(item => item.id !== id);

    if (cartItems.length == 0) {

        badge.classList.add('d-none');
    }
    localStorage.setItem('itemsInCart', JSON.stringify(cartItems));
    removeAndAddCartItem();
}


////////////////// Sign Up function ////////////

function onSignUp(event) {

    event.preventDefault();
    let enterUser = {
        fName: inputFirstName.value,
        lName: inputLastName.value,
        email: inputEmail.value,
        pswrd: inputPswrd.value,
        cnfrm: cnfrmPswrd.value
    }
    clse1.click();
    log.click();
    localStorage.setItem('user', JSON.stringify(enterUser));
}



////////////////// Login Handler ///////////////


function logInHandler(event) {

    event.preventDefault();
    let logUSer = {
        eml: email.value,
        pswrd: pswrd.value
    }
    // console.log(logUSer);
    localStorage.setItem('cnfrmUser', JSON.stringify(logUSer));
    let user = JSON.parse(localStorage.getItem('user'))
    // console.log(user);
    if (user.email === logUSer.eml && user.pswrd === logUSer.pswrd) {
        // console.log('Login');
        clse.click();
        pic.classList.remove('d-none');
        sign.classList.add('d-none');
        log.classList.add('d-none');
        localStorage.setItem('haveAcc', 1)
    }
    else {
        alert(`User doesn't exist`)
        console.log('User Not Found !!');
        localStorage.setItem('haveAcc', 0)
    }
    email.value = '';
    pswrd.value = '';

    signOutDiv.innerHTML = `<img src="images/abd.jpeg" alt="profile img" class="nav-img1 me-2 align-self-center">
                            <div class="d-flex flex-column mt-2">
                                <p class=" mb-0">${user.fName.charAt(0).toUpperCase() + user.fName.slice(1).toLowerCase()} ${user.lName.charAt(0).toUpperCase() + user.lName.slice(1).toLowerCase()}</p>
                                <small>${user.email}</small>
                            </div>
                            <button type="button" class="btn-close ms-5" aria-label="Close"></button>`
}


/////////////// Open Home Page //////////////

const openHome = () => {
    underline1.classList.add('underline');
    underline2.classList.remove('underline');
    categoryHomeCards();

}

/////////////// Open Contact Us Page //////////////

const openContact = () => {

    carousel1.classList.add('d-none');
    contactUs.classList.remove('d-none');
    contactForm.classList.remove('d-none');
    cards.classList.add('d-none');
    ordersPage.classList.add('d-none')
    underline1.classList.remove('underline');
    underline2.classList.add('underline');

}


///////////////// Carousel interval /////////////

const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 3000,
    touch: false
})



/////////////// SignUp /////////////////////////

function signUp() {
    clse.click();
    sign.click();
}

/////////////// Login /////////////////////////

function logIn() {
    clse1.click();
    log.click();

}

















