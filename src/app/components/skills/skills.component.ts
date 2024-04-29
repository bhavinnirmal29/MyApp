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
}
