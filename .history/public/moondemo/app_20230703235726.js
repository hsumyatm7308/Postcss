//Start Javascript Area 
//price-range 
let rangeinput = document.querySelectorAll('.range-input input');
let priceinput = document.querySelectorAll('.price-input input');
let progress = document.querySelector('.progress-bar');
let pricegap = 1000;

rangeinput.forEach(function (input) {
    input.addEventListener('input', e => {
        let minval = parseInt(rangeinput[0].value);
        let maxval = parseInt(rangeinput[1].value);

        // let percent = (minval / rangeinput[0].max) * 100;
        // console.log(percent);

        if (maxval - minval < pricegap) {
            if (e.target.className === "range-min") {
                rangeinput[0].value = maxval - pricegap;
            } else {
                rangeinput[1].value = minval + pricegap;
            }
        } else {
            priceinput[0].value = minval;
            priceinput[1].value = maxval;
            progress.style.left = (minval / rangeinput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxval / rangeinput[1].max) * 100 + "%";
        }
    })
});
//price-range 

//Start type case
let getshowcase = document.querySelectorAll('.showcases');
let getbag = document.getElementsByClassName('bags');
// console.log(getbag)
for (var i = 0; i < getshowcase.length; i++) {
    getshowcase[i].addEventListener('click', function () {
        if (this.innerHTML === "Show All") {
            this.innerHTML = "Show Less";
        } else {
            this.innerHTML = "Show All";
        };

        //    console.log(this.previousElementSibling);
        let content = this.previousElementSibling;
        if (content.style.height) {
            content.style.height = null;
        } else {
            content.style.height = content.scrollHeight + "px";
        }

    })
}
//End type case 

//Start filter-btn show/hide 
let btnfilter = document.querySelector('.filter-btns');
let filtercontent = document.querySelector('.filter-content');
let getoverlay = document.querySelector('.overlay');
let mediasize = 768;

btnfilter.addEventListener('click', togglefilter);
getoverlay.addEventListener('click', togglefilter);

function togglefilter() {
    filtercontent.classList.toggle('show');
    getoverlay.classList.toggle('display');
}

window.addEventListener('resize', function () {
    if (window.innerWidth > mediasize) {
        resizefix();
    }
});

function resizefix() {
    if (filtercontent.classList.contains('show')) {
        togglefilter();
    }
}

//Start search case
let names = ["Case Notebook", "Case Fuck", "Case Brownie", "Case Explorer wanted", "Case Pink with girl", "Case Blone with a glass", "Girl with a cake", "Case strength above all", "Case cakes and girl", "Case Red", "Case lovely gir", "Case Santa matrysohka", "Samsung S8", "Samsung S10", "Samsung Note20", "Huawai Nova9", "Huavwai Mate40", "Huawai Mate40 Pro", "Huawai P10", "Xiomi 11", "Xiomi 11Pro", "Xiomi 12"];
let sortnames = names.sort();
console.log(sortnames);
let getsearchinput = document.querySelector('#case-search');
var height = "250px";

getsearchinput.addEventListener('keyup', function (e) {
    // console.log(e.target)
    removeelement();
    for (var i of sortnames) {
        if (i.toLowerCase().startsWith(getsearchinput.value.toLowerCase()) && getsearchinput.value !== "") {
            let newli = document.createElement('li');
            newli.classList.add('list-items');
            newli.style.cursor = "pointer";
            newli.setAttribute('onclick', 'displayname("' + i + '")');
            let word = "<b>" + i.substr(0, getsearchinput.value.length) + "</b>";
            word += i.substr(getsearchinput.value.length);
            newli.innerHTML = word;
            document.querySelector('.search-cases').appendChild(newli);

        }
    }
});

function displayname(value) {
    getsearchinput.value = value;
    removeelement();
}

function removeelement() {
    let items = document.querySelectorAll('.list-items');
    items.forEach(item => {
        item.remove();
    })
}



//End search case

//End filter-btn show/hide 

