
const jsonProducts = '[{"id":1,"name":"Laptop","price":1200,"stock":true},{"id":2,"name":"Phone","price":800,"stock":true},{"id":3,"name":"Mouse","price":25,"stock":false},{"id":4,"name":"Monitor","price":300,"stock":true}]';
// Дээрх JSON string-ийг JS массив (array) болгон хувиргах.
// Зөвхөн бэлэн байгаа (stock: true) бараануудыг шүүж авах.
// Шүүж авсан бараануудын үнийг 10% хямдруулсан шинэ жагсаалт үүсгэх (Зөвхөн name болон шинэ price-ийг агуулсан массив байх).
// Хямдарсан бараануудын нийт үнийн нийлбэрийг олох.
// Анхны жагсаалтаас "Phone" гэдэг барааг олж, мөн түүний массивын индексийг тодорхойлох.
// Анхны жагсаалтад 1000-аас дээш үнэтэй бараа байгаа эсэхийг, мөн бүх бараа бэлэн байгаа эсэхийг шалгах.
// Бараануудыг нэрээр нь цагаан толгойн дарааллаар эрэмбэлэх.
// Бараа тус бүрийн нэрийг консол дээр хэвлэж харуулах.
// Хамгийн сүүлд хямдруулсан барааны массивыг буцаагаад JSON string болгон хувиргах.
//
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

// Хариултууд


// 1. JSON.parse()
const products = JSON.parse(jsonProducts);

// 2. filter()
const inStockProducts = products.filter(product => product.stock === true);

// 3. map()
const discountedProducts = inStockProducts.map(product => {
    return {
        name: product.name,
        price: product.price * 0.9 // 10% хямдрал
    };
});

// 4. reduce()
const totalPrice = discountedProducts.reduce((sum, product) => sum + product.price, 0);

// 5. find() болон findIndex()
const foundProduct = products.find(product => product.name === "Phone");
const foundIndex = products.findIndex(product => product.name === "Phone");

// 6. some() болон every()
const hasExpensiveItem = products.some(product => product.price > 1000);
const allInStock = products.every(product => product.stock === true);

// 7. sort()
const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));

// 8. forEach()
products.forEach(product => console.log(`Барааны нэр: ${product.name}`));

// 9. JSON.stringify()
const finalJson = JSON.stringify(discountedProducts);

// Үр дүнгүүдийг шалгах:
console.log("Нийт үнэ:", totalPrice);
console.log("Олдсон бараа:", foundProduct, "Индекс:", foundIndex);
console.log("1000$-оос үнэтэй бараа байгаа уу?:", hasExpensiveItem);
console.log("Бүх бараа бэлэн байгаа юу?:", allInStock);
console.log("JSON үр дүн:", finalJson);
