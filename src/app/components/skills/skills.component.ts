import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  prog_skills=[
    {"icon": "devicon-python-plain-wordmark colored"},
    {"icon": "devicon-c-plain-wordmark colored"},
    {"icon": "devicon-cplusplus-plain-wordmark colored"},
    {"icon": "devicon-java-plain-wordmark colored"},
    {"icon": "devicon-kotlin-plain-wordmark colored"},
    {"icon": "devicon-go-plain-wordmark colored"},
    {"icon": "devicon-php-plain colored"},
    {"icon": "devicon-csharp-plain colored"},
    {"icon": "devicon-javascript-plain colored"},
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
      "icon": "devicon-oracle-original"
    },
    {
      "name":"MySQL",
      "icon": "devicon-mysql-plain"
    },
    {
      "name":"SQL Server",
      "icon": "devicon-microsoftsqlserver-plain"
    },
    {
      "name":"SQLite3",
      "icon": "devicon-sqlite-plain"
    },
    {
      "name":"MongoDB",
      "icon": "devicon-mongodb-plain"
    },
    {
      "name":"Cassandra",
      "icon": "devicon-cassandra-plain"
    },
    {
      "name":"PostgreSQL",
      "icon": "devicon-postgresql-plain"
    }
  ];
}
