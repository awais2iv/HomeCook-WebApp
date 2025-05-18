import React from 'react';
import Section from '../../components/Menu/section';
import ItemCard from '../../components/Menu/itemcard';
import homebackgroud from '../../assets/homebackground.png';


import AboutBackground from '../../assets/about-background.png';

// Menu data
const menuData = [
    {
        "day": "Monday",
        "items": [
          { "name": "Chicken Biryani", "image": "biryani.jpg", "price": 300, "serves": 2 },
          { "name": "Daal Chawal", "image": "daal_chawal.jpg", "price": 180, "serves": 1 },
          { "name": "Beef Nihari", "image": "nihari.jpg", "price": 350, "serves": 2 },
          { "name": "Chicken Caesar Salad", "image": "caesar_salad.jpg", "price": 250, "serves": 1 },
          { "name": "Spaghetti Bolognese", "image": "spaghetti.jpg", "price": 320, "serves": 2 },
          { "name": "Roti (2 pcs)", "image": "roti.jpg", "price": 30, "serves": 1 }
        ]
      },
      {
        "day": "Tuesday",
        "items": [
          { "name": "Chicken Karahi", "image": "karahi.jpg", "price": 350, "serves": 2 },
          { "name": "Palak Paneer", "image": "palak_paneer.jpg", "price": 270, "serves": 2 },
          { "name": "Beef Burger with Fries", "image": "burger_fries.jpg", "price": 300, "serves": 1 },
          { "name": "Chicken Alfredo Pasta", "image": "alfredo.jpg", "price": 330, "serves": 2 },
          { "name": "Greek Salad", "image": "greek_salad.jpg", "price": 220, "serves": 1 },
          { "name": "Garlic Naan", "image": "garlic_naan.jpg", "price": 40, "serves": 1 }
        ]
      },
      {
        "day": "Wednesday",
        "items": [
          { "name": "Aloo Gosht", "image": "aloo_gosht.jpg", "price": 300, "serves": 2 },
          { "name": "Vegetable Pulao", "image": "veg_pulao.jpg", "price": 200, "serves": 2 },
          { "name": "Grilled Chicken Sandwich", "image": "grilled_sandwich.jpg", "price": 250, "serves": 1 },
          { "name": "Shami Kebab", "image": "shami_kebab.jpg", "price": 180, "serves": 1 },
          { "name": "Minestrone Soup", "image": "minestrone.jpg", "price": 220, "serves": 1 },
          { "name": "Chapati (2 pcs)", "image": "chapati.jpg", "price": 25, "serves": 1 }
        ]
      },
      {
        "day": "Thursday",
        "items": [
          { "name": "Chicken Handi", "image": "chicken_handi.jpg", "price": 340, "serves": 2 },
          { "name": "Chana Masala", "image": "chana_masala.jpg", "price": 200, "serves": 2 },
          { "name": "Fish & Chips", "image": "fish_chips.jpg", "price": 370, "serves": 1 },
          { "name": "Lasagna", "image": "lasagna.jpg", "price": 350, "serves": 2 },
          { "name": "Russian Salad", "image": "russian_salad.jpg", "price": 200, "serves": 1 },
          { "name": "Paratha (1 pc)", "image": "paratha.jpg", "price": 40, "serves": 1 }
        ]
      },
      {
        "day": "Friday",
        "items": [
          { "name": "Beef Pulao", "image": "beef_pulao.jpg", "price": 330, "serves": 2 },
          { "name": "Mix Sabzi", "image": "mix_sabzi.jpg", "price": 190, "serves": 2 },
          { "name": "Pizza Margherita", "image": "pizza.jpg", "price": 400, "serves": 2 },
          { "name": "Fettuccine Alfredo", "image": "fettuccine.jpg", "price": 330, "serves": 2 },
          { "name": "Fruit Salad", "image": "fruit_salad.jpg", "price": 150, "serves": 1 },
          { "name": "Tandoori Naan", "image": "naan.jpg", "price": 35, "serves": 1 }
        ]
      },
      {
        "day": "Saturday",
        "items": [
          { "name": "Mutton Korma", "image": "mutton_korma.jpg", "price": 400, "serves": 2 },
          { "name": "Kofta Curry", "image": "kofta.jpg", "price": 320, "serves": 2 },
          { "name": "Club Sandwich", "image": "club_sandwich.jpg", "price": 280, "serves": 1 },
          { "name": "Fried Chicken", "image": "fried_chicken.jpg", "price": 300, "serves": 1 },
          { "name": "Pasta Salad", "image": "pasta_salad.jpg", "price": 220, "serves": 1 },
          { "name": "Roti (2 pcs)", "image": "roti.jpg", "price": 30, "serves": 1 }
        ]
      },
      {
        "day": "Sunday",
        "items": [
          { "name": "Haleem", "image": "haleem.jpg", "price": 300, "serves": 2 },
          { "name": "Bhindi Masala", "image": "bhindi.jpg", "price": 200, "serves": 2 },
          { "name": "Chicken Nuggets", "image": "nuggets.jpg", "price": 250, "serves": 1 },
          { "name": "Mac & Cheese", "image": "mac_cheese.jpg", "price": 300, "serves": 2 },
          { "name": "Coleslaw", "image": "coleslaw.jpg", "price": 150, "serves": 1 },
          { "name": "Chapati (2 pcs)", "image": "chapati.jpg", "price": 25, "serves": 1 }
        ]
      }
];

const Menu = () => {
  // Get the current day of the week
  const todayIndex = new Date().getDay();

  // Get today's day name (e.g., Sunday, Monday, etc.)
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = dayNames[todayIndex];

  // Filter the menu data for today's day
  const todayMenu = menuData.find(menu => menu.day === today);

  return (
    <div>
        <div className='home-bannerImage-container'>
                <img src={homebackgroud} alt="" srcset="" /> </div>
      <Section />
      <div className='menu-header'>
        <h2>Today's Menu</h2></div>
       
      <div className="menu-card-container">
      
        {todayMenu && todayMenu.items.map((item, index) => (
          <ItemCard
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
            serves={item.serves}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
