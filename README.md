# WoofNibbles


Overview 👁️

WoofNibbles is a web-based e-commerce platform designed to facilitate online shopping. Built using Spring Boot for the backend and React for the frontend, it leverages a MySQL database for data persistence. The project features user authentication, product browsing, shopping cart management, order tracking, and an admin dashboard, aiming to provide a seamless user experience. All components were fully implemented as of April 09, 2025.


![Image](https://github.com/user-attachments/assets/1388612d-9f5f-45e0-9e1a-34e9df1614d5)
![Image](https://github.com/user-attachments/assets/142cc7b4-17d0-491b-8850-ab3c75b110c0)

Features ⭐

User Authentication: Secure registration and login system implemented in AuthLayout.js (containing LoginForm.js and welcome.js) with backend support from AuthController.java and UserService.java.
Product Management: Browse products with details, implemented in ProductList.js, ProductCard.js, and ProductController.java.
Shopping Cart: Add and manage items with local storage integration, implemented in Cart.js and supported by CartContext.js.
Order Tracking: View order history and tracking, implemented in Order.js and OrderController.java.
Admin Dashboard: Overview of orders for administrators, implemented in Admin.js.
Exception Handling: Custom and global exception management, implemented in CustomException.java and GlobalExceptionHandler.java.
Responsive Design: User-friendly interface with consistent styling, implemented in styles.css.
Footer Section: Consistent footer across pages, implemented in Footer.js.
Homepage: Displays navbar, product previews, and contact form, implemented in Home.js.



Installation 💻


Prerequisites -

    Node.js (v14.x or later).
    Java Development Kit (JDK) 11 or later.
    MySQL Server *.
    Git.

Steps -

1. Clone the Repository
    -> git clone [Insert GitHub link here]
    -> cd woofnibbles

2. Backend Setup
    -> Open the WoofNibblesBackEnd folder in a
        separate workspace in spring boot.
        run the WoofNibblesApplication.java file.
        
    -> Configure the application.properties file 
        with your MySQL credentials:

        spring.datasource.url=jdbc:mysql://
        localhost:1234/woofnibbles
        spring.datasource.username=your_username
        spring.datasource.password=your_password
    
    ->Build and run the Spring Boot application:

3. Frontend Setup
    -> Navigate to the frontend directory:
        cd ../frontend

    -> Install dependencies:
        npm install

    -> Start the React application:
        npm start

4. Access the Application
    Open your browser and go to http://localhost:1234 




Contributors 🌿

Team Member 1 (Project Lead, Frontend & Backend Developer): [Tarun Sen Behera]
Managed project setup, implemented AuthLayout.js (with LoginForm.js and welcome.js), Home.js, Footer.js, and UserService.java, and oversaw frontend/backend integration.

Team Member 2 (Backend & Frontend Developer): [Saurav Kumar Jha]
Led backend implementation (e.g., AuthController.java, OrderController.java) and developed ProductList.js and ProductCard.js.
Developed the product listing and detail pages (ProductList.js, ProductCard.js) on the frontend, integrating them with backend services.


Team Member 3 (Backend & Frontend Developer): [Sriya Sappidi]
Implemented the shopping cart page (Cart.js , CarContext.js) with local storage and order placement integration, contributing to the user experience.
Contributed to backend development by implementing the order management APIs (OrderController.java) and UserRepository.java repository.


Team Member 4 (Frontend Developer): [Vanitha Kottala]
Built the order tracking and history page (Order.js), ensuring seamless integration with the backend.
Supported backend development by defining the User.java entity and ProductRepository.java repository.


Team Member 5 (Frontend Role Developer): [Ruthwik Akkala]
Led the development of the admin dashboard UI (Admin.js), collaborating with Team Member 6 to enhance the order overview interface.
Provided limited assistance in backend development with CustomException.java and GlobalExceptionHandler.java, supported by team expertise due to minimal backend knowledge.


Team Member 6 (Frontend Developer): [M. Rohith Reddy]
Collaborated on the admin dashboard UI (Admin.js), enhancing the order overview interface.
Provided limited assistance in backend development with Order.java, supported by team expertise due to minimal backend knowledge.
