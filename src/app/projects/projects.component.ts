import { Component } from '@angular/core';
import { Popup } from '../interfaces/popup';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  popups: Popup[] = [
    {
      title: 'ATTRACT',
      desc: 'A fullstack project for a web application that displays products, focused on bridging dynamic data rendering with high-performance Technical SEO. Responsive Next.js frontend showcasing gaming products with SEO-friendly pages, product cards, and a server-side API proxy.',
      img: 'project12.png',
      link: 'https://seo-product.vercel.app/'
    },
    {
      title: 'FreshCart',
      desc: 'A modern e-commerce platform built with Angular, featuring product catalog, shopping cart, user authentication, authorization, and secure checkout functionality.',
      img: 'project7.png',
      link: 'https://freshcart-rho-six.vercel.app/home'
    },
    {
      title: 'SkySnap',
      desc: 'This weather app provides real-time weather updates and a 5-day hourly forecast for any city. Featuring a sleek dark theme, it delivers intuitive navigation, detailed weather info, and a responsive design for seamless use across devices. Perfect for planning your day!',
      img: 'project8.png',
      link: 'https://sky-snap-ecru.vercel.app/'
    },
    {
      title: 'CRUD Operation MVC .NET',
      desc: 'Simple ASP.NET MVC project for managing students and departments. Includes CRUD operations, Entity Framework integration, and dynamic views for adding, editing, and listing records in a clean, functional dashboard interface.',
      img: 'project9.png',
      link: 'https://github.com/Maxiatef/CRUD_Students_Department_MVC.Net'
    },
    {
      title: 'Connect Four Game',
      desc: 'A simple C# Windows Forms Connect 4 game where two players or a player vs computer compete to connect four discs. Features smooth graphics, basic AI logic, and clean separation between UI and game logic. Perfect for learning C# and WinForms.',
      img: 'project2.png',
      link: 'https://github.com/Maxiatef/Connect_Four_WindowsForms'
    },
    {
      title: 'Cybersecurity Website',
      desc: 'This is a demonstration of a modern cybersecurity website, built using Bootstrap to provide a clean and responsive user interface.',
      img: 'project10.png',
      link: 'https://bootstrap-project-ten-ruddy.vercel.app/'
    },
    {
      title: 'CRUD GraphQL API with Apollo Server',
      desc: 'This project features a robust GraphQL API built with Apollo Server, designed for managing a content database around games, reviews, and authors.',
      img: 'project4.png',
      link: 'https://github.com/Maxiatef/GraphQL_CRUD'
    },
    {
      title: 'Real Time Chat Website',
      desc: 'A real-time chat application built with Node.js and Socket.io, allowing users to communicate in real-time with a modern UI.',
      img: 'project11.png',
      link: 'https://github.com/Maxiatef/Chatroom'
    },
    {
      title: 'E-Commerce Web Application',
      desc: 'E-Commerce Web Application using MERN Stack and Microservices Architecture',
      img: 'project6.png',
      link: 'https://github.com/Andrewaziz99/E-Commerce_Web_Application'
    }
  ];
  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
