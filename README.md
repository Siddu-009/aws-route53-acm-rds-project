# AWS Route53 + ACM + RDS E-Commerce Project

## Project Overview

This project demonstrates a complete AWS-hosted eCommerce application with:

* Route53 Domain Management
* ACM SSL Certificate
* Nginx Web Server
* AWS EC2
* AWS RDS MySQL
* GitHub Version Control
* CI/CD Ready Architecture

---

## Architecture

```text
User
 ↓
Route53
 ↓
Application Load Balancer
 ↓
EC2 (Nginx)
 ↓
E-Commerce Application
 ↓
RDS MySQL
```

---
## Objective

Deploy a website using a custom domain with HTTPS using AWS Route53, ACM, Application Load Balancer, EC2, and RDS MySQL.

---

# Prerequisites

* AWS Account
* Registered Domain Name
* Key Pair
* Basic Linux Knowledge

---

# Step 1: Create RDS MySQL Database

1. Open AWS Console.
2. Navigate to RDS.
3. Click Create Database.
4. Select Standard Create.
5. Select MySQL.
6. Select Free Tier.
7. Configure:

   * DB Name: ecommerce
   * Username: admin
   * Password: ********
8. Disable Public Access.
9. Create Database.
10. Wait until status becomes Available.

---

# Step 2: Launch EC2 Instance

1. Open EC2 Dashboard.
2. Launch Ubuntu Server.
3. Select t2.micro.
4. Attach Security Group.

Allow:

* SSH (22)
* HTTP (80)

Launch instance.

---

# Step 3: Install Nginx

Connect to EC2:

```bash
ssh -i key.pem ubuntu@PUBLIC-IP
```

Update packages:

```bash
sudo apt update
```

Install Nginx:

```bash
sudo apt install nginx -y
```

Start Nginx:

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

Verify:

```bash
sudo systemctl status nginx
```

---

# Step 4: Deploy Website

Create index file:

```bash
sudo nano /var/www/html/index.html
```

Add website content.

Verify:

```bash
curl localhost
```

Open:

```text
http://EC2-PUBLIC-IP
```

---

# Step 5: Connect EC2 to RDS

Install MySQL Client:

```bash
sudo apt install mysql-client -y
```

Connect:

```bash
mysql -h RDS-ENDPOINT -u admin -p
```

Create database:

```sql
CREATE DATABASE ecommerce;
```

Verify connection.

---

# Step 6: Configure Route53

1. Open Route53.
2. Create Hosted Zone.
3. Enter domain name.
4. Copy NS records.

Update nameservers in domain registrar.

Wait for DNS propagation.

---

# Step 7: Request ACM Certificate

1. Open Certificate Manager.
2. Request Public Certificate.
3. Add:

   * domain.com
   * *.domain.com
4. Select DNS Validation.
5. Create validation records in Route53.
6. Wait until certificate status becomes Issued.

---

# Step 8: Create Application Load Balancer

1. Open EC2.
2. Create Load Balancer.
3. Select Application Load Balancer.
4. Internet Facing.
5. Select at least two Availability Zones.
6. Configure Security Group:

Allow:

* HTTP 80
* HTTPS 443

---

# Step 9: Create Target Group

1. Create Target Group.
2. Type: Instance.
3. Protocol: HTTP.
4. Port: 80.
5. Register EC2 instance.

Verify:

Target Health = Healthy

---

# Step 10: Configure HTTPS

Listener Configuration:

HTTP : 80
→ Forward to tg-web

HTTPS : 443
→ ACM Certificate
→ Forward to tg-web

Important:

SSL termination occurs at ALB.

EC2 serves only HTTP on port 80.

---

# Step 11: Create Route53 Record

Create:

A Record

Alias = Yes

Target = Application Load Balancer

Save.

---

# Verification

Check:

http://domain.com

https://domain.com

Expected:

* Website loads successfully
* HTTPS lock icon visible
* ACM certificate active

---

# Troubleshooting

## 503 Service Unavailable

Cause:

Target Group unhealthy.

Solution:

* Start Nginx
* Check Security Groups
* Verify Health Check Path

---

## Target Unused

Cause:

Availability Zone not enabled in ALB.

Solution:

Enable EC2 subnet Availability Zone in Load Balancer.

---

## HTTPS Not Working

Cause:

* ACM not issued
* HTTPS listener missing
* Port 443 blocked

Solution:

* Attach ACM certificate
* Configure HTTPS listener
* Allow 443 in Security Group

---

# AWS Services Used

* Route53
* ACM
* EC2
* Nginx
* Application Load Balancer
* RDS MySQL
* Security Groups
* VPC

---

# Outcome

Successfully hosted a website using a custom domain with HTTPS and integrated it with a MySQL database using AWS managed services.

## Homepage

![Homepage](screenshots/homepage.png)

Features:

* Product Search
* Product Listing
* Responsive UI
* Navigation Menu

---

## Product Details Page

![Product Page](screenshots/product-page.png)

Features:

* Product Information
* Product Images
* Add To Cart

---

## Shopping Cart

![Cart](screenshots/cart-page.png)

Features:

* Cart Summary
* Total Calculation
* Checkout Button

---

## Checkout Page

![Checkout](screenshots/checkout-page.png)

Features:

* Customer Name
* Email Address
* Phone Number
* Delivery Address

---

## Payment Page

![Payment](screenshots/payment-page.png)

Features:

* UPI Payment
* Credit Card
* Debit Card
* Net Banking

---

## Order Success Page

![Success](screenshots/success-page.png)

Features:

* Order Confirmation
* Order ID Generation
* Confirmation Message

---

## AWS Services Used

* Amazon EC2
* Amazon RDS
* Amazon Route53
* AWS Certificate Manager (ACM)
* Application Load Balancer

---

## Deployment Steps

1. Launch EC2 Instance
2. Install Nginx
3. Deploy Application Files
4. Configure Route53
5. Create ACM Certificate
6. Attach SSL to Load Balancer
7. Configure RDS Database
8. Verify HTTPS Access

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Nginx
* AWS EC2
* AWS RDS
* Route53
* ACM

---

## Future Enhancements

* Docker
* Kubernetes (EKS)
* Jenkins CI/CD
* Prometheus
* Grafana
* AWS SES Email Notifications

---

## Author

Siddhardha Maddula

AWS | DevOps | Cloud Engineer

