#Blockchain Tables (Logical View)

1. Products Table:
ProductID (Primary Key)
Manufacturer
ManufactureDate
ExpiryDate
BlockchainAddress (linking to transaction data)

2. Events Table:
EventID (Primary Key)
ProductID (Foreign Key)
Timestamp
EventType (e.g., "Shipped", "Inspected")
Location

#Database Tables

1. Users Table:
UserID (Primary Key)
Name
Email
Password (hashed)
Role (e.g., "Manufacturer", "Customer")

2. Product Metadata Table:
ProductID (Primary Key, linked to Blockchain)
ImageURL
Description
Tags

3. Scans Table:
ScanID (Primary Key)
ProductID (Foreign Key)
UserID (Foreign Key)
Timestamp
Result (e.g., "Verified", "Fake")
