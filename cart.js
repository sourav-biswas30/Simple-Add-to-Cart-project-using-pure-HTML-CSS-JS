/*const product=[
    {
        id:0,
        title: 'Yamaha F310',
        image: 'https://www.guitaroctave.com/wb/wp-content/uploads/2021/11/Yamaha-F310-with-Fishman-EQ-01.webp',
        price: 1300,
    },
    {
        id:1,
        title: 'Deviser L570',
        image:'',
        price: 8500,
    },
    {
        id:2,
        title: 'Signature',
        image:'',
        price: 5000,
    },
    {
        id:3,
        title: 'Axe',
        image:'',
        price: 7000,
    }

];
*/

const product = [
    {
        id: 0,
        image: 'https://www.guitaroctave.com/wb/wp-content/uploads/2021/11/Yamaha-F310-with-Fishman-EQ-01.webp',
        title: 'Yamaha F310',
        price: 13000,
    },
    {
        id: 1,
        image: 'https://ukulelecenterbd.com/wp-content/uploads/2018/12/HTB1BysJJVXXXXcKXFXXq6xXFXXXh.png',
        title: 'Deviser L570',
        price: 8000,
    },
    {
        id: 2,
        image: 'https://musicpoint.com.bd/wp-content/uploads/2023/05/Signature-Rogu-04.jpg.webp',
        title: 'Signature Topaz',
        price: 5000,
    },
    {
        id: 3,
        image: 'https://static-01.daraz.com.bd/p/b1c8a2e206b9ffc14bb59dcc913e1d43.jpg_750x750.jpg_.webp',
        title: 'BD made desi local guitar',
        price: 2500,
    }
];



const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>৳ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "৳ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>৳ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}