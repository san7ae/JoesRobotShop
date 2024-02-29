<<<<<<< HEAD
import { Component } from '@angular/core';
import { IProduct } from './product.model';
=======
import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
>>>>>>> m8-start

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
<<<<<<< HEAD
  styleUrls: ['./catalog.component.css']
=======
  styleUrls: ['./catalog.component.css'],
>>>>>>> m8-start
})
export class CatalogComponent {
  products: any;
  filter: string = '';

<<<<<<< HEAD
  constructor(){
=======
  constructor(private cartSvc: CartService) {
>>>>>>> m8-start
    this.products = [
      {
        id: 1,
        description:
<<<<<<< HEAD
          "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
        name: "Large Cyclops",
        imageName: "head-big-eye.png",
        category: "Heads",
=======
          'A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.',
        name: 'Large Cyclops',
        imageName: 'head-big-eye.png',
        category: 'Heads',
>>>>>>> m8-start
        price: 1220.5,
        discount: 0.2,
      },
      {
        id: 17,
<<<<<<< HEAD
        description: "A spring base - great for reaching high places.",
        name: "Spring Base",
        imageName: "base-spring.png",
        category: "Bases",
=======
        description: 'A spring base - great for reaching high places.',
        name: 'Spring Base',
        imageName: 'base-spring.png',
        category: 'Bases',
>>>>>>> m8-start
        price: 1190.5,
        discount: 0,
      },
      {
        id: 6,
        description:
<<<<<<< HEAD
          "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
        name: "Articulated Arm",
        imageName: "arm-articulated-claw.png",
        category: "Arms",
=======
          'An articulated arm with a claw -- great for reaching around corners or working in tight spaces.',
        name: 'Articulated Arm',
        imageName: 'arm-articulated-claw.png',
        category: 'Arms',
>>>>>>> m8-start
        price: 275,
        discount: 0,
      },
      {
        id: 2,
        description:
<<<<<<< HEAD
          "A friendly robot head with two eyes and a smile -- great for domestic use.",
        name: "Friendly Bot",
        imageName: "head-friendly.png",
        category: "Heads",
=======
          'A friendly robot head with two eyes and a smile -- great for domestic use.',
        name: 'Friendly Bot',
        imageName: 'head-friendly.png',
        category: 'Heads',
>>>>>>> m8-start
        price: 945.0,
        discount: 0.2,
      },
      {
        id: 3,
        description:
<<<<<<< HEAD
          "A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",
        name: "Shredder",
        imageName: "head-shredder.png",
        category: "Heads",
=======
          'A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.',
        name: 'Shredder',
        imageName: 'head-shredder.png',
        category: 'Heads',
>>>>>>> m8-start
        price: 1275.5,
        discount: 0,
      },
      {
        id: 16,
        description:
<<<<<<< HEAD
          "A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",
        name: "Single Wheeled Base",
        imageName: "base-single-wheel.png",
        category: "Bases",
=======
          'A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.',
        name: 'Single Wheeled Base',
        imageName: 'base-single-wheel.png',
        category: 'Bases',
>>>>>>> m8-start
        price: 1190.5,
        discount: 0.1,
      },
      {
        id: 13,
<<<<<<< HEAD
        description: "A simple torso with a pouch for carrying items.",
        name: "Pouch Torso",
        imageName: "torso-pouch.png",
        category: "Torsos",
=======
        description: 'A simple torso with a pouch for carrying items.',
        name: 'Pouch Torso',
        imageName: 'torso-pouch.png',
        category: 'Torsos',
>>>>>>> m8-start
        price: 785,
        discount: 0,
      },
      {
        id: 7,
        description:
<<<<<<< HEAD
          "An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",
        name: "Two Clawed Arm",
        imageName: "arm-dual-claw.png",
        category: "Arms",
        price: 285,
        discount: 0,
      },
    
      {
        id: 4,
        description: "A simple single-eyed head -- simple and inexpensive.",
        name: "Small Cyclops",
        imageName: "head-single-eye.png",
        category: "Heads",
=======
          'An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.',
        name: 'Two Clawed Arm',
        imageName: 'arm-dual-claw.png',
        category: 'Arms',
        price: 285,
        discount: 0,
      },

      {
        id: 4,
        description: 'A simple single-eyed head -- simple and inexpensive.',
        name: 'Small Cyclops',
        imageName: 'head-single-eye.png',
        category: 'Heads',
>>>>>>> m8-start
        price: 750.0,
        discount: 0,
      },
      {
        id: 9,
        description:
<<<<<<< HEAD
          "An arm with a propeller -- good for propulsion or as a cooling fan.",
        name: "Propeller Arm",
        imageName: "arm-propeller.png",
        category: "Arms",
=======
          'An arm with a propeller -- good for propulsion or as a cooling fan.',
        name: 'Propeller Arm',
        imageName: 'arm-propeller.png',
        category: 'Arms',
>>>>>>> m8-start
        price: 230,
        discount: 0.1,
      },
      {
        id: 15,
<<<<<<< HEAD
        description: "A rocket base capable of high speed, controlled flight.",
        name: "Rocket Base",
        imageName: "base-rocket.png",
        category: "Bases",
=======
        description: 'A rocket base capable of high speed, controlled flight.',
        name: 'Rocket Base',
        imageName: 'base-rocket.png',
        category: 'Bases',
>>>>>>> m8-start
        price: 1520.5,
        discount: 0,
      },
      {
        id: 10,
<<<<<<< HEAD
        description: "A short and stubby arm with a claw -- simple, but cheap.",
        name: "Stubby Claw Arm",
        imageName: "arm-stubby-claw.png",
        category: "Arms",
=======
        description: 'A short and stubby arm with a claw -- simple, but cheap.',
        name: 'Stubby Claw Arm',
        imageName: 'arm-stubby-claw.png',
        category: 'Arms',
>>>>>>> m8-start
        price: 125,
        discount: 0,
      },
      {
        id: 11,
        description:
<<<<<<< HEAD
          "A torso that can bend slightly at the waist and equiped with a heat guage.",
        name: "Flexible Gauged Torso",
        imageName: "torso-flexible-gauged.png",
        category: "Torsos",
=======
          'A torso that can bend slightly at the waist and equiped with a heat guage.',
        name: 'Flexible Gauged Torso',
        imageName: 'torso-flexible-gauged.png',
        category: 'Torsos',
>>>>>>> m8-start
        price: 1575,
        discount: 0,
      },
      {
        id: 14,
<<<<<<< HEAD
        description: "A two wheeled base with an accelerometer for stability.",
        name: "Double Wheeled Base",
        imageName: "base-double-wheel.png",
        category: "Bases",
=======
        description: 'A two wheeled base with an accelerometer for stability.',
        name: 'Double Wheeled Base',
        imageName: 'base-double-wheel.png',
        category: 'Bases',
>>>>>>> m8-start
        price: 895,
        discount: 0,
      },
      {
        id: 5,
        description:
<<<<<<< HEAD
          "A robot head with three oscillating eyes -- excellent for surveillance.",
        name: "Surveillance",
        imageName: "head-surveillance.png",
        category: "Heads",
=======
          'A robot head with three oscillating eyes -- excellent for surveillance.',
        name: 'Surveillance',
        imageName: 'head-surveillance.png',
        category: 'Heads',
>>>>>>> m8-start
        price: 1255.5,
        discount: 0,
      },
      {
        id: 8,
<<<<<<< HEAD
        description: "A telescoping arm with a grabber.",
        name: "Grabber Arm",
        imageName: "arm-grabber.png",
        category: "Arms",
=======
        description: 'A telescoping arm with a grabber.',
        name: 'Grabber Arm',
        imageName: 'arm-grabber.png',
        category: 'Arms',
>>>>>>> m8-start
        price: 205.5,
        discount: 0,
      },
      {
        id: 12,
<<<<<<< HEAD
        description: "A less flexible torso with a battery gauge.",
        name: "Gauged Torso",
        imageName: "torso-gauged.png",
        category: "Torsos",
=======
        description: 'A less flexible torso with a battery gauge.',
        name: 'Gauged Torso',
        imageName: 'torso-gauged.png',
        category: 'Torsos',
>>>>>>> m8-start
        price: 1385,
        discount: 0,
      },
      {
        id: 18,
        description:
<<<<<<< HEAD
          "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
        name: "Triple Wheeled Base",
        imageName: "base-triple-wheel.png",
        category: "Bases",
=======
          'An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.',
        name: 'Triple Wheeled Base',
        imageName: 'base-triple-wheel.png',
        category: 'Bases',
>>>>>>> m8-start
        price: 700.5,
        discount: 0,
      },
    ];
  }

<<<<<<< HEAD
  getImageUrl(product: IProduct){
    if(!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getFilteredProducts(){
    return this.filter === ''
    ? this.products
    : this.products.filter((product: any) => product.category === this.filter);
=======
  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  getFilteredProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: any) => product.category === this.filter
        );
>>>>>>> m8-start
  }
}
