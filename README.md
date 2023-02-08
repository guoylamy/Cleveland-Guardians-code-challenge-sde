# Cleveland-Guardians-code-challenge

Using the JSON provided at the links below:
-	[Employees](https://cleguardians.app.box.com/s/t0wri0lv3tgwius0njjb1o83d07w216n) 
-	[Ticket Requests](https://cleguardians.app.box.com/s/vsgskzdimxmvgrjkxz5x1ulil9xi1q2q)
1.	Create a web page that will show an employee their own ticket request. Employees should be able to see if their request was approved, the number of tickets, the date of the game requested, the time they entered the ballpark, if they were at the game

2. Add a way to show requests from others in the same department. If the employee is an admin, they should be able to see requests from all departments. 

You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. 

Under client folder ```cd client```

Install dependencies by run ``` npm install ```

Start client by run ```npm start```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

There is an login page, where you can enter your employee_id:
<img width="590" alt="image" src="https://user-images.githubusercontent.com/22518367/217631506-e27ef21a-f87f-47a6-97a2-8bcde6765d15.png">

If the employee_id is not in the database, you need to enter a valid one:
<img width="656" alt="image" src="https://user-images.githubusercontent.com/22518367/217631883-e7a37f1a-a4b3-4663-baef-ab729c0de0d6.png">

If the employee_id is valid, the page will display the name of the employee and two tables. 

The first table shows the employee's own ticket request.

If the employee is not an admin, the second table shows requests from others in the same department.

<img width="908" alt="image" src="https://user-images.githubusercontent.com/22518367/217632034-2d261c12-5a9c-4663-8216-2c779072e9ae.png">

If the employee is an admin, the second table shows requests from others in all departments.
<img width="878" alt="image" src="https://user-images.githubusercontent.com/22518367/217633371-87d8295b-a676-4c3f-9b96-5e072e610c8e.png">
