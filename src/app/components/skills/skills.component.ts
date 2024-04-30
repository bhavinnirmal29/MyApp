import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  prog_skills=[
    {
      "icon": "devicon-python-plain-wordmark colored",
      "name":"Python"
    },
    {
      "icon": "devicon-c-plain-wordmark colored",
      "name":"C Programming Language"
    },
    {
      "icon": "devicon-cplusplus-plain-wordmark colored",
      "name":"C++ Programming Language"
    },
    {
      "icon": "devicon-java-plain-wordmark colored",
      "name":"Java"
    },
    {
      "icon": "devicon-kotlin-plain-wordmark colored",
      "name":"Kotlin"
    },
    {
      "icon": "devicon-go-plain-wordmark colored",
      "name": "GoLang"
    },
    {
      "icon": "devicon-php-plain colored",
      "name": "Php"
    },
    {
      "icon": "devicon-csharp-plain colored",
      "name": ".Net (C#)"
    },
    {
      "icon": "devicon-javascript-plain colored",
      "name": "JavaScript"
    }
  ];
  frameworks = [
    {
      "icon": "devicon-react-original colored",
      "name": "ReactJS"
    },
    {
      "icon": "devicon-angularjs-plain colored",
      "name": "AngularJS"
    },
  
    {
      "icon": "devicon-django-plain",
      "name": "Django (Python)"
    },
    {
      "icon": "devicon-spring-plain colored",
      "name": "Spring Framework (Java)"
    },
    {
      "icon": "devicon-dot-net-plain colored",
      "name": "Microsoft .NET Framework"
    },
    {
      "icon": "devicon-dotnetcore-plain colored",
      "name": ".Net Core"
    },
    {
      "icon": "devicon-dot-net-plain",
      "name": "ASP.Net"
    }
    
  ];
  database = [
    {
      "name":"Oracle SQL",
      "icon": "devicon-oracle-original colored"
    },
    {
      "name":"MySQL",
      "icon": "devicon-mysql-plain"
    },
    {
      "name":"SQL Server",
      "icon": "devicon-microsoftsqlserver-plain colored"
    },
    {
      "name":"SQLite3",
      "icon": "devicon-sqlite-plain"
    },
    {
      "name":"MongoDB",
      "icon": "devicon-mongodb-plain colored"
    },
    {
      "name":"Cassandra",
      "icon": "devicon-cassandra-plain"
    },
    {
      "name":"PostgreSQL",
      "icon": "devicon-postgresql-plain colored"
    }
  ];

  tech_skills = [
    { name: 'Microsoft Azure', icon: 'devicon-azure-plain' },
    { name: 'Azure DevOps', icon: 'devicon-azuredevops-plain colored' },
    { name: 'Linux', icon: 'devicon-linux-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Visual Studio', icon: 'devicon-visualstudio-plain colored' },
    { name: 'Eclipse', icon: 'devicon-eclipse-plain' },
    { name: 'VSCode', icon: 'devicon-vscode-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-plain' },
    { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored' },
    // { name: 'Workflows', icon: 'devicon-workflow-plain' },
    
  ];

  other_Skills = [
       { 
        name: 'Microsoft Power Platform', 
        icon: 'https://img.icons8.com/fluency/48/microsoft-power-apps.png',
        alt: "Microsoft Power Platform"
        },
       { 
        name: 'Dynamics 365', 
        icon: 'https://img.icons8.com/fluency/48/microsoft-dynamics-365.png',
        alt: "Dynamics 365"
       },
       { 
        name: 'Power Automate',
        icon: 'https://img.icons8.com/fluency/48/microsoft-power-automate-2020.png',
        alt: "Power Automate"
       },
       { 
        name: 'Azure Active Directory', 
        icon: 'https://img.icons8.com/fluency/48/azure-active-directory.png',
        alt:'Azure Active Directory'
       },
      {
        name: 'Azure Service Bus',
        icon: 'https://img.icons8.com/color/48/azure-service-bus--v1.png',
        alt: 'Azure Service Bus'
      },
      {
        name: 'SharePoint',
        icon: 'https://img.icons8.com/fluency/48/microsoft-sharepoint-2019.png',
        alt: 'SharePoint'
      },
      {
        name: 'Power BI',
        icon: 'https://img.icons8.com/color/48/power-bi-2021.png',
        alt: 'Power BI'
      },
      {
        name:'Microsoft 365',
        icon:'https://img.icons8.com/fluency/48/microsoft-365.png',
        alt: 'Microsoft 365'
      }
  ];
}
