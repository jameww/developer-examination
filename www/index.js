// let endpoint = "http://128.199.80.110:12111";

let endpoint = "http://localhost:3000";

$(document).ready(function () {
  renderTable();
  insertItem();
  updateItem();
});

const renderTable = () => {
  fetch(endpoint + "/item_data/get_item")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const table = document
        .getElementById("my-table")
        .getElementsByTagName("tbody")[0];
      data.data.forEach((item) => {
        const row = document.createElement("tr");
        row.setAttribute("id", "row-id");
        row.addEventListener("click", () => {
          getItemById(item._id);
        });
        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>
          <button class="btn btn-warning update-btn" type="button" data-bs-toggle="modal" data-bs-target="#updateModal">Update</button>
          </td>
        `;
        table.appendChild(row);
      });
    })
    .catch((error) => {
      console.log("error fetching data", error);
    });
};

const getItemById = (id) => {
  fetch(endpoint + `/item_data/get_item_by_id/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("get-id").innerHTML = data.data._id;
      document.getElementById("get-name").innerHTML = data.data.name;
      document.getElementById("get-price").innerHTML = data.data.price;
      document.getElementById("get-quantity").innerHTML = data.data.quantity;
      document.getElementById("get-description").innerHTML =
        data.data.description;
      document.getElementById("get-value-id").value = data.data._id;
      document.getElementById("get-value-name").value = data.data.name;
      document.getElementById("get-value-price").value = data.data.price;
      document.getElementById("get-value-quantity").value = data.data.quantity;
      document.getElementById("get-value-description").value =
        data.data.description;
    })
    .catch((error) => {
      console.log("error fetching data by id", error);
    });
};

const insertItem = () => {
  $("#item-form").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const price = $("#price").val();
    const quantity = $("#quantity").val();
    const description = $("#description").val();
    const jsonData = {
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    };
    console.log(jsonData);
    fetch(endpoint + "/item_data/insert_item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        $("#id, #name, #price, #quantity, #description").val("");
      })
      .catch((error) => {
        console.log("error insert data", error);
      });
  });
};

const updateItem = () => {
  $("#update-form").submit(function (event) {
    event.preventDefault();
    const id = $("#get-value-id").val();
    const name = $("#get-value-name").val();
    const price = $("#get-value-price").val();
    const quantity = $("#get-value-quantity").val();
    const description = $("#get-value-description").val();
    const jsonData = {
      id: id,
      name: name,
      price: price,
      quantity: quantity,
      description: description,
    };
    console.log(jsonData);
    fetch(endpoint + `/item_data/update_item/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error updating data", error);
      });
  });
};

// const getItem = async () => {
//   fetch("http://localhost:3000/item_data/get_item")
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       console.log("error fetching data", error);
//     });
// };
