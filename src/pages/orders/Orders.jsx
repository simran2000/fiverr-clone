
//in navbar when you will click on orders then this page will open
import React from 'react';
import "./Orders.scss";

const Orders = () => {
  
  const currentUser = {
    id: 1,
    username: "Simran",
    isSeller: true
}

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>128</td>
            <td>88</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>128</td>
            <td>88</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>128</td>
            <td>88</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>128</td>
            <td>88</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>128</td>
            <td>88</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders;