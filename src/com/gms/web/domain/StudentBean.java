package com.gms.web.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class StudentBean {
	@Getter @Setter
	private String num,id,name,ssn,regdate,phone,email,pass,subjects;
}