let getsorttitle = document.querySelector('.sort-titles');
let getsortprice = document.querySelector('.sort-prices');
let getsalecase = document.querySelector('.sale-cases');
let getcasebox = getsalecase.getElementsByClassName('case-boxs');
let getclearsort = document.querySelector('.clear-sort');

getclearsort.addEventListener('click', () => {
    window.location.href = window.location.href;
})

getsorttitle.addEventListener('click', function () {

    var shouldswitch = true;
    var switching = true;

    do {
        switching = false;
        var i = 0;
        for (i; i < getcasebox.length - 1; i++) {
            shouldswitch = false;
            if (getcasebox[i].innerHTML > getcasebox[i + 1].innerHTML) {
                shouldswitch = true;
                break;
            }
        }

        if (shouldswitch) {
            switching = true;
            getcasebox[i].parentElement.insertBefore(getcasebox[i + 1], getcasebox[i]);
        }
    } while (switching);

});

getsortprice.addEventListener('click', function () {
    var shouldswitch = true;
    var switching = true;

    do {
        switching = false;
        var i = 0;
        for (i; i < getcasebox.length - 1; i++) {
            shouldswitch = false;
            if (getcasebox[i].querySelector('ul li:nth-of-type(2) span:last-child').innerHTML > getcasebox[i + 1].querySelector('ul li:nth-of-type(2) span:last-child').innerHTML) {
                shouldswitch = true;
                break;
            }
        }

        if (shouldswitch) {
            switching = true;
            getcasebox[i].parentElement.insertBefore(getcasebox[i + 1], getcasebox[i]);
        }
    } while (switching);
});





// Start Cart Modal Area 
const modal = document.getElementById('cart-modal');
const iphonename = document.getElementById('iphonename');
const icartimg = document.getElementById('icartimg');
const cartprice = document.getElementById('cartprice');
const cartogprice = document.getElementById('cartogprice');
const cartdiscount = document.getElementById('cartdiscount');
const nameinstock = document.getElementById('nameinstock');
const quantity = document.getElementById('quantity');

const closecartmodal = document.querySelector('.cartclosemodal');
const addtocartbtn = document.querySelectorAll('.add-btns');
const iphonebtn = document.querySelectorAll('.iphonebtn');

const increasebtn = document.getElementById('increasebtn');
const decreasebtn = document.getElementById('decreasebtn');
const buybtn = document.getElementById('buybtn');


// shop cart 
const shopmodal = document.getElementById('shop-modal');
const shopcartbtn = document.querySelector('.shopcartbtn');

const backtoshop = document.getElementById('backtoshop');





shopcartbtn.addEventListener('click', function () {
    shopmodal.style.display = "block"
})

backtoshop.addEventListener('click', function () {
    shopmodal.style.display = "none"
})


// cart modal 
function openmodal() {
    modal.style.display = "block";
    document.body.classList.add('modal-open');
}

function closemodal() {
    modal.style.display = "none";
    document.body.classList.remove('modal-open');
}





if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}


function ready() {
    const itemremove = document.getElementsByClassName('item-remove')
    for (var i = 0; i < itemremove.length; i++) {
        var button = itemremove[i];
        button.addEventListener('click', removecartitems);
    }



    addtocartfun();
}




var cartshopbox;

var itemremove = true;


function removecartitems(event) {
    var buttonclick = event.target;
    console.log(buttonclick);

    var cartItem = buttonclick.parentElement.parentElement.parentElement;
    var itemName = cartItem.querySelector(".cart-product-title").innerText;


    cartItem.remove();

    updatetotal();



    backtoshopimg();







}






