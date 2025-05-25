const PizzaOrdersData =[
  {
    "orderId": "PZA001",
    "customerName": "John Doe",
    "pizzaType": "Margherita",
    "quantity": 2,
    "orderDate": "2025-05-23 14:25",
    "status": "Pending"
  },
  {
    "orderId": "PZA002",
    "customerName": "Jane Smith",
    "pizzaType": "Pepperoni",
    "quantity": 1,
    "orderDate": "2025-05-23 13:45",
    "status": "Preparing"
  },
  {
    "orderId": "PZA003",
    "customerName": "Mike Johnson",
    "pizzaType": "Veggie Supreme",
    "quantity": 3,
    "orderDate": "2025-05-22 18:10",
    "status": "Out for Delivery"
  },
  {
    "orderId": "PZA004",
    "customerName": "Lisa Ray",
    "pizzaType": "Margherita",
    "quantity": 1,
    "orderDate": "2025-05-22 12:30",
    "status": "Delivered"
  },
  {
    "orderId": "PZA005",
    "customerName": "Raj Patel",
    "pizzaType": "Pepperoni",
    "quantity": 2,
    "orderDate": "2025-05-21 16:50",
    "status": "Cancelled"
  },
  {
    "orderId": "PZA006",
    "customerName": "Emily Zhang",
    "pizzaType": "Veggie Supreme",
    "quantity": 1,
    "orderDate": "2025-05-23 15:00",
    "status": "Pending"
  },
  {
    "orderId": "PZA007",
    "customerName": "Carlos Gomez",
    "pizzaType": "Margherita",
    "quantity": 4,
    "orderDate": "2025-05-22 19:20",
    "status": "Delivered"
  },
  {
    "orderId": "PZA008",
    "customerName": "Sara Ali",
    "pizzaType": "Pepperoni",
    "quantity": 3,
    "orderDate": "2025-05-23 12:00",
    "status": "Preparing"
  },
  {
    "orderId": "PZA009",
    "customerName": "Tom Lee",
    "pizzaType": "Veggie Supreme",
    "quantity": 2,
    "orderDate": "2025-05-21 10:15",
    "status": "Cancelled"
  },
  {
    "orderId": "PZA010",
    "customerName": "Anita Kapoor",
    "pizzaType": "Margherita",
    "quantity": 2,
    "orderDate": "2025-05-23 14:45",
    "status": "Out for Delivery"
  }
]

export interface PizzaOrderType {
  orderId: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
}
export default PizzaOrdersData;