// phần 1
// function generateRandomHexColor() {
//     let randomNumber = Math.floor(Math.random() * 16777216);
//     let hexColor = randomNumber.toString(16);
//     hexColor = hexColor.padStart(6, "0");
//     return "#" + hexColor.toUpperCase();
// }
// const color = generateRandomHexColor();
// console.log(color);


//phần 2
const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 22000000,
    category: "Điện thoại",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 20000000,
    category: "Điện thoại",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 26000000,
    category: "Laptop",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 30000000,
    category: "Laptop",
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 6000000,
    category: "Phụ kiện",
  },
  {
    id: 6,
    name: "Apple Watch",
    price: 9000000,
    category: "Phụ kiện",
  },
];
// ========================================
// 1. LỌC SẢN PHẨM THEO DANH MỤC
// ========================================
function getFilteredProducts(productList, category) {
  // Nếu chọn "Tất cả"
  if (category === "Tất cả") {
    return productList;
  }
  // Nếu chọn một danh mục cụ thể
  return productList.filter(function (product) {
    return product.category === category;
  });
}
// ========================================
// 2. SẮP XẾP SẢN PHẨM THEO GIÁ
// ========================================
function getSortedProducts(productList, sortType) {
  // Tạo một mảng mới
  // để không làm thay đổi mảng products ban đầu
  const sortedProducts = [...productList];

  // Mặc định: giữ nguyên thứ tự
  if (sortType === "default") {
    return sortedProducts;
  }

  // Giá tăng dần
  if (sortType === "asc") {
    sortedProducts.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  // Giá giảm dần
  if (sortType === "desc") {
    sortedProducts.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  return sortedProducts;
}


// ========================================
// 3. TẠO MẢNG CHUỖI MÔ TẢ SẢN PHẨM
// ========================================

function getProductDescriptions(productList) {

  return productList.map(function (product) {

    return `${product.name} - ${product.category} - ${product.price}`;

  });
}


// ========================================
// 4. TÍNH TỔNG TIỀN
// ========================================

function calculateTotal(productList) {

  let total = 0;

  productList.forEach(function (product) {
    total += product.price;
  });

  return total;
}


// ========================================
// 5. THỰC HIỆN CHƯƠNG TRÌNH
// ========================================

// Lọc sản phẩm theo danh mục "Điện thoại"
const filteredProducts = getFilteredProducts(
  products,
  "Điện thoại"
);

console.log("1. SẢN PHẨM SAU KHI LỌC:");
console.log(filteredProducts);


// Sắp xếp sản phẩm theo giá tăng dần
const sortedProducts = getSortedProducts(
  filteredProducts,
  "asc"
);

console.log("2. SẢN PHẨM SAU KHI SẮP XẾP:");
console.log(sortedProducts);


// Tạo mảng mô tả sản phẩm
const productDescriptions = getProductDescriptions(
  sortedProducts
);

console.log("3. MÔ TẢ SẢN PHẨM:");
console.log(productDescriptions);


// Tính tổng tiền
const total = calculateTotal(
  sortedProducts
);

console.log("4. TỔNG TIỀN:");
console.log(total);