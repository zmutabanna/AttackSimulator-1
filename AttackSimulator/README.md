# AttackSimulator
AttackSimulator generates datasets for use in the testing of security products. Unlike other log simulators, the Attack Simulator simulates controlled scenarios, such as sequence of events involving the same actor/IP address.
Use AttackSimulator to generate event data and attack data for simulating real world datasets. At Securonix, we use AttackSimulator to mimic real world datasets for testing our content. 

Use this README to quickly get started with AttackSimulator. 

## Table of Contents
### Introduction to AttackSimulator
### Getting Started
### Prerequisites
### Installation
### Usage
### Wiki
### Examples
#### Super Simple Example
#### Available Templates
##### Windows Template
### Troubleshoot AttackSimulator
### Version
### License


## Getting Started

### Prerequisites
You need to have Tomcat and MySQL. To deploy AttackSimulator, create the database schema and delpoy the war file on Tomcat.

### Simulating an Organizational IT environment
When generating data feeds, AttackSimulator uses templates to set up a fictitious organizational environment. Each template uses variables that get substituted at runtime. You provide values for your organization's environment, such as the number of employees, network address class for internal network, DMZ devices and countries from which traffic is observed. Using your input, the AttackSimulator generates logs that match your environment.

### Logging in to AttackSimulator for the First Time

## Version
BETA 1

## License
This project is licensed under the Apache 2.0 License - see the LICENSE.md file for details
