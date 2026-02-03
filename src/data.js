import { data } from "react-router-dom"

const products =
[
  {
    id:1,
    "name": "Wireless Headphones",
    "description": "Noise-cancelling over-ear wireless headphones with long battery life.",
    "price": 120.00,
    "offer_price": 99.99,
    "image": "/image.png",
    "add":"Add to Cart",
    "category":"Accessories"
  },
  {
    id:2,
    "name": "Smart Watch",
    "description": "Fitness tracking smartwatch with heart rate monitor.",
    "price": 150.00,
    "offer_price": 129.99,
    "image": "/image copy.png",
    "add":"Add to Cart",
    "category":"Watches"
  },
  {
    id:3,
    "name": "Bluetooth Speaker",
    "description": "Portable Bluetooth speaker with deep bass.",
    "price": 80.00,
    "offer_price": 65.00,
    "image": "/image copy 2.png",
    "add":"Add to Cart",
    "category":"Accessories"
  },
  {
    id:4,
    "name": "Laptop Backpack",
    "description": "Water-resistant backpack suitable for 15-inch laptops.",
    "price": 60.00,
    "offer_price": 49.99,
    "image": "/image copy 3.png",
    "add":"Add to Cart",
    "category":"Laptop"
  },
  {
    id:5,
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with adjustable DPI.",
    "price": 30.00,
    "offer_price": 22.99,
    "image": "/image copy 12.png",
    "add":"Add to Cart",
    "category":"Laptop"
  },
  {
    id:5,
    "name": "Mechanical Keyboard",
    "description": "RGB mechanical keyboard with blue switches.",
    "price": 100.00,
    "offer_price": 85.00,
    "image": "/image copy 11.png",
    "add":"Add to Cart",
    "category":"Laptop"
  },
  {
    id:6,
    "name": "USB-C Hub",
    "description": "Multiport USB-C hub with HDMI and USB 3.0.",
    "price": 55.00,
    "offer_price": 44.99,
    "image": "/image copy 10.png",
    "add":"Add to Cart",
    "category":"Laptop"
  },
  {
    id:7,
    "name": "External Hard Drive",
    "description": "1TB portable external hard drive.",
    "price": 75.00,
    "offer_price": 64.99,
    "image": "/image copy 13.png",
    "add":"Add to Cart",
    "category":"Phones"
  },
  {
    id:8,
    "name": "Power Bank",
    "description": "10000mAh fast charging power bank.",
    "price": 40.00,
    "offer_price": 32.99,
    "image": "/image copy 4.png",
    "add":"Add to Cart",
    "category":"Accessories"
  },
  {
    id:9,
    "name": "Phone Stand",
    "description": "Adjustable aluminum phone stand for desk use.",
    "price": 20.00,
    "offer_price": 14.99,
    "image": "/image copy 5.png",
    "add":"Add to Cart",
    "category":"Accessories"
  },
  {
    id:10,
    "name": "Wireless Charger",
    "description": "Fast wireless charging pad for smartphones.",
    "price": 35.00,
    "offer_price": 27.99,
    "image": "/image copy 14.png",
    "add":"Add to Cart",
    "category":"phones"
  },
  {
    id:11,
    "name": "Gaming Controller",
    "description": "Bluetooth gaming controller for PC and mobile.",
    "price": 70.00,
    "offer_price": 59.99,
    "image": "/image copy 15.png",
    "add":"Add to Cart",
    "category":"Phones"
  },
  {
    id:12,
    "name": "Action Camera",
    "description": "4K waterproof action camera with wide-angle lens.",
    "price": 200.00,
    "offer_price": 179.99,
    "image": "/image copy 16.png",
    "add":"Add to Cart",
    "category":"Phones"
  },
  {
    id:13,
    "name": "Tripod Stand",
    "description": "Flexible tripod for camera and smartphone.",
    "price": 25.00,
    "offer_price": 18.99,
    "image": "/image copy 17.png",
    "add":"Add to Cart",
    "category":"Accessories"
  },
  {
    id:14,
    "name": "LED Desk Lamp",
    "description": "Dimmable LED desk lamp with touch control.",
    "price": 45.00,
    "offer_price": 36.99,
    "image": "/image copy 18.png",
    "add":"Add to Cart",
    "category":"Accessories"
  },
  {
    id:15,
    "name": "Smart Plug",
    "description": "Wi-Fi smart plug with voice assistant support.",
    "price": 30.00,
    "offer_price": 23.99,
    "image": "/image copy 19.png",
    "add":"Add to Cart",
    "category":"Accessories"
  },
  {
    id:16,
    "name": "Webcam",
    "description": "Full HD 1080p webcam with built-in microphone.",
    "price": 65.00,
    "offer_price": 54.99,
    "image": "/image copy 20.png",
    "add":"Add to Cart",
    "category":"Phones"
  },
  {
    id:17,
    "name": "Noise Cancelling Earbuds",
    "description": "In-ear earbuds with active noise cancellation.",
    "price": 110.00,
    "offer_price": 94.99,
    "image": "/image copy 21.png",
    "add":"Add to Cart",
    "category":"Airpods"
  },
  {
    id:18,
    "name": "Fitness Band",
    "description": "Slim fitness band with sleep tracking.",
    "price": 50.00,
    "offer_price": 39.99,
    "image": "/image copy 22.png",
    "add":"Add to Cart",
    "category":"Airpods"
  },
  {
    id:19,
    "name": "Monitor Stand",
    "description": "Adjustable monitor stand for better ergonomics.",
    "price": 45.00,
    "offer_price": 34.99,
    "image": "/image copy 23.png",
    "add":"Add to Cart",
    "category":"Airpods"
  },
  {
    id:20,
    "name": "Cable Organizer",
    "description": "Multi-slot cable organizer for desk setup.",
    "price": 15.00,
    "offer_price": 9.99,
    "image": "/image copy 24.png",
    "add":"Add to Cart",
    "category":"Watches"
  },
  {
    id:21,
    "name": "Smart Bulb",
    "description": "Color-changing smart LED bulb.",
    "price": 25.00,
    "offer_price": 19.99,
    "image": "/image copy 25.png",
    "add":"Add to Cart",
    "category":"Watches"
  },
  {
    id:22,
    "name": "Laptop Cooling Pad",
    "description": "Cooling pad with dual fans for laptops.",
    "price": 40.00,
    "offer_price": 31.99,
    "image": "/image copy 26.png",
    "add":"Add to Cart",
    "category":"Watches"
  },
 
]
export default products
