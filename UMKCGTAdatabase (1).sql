
/* Schema Creation*/
create schema UMKCGTAdatabase;
use UMKCGTAdatabase;

/* Accounts table */
create table Accounts (
	umkcID VARCHAR(65),
    isAdmin BOOLEAN,
    email varchar(50),
    last_login DATETIME,
    Primary Key (umkcID)
    );

INSERT INTO Accounts
(umkcID, isAdmin, email, last_login) VALUES
('A5C9B9023FB08D94ED11BA1A031882DDE06970B15A29FD17859081A6B07E86D9', FALSE, 'imcrm@umsystem.edu', '2022-04-05 20:17:00'),
('F6D6947C352CC0DC6801277A592478097FB5CBDF4D83D3FB762060919FB398B2', FALSE, 'ab7c8@umsystem.edu', '2022-04-09 18:00:00'),
('F32384EC2F730258D520901D98A66A954ED5F9EEB7BA706296686E452B4FB2B7', FALSE, 'abuik@umsystem.edu', '2022-03-24 09:10:05'),
('48379309F46860E25045D244A33D2CC5ED9DD73460C5E3600CC03DEAF8CA49AC', FALSE, 'biued@umsystem.edu', '2022-03-19 06:04:12'),
('2942E3DF40E8CE63017477B79C7B3FA80559133596B9A71028AB0220B4B4CDA8', FALSE, 'jef3f@umsystem.edu', '2022-02-27 15:19:34'),
('D95550AB31A56C78A64541CE79F7FBDA2CC64DD19613BAFA982EC1386C0289D5', FALSE, 'k9hf4@umsystem.edu', '2022-02-19 23:47:52'),
('EC556F801A5BA4F9AFBBC02031B50BCCFFD977868C41A1D240EB061F69B069A4', FALSE, 'w98ds@umsystem.edu', '2022-02-19 20:58:23'),
('90819A03C9B13E267DA6B820A4FCF969E4E8729696A089079C5A3BEA8854048D', FALSE, 'cn76f@umsystem.edu', '2021-08-08 18:45:29'),
('BC7A9691BE7E695A9C83E1A981299348EB43E58DB53C4407C1B0F6B4C23C2970', FALSE, 'dn293@umsystem.edu', '2021-04-05 11:23:48'),
('BA996DC79417ADFA4AB330CEA35E336AA5CCB8AC56E3B2CF1EA0B24AAEE95065', FALSE, 'na83j@umsystem.edu', '2021-04-20 10:11:54');

SELECT * FROM Accounts;

/* Students Table */
create table Students (
	umkcID INT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    contactno VARCHAR(10),
    email VARCHAR(50),
    certified BOOLEAN,
    isAdmin BOOLEAN,
    Primary Key (umkcID)
);

INSERT INTO Students
(umkcID, fname, lname, contactno, email, certified) VALUES
(16303387, 'Iradiel', 'Torres', '9139876543', 'abcd@umsystem.edu', FALSE),
(16240105, 'Alec', 'Beckman', '9131234567', 'zyxw@umsystem.edu', FALSE),
(16972302, 'Brage', 'Warwick', '9132093839', 'abuik@umsystem.edu', FALSE),
(16192898, 'Guntram', 'Quirke', '9131827123', 'biued@umsystem.edu', FALSE),
(16238022, 'Liam', 'George', '9132387320', 'jef3f@umsystem.edu', FALSE),
(16120873, 'Gunda', 'Blau', '9139843730', 'k9hf4@umsystem.edu', FALSE),
(16380223, 'Wenzel', 'Leclair', '9132370944', 'w98ds@umsystem.edu', FALSE),
(16280958, 'Larissa', 'Strat', '8163207322', 'cn76f@umsystem.edu', FALSE),
(16827340, 'Sylvester', 'Sly', '8164309843', 'dn293@umsystem.edu', FALSE),
(16239840, 'Isa', 'Marmo', '8164039834', 'na83j@umsystem.edu', FALSE);

SELECT * FROM Students;

/* Applications table */
create table Applications (
	applicationID INT NOT NULL AUTO_INCREMENT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    umkcID INT,
	email VARCHAR(50),
    currLevel VARCHAR(20),
    gradSemester VARCHAR(15),
	GPA DECIMAL(3,2),
    hrsCompleted INT,
    degree VARCHAR(15),
    currMajor VARCHAR(30),
    position VARCHAR(20),
    certified BOOLEAN,
    courseID INT(5),
    appDate DATE,
    certificationTerm VARCHAR(15),
    prevDegree BOOLEAN,
    Primary Key (applicationID)
);

