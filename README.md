# Learn With Tonima - ID System

**Learn With Tonima ID System** is a versatile and efficient solution designed to manage, store, and track various types of user IDs, including student IDs, member IDs, and other organizational IDs. This system helps educational institutions, companies, and other organizations streamline their record-keeping process and efficiently manage user data.

This project aims to provide a user-friendly and customizable ID management system that can adapt to different needs, whether it is for students, members, or employees. The system supports dynamic search, real-time updates, and error handling when no matches are found for IDs.

---

## Features:

- **Student ID Management**: Generate and manage unique student IDs for tracking and organizing students.
- **Member ID Management**: Create and manage member IDs for various organizational members (employees, clients, etc.).
- **Customizable Fields**: Easily customizable fields for different ID types, such as Student ID, Member ID, Exam ID, etc.
- **Search Functionality**: Quickly search for IDs based on user input, displaying relevant results in real-time.
- **Error Handling**: If no matching ID is found, an appropriate error message is displayed to the user.
- **Dynamic Data**: Fetches and updates data from Google Sheets, allowing easy management of user IDs and information.
- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring usability across different screen sizes.

---

## Website:
For more details about the project, visit the official blog page:  
[Khubayb Hossain Blog](https://khubaybhossain.blogspot.com/)

---

## How to Use:

### 1. Clone the Repository
Start by cloning the project to your local machine or server.

```bash
git clone https://github.com/khubaybv2/learn-with-tonima-id-system.git

2. Set Up the Project
HTML: The main structure of the system is built using HTML.
CSS: The styles for the layout and user interface are defined in style.css.
JavaScript: All the functionality (search, data handling, error checking, etc.) is managed by script.js.
3. Customize the Configuration
Open the index.html file and modify the fields to match your organization's needs (e.g., custom fields for student, member, or employee IDs).
If you want to store and retrieve ID data from Google Sheets, follow the Google Sheets API setup guide to get your API keys and configure them in the script.js file.
Update any other configurations as needed (such as form fields, labels, etc.).
4. Deploy the System
Deploy the project on your preferred platform:

Local Server: If running on a local server (e.g., using localhost), you can simply open the HTML file in a browser.
Render / GitHub Pages: For cloud deployment, you can deploy the project on platforms like Render, GitHub Pages, or any static site hosting service.
5. Using the ID System
Open the index.html file in a browser.
Use the dynamic search functionality to look up specific IDs.
The system will display the corresponding ID details, such as the student or member name, exam ID, or other relevant data.
If no match is found, an error message will appear, informing the user.
Technologies Used:
HTML: For the structure and layout of the ID system.
CSS: For styling the interface and making the design responsive.
JavaScript: For dynamic functionality, including data retrieval, search handling, and error display.
Google Sheets API: To manage and update data (such as student/member IDs) in real-time.
Google Sheets (CSV): To store and manage the user data for easy integration and updates.
Project Setup:
1. Clone the Repository:
git clone https://github.com/khubaybv2/learn-with-tonima-id-system.git
2. Configure Google Sheets API (Optional):
Go to the Google Sheets API Quickstart page to get your API key.
Replace the API key and sheet ID in script.js to fetch data from your Google Sheets.
You can configure the columns of the Google Sheets to match the IDs you want to manage (e.g., Student ID, Name, Exam Number).
3. Customize the Fields:
Modify the input fields and corresponding IDs in the HTML file based on your needs (e.g., Student ID, Member ID, etc.).
Update the labels and any form instructions as necessary.
4. Deploy and Run:
Upload the project files to your chosen hosting platform or run locally.
Open the index.html file in any browser to start using the system.
Contributions:
Feel free to fork this repository, contribute, or report any issues you encounter. Pull requests are welcome!

License:
This project is open-source and available under the MIT License.

Author:
Khubayb Hossain

Personal Blog: Khubayb Hossain Blog
GitHub: Khubayb Hossain GitHub
For any queries or collaboration inquiries, feel free to reach out!
