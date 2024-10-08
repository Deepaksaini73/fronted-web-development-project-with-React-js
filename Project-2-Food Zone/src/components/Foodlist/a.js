const MenuData = [
  {
    "name": "Butter Chicken",
    "price": 150,
    "text": "A rich and creamy chicken curry made with butter, cream, and a blend of aromatic spices.",
    "image": "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Paneer Tikka",
    "price": 299,
    "text": "Chunks of paneer marinated in yogurt and spices, then grilled to perfection.",
    "image": "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Aloo Gobi",
    "price": 399,
    "text": "A delicious dry curry made with potatoes and cauliflower in a blend of Indian spices.",
    "image": "https://cookingwithalisa.com/wp-content/uploads/2021/05/India-Aloo-Gobi-plated.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Chole Bhature",
    "price": 450,
    "text": "Spicy chickpeas served with deep-fried bread called 'bhature'.",
    "image": "https://en-media.thebetterindia.com/uploads/2022/08/294156779_1082267416022212_8006411537588067133_n-1_11zon-1660981126.jpg",
    "type": "Breakfast/Lunch"
  },
  {
    "name": "Dal Makhani",
    "price": 299,
    "text": "A creamy and buttery lentil curry made with black lentils, kidney beans, and spices.",
    "image": "https://th.bing.com/th/id/OIP.S0XxKZ1tCiqPj7Ry1_6H4QHaHa?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Biryani",
    "price": 149,
    "text": "A flavorful rice dish cooked with aromatic spices and marinated meat (chicken, mutton, or vegetables).",
    "image": "https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Samosa",
    "price": 150,
    "text": "Crispy pastry filled with spiced potatoes, peas, and sometimes meat, served with chutney.",
    "image": "https://www.dipitt.com/wp-content/uploads/2021/03/Samosa-Banner-1536x1008.jpg",
    "type": "Snack"
  },
  {
    "name": "Masoor Dal",
    "price": 199,
    "text": "A simple and flavorful lentil curry made with red lentils, turmeric, and cumin.",
    "image": "https://th.bing.com/th/id/OIP.SzCUXtfvAeILxJkjlaYvJQHaHa?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Naan",
    "price": 199,
    "text": "A traditional soft, fluffy Indian flatbread baked in a tandoor, served with curries.",
    "image": "https://www.wellplated.com/wp-content/uploads/2021/02/Traditional-Naan-Recipe.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Palak Paneer",
    "price": 149,
    "text": "Paneer cubes cooked in a rich and creamy spinach gravy.",
    "image": "https://foreignfork.com/wp-content/uploads/2023/07/EasyPalakPaneer-FEATURE-1024x1024.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Tandoori Chicken",
    "price": 199,
    "text": "Chicken marinated in yogurt and spices, then grilled in a traditional tandoor oven.",
    "image": "https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Methi Thepla",
    "price": 299,
    "text": "A traditional Gujarati flatbread made with fenugreek leaves, spices, and whole wheat flour.",
    "image": "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/jan-5/Methi_Thepla_Fenugreek_Bread_Recipe-0858.jpg",
    "type": "Breakfast"
  },
  {
    "name": "Rogan Josh",
    "price": 349,
    "text": "A rich and flavorful lamb curry made with yogurt, garlic, and a blend of Kashmiri spices.",
    "image": "https://recipes.timesofindia.com/photo/53192600.cms",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Dhokla",
    "price": 199,
    "text": "A savory steamed snack made from fermented rice and chickpea flour, often served with chutney.",
    "image": "https://th.bing.com/th/id/OIP.da-z2cA87a2vmCXQSm3ZZAHaE8?rs=1&pid=ImgDetMain",
    "type": "Breakfast"
  },
  {
    "name": "Vada Pav",
    "price": 49,
    "text": "A Mumbai street food classic: a spiced potato fritter served in a soft bun with chutneys.",
    "image": "https://1.bp.blogspot.com/-rf-BScvER2c/XoF7TsGF68I/AAAAAAAARIQ/IjiQIIucQYY3v3tZLWIUvDIeNNzoJ525QCLcBGAsYHQ/s1600/Vada-Pav-00011.jpg",
    "type": "Snack"
  },
  {
    "name": "Pav Bhaji",
    "price": 199,
    "text": "A spiced mashed vegetable curry served with buttered pav (bread rolls).",
    "image": "https://th.bing.com/th/id/OIP.fRZW1j0fLNdRzYyxRcu8wgHaFj?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Lassi",
    "price": 49,
    "text": "A traditional yogurt-based drink, either sweet or salted, often flavored with fruit or spices.",
    "image": "https://pipingpotcurry.com/wp-content/uploads/2021/05/Lassi-in-a-glass.jpg",
    "type": "Beverage"
  },
  {
    "name": "Kadhi Pakora",
    "price": 99,
    "text": "Fried gram flour fritters served in a tangy yogurt-based curry sauce.",
    "image": "https://th.bing.com/th/id/OIP.uGO1nkeox16QILDia967SgAAAA?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Gulab Jamun",
    "price": 99,
    "text": "Soft, spongy balls made of milk solids, soaked in sugar syrup and flavored with rose water.",
    "image": "https://www.richtaste.org/wp-content/uploads/2019/10/Gulab-Jamun.jpg",
    "type": "Dessert"
  },
  {
    "name": "Jalebi",
    "price": 99,
    "text": "A sweet, crispy treat made by deep-frying flour batter in a circular shape and soaking it in sugar syrup.",
    "image": "https://th.bing.com/th/id/OIP.AMMEfXjq_2ACV154Q3_amAHaHa?rs=1&pid=ImgDetMain",
    "type": "Dessert"
  },
  {
    "name": "Pulao",
    "price": 49,
    "text": "A fragrant rice dish made with aromatic spices, peas, and sometimes meat.",
    "image": "https://recipesofhome.com/wp-content/uploads/2020/06/veg-pulao-recipe.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Kofta Curry",
    "price": 99,
    "text": "Deep-fried vegetable or meatballs served in a spiced gravy.",
    "image": "https://th.bing.com/th/id/OIP.Jrcp5Fc7xWL6sHOPev4jHgAAAA?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Aloo Paratha",
    "price": 99,
    "text": "A stuffed flatbread made with spiced mashed potatoes and served with yogurt or pickle.",
    "image": "https://th.bing.com/th/id/OIP.Jf1SvhMhdXh1UnJyLkknRwHaFJ?rs=1&pid=ImgDetMain",
    "type": "Breakfast"
  },
  {
    "name": "Malai Kofta",
    "price": 99,
    "text": "A rich curry made with deep-fried balls of paneer and potatoes, served in a creamy tomato gravy.",
    "image": "https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Tandoori Roti",
    "price": 99,
    "text": "A soft, round flatbread baked in a tandoor oven, perfect with any curry.",
    "image": "https://th.bing.com/th/id/OIP.OZcNy9wV6YbYQZNBG7G2kgHaGd?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Sundal",
    "price": 149,
    "text": "A Tamil snack made from boiled legumes tempered with mustard seeds, curry leaves, and grated coconut.",
    "image": "https://recipes.timesofindia.com/thumb/60219841.cms?imgsize=470997&width=800&height=800",
    "type": "Snack"
  },
 
  {
    "name": "Hyderabadi Biryani",
    "price": 350,
    "text": "A rich, fragrant biryani made with basmati rice and mutton, layered with caramelized onions.",
    "image": "https://th.bing.com/th/id/OIP.zQbEmNFn-geF7IPMvRknWQHaGO?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Misal Pav",
    "price": 80,
    "text": "A spicy curry made from sprouted lentils, topped with crunchy farsan and served with pav.",
    "image": "https://i.pinimg.com/originals/e8/dc/b7/e8dcb78aeac7772b8f31943a251990d7.jpg",
    "type": "Breakfast/Snack"
  },
  {
    "name": "Fish Curry",
    "price": 300,
    "text": "A spicy and tangy fish curry made with tamarind and coconut milk.",
    "image": "https://th.bing.com/th/id/OIP.ssoY8AjQsNuVMKiyBrH2CAHaHa?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Rajma Chawal",
    "price": 180,
    "text": "Kidney beans cooked in a rich tomato gravy, served with steamed rice.",
    "image": "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Poha",
    "price": 60,
    "text": "Flattened rice cooked with mustard seeds, onions, peanuts, and spices.",
    "image": "https://th.bing.com/th/id/OIP.w_6-yxLDZQt24-tI8tyiugHaGp?rs=1&pid=ImgDetMain",
    "type": "Breakfast"
  },
  {
    "name": "Paneer Butter Masala",
    "price": 200,
    "text": "A rich and creamy tomato-based curry with paneer cubes, served with naan or rice.",
    "image": "https://th.bing.com/th/id/OIP.6Tq7zFCCMwYDCmPr27xlIwAAAA?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Shrikhand",
    "price": 120,
    "text": "A creamy and sweet yogurt dessert flavored with saffron and cardamom.",
    "image": "https://www.whiskaffair.com/wp-content/uploads/2019/01/Shrikhand-1-3.jpg",
    "type": "Dessert"
  },
  {
    "name": "Chicken 65",
    "price": 250,
    "text": "A spicy deep-fried chicken dish originating from Chennai, India.",
    "image": "https://recipes.timesofindia.com/thumb/53683545.cms?imgsize=283664&width=800&height=800",
    "type": "Snack/Lunch"
  },
  {
    "name": "Egg Curry",
    "price": 100,
    "text": "A spiced curry made with boiled eggs simmered in a rich gravy.",
    "image": "https://www.licious.in/blog/wp-content/uploads/2022/11/Shutterstock_15487581922.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Papdi Chaat",
    "price": 70,
    "text": "Crispy flour crackers topped with potatoes, chickpeas, yogurt, and chutneys.",
    "image": "https://www.whiskaffair.com/wp-content/uploads/2018/11/Papdi-Chaat-2-3.jpg",
    "type": "Snack"
  },
  {
    "name": "Masala Dosa",
    "price": 80,
    "text": "A crispy rice and lentil crepe filled with a spiced potato mixture, served with chutneys and sambar.",
    "image": "https://img.freepik.com/premium-photo/masala-dosa-south-indian-traditional-popular-crepe-with-filling-mixture-mashed-potatoes-fried-onions-served-with-chutney-sambar-rustic-wooden-background-selective-focus_726363-430.jpg?w=2000",
    "type": "Breakfast"
  },
  {
    "name": "Rasmalai",
    "price": 120,
    "text": "Soft, spongy paneer balls soaked in sweet, thickened milk flavored with cardamom.",
    "image": "https://th.bing.com/th/id/OIP.1Nl3GkeW9ulhYC0zMgxjRQHaGu?rs=1&pid=ImgDetMain",
    "type": "Dessert"
  },
  {
    "name": "Chana Masala",
    "price": 140,
    "text": "A hearty and spicy chickpea curry served with rice or flatbread.",
    "image": "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2016/03/25f574554382db823a9fbb95b924a4981f30de8a.jpeg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Pani Puri",
    "price": 50,
    "text": "Crispy hollow puris filled with spicy tamarind water and potato mixture.",
    "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Madhuli_Ajay/Mumbai_Style_Pani_Puri.jpg",
    "type": "Snack"
  },
  {
    "name": "Kheer",
    "price": 90,
    "text": "A creamy rice pudding flavored with cardamom, saffron, and nuts.",
    "image": "https://i0.wp.com/www.honeywhatscooking.com/wp-content/uploads/2020/10/Rice-Kheer-Indian-Rice-Pudding44.jpg?w=1536&ssl=1",
    "type": "Dessert"
  },
  {
    "name": "Vegetable Pulao",
    "price": 180,
    "text": "Fragrant rice cooked with mixed vegetables and aromatic spices.",
    "image": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/garimasgautam-gmail.com/Nepalese_Veg_Pulao.jpg",
    "type": "Lunch/Dinner"
  },
  {
    "name": "Bhindi Masala",
    "price": 150,
    "text": "Okra sautéed with onions and spices, served with roti or rice.",
    "image": "https://th.bing.com/th/id/OIP.xMwQlPJAH34nvpHACxr3HwHaI9?rs=1&pid=ImgDetMain",
    "type": "Lunch/Dinner"
  }
];

export default MenuData;
