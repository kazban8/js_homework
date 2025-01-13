var services = {
    "подивитись в дзеркало": "90 грн",
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "10 грн",
    "Розбити скло": "200 грн"
};

var serviceMethods = {
    price: function () {
        let total = 0;
        for (let key in services) {
            let price = services[key].slice(0, -4);
            total += parseInt(price);
        }
        return total;
    },
    minPrice: function () {
        let minPrice = Infinity;
        Object.values(services).forEach(service => {
            let price = parseInt(service.slice(0, -4));
            if (price < minPrice) minPrice = price;
        });
        return minPrice;
    },
    maxPrice: function () {
        let maxPrice = -Infinity;
        Object.values(services).forEach(service => {
            let price = parseInt(service.slice(0, -4));
            if (price > maxPrice) maxPrice = price;
        });
        return maxPrice;
    }
};

console.log("Загальна вартість послуг: " + serviceMethods.price() + " грн");
console.log("Мінімальна ціна: " + serviceMethods.minPrice() + " грн");
console.log("Максимальна ціна: " + serviceMethods.maxPrice() + " грн");
