document.addEventListener('DOMContentLoaded', () => {
    const mindmapData = {
        "name": "DevOps Roadmap",
        "children": [
            { "name": "1. Understand the Basics of DevOps" },
            {
                "name": "2. Learn Programming and Scripting",
                "children": [
                    { "name": "Python" },
                    { "name": "JavaScript" },
                    { "name": "Bash/Shell Scripting" }
                ]
            },
            {
                "name": "3. Get Comfortable with Linux/Unix Systems",
                "children": [
                    { "name": "Commands and File Management" },
                    { "name": "System Monitoring and Process Management" },
                    { "name": "Networking Basics" }
                ]
            },
            {
                "name": "4. Understand Version Control Systems",
                "children": [
                    { "name": "Git" }
                ]
            },
            {
                "name": "5. Master CI/CD",
                "children": [
                    { "name": "Jenkins" },
                    { "name": "GitLab CI/CD" },
                    { "name": "CircleCI or Travis CI" }
                ]
            },
            {
                "name": "6. Learn Configuration Management and IaC",
                "children": [
                    { "name": "Ansible" },
                    { "name": "Terraform" },
                    { "name": "Chef or Puppet" }
                ]
            },
            {
                "name": "7. Get Familiar with Containers and Orchestration",
                "children": [
                    { "name": "Docker" },
                    { "name": "Kubernetes" },
                    { "name": "Docker Compose" }
                ]
            },
            {
                "name": "8. Understand Cloud Services",
                "children": [
                    { "name": "AWS" },
                    { "name": "Azure or GCP" }
                ]
            },
            {
                "name": "9. Learn Monitoring and Logging",
                "children": [
                    { "name": "Prometheus" },
                    { "name": "Grafana" },
                    { "name": "ELK Stack" }
                ]
            },
            {
                "name": "10. Develop Soft Skills",
                "children": [
                    { "name": "Communication" },
                    { "name": "Problem-Solving" },
                    { "name": "Automation Thinking" }
                ]
            },
            {
                "name": "11. Build Real-World Projects",
                "children": [
                    { "name": "Personal Projects" },
                    { "name": "Contribute to Open Source" }
                ]
            },
            {
                "name": "12. Learn Networking Basics and Advanced Concepts",
                "children": [
                    {
                        "name": "Basics",
                        "children": [
                            { "name": "Networking Fundamentals" },
                            { "name": "Network Configuration" },
                            { "name": "Troubleshooting" }
                        ]
                    },
                    {
                        "name": "Advanced Concepts",
                        "children": [
                            { "name": "Network Security" },
                            { "name": "Cloud Networking" },
                            { "name": "Networking in Containers" }
                        ]
                    }
                ]
            }
        ]
    };
 
    const container = document.getElementById('mindmap');
    const mindmap = new Mindmap(container, mindmapData, {
        theme: 'default',
        layout: 'radial',
        nodeWidth: 180,
        nodeHeight: 50
    });
 
    mindmap.render();
});
