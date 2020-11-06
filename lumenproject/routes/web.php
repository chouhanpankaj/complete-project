<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', function () use ($router) {
    return $router->app->version();
});

// category routes
$router->get('/category/list',
              'CategoryController@listCategory');
              
$router->post('/category/savecategory',
              'CategoryController@saveCategory');
$router->post('/category/listcategorybystatus',
              'CategoryController@listCategoryByStatus');
$router->post('/category/getcategorybyid', 
              'CategoryController@getCategoryById');
$router->post('/category/changestatuswithcategoryid', 
              'CategoryController@changeStatusWithCategoryId');
              

// customer routes
$router->group(['prefix' => 'api'], function () use ($router) {
    // Matches "/api/register
    $router->post('register', 'AuthController@register');

    $router->post('login', 'AuthController@login');
 });

$router->group(['middleware' => 'auth','prefix' => 'web'], function () use ($router) {
    // Matches "/api/users
    $router->post('myinfo', 'CustomerController@info');
 });
// $router->post('/customer/savecustomer',
//               'CustomerController@saveCustomer');

// $router->post('/customer/customerlogin',
//             'CustomerController@customerLogin');
              
$router->post('/customer/showcustomerbyid',
              'CustomerController@showCustomerById');

$router->get('/customer/showallcustomer', 'CustomerController@showCustomer');

//Product routes
$router->get('/product/list',
              'ProductController@listAllPro');

$router->post('/product/saveproduct',
              'ProductController@saveProduct');
              
$router->post('/product/listallproducts',
              'ProductController@listAllProducts');

$router->post('/product/getproductbyid',
              'ProductController@getProductById');

$router->post('/product/uploadimage', 'ProductController@uploadFile');

$router->post('/product/productslistbycategoryid','ProductController@productsListByCategoryId');

//Order routes
$router->post('/order/addorder','OrderController@addOrder');
$router->post('/order/listallorder', 'OrderController@listAllOrder');
$router->post('/order/listorderbycustomer','OrderController@listOrderByCustomer');

//orderdetail routes
$router->post('/orderdetail/listbyorderid', 'OrderDetailController@listByOrderId');
$router->post('/orderdetail/listbyproductid', 'OrderDetailController@listByProductId');
