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
    { name: 'Microsoft Power Platform', icon: 'devicon-microsoft-plain' },
    { name: 'Power Apps', icon: 'devicon-powerapps-plain' },
    { name: 'Canvas Apps', icon: 'devicon-canvas-plain' },
    { name: 'Dynamics 365 Plugins', icon: 'devicon-dynamics-plain' },
    { name: 'Workflows', icon: 'devicon-workflow-plain' },
    { name: 'Customization and Configuration', icon: 'devicon-customization-plain' },
    { name: 'Power Automate Flows', icon: 'devicon-powerautomate-plain' },
    { name: 'Microsoft Azure', icon: 'devicon-azure-plain' },
    { name: 'Azure DevOps', icon: 'devicon-azuredevops-plain' },
    { name: 'Azure Data Factory', icon: 'devicon-azuredatafactory-plain' },
    { name: 'Azure Functions', icon: 'devicon-azurefunctions-plain' },
    { name: 'Azure Logic Apps', icon: 'devicon-azurelogicapps-plain' },
    { name: 'Azure Service Bus', icon: 'devicon-azureservicebus-plain' },
    { name: 'CI/CD Pipelines', icon: 'devicon-cicd-plain' },
    { name: 'SharePoint', icon: 'devicon-sharepoint-plain' },
    { name: 'ServiceNow', icon: 'devicon-servicenow-plain' },
    { name: 'Power BI', icon: 'devicon-powerbi-plain' },
    { name: 'Microsoft 365', icon: 'devicon-microsoft365-plain' },
    { name: 'Linux', icon: 'devicon-linux-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'Visual Studio', icon: 'devicon-visualstudio-plain' },
    { name: 'NetBeans', icon: 'devicon-netbeans-plain' },
    { name: 'Eclipse', icon: 'devicon-eclipse-plain' },
    { name: 'VSCode', icon: 'devicon-vscode-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'GitHub', icon: 'devicon-github-plain' },
    { name: 'GitHub Pages', icon: 'devicon-githubpages-plain' },
    { name: 'GitHub Actions', icon: 'devicon-githubactions-plain' },
    { name: 'Workflows', icon: 'devicon-workflow-plain' },
  ];
}