const iitems = [

    {
        isname: 'iphone-notebook-',
        iimg: './assets/img/case1.png',
        inames: 'Case NoteBook',
        iprice: '7.00',
        iogprice: '9.00'

    },

    {
        isname: 'iphone-case-fuck-',
        iimg: './assets/img/case2.png',
        inames: 'Case Fuck',
        iprice: '7.50',
        iogprice: '15.00'
    },

    {
        isname: 'iphone-case-cake-',
        iimg: './assets/img/case3.png',
        inames: 'Case Brownie',
        iprice: '8.50',
        iogprice: ''

    },


    {
        isname: 'iphone-case-explorer-wanted-',
        iimg: './assets/img/case4.png',
        inames: 'Case Explorer Wanted',
        iprice: '8.99',
        iogprice: '12.00'
    },

    {
        isname: 'iphone-case-pinkwithgirl-',
        iimg: './assets/img/case5.png',
        inames: 'Case Pink With Girl',
        iprice: '9.00',
        iogprice: '14.00'
    },

    {
        isname: 'iphone-case-blonewithglass-',
        iimg: './assets/img/case6.png',
        inames: 'Case Blone With Glass',
        iprice: '9.00',
        iogprice: ''

    },

    {
        isname: 'iphone-case-girlwithacake',
        iimg: './assets/img/case7.png',
        inames: 'Case Girl With A Cake',
        iprice: '9.90',
        iogprice: '12.99'
    },

    {
        isname: 'iphone-case-strengthaboveall',
        iimg: './assets/img/case8.png',
        inames: 'Case Strength Above All',
        iprice: '9.90',
        iogprice: ''

    },

    {
        isname: 'iphone-case-cakeandgirl',
        iimg: './assets/img/case9.png',
        inames: 'Case Cake And Girl',
        iprice: '9.90',
        iogprice: ''

    },

    {
        isname: 'iphone-case-red-',
        iimg: './assets/img/case10.png',
        inames: 'Case Red',
        iprice: '9.95',
        iogprice: ''

    },

    {
        isname: 'iphone-case-lovelygirl-',
        iimg: './assets/img/case11.png',
        inames: 'Case Lovely Girl',
        iprice: '9.90',
        iogprice: '12.99'
    },

    {
        isname: 'iphone-case-santamatrysohka-',
        iimg: './assets/img/case12.png',
        inames: 'Case Santa Matrysohka',
        iprice: '12.99',
        iogprice: '15.99'
    }

]






var buybtnclicked = true;




function addtocartfun() {

    for (var x = 0; x < addtocartbtn.length; x++) {
        (function (index) {

            var curnum = 1

            addtocartbtn[index].addEventListener('click', function () {

                openmodal();


                addcartdata(index, curnum);


                instockfun(index, curnum);



                const iphonebtn = document.querySelectorAll('.iphonebtn');
                var instock = document.getElementById('instock');
                instock.classList.add('instock');

                iphonebtn.forEach((iph) => {
                    console.log(iph.classList.remove('bg-slate-400'))
                })


                const quantity = document.getElementById('quantity');
                quantity.innerText = 1







            });
        })(x);
    }

}







function addcartdata(index, curnum) {

    // console.log(x)

    var itemsdata = iitems[index];
    var cartdiscountprice = itemsdata.iogprice - itemsdata.iprice;


    icartimg.src = itemsdata.iimg;
    iphonename.innerHTML = itemsdata.inames;
    cartprice.innerHTML = itemsdata.iprice;
    cartogprice.innerHTML = itemsdata.iogprice;
    cartdiscount.innerHTML = `<span id="cartdiscount">You saved : <span class="text-red-600">${cartdiscountprice.toFixed(2, 0)}$</span> </span>`;

    if (itemsdata.iogprice == '') {
        cartdiscount.style.display = "none";
        cartogprice.innerHTML = `<del id="cartogprice" class="text-xl mt-1 ml-2">${itemsdata.iogprice}$</del>`;

    } else {
        cartdiscount.style.display = "block";
        cartogprice.innerHTML = `<del id="cartogprice" class="text-xl mt-1 ml-2">${itemsdata.iogprice}$</del>`;

    }






}




const isnamearr = ['iphone 7', 'iphone 7 plus', 'iphone 6', 'iphone 5/5s'];


let ichoose = true;




