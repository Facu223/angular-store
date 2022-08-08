
export interface product {
    id: number;
    name: string;
    price: number;
    img: string
    description: string
}

export const products: Array<product> = [
    {
        id: 1,
        name: "Apple iPhone 11",
        price: 348.95,
        img: '../assets/iphone11.png',
        description: "El Apple iPhone 11 es el sucesor del iPhone Xr para el 2019. Este año el iPhone 11 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. El iPhone 11 cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad."
    },
    {
        id: 2,
        name: "Samsung Galaxy A03",
        price: 125,
        img: '../assets/galaxya03.png',
        description: "El Galaxy A03 combina la potencia de procesamiento Octa-core con hasta 3 GB o 4 GB de RAM, dependiento el modelo. Sin importar la tarea, tendrás un rendimiento rápido y eficiente. Podrás disfrutar de los mejores contenidos con 32 GB, 64 GB o 128 GB de almacenamiento interno."
    },
    {
        id: 3,
        name: "Apple iPhone 12 Pro Max",
        price: 999,
        img: '../assets/iphon12promax.png',
        description: "El Pro Max es de 6.7 pulgadas OLED super retina XDR y resolución de 2778 x 1284. Este es el iPhone más grande hasta la fecha y con mejor resolución, pero no es tanta la diferencia si lo comparamos con el iPhone 12 Pro. El chip A14 Bionic es uno de los componentes más avanzados de la familia del iPhone 12."
    },
    {
        id: 4,
        name: "LG K41S",
        price: 99.99,
        img: '../assets/lg2.png',
        description: "El LG K41S monta un panel HD+ de 6,5 pulgadas con relación de aspecto 20:9 y un notch en forma de gota para la cámara frontal, detalle que le diferencia de los otros dos modelos. La compañía no especifica qué procesador ha incluido en estos tres nuevos modelos, pero en este caso, se trata de un chipset de ocho núcleos a 2,0 GHz, con 3 GB de RAM y 32 GB de almacenamiento."
    },
]