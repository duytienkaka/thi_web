function DangNhap(event){
    event.preventDefault();
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    fetch("./data/user.json")
    .then(response => response.json())
    .then(data => {
        var kt = False;
        var type = "";
        for(let i = 0; i < data.length; i++){
            if(username == data[i].username && password == data[i].password){
                kt = True;
                type = data[i].type;
                break;
            }
        }
        if(kt == True){
            alert("Đăng nhập thành công");
            if(type == "admin"){
                window.location.href = "admin.html";
            }
            else{
                window.location.href = "index.html";
            }
        }else{
            alert("Đăng nhập không thành công");
        }
    })
}
function DangKy(event){
    event.preventDefault();
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var repassword = document.getElementById("repassword");
    fetch("./data/user.json")
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
            if(data[i].username == username){
                alert("Tài khoản đã tồn tại");
                return;
            }
        }
        alert("Đăng nhập thành công");
        var user = {"id": data.length+1, "username": username, "password": password, "email": email};
        window.location.href = "index.html";
    })
}
function ShowProduct(){
    fetch("./data/product.json")
    .then(response => response.json())
    .then(data => {
        var products = document.getElementById("products");
        for(let i = 0; i < data.length; i++){
            var div = document.createElement("product");
            var temp = "";
            temp.innerHTML = `
                <div class = "img">
                    <img src = "${data[i].image}" alt = "${data[i].title}">
                </div>
                <div class = "info">
                    <h3>${data[i].name}</h3>
                    <p>${data[i].decription}</p>
                    <span>${data[i].price}</span>
                </div>
                <div class = "buy-cart"> 
                    <button class = "btn-buy">Buy</button>
                    <button class = "cart"> Add to Cart</div>
                </div>
            `
            div.appendChild(temp);
        }
    })
}




