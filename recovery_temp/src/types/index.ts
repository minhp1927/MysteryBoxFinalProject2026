export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface Testimonial {
    id: string;
    name: string;
    message: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password?: string;
}