INSERT INTO Applications (applicationID, fname, lname, umkcID, email, currLevel, gradSemester, 
	GPA, hrsCompleted, degree, currMajor, position, certified, courseID, appDate, certificationTerm, prevDegree) VALUES
(1, 'Iradiel', 'Torres', 16300123, 'abcd@umsystem.edu', 'senior', 'Fall 2022', 3.5, 120, "Associate's", 'Computer Science',
	'both', FALSE, 12719, '2022-04-09', 'N/A', TRUE),
    (2, 'Alec', 'Beckman', 16200321, 'zyxw@umsystem.edu', 'senior', 'Spring 2022', 4.0, 135, "None", 'Computer Science', 
	'grader', FALSE, 12719, '2022-04-11', 'N/A', FALSE),
    (3, 'Brage', 'Warwick', 16972302, 'abuik@umsystem.edu', 'senior', 'Spring 2022', 3.8, 140, "None", 'Computer Science', 
	'lab instructor', TRUE, 12719, '2022-04-11', 'Fall 2019', FALSE),
    (4, 'Guntram', 'Quirke', 16192898, 'biued@umsystem.edu', 'sophomore', 'Spring 2024', 3.6, 80, "None", 'Computer Science',
    'grader', FALSE, 11207, '2022-04-11', 'N/A', FALSE),
    (5, 'Liam', 'George', 16238022, 'jef3f@umsystem.edu', 'junior', 'Fall 2023', 3.2, 100, "None", 'Computer Science',
    'lab instructor', TRUE, 14469, '2022-04-11', 'Spring 2021', FALSE),
    (6, 'Gunda', 'Blau', 16120873, 'k9hf4@umsystem.edu', 'sophomore', 'Spring 2024', 3.7, 85, "Associate's", 'Computer Science',
    'lab instructor', TRUE, 14470, '2022-04-11', 'Fall 2021', TRUE),
    (7, 'Wenzel', 'Leclair', 16380223, 'w98ds@umsystem.edu', 'senior', 'Fall 2022', 3.0, 125, "None", 'Computer Science',
    'both', TRUE, 14470, '2022-04-11', 'Spring 2020', FALSE),
    (8, 'Larissa', 'Strat', 16280958, 'cn76f@umsystem.edu', 'senior', 'Spring 2022', 4.0, 130, "Associate's", 'Computer Science',
    'both', TRUE, 15230, '2022-04-11', 'Spring 2020', TRUE),
    (9, 'Sylvester', 'Sly', 16827340, 'dn293@umsystem.edu', 'freshman', 'Spring 2025', 3.5, 15, "None", 'Computer Science',
    'grader', FALSE, 11207, '2022-04-11', 'N/A', FALSE),
    (10, 'Isa', 'Marmo', 16239840, 'na83j@umsystem.edu', 'senior', 'Spring 2022', 3.6, 125, "None", 'Computer Science',
    'both', TRUE, 15230, '2022-04-11', 'Fall 2019', FALSE);

SELECT * FROM Applications;

/* Courses table */
create table Courses (
	courseID INT(5),
    courseNo VARCHAR(10),
    courseName VARCHAR(80),
    section VARCHAR(30),
    days VARCHAR(20),
    times VARCHAR(20),
    modality VARCHAR(25),
    room VARCHAR(30),
    instructor VARCHAR(40),
    Primary Key (courseID)
);

INSERT INTO Courses (courseID, courseNo, courseName, section, days, times, 
	modality, room, instructor) VALUES
(11207, 'CS101', 'Problem Solving and Programming I', '0001-LEC Regular', 'MoWeFr', '1:00PM - 1:50PM', 
	'In-Person', 'Haag Hall-Rm 00302', 'May Zein el din'),
(16776, 'CS101', 'Problem Solving and Programming I', '0002-SI Regular', 'Fr', '2:00PM - 2:50PM', 
	'In-Person', 'Education-Rm 00119', 'Sumanth Bandaru Venkata Naga Sai'),
(12118, 'CS101', 'Problem Solving and Programming I', '0003-LEC Regular', 'MoWeFr', '12:00PM - 12:50PM', 
	'In-Person', 'Haag Hall Hall-Rm 00109', 'May Zein el din'),
