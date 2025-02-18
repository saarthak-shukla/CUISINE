"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    //console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 100,
            text: "Smooth, glossy whites encase a golden, velvety yolk that melts like butter, delivering a simple yet rich burst of umami.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 250,
            text: "Steaming, silky noodles bathe in a luscious broth, infused with deep, slow-cooked flavors, topped with tender meat, crispy veggies, and a soft, runny egg.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 450,
            text: "Juicy, charred to perfection, each bite crackles with smoky goodness, infused with aromatic herbs and a kiss of flame-kissed caramelization.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 400,
            text: "Light, airy layers of pillowy sweetness, draped in luscious frosting, melting on your tongue with each forkful of indulgence.",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 230,
            text: "Flame-Grilled patty hugged by soft toasted buns, crisp lettuce, melty cheese,,fresh tomato ,red onion and a Tangy special sauce.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 150,
            text: "A decadent masterpiece, where every bite is a symphony of moist, buttery layers and rich, creamy frosting that lingers like a dream.",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map

