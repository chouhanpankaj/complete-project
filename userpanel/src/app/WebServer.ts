class WebServer {
    public static SERVER:string = 'http://localhost:8080';

    public static GET_CATEGORY:string = WebServer.SERVER + '/category/list';

    public static GET_PRODUCTS:string = WebServer.SERVER + '/product/productslistbycategoryid';

    public static GET_PRODUCT_BY_ID:string = WebServer.SERVER + '/product/getproductbyid';

    // public static ADD_USER:string = WebServer.SERVER + '/customer/savecustomer';
    public static ADD_USER:string = WebServer.SERVER + '/api/register';

    // public static LOGIN_USER:string = WebServer.SERVER + '/customer/customerlogin';
    public static LOGIN_USER:string = WebServer.SERVER + '/api/login';

    public static ADD_ORDER:string = WebServer.SERVER + '/order/addorder';

}

export default WebServer;