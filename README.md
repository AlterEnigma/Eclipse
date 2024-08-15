# Eclipse
The Eclipse project main repository.

## Workflow Documentation
The Eclipse project repository contains a series of automation workflows for different services, namely cloud based automation services like IFTTT and Make (previously Integromat) and also self-hosted platforms like N8N. N8N is currently the primary automation software for this repository, so you will find most of the up to date workflows and templates for this particular service.

### On IFTTT and Make Workflows
These workflows are given as-is and are almost certainly outdated, with no guarantee of them working on the latest versions of their respective services. These were mostly created as initial automation experiments, so expect a lot of inconsistencies with these workflows.

## How to Use N8N Workflows
First, you need to know that for this particular project, the Eclipse Project, no publicly accessible instance of the service is provided, which in this case means that you will need to self-host N8N using your own hardware and network infrastructure.

- Setting up N8N Server

This section is entirely up to you and your specific needs and requirements. However, I'd recommend to setup your N8N server instance with Docker-compose in queue mode, for scalability reasons, if your hardware supports it. You can consult the following N8N documentation URLs to inform yourself of the possible benefits that you can have with this setup:

https://docs.n8n.io/hosting/scaling/queue-mode/

Here's the documentation URL for information relating to docker-compose for N8N:

https://docs.n8n.io/hosting/installation/server-setups/docker-compose/

- Importing Workflows to your N8N Instance

Since workflows in this repository are given as individual JSON files, the easiest way to get workflows into your N8N instance is to simply download the raw JSON from this repository and then import it to your N8N instance by using the "Import From File" function when you are in your workflow canvas. Once you import the workflow, you should see all of the connected nodes and there will only be certain things that you will need to change in order to get it to work as per your requirements if you wish to maintain the original functionality (such as changing webhook URLs or changing URLs in trigger nodes, modifying existing code, etc.).
