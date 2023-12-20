const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/products-list', {
      prods: products,
      pageTitle: 'All products',
      path: '/products',
    });
  });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
      });
    });
  };


  exports.getCart = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/cart', {
        prods: products,
        pageTitle: 'My cart',
        path: '/cart',
      });
    });
  };

  exports.getOrders = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/orders', {
        prods: products,
        pageTitle: 'My orders',
        path: '/orders',
      });
    });
  };

  exports.getCheckout = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/checkout', {
        prods: products,
        pageTitle: 'Checkout',
        path: '/checkout',
      });
    });
  };


