const div1 = document.querySelector(".div1");

const data = [
  {
    id: 1,
    title: "Tea",
    disc: "lorem lorem",
    price: 100,
    img: "https://www.aicr.org/wp-content/uploads/2020/06/peppermint-tea-on-teacup-1417945-1200x826.jpg.webp"
  },
  {
    id: 2,
    title: "Green Tea",
    disc: "lorem lorem",
    price: 120,
    img: "https://www.datocms-assets.com/20941/1618836401-green-tea.jpeg?auto=compress&fm=jpg&w=850"
  },
  {
    id: 3,
    title: "Iced Tea",
    disc: "lorem lorem",
    price: 90,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLkA57klLDH7kVPNMOybNF-bKAVR53WvxkH_ZTD0mxeOJ0mHNf5ncxhgavI3BAfbinJk&usqp=CAU"
  },
  {
    id: 4,
    title: "Iced Tea",
    disc: "lorem lorem",
    price: 140,
    img: "https://img.freepik.com/free-photo/mug-retro-healthy-eating-straw-drink_1172-462.jpg?t=st=1732632720~exp=1732636320~hmac=51f635a5bc5f2b7ba09e684455c1ec44d1cac0b340f241878aabad8b6d3bef09&w=996"
  },
  {
    id: 5,
    title: "Limon Tea",
    disc: "lorem lorem",
    price: 160,
    img: "https://img.freepik.com/free-photo/still-life-hot-water-assortment_23-2149055825.jpg?t=st=1732638858~exp=1732642458~hmac=8dacfcee282c689913e06ae8a59a5bb67fa8467ef5b9d75ef47f321ac3bed14a&w=1060"
  },
  {
    id: 6,
    title: "Sweet Tea",
    disc: "lorem lorem",
    price: 110,
    img: "https://img.freepik.com/free-photo/glass-green-tea_23-2148170701.jpg?t=st=1732638791~exp=1732642391~hmac=3d65b80087e492dd05b93a20d3772271f8aa36496138cce7e86264b9fc9d2a58&w=1060"
  }
];

data.forEach((el) => {
  const itemHTML = `
    <div class="border-[2px] w-[220px] h-[280px] rounded-[10px] hover:shadow-2xl hover:border-[#09be2e] hover:scale-105">
      <div class="hover:border-[#09be2e] w-[200px] h-[150px] ml-[10px] mt-[8px]">
        <img class="rounded-xl" src="${el.img}" alt="">
      </div>
      <h2 class="ml-[10px] mt-[10px] hover:text-[#09be2e]">${el.title}</h2>
      <div class="flex gap-[77px] ml-[10px] mt-[5px]">
        <h3 class="hover:text-[#09be2e]">${el.disc}</h3>
        <h3 class="hover:text-[#09be2e]">${el.price}$</h3>
      </div>
      <div class="ml-[10px] mt-[20px] flex gap-[57px]">
        <button class="btn1 border-[0.1px] border-[#09be2e] rounded-[5px] text-[#09be2e] w-[60px] h-[30px] hover:bg-[#09be2e] hover:text-[#fff]" data-id="${el.id}" data-title="${el.title}">Buy</button>
        <button class="btn2 border-[0.1px] border-[#09be2e] rounded-[5px] text-[#09be2e] w-[83px] h-[30px] hover:bg-[#09be2e] hover:text-[#fff]" data-id="${el.id}">Remove</button>
      </div>
    </div>`;
  div1.innerHTML += itemHTML;
});

div1.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn1")) {
    const title = e.target.getAttribute("data-title");
    localStorage.setItem("title", title);
    alert(`You added a cup of ${title} to the cart`);
  }

  if (e.target.classList.contains("btn2")) {
    localStorage.removeItem("title");
    alert("Your purchase was removed");
  }
});
