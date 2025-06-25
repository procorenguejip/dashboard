import { iconsImgs } from "../utils/images.js";
import { personsImgs } from "../utils/images.js";

export const navigationLinks = [
    
    {
        id: 1, 
        title: { descr: 'MAIN', image: iconsImgs.dashboard },
        items: [
            { id: 1, title: 'Dashboard', image: iconsImgs.dashboardoutline },
        ]
    },
    {
        id: 2, 
        title: { descr: 'SELLERS', image: iconsImgs.sellers },
        items: [
            { id: 1, title: 'Sell Brand', image: iconsImgs.marketplaceland },
            { id: 2, title: 'Sell Land', image: iconsImgs.sellersland },
        ]
    },
    {
        id: 3, 
        title: { descr: 'CATALOG', image: iconsImgs.catalog },
        items: [
            { id: 1, title: 'Categories', image: iconsImgs.category, link: '/categories' },
            { id: 2, title: 'Categories Options', image: iconsImgs.categoryoptions, link: '/categories/options' },
            { id: 3, title: 'Categories Options Value', image: iconsImgs.categoryoptionsvalues, link: '/categories/optionsvalues' },
            { id: 4, title: 'Categories Hierarchy', image: iconsImgs.products, link: '/products' },
            { id: 5, title: 'Products', image: iconsImgs.products },
            { id: 6, title: 'Products Options', image: iconsImgs.productsoptions },
            { id: 7, title: 'Products Options Value', image: iconsImgs.productsoptionsvalues },
            { id: 8, title: 'Products Groups', image: iconsImgs.productsgroups },
            { id: 9, title: 'Products Featured', image: iconsImgs.productsfeatured },
            { id: 10, title: 'Manufacturer ', image: iconsImgs.manufacturer },
        ]
    },
    {
        id: 4, 
        title: { descr: 'ORDERS MANAGEMENT', image: iconsImgs.invoice },
        items: [
            { id: 1, title: 'Orders', image: iconsImgs.invoice, link: '/orders' },
            { id: 2, title: 'Pendings Orders', image: iconsImgs.orderspendings, link: '/orders/pendings' },
            { id: 3, title: 'Archived Orders', image: iconsImgs.ordersarchived, link: '/orders/archived' },
            
        ]
    },
    {
        id: 5, 
        title: {descr: 'USERS SECURITY', image: iconsImgs.gearssystem },
        items: [
            { id: 1, title: 'Users', image: iconsImgs.security, link: '/users' },
            { id: 2, title: 'Permissions', image: iconsImgs.permissions, link: '/permissions' },
            { id: 3, title: 'Groups', image: iconsImgs.groups, link: '/groups' },
        ]
    },
    {
        id: 6, 
        title: {descr: 'CONFIGURATION', image: iconsImgs.gearssystem },
        items: [
            { id: 1, title: 'Account', image: iconsImgs.usersettings },
            { id: 2, title: 'Email', image: iconsImgs.emailsettings },
            { id: 3, title: 'System', image: iconsImgs.gearssystem },
        ]
    },
    {
        id: 7, 
        title: { descr: 'CACHE', image: iconsImgs.catalog },
        items: [
            { id: 1, title: 'Management Cache', image: iconsImgs.cache },
        ]
    },
    {
        id: 8, 
        title: { descr: 'CUSTOMERS MANAGEMENT', image: iconsImgs.catalog },
        items: [
            { id: 1, title: 'Customers', image: iconsImgs.customers, link: '/customers' },
            { id: 2, title: 'Customers Options', image: iconsImgs.customersoptions, link: '/customersoptions' },
            { id: 3, title: 'Customers Values', image: iconsImgs.customersoptionsvalues, link: '/customersoptionsvalues' },
            /*
            { id: 4, title: 'Sets', image: iconsImgs.products },
            */
        ]
    },
    {
        id: 9, 
        title: {descr: 'PAYMENTS', image: iconsImgs.catalog },
        items: [
            { id: 1, title: 'Payment methods', image: iconsImgs.payment, link: '/payments' },
        ]
    },
    {
        id: 10, 
        title: {descr: 'USER', image: iconsImgs.gearssystem },
        items: [
            { id: 1, title: 'Profile', image: iconsImgs.account },
            { id: 2, title: 'Logout', image: iconsImgs.logout },
        ]
    },
   /*
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'Transactions', image: iconsImgs.plane },
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
    { id: 5, title: 'Loans', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
      */
];

export const transactions = [
    {
        id: 11, 
        name: "Sarah Parker",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]