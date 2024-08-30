# Clothing App

This is a web application for an online clothing store. Users can browse through various clothing items, add them to their cart, and proceed to checkout. The application provides a seamless shopping experience for users.

## Features

- **User Authentication**: Users can register for an account or sign in with existing credentials.
- **Product Catalog**: Users can browse through a catalog of clothing items.
- **Shopping Cart**: Users can add items to their cart and proceed to checkout.
- **Order Management**: Registered users can view their order history and manage their orders.
- **Admin Panel**: Administrators can manage products, categories, and user accounts.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Redux**: State management library for managing application state.
- **Firebase**: Backend-as-a-Service platform used for authentication, database, and file storage.
- **Material-UI**: React UI framework for building user interfaces.

## Installation

1. Clone the repository:

git clone https://github.com/SzymonHarajda/Clothing-app.git

2. Install dependencies:

npm install

3. Set up Firebase:

   - Create a Firebase project at https://console.firebase.google.com/.
   - Set up Firebase Authentication, Firestore, and Storage.
   - Add Firebase configuration to the project by creating a `firebase.js` file in the `src` directory:

     ```javascript
     import firebase from 'firebase/app';
     import 'firebase/firestore';
     import 'firebase/auth';

     const firebaseConfig = {
       apiKey: 'YOUR_API_KEY',
       authDomain: 'YOUR_AUTH_DOMAIN',
       projectId: 'YOUR_PROJECT_ID',
       storageBucket: 'YOUR_STORAGE_BUCKET',
       messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
       appId: 'YOUR_APP_ID',
     };

     firebase.initializeApp(firebaseConfig);

     export const auth = firebase.auth();
     export const firestore = firebase.firestore();
     export const storage = firebase.storage();
     export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
     ```

   - Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, `YOUR_PROJECT_ID`, `YOUR_STORAGE_BUCKET`, `YOUR_MESSAGING_SENDER_ID`, and `YOUR_APP_ID` with your actual Firebase configuration values.

4. Run the application:

npm start

5. Access the application in your browser at `http://localhost:3000`.

## Usage

1. Register for a new account or sign in with existing credentials.
2. Browse through the catalog of clothing items.
3. Add items to your cart by clicking on the "Add to Cart" button.
4. Proceed to checkout and complete your order.
5. Registered users can view their order history and manage their account details.

## Contributors

- [Szymon Harajda](https://github.com/SzymonHarajda)

## License

This project is licensed under the [MIT License](LICENSE).
