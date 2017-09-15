-- ************************
-- 2017.08.02
-- [1]MAJOR_TAB
-- [2]SUBJECT_TAB
-- [3]MEMBER_TAB
-- [4]STUDENT_TAB
-- [5]GRADE_TAB
-- [6]BOARD_TAB
-- ************************
SHOW TABLES; --마리아DB의 테이블 조회
-- ************************
-- [1]MAJOR_TAB
-- 2017.08.02
-- article_seq,id,title,
-- content,hitcount,regdate
-- ************************
-- DDL
select * from major;

CREATE TABLE 
	Major
(
	major_id VARCHAR(10),
	title VARCHAR(10),
	subj_id VARCHAR(10),
	member_id VARCHAR(10),
	PRIMARY KEY(major_id)
);
DROP TABLE Major;
-- DML
INSERT INTO Major(major_id,title)
VALUES('','');
-- ************************
-- [2]SUBJECT_TAB
-- 2017.08.02
-- subj_id,title,major_id
-- ************************
-- DDL
CREATE TABLE 
	Subject
(
	subj_id VARCHAR(10),
	title VARCHAR(10),
	major_id VARCHAR(10),
	PRIMARY KEY(subj_id)
);
-- DML
INSERT INTO 
	Subject
(
	subj_id,
	title,
	major_id)
VALUES
(
	'',
	'',
	''
);
-- ********************
-- [3]MEMBER_TAB
-- 2017.08.02
-- member_id,name,password,
-- ssn,regdate,major_id,
-- phone,email,profile
-- *******************
-- DDL
CREATE TABLE 
	Member
(
	member_id VARCHAR(10),
	name VARCHAR(10),
	password VARCHAR(10),
	ssn VARCHAR(15),
	regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
	phone VARCHAR(20),
	email VARCHAR(20),
	profile VARCHAR(20),
	PRIMARY KEY(member_id)
);
DROP TABLE Member;
-- DML
INSERT INTO 
	Member
(
	member_id,
	name,
	password,
	ssn,
	regdate,
	phone,
	email,
	profile)
VALUES
(
	'mankiew',
	'맨큐',
	'1',
	'701201-123456',
	now(),
	'010-1234-5678',
	'mankiew@test.com',
	'mankiew.jpg'
);

SELECT * FROM member;
SELECT COUNT(*) AS count FROM Member;
DELETE FROM 
	Member 
WHERE 
	member_id='mankiew';
-- ************************
-- [4]PROF_TAB
-- 2017.08.02
-- member_id,salary
-- ************************
-- DDL
CREATE TABLE 
	Prof
(
	member_id VARCHAR(10),
	salary VARCHAR(10),
	PRIMARY KEY(member_id)
);
-- DML
INSERT INTO 
	Prof
(
	member_id,
	salary
)
VALUES
(
	'gogh',
	'5000'
);

-- ************************
-- [5]GRADE_TAB
-- 2017.08.02
-- grade_seq,score,exam_date,
-- subj_id,member_id
-- ************************
-- DDL
CREATE TABLE 
	Grade
(
	grade_seq INT NOT NULL AUTO_INCREMENT,
	score VARCHAR(3),
	exam_date VARCHAR(12),
	subj_id VARCHAR(10),
	member_id VARCHAR(10),
	PRIMARY KEY(grade_seq)
);

DROP TABLE Grade;
-- DML
SELECT * FROM Grade;
INSERT INTO Grade(grade_seq,score,exam_date,subj_id,member_id)
VALUES(seq.nextval,'90','2017-03','java','hong');

-- ************************
-- [6]BOARD_TAB
-- 2017.08.02
-- article_seq,id,title,
-- content,hitcount,regdate
-- ************************
-- DDL
CREATE TABLE 
	Board
(
	article_seq INT NOT NULL AUTO_INCREMENT,
	id VARCHAR(10),
	title VARCHAR(20),
	content VARCHAR(100),
	hitcount INT,
	regdate DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(article_seq)
);
DROP TABLE Board;
-- DML
INSERT INTO 
	Board
(
	article_seq,
	id,
	title,
	content,
	hitcount,
	regdate
)
VALUES
(
	seq.nextval,
	'kim',
	'대중을 있는',
	'주는 얼마나 크고 품에 대중을 있는',
	0,
	SYSDATE
);
SELECT * FROM Board;

--뷰생성
CREATE VIEW Student (id,name,ssn,regdate,phone,email,pass,subjects)
AS
(
  SELECT
    a.member_id id, 
    a.name name,
    RPAD(SUBSTRING(a.ssn,1,8),14,'*') ssn,
    DATE_FORMAT(a.regdate,'%Y-%m-%d') regdate,
    a.phone phone,
    a.email email,
    a.password pass,
    GROUP_CONCAT(s.title,',') subjects
  FROM 
    Member a
      LEFT  JOIN Major m
        ON a.member_id LIKE m.member_id
      LEFT JOIN Subject s
        ON m.subj_id LIKE s.subj_id
      GROUP BY 
       a.member_id, a.name, a.ssn,
       a.regdate, a.phone, a.email
  ORDER BY regdate
);
DROP VIEW STUDENT;

--Left Join
SELECT *
FROM
	Member a
	LEFT JOIN Major m
		ON a.member_id LIKE m.member_id
	LEFT JOIN Subject s
		ON m.subj_id LIKE s.subj_id
	GROUP BY
		a.member_id, a.name, a.ssn,
		a.regdate, a.phone, a.email
	ORDER BY
		a.regdate;