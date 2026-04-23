// ===== PARTICLES =====
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*3,
        dx:(Math.random()-0.5)*2,
        dy:(Math.random()-0.5)*2
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        p.x += p.dx;
        p.y += p.dy;

        if(p.x<0||p.x>canvas.width) p.dx *= -1;
        if(p.y<0||p.y>canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="#00ffe5";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}
animate();


// ===== TYPING =====
let text = "devOps students | Mohd Maviya 🚀";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,70);
    }
}
typing();


// ===== FORM =====
document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let msg = document.getElementById("msg").value;

    if(!name || !email || !phone || !msg){
        alert("Fill all fields!");
        return;
    }

    localStorage.setItem("maviyaData", JSON.stringify({name,email,phone,msg}));

    showToast("Message Saved Successfully!");
    this.reset();
});


// ===== TOAST =====
function showToast(msg){
    document.getElementById("toast").innerHTML =
    `<p style="background:#00ffe5;color:black;padding:10px;border-radius:6px;">
        ${msg}
    </p>`;

    setTimeout(()=>document.getElementById("toast").innerHTML="",3000);
}


// ===== THEME =====
function toggleTheme(){
    document.body.classList.toggle("light");
}


// ===== RESPONSIVE =====
window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});