(14469, 'CS101L', 'Problem Solving and Programming I Lab', '001L-LAB Regular', 'Tu', '8:30AM - 11:00AM', 
	'Online', 'N/A', 'May Zein el din'),
(14470, 'CS101L', 'Problem Solving and Programming I Lab', '002L-LAB Regular', 'We', '7:00PM - 9:30PM', 
	'Online', 'N/A', 'May Zein el din'),
(15230, 'CS101L', 'Problem Solving and Programming I Lab', '003L-LAB Regular', 'Fr', '8:30AM - 11:00AM', 
	'Online', 'N/A', 'May Zein el din'),
(11208, 'CS191', 'Discrete Structures I', '0001-LEC Regular', 'MoWeFr', '10:00AM - 10:50AM', 
	'In-Person', 'Haag Hall-Rm 00313', 'Joan Gladbach'),
(11209, 'CS191', 'Discrete Structures I', '0002-LEC Regular', 'MoWeFr', '11:00AM - 11:50AM', 
	'In-Person', 'Royall Hall-Rm 00206', 'Joan Gladbach'),
(12611, 'CS201L', 'Problem Solving and Programming II Lab', '001L-LAB Regular', 'Mo', '1:00PM - 3:30PM', 
	'Online', 'N/A', 'May Zein el din'),
(12612, 'CS201L', 'Problem Solving and Programming II Lab', '002L-LAB Regular', 'We', '7:00PM - 9:30PM', 
	'Online', 'N/A', 'May Zein el din'),
(13908, 'CS201L', 'Problem Solving and Programming II Lab', '003L-LAB Regular', 'Fr', '4:00PM - 6:30PM', 
	'Online', 'N/A', 'May Zein el din'),
(11210, 'CS201R', 'Problem Solving and Programming II', '0002-LEC Regular', 'TuTh', '1:00PM - 2:15PM', 
	'In-Person', 'Haag Hall-Rm 00109', 'May Zein el din'),
(14463, 'CS201R', 'Problem Solving and Programming II', '0004-LEC Regular', 'TuTh', '1:00PM - 2:15PM', 
	'In-Person', 'Education-Rm 00243', 'Joan Gladbach'),
(16690, 'CS201R', 'Problem Solving and Programming II', '0005-LEC Regular', 'TuTh', '4:00PM - 5:15PM', 
	'In-Person', 'Haag Hall-Rm 00302', 'Joan Gladbach'),
(12302, 'CS281R', 'Introduction to Computer Architecture and Organization', '0001-LEC Regular', 'TuTh', '7:00PM - 8:15PM', 
	'In-Person', 'Education-Rm 00118', 'Reza Jafari'),
(12719, 'CS291', 'Discrete Structures II', '0002-LEC Regular', 'TuTh', '2:30PM - 3:45PM', 
	'In-Person', 'Katz Hall-Rm 00209', 'Wajeb Gharibi'),
(13870, 'CS291', 'Discrete Structures II', '0004-LEC Regular', 'MoWeFr', '11:00AM - 11:50AM', 
	'In-Person', 'Katz Hall-Rm 00209', 'Wajeb Gharibi'),
(13869, 'CS303', 'Data Structures', '0002-LEC Regular', 'TuTh', '4:00PM - 5:15PM', 
	'In-Person', 'Education-Rm 00118', 'Ahmed Alkinani'),
(11255, 'CS304WI', 'Ethics and Professionalism', '0001-LEC Regular', 'Asynchronous', 'Asynchronous', 
	'Online', 'N/A', 'Brian Hare'),
(16446, 'CS320', 'Data Communications and Networking', '0001-LEC Regular', 'TuTh', '4:00PM - 5:15PM', 
	'In-Person', 'MNLC-Rm 452', 'Farid Nait-Abdesselam'),
(17075, 'CS349', 'Java Programming with Applications', '0001-LEC Regular', 'TuTh', '10:00AM - 11:15AM', 
	'In-Person', 'Haag Hall-Rm 00302', 'Syed Jawad Shah'),
(11211, 'CS394R', 'Applied Probability', '0001-LEC Regular', 'Asynchronous', 'Asynchronous', 
	'Online', 'N/A', 'Zachary Theiss'),
