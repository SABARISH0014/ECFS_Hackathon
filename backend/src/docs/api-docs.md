# 📡 Inventory Management API Documentation

This document provides a static overview of the RESTful API endpoints. For the interactive Swagger UI, please start the backend server and navigate to `http://localhost:5000/api-docs`.

## Base URL
`http://localhost:5000/api`

---

## 🔐 Authentication
**Note:** All protected routes require a JWT token passed in the header: `Authorization: Bearer <token>`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/register` | Register a new user account. | No |
| `POST` | `/auth/login` | Authenticate and receive a JWT token. | No |

---

## 📦 Products
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET`  | `/products` | Retrieve all products in the inventory. | No |
| `GET`  | `/products/:id` | Retrieve details of a specific product. | No |
| `POST` | `/products` | Create a new product. | No |
| `PUT`  | `/products/:id` | Update an existing product. | No |
| `DELETE`| `/products/:id` | Remove a product from the database. | No |

---

## 🚚 Suppliers
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET`  | `/suppliers` | Retrieve all suppliers. | No |
| `GET`  | `/suppliers/:id` | Retrieve a specific supplier. | No |
| `POST` | `/suppliers` | Add a new supplier. | No |
| `PUT`  | `/suppliers/:id` | Update supplier details. | No |
| `DELETE`| `/suppliers/:id` | Remove a supplier. | No |

---

## 🔄 Stock Management
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/stock/in` | Increase product quantity. Requires `productID` and `quantity`. | No |
| `POST` | `/stock/out` | Decrease product quantity. Will fail if stock drops below 0. | No |

---

## 📊 Reports & Transactions
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET`  | `/transactions/:productId` | Get transaction history (IN/OUT) for a specific item. | No |
| `GET`  | `/reports/summary` | Get aggregated inventory totals (total value, total items). | No |
| `GET`  | `/reports/transactions` | Get a global ledger of all stock movements. | No |

---

## 🚨 Alerts
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET`  | `/alerts/low-stock` | Retrieve all products where `quantity` is less than `minStock`. | Yes |