function instockfun(index, curnum) {





    // for isphone 
    for (var i = 0; i < iphonebtn.length; i++) {
        (function (isidx) {
            iphonebtn[isidx].addEventListener('click', function () {
                this.classList.add("bg-slate-400");
                var instock = document.getElementById('instock');

                instock.classList.add('instock');

                var siblings = this.parentElement.querySelectorAll(":scope > *");
                siblings.forEach(function (sibling) {
                    if (sibling !== this) {
                        sibling.classList.remove("bg-slate-400");
                        instock.classList.remove('instock');
                        ichoose = false;
                        return ichoose;

                    }
                }, this);

                // console.log(isnamearr[isidx])

                nameinstock.innerHTML = `<span id="nameinstock">${isnamearr[isidx]}</span>`;

                var isname = isnamearr[isidx];

                var itemsdata = iitems[index];


                const itemstitle = document.getElementsByClassName('itemstitle');
                const itemsimg = document.getElementsByClassName('itemsimg');
                const itemsprice = document.getElementsByClassName('itemsprice');



                // console.log(ichoose)




                // buy part

                buybtn.addEventListener('click', function () {

                    // console.log(ichoose)

                    itemstitle[0].innerText = itemsdata.inames;
                    itemsimg[0].src = itemsdata.iimg;
                    itemsprice[0].innerText = itemsdata.iprice;





                    var itemtit = itemstitle[0].innerText;
                    var itemimg = itemsimg[0].src;
                    var itemprice = itemsprice[0].innerText;

                    var total = itemprice * curnum;


                    choosefilterarea.style.background = "transparent";
                    document.getElementById('alert').style.display = "none";

                    // shopmodal.style.display = "block";
                    closemodal();



                    addproducttocart(itemtit, itemimg, itemprice, total, curnum, index, isname);







                })





            })

        })(i);
    }






    buybtn.addEventListener('click', function () {

        if (ichoose) {
            const choosefilterarea = document.getElementById('choosefilterarea');
            choosefilterarea.style.background = "#FFDEDE";
            document.getElementById('alert').style.display = "block"


        }
    })


    //  start quantity 
    increasebtn.addEventListener('click', function () {
        ++curnum;
        quantity.innerHTML = `<span id="quantity">${curnum}</span>`;


    });

    decreasebtn.addEventListener('click', function () {
        if (curnum > 1) {
            --curnum;
        } else {
            curnum = 1;
        }
        quantity.innerHTML = `<span id="quantity">${curnum}</span>`;


    });





}









closecartmodal.addEventListener('click', () => {
    var cartitems = document.querySelectorAll('.shopcart-items')[0];
    var cartitemnames = cartitems.currentTarget;

    
    removecartitems()


    // removefirst();
    closemodal();
   

});



function backtoshopimg() {
    var cartitemcontainer = document.getElementById('shopcart-items');
    var gobackshop = document.querySelector('.gobackshop');
    var shoppingcartheader = document.querySelector('.shoppingcartheader');
    var proceedtocheck = document.querySelector('.proceedtocheck');
    var shopcarttitle = document.querySelector('.shopcarttitle');
    console.log(cartitemcontainer.children)

    if (cartitemcontainer.children.length === 0) {
        const backtoshopcontainer = document.querySelector(".backtoshopcontainer");
        backtoshopcontainer.classList.remove('hidden')
        gobackshop.classList.add('hidden')
        shoppingcartheader.classList.add('hidden')
        proceedtocheck.classList.add("hidden");
        shopcarttitle.classList.add('hidden');

    } else if (cartitemcontainer.children.length > 0) {
        const backtoshopcontainer = document.querySelector(".backtoshopcontainer");
        backtoshopcontainer.classList.add('hidden')
        gobackshop.classList.remove('hidden')
        shoppingcartheader.classList.remove('hidden')
        proceedtocheck.classList.remove('hidden');
        shopcarttitle.classList.remove('hidden');


    }
}



