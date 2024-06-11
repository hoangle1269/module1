let v = 1;
let chaiBia = document.getElementById("bia");
let caiGio = document.getElementById("gio");
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;

document.getElementById("diemCao").innerHTML = "DIEM CAO: " + highScore;


function leftArrowPressed() { // mũi tên trái
    caiGio.style.left = parseInt(caiGio.style.left) - 35 + 'px';
    if (parseInt(caiGio.style.left) <= 0) {
        caiGio.style.left = 0 + 'px';
    }
    // console.log('vi tri hien tai cua cai gio', parseInt(caiGio.style.left))
}

function rightArrowPressed() { // mũi tên phải
    let currentLeft = parseInt(caiGio.style.left) || 0; // Lấy vị trí hiện tại của left, nếu không có sẽ là 0
    let newLeft = currentLeft + 35; // Di chuyển sang phải 25px

    // Giới hạn di chuyển sang phải
    let maxRight = document.getElementById("gioiHan").clientWidth - 105; // Tính toán khoảng cách tối đa sang phải
    if (newLeft >= maxRight) {
        newLeft = maxRight; // Đặt vị trí mới thành vị trí tối đa nếu vượt quá
    }
    caiGio.style.left = newLeft + 'px'; // Áp dụng vị trí mới của left
}


function moveLeftRight(event) { // di chuyển trái phải
    switch (event.keyCode) {
        case 37: // Left arrow key
            leftArrowPressed();
            break;
        case 39: // Right arrow key
            rightArrowPressed();
            break;
    }
}

function doReady() { // Giỏ điều khiển trái phải
    window.addEventListener('keydown', moveLeftRight);
}

doReady();


//setInterval(() => {
setInterval(() => {
    let currentTop = parseInt(chaiBia.style.top) || 0;
    let newTop = currentTop + v;

    if (newTop + chaiBia.offsetHeight >= document.getElementById("gioiHan").clientHeight - 25) {
        document.getElementById('roiBia').play();
        alert('BEER DROPPED');
        window.location.href = "mainGame.html";
    }

    if (
        chaiBia.x + chaiBia.width >= caiGio.x &&
        chaiBia.x <= caiGio.x + caiGio.width &&
        chaiBia.y + chaiBia.height >= caiGio.y &&
        chaiBia.y <= caiGio.y + caiGio.height
    ) {
        newTop = 0;
        chaiBia.style.left = Math.random() * document.getElementById("gioiHan").clientWidth + 'px'; // cần hàm tính điểm ở đây
        document.getElementById('doBia').play();
        tinhDiem()
    }

    chaiBia.style.top = newTop + "px";

}, 1);


function tinhDiem() { // hàm tính điểm
    score += 100;
    if (score % 1000 === 0) {
        v = score / 1000;
        document.getElementById("capDo").innerHTML = "CAP DO: " + v;
    }
    if (score < 1000) {
        document.getElementById("capDo").innerHTML = "CAP DO: " + 0;
    }

    document.getElementById("diem").innerHTML = "DIEM: " + score;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore); // lưu điểm cao
        document.getElementById("diemCao").innerHTML = "DIEM CAO: " + highScore; // in ra diem cao
    }
}

document.getElementById("choiLai").addEventListener('click', function () {
    score = 0;
    v = 1;
    document.getElementById("diem").innerHTML = "Diem: " + score;
    chaiBia.style.top = '0';
});

document.getElementById("choiGame").addEventListener('click', function () {
    chaiBia.style.top = '0';
    score = 0;
    v = 1;
    document.getElementById("diem").innerHTML = "Diem: " + score;
    chaiBia.style.left = Math.random() * document.getElementById("gioiHan").clientWidth + 'px';
})