(12610, 'CS404', 'Introduction to Algorithms and Complexity', '0001-LEC Regular', 'TuTh', '11:30AM - 12:45PM', 
	'In-Person', 'Education-Rm 00119', 'Wajeb Gharibi'),
(11212, 'CS431', 'Introduction to Operating Systems', '0001-LEC Regular', 'TuTh', '7:00PM - 8:15PM', 
	'In-Person', 'Royall Hall-Rm 00104', 'William Yerkes'),
(13164, 'CS441', 'Programming Languages: Design and Implementation', '0001-LEC Regular', 'TuTh', '11:30AM - 12:45PM', 
	'In-Person', 'Education-Rm 00033', 'Brian Hare'),
(12613, 'CS449', 'Foundations of Software Engineering', '0001-LEC Regular', 'TuTh', '2:30PM - 3:45PM', 
	'In-Person', 'Education-Rm 00119', 'Dianxiang Xu'),
(11213, 'CS451R', 'Software Engineering Capstone', '0001-LEC Regular', 'MoWeFr', '1:00PM - 1:50PM', 
	'In-Person', 'Education-Rm 00119', 'Syed Jawad Shah'),
(12721, 'CS456', 'Human Computer Interface', '0001-LEC Regular', 'Asynchronous', 'Asynchronous', 
	'Online', 'N/A', 'Alexa Summers'),
(13312, 'CS461', 'Introduction to Artificial Intelligence', '0001-LEC Regular', 'TuTh', '1:00PM - 2:15PM', 
	'In-Person', 'Education-Rm 00033', 'Brian Hare'),
(13563, 'CS465R', 'Introduction to Statistical Learning', '0001-LEC Regular', 'MoWe', '7:00PM - 8:15PM', 
	'In-Person', 'MNLC-Rm 452', 'Rexa Derakhshani'),
(11214, 'CS470', 'Introduction to Database Management Systems', '0001-LEC Regular', 'TuTh', '5:30PM - 6:45PM', 
	'In-Person', 'Haag Hall-Rm 00118', 'William Yerkes'),
(16757, 'CS479', 'Introduction to Computer Vision', '0001-LEC Regular', 'MoWe', '5:30PM - 6:45PM', 
	'In-Person', 'Education-Rm 00119', 'Zhu Li');

SELECT * FROM Courses;


/* Student courses table (courses students have taken) */
create table Student_courses(
	umkcID INT,
    courseID INT(5),
    grade VARCHAR(3),
    Primary Key (umkcID, courseID)
    );

INSERT INTO Student_courses (umkcID, courseID, grade) VALUES
(16303387, 11207, 'B'),
(16303387, 14469, 'C'),
(16303387, 11208, 'B'),
(16303387, 12611, 'C'),
(16303387, 11210, 'C'),
(16303387, 12302, 'A'),
(16303387, 12719, 'C'),
(16303387, 13869, 'A'),
(16303387, 11255, 'C'),
(16303387, 16446, 'B'),
(16303387, 17075, 'C'),

(16240105, 16776, 'A'),
(16240105, 14470, 'A'),
(16240105, 11209, 'A'),
(16240105, 12611, 'A'),
(16240105, 11210, 'A'),
(16240105, 12302, 'A'),
(16240105, 12719, 'A'),
(16240105, 13869, 'A'),
(16240105, 11255, 'A'),
(16240105, 16446, 'A'),
(16240105, 17075, 'A'),
(16240105, 11211, 'A'),
(16240105, 12610, 'A'),
(16240105, 11212, 'A'),
(16240105, 13164, 'A'),
(16240105, 12613, 'A'),

(16972302, 16776, 'B'),
(16972302, 14469, 'B'),
(16972302, 11208, 'A'),
(16972302, 12612, 'A'),
(16972302, 14463, 'A'),
(16972302, 12302, 'A'),
(16972302, 12719, 'A'),
(16972302, 13869, 'A'),
(16972302, 11255, 'A'),
(16972302, 16446, 'A'),
(16972302, 17075, 'A'),
(16972302, 11211, 'A'),
(16972302, 12610, 'A'),
(16972302, 11212, 'A'),
(16972302, 13164, 'A'),
(16972302, 12613, 'A'),
(16972302, 11213, 'A'),
(16972302, 12721, 'A'),
(16972302, 13312, 'A'),
(16972302, 13563, 'A'),
(16972302, 11214, 'A'),
(16972302, 16757, 'A'),

(16192898, 12118, 'A'),
(16192898, 15230, 'B'),
(16192898, 11209, 'A'),
(16192898, 13908, 'B'),
(16192898, 16690, 'C'),
(16192898, 12302, 'B'),
(16192898, 13870, 'A'),

(16238022, 16776, 'C'),
(16238022, 14469, 'A'),
(16238022, 11208, 'A'),
(16238022, 12612, 'A'),
(16238022, 14463, 'B'),
(16238022, 12302, 'B'),
(16238022, 12719, 'C'),
(16238022, 13869, 'A'),
(16238022, 11255, 'A'),
(16238022, 16446, 'A'),
(16238022, 17075, 'D'),
(16238022, 11211, 'B'),
(16238022, 12610, 'B'),

(16120873, 11207, 'A'),
(16120873, 14469, 'C'),
(16120873, 11209, 'B'),
(16120873, 13908, 'C'),
(16120873, 11210, 'B'),
(16120873, 12302, 'A'),
(16120873, 13870, 'A'),
(16120873, 13869, 'A'),
(16120873, 11255, 'A'),

(16380223, 11207, 'C'),
(16380223, 14469, 'C'),
(16380223, 11209, 'C'),
(16380223, 12611, 'A'),
(16380223, 14463, 'C'),
(16380223, 12302, 'A'),
(16380223, 12719, 'A'),
(16380223, 13869, 'B'),
(16380223, 11255, 'B'),
(16380223, 16446, 'B'),
(16380223, 17075, 'B'),
(16380223, 11211, 'B'),
(16380223, 12610, 'B'),
(16380223, 11212, 'A'),
(16380223, 13164, 'C'),
(16380223, 12613, 'A'),
(16380223, 11213, 'C'),
(16380223, 12721, 'D'),

(16280958, 16776, 'A'),
(16280958, 15230, 'A'),
(16280958, 11209, 'A'),
(16280958, 12611, 'A'),
(16280958, 16690, 'A'),
(16280958, 12302, 'A'),
(16280958, 13870, 'A'),
(16280958, 13869, 'A'),
(16280958, 11255, 'A'),
(16280958, 16446, 'A'),
(16280958, 17075, 'A'),
(16280958, 11211, 'A'),
(16280958, 12610, 'A'),
(16280958, 11212, 'A'),
(16280958, 13164, 'A'),
(16280958, 12613, 'A'),
(16280958, 11213, 'A'),
(16280958, 12721, 'A'),
(16280958, 13312, 'A'),
(16280958, 13563, 'A'),

(16827340, 16776, 'A'),
(16827340, 14469, 'B'),
(16827340, 11208, 'A'),

(16239840, 16776, 'A'),
(16239840, 14470, 'A'),
(16239840, 11208, 'B'),
(16239840, 13908, 'C'),
(16239840, 11210, 'A'),
(16239840, 12302, 'A'),
(16239840, 12719, 'A'),
(16239840, 13869, 'A'),
(16239840, 11255, 'A'),
(16239840, 16446, 'A'),
(16239840, 17075, 'B'),
(16239840, 11211, 'B');

SELECT * FROM student_courses;

## Adds foreign key constraints to student_courses table (may not work on some devices)
ALTER TABLE student_courses
ADD FOREIGN KEY (umkcID) REFERENCES Students(umkcID),
ADD FOREIGN KEY (courseID) REFERENCES Courses(courseID);





## Query for looking up students with a specific course in Applications page 
SELECT fname, lname, umkcID, applicationID FROM Applications WHERE courseID = 12719;

## Query to lookup entire application based on student ID in Student Landing Page
SELECT * FROM Applications WHERE umkcID = 16303387;

## Query to filter best applicants by GPA
SELECT * FROM Applications WHERE courseID = 12719
ORDER BY GPA DESC;

## Query to filter best applications by GPA
SELECT * FROM Applications
WHERE courseID = 12719
ORDER BY GPA DESC;

## Query to filter best applicants by GPA and course grades for a specific course
SELECT a.applicationID, a.fname, a.lname, a.umkcID, a.GPA, a.hrsCompleted, 
	a.degree, a.position, a.certified, a.courseID, s.grade
FROM Applications a
INNER JOIN Student_courses s ON a.umkcID = s.umkcID
WHERE a.courseID = 12719
ORDER BY GPA DESC;