function addproducttocart(itemtit, itemimg, itemprice, total, curnum, index, isname) {


    cartshopbox = document.createElement('div');

    cartshopbox.classList.add('w-[99%','lg:bg-transparent','md:bg-transparent','mb-4', 'shopcartboxes');
    var cartitems = document.querySelectorAll('.shopcart-items')[0];
    var cartitemname = cartitems.querySelectorAll('.cart-product-title');

    // console.log(cartitemname)

    for (var i = 0; i < cartitemname.length; i++) {

        if (cartitemname[i].innerText === itemtit) {

            cartshopbox.remove();

            return;


        }



    }


    var itemsbox = ` 

<div class="grid lg:grid-cols-7  md:grid-cols-7 shopcartboxscr">


<div class="lg:col-span-2 md:col-span-2 h-full bg-stone-100 flex justify-start items-center shopcartboxscr-items">
    <img src="${itemimg}" class="ml-3" alt="case1" width="60px">
    <div class="ml-3">
        <h1><a href="" class="text-stone-500 lg:text-lg md:text-md cart-product-title">${itemtit}</a>
        </h1>
        <p class="text-gray-500 text-sm isvars">${isname}</p>
    </div>
</div>

<div class="lg:col-span-1 md:col-span-1 h-full bg-stone-100 flex justify-center items-center itemsprice shopcartboxscr-items">
    <span class="font-semibold ml-3 classheader">Price : </span>
    <span class="font-medium lg:text-lg md:text-md">${itemprice} $</span>
</div>

<div class="lg:col-span-1 md:col-span-1 h-full bg-stone-100 flex justify-center items-center qtycontainer shopcartboxscr-items">
    <span class="font-semibold ml-3 classheader">Qty : </span>
    
    <div class="flex justify-center items-center rounded-md lg:w-32 h-8 md:w-20">
        <div id="decreasebtn"
            class="w-10 h-full rounded-tl-md rounded-bl-md border border-gray-500 flex justify-center items-center decbtn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 12h-15" />
            </svg>

        </div>
        <div
            class="border border-gray-300 flex justify-center items-center lg:w-12 h-full md:w-10">
            <span class="font-medium qty">${curnum}</span>
        </div>
        <div id="incbtn"
            class="w-10 h-full rounded-tr-md rounded-br-md border border-gray-500 flex justify-center items-center incbtn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 text-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

        </div>
    </div>
</div>

<div class="lg:col-span-1 md:col-span-1 h-full bg-stone-100 flex justify-center items-center shopcartboxscr-items">
    <span class="font-semibold ml-3 classheader">Total : </span>
    <span class="font-medium lg:text-lg md:text-md totalqty">${curnum * itemprice} $</span>
</div>

<div  class="lg:col-span-1 md:col-span-1 h-full flex justify-center items-center item-remove shopcartboxscr-items">
    <button type="button"
        class="text-gray-500 border border-slate-400 rounded-sm hover:bg-slate-300 py-1 px-3">Remove</button>
</div>
</div>


`





    cartshopbox.innerHTML = itemsbox;
    cartitems.appendChild(cartshopbox);
    cartshopbox.getElementsByClassName('item-remove')[0].addEventListener('click', removecartitems);
    cartshopbox.getElementsByClassName('incbtn')[0].addEventListener('click', function () {
        cartqtychangeinc(event, total);



    });

    cartshopbox.getElementsByClassName('decbtn')[0].addEventListener('click', function () {
        cartqtychangedec(event, total);
    });


 

    updatetotal()
    backtoshopimg();






}






function cartqtychangeinc(event, total) {




    var targetQtyElement = event.currentTarget.parentElement.querySelector('.qty');
    console.log(targetQtyElement);

    let currentQty = parseInt(targetQtyElement.textContent);
    ++currentQty;
    targetQtyElement.textContent = currentQty;

    


    var targetTotalElement = event.currentTarget.parentElement.parentElement.nextElementSibling.querySelector('.totalqty');
    console.log(targetTotalElement);

    var updatedTotal = (total * currentQty).toFixed(2, 0) + "$";
    targetTotalElement.textContent = updatedTotal;



    updatetotal();




}



