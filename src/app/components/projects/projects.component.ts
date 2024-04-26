import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  
  projects = [
    {
      name: 'Library Management System',
      description: 'Developed with Pythons Tkinter tool, this desktop application streamlines library management, enabling efficient tracking of book issuances and returns. The comprehensive system includes a user-friendly interface with features such as profile management, book addition and return pages. Notably, the applications frame-switching functionality optimizes navigation, seamlessly replacing existing frames to enhance user experience. Additionally, an admin panel empowers administrators with privileges to modify user and book details, facilitating seamless library operations',
      imageUrl: '../assets/images/LMS.jpeg',
      githubLink: 'https://github.com/bhavinnirmal29/Library-Management-System-Python-',
      
    },
    {
      name: 'Elite Global Services',
      description: 'At Elite Global Services, I spearheaded the development of the companys inaugural web presence, overseeing both front-end and back-end implementation. Utilizing PHP and Materialized CSS, I crafted a dynamic website capable of monitoring admin views and seamlessly integrating user queries. Leveraging AJAX, the platform efficiently displays submitted queries, enhancing user engagement and streamlining administrative oversight.',
      imageUrl: '../assets/images/eg1.png',
      githubLink: 'https://bhavinnirmal29.github.io/Elite-Global-Services/index1.html',
    },
    {
      name: 'Online Passport and Visa Website',
      description: 'The Online Passport and Visa website, built with HTML and Materialize CSS, provides a user-friendly platform for passport and visa applications. With responsive design, applicants can easily access and complete forms on various devices. Materialize CSS enhances the websites visual appeal while client-side validation ensures accurate data entry. Comprehensive information and support options streamline the application process, offering a convenient experience for users.',
      imageUrl: '../assets/images/Passport.jpeg',
      githubLink: 'https://bhavinnirmal29.github.io/Online-Passport-and-Visa-Website/index.html',
    },
    {
      name: 'Blockchain',
      description: 'In my Django blockchain project, I build a system to create blocks and their corresponding hashes. Using Djangos framework, I create an easy-to-use interface for generating and managing blocks, each with its unique cryptographic hash. This project provides a simple yet insightful demonstration of blockchain basics, helping users understand how blocks are created and connected using hashing algorithms within a Django environment.',
      imageUrl: '../assets/images/blockchain.jpg',
      githubLink: 'https://github.com/bhavinnirmal29/Blockchain',
    },
    {
      name: 'Object Detection',
      description: 'Android application, crafted with Android Studio and Java, integrates cutting-edge technologies like TensorFlow and PyTorch. With a simple snap of your camera, the app captures images of fruits and vegetables. These images are swiftly analyzed by a pre-trained model, providing instant and accurate results displayed directly on your screen.',
      imageUrl: '../assets/images/ObjectDetection.png',
      githubLink: 'https://github.com/bhavinnirmal29/Fruits-Vegetable-Detection/',
    },
    {
      name: 'Mobile Shopping E-Commerce',
      description: 'Developed an E-Commerce website for mobile shopping, leveraging Materialize CSS and JSP to create responsive web pages across devices. Implemented Sign Up, Login, Checkout, and Contact forms with robust validation using Materialized CSS. Utilized MySQL database to securely store user data. The website showcases mobile phones categorized by brand (e.g., Lenovo, HTC, Apple) in visually appealing cards, each featuring a buy option. Users can seamlessly add and remove products from the cart, delivering a smooth E-Commerce experience.',
      imageUrl: '../assets/images/MobileShopping.jpeg',
      githubLink: 'https://github.com/bhavinnirmal29/Mobile-Shopping-E-Commerce',
    },
    {
      name: 'Employee Recommendation System',
      description: 'Developed in Python, the Employee Recommendation System automates candidate selection for job roles by leveraging Machine Learning and Natural Language Processing. By extracting and analyzing information from resumes, it predicts eligible candidates, reducing manual effort and time. This system empowers companies to efficiently compare resumes with a training dataset, generating a curated list of suitable candidates for specific designations',
      imageUrl: '../assets/images/ERS.jpeg',
      githubLink: 'https://github.com/bhavinnirmal29/Employee-Recommendation-System',
    },
    {
      name: 'E-Verify',
      description: 'E-Verify, built with Python Django, revolutionizes identity verification using advanced face recognition technology coupled with ID proof integration. Seamlessly merging biometric authentication with official documentation, this innovative platform ensures secure and reliable verification processes. By harnessing the power of facial recognition algorithms and ID validation, E-Verify provides businesses and organizations with a robust solution for authenticating individuals, safeguarding against identity fraud, and enhancing security measures',
      imageUrl: '../assets/images/EVerify.jpeg',
      githubLink: 'https://github.com/bhavinnirmal29/E-Verify',
    },
    {
      name: 'Finance Management System',
      description: 'My project enables online shopping with EMI payment options using Angular, TypeScript, and API controllers. Users can easily browse and purchase items with the convenience of EMI plans. With Angulars dynamic frontend and TypeScripts reliability, I ensure a seamless user experience. API controllers handle backend operations, ensuring secure and efficient payment processing. This project provides a user-friendly online shopping platform with flexible payment options.',
      imageUrl: '../assets/images/FEMI.jpeg',
      githubLink: 'https://github.com/bhavinnirmal29/Finance-Management-Project',
    },
    
    // Add more projects as needed
  ];
}
