-- ============================================
-- Migration: V3__INSERT_DATA.sql
-- ============================================
INSERT INTO products
(name, description, price, stock, image_url, category, status, created_by)
VALUES
    (
        'Laptop Lenovo ThinkPad E14',
        'Laptop empresarial con procesador Intel i5, 16GB RAM y SSD 512GB',
        3299.99,
        10,
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
        'Laptops',
        'ACTIVE',
        1
    ),
    (
        'Mouse Logitech MX Master 3',
        'Mouse inalámbrico ergonómico para productividad',
        399.90,
        50,
        'https://images.pexels.com/photos/18105/pexels-photo.jpg',
        'Accesorios',
        'ACTIVE',
        1
    ),
    (
        'Teclado Mecánico Redragon Kumara',
        'Teclado mecánico compacto con switches rojos',
        249.90,
        30,
        'https://media.falabella.com/falabellaPE/114431617_04/w=800,h=800,fit=pad',
        'Accesorios',
        'ACTIVE',
        2
    ),
    (
        'Monitor LG UltraWide 29"',
        'Monitor UltraWide Full HD ideal para productividad y multitarea',
        1299.00,
        15,
        'https://http2.mlstatic.com/D_NQ_NP_2X_852201-MLA91748462348_092025-F.webp',
        'Monitores',
        'ACTIVE',
        1
    ),
    (
        'Auriculares Sony WH-1000XM4',
        'Auriculares inalámbricos con cancelación de ruido y gran autonomía',
        1299.00,
        20,
        'https://images.pexels.com/photos/3394667/pexels-photo-3394667.jpeg',
        'Accesorios',
        'ACTIVE',
        1
    ),
    (
        'Laptop Apple MacBook Air M2',
        'Laptop ultradelgada con procesador M2, 8GB RAM y SSD 256GB',
        5899.99,
        8,
        'https://www.apple.com/newsroom/images/product/mac/standard/Apple-WWDC22-MacBook-Air-hero-220606_big.jpg.large.jpg',
        'Laptops',
        'ACTIVE',
        2
    ),
    (
        'Teclado Logitech K380',
        'Teclado compacto bluetooth compatible con varios dispositivos',
        199.90,
        25,
        'https://http2.mlstatic.com/D_NQ_NP_2X_637410-MLA74651644318_022024-F.webp',
        'Accesorios',
        'ACTIVE',
        1
    ),
    (
        'Monitor Samsung Odyssey G5 27"',
        'Monitor curvo gaming QHD 144Hz con alta precisión de color',
        1599.00,
        10,
        'https://images.samsung.com/is/image/samsung/p6pim/pe/ls27cg552elxpe/gallery/pe-odyssey-g5-g55c-ls27cg552elxpe-539626583?$Q90_1920_1280_F_PNG$',
        'Monitores',
        'ACTIVE',
        2
    ),
    (
        'Mouse Razer DeathAdder V2',
        'Mouse gaming ergonómico con sensor óptico 20K DPI',
        499.90,
        35,
        'https://http2.mlstatic.com/D_NQ_NP_2X_840812-MPE93588649884_102025-F.webp',
        'Accesorios',
        'ACTIVE',
        1
    ),
    (
        'Laptop HP Pavilion 15',
        'Laptop para uso general con Intel i7, 16GB RAM y SSD 512GB',
        4399.00,
        12,
        'https://promart.vteximg.com.br/arquivos/ids/9100801-1000-1000/imageUrl_7.jpg?v=638881579663330000',
        'Laptops',
        'ACTIVE',
        1
    );

