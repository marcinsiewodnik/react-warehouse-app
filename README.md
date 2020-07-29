# React warehouse app 

I created this project from scratch, from desing phase to implementation. I also analized requirements, which this system has to implement. 

This project is written in React. This is a warehouse app. I focused on implementing React concepts and I used Create React app environment.

Technologies used: React, React router, javascript ES6

## Functionality
1. You can add a new item (add new product tab), the name has to meet certain requirements, you can choose category, and set the price. If the name is empty or does not meet the requirements, the add product button will be disable. Here you can only add an item. To increase quantity, click product list (change mode) tab.
2. You can change the properties of a given item by clicking on product list (change mode) tab. For instance you can increse the quantity of the product, change name, category or price. These fields have to meet certain requirements, if they do not, the save changes button will be disabled.
3. Finally you can sell a given product by clicking on the sell product (change mode) tab. You can not sell more products then there are in the warehouse. The interface will not allow to do this.
4. When you increase the quantity on the product list (change mode) tab or when you sell a given product on the sell product (change mode) page, a transaction is generated and added to the system. You can see these new generated transactions on the transaction list (view mode) tab. 

All the logic is created in React, on the browser side. Data is not stored in a database. I showed mongo db skills in another project.

### See live
https://marcinsiewodnik.github.io/react-warehouse-app/
