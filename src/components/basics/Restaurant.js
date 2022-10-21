import React, { useState } from 'react';
import "./style.css";
import "./menuApi"
import Menu from './menuApi';
import MenuCard from './menuCard';
import Navbar from './navbar';

//finding categories th. list and convert to array set with unique. es6 (... <-spread operetor -for flatten)
const categoryList = [
  ...new Set(
    Menu.map((value) => {
        return value.category
    }
  )),"All"];

const Restaurant = () => {
  //use effect to manage data for current state and update state
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(categoryList);

  //filter data based on categories
  const filterItem = (category) => {
   
    if(category==="All"){
      setMenuData(Menu);
      return; 
    }

    const categories = Menu.filter((value) => {
      if (value.category === category)
      return value;
    })

    //update state with updated data
    setMenuData(categories);
  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant