import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Add from "./Add";

const Product = ({ setpage }) => {
  const [search, setsearch] = useState("");
  const [product, setproduct] = useState([
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/61wDti8LyqL._AC_SL1500_.jpg",
      name: "casque",
      price: 200,
    },
    {
        image: "https://pcper.com/wp-content/uploads/2015/03/c096-g501-left-open135-top-scaled.jpg",
        name: "Pc portable",
        price:450,
      },   
      {
        image: "https://images-na.ssl-images-amazon.com/images/I/71O4P397AKL._AC_SL1500_.jpg",
        name: "Mouse",
        price:150,
      },    {
        image: "https://tse1.mm.bing.net/th?id=OIP.Bi_RC6L61H4Xb7k1mqPaigHaHa&pid=Api&P=0&h=180",
        name: "Clavier",
        price:340,
      },    {
        image: "https://tse3.mm.bing.net/th?id=OIP.xph7KTs7gUSS6JXBSerstwHaGP&pid=Api&P=0&h=180",
        name: "Ecran",
        price:500,
      },    
      {
        image: "https://tse1.mm.bing.net/th?id=OIP.pABQB2MZ0PuYT5atKRQjXgHaHW&pid=Api&P=0&h=180",
        name: "Pc",
        price:650,
      },
      {
        image: "https://m.media-amazon.com/images/I/51051FiD9UL._SL1456_.jpg",
        name: "Playstation 5",
        price:650,
      },
      {
        image: "https://king-store.tn/228-large_default/manette-playstation-5.jpg",
        name: " Manette Playstation 5",
        price:650,
      },
      {
        image: "https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png",
        name: "XBOX seris X",
        price:780,
      },
      {
        image: "https://fr.shopping.rakuten.com/photo/abonnement-sony-playstation-plus-12-mois-1831922589.jpg?frz-width=261&frz-fit=contain",
        name: "PS +",
        price:180,
      },
      {
        image: "https://www.presse-citron.net/app/uploads/2020/09/guide-precommande-manettex-xbox-series-x-xbox-series-s-bleue.jpg",
        name: "Manette Xbox",
        price:40,
      },
      {
        image: "https://media.karousell.com/media/photos/products/2023/9/28/ea_sports_fc_24_ps4_ps5_r3__fi_1695878752_53db937d.jpg",
        name: "FC 24",
        price:60,
      },
      {
        image: "https://tse3.mm.bing.net/th?id=OIP.49UpGoiXgdC2gW85hvyCbQHaEo&pid=Api&P=0&h=180",
        name: "Valorant",
        price:500,
      },
      {
        image: "https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg",
        name: "League of Leagend",
        price:550,
      },      
      {
        image: "https://tse1.mm.bing.net/th?id=OIP.an05Mwd-TeJDJo84DYCR2wAAAA&pid=Api&P=0&h=180",
        name: "Fortnit",
        price:600,
      },      
      {
        image: "https://tse3.mm.bing.net/th?id=OIP.OfqCl0rQ0SIHkrCN3ZjRewHaEK&pid=Api&P=0&h=180",
        name: "Apex Leagend",
        price:450,
      },
      {
        image: "https://i1.wp.com/www.nashvillechatterclass.com/wp-content/uploads/2017/03/Uncharted-The-Lost-Legacy.jpg?fit=3840%2C2160&ssl=1",
        name: "Uncharted",
        price:150,
      },
      {
        image: "https://tse1.mm.bing.net/th?id=OIP.fD4iwL3x8y_AHr5Lvb6m0AHaEK&pid=Api&P=0&h=180",
        name: "The last of us ",
        price:250,
      },
  ]);
  const [show_add, setshow_add] = useState(false)
  const [new_game, setnew_game] = useState({
    image:"",
    name:"",
    price:0
  })
  const addgame=()=>setproduct([...product,new_game])
  return (
    <div>
      {show_add?<Add addgame={addgame}  setnew_game={setnew_game} new_game={new_game} setshow_add={setshow_add} />:null}
      <Navbar setshow_add={setshow_add} setsearch={setsearch} setpage={setpage}/>
      <ProductList product={product} search={search}/>
    </div>
  );
};

export default Product;
