import axios from "axios";
import React, { useState } from "react";
import "./category.scss";
import SideNav from "../../../components.jsx/sidenav/sidenav";
import Nav from "../../../components.jsx/sidenav/upnav/nav";
function Category() {
  const List = [
    {
      id: 1,
      number: "1",
      icon: "Category Icon",
      name: "Health & Beauty",
      Sub: "0",
    },
    {
      id: 2,
      number: "2",
      icon: "Category Icon",
      name: "Medicine & Kids",
      Sub: "0",
    },
    {
      id: 3,
      number: "3",
      icon: "Category Icon",
      name: "TV & Accessories",
      Sub: "0",
    },
    {
      id: 4,
      number: "4",
      icon: "Category Icon",
      name: "Fruits & Vegetable",
      Sub: "2",
    },
    {
      id: 5,
      number: " 5",
      icon: "Category Icon",
      name: "Groceries & Pets",
      Sub: "2",
    },
    {
      id: 6,
      number: " 6",
      icon: "Category Icon",
      name: "Computer & Electronies",
      Sub: "3",
    },
    {
      id: 7,
      number: "7",
      icon: "Category Icon",
      name: "Babies & Toys",
      Sub: "3",
    },
    {
      id: 8,
      number: "8",
      icon: "Category Icon",
      name: "Clothes & Cosmetics",
      Sub: "1",
    },
  ];
  const [list, setlist] = useState(List);
  function handleRemove(id) {
    const newList = list.filter((data) => data.id !== id);
    setlist(newList);
  }

  return (
    <div className="all">
      <div>
        <SideNav />
      </div>

      <div className="maine">
        <div>
          <Nav />
        </div>
        <div className="number">
          <div className="star">
            <img
              src="https://img.freepik.com/premium-vector/white-star-vector-icon-star-icon-vector-star-icon-line-stars_619470-509.jpg?w=360"
              alt=""
            />
          </div>
          <div className="total">
            <p>Total Categories</p>
            <p>9</p>
          </div>
        </div>
        <div className="categories-details">
          <div className="form">
            <div>
              <h4>
                Add New Category <button></button>
              </h4>
            </div>
            <p>Category Name</p>
            <input type="text" placeholder="Category" />
            <p>Category Icon</p>
            <select name="categoryicon" className="icon">
              <option value="categories">Categories</option>
              <option value="clothes">Clothes</option>
              <option value="Shirt">Shirt</option>
              <option value="Food">Food</option>
            </select>
            <button className="add">ADD</button>
          </div>
          <div className="categorieslist">
            <div>
              <h4>
                List Of Categories <button></button>
              </h4>
            </div>
            <div className="lists">
              <div className="show">
                {" "}
                <p>Show</p> <input type="number" name="" id="" /> <p>entries</p>
              </div>
              <div className="listes">
                <div className="li">
                  <div className="banner"> Serial</div>
                  <div className="banner">Category Icon</div>
                  <div className="banners">Category Name</div>
                  <div className="bannerss">SubCategories</div>
                  <div className="banner">Actions</div>
                </div>
                <div>
                  {list.map(function (data) {
                    return (
                      <div className="di">
                        <div key={data.id} className="div ">
                          {data.number}
                        </div>
                        <div className="div" key={data.id}>
                          {data.icon}
                        </div>
                        <div className="divs" key={data.id}>
                          {data.name}
                        </div>
                        <div className="divss" key={data.id}>
                          {data.Sub}
                        </div>
                        <div className="div" key={data.id}>
                          <div className="btns">
                            <button>
                              <img
                                src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
                                alt=""
                              />
                            </button>
                            <button onClick={() => handleRemove(data.id)}>
                              <img
                                src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-1713867065505.webp"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* <div className="li">
                  
                  <div className="banner"> 1</div>
                  <div className="banner">Category Icon</div>
                  <div className="banners">Health & Beauty</div>
                  <div className="bannerss">0</div>
                  <div className="banner"><div className="btn"><button><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" /></button><button><img src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-1713867065505.webp" alt="" /></button></div></div>
                </div>
                <div className="li">
                 
                  <div className="banner">2</div>
                  <div className="banner">Category Icon</div>
                  <div className="banners">Medicine & Kids</div>
                  <div className="bannerss">0</div>
                  <div className="banner"><div className="btn"><button><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" /></button><button><img src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-1713867065505.webp" alt="" /></button></div></div>
                </div>
                <div className="li">
                  
                  <div className="banner"> 3</div>
                  <div className="banner">Category Icon</div>
                  <div className="banners">Tv & Accessories</div>
                  <div className="bannerss">0</div>
                  <div className="banner"><div className="btn"><button><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" /></button><button><img src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-1713867065505.webp" alt="" /></button></div></div>
                </div>
                <div className="li">
                  
                  <div className="banner"> 4</div>
                  <div className="banner">Category Icon</div>
                  <div className="banners">Fruits And Vegetables</div>
                  <div className="bannerss">2</div>
                  <div className="banner"><div className="btn"><button><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" /></button><button><img src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-1713867065505.webp" alt="" /></button></div></div>
                </div>
                <div className="li">
                  
                  <div className="banner"> 5</div>
                  <div className="banner">Category Icon</div>
                  <div className="banners">Groceries & Pets</div>
                  <div className="banners">2</div>
                  <div className="banner"><div className="btn"><button><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" /></button><button><img src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-1713867065505.webp" alt="" /></button></div></div>
                </div>
                <div className="li">
             
                  <div className="banner">6</div>
                  <div className="banner">Category Icon</div>
                  <div className="banners">Computer & Electronics</div>
                  <div className="banners">3</div>
                  <div className="banner"><div className="btn"><button><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" /></button><button><img src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-1713867065505.webp" alt="" /></button></div></div>
                </div>
                <div className="li">
                
                  <div className="banner"> 7</div>
                  <div className="banner">Category Icon</div>
                  <div className="banners">Babies & Toys </div>
                  <div className="bannerss">2</div>
                  <div className="banner"><div className="btn"><button><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" /></button><button><img src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-1713867065505.webp" alt="" /></button></div></div>
                </div>
                <div className="li">
           
                  <div className="banner"> 9</div>
                  <div className="banner">Category Icon</div>
                  <div className="banners">Clothes And Cosmetics</div>
                  <div className="bannerss">1</div>
                  <div className="banner"><div className="btn"><button><img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" /></button><button><img src="https://banner2.cleanpng.com/20191230/weo/transparent-trash-icon-bin-icon-pollution-icon-1713867065505.webp" alt="" /></button></div></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