function cartqtychangedec(event, total) {



    var targetQtyElement = event.currentTarget.parentElement.querySelector('.qty');
    console.log(targetQtyElement);

    // Update the quantity value
    let currentQty = parseInt(targetQtyElement.textContent);
    // currentQty--;
    if (currentQty > 1) {
        currentQty--;
    } else {
        currentQty = 1;
    }
    targetQtyElement.textContent = currentQty;


    console.log(currentQty)


    var targetTotalElement = event.currentTarget.parentElement.parentElement.nextElementSibling.querySelector('.totalqty');
    console.log(targetTotalElement);

    var updatedTotal = (total * currentQty).toFixed(2, 0) + "$";
    targetTotalElement.textContent = updatedTotal;


    updatetotal();


}











function updatetotal() {
  
    
    const shopcartitem = document.getElementsByClassName('shopcart-items')[0];
    const shopcartboxes = shopcartitem.getElementsByClassName('shopcartboxes');
    var untotal = 0;

    for (var i = 0; i < shopcartboxes.length; i++) {
        var shopcartbox = shopcartboxes[i];
        var totalElement = shopcartbox.getElementsByClassName('totalqty')[0];
        var total = parseFloat(totalElement.innerText.replace("$", ""));
        untotal = (untotal +  total);

        var subtotal = untotal / 2;
    }

    console.log("Sum of all totals: " + subtotal.toFixed(2) + "$");
    document.getElementsByClassName('subtotal')[0].innerText = subtotal.toFixed(2) + "$";

  

    console.log()
}












var backshop = document.getElementById('continshop');
backshop.addEventListener('click', function () {
    shopmodal.style.display = "none"
});






// start delivery Method 

const deliinput = document.getElementsByTagName('input');
const delimthone = document.querySelector('.delimthone');
const delimthtwo = document.querySelector('.delimthtwo');
const delimththree = document.querySelector('.delimththree');
const delimethod = document.querySelectorAll('.delimethod');




const deliverybtn = document.querySelectorAll('.deliverybtn');


const billingadd = document.querySelector(".billingaddresscontainer");



const getlabel = document.getElementsByTagName('label');

for (var i = 0; i < getlabel.length; i++) {
    console.log(getlabel[i]);

    (function (index) {
        getlabel[index].addEventListener('click', function (e) {
            console.log(e.target.value);

            const clickedElement = getlabel[index];
            const clickedSibling = clickedElement.nextElementSibling;

            for (var j = 0; j < getlabel.length; j++) {
                if (j === index) {
                    clickedSibling.classList.remove('hidden');
                } else {
                    const sibling = getlabel[j].nextElementSibling;
                    if (sibling) {
                        sibling.classList.add('hidden');
                    }
                }
            }


            billingadd.classList.remove('hidden')
        });
    })(i);
}








var getpages = document.getElementsByClassName('page');
var ctntoship1 = document.getElementById('ctntoship1');


var objkeys = [
    'email',
    'firstname',
    'lastname',
    'phone',
    'address',
];
var datas = [];
let curidx = 0;



function showpage(num) {

    getpages[num].classList.remove("hidden");

}

function gonow(num) {

    if (num === 1 && !formvalid()) return false;

    getpages[curidx].classList.add("hidden");
    curidx = curidx + num;

    showpage(curidx);
}

function* genfun() {
    var index = 0;

    while (index < objkeys.length) {
        yield index++;
    }
}

let gen = genfun();
console.log(gen.next().value)

function formvalid() {
    var valid = true;

    var getcurrinput = getpages[curidx].querySelectorAll("input");
    console.log(getcurrinput);

    for (var x = 0; x < getcurrinput.length; x++) {
        // console.log(getcurrinput[x].value);
        if (getcurrinput[x].value === '') {

            valid = false;
        } else {
            const keys = objkeys[gen.next().value];
            const values = getcurrinput[x].value;
            datas.push({ [keys]: values });
        }

    }



    return valid;

}



// end delivery method

// End Modal Area



//End Javascript Area 