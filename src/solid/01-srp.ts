(() => {

    interface Product { 
        id:   number;
        name: string;
    
    }
    

    class ProductService {
        // private httpAdapter: Object; 
        getProduct (id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct( product: Product) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }
    
    class Mailer {
        public masterEmail: string = 'yeison@google.com'; 
    
    
        sendEmail ( emailList: string[], template: 'to-clients' | 'to-admins' ) {
            console.log(`Enviando correo a ${emailList}`, template);
        } 
    }
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;
        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }

        // notifyClients() {
        //     this.mailer.sendEmail(['pepito@google.com'], 'to-clients')
        //     console.log('Enviando correo a los clientes');
        // }
    }
    
    class CartBloc {
        private itemsInCart: Object[] = [];
        addToCart( productId: number ){
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();
    // const notificationBLoc = new NotificationBLoc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    mailer.sendEmail(['pepito@google.com'], 'to-clients');
    // notificationBLoc.notifyClients();
    cartBloc.addToCart(10);








})();