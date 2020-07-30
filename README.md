# Warehouse app

I created this project from scratch, from desing phase to implementation. I also analized requirements, which this system has to implement. I focused mainly on learning react concepts and implementing more complex logic. To create this project I used Create React App.

Technologies used: React, React Router, javascript ES6, SPA 

Functionality: 

1. You can add a new item (add new product tab), the name has to meet certain requirements, you can choose category, and set the price. If the name is empty or does not meet the requirements, the add product button will be disable. Here you can only add an item. To increase quantity, click product list (change mode) tab.
2. You can change the properties of a given item by clicking on the product list (change mode) tab. For instance you can increse the quantity of the product, change name, category or price. These fields have to meet certain requirements, if they do not, the save changes button will be disabled.
3. Finally you can sell a given product by clicking on the sell product (change mode) tab. You can not sell more products then there are in the warehouse. The interface will not allow to do this.
4. When you increase the quantity on the product list (change mode) tab or when you sell a given product on the sell product (change mode) page, a transaction is generated and added to the system. You can see these new generated transactions on the transaction list (view mode) tab.

Data is not stored in a database. I showed mongo db skills in another project. In the future I might add this functionality to this project.

### See live
https://marcinsiewodnik.github.io/react-warehouse-app/
