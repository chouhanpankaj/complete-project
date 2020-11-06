class WebServer {
    private static SERVER:string = "http://localhost:8080";

    public static GET_CATEGORY_LIST:string = WebServer.SERVER + '/category/list';
    public static SAVE_CATEGORY:string = WebServer.SERVER + '/category/savecategory';

    public static GET_PRODUCT_LIST:string = WebServer.SERVER + '/product/list';
    public static SAVE_PRODUCT:string = WebServer.SERVER + '/product/saveproduct';
    
    public static GET_PRODUCT_BY_ID:string = WebServer.SERVER + '/product/productslistbycategoryid';
    public static UPLOAD_IMAGE:string = WebServer.SERVER + '/product/uploadimage';

    public static SHOW_CUSTOMER:string = WebServer.SERVER + '/customer/showallcustomer';

    public static LOGIN_USER:string = WebServer.SERVER + '/api/login';

}

export default WebServer